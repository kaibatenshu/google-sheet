/**
 * DỮ LIỆU MA TRẬN CHỈ SỐ QUÂN CHUẨN GOOGLE SHEET (ĐỜI 1 - ĐỜI 4)
 * CHUẨN XÁC THEO AGE OF EMPIRES: THE RISE OF ROME 1.0b (ĐẾ CHẾ 1 VIỆT NAM)
 */

// 1. DANH SÁCH 14 CHỈ SỐ (HÀNG B DỌC THEO TỪNG ĐỜI)
const MATRIX_METRICS = [
  { key: "food", icon: "🍗", label: "Thực (Food)" },
  { key: "wood", icon: "🪵", label: "Gỗ (Wood)" },
  { key: "gold", icon: "💰", label: "Vàng (Gold)" },
  { key: "stone", icon: "⚪", label: "Đá (Stone)" },
  { key: "hp", icon: "❤️", label: "Máu (HP)" },
  { key: "atk", icon: "⚔️", label: "Công (Attack)" },
  { key: "melee", icon: "Melee 🛡️", label: "Giáp cận chiến" },
  { key: "pierce", icon: "Pierce 🛡️", label: "Giáp chống tên" },
  { key: "range", icon: "🎯", label: "Tầm xa (Range)" },
  { key: "trainTime", icon: "⏱️", label: "Thời gian huấn luyện" },
  { key: "los", icon: "👁️", label: "Tầm nhìn (LOS)" },
  { key: "tech", icon: "📝", label: "Nâng cấp / Nhà" },
  { key: "speed", icon: "🏃", label: "Tốc độ di chuyển" },
  { key: "bonus", icon: "⚡", label: "Đặc tính / Bonus" }
];

