const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ICONS_DIR = path.join(__dirname, 'images', 'icons');
fs.mkdirSync(ICONS_DIR, { recursive: true });

// Flood-fill transparency from outer borders & clean isolated background noise
async function cleanBackground(inputBuffer, clearHoles = false) {
  const { data, info } = await sharp(inputBuffer).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  
  const visited = new Uint8Array(w * h);
  const queue = [];
  
  // Seed with border pixels
  for (let x = 0; x < w; x++) {
    queue.push([x, 0]);
    queue.push([x, h - 1]);
  }
  for (let y = 0; y < h; y++) {
    queue.push([0, y]);
    queue.push([w - 1, y]);
  }
  
  while (queue.length > 0) {
    const [x, y] = queue.pop();
    if (x < 0 || x >= w || y < 0 || y >= h) continue;
    const idx = y * w + x;
    if (visited[idx]) continue;
    visited[idx] = 1;
    
    const p4 = idx * 4;
    const isDark = data[p4] <= 20 && data[p4+1] <= 20 && data[p4+2] <= 20;
    const isTrans = data[p4+3] === 0;
    
    if (isTrans || isDark) {
      data[p4+3] = 0; // Make transparent
      
      // Expand 4-connectivity
      if (x + 1 < w && !visited[idx + 1]) queue.push([x + 1, y]);
      if (x - 1 >= 0 && !visited[idx - 1]) queue.push([x - 1, y]);
      if (y + 1 < h && !visited[idx + w]) queue.push([x, y + 1]);
      if (y - 1 >= 0 && !visited[idx - w]) queue.push([x, y - 1]);
    }
  }
  
  // Optional: clear dark interior holes (e.g. inside wheel spokes)
  if (clearHoles) {
    for (let i = 0; i < w * h; i++) {
      const p4 = i * 4;
      if (data[p4+3] > 0 && data[p4] <= 22 && data[p4+1] <= 22 && data[p4+2] <= 22) {
        data[p4+3] = 0;
      }
    }
  }
  
  // Post-pass: Remove isolated dark edge pixels (speckles)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      const p4 = idx * 4;
      if (data[p4+3] > 0 && data[p4] <= 25 && data[p4+1] <= 25 && data[p4+2] <= 25) {
        let transNeighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || nx >= w || ny < 0 || ny >= h) {
              transNeighbors++;
            } else {
              const nIdx = (ny * w + nx) * 4;
              if (data[nIdx+3] === 0) transNeighbors++;
            }
          }
        }
        if (transNeighbors >= 4) {
          data[p4+3] = 0;
        }
      }
    }
  }
  
  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

async function processIcon(inputSource, outName, size = 24, clearHoles = false) {
  let inBuf;
  if (typeof inputSource === 'string') {
    inBuf = fs.readFileSync(inputSource);
  } else {
    inBuf = inputSource;
  }
  
  const cleanedBuf = await cleanBackground(inBuf, clearHoles);
  const trimmed = await sharp(cleanedBuf).trim().toBuffer();
  const trimmedMeta = await sharp(trimmed).metadata();
  
  const maxDim = size - 2;
  const scale = Math.min(maxDim / trimmedMeta.width, maxDim / trimmedMeta.height);
  const newW = Math.max(1, Math.round(trimmedMeta.width * scale));
  const newH = Math.max(1, Math.round(trimmedMeta.height * scale));
  
  const resized = await sharp(trimmed)
    .resize(newW, newH, { kernel: sharp.kernel.nearest })
    .toBuffer();
  
  const left = Math.round((size - newW) / 2);
  const top = Math.round((size - newH) / 2);
  
  const finalBuf = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{ input: resized, top, left }])
  .png()
  .toBuffer();
  
  fs.writeFileSync(path.join(ICONS_DIR, outName), finalBuf);
  console.log(`Exported clean icon: ${outName}`);
}

