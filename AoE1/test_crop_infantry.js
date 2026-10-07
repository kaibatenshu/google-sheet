const sharp = require('sharp');

async function testInfantry() {
  // Top left: Clubman
  await sharp('InfantryUnitsAoE.png')
    .extract({ left: 95, top: 40, width: 85, height: 105 })
    .toFile('crop_clubman.png');
    
  // Below clubman: Axeman
  await sharp('InfantryUnitsAoE.png')
    .extract({ left: 95, top: 150, width: 85, height: 105 })
    .toFile('crop_axeman.png');

  // Center 2: Broad Swordsman
  await sharp('InfantryUnitsAoE.png')
    .extract({ left: 235, top: 145, width: 85, height: 105 })
    .toFile('crop_broad_swordsman.png');

  // Center bottom: Legion (bottommost)
  await sharp('InfantryUnitsAoE.png')
    .extract({ left: 235, top: 265, width: 85, height: 110 })
    .toFile('crop_legion.png');

  // Right top: Hoplite
  await sharp('InfantryUnitsAoE.png')
    .extract({ left: 365, top: 45, width: 85, height: 105 })
    .toFile('crop_hoplite.png');

  // Right bottom: Centurion
  await sharp('InfantryUnitsAoE.png')
    .extract({ left: 365, top: 250, width: 85, height: 125 })
    .toFile('crop_centurion.png');

  console.log('Successfully saved test crops for Infantry');
}

testInfantry();
