const fs = require('fs');
const path = require('path');

if (!fs.existsSync('images/civs')) fs.mkdirSync('images/civs', { recursive: true });
if (!fs.existsSync('images/units')) fs.mkdirSync('images/units', { recursive: true });

// HÀM TẠO SVG BANNER CHO QUỐC GIA (500x200)
function generateCivSvg(title, sub, symbol, bgGrad1, bgGrad2, accent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="500" height="200">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGrad1}" />
      <stop offset="100%" stop-color="${bgGrad2}" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.4" />
      <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
    </radialGradient>
    <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="#ffffff" fill-opacity="0.08" />
      <rect x="0" y="0" width="40" height="40" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.03" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="500" height="200" fill="url(#bg)" />
  <rect width="500" height="200" fill="url(#pattern)" />
  <circle cx="400" cy="100" r="140" fill="url(#glow)" />

  <!-- Viền khung cổ điển -->
  <rect x="10" y="10" width="480" height="180" rx="8" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.6" />
  <rect x="14" y="14" width="472" height="172" rx="6" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.15" />

  <!-- Góc trang trí -->
  <path d="M 10 25 L 25 10 M 490 25 L 475 10 M 10 175 L 25 190 M 490 175 L 475 190" stroke="url(#goldGrad)" stroke-width="2" />

  <!-- Biểu tượng trung tâm bên phải -->
  <g transform="translate(390, 100)">
    <circle r="60" fill="#000000" fill-opacity="0.35" stroke="url(#goldGrad)" stroke-width="2" />
    <text font-family="'Cinzel', 'Segoe UI Emoji', sans-serif" font-size="52" text-anchor="middle" dominant-baseline="central" fill="#fbbf24">${symbol}</text>
  </g>

  <!-- Tiêu đề và chú thích -->
  <text x="35" y="70" font-family="'Cinzel', Georgia, serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="1">${title}</text>
  <text x="36" y="105" font-family="'Inter', sans-serif" font-size="16" font-weight="700" fill="#fbbf24" letter-spacing="0.5">${sub}</text>
  
  <line x1="35" y1="125" x2="280" y2="125" stroke="url(#goldGrad)" stroke-width="2" />
  
  <text x="35" y="150" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#cbd5e1" opacity="0.9">Age of Empires • Rise of Rome</text>
  <text x="35" y="170" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="${accent}" text-transform="uppercase" letter-spacing="1.5">Official Civilization</text>
</svg>`;
}

// HÀM TẠO SVG ICON CHO BINH CHỦNG (100x100)
function generateUnitSvg(icon, name, ageColor, roleColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="frame" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <radialGradient id="unitGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${roleColor}" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9" />
    </radialGradient>
  </defs>

  <!-- Khung viền -->
  <rect x="2" y="2" width="96" height="96" rx="14" fill="url(#unitGlow)" stroke="${ageColor}" stroke-width="2.5" />
  <rect x="5" y="5" width="90" height="90" rx="11" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.2" />

  <!-- Huy hiệu thời kỳ ở góc -->
  <circle cx="82" cy="18" r="8" fill="${ageColor}" />
  <circle cx="82" cy="18" r="7" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.6" />

  <!-- Biểu tượng chính -->
  <text x="50" y="52" font-family="'Segoe UI Emoji', 'Apple Color Emoji', sans-serif" font-size="44" text-anchor="middle" dominant-baseline="central">${icon}</text>

  <!-- Thanh nhãn bên dưới -->
  <rect x="8" y="76" width="84" height="16" rx="4" fill="#000000" fill-opacity="0.65" stroke="${ageColor}" stroke-width="0.5" />
  <text x="50" y="87" font-family="'Inter', sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#ffffff" letter-spacing="0.3">${name}</text>
</svg>`;
}