// 2. DANH SÁCH 25 ĐƠN VỊ QUÂN DÀN HÀNG NGANG THEO CỘT
const MATRIX_UNITS = [
  // --- ĐỜI 1 (Stone Age) ---
  {
    id: "villager",
    name: "Nông dân",
    nameEn: "Villager",
    firstAge: 1,
    image: "images/units/villager.png",
    category: "dan",
    ages: {
      1: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Nhà Chính (TC)", speed: 1.1, bonus: "Lao động cơ bản" },
      2: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Nhà Chính (TC)", speed: 1.1, bonus: "Chặt gỗ 1 (BM)" },
      3: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Bánh xe (BM)", speed: 1.43, bonus: "Tốc độ +30%, Đào vàng 1, Đá 1" },
      4: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Kinh tế tối đa", speed: 1.43, bonus: "Đào vàng 2, Đá 2, Gỗ 2, Ruộng 2" }
    }
  },
  {
    id: "clubman",
    name: "Chùy",
    nameEn: "Clubman",
    firstAge: 1,
    image: "images/units/clubman.png",
    category: "bo-binh",
    ages: {
      1: { food: 50, wood: 0, gold: 0, stone: 0, hp: 40, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Doanh trại (BB)", speed: 1.2, bonus: "Bộ binh cận chiến sơ khai" },
      2: null,
      3: null,
      4: null
    }
  },

  // --- ĐỜI 2 (Tool Age) ---
  {
    id: "axeman",
    name: "Rìu",
    nameEn: "Axeman",
    firstAge: 2,
    image: "images/units/axeman.png",
    category: "bo-binh",
    ages: {
      1: null,
      2: { food: 50, wood: 0, gold: 0, stone: 0, hp: 50, atk: 5, melee: 0, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Nâng từ Chùy (BB)", speed: 1.2, bonus: "Bộ binh chém đời 2" },
      3: null,
      4: null
    }
  },
  {
    id: "slinger",
    name: "Quẩy đá",
    nameEn: "Slinger",
    firstAge: 2,
    image: "images/units/slinger.png",
    category: "cung-thu",
    ages: {
      1: null,
      2: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: "2 (+1.5)", melee: 0, pierce: 2, range: 4, trainTime: "24s", los: 5, tech: "Doanh trại (BB)", speed: 1.2, bonus: "+1.5 vs Cung thủ, +2 vs Nhà" },
      3: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: "2 (+1.5)", melee: "0+2 (BS)", pierce: 2, range: "4+1 (Gỗ)", trainTime: "24s", los: 5, tech: "Hưởng BS & BM", speed: 1.2, bonus: "Tầm xa 5, giáp cận chiến +2" },
      4: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: "2 (+1.5)", melee: "0+4 (BS)", pierce: 2, range: "4+2 (Gỗ)", trainTime: "24s", los: 5, tech: "Công nghệ tối đa", speed: 1.2, bonus: "Tầm xa 6, giáp cận chiến +4" }
    }
  },
  {
    id: "bowman",
    name: "Cung T",
    nameEn: "Bowman",
    firstAge: 2,
    image: "images/units/bowman.png",
    category: "cung-thu",
    ages: {
      1: null,
      2: { food: 40, wood: 20, gold: 0, stone: 0, hp: 35, atk: 3, melee: 0, pierce: 0, range: 5, trainTime: "30s", los: 6, tech: "Trường bắn (BA)", speed: 1.2, bonus: "Bắn xa cơ bản đời 2" },
      3: { food: 40, wood: 20, gold: 0, stone: 0, hp: 35, atk: 3, melee: 0, pierce: 0, range: "5+1 (Gỗ)", trainTime: "30s", los: 6, tech: "Trường bắn (BA)", speed: 1.2, bonus: "Tầm xa 6 ô (sau Chặt gỗ 1)" },
      4: null
    }
  },
  {
    id: "scout_cavalry",
    name: "Ngựa dò",
    nameEn: "Scout Cavalry",
    firstAge: 2,
    image: "images/units/scout_cavalry.png",
    category: "ky-binh",
    ages: {
      1: null,
      2: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "30s", los: 8, tech: "Nhà ngựa (BL)", speed: 2.0, bonus: "Dò map, chăn dân, kháng hú" },
      3: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: "3+2 (BS)", melee: "0+2 (BS)", pierce: 0, range: 0, trainTime: "30s", los: 8, tech: "Hưởng BS công giáp", speed: 2.0, bonus: "Công 5, giáp 2 (chăn dân, câu giờ)" },
      4: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: "3+4 (BS)", melee: "0+4 (BS)", pierce: "0+2 (BC)", range: 0, trainTime: "30s", los: 8, tech: "BS & BC tối đa", speed: 2.0, bonus: "Công 7, giáp 4/2" }
    }
  },

  // --- ĐỜI 3 (Bronze Age) ---
  {
    id: "chariot_archer",
    name: "Cung R",
    nameEn: "Chariot Archer",
    firstAge: 3,
    image: "images/units/chariot_archer.png",
    category: "cung-thu",
    ages: {
      1: null,
      2: null,
      3: { food: 40, wood: 70, gold: 0, stone: 0, hp: 70, atk: 4, melee: 0, pierce: 0, range: 7, trainTime: "40s", los: 8, tech: "Bánh xe (BA)", speed: 2.0, bonus: "Cơ động, tầm xa 7, kháng phù thủy" },
      4: { food: 40, wood: 70, gold: 0, stone: 0, hp: 70, atk: "4+1 (Lửa)", melee: 0, pierce: "0+2 (BC)", range: 7, trainTime: "40s", los: 8, tech: "Lửa (BC) & Giáp BC", speed: 2.0, bonus: "Cung R lửa công 5, giáp tên 2" }
    }
  },
  {
    id: "camelry",
    name: "Lạc đà",
    nameEn: "Camelry",
    firstAge: 3,
    image: "images/units/camelry.png",
    category: "ky-binh",
    ages: {
      1: null,
      2: null,
      3: { food: 70, wood: 0, gold: 60, stone: 0, hp: 125, atk: "6 (+8 vs Kỵ)", melee: 0, pierce: 0, range: 0, trainTime: "30s", los: 5, tech: "Nhà ngựa (BL)", speed: 1.75, bonus: "Khắc tinh tuyệt đối của kỵ binh" },
      4: { food: 70, wood: 0, gold: 60, stone: 0, hp: 150, atk: "6+4=10 (+8 vs Kỵ)", melee: 4, pierce: 2, range: 0, trainTime: "30s", los: 5, tech: "Đầu máu & BS/BC max", speed: 1.75, bonus: "Công 10, giáp 4/2, 150 máu" }
    }
  },
  {
    id: "cavalry",
    name: "Ngựa chém",
    nameEn: "Cavalry",
    firstAge: 3,
    image: "images/units/cavalry.png",
    category: "ky-binh",
    ages: {
      1: null,
      2: null,
      3: { food: 70, wood: 0, gold: 80, stone: 0, hp: 150, atk: "8 (+5 vs BB)", melee: 1, pierce: 0, range: 0, trainTime: "40s", los: 5, tech: "Nhà ngựa (BL)", speed: 1.8, bonus: "Sát thương đột kích, +5 vs bộ binh" },
      4: { food: 70, wood: 0, gold: 80, stone: 0, hp: 150, atk: "8+4=12 (+5 vs BB)", melee: "1+4=5", pierce: "0+2 (BC)", range: 0, trainTime: "40s", los: 5, tech: "BS & BC tối đa", speed: 1.8, bonus: "Ngựa chém 5 giáp, công 12" }
    }
  },
  {
    id: "chariot",
    name: "Sọc đơn",
    nameEn: "Chariot",
    firstAge: 3,
    image: "images/units/chariot.png",
    category: "ky-binh",
    ages: {
      1: null,
      2: null,
      3: { food: 70, wood: 40, gold: 0, stone: 0, hp: 100, atk: "7 (x2 vs Hú)", melee: 0, pierce: 0, range: 0, trainTime: "40s", los: 5, tech: "Bánh xe (BL)", speed: 1.8, bonus: "Rác gỗ thịt, x2 sát thương vs phù thủy" },
      4: { food: 70, wood: 40, gold: 0, stone: 0, hp: 100, atk: "7+4=11 (x2 vs Hú)", melee: 4, pierce: 2, range: 0, trainTime: "40s", los: 5, tech: "BS & BC tối đa", speed: 1.8, bonus: "Công 11, giáp 4/2, kháng hú" }
    }
  },
  {
    id: "composite_bowman",
    name: "Cung A",
    nameEn: "Composite Bowman",
    firstAge: 3,
    image: "images/units/composite_bowman.png",
    category: "cung-thu",
    ages: {
      1: null,
      2: null,
      3: { food: 0, wood: 40, gold: 20, stone: 0, hp: 45, atk: 5, melee: 0, pierce: 0, range: 7, trainTime: "30s", los: 8, tech: "Trường bắn (BA)", speed: 1.2, bonus: "Bắn xa tầm 7, dồn dame cực mạnh" },
      4: { food: 0, wood: 40, gold: 20, stone: 0, hp: 45, atk: "5+1 (Lửa)", melee: 0, pierce: 2, range: 7, trainTime: "30s", los: 8, tech: "Lửa (BC) & Giáp BC", speed: 1.2, bonus: "Cung A lửa công 6, giáp tên 2" }
    }
  },
  {
    id: "broad_swordsman",
    name: "Kiếm chém",
    nameEn: "Broad Swordsman",
    firstAge: 3,
    image: "images/units/broad_swordsman.png",
    category: "bo-binh",
    ages: {
      1: null,
      2: null,
      3: { food: 35, wood: 0, gold: 15, stone: 0, hp: 70, atk: 9, melee: 1, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Doanh trại (BB)", speed: 1.2, bonus: "Đục nhà nhanh, trị voi sọc" },
      4: { food: 35, wood: 0, gold: 15, stone: 0, hp: 100, atk: "11+4=15", melee: 6, pierce: 2, range: 0, trainTime: "26s", los: 4, speed: 1.2, tech: "Lên Kiếm dài BB", bonus: "Kiếm dài công 15 giáp 6" }
    }
  },
  {
    id: "hoplite",
    name: "Lính xiên",
    nameEn: "Hoplite",
    firstAge: 3,
    image: "images/units/hoplite.png",
    category: "bo-binh",
    ages: {
      1: null,
      2: null,
      3: { food: 60, wood: 0, gold: 40, stone: 0, hp: 120, atk: 17, melee: 5, pierce: 0, range: 0, trainTime: "36s", los: 4, tech: "Hàn Lâm Viện (BY)", speed: 1.0, bonus: "Cận chiến cực mạnh công 17 giáp 5" },
      4: { food: 60, wood: 0, gold: 40, stone: 0, hp: 140, atk: 20, melee: 7, pierce: 0, range: 0, trainTime: "36s", los: 4, speed: 1.0, tech: "Nâng lên Phalanx BY", bonus: "Phalanx công 20 giáp 7" }
    }
  },
  {
    id: "stone_thrower",
    name: "Cẩu đá",
    nameEn: "Stone Thrower",
    firstAge: 3,
    image: "images/units/stone_thrower.png",
    category: "phao-binh",
    ages: {
      1: null,
      2: null,
      3: { food: 0, wood: 180, gold: 80, stone: 0, hp: 150, atk: 50, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, speed: 0.8, tech: "Xưởng pháo (BK)", bonus: "Bắn đá nổ lan diện rộng" },
      4: { food: 0, wood: 180, gold: 80, stone: 0, hp: 150, atk: 50, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, speed: 0.8, tech: "Xưởng pháo (BK)", bonus: "Cẩu đá cơ bản" }
    }
  },
  {
    id: "ballista",
    name: "Pháo tép",
    nameEn: "Ballista",
    firstAge: 3,
    image: "images/units/ballista.png",
    category: "phao-binh",
    ages: {
      1: null,
      2: null,
      3: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, speed: 0.8, tech: "Xưởng pháo (BK)", bonus: "Bắn tên xuyên hàng dọc" },
      4: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, speed: 0.8, tech: "Xưởng pháo (BK)", bonus: "Pháo tép xuyên hàng" }
    }
  },
  {
    id: "priest",
    name: "Phù thủy",
    nameEn: "Priest",
    firstAge: 3,
    image: "images/units/priest.png",
    category: "phu-thuy",
    ages: {
      1: null,
      2: null,
      3: { food: 0, wood: 0, gold: 125, stone: 0, hp: 25, atk: "Thu phục", melee: 0, pierce: 0, range: 9, trainTime: "50s", los: 10, speed: 0.9, tech: "Đền thờ (BP)", bonus: "Hú thu phục & hồi máu" },
      4: { food: 0, wood: 0, gold: 125, stone: 0, hp: 25, atk: "Thu phục", melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, speed: 0.9, tech: "Nâng cấp BP", bonus: "Hú xa, hú công trình" }
    }
  },

  // --- ĐỜI 4 (Iron Age) ---
  {
    id: "scythe_chariot",
    name: "Đạp đôi",
    nameEn: "Scythe Chariot",
    firstAge: 4,
    image: "images/units/scythe_chariot.png",
    category: "ky-binh",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 75, wood: 75, gold: 0, stone: 0, hp: 120, atk: "9+4=13", melee: 6, pierce: 4, range: 0, trainTime: "40s", los: 5, speed: 1.8, tech: "Nâng từ Sọc đơn BL", bonus: "Chém lan diện rộng, rác gỗ thịt" }
    }
  },
  {
    id: "cataphract",
    name: "Chém thần",
    nameEn: "Cataphract",
    firstAge: 4,
    image: "images/units/cataphract.png",
    category: "ky-binh",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 70, wood: 0, gold: 80, stone: 0, hp: 180, atk: "12+4=16 (+5 vs BB)", melee: 7, pierce: 2, range: 0, trainTime: "40s", los: 5, speed: 1.8, tech: "Nâng cấp tại BL", bonus: "+5 sát thương vs Bộ binh, giáp 7" }
    }
  },
  {
    id: "armored_elephant",
    name: "Voi húc",
    nameEn: "Armored Elephant",
    firstAge: 4,
    image: "images/units/armored_elephant.png",
    category: "ky-binh",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 170, wood: 0, gold: 40, stone: 0, hp: 600, atk: "18+4=22", melee: 6, pierce: 3, range: 0, trainTime: "50s", los: 5, speed: 1.0, tech: "Nâng cấp tại BL", bonus: "Máu dày 600, húc sập nhà, đè lan" }
    }
  },
  {
    id: "elephant_archer",
    name: "Voi tên",
    nameEn: "Elephant Archer",
    firstAge: 4,
    image: "images/units/elephant_archer.png",
    category: "cung-thu",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 180, wood: 0, gold: 60, stone: 0, hp: 600, atk: "6+1=7 (Lửa)", melee: 0, pierce: 2, range: "7+2=9 (Gỗ)", trainTime: "50s", los: 8, speed: 1.0, tech: "Trường bắn (BA)", bonus: "Trụ cung di động cực trâu" }
    }
  },
  {
    id: "heavy_horse_archer",
    name: "Cung C thần",
    nameEn: "Heavy Horse Archer",
    firstAge: 4,
    image: "images/units/heavy_horse_archer.png",
    category: "cung-thu",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 50, wood: 0, gold: 70, stone: 0, hp: 90, atk: "8+1=9 (Lửa)", melee: 0, pierce: 3, range: "7+2=9 (Gỗ)", trainTime: "40s", los: 8, speed: 2.0, tech: "Nâng từ Cung C (BA)", bonus: "Tốc độ xé gió 2.0, rỉa máu" }
    }
  },
  {
    id: "legion",
    name: "Legion",
    nameEn: "Legion",
    firstAge: 4,
    image: "images/units/legion.png",
    category: "bo-binh",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 35, wood: 0, gold: 15, stone: 0, hp: 160, atk: "13+4=17", melee: 6, pierce: 3, range: 0, trainTime: "26s", los: 4, speed: 1.2, tech: "Doanh trại (BB)", bonus: "Bộ binh cận chiến tối hậu, đông như kiến" }
    }
  },
  {
    id: "centurion",
    name: "Centurion",
    nameEn: "Centurion",
    firstAge: 4,
    image: "images/units/centurion.png",
    category: "bo-binh",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 60, wood: 0, gold: 40, stone: 0, hp: 160, atk: 30, melee: 8, pierce: 0, range: 0, trainTime: "36s", los: 4, speed: 1.0, tech: "Hàn Lâm Viện (BY)", bonus: "Công 30 giáp 8 vô địch cận chiến" }
    }
  },
  {
    id: "heavy_catapult",
    name: "Cẩu to",
    nameEn: "Heavy Catapult",
    firstAge: 4,
    image: "images/units/heavy_catapult.png",
    category: "phao-binh",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 0, wood: 180, gold: 80, stone: 0, hp: 175, atk: 60, melee: 0, pierce: 0, range: 12, trainTime: "50s", los: 12, speed: 0.8, tech: "Nâng từ Cẩu đá BK", bonus: "Hủy diệt diện rộng cực đại" }
    }
  },
  {
    id: "helepolis",
    name: "Helepolis",
    nameEn: "Helepolis",
    firstAge: 4,
    image: "images/units/helepolis.png",
    category: "phao-binh",
    ages: {
      1: null,
      2: null,
      3: null,
      4: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, speed: 0.8, tech: "Nâng từ Pháo tép BK", bonus: "Bắn liên thanh như súng máy" }
    }
  }
];

