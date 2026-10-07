const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\635\\content.md', 'utf8');
const regex = /href="(\/pc_computer\/ageofempires\/sheet\/[^"]+)"[^>]*>([^<]+)</g;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log(m[2].trim(), '->', m[1]);
}