// 1. TẠO 16 ẢNH BANNER QUỐC GIA
const civs = [
  { id: 'shang', title: 'SHANG', sub: 'Thương Triều • 商朝', icon: '🏹', c1: '#881337', c2: '#1e1b4b', acc: '#f43f5e' },
  { id: 'assyrian', title: 'ASSYRIAN', sub: 'Đế Quốc Áp-si • 亚述', icon: '⚡', c1: '#0c4a6e', c2: '#082f49', acc: '#38bdf8' },
  { id: 'egyptian', title: 'EGYPTIAN', sub: 'Ai Cập Cổ Đại • 埃及', icon: '🛡️', c1: '#713f12', c2: '#1e1b4b', acc: '#eab308' },
  { id: 'babylonian', title: 'BABYLONIAN', sub: 'Vương Quốc Ba-bi-lon • 巴比伦', icon: '🏰', c1: '#312e81', c2: '#0f172a', acc: '#818cf8' },
  { id: 'hittite', title: 'HITTITE', sub: 'Đế Quốc Hít-ti • 西台', icon: '☄️', c1: '#78350f', c2: '#18181b', acc: '#f59e0b' },
  { id: 'phoenician', title: 'PHOENICIAN', sub: 'Hàng Hải Phê-nê • 腓尼基', icon: '🌲', c1: '#064e3b', c2: '#022c22', acc: '#10b981' },
  { id: 'sumerian', title: 'SUMERIAN', sub: 'Văn Minh Su-me • 苏美尔', icon: '🌾', c1: '#713f12', c2: '#27272a', acc: '#facc15' },
  { id: 'persian', title: 'PERSIAN', sub: 'Ba Tư Cổ Đại • 波斯', icon: '🐘', c1: '#581c87', c2: '#1c1917', acc: '#c084fc' },
  { id: 'yamato', title: 'YAMATO', sub: 'Đại Hòa Nhật Bản • 大和', icon: '⚔️', c1: '#991b1b', c2: '#1c1917', acc: '#ef4444' },
  { id: 'minoan', title: 'MINOAN', sub: 'Văn Minh Mi-nô-an • 米诺斯', icon: '🎯', c1: '#0369a1', c2: '#075985', acc: '#38bdf8' },
  { id: 'choson', title: 'CHOSON', sub: 'Cổ Triều Tiên • 朝鲜', icon: '🛡️', c1: '#334155', c2: '#0f172a', acc: '#94a3b8' },
  { id: 'roman', title: 'ROMAN', sub: 'Đế Chế La Mã • 罗马', icon: '🔨', c1: '#7f1d1d', c2: '#3f0f15', acc: '#f87171' },
  { id: 'carthaginian', title: 'CARTHAGINIAN', sub: 'Đế Quốc Cát-ta • 迦太基', icon: '🦣', c1: '#7c2d12', c2: '#1e293b', acc: '#fb923c' },
  { id: 'palmyran', title: 'PALMYRAN', sub: 'Ốc Đảo Pan-mi-ra • 帕尔米拉', icon: '🐪', c1: '#115e59', c2: '#134e4a', acc: '#2dd4bf' },
  { id: 'macedonian', title: 'MACEDONIAN', sub: 'Vương Triều Ma-xê-đô-ni-a • 马其顿', icon: '🧙‍♂️', c1: '#3730a3', c2: '#1e1b4b', acc: '#a5b4fc' },
  { id: 'greek', title: 'GREEK', sub: 'Hy Lạp Cổ Đại • 希腊', icon: '🔱', c1: '#1e40af', c2: '#172554', acc: '#60a5fa' }
];

console.log('Generating 16 Civ SVG Banners...');
civs.forEach(c => {
  const svg = generateCivSvg(c.title, c.sub, c.icon, c.c1, c.c2, c.acc);
  fs.writeFileSync(path.join('images/civs', `${c.id}.svg`), svg, 'utf8');
});

