const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// 1. Read empires.dat
const datPath = 'C:\\Program Files\\XArena\\Game\\AOE1R\\data2\\empires.dat';
const raw = fs.readFileSync(datPath);
const decomp = zlib.inflateRawSync(raw);

// 2. Read string tables from language.dll and languagex.dll
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

// 3. Unit parser for AoE1 / RoR (Genie VER 3.7)
function parseUnit(buf, p) {
  const startOffset = p;
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
  p += 4; // placementSideTerrain
  p += 4; // placementTerrain
  p += 8; // clearanceSize
  p += 1; // hillMode
  p += 1; // fogVisibility
  p += 2; // terrainRestriction
  p += 1; // flyMode
  p += 2; // resourceCapacity
  p += 4; // resourceDecay
  p += 1; // blastDefenseLevel
  p += 1; // combatLevel
  p += 1; // interactionMode
  p += 1; // minimapMode
  p += 1; // interfaceKind
  p += 4; // multipleAttributeMode
  p += 1; // minimapColor
  const langHelp = buf.readInt32LE(p); p += 4;
  const langHotkeyText = buf.readInt32LE(p); p += 4;
  const hotkey = buf.readInt32LE(p); p += 4;
  p += 1; // recyclable
  p += 1; // canBeGathered
  p += 1; // doppelgangerOnDeath
  p += 1; // resourceGatherGroup
  p += 1; // selectionEffect
  p += 1; // editorSelectionColour
  p += 8; // outlineSize
  p += 4; // hpBarHeight

  const resourceStorages = [];
  for (let i = 0; i < 3; i++) {
    resourceStorages.push({
      type: buf.readInt16LE(p),
      amount: buf.readFloatLE(p+2),
      paid: buf.readInt8(p+6)
    });
    p += 7;
  }

  const damageGraphicCount = buf.readUInt8(p++);
  const damageGraphics = [];
  for (let i = 0; i < damageGraphicCount; i++) {
    damageGraphics.push({
      graphicId: buf.readInt16LE(p),
      damagePercent: buf.readInt8(p+2),
      oldApplyMode: buf.readInt8(p+3),
      applyMode: buf.readInt8(p+4)
    });
    p += 5;
  }

  const selectionSound = buf.readInt16LE(p); p += 2;
  const dyingSound = buf.readInt16LE(p); p += 2;
  const oldAttackReaction = buf.readInt8(p++);
  const convertTerrain = buf.readInt8(p++);

  const name = buf.subarray(p, p + nameLen).toString('ascii').replace(/\0/g, ''); p += nameLen;
  const copyId = buf.readInt16LE(p); p += 2;

  let speed = 0;
  let combat = null;
  let creatable = null;
  let building = null;

  if (type !== 90 && type >= 20) {
    speed = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;

    if (type >= 30) {
      p += 17; // Moving
    }

    if (type >= 40) {
      p += 20; // Action header
      const taskCount = buf.readUInt16LE(p); p += 2;
      p += taskCount * 59;
    }

    if (type >= 50) {
      const baseArmor = buf.readUInt8(p++);
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
      const defenseTerrainBonus = buf.readInt16LE(p); p += 2;
      const maxRange = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
      const blastWidth = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
      const reloadTime = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
      const projectileUnitId = buf.readInt16LE(p); p += 2;
      const accuracyPercent = buf.readInt16LE(p); p += 2;
      const breakOffCombat = buf.readInt8(p++);
      const frameDelay = buf.readInt16LE(p); p += 2;
      p += 12; // graphicDisplacement
      const blastAttackLevel = buf.readInt8(p++);
      const minRange = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
      const attackGraphic = buf.readInt16LE(p); p += 2;
      const displayedMeleeArmor = buf.readInt16LE(p); p += 2;
      const displayedAttack = buf.readInt16LE(p); p += 2;
      const displayedRange = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;
      const displayedReloadTime = Math.round(buf.readFloatLE(p) * 100) / 100; p += 4;

      combat = {
        baseArmor, attacks, armors, maxRange, blastWidth, reloadTime,
        projectileUnitId, accuracyPercent, frameDelay, minRange,
        displayedMeleeArmor, displayedAttack, displayedRange, displayedReloadTime
      };
    }

    if (type === 60) {
      p += 9; // Missile
    }

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

    if (type === 80) {
      p += 16; // Building
    }
  }

  return {
    nextP: p,
    type, id, name, langName, langCreation,
    displayName: strings[langName] || strings[langCreation] || name,
    uclass, hitPoints, los, speed,
    iconId, combat, creatable, building
  };
}

