const fs = require('fs');
const zlib = require('zlib');

const raw = fs.readFileSync('C:\\Program Files\\XArena\\Game\\AOE1R\\data2\\empires.dat');
const decomp = zlib.inflateRawSync(raw);

const str = decomp.toString('ascii');
console.log('Includes Armored Elephant Archer?', str.includes('Armored Elephant Archer'));
console.log('Includes Heavy Elephant Archer?', str.includes('Heavy Elephant Archer'));
console.log('Includes El_Archer occurrences:', (str.match(/El_Archer/g) || []).length);
console.log('Includes Armor_Elephant occurrences:', (str.match(/Armor_Elephant/g) || []).length);