// 2. TẠO 26 ẢNH ICON BINH CHỦNG TỪNG ĐỜI
const units = [
  // Đời 1
  { id: 'villager', name: 'Nông Dân', icon: '👨‍🌾', ageColor: '#64748b', roleColor: '#22c55e' },
  { id: 'clubman', name: 'Lính Chùy', icon: '🏏', ageColor: '#64748b', roleColor: '#94a3b8' },
  { id: 'fishing_boat', name: 'Thuyền Cá', icon: '⛵', ageColor: '#64748b', roleColor: '#38bdf8' },
  
  // Đời 2
  { id: 'axeman', name: 'Lính Rìu', icon: '🪓', ageColor: '#0284c7', roleColor: '#ef4444' },
  { id: 'slinger', name: 'Quẩy Đá', icon: '🪨', ageColor: '#0284c7', roleColor: '#f59e0b' },
  { id: 'scout_cavalry', name: 'Ngựa Dò', icon: '🐎', ageColor: '#0284c7', roleColor: '#eab308' },
  { id: 'bowman', name: 'Cung Trần', icon: '🏹', ageColor: '#0284c7', roleColor: '#3b82f6' },
  { id: 'scout_ship', name: 'Tàu Chiến Nhỏ', icon: '🛶', ageColor: '#0284c7', roleColor: '#38bdf8' },

  // Đời 3
  { id: 'chariot_archer', name: 'Cung R', icon: '🏹', ageColor: '#d97706', roleColor: '#f97316' },
  { id: 'cavalry', name: 'Ngựa Chém', icon: '⚔️', ageColor: '#d97706', roleColor: '#ef4444' },
  { id: 'camelry', name: 'Lạc Đà', icon: '🐪', ageColor: '#d97706', roleColor: '#eab308' },
  { id: 'chariot', name: 'Sọc Đơn', icon: '🛞', ageColor: '#d97706', roleColor: '#fb923c' },
  { id: 'composite_bowman', name: 'Cung A', icon: '🎯', ageColor: '#d97706', roleColor: '#3b82f6' },
  { id: 'broad_swordsman', name: 'Lính Kiếm', icon: '🗡️', ageColor: '#d97706', roleColor: '#ef4444' },
  { id: 'hoplite', name: 'Lính Xiên', icon: '🛡️', ageColor: '#d97706', roleColor: '#f59e0b' },
  { id: 'stone_thrower', name: 'Cẩu Đá Nhỏ', icon: '☄️', ageColor: '#d97706', roleColor: '#ec4899' },
  { id: 'ballista', name: 'Pháo Tép', icon: '🏹', ageColor: '#d97706', roleColor: '#8b5cf6' },
  { id: 'priest', name: 'Phù Thủy', icon: '🧙‍♂️', ageColor: '#d97706', roleColor: '#a855f7' },

  // Đời 4
  { id: 'scythe_chariot', name: 'Đạp Đôi', icon: '🛞', ageColor: '#dc2626', roleColor: '#f97316' },
  { id: 'cataphract', name: 'Chém Thần', icon: '⚔️', ageColor: '#dc2626', roleColor: '#ef4444' },
  { id: 'armored_elephant', name: 'Voi Húc', icon: '🐘', ageColor: '#dc2626', roleColor: '#ea580c' },
  { id: 'elephant_archer', name: 'Voi Tên', icon: '🐘', ageColor: '#dc2626', roleColor: '#3b82f6' },
  { id: 'heavy_horse_archer', name: 'Cung C Thần', icon: '🏹', ageColor: '#dc2626', roleColor: '#06b6d4' },
  { id: 'legion', name: 'Kiếm Thần', icon: '🗡️', ageColor: '#dc2626', roleColor: '#ef4444' },
  { id: 'centurion', name: 'Xiên Thần', icon: '🛡️', ageColor: '#dc2626', roleColor: '#eab308' },
  { id: 'heavy_catapult', name: 'Cẩu Đá To', icon: '☄️', ageColor: '#dc2626', roleColor: '#ec4899' },
  { id: 'helepolis', name: 'Pháo Liên Thanh', icon: '🏹', ageColor: '#dc2626', roleColor: '#8b5cf6' },
  { id: 'juggernaught', name: 'Tàu Pháo Thần', icon: '🚢', ageColor: '#dc2626', roleColor: '#0284c7' }
];

console.log('Generating 28 Unit SVG Icons...');
units.forEach(u => {
  const svg = generateUnitSvg(u.icon, u.name, u.ageColor, u.roleColor);
  fs.writeFileSync(path.join('images/units', `${u.id}.svg`), svg, 'utf8');
});

console.log('ALL ASSETS GENERATED SUCCESSFULLY!');
