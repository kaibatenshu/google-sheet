const fs = require('fs');
const zlib = require('zlib');

// Read empires.dat
const datPath = 'C:\\Program Files\\XArena\\Game\\AOE1R\\data2\\empires.dat';
const raw = fs.readFileSync(datPath);
const decomp = zlib.inflateRawSync(raw);

function parsePEStrings(buf) {
  const peOffset = buf.readUInt32LE(0x3C);
  const numSections = buf.readUInt16LE(peOffset + 6);
  const optHeaderSize = buf.readUInt16LE(peOffset + 20);
  const sectionHeadersStart = peOffset + 24 + optHeaderSize;
  const rsrcRva = buf.readUInt32LE(peOffset + 136);
  function rvaToRaw(rva) {
    for (let i = 0; i < numSections; i++) {
      const sOffset = sectionHeadersStart + i * 40;
      const vRva = buf.readUInt32LE(sOffset + 12);
      const rawOffset = buf.readUInt32LE(sOffset + 20);
      const rawSize = buf.readUInt32LE(sOffset + 16);
      if (rva >= vRva && rva < vRva + rawSize) return rawOffset + (rva - vRva);
    }
    return 0;
  }
  const rsrcRaw = rvaToRaw(rsrcRva);
  const strings = {};
  if (!rsrcRaw) return strings;
  const rootNamed = buf.readUInt16LE(rsrcRaw + 12);
  const rootId = buf.readUInt16LE(rsrcRaw + 14);
  for (let i = 0; i < rootNamed + rootId; i++) {
    const entryOffset = rsrcRaw + 16 + i * 8;
    const typeId = buf.readUInt32LE(entryOffset);
    const subOffset = buf.readUInt32LE(entryOffset + 4);
    if (typeId === 6 && (subOffset & 0x80000000)) {
      const typeDirOffset = rsrcRaw + (subOffset & 0x7FFFFFFF);
      const numBlocks = buf.readUInt16LE(typeDirOffset + 12) + buf.readUInt16LE(typeDirOffset + 14);
      for (let j = 0; j < numBlocks; j++) {
        const bEntry = typeDirOffset + 16 + j * 8;
        const blockId = buf.readUInt32LE(bEntry);
        const bSub = buf.readUInt32LE(bEntry + 4);
        if (bSub & 0x80000000) {
          const langDirOffset = rsrcRaw + (bSub & 0x7FFFFFFF);
          const lEntry = langDirOffset + 16;
          const dataEntryOffset = rsrcRaw + (buf.readUInt32LE(lEntry + 4) & 0x7FFFFFFF);
          const dataRva = buf.readUInt32LE(dataEntryOffset);
          const dataSize = buf.readUInt32LE(dataEntryOffset + 4);
          const dataRaw = rvaToRaw(dataRva);
          let p = dataRaw;
          for (let k = 0; k < 16; k++) {
            const strId = ((blockId - 1) << 4) + k;
            if (p >= dataRaw + dataSize) break;
            const len = buf.readUInt16LE(p); p += 2;
            if (len > 0) {
              strings[strId] = buf.subarray(p, p + len * 2).toString('utf16le');
              p += len * 2;
            }
          }
        }
      }
    }
  }
  return strings;
}

const strings = Object.assign({},
  parsePEStrings(fs.readFileSync('C:\\Program Files\\XArena\\Game\\AOE1R\\language.dll')),
  parsePEStrings(fs.readFileSync('C:\\Program Files\\XArena\\Game\\AOE1R\\languagex.dll'))
);

