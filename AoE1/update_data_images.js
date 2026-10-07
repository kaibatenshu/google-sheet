const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

// Cập nhật ảnh cho 16 Civilizations sang local SVG
const civIds = [
  'shang', 'assyrian', 'egyptian', 'babylonian', 'hittite', 'phoenician',
  'sumerian', 'persian', 'yamato', 'minoan', 'choson', 'roman',
  'carthaginian', 'palmyran', 'macedonian', 'greek'
];

civIds.forEach(id => {
  // Thay thế đường dẫn ảnh cho từng civ
  const civRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"[^"]+"`, 'm');
  content = content.replace(civRegex, `$1"images/civs/${id}.svg"`);
});

// Cập nhật ảnh cho tất cả Units
const unitIds = [
  'villager', 'clubman', 'fishing_boat', 'axeman', 'slinger', 'scout_cavalry',
  'bowman', 'scout_ship', 'chariot_archer', 'cavalry', 'camelry', 'chariot',
  'composite_bowman', 'broad_swordsman', 'hoplite', 'stone_thrower', 'ballista',
  'priest', 'scythe_chariot', 'cataphract', 'armored_elephant', 'elephant_archer',
  'heavy_horse_archer', 'legion', 'centurion', 'heavy_catapult', 'helepolis', 'juggernaught'
];

unitIds.forEach(id => {
  if (!content.includes(`image: "images/units/${id}.svg"`)) {
    const unitRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?icon:\\s*"[^"]+")`, 'm');
    content = content.replace(unitRegex, `$1,\n    image: "images/units/${id}.svg"`);
  }
});

fs.writeFileSync('data.js', content, 'utf8');
console.log('Successfully updated data.js with local image references!');
