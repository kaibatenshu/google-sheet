const sharp = require('sharp');

async function testChromaKey() {
  const { data, info } = await sharp('crop_axeman.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Clone buffer
  const out = Buffer.from(data);

  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];

    // Check if it's green grass
    // Typical AoE1 grass: g is dominant, b is low (b < 100, g > 80, g >= r, g > b + 25)
    const isGrass = (g > 70 && g >= r - 10 && g > b + 25 && !(b > 110 && b > r + 30));
    if (isGrass) {
      out[i + 3] = 0; // Alpha 0
    }
  }

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .toFile('test_axeman_transparent.png');
  console.log('Saved test_axeman_transparent.png');
}

testChromaKey();
