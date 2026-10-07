const sharp = require('sharp');

async function findClusters(imagePath, name) {
  const { data, info } = await sharp(imagePath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const ch = info.channels;

  // Let's find pixels that are distinctly NOT grass
  // In AoE grass: R is roughly 90-140, G is 120-180, B is 20-70. (G is significantly higher than R and B, and B is low).
  // Characters have either:
  // - Blue tunic: B > 100 and B > R + 20
  // - High red/bronze/skin/metal/shadow
  const points = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * ch;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Check if it's player blue (every unit in these screenshots is Player 1 Blue!)
      const isBlue = (b > 100 && b > r + 40 && b > g + 20);
      if (isBlue) {
        points.push({ x, y, r, g, b });
      }
    }
  }

  // Group blue points into clusters
  const clusters = [];
  for (const pt of points) {
    let matched = false;
    for (const c of clusters) {
      const dx = c.centerX - pt.x;
      const dy = c.centerY - pt.y;
      if (Math.hypot(dx, dy) < 45) {
        c.pts.push(pt);
        c.centerX = Math.round(c.pts.reduce((s, p) => s + p.x, 0) / c.pts.length);
        c.centerY = Math.round(c.pts.reduce((s, p) => s + p.y, 0) / c.pts.length);
        c.minX = Math.min(c.minX, pt.x);
        c.maxX = Math.max(c.maxX, pt.x);
        c.minY = Math.min(c.minY, pt.y);
        c.maxY = Math.max(c.maxY, pt.y);
        matched = true;
        break;
      }
    }
    if (!matched) {
      clusters.push({
        pts: [pt],
        centerX: pt.x,
        centerY: pt.y,
        minX: pt.x,
        maxX: pt.x,
        minY: pt.y,
        maxY: pt.y
      });
    }
  }

  // Filter clusters with enough blue pixels (e.g. > 15)
  const valid = clusters.filter(c => c.pts.length > 25);
  valid.sort((a, b) => a.minX - b.minX || a.minY - b.minY);
  console.log(`\n=== Clusters for ${name} (${valid.length} units found) ===`);
  valid.forEach((c, idx) => {
    console.log(`Unit ${idx + 1}: Center=(${c.centerX}, ${c.centerY}), Box=[x:${c.minX}..${c.maxX}, y:${c.minY}..${c.maxY}], Pts=${c.pts.length}`);
  });
  return valid;
}

async function run() {
  await findClusters('InfantryUnitsAoE.png', 'Infantry');
  await findClusters('ArcherUnitsAoE.png', 'Archers');
  await findClusters('CavalryUnitsAoE1.png', 'Cavalry');
}

run();
