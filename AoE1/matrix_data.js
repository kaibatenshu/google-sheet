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
  { key: "tech", icon: "📝", label: "Nơi tạo / Nâng cấp" },
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
      1: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "TC", speed: 1.1, bonus: "Cơ bản" },
      2: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "TC", speed: 1.1, bonus: "Chặt gỗ" },
      3: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Bánh xe", speed: 1.43, bonus: "Bánh xe" },
      4: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Max KT", speed: 1.43, bonus: "Max KT" }
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
      1: { food: 50, wood: 0, gold: 0, stone: 0, hp: 40, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "BB", speed: 1.2, bonus: "Cơ bản" },
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
      2: { food: 50, wood: 0, gold: 0, stone: 0, hp: 50, atk: 5, melee: 0, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "BB", speed: 1.2, bonus: "Cận chiến" },
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
      2: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: 2, melee: 0, pierce: 2, range: 4, trainTime: "24s", los: 5, tech: "BB", speed: 1.2, bonus: "+1.5 vs Cung" },
      3: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: 2, melee: 2, pierce: 2, range: 5, trainTime: "24s", los: 5, tech: "BS & BM", speed: 1.2, bonus: "+1.5 vs Cung" },
      4: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: 2, melee: 4, pierce: 2, range: 6, trainTime: "24s", los: 5, tech: "Max BS/BM", speed: 1.2, bonus: "+1.5 vs Cung" }
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
      2: { food: 40, wood: 20, gold: 0, stone: 0, hp: 35, atk: 3, melee: 0, pierce: 0, range: 5, trainTime: "30s", los: 6, tech: "BA", speed: 1.2, bonus: "Cơ bản" },
      3: { food: 40, wood: 20, gold: 0, stone: 0, hp: 35, atk: 3, melee: 0, pierce: 0, range: 6, trainTime: "30s", los: 6, tech: "BA", speed: 1.2, bonus: "Tầm xa 6" },
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
      2: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "30s", los: 8, tech: "BL", speed: 2.0, bonus: "Kháng hú" },
      3: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: 5, melee: 2, pierce: 0, range: 0, trainTime: "30s", los: 8, tech: "BS", speed: 2.0, bonus: "Kháng hú" },
      4: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: 7, melee: 4, pierce: 2, range: 0, trainTime: "30s", los: 8, tech: "Max BS/BC", speed: 2.0, bonus: "Kháng hú" }
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
      3: { food: 40, wood: 70, gold: 0, stone: 0, hp: 70, atk: 4, melee: 0, pierce: 0, range: 7, trainTime: "40s", los: 8, tech: "Bánh xe", speed: 2.0, bonus: "Kháng hú" },
      4: { food: 40, wood: 70, gold: 0, stone: 0, hp: 70, atk: 5, melee: 0, pierce: 2, range: 7, trainTime: "40s", los: 8, tech: "Lửa BC", speed: 2.0, bonus: "Kháng hú" }
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
      3: { food: 70, wood: 0, gold: 60, stone: 0, hp: 125, atk: 6, melee: 0, pierce: 0, range: 0, trainTime: "30s", los: 5, tech: "BL", speed: 2.0, bonus: "+8 vs Kỵ, +4 vs Xe" },
      4: { food: 70, wood: 0, gold: 60, stone: 0, hp: 150, atk: 10, melee: 4, pierce: 2, range: 0, trainTime: "30s", los: 5, tech: "Đầu máu", speed: 2.0, bonus: "+8 vs Kỵ, +4 vs Xe" }
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
      3: { food: 70, wood: 0, gold: 80, stone: 0, hp: 150, atk: 8, melee: 0, pierce: 0, range: 0, trainTime: "40s", los: 5, tech: "BL", speed: 2.0, bonus: "+5 vs BB" },
      4: { food: 70, wood: 0, gold: 80, stone: 0, hp: 150, atk: 12, melee: 4, pierce: 2, range: 0, trainTime: "40s", los: 5, tech: "Max BS/BC", speed: 2.0, bonus: "+5 vs BB" }
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
      3: { food: 40, wood: 60, gold: 0, stone: 0, hp: 100, atk: 7, melee: 0, pierce: 0, range: 0, trainTime: "40s", los: 5, tech: "Bánh xe", speed: 2.0, bonus: "Kháng hú" },
      4: { food: 40, wood: 60, gold: 0, stone: 0, hp: 100, atk: 11, melee: 4, pierce: 2, range: 0, trainTime: "40s", los: 5, tech: "Max BS/BC", speed: 2.0, bonus: "Kháng hú" }
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
      3: { food: 40, wood: 0, gold: 20, stone: 0, hp: 45, atk: 5, melee: 0, pierce: 0, range: 7, trainTime: "30s", los: 9, tech: "BA", speed: 1.2, bonus: "Tầm xa 7" },
      4: { food: 40, wood: 0, gold: 20, stone: 0, hp: 45, atk: 6, melee: 0, pierce: 2, range: 7, trainTime: "30s", los: 9, tech: "Lửa BC", speed: 1.2, bonus: "Lửa tầm 7" }
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
      3: { food: 35, wood: 0, gold: 15, stone: 0, hp: 70, atk: 9, melee: 1, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "BB", speed: 1.2, bonus: "Đục nhà" },
      4: { food: 35, wood: 0, gold: 15, stone: 0, hp: 80, atk: 15, melee: 6, pierce: 2, range: 0, trainTime: "26s", los: 4, speed: 1.2, tech: "Kiếm dài", bonus: "Kiếm dài" }
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
      3: { food: 60, wood: 0, gold: 40, stone: 0, hp: 120, atk: 17, melee: 5, pierce: 0, range: 0, trainTime: "36s", los: 4, tech: "BY", speed: 0.9, bonus: "Giáp dày" },
      4: { food: 60, wood: 0, gold: 40, stone: 0, hp: 120, atk: 20, melee: 7, pierce: 0, range: 0, trainTime: "36s", los: 4, speed: 0.9, tech: "Phalanx", bonus: "Phalanx" }
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
      3: { food: 0, wood: 180, gold: 80, stone: 0, hp: 75, atk: 50, melee: 0, pierce: 0, range: 10, trainTime: "60s", los: 10, speed: 0.8, tech: "BK", bonus: "Bắn lan 1.0" },
      4: { food: 0, wood: 180, gold: 80, stone: 0, hp: 75, atk: 60, melee: 0, pierce: 0, range: 12, trainTime: "60s", los: 12, speed: 0.8, tech: "Onager BK", bonus: "Bắn lan 1.5" }
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
      3: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 9, trainTime: "50s", los: 10, speed: 0.8, tech: "BK", bonus: "Xuyên thẳng" },
      4: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 9, trainTime: "50s", los: 10, speed: 0.8, tech: "BK", bonus: "Xuyên thẳng" }
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
      3: { food: 0, wood: 0, gold: 125, stone: 0, hp: 25, atk: 0, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, speed: 0.8, tech: "BP", bonus: "Hú & hồi" },
      4: { food: 0, wood: 0, gold: 125, stone: 0, hp: 25, atk: 0, melee: 0, pierce: 0, range: 13, trainTime: "50s", los: 10, speed: 0.8, tech: "BP", bonus: "Hú xa & nhà" }
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
      4: { food: 40, wood: 60, gold: 0, stone: 0, hp: 120, atk: 9, melee: 2, pierce: 0, range: 0, trainTime: "40s", los: 5, speed: 2.0, tech: "Đạp đôi", bonus: "Chém lan 37.5%" }
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
      4: { food: 70, wood: 0, gold: 80, stone: 0, hp: 180, atk: 12, melee: 3, pierce: 1, range: 0, trainTime: "40s", los: 5, speed: 2.0, tech: "BL", bonus: "+5 vs BB" }
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
      4: { food: 170, wood: 0, gold: 40, stone: 0, hp: 600, atk: 18, melee: 2, pierce: 1, range: 0, trainTime: "50s", los: 5, speed: 0.9, tech: "BL", bonus: "Dẫm lan 0.5" }
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
      4: { food: 180, wood: 0, gold: 60, stone: 0, hp: 600, atk: 5, melee: 0, pierce: 0, range: 7, trainTime: "50s", los: 9, speed: 0.9, tech: "BA", bonus: "Trâu máu" }
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
      4: { food: 50, wood: 0, gold: 70, stone: 0, hp: 90, atk: 8, melee: 0, pierce: 2, range: 7, trainTime: "40s", los: 9, speed: 2.5, tech: "BA", bonus: "Kỵ phi 2.5" }
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
      4: { food: 35, wood: 0, gold: 15, stone: 0, hp: 160, atk: 13, melee: 2, pierce: 0, range: 0, trainTime: "26s", los: 5, speed: 1.2, tech: "Legion", bonus: "Choson 240 HP" }
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
      4: { food: 60, wood: 0, gold: 40, stone: 0, hp: 160, atk: 30, melee: 8, pierce: 0, range: 0, trainTime: "36s", los: 5, speed: 0.9, tech: "Centurion", bonus: "Công 30 Giáp 8" }
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
      4: { food: 0, wood: 180, gold: 80, stone: 0, hp: 150, atk: 60, melee: 0, pierce: 0, range: 13, trainTime: "60s", los: 13, speed: 0.8, tech: "Cẩu to BK", bonus: "Lan 2.0 ô" }
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
      4: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, speed: 0.8, tech: "Helepolis BK", bonus: "Bắn RoF 1.5s" }
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

  // 3. SAO CHÉP VÀ TÍNH TOÁN CHỈ SỐ THEO BONUS CỦA QUỐC GIA (GIÁ TRỊ SẠCH, GỌN GÀNG)
  const s = Object.assign({}, ageData);

  switch (civ.id) {
    case "shang":
      if (unit.id === "villager") s.food = 35; // Dân rẻ 35 thực
      break;

    case "assyrian":
      if (unit.id === "villager") s.speed = 1.43; // Dân chạy nhanh 1.43
      if (["bowman", "chariot_archer", "composite_bowman"].includes(unit.id)) {
        s.bonus = "Bắn +33%"; // Tốc độ bắn nhanh +33%
      }
      break;

    case "egyptian":
      if (unit.id === "villager") s.bonus = "Đào vàng +20%";
      if (unit.id === "chariot_archer") s.hp = 93; // 70 + 33%
      if (unit.id === "chariot") s.hp = 133; // 100 + 33%
      if (unit.id === "scythe_chariot") s.hp = 160; // 120 + 33%
      if (unit.id === "priest") s.range = (age === 3 ? 13 : 16); // +3 tầm xa (gốc 10 -> 13)
      break;

    case "babylonian":
      if (unit.id === "villager") s.bonus = "Đào đá +30%";
      if (unit.id === "priest") s.bonus = "Hồi mana x3";
      break;

    case "hittite":
      if (unit.id === "bowman") s.atk = 4;
      if (unit.id === "chariot_archer") s.atk = (age === 3 ? 5 : 6);
      if (unit.id === "composite_bowman") s.atk = (age === 3 ? 6 : 7);
      if (unit.id === "heavy_horse_archer") s.atk = 10;
      if (unit.id === "stone_thrower") s.hp = 150; // 75 x 2
      if (unit.id === "heavy_catapult") s.hp = 300; // 150 x 2
      break;

    case "phoenician":
      if (unit.id === "villager") s.bonus = "Chặt gỗ +3";
      if (unit.id === "armored_elephant") s.food = 127.5; // -25% thực
      if (unit.id === "elephant_archer") s.food = 135; // -25% thực
      break;

    case "sumerian":
      if (unit.id === "villager") s.hp = 40; // 40 HP (+60%)
      if (unit.id === "stone_thrower" || unit.id === "heavy_catapult") s.bonus = "Bắn x2";
      break;

    case "persian":
      if (unit.id === "villager") {
        s.bonus = "Ăn thịt +30%";
        if (age >= 3) s.speed = 1.10; // Không bánh xe
      }
      if (unit.id === "armored_elephant") s.speed = 1.50; // Voi chạy nhanh +50%
      break;

    case "yamato":
      if (unit.id === "scout_cavalry") s.food = 75; // -25%
      if (unit.id === "cavalry" || unit.id === "cataphract") {
        s.food = 52.5;
        s.gold = 60;
      }
      if (unit.id === "heavy_horse_archer") {
        s.food = 37.5;
        s.gold = 52.5;
      }
      break;

    case "minoan":
      if (unit.id === "composite_bowman") s.range = (age === 3 ? 9 : 11); // +2 tầm xa
      break;

    case "choson":
      if (unit.id === "villager" && age >= 3) s.speed = 1.10; // Không bánh xe
      if (unit.id === "broad_swordsman") s.hp = 150; // +80 máu
      if (unit.id === "legion") s.hp = 240; // +80 máu
      if (unit.id === "priest") s.gold = 85; // Rẻ -30%
      break;

    case "roman":
      if (unit.id === "villager" && age >= 3) s.speed = 1.10; // Không bánh xe
      if (unit.id === "broad_swordsman" || unit.id === "legion") s.bonus = "Chém +33%";
      break;

    case "carthaginian":
      if (unit.id === "villager" && age >= 3) s.speed = 1.10; // Không bánh xe
      if (unit.id === "armored_elephant" || unit.id === "elephant_archer") s.hp = 750; // +25% máu
      if (unit.id === "hoplite") s.hp = 150;
      if (unit.id === "centurion") s.hp = 200;
      break;

    case "palmyran":
      if (unit.id === "villager") {
        s.food = 75; // Dân 75 thực
        s.melee = 1; // Sẵn 1 giáp
        s.bonus = "Làm việc +20%";
      }
      if (unit.id === "camelry") s.speed = 2.19; // +25% tốc độ
      break;

    case "macedonian":
      if (unit.id === "villager" && age >= 3) s.speed = 1.10; // Không bánh xe
      if (unit.id === "stone_thrower" || unit.id === "heavy_catapult") {
        s.wood = 90;
        s.gold = 40;
      }
      if (unit.id === "ballista" || unit.id === "helepolis") {
        s.wood = 50;
        s.gold = 40;
      }
      if (unit.id === "hoplite" || unit.id === "centurion") {
        s.pierce = 2; // +2 giáp tên
      }
      s.bonus = "Kháng hú x4";
      if (!["stone_thrower", "heavy_catapult", "ballista", "helepolis"].includes(unit.id)) {
        if (typeof s.los === 'number') s.los = s.los + 2;
      }
      break;

    case "greek":
      if (unit.id === "villager" && age >= 3) s.speed = 1.10; // Không bánh xe
      if (unit.id === "hoplite" || unit.id === "centurion") s.speed = 1.30; // +30% tốc độ
      break;
  }

  return { hasUnit: true, isAgeAvailable: true, stats: s };
}
