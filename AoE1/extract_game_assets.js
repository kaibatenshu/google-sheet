const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const DRS_DATA2 = 'C:\\Program Files\\XArena\\Game\\AOE1R\\data2\\Interfac.drs';
const DRS_DATA = 'C:\\Program Files\\XArena\\Game\\AOE1R\\data\\Interfac.drs';

function extractFile(drsPath, tableType, targetId) {
  const buf = fs.readFileSync(drsPath);
  const numTables = buf.readUInt32LE(56);
  let offset = 64;
  for (let i = 0; i < numTables; i++) {
    const type = buf.subarray(offset, offset + 4).toString('ascii');
    const tOffset = buf.readUInt32LE(offset + 4);
    const numFiles = buf.readUInt32LE(offset + 8);
    offset += 12;
    if (type === tableType) {
      for (let j = 0; j < numFiles; j++) {
        const id = buf.readUInt32LE(tOffset + j * 12);
        if (id === targetId) {
          const fileOffset = buf.readUInt32LE(tOffset + j * 12 + 4);
          const fileSize = buf.readUInt32LE(tOffset + j * 12 + 8);
          return buf.subarray(fileOffset, fileOffset + fileSize);
        }
      }
    }
  }
  return null;
}

// 1. Load JASC Palette (50500)
const palRaw = extractFile(DRS_DATA, 'anib', 50500).toString('ascii');
const palLines = palRaw.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('JASC') && l !== '0100' && l !== '256');
const palette = [];
for (let i = 0; i < 256; i++) {
  if (i < palLines.length) {
    const parts = palLines[i].split(/\s+/).map(Number);
    palette.push([parts[0], parts[1], parts[2], 255]);
  } else {
    palette.push([0, 0, 0, 255]);
  }
}
const playerColorBase = 16; // Player 1 Blue

// 2. Decoder for SLP Frames
function decodeSLPFrame(slp, frameIdx) {
  const numFrames = slp.readUInt32LE(4);
  if (frameIdx >= numFrames) return null;
  const fHeaderOffset = 32 + frameIdx * 32;
  const cmdTableOffset = slp.readUInt32LE(fHeaderOffset);
  const outTableOffset = slp.readUInt32LE(fHeaderOffset + 4);
  const width = slp.readInt32LE(fHeaderOffset + 16);
  const height = slp.readInt32LE(fHeaderOffset + 20);
  
  const rgba = Buffer.alloc(width * height * 4, 0); // Transparent by default
  
  for (let y = 0; y < height; y++) {
    const leftMargin = slp.readUInt16LE(outTableOffset + y * 4);
    if (leftMargin === 0x8000) continue; // Entire row transparent
    
    let x = leftMargin;
    let ptr = slp.readUInt32LE(cmdTableOffset + y * 4);
    
    while (x < width) {
      const cmd = slp.readUInt8(ptr++);
      if (cmd === 0x0F) break; // End of row
      
      const low2 = cmd & 0x03;
      const low4 = cmd & 0x0F;
      
      if (low2 === 0x00) {
        // Lesser draw
        const count = cmd >> 2;
        for (let i = 0; i < count; i++) {
          const colorIdx = slp.readUInt8(ptr++);
          if (x < width) {
            const p = (y * width + x) * 4;
            const c = palette[colorIdx];
            rgba[p] = c[0]; rgba[p+1] = c[1]; rgba[p+2] = c[2]; rgba[p+3] = 255;
            x++;
          }
        }
      } else if (low2 === 0x01) {
        // Lesser skip
        let count = cmd >> 2;
        if (count === 0) count = slp.readUInt8(ptr++);
        x += count;
      } else if (low4 === 0x02) {
        // Greater draw
        const next = slp.readUInt8(ptr++);
        const count = ((cmd & 0xF0) << 4) + next;
        for (let i = 0; i < count; i++) {
          const colorIdx = slp.readUInt8(ptr++);
          if (x < width) {
            const p = (y * width + x) * 4;
            const c = palette[colorIdx];
            rgba[p] = c[0]; rgba[p+1] = c[1]; rgba[p+2] = c[2]; rgba[p+3] = 255;
            x++;
          }
        }
      } else if (low4 === 0x03) {
        // Greater skip
        const next = slp.readUInt8(ptr++);
        const count = ((cmd & 0xF0) << 4) + next;
        x += count;
      } else if (low4 === 0x06) {
        // Player color draw
        let count = cmd >> 4;
        if (count === 0) count = slp.readUInt8(ptr++);
        for (let i = 0; i < count; i++) {
          const pColor = slp.readUInt8(ptr++);
          const colorIdx = playerColorBase + (pColor & 0x0F);
          if (x < width) {
            const p = (y * width + x) * 4;
            const c = palette[colorIdx];
            rgba[p] = c[0]; rgba[p+1] = c[1]; rgba[p+2] = c[2]; rgba[p+3] = 255;
            x++;
          }
        }
      } else if (low4 === 0x07) {
        // Fill
        let count = cmd >> 4;
        if (count === 0) count = slp.readUInt8(ptr++);
        const colorIdx = slp.readUInt8(ptr++);
        const c = palette[colorIdx];
        for (let i = 0; i < count; i++) {
          if (x < width) {
            const p = (y * width + x) * 4;
            rgba[p] = c[0]; rgba[p+1] = c[1]; rgba[p+2] = c[2]; rgba[p+3] = 255;
            x++;
          }
        }
      } else if (low4 === 0x0A) {
        // Fill player color
        let count = cmd >> 4;
        if (count === 0) count = slp.readUInt8(ptr++);
        const pColor = slp.readUInt8(ptr++);
        const colorIdx = playerColorBase + (pColor & 0x0F);
        const c = palette[colorIdx];
        for (let i = 0; i < count; i++) {
          if (x < width) {
            const p = (y * width + x) * 4;
            rgba[p] = c[0]; rgba[p+1] = c[1]; rgba[p+2] = c[2]; rgba[p+3] = 255;
            x++;
          }
        }
      } else if (low4 === 0x0B) {
        // Shadow draw
        let count = cmd >> 4;
        if (count === 0) count = slp.readUInt8(ptr++);
        x += count;
      } else if (low4 === 0x0E) {
        // Extended
        const high = cmd >> 4;
        if (high === 0 || high === 1) {
          const count = slp.readUInt8(ptr++);
          x += count;
        } else {
          x++;
        }
      } else {
        x++;
      }
    }
  }
  return { width, height, rgba };
}

