const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\580\\content.md', 'utf8');
const regex = /title="File:([^"]+)"/g;
let match;
const files = new Set();
while ((match = regex.exec(content)) !== null) {
  files.add(match[1]);
}
console.log('Total files found:', files.size);
for (const f of files) {
  console.log(f);
}
