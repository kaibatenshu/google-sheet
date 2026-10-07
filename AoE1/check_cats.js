const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\623\\content.md', 'utf8');
const catMatches = content.match(/title="Category:[^"]+"/g) || [];
console.log('Categories:');
catMatches.forEach(c => console.log(c));

const fileMatches = content.match(/title="File:[^"]+"/g) || [];
console.log('Files (' + fileMatches.length + '):');
fileMatches.slice(0, 50).forEach(f => console.log(f));
