const https = require('https');
const fs = require('fs');
const path = require('path');

// Danh sách ảnh di tích / biểu tượng lịch sử của 16 quốc gia từ Wikimedia
const civImages = {
  shang: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Shang_Dynasty_Vessel.jpg/400px-Shang_Dynasty_Vessel.jpg",
  assyrian: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lamassu_from_Khorsabad_Louvre_AO19859.jpg/400px-Lamassu_from_Khorsabad_Louvre_AO19859.jpg",
  egyptian: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Khephren.jpg/400px-Khephren.jpg",
  babylonian: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ishtar_Gate_at_Berlin_Museum.jpg/400px-Ishtar_Gate_at_Berlin_Museum.jpg",
  hittite: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hattusa_Lion_Gate.jpg/400px-Hattusa_Lion_Gate.jpg",
  phoenician: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Phoenician_bireme.png/400px-Phoenician_bireme.png",
  sumerian: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ziggurat_of_ur.jpg/400px-Ziggurat_of_ur.jpg",
  persian: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Persepolis_16.11.2009_12-21-42.JPG/400px-Persepolis_16.11.2009_12-21-42.JPG",
  yamato: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Horyu-ji04s3200.jpg/400px-Horyu-ji04s3200.jpg",
  minoan: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Knossos_North_Entrance_01.jpg/400px-Knossos_North_Entrance_01.jpg",
  choson: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Dolmen_Goindol_Ganghwa_01.JPG/400px-Dolmen_Goindol_Ganghwa_01.JPG",
  roman: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/400px-Colosseo_2020.jpg",
  carthaginian: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Byrsa_Carthage.jpg/400px-Byrsa_Carthage.jpg",
  palmyran: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Triumphal_Arch_Palmyra.jpg/400px-Triumphal_Arch_Palmyra.jpg",
  macedonian: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Vergina_Sun_on_gold_larnax.jpg/400px-Vergina_Sun_on_gold_larnax.jpg",
  greek: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/400px-The_Parthenon_in_Athens.jpg"
};

function download(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'AoEProject/1.0 (contact@example.com)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return https.get(res.headers.location, { headers: { 'User-Agent': 'AoEProject/1.0' } }, res2 => {
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(true); });
        });
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
    }).on('error', () => resolve(false));
  });
}

async function start() {
  if (!fs.existsSync('images/civs')) fs.mkdirSync('images/civs', { recursive: true });
  for (const [id, url] of Object.entries(civImages)) {
    const dest = path.join('images/civs', id + '.jpg');
    console.log('Downloading civ', id, '...');
    await download(url, dest);
  }
  console.log('Civ images finished!');
}

start();
