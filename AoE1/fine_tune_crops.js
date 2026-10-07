const sharp = require('sharp');
const path = require('path');

const outDir = path.join(__dirname, 'test_extracted');

async function fineTune() {
  const archerMeta = await sharp('ArcherUnitsAoE.png').metadata();
  const cavalryMeta = await sharp('CavalryUnitsAoE1.png').metadata();
  const siegeMeta = await sharp('SiegeWeaponsAoE.png').metadata();
  const infantryMeta = await sharp('InfantryUnitsAoE.png').metadata();

  async function crop(srcFile, meta, x, y, w, h, outName) {
    const left = Math.max(0, Math.min(meta.width - w, Math.round(x - w / 2)));
    const top = Math.max(0, Math.min(meta.height - h, Math.round(y - h / 2)));
    await sharp(srcFile)
      .extract({ left, top, width: w, height: h })
      .resize(100, 100, { fit: 'cover' })
      .toFile(path.join(outDir, `${outName}.png`));
  }

  // 1. centurion
  await crop('InfantryUnitsAoE.png', infantryMeta, 395, 235, 90, 90, 'centurion');

  // 2. heavy_horse_archer
  await crop('ArcherUnitsAoE.png', archerMeta, 850, 255, 105, 105, 'heavy_horse_archer');

  // 3. elephant_archer
  await crop('ArcherUnitsAoE.png', archerMeta, 700, 160, 170, 170, 'elephant_archer');

  // 4. chariot
  await crop('CavalryUnitsAoE1.png', cavalryMeta, 730, 720, 210, 165, 'chariot');

  // 5. camelry
  await crop('CavalryUnitsAoE1.png', cavalryMeta, 990, 690, 160, 170, 'camelry');

  // 6. scythe_chariot
  await crop('CavalryUnitsAoE1.png', cavalryMeta, 710, 440, 260, 200, 'scythe_chariot');

  // 7. heavy_catapult
  await crop('SiegeWeaponsAoE.png', siegeMeta, 795, 145, 185, 140, 'heavy_catapult');

  // 8. helepolis
  await crop('SiegeWeaponsAoE.png', siegeMeta, 640, 310, 130, 110, 'helepolis');

  console.log('Fine-tuned 8 crops');
}

fineTune();
