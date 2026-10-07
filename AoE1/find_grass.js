const sharp = require('sharp');

async function findEmptyGrass() {
  const { data, info } = await sharp('ArcherUnitsAoE.png').raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  
  // Find a 100x100 region where all pixels are grass
  // Grass condition: g > 85, g > r * 0.9, g > b * 1.3, b < 90, r > 60
  for (let top = 0; top < h - 100; top += 20) {
    for (let left = 0; left < w - 100; left += 20) {
      let isAllGrass = true;
      for (let y = top; y < top + 100; y += 4) {
        for (let x = left; x < left + 100; x += 4) {
          const idx = (y * w + x) * 3;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          // If blue player color, or high brightness, or dark shadow
          if (b > 90 || (g < 90 && r < 80) || (r > 150 && g < 130)) {
            isAllGrass = false;
            break;
          }
        }
        if (!isAllGrass) break;
      }
      if (isAllGrass) {
        console.log(`Found pure grass patch at left: ${left}, top: ${top}`);
        await sharp('ArcherUnitsAoE.png')
          .extract({ left, top, width: 100, height: 100 })
          .toFile('pure_grass.png');
        return;
      }
    }
  }
  console.log('No pure grass found');
}

findEmptyGrass();
