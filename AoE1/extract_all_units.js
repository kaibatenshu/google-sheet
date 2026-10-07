const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'test_extracted');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extractAll() {
  const infantryMeta = await sharp('InfantryUnitsAoE.png').metadata();
  const archerMeta = await sharp('ArcherUnitsAoE.png').metadata();
  const cavalryMeta = await sharp('CavalryUnitsAoE1.png').metadata();
  const siegeMeta = await sharp('SiegeWeaponsAoE.png').metadata();

  // Helper for safe square crop and resize to standard 100x100
  async function cropUnit(srcFile, meta, x, y, w, h, outName) {
    const left = Math.max(0, Math.min(meta.width - w, Math.round(x - w / 2)));
    const top = Math.max(0, Math.min(meta.height - h, Math.round(y - h / 2)));
    await sharp(srcFile)
      .extract({ left, top, width: w, height: h })
      .resize(100, 100, { fit: 'cover' })
      .toFile(path.join(outDir, `${outName}.png`));
  }

  // --- 1. INFANTRY ---
  await cropUnit('InfantryUnitsAoE.png', infantryMeta, 68, 76, 75, 75, 'clubman');
  await cropUnit('InfantryUnitsAoE.png', infantryMeta, 69, 165, 75, 75, 'axeman');
  await cropUnit('InfantryUnitsAoE.png', infantryMeta, 232, 165, 75, 75, 'broad_swordsman');
  await cropUnit('InfantryUnitsAoE.png', infantryMeta, 234, 314, 80, 80, 'legion');
  await cropUnit('InfantryUnitsAoE.png', infantryMeta, 390, 88, 80, 80, 'hoplite');
  await cropUnit('InfantryUnitsAoE.png', infantryMeta, 395, 238, 85, 85, 'centurion');

  // --- 2. ARCHERS ---
  await cropUnit('ArcherUnitsAoE.png', archerMeta, 46, 126, 75, 75, 'slinger');
  await cropUnit('ArcherUnitsAoE.png', archerMeta, 205, 126, 75, 75, 'bowman');
  await cropUnit('ArcherUnitsAoE.png', archerMeta, 364, 284, 75, 75, 'composite_bowman');
  await cropUnit('ArcherUnitsAoE.png', archerMeta, 535, 205, 130, 130, 'chariot_archer');
  await cropUnit('ArcherUnitsAoE.png', archerMeta, 700, 175, 150, 150, 'elephant_archer');
  await cropUnit('ArcherUnitsAoE.png', archerMeta, 865, 255, 95, 95, 'heavy_horse_archer');

  // --- 3. CAVALRY ---
  await cropUnit('CavalryUnitsAoE1.png', cavalryMeta, 135, 695, 150, 150, 'scout_cavalry');
  await cropUnit('CavalryUnitsAoE1.png', cavalryMeta, 390, 695, 150, 150, 'cavalry');
  await cropUnit('CavalryUnitsAoE1.png', cavalryMeta, 695, 715, 180, 150, 'chariot');
  await cropUnit('CavalryUnitsAoE1.png', cavalryMeta, 990, 710, 160, 160, 'camelry');
  await cropUnit('CavalryUnitsAoE1.png', cavalryMeta, 420, 130, 150, 150, 'cataphract');
  await cropUnit('CavalryUnitsAoE1.png', cavalryMeta, 670, 440, 240, 190, 'scythe_chariot');
  await cropUnit('CavalryUnitsAoE1.png', cavalryMeta, 1300, 440, 190, 190, 'armored_elephant');

  // --- 4. SIEGE ---
  await cropUnit('SiegeWeaponsAoE.png', siegeMeta, 155, 145, 160, 140, 'stone_thrower');
  await cropUnit('SiegeWeaponsAoE.png', siegeMeta, 815, 145, 175, 140, 'heavy_catapult');
  await cropUnit('SiegeWeaponsAoE.png', siegeMeta, 325, 310, 120, 110, 'ballista');
  await cropUnit('SiegeWeaponsAoE.png', siegeMeta, 655, 310, 120, 110, 'helepolis');

  // --- 5. VILLAGER & PRIEST ---
  // Villager: crop from test_villager_aoe.png (width 139, height 89)
  await sharp('test_villager_aoe.png')
    .extract({ left: 16, top: 10, width: 48, height: 68 })
    .resize(100, 100, { fit: 'cover' })
    .toFile(path.join(outDir, 'villager.png'));

  // Priest: take a patch of grass from InfantryUnitsAoE and overlay high-res classic Priest
  const grass = await sharp('InfantryUnitsAoE.png')
    .extract({ left: 200, top: 0, width: 100, height: 100 })
    .toBuffer();

  const priestOverlay = await sharp('test_priest.png')
    .resize(88, 88, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(grass)
    .composite([{ input: priestOverlay, gravity: 'center' }])
    .toFile(path.join(outDir, 'priest.png'));

  console.log('Successfully extracted all 25 units into test_extracted/!');
}

extractAll().catch(console.error);
