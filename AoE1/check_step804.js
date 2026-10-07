const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\804\\content.md', 'utf8');

const regex = /(https?:\/\/[^\s"'<>]+\.(?:png|gif|jpg)|\/media\/[^\s"'<>]+\.(?:png|gif|jpg))/gi;
let m;
const imgs = new Set();
while ((m = regex.exec(content)) !== null) imgs.add(m[1]);
console.log(Array.from(imgs).join('\n'));
