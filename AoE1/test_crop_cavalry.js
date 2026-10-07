const sharp = require('sharp');

async function testCavalry2() {
  const meta = await sharp('CavalryUnitsAoE1.png').metadata();

  const crops = [
    // Scout: bottom left
    { name: 'crop_scout_cavalry', x: 130, y: 730, w: 140, h: 140 },
    // Cavalry: bottom 2nd
    { name: 'crop_cavalry', x: 390, y: 730, w: 140, h: 140 },
    // Chariot (sọc đơn): bottom 3rd
    { name: 'crop_chariot', x: 700, y: 730, w: 220, h: 170 },
    // Camelry: bottom 4th
    { name: 'crop_camelry', x: 990, y: 730, w: 150, h: 160 },
    // Cataphract (top)
    { name: 'crop_cataphract', x: 420, y: 130, w: 160, h: 160 },
    // Scythe Chariot (đạp đôi, 2 horses with scythe blades)
    { name: 'crop_scythe_chariot', x: 670, y: 440, w: 280, h: 200 },
    // Armored Elephant (top right)
    { name: 'crop_armored_elephant', x: 1300, y: 440, w: 200, h: 190 }
  ];

  for (const c of crops) {
    const halfW = Math.round(c.w / 2);
    const halfH = Math.round(c.h / 2);
    const left = Math.max(0, Math.min(meta.width - c.w, c.x - halfW));
    const top = Math.max(0, Math.min(meta.height - c.h, c.y - halfH));
    await sharp('CavalryUnitsAoE1.png')
      .extract({ left, top, width: c.w, height: c.h })
      .toFile(c.name + '.png');
  }
  console.log('Saved cavalry crops 2');
}

testCavalry2();
