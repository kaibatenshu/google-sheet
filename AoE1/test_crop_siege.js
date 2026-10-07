const sharp = require('sharp');

async function testSiege() {
  const meta = await sharp('SiegeWeaponsAoE.png').metadata();

  const crops = [
    // Stone Thrower (top left)
    { name: 'crop_stone_thrower', x: 155, y: 145, w: 180, h: 140 },
    // Heavy Catapult (top right)
    { name: 'crop_heavy_catapult', x: 840, y: 150, w: 195, h: 140 },
    // Ballista (bottom left)
    { name: 'crop_ballista', x: 330, y: 315, w: 120, h: 110 },
    // Helepolis (bottom right)
    { name: 'crop_helepolis', x: 670, y: 315, w: 120, h: 110 }
  ];

  for (const c of crops) {
    const halfW = Math.round(c.w / 2);
    const halfH = Math.round(c.h / 2);
    const left = Math.max(0, Math.min(meta.width - c.w, c.x - halfW));
    const top = Math.max(0, Math.min(meta.height - c.h, c.y - halfH));
    await sharp('SiegeWeaponsAoE.png')
      .extract({ left, top, width: c.w, height: c.h })
      .toFile(c.name + '.png');
  }
  console.log('Saved siege crops');
}

testSiege();