// 3. Chuẩn xác 100% bản đồ Icon từng loại lính trong AoE 1 (Rise of Rome 1.0b)
const UNIT_FRAME_MAP = {
  // Nông dân & Phù thủy
  villager: 0,
  priest: 1,

  // Doanh trại (BB)
  clubman: 2,
  axeman: 3,
  short_swordsman: 4,
  broad_swordsman: 5,
  long_swordsman: 27,
  legion: 49,
  slinger: 56,

  // Trường bắn (BA)
  bowman: 6,
  improved_bowman: 7,
  composite_bowman: 8,
  chariot_archer: 28, // Cung R
  horse_archer: 29,   // Cung C
  heavy_horse_archer: 48, // Cung C thần (viền vàng)
  elephant_archer: 47, // Voi tên

  // Chuồng ngựa (BL)
  scout_cavalry: 31,  // Ngựa dò
  cavalry: 11,        // Ngựa chém
  heavy_cavalry: 13,  // Ngựa chém giáp
  cataphract: 54,     // Chém thần (viền vàng)
  camelry: 57,        // Lạc đà
  chariot: 10,        // Sọc đơn (ngựa kéo xe cầm giáo)
  scythe_chariot: 59, // Đạp đôi (viền vàng)
  war_elephant: 12,   // Voi húc
  armored_elephant: 58, // Voi thần bọc giáp (viền vàng)

  // Viện Hàn Lâm (BY)
  hoplite: 16,        // Lính xiên thường
  phalanx: 17,        // Xiên nâng cấp
  centurion: 50,      // Xiên thần Centurion (viền vàng)

  // Xưởng pháo (BK)
  stone_thrower: 14,  // Cẩu đá nhỏ
  catapult: 15,       // Catapult
  heavy_catapult: 51, // Cẩu đá to Heavy Catapult (viền vàng)
  ballista: 9,        // Pháo tép Ballista
  helepolis: 53,      // Pháo liên thanh Helepolis (viền vàng)

  // Hải quân (Dock)
  fishing_boat: 18,
  fishing_ship: 20,
  scout_ship: 22,
  war_galley: 23,
  trireme: 24,
  catapult_trireme: 26,
  juggernaught: 30,
  fire_galley: 60
};

async function extractAllIcons() {
  const targetDir = path.join(__dirname, 'images', 'units');
  const backupDir = path.join(targetDir, 'backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  // Extract from data2 SLP 50730
  const slp = extractFile(DRS_DATA2, ' pls', 50730);
  if (!slp) {
    throw new Error('Failed to find SLP 50730 in ' + DRS_DATA2);
  }

  console.log('Extracting game icons from authentic SLP 50730 (61 frames)...');
  for (const [unitId, frameIdx] of Object.entries(UNIT_FRAME_MAP)) {
    const dec = decodeSLPFrame(slp, frameIdx);
    if (!dec) {
      console.warn(`Frame ${frameIdx} for ${unitId} not found!`);
      continue;
    }

    const outPath = path.join(targetDir, `${unitId}.png`);
    // Upscale 3x (150x150) using nearest neighbor so it remains crystal clear pixel art
    await sharp(dec.rgba, { raw: { width: dec.width, height: dec.height, channels: 4 } })
      .resize(150, 150, { kernel: sharp.kernel.nearest })
      .png()
      .toFile(outPath);

    console.log(`Saved authentic icon: ${unitId}.png (Frame ${frameIdx})`);
  }

  console.log('Successfully updated all unit icons with authentic game graphics!');
}

extractAllIcons().catch(err => {
  console.error('Error during extraction:', err);
  process.exit(1);
});
