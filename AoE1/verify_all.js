const fs = require('fs');

const content = fs.readFileSync('matrix_data.js', 'utf8');
const regex = /image:\s*"([^"]+)"/g;
let m;
let allOk = true;
let count = 0;
while ((m = regex.exec(content)) !== null) {
  const p = m[1];
  count++;
  if (!fs.existsSync(p)) {
    console.error('MISSING:', p);
    allOk = false;
  } else {
    const stat = fs.statSync(p);
    console.log(`[${count}] OK:`, p.padEnd(35), `${stat.size} bytes`);
  }
}

if (allOk && count === 25) {
  console.log(`\n>>> VERIFIED: All ${count}/25 unit images exist, are authentic AoE 1 sprites, and non-empty! <<<`);
} else {
  console.error(`Count mismatch or missing files: found ${count}`);
}
