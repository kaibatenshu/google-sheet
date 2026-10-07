const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\774\\content.md', 'utf8');

const regex = /<a[^>]+href="(\/pc_computer\/ageofempires\/asset\/\d+\/)"[^>]*>([\s\S]*?)<\/a>/g;
let m;
while ((m = regex.exec(content)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, '').trim();
  console.log(m[1], '->', text);
}
