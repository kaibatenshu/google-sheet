const sharp = require('sharp');

async function testArchers() {
  const crops = [
    { name: 'crop_slinger', x: 46, y: 126, w: 75, h: 85 },
    { name: 'crop_bowman', x: 205, y: 126, w: 75, h: 85 },
    { name: 'crop_composite_bowman', x: 364, y: 284, w: 75, h: 85 },
    { name: 'crop_chariot_archer', x: 535, y: 220, w: 105, h: 125 },
    { name: 'crop_elephant_archer', x: 700, y: 195, w: 110, h: 135 },
    { name: 'crop_heavy_horse_archer', x: 865, y: 260, w: 85, h: 105 }
  ];

  for (const c of crops) {
    const halfW = Math.round(c.w / 2);
    const halfH = Math.round(c.h / 2);
    await sharp('ArcherUnitsAoE.png')
      .extract({
        left: Math.max(0, c.x - halfW),
        top: Math.max(0, c.y - halfH),
        width: c.w,
        height: c.h
      })
      .toFile(c.name + '.png');
  }
  console.log('Saved archer crops');
}

testArchers();
