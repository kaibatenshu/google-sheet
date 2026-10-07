const sharp = require('sharp');

async function testVillager() {
  await sharp('test_villager_aoe.png')
    .extract({ left: 20, top: 12, width: 42, height: 65 })
    .toFile('crop_villager.png');
  console.log('Saved crop_villager');
}

testVillager();
