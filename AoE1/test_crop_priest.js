const sharp = require('sharp');

async function testPriestOnGrass() {
  // Extract a 90x90 grass background from InfantryUnitsAoE.png (e.g. at left: 0, top: 0)
  const grass = await sharp('InfantryUnitsAoE.png')
    .extract({ left: 0, top: 0, width: 90, height: 90 })
    .toBuffer();

  // Resize priest to fit nicely
  const priestResized = await sharp('test_priest.png')
    .resize(76, 76, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Composite priest over grass
  await sharp(grass)
    .composite([{ input: priestResized, gravity: 'center' }])
    .toFile('crop_priest.png');

  console.log('Saved crop_priest.png');
}

testPriestOnGrass();
