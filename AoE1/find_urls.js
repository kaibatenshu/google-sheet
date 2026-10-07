const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\708\\content.md', 'utf8');
const regex = /https:\/\/static\.wikia\.nocookie\.net\/ageofempires\/images\/[^"\s\)]+/g;
let m;
const urls = new Set();
while ((m = regex.exec(content)) !== null) {
  urls.add(m[0].split('/revision')[0]);
}
for (const u of urls) console.log(u);
