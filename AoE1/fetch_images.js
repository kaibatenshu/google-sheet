const https = require('https');
const fs = require('fs');
const path = require('path');

const unitsToFetch = [
  { id: 'villager', page: '/wiki/Villager_(Age_of_Empires)' },
  { id: 'clubman', page: '/wiki/Clubman_(Age_of_Empires)' },
  { id: 'axeman', page: '/wiki/Axeman_(Age_of_Empires)' },
  { id: 'slinger', page: '/wiki/Slinger_(Age_of_Empires)' },
  { id: 'scout_cavalry', page: '/wiki/Scout_Cavalry_(Age_of_Empires)' },
  { id: 'bowman', page: '/wiki/Bowman_(Age_of_Empires)' },
  { id: 'chariot_archer', page: '/wiki/Chariot_Archer_(Age_of_Empires)' },
  { id: 'cavalry', page: '/wiki/Cavalry_(Age_of_Empires)' },
  { id: 'camelry', page: '/wiki/Camel_Rider_(Age_of_Empires)' },
  { id: 'chariot', page: '/wiki/Chariot_(Age_of_Empires)' },
  { id: 'composite_bowman', page: '/wiki/Composite_Bowman_(Age_of_Empires)' },
  { id: 'broad_swordsman', page: '/wiki/Broad_Swordsman_(Age_of_Empires)' },
  { id: 'hoplite', page: '/wiki/Hoplite_(Age_of_Empires)' },
  { id: 'stone_thrower', page: '/wiki/Stone_Thrower_(Age_of_Empires)' },
  { id: 'ballista', page: '/wiki/Ballista_(Age_of_Empires)' },
  { id: 'priest', page: '/wiki/Priest_(Age_of_Empires)' },
  { id: 'scythe_chariot', page: '/wiki/Scythe_Chariot_(Age_of_Empires)' },
  { id: 'cataphract', page: '/wiki/Cataphract_(Age_of_Empires)' },
  { id: 'armored_elephant', page: '/wiki/Armored_Elephant_(Age_of_Empires)' },
  { id: 'elephant_archer', page: '/wiki/Elephant_Archer_(Age_of_Empires)' },
  { id: 'heavy_horse_archer', page: '/wiki/Heavy_Horse_Archer_(Age_of_Empires)' },
  { id: 'legion', page: '/wiki/Legion_(Age_of_Empires)' },
  { id: 'centurion', page: '/wiki/Centurion_(Age_of_Empires)' },
  { id: 'heavy_catapult', page: '/wiki/Heavy_Catapult_(Age_of_Empires)' },
  { id: 'helepolis', page: '/wiki/Helepolis_(Age_of_Empires)' },
  { id: 'juggernaught', page: '/wiki/Juggernaught_(Age_of_Empires)' }
];

const civsToFetch = [
  { id: 'shang', page: '/wiki/Shang_(Age_of_Empires)' },
  { id: 'assyrian', page: '/wiki/Assyrians_(Age_of_Empires)' },
  { id: 'egyptian', page: '/wiki/Egyptians_(Age_of_Empires)' },
  { id: 'babylonian', page: '/wiki/Babylonians_(Age_of_Empires)' },
  { id: 'hittite', page: '/wiki/Hittites_(Age_of_Empires)' },
  { id: 'phoenician', page: '/wiki/Phoenicians_(Age_of_Empires)' },
  { id: 'sumerian', page: '/wiki/Sumerians_(Age_of_Empires)' },
  { id: 'persian', page: '/wiki/Persians_(Age_of_Empires)' },
  { id: 'yamato', page: '/wiki/Yamato_(Age_of_Empires)' },
  { id: 'minoan', page: '/wiki/Minoans_(Age_of_Empires)' },
  { id: 'choson', page: '/wiki/Choson_(Age_of_Empires)' },
  { id: 'roman', page: '/wiki/Romans_(Age_of_Empires)' },
  { id: 'carthaginian', page: '/wiki/Carthaginians_(Age_of_Empires)' },
  { id: 'palmyran', page: '/wiki/Palmyrans_(Age_of_Empires)' },
  { id: 'macedonian', page: '/wiki/Macedonians_(Age_of_Empires)' },
  { id: 'greek', page: '/wiki/Greeks_(Age_of_Empires)' }
];

async function fetchPage(pagePath) {
  return new Promise((resolve) => {
    const req = https.get('https://ageofempires.fandom.com' + pagePath, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/meta property="og:image" content="([^"]+)"/);
        resolve(match ? match[1] : null);
      });
    });
    req.on('error', () => resolve(null));
  });
}

function downloadImage(url, destPath) {
  return new Promise((resolve) => {
    if (!url) return resolve(false);
    const cleanUrl = url.split('/revision')[0];
    const file = fs.createWriteStream(destPath);
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return https.get(res.headers.location, res2 => {
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(true); });
        });
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
    });
    req.on('error', () => resolve(false));
  });
}

async function run() {
  if (!fs.existsSync('images/units')) fs.mkdirSync('images/units', { recursive: true });
  if (!fs.existsSync('images/civs')) fs.mkdirSync('images/civs', { recursive: true });

  console.log('Fetching units...');
  for (const item of unitsToFetch) {
    const dest = path.join('images/units', item.id + '.png');
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log('Already have', item.id);
      continue;
    }
    const imgUrl = await fetchPage(item.page);
    console.log(item.id, '->', imgUrl ? 'Found' : 'Missing');
    if (imgUrl) {
      await downloadImage(imgUrl, dest);
    }
  }

  console.log('Fetching civs...');
  for (const item of civsToFetch) {
    const dest = path.join('images/civs', item.id + '.png');
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log('Already have', item.id);
      continue;
    }
    const imgUrl = await fetchPage(item.page);
    console.log(item.id, '->', imgUrl ? 'Found' : 'Missing');
    if (imgUrl) {
      await downloadImage(imgUrl, dest);
    }
  }

  console.log('Done!');
}

run();