// 4. Parse Civs
const civOffsets = [
  { name: "Gaia", offset: 15497 },
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

function parseCiv(c) {
  let p = c.offset + 1 + 20; // skip playerType and name[20]
  const resCount = decomp.readUInt16LE(p); p += 2;
  const techTreeId = decomp.readInt16LE(p); p += 2;
  p += resCount * 4 + 1; // resources + iconSet
  const unitCount = decomp.readUInt16LE(p); p += 2;
  const pointers = [];
  for (let i = 0; i < unitCount; i++) pointers.push(decomp.readInt32LE(p + i * 4));
  p += unitCount * 4;

  const units = [];
  for (let i = 0; i < unitCount; i++) {
    if (pointers[i] !== 0) {
      const u = parseUnit(decomp, p);
      units.push(u);
      p = u.nextP;
    }
  }
  return { name: c.name, units };
}

const egypt = parseCiv(civOffsets[1]);
console.log(`Parsed ${egypt.units.length} units from ${egypt.name}`);

// Filter standard creatable units
const stdUnits = egypt.units.filter(u =>
  u.type === 70 &&
  !u.name.startsWith("Hero") &&
  !u.name.startsWith("Winsett") &&
  !u.name.includes("Saint") &&
  !u.name.includes("Artifact") &&
  !u.name.includes("Nuker") &&
  !u.name.includes("Laser") &&
  !u.name.includes("Mech") &&
  !u.name.includes("Space")
);

const dump = stdUnits.map(u => {
  const c = u.combat || {};
  const cr = u.creatable || {};
  const costMap = { 0: 'Thịt', 1: 'Gỗ', 2: 'Đá', 3: 'Vàng' };
  const costStr = (cr.resourceCosts || []).map(r => `${r.amount} ${costMap[r.type] || r.type}`).join(', ');
  const buildingMap = {
    109: 'Nhà Chính (Town Center)',
    12: 'Nhà BB (Barracks)',
    87: 'Nhà BA (Archery Range)',
    101: 'Nhà BL (Stable)',
    0: 'Nhà BY (Academy)',
    49: 'Nhà BK (Siege Workshop)',
    104: 'Nhà BP (Temple)',
    45: 'Nhà BS (Dock)'
  };

  return {
    id: u.id,
    internalName: u.name,
    inGameName: u.displayName,
    iconId: u.iconId,
    buildingId: cr.trainLocationId,
    building: buildingMap[cr.trainLocationId] || `Nhà ${cr.trainLocationId}`,
    hp: u.hitPoints,
    speed: u.speed,
    los: u.los,
    attack: c.displayedAttack || 0,
    attacks: c.attacks || [],
    meleeArmor: c.displayedMeleeArmor || 0,
    pierceArmor: cr.displayedPierceArmor || 0,
    armors: c.armors || [],
    range: c.displayedRange || 0,
    minRange: c.minRange || 0,
    reloadTime: c.displayedReloadTime || 0,
    frameDelay: c.frameDelay || 0,
    blastWidth: c.blastWidth || 0,
    trainTime: cr.trainTime || 0,
    costs: cr.resourceCosts || [],
    costText: costStr
  };
});

fs.writeFileSync('game_units_dump.json', JSON.stringify(dump, null, 2));
console.log(`Saved ${dump.length} units to game_units_dump.json`);
