const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\685\\content.md', 'utf8');

// Find all image tags and links in tables
const regex = /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/g;
let m;
const imgs = [];
while ((m = regex.exec(content)) !== null) {
  if (m[1].includes('static.wikia.nocookie.net')) {
    imgs.push({ src: m[1].split('/revision')[0], alt: m[2] });
  }
}

console.log('Total images found in Unit_(Age_of_Empires):', imgs.length);
imgs.slice(0, 60).forEach(i => console.log(i.alt.padEnd(25), '->', i.src));
