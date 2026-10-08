const fs = require('fs');

// Check in data.js and 01_16_Civilizations.csv
const data = require('./data.js');
console.log('Civs count in data.js:', data.civilizations ? data.civilizations.length : 'none');

// Let's inspect techTree of each civ for elephant units
for (const civ of data.civilizations) {
  const tt = civ.techTree || {};
  const hasWarEle = tt.warElephant;
  const hasArmoredEle = tt.armoredElephant;
  const hasEleArcher = tt.elephantArcher;
  console.log(`${civ.name.padEnd(14)}: VoiHuc=${!!hasWarEle}, VoiThan(Armored)=${!!hasArmoredEle}, VoiTen=${!!hasEleArcher}`);
}
