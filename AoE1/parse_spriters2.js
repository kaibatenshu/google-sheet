const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\774\\content.md', 'utf8');

const regex = /href="(\/pc_computer\/ageofempires\/sheet\/\d+\/)"[^>]*>([^<]+)<\/a>/g;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log(m[2].trim(), '->', 'https://www.spriters-resource.com' + m[1]);
}