/**
 * HÀM TÍNH TOÁN CHỈ SỐ MA TRẬN CHO TỪNG QUÂN THEO QUỐC GIA VÀ ĐỜI
 * @param {Object} unit Đơn vị quân trong MATRIX_UNITS
 * @param {string} civId ID của quốc gia (assyrian, shang, egyptian...)
 * @param {number} age Đời đang xét (1, 2, 3, 4)
 * @returns {Object} { hasUnit: boolean, isAgeAvailable: boolean, stats: Object }
 */
function getUnitMatrixStats(unit, civId, age) {
  const civ = AOE_CIVILIZATIONS.find(c => c.id === civId) || AOE_CIVILIZATIONS[0];
  let hasUnit = true;

  // 1. KIỂM TRA TECH TREE CỦA QUỐC GIA CÓ SỞ HỮU QUÂN NÀY KHÔNG
  if (unit.id === "chariot_archer" && (!civ.techTree.wheel || !civ.techTree.chariotArcher)) hasUnit = false;
  if (unit.id === "chariot" && !civ.techTree.wheel) hasUnit = false;
  if (unit.id === "scythe_chariot" && (!civ.techTree.wheel || !civ.techTree.scytheChariot)) hasUnit = false;
  if (unit.id === "cavalry" && !civ.techTree.cavalry) hasUnit = false;
  if (unit.id === "cataphract" && !civ.techTree.cataphract) hasUnit = false;
  if (unit.id === "camelry" && ["greek", "yamato", "egyptian", "macedonian", "roman", "assyrian", "minoan"].includes(civ.id)) hasUnit = false;
  if (unit.id === "armored_elephant" && (!civ.techTree.elephant || ["shang", "assyrian", "egyptian", "babylonian", "hittite", "sumerian", "yamato", "minoan", "choson", "roman", "palmyran", "macedonian", "greek"].includes(civ.id))) hasUnit = false;
  if (unit.id === "elephant_archer" && (civ.id !== "phoenician" && civ.id !== "carthaginian")) hasUnit = false;
  if (unit.id === "composite_bowman" && !civ.techTree.compositeBowman) hasUnit = false;
  if (unit.id === "heavy_horse_archer" && !["hittite", "yamato", "shang"].includes(civ.id)) hasUnit = false;
  if (unit.id === "legion" && !["choson", "roman", "yamato", "greek", "macedonian", "phoenician"].includes(civ.id)) hasUnit = false;
  if (unit.id === "hoplite" && ["egyptian", "assyrian", "babylonian", "palmyran", "persian", "shang", "hittite"].includes(civ.id)) hasUnit = false;
  if (unit.id === "centurion" && !civ.techTree.centurion) hasUnit = false;
  if (unit.id === "stone_thrower" && civ.id === "yamato") hasUnit = false;
  if (unit.id === "heavy_catapult" && !civ.techTree.heavyCatapult) hasUnit = false;
  if (unit.id === "helepolis" && !civ.techTree.helepolis) hasUnit = false;
  if (unit.id === "priest" && !civ.techTree.priest) hasUnit = false;

  if (!hasUnit) {
    return { hasUnit: false, isAgeAvailable: false, stats: null };
  }

  // 2. KIỂM TRA ĐỜI CÓ MỞ KHÓA QUÂN NÀY CHƯA
  const ageData = unit.ages[age];
  if (!ageData) {
    return { hasUnit: true, isAgeAvailable: false, stats: null };
  }

  // 3. SAO CHÉP VÀ TÍNH TOÁN CHỈ SỐ THEO BONUS CỦA QUỐC GIA
  const s = Object.assign({}, ageData);

  switch (civ.id) {
    case "shang":
      if (unit.id === "villager") s.food = 35; // Nông dân rẻ nhất: 35 thực
      break;

    case "assyrian":
      if (unit.id === "villager") s.speed = "1.43 (+30%)";
      if (["bowman", "chariot_archer", "composite_bowman"].includes(unit.id)) {
        s.bonus = "⚡ Bắn nhanh +33%";
        s.trainTime = (s.trainTime || "") + " (Bắn +33%)";
      }
      break;

    case "egyptian":
      if (unit.id === "villager") s.bonus = (s.bonus ? s.bonus + " • " : "") + "💰 Đào vàng 13 (+20%)";
      if (unit.id === "chariot_archer") s.hp = "93 (+33% HP)";
      if (unit.id === "chariot") s.hp = "133 (+33% HP)";
      if (unit.id === "scythe_chariot") s.hp = "160 (+33% HP)";
      if (unit.id === "priest") s.range = (age === 3 ? "12 (+3)" : "15 (+3)");
      break;

    case "babylonian":
      if (unit.id === "villager") s.bonus = (s.bonus ? s.bonus + " • " : "") + "⚪ Đào đá 13 (+30%)";
      if (unit.id === "priest") s.bonus = (s.bonus ? s.bonus + " • " : "") + "⚡ Hồi mana +30%";
      break;

    case "hittite":
      if (unit.id === "bowman") s.atk = "4 (+1)";
      if (unit.id === "chariot_archer") s.atk = (age === 3 ? "5 (+1)" : "6 (+1 Lửa)");
      if (unit.id === "composite_bowman") s.atk = (age === 3 ? "6 (+1)" : "7 (+1 Lửa)");
      if (unit.id === "heavy_horse_archer") s.atk = "10 (+1 Lửa)";
      if (unit.id === "stone_thrower") s.hp = "300 (x2 Máu)";
      break;

    case "phoenician":
      if (unit.id === "villager") s.bonus = (s.bonus ? s.bonus + " • " : "") + "🪵 Chặt gỗ 13 (+3)";
      if (unit.id === "armored_elephant") s.food = "127.5 (-25%)";
      if (unit.id === "elephant_archer") s.food = "135 (-25%)";
      break;

    case "sumerian":
      if (unit.id === "villager") s.hp = "40 (+60%)";
      if (unit.id === "stone_thrower" || unit.id === "heavy_catapult") s.bonus = "⚡ Bắn nhanh x2";
      break;

    case "persian":
      if (unit.id === "villager") {
        s.bonus = (s.bonus ? s.bonus + " • " : "") + "🥩 Ăn voi hươu +30%";
        if (age >= 3) s.speed = "1.10 (Không bánh xe)";
      }
      if (unit.id === "armored_elephant") s.speed = "1.50 (+50%)";
      break;

    case "yamato":
      if (unit.id === "villager") s.speed = "1.43 (+30%)";
      if (unit.id === "scout_cavalry") s.food = "75 (-25%)";
      if (unit.id === "cavalry") {
        s.food = "52.5 (-25%)";
        s.gold = "60 (-25%)";
      }
      if (unit.id === "cataphract") {
        s.food = "52.5 (-25%)";
        s.gold = "60 (-25%)";
      }
      if (unit.id === "heavy_horse_archer") {
        s.food = "37.5 (-25%)";
        s.gold = "52.5 (-25%)";
      }
      break;

    case "minoan":
      if (unit.id === "composite_bowman") s.range = (age === 3 ? "9 (+2)" : "11 (+2)");
      break;

    case "choson":
      if (unit.id === "villager" && age >= 3) s.speed = "1.10 (Không bánh xe)";
      if (unit.id === "broad_swordsman") s.hp = "150 (+80)";
      if (unit.id === "legion") s.hp = "240 (+80)";
      if (unit.id === "priest") s.gold = "85 (-30%)";
      break;

    case "roman":
      if (unit.id === "villager" && age >= 3) s.speed = "1.10 (Không bánh xe)";
      if (unit.id === "broad_swordsman" || unit.id === "legion") s.bonus = "⚡ Chém nhanh +33%";
      break;

    case "carthaginian":
      if (unit.id === "villager" && age >= 3) s.speed = "1.10 (Không bánh xe)";
      if (unit.id === "armored_elephant" || unit.id === "elephant_archer") s.hp = "750 (+25%)";
      if (unit.id === "hoplite") s.hp = "150 (+25%)";
      if (unit.id === "centurion") s.hp = "200 (+25%)";
      break;

    case "palmyran":
      if (unit.id === "villager") {
        s.food = "75 (+50%)";
        s.melee = "1 (+1)";
        s.bonus = "⚡ Làm việc +20%, chuyển tài nguyên 0% thuế";
      }
      if (unit.id === "camelry") s.speed = "2.19 (+25% Siêu tốc)";
      break;

    case "macedonian":
      if (unit.id === "villager" && age >= 3) s.speed = "1.10 (Không bánh xe)";
      if (unit.id === "stone_thrower" || unit.id === "heavy_catapult") {
        s.wood = "90 (-50%)";
        s.gold = "40 (-50%)";
      }
      if (unit.id === "ballista" || unit.id === "helepolis") {
        s.wood = "50 (-50%)";
        s.gold = "40 (-50%)";
      }
      if (unit.id === "hoplite" || unit.id === "centurion") {
        s.pierce = "2 (+2 Giáp tên)";
      }
      s.bonus = (s.bonus ? s.bonus + " • " : "") + "Kháng phù thủy x4";
      if (!["stone_thrower", "heavy_catapult", "ballista", "helepolis"].includes(unit.id)) {
        if (typeof s.los === 'number') s.los = s.los + 2;
        else s.los = String(s.los) + " (+2)";
      }
      break;

    case "greek":
      if (unit.id === "villager" && age >= 3) s.speed = "1.10 (Không bánh xe)";
      if (unit.id === "hoplite" || unit.id === "centurion") s.speed = "1.30 (+30% lướt gió)";
      break;
  }

  return { hasUnit: true, isAgeAvailable: true, stats: s };
}