function parseUnit(buf, p) {
  const type = buf.readInt8(p++);
  const nameLen = buf.readUInt16LE(p); p += 2;
  const id = buf.readInt16LE(p); p += 2;
  const langName = buf.readUInt16LE(p); p += 2;
  const langCreation = buf.readUInt16LE(p); p += 2;
  const uclass = buf.readInt16LE(p); p += 2;
  const standingGraphic = buf.readInt16LE(p); p += 2;
  const dyingGraphic = buf.readInt16LE(p); p += 2;
  const undeadGraphic = buf.readInt16LE(p); p += 2;
  const undeadMode = buf.readInt8(p++);
  const hitPoints = buf.readInt16LE(p); p += 2;
  const los = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
  const garrisonCapacity = buf.readInt8(p++);
  const size = { x: buf.readFloatLE(p), y: buf.readFloatLE(p+4), z: buf.readFloatLE(p+8) }; p += 12;
  const trainSound = buf.readInt16LE(p); p += 2;
  const deadUnitId = buf.readInt16LE(p); p += 2;
  const sortNumber = buf.readInt8(p++);
  const canBeBuiltOn = buf.readInt8(p++);
  const iconId = buf.readInt16LE(p); p += 2;
  const hideInEditor = buf.readInt8(p++);
  const oldPortraitPict = buf.readInt16LE(p); p += 2;
  const enabled = buf.readInt8(p++);
  p += 4; p += 4; p += 8; p += 1; p += 1; p += 2; p += 1; p += 2; p += 4; p += 1; p += 1; p += 1; p += 1; p += 1; p += 4; p += 1;
  const langHelp = buf.readInt32LE(p); p += 4;
  const langHotkeyText = buf.readInt32LE(p); p += 4;
  const hotkey = buf.readInt32LE(p); p += 4;
  p += 1; p += 1; p += 1; p += 1; p += 1; p += 1; p += 8; p += 4;
  for (let i = 0; i < 3; i++) p += 7;
  const damageGraphicCount = buf.readUInt8(p++);
  p += damageGraphicCount * 3;

  let speed = 0, combat = null, creatable = null;

  if (type >= 20) { speed = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4; }
  if (type >= 30) { p += 2; p += 4; }
  if (type >= 40) {
    p += 8;
    const taskCount = buf.readUInt16LE(p); p += 2;
    p += taskCount * 36;
  }
  if (type >= 50) {
    p += 2; p += 2; p += 2; p += 2; p += 2; p += 4; p += 1;
    const baseArmor = buf.readInt16LE(p); p += 2;
    const attackCount = buf.readUInt16LE(p); p += 2;
    const attacks = [];
    for (let i = 0; i < attackCount; i++) {
      attacks.push({ type: buf.readInt16LE(p), amount: buf.readInt16LE(p+2) });
      p += 4;
    }
    const armorCount = buf.readUInt16LE(p); p += 2;
    const armors = [];
    for (let i = 0; i < armorCount; i++) {
      armors.push({ type: buf.readInt16LE(p), amount: buf.readInt16LE(p+2) });
      p += 4;
    }
    const maxRange = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
    const blastWidth = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
    const reloadTime = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
    const projectileUnitId = buf.readInt16LE(p); p += 2;
    const accuracyPercent = buf.readInt16LE(p); p += 2;
    const frameDelay = buf.readInt16LE(p); p += 2;
    p += 12;
    const minRange = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
    const displayedMeleeArmor = buf.readInt16LE(p); p += 2;
    const displayedAttack = buf.readInt16LE(p); p += 2;
    const displayedRange = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
    const displayedReloadTime = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
    combat = { baseArmor, attacks, armors, maxRange, blastWidth, reloadTime, projectileUnitId, frameDelay, minRange, displayedMeleeArmor, displayedAttack, displayedRange, displayedReloadTime };
  }
  if (type === 60) p += 9;
  if (type >= 70) {
    const resourceCosts = [];
    for (let i = 0; i < 3; i++) {
      const cType = buf.readInt16LE(p);
      const cAmt = buf.readInt16LE(p+2);
      const cEn = buf.readInt16LE(p+4);
      p += 6;
      if (cEn !== 0 && cAmt > 0) resourceCosts.push({ type: cType, amount: cAmt });
    }
    const trainTime = buf.readInt16LE(p); p += 2;
    const trainLocationId = buf.readInt16LE(p); p += 2;
    const buttonId = buf.readInt8(p++);
    const displayedPierceArmor = buf.readInt16LE(p); p += 2;
    creatable = { resourceCosts, trainTime, trainLocationId, buttonId, displayedPierceArmor };
  }
  if (type === 80) p += 16;

  return { nextP: p, type, id, enabled, hitPoints, speed, combat, creatable };
}

const civOffsets = [
  { name: "Egyptian", offset: 258691 },
  { name: "Greek", offset: 330439 },
  { name: "Babylonian", offset: 402187 },
  { name: "Assyrian", offset: 473935 },
  { name: "Minoan", offset: 545683 },
  { name: "Hittite", offset: 617431 },
  { name: "Phoenician", offset: 689179 },
  { name: "Sumerian", offset: 760927 },
  { name: "Persian", offset: 832675 },
  { name: "Shang", offset: 904423 },
  { name: "Yamato", offset: 976171 },
  { name: "Choson", offset: 1047919 },
  { name: "Roman", offset: 1119667 },
  { name: "Carthaginian", offset: 1191415 },
  { name: "Palmyran", offset: 1263163 },
  { name: "Macedonian", offset: 1334911 }
];

// Let's parse each civ
for (const civ of civOffsets) {
  let p = civ.offset + 1 + 20;
  const resCount = decomp.readUInt16LE(p); p += 2;
  const techTreeId = decomp.readInt16LE(p); p += 2;
  p += resCount * 4 + 1;
  const unitCount = decomp.readUInt16LE(p); p += 2;
  const pointers = [];
  for (let i = 0; i < unitCount; i++) pointers.push(decomp.readInt32LE(p + i * 4));
  p += unitCount * 4;

  const civUnits = {};
  for (let i = 0; i < unitCount; i++) {
    if (pointers[i] !== 0) {
      const u = parseUnit(decomp, p);
      civUnits[u.id] = u;
      p = u.nextP;
    }
  }

  const u25 = civUnits[25];  // Soldier-El_Archer (Voi tên)
  const u46 = civUnits[46];  // Soldier-Elephant (War Elephant / Voi húc)
  const u345 = civUnits[345]; // Soldier-Armor_Elephant (Armored Elephant / Voi thần)

  console.log(`Civ: ${civ.name.padEnd(14)} TechTreeId: ${techTreeId} | ` +
    `VoiTen(25): ${u25 ? (u25.enabled ? 'YES(HP=' + u25.hitPoints + ',spd=' + u25.speed + ',cost=' + JSON.stringify(u25.creatable.resourceCosts) + ')' : 'DIS') : 'NO'} | ` +
    `VoiHuc(46): ${u46 ? (u46.enabled ? 'YES(HP=' + u46.hitPoints + ',spd=' + u46.speed + ')' : 'DIS') : 'NO'} | ` +
    `VoiThan(345): ${u345 ? (u345.enabled ? 'YES(HP=' + u345.hitPoints + ',spd=' + u345.speed + ')' : 'DIS') : 'NO'}`
  );
}
