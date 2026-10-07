const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\Richard\\.gemini\\antigravity\\brain\\12d5e899-d349-4cf2-afce-412931535d82\\.system_generated\\steps\\685\\content.md', 'utf8');

// Find all <tr> tags
const rows = content.match(/<tr[\s\S]*?<\/tr>/gi) || [];
console.log('Total rows:', rows.length);

const units = [];
rows.forEach(r => {
  // Strip tags but keep cell boundaries
  const cells = [];
  const cellMatches = r.match(/<t[dh][\s\S]*?<\/t[dh]>/gi) || [];
  cellMatches.forEach(c => {
    const text = c.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    cells.push(text);
  });
  if (cells.length >= 6) {
    units.push(cells);
  }
});

console.log('Found table rows with >= 6 cells:', units.length);
units.slice(0, 35).forEach(u => {
  console.log(u.join(' | '));
});
