const sharp = require('sharp');

async function testInfantryExact() {
  const crops = [
    { name: 'crop_clubman', x: 68, y: 88, size: 70 },
    { name: 'crop_axeman', x: 69, y: 165, size: 70 },
    { name: 'crop_broad_swordsman', x: 232, y: 168, size: 70 },
    { name: 'crop_legion', x: 234, y: 314, size: 75 },
    { name: 'crop_hoplite', x: 390, y: 92, size: 75 },
    { name: 'crop_centurion', x: 395, y: 250, size: 80 }
  ];

  for (const c of crops) {
    const half = Math.round(c.size / 2);
    await sharp('InfantryUnitsAoE.png')
      .extract({
        left: Math.max(0, c.x - half),
        top: Math.max(0, c.y - half),
        width: c.size,
        height: c.size
      })
      .toFile(c.name + '.png');
  }
  console.log('Saved exact crops');
}

testInfantryExact();