// Generate pixel lightning bolt in AoE1 golden palette (24x24)
async function generatePixelBolt(outName, size = 24) {
  const boltGrid = [
    "........###....",
    ".......#####...",
    "......#####....",
    ".....#####.....",
    "....#####......",
    "...###########.",
    "....#########..",
    "......######...",
    ".....######....",
    "....######.....",
    "...######......",
    "....####.......",
    ".....##........",
    "......#........"
  ];
  const bW = 15, bH = 14;
  const rgba = Buffer.alloc(size * size * 4, 0);
  const offsetX = Math.floor((size - bW) / 2);
  const offsetY = Math.floor((size - bH) / 2);
  
  for (let y = 0; y < bH; y++) {
    for (let x = 0; x < bW; x++) {
      if (boltGrid[y][x] === '#') {
        const px = offsetX + x;
        const py = offsetY + y;
        const idx = (py * size + px) * 4;
        
        // Golden lighting with specular yellow center and warm amber/bronze edge
        if (x >= 5 && x <= 8 && y >= 3 && y <= 8) {
          // Bright white-yellow core
          rgba[idx] = 255; rgba[idx+1] = 255; rgba[idx+2] = 180; rgba[idx+3] = 255;
        } else if (y === 0 || y === bH - 1 || x === 0 || x === bW - 1) {
          // Dark bronze outline
          rgba[idx] = 160; rgba[idx+1] = 100; rgba[idx+2] = 0; rgba[idx+3] = 255;
        } else {
          // Vibrant AoE1 gold
          rgba[idx] = 255; rgba[idx+1] = 205; rgba[idx+2] = 20; rgba[idx+3] = 255;
        }
      }
    }
  }
  const outPath = path.join(ICONS_DIR, outName);
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } }).png().toFile(outPath);
  console.log(`Generated ${outName}`);
}

async function run() {
  const hudDir = path.join(__dirname, 'test_extracted', 'hud');
  const btnDir = path.join(__dirname, 'test_extracted', 'buttons');
  
  // 1. Food (Thực)
  await processIcon(path.join(hudDir, '50731_frame_2_33x23.png'), 'food.png', 24);
  
  // 2. Wood (Gỗ)
  await processIcon(path.join(hudDir, '50731_frame_0_33x23.png'), 'wood.png', 24);
  
  // 3. Gold (Vàng)
  await processIcon(path.join(hudDir, '50731_frame_3_33x23.png'), 'gold.png', 24);
  
  // 4. Stone (Đá)
  await processIcon(path.join(hudDir, '50731_frame_1_33x23.png'), 'stone.png', 24);
  
  // 5. HP (Máu) - Already generated perfectly
  // 6. Attack (Công): AoE1 Sword rotated 45 deg
  const cleanedSword = await cleanBackground(fs.readFileSync(path.join(hudDir, '50731_frame_7_33x23.png')));
  const rotatedSword = await sharp(cleanedSword)
    .trim()
    .rotate(45, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  await processIcon(rotatedSword, 'attack.png', 24);
  
  // 7. Melee Armor (Giáp cận chiến): AoE1 Silver Chestplate
  await processIcon(path.join(hudDir, '50731_frame_8_33x23.png'), 'melee_armor.png', 24);
  
  // 8. Pierce Armor (Giáp chống tên): AoE1 Bronze Shield
  await processIcon(path.join(btnDir, '50729_frame_19.png'), 'pierce_armor.png', 24);
  
  // 9. Range (Tầm xa): AoE1 Bow & Quiver (50729_frame_51)
  await processIcon(path.join(btnDir, '50729_frame_51.png'), 'range.png', 24);
  
  // 10. Train Time (Thời gian huấn luyện): AoE1 Glass Hourglass
  await processIcon(path.join(hudDir, '50731_frame_9_33x23.png'), 'train_time.png', 24);
  
  // 11. LOS (Tầm nhìn) - Already generated perfectly
  // 12. Building (Nơi tạo): AoE1 Construction Trowel
  await processIcon(path.join(hudDir, '51000_frame_0_21x24.png'), 'building.png', 24);
  
  // 13. Speed (Tốc độ): AoE1 Wooden Chariot Wheel with clear spokes
  await processIcon(path.join(btnDir, '50729_frame_14.png'), 'speed.png', 24, true);
  
  // 14. Bonus (Đặc tính): Golden Lightning Bolt
  await generatePixelBolt('bonus.png', 24);
  
  console.log('--- ALL 14 ICONS REFINED AND EXPORTED ---');
}

run().catch(console.error);
