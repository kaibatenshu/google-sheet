const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\774\\content.md', 'utf8');

const regex = /href="([^"]+)"/g;
let m;
const list = [];
while ((m = regex.exec(content)) !== null) {
  if (m[1].includes('ageofempires') || m[1].includes('asset') || m[1].includes('resource')) {
    list.push(m[1]);
  }
}
console.log(list.join('\n'));
