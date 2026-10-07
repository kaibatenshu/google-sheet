/**
 * DỮ LIỆU MA TRẬN CHỈ SỐ QUÂN CHUẨN GOOGLE SHEET (ĐỜI 1 - ĐỜI 4)
 * Theo đúng mẫu thiết kế của bảng Google Sheet (media_1791370510112.png)
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

// 2. DANH SÁCH CÁC ĐƠN VỊ QUÂN DÀN HÀNG NGANG THEO CỘT
const MATRIX_UNITS = [
  // --- ĐỜI 1 ---
  {
    id: "villager",
    name: "Nông dân",
    nameEn: "Villager",
    firstAge: 1,
    image: "images/units/villager.png",
    category: "dan",
    ages: {
      1: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Nhà Chính (TC)", speed: 2.0, bonus: "Lao động cơ bản" },
      2: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Nhà Chính (TC)", speed: 2.0, bonus: "Chặt gỗ +1 tầm xa cung" },
      3: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Bánh xe (Wheel)", speed: 2.6, bonus: "Đào vàng 1, Đào đá 1, Ruộng 1" },
      4: { food: 50, wood: 0, gold: 0, stone: 0, hp: 25, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "20s", los: 4, tech: "Kinh tế tối đa", speed: 2.6, bonus: "Đào vàng 2, Đá 2, Gỗ 2, Ruộng 2" }
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
      1: { food: 50, wood: 0, gold: 0, stone: 0, hp: 40, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Doanh trại (BB)", speed: 2.0, bonus: "Bộ binh cận chiến sơ khai" },
      2: { food: 50, wood: 0, gold: 0, stone: 0, hp: 50, atk: 5, melee: 0, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Nâng lên Rìu (BB)", speed: 2.0, bonus: "Chuyển thành lính Rìu" },
      3: { food: 35, wood: 0, gold: 15, stone: 0, hp: 70, atk: 9, melee: 1, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Nâng Kiếm chém", speed: 2.0, bonus: "Chuyển thành Kiếm chém" },
      4: { food: 35, wood: 0, gold: 15, stone: 0, hp: 140, atk: 13, melee: 2, pierce: 1, range: 0, trainTime: "26s", los: 4, tech: "Nâng Legion", speed: 2.0, bonus: "Chuyển thành Legion" }
    }
  },

  // --- ĐỜI 2 ---
  {
    id: "axeman",
    name: "Rìu",
    nameEn: "Axeman",
    firstAge: 2,
    image: "images/units/axeman.png",
    category: "bo-binh",
    ages: {
      1: null,
      2: { food: 50, wood: 0, gold: 0, stone: 0, hp: 50, atk: 5, melee: 0, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Nâng từ Chùy (BB)", speed: 2.0, bonus: "Bộ binh chém đời 2" },
      3: { food: 35, wood: 0, gold: 15, stone: 0, hp: 70, atk: 9, melee: 1, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Nâng Kiếm chém", speed: 2.0, bonus: "Chuyển thành Kiếm chém" },
      4: { food: 35, wood: 0, gold: 15, stone: 0, hp: 140, atk: 13, melee: 2, pierce: 1, range: 0, trainTime: "26s", los: 4, tech: "Nâng Legion", speed: 2.0, bonus: "Chuyển thành Legion" }
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
      2: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: "2 (+1.5)", melee: 0, pierce: 2, range: 4, trainTime: "24s", los: 5, tech: "Doanh trại (BB)", speed: 2.0, bonus: "+1.5 sát thương vs Cung thủ" },
      3: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: "2 (+1.5)", melee: "0+2 (BS)", pierce: 2, range: "4+1 (Gỗ)", trainTime: "24s", los: 5, tech: "Hưởng BS & BM", speed: 2.0, bonus: "Tầm xa 5, giáp cận +2" },
      4: { food: 40, wood: 0, gold: 0, stone: 10, hp: 25, atk: "2 (+1.5)", melee: "0+4 (BS)", pierce: 2, range: "4+2 (Gỗ)", trainTime: "24s", los: 5, tech: "Công nghệ tối đa", speed: 2.0, bonus: "Tầm xa 6, giáp cận +4" }
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
      2: { food: 40, wood: 20, gold: 0, stone: 0, hp: 35, atk: 3, melee: 0, pierce: 0, range: 5, trainTime: "30s", los: 6, tech: "Trường bắn (BA)", speed: 2.0, bonus: "Bắn xa cơ bản đời 2" },
      3: { food: 40, wood: 20, gold: 0, stone: 0, hp: 40, atk: 4, melee: 0, pierce: 0, range: 6, trainTime: "30s", los: 7, tech: "Nâng Cung chạc BA", speed: 2.2, bonus: "Nâng lên Cung chạc" },
      4: { food: 0, wood: 40, gold: 20, stone: 0, hp: 45, atk: "5+1 (Lửa)", melee: 0, pierce: 2, range: 8, trainTime: "30s", los: 8, tech: "Nâng Cung A tối đa", speed: 2.4, bonus: "Chuyển thành Cung A" }
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
      2: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: 3, melee: 0, pierce: 0, range: 0, trainTime: "30s", los: 8, tech: "Nhà ngựa (BL)", speed: 3.75, bonus: "Dò map, chăn dân, kháng hú" },
      3: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: "3+2 (BS)", melee: "0+2 (BS)", pierce: 0, range: 0, trainTime: "30s", los: 8, tech: "Hưởng BS công giáp", speed: 3.75, bonus: "Công 5, giáp 2" },
      4: { food: 100, wood: 0, gold: 0, stone: 0, hp: 60, atk: "3+4 (BS)", melee: "0+4 (BS)", pierce: "0+2 (BC)", range: 0, trainTime: "30s", los: 8, tech: "BS & BC tối đa", speed: 3.75, bonus: "Công 7, giáp 4/2" }
    }
  },

  // --- ĐỜI 3 ---
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
      3: { food: 70, wood: 40, gold: 0, stone: 0, hp: 70, atk: 4, melee: 0, pierce: 0, range: "7+1 (Gỗ)", trainTime: "40s", los: 8, tech: "Bánh xe (Wheel) BA", speed: 3.0, bonus: "Cơ động, bắn tỉa, kháng hú" },
      4: { food: 70, wood: 40, gold: 0, stone: 0, hp: 70, atk: "4+1 (Lửa)", melee: 0, pierce: "0+2 (BC)", range: "7+2 (Gỗ)", trainTime: "40s", los: 8, tech: "Lửa & Giáp tên BC", speed: 3.0, bonus: "Tầm xa 9, bắn cháy cực rát" }
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
      3: { food: 70, wood: 0, gold: 60, stone: 0, hp: 125, atk: "7 (+4 vs Kỵ)", melee: 0, pierce: 0, range: 0, trainTime: "30s", los: 5, tech: "Nhà ngựa (BL)", speed: 3.25, bonus: "Khắc tinh kỵ binh & chém" },
      4: { food: 70, wood: 0, gold: 60, stone: 0, hp: 150, atk: "7+4=11 (+4 vs Kỵ)", melee: 4, pierce: 2, range: 0, trainTime: "30s", los: 5, tech: "Đầu máu & BS/BC max", speed: 3.25, bonus: "Chém kỵ binh sốc dame" }
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
      3: { food: 70, wood: 0, gold: 80, stone: 0, hp: 150, atk: 8, melee: 1, pierce: 0, range: 0, trainTime: "40s", los: 5, tech: "Nhà ngựa (BL)", speed: 3.25, bonus: "Sát thương đột kích cực lớn" },
      4: { food: 70, wood: 0, gold: 80, stone: 0, hp: 180, atk: "12 (+5 vs BB)", melee: 3, pierce: 0, range: 0, trainTime: "40s", los: 5, tech: "Nâng Chém thần BL", speed: 3.25, bonus: "Nâng cấp lên Cataphract" }
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
      3: { food: 70, wood: 40, gold: 0, stone: 0, hp: 100, atk: 7, melee: 0, pierce: 0, range: 0, trainTime: "40s", los: 5, tech: "Bánh xe (BL)", speed: 3.25, bonus: "Rác gỗ thịt, kháng hú cực cao" },
      4: { food: 75, wood: 75, gold: 0, stone: 0, hp: 120, atk: "9+4=13", melee: 6, pierce: 4, range: 0, trainTime: "40s", los: 5, tech: "Nâng Đạp đôi BL", speed: 3.25, bonus: "Nâng lên Ngựa đạp đôi" }
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
      3: { food: 0, wood: 40, gold: 20, stone: 0, hp: 45, atk: 5, melee: 0, pierce: 0, range: 7, trainTime: "30s", los: 8, tech: "Trường bắn (BA)", speed: 2.4, bonus: "Bắn xa, sát thương ổn định" },
      4: { food: 0, wood: 40, gold: 20, stone: 0, hp: 45, atk: "5+1 (Lửa)", melee: 0, pierce: 2, range: 8, trainTime: "30s", los: 8, tech: "Lửa & Giáp BC", speed: 2.4, bonus: "Cung A lửa tầm xa 8 ô" }
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
      3: { food: 35, wood: 0, gold: 15, stone: 0, hp: 70, atk: 9, melee: 1, pierce: 0, range: 0, trainTime: "26s", los: 4, tech: "Doanh trại (BB)", speed: 2.0, bonus: "Đục nhà nhanh, trị voi sọc" },
      4: { food: 35, wood: 0, gold: 15, stone: 0, hp: 140, atk: 13, melee: 6, pierce: 3, range: 0, trainTime: "26s", los: 4, tech: "Nâng Legion BB", speed: 2.0, bonus: "Nâng lên Legion" }
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
      3: { food: 60, wood: 0, gold: 40, stone: 0, hp: 120, atk: 17, melee: 5, pierce: 0, range: 0, trainTime: "36s", los: 4, tech: "Hàn Lâm Viện (BY)", speed: 1.5, bonus: "Bộ binh cận chiến công 17 giáp 5" },
      4: { food: 60, wood: 0, gold: 40, stone: 0, hp: 160, atk: 30, melee: 8, pierce: 0, range: 0, trainTime: "36s", los: 4, tech: "Nâng Centurion BY", speed: 1.5, bonus: "Nâng lên Centurion" }
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
      3: { food: 0, wood: 180, gold: 80, stone: 0, hp: 150, atk: 50, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, tech: "Xưởng pháo (BK)", speed: 1.5, bonus: "Bắn đá nổ lan diện rộng" },
      4: { food: 0, wood: 180, gold: 80, stone: 0, hp: 175, atk: 60, melee: 0, pierce: 0, range: 12, trainTime: "50s", los: 12, tech: "Nâng Cẩu to BK", speed: 1.5, bonus: "Nâng lên Heavy Catapult" }
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
      3: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, tech: "Xưởng pháo (BK)", speed: 1.5, bonus: "Bắn tên xuyên thẳng hàng dọc" },
      4: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, tech: "Nâng Helepolis BK", speed: 1.5, bonus: "Nâng lên Helepolis" }
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
      3: { food: 0, wood: 0, gold: 125, stone: 0, hp: 25, atk: "Thu phục", melee: 0, pierce: 0, range: 9, trainTime: "50s", los: 10, tech: "Đền thờ (BP)", speed: 1.5, bonus: "Hú thu phục & hồi máu" },
      4: { food: 0, wood: 0, gold: 125, stone: 0, hp: 25, atk: "Thu phục", melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 11, tech: "Nâng cấp BP", speed: 1.5, bonus: "Hú công trình, hú siêu xa" }
    }
  },

  // --- ĐỜI 4 ---
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
      4: { food: 75, wood: 75, gold: 0, stone: 0, hp: 120, atk: "9+4=13", melee: 6, pierce: 4, range: 0, trainTime: "40s", los: 5, tech: "Nâng cấp tại BL", speed: 3.25, bonus: "Chém lan diện rộng, rác gỗ" }
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
      4: { food: 70, wood: 0, gold: 80, stone: 0, hp: 180, atk: "12+4=16 (+5 vs BB)", melee: 7, pierce: 2, range: 0, trainTime: "40s", los: 5, tech: "Nâng cấp tại BL", speed: 3.25, bonus: "+5 sát thương vs Bộ binh" }
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
      4: { food: 170, wood: 0, gold: 40, stone: 0, hp: 600, atk: "18+4=22", melee: 6, pierce: 3, range: 0, trainTime: "50s", los: 5, tech: "Nâng cấp tại BL", speed: 1.5, bonus: "Máu dày húc sập nhà" }
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
      4: { food: 180, wood: 0, gold: 60, stone: 0, hp: 600, atk: "6+1=7 (Lửa)", melee: 0, pierce: 2, range: "7+2=9 (Gỗ)", trainTime: "50s", los: 8, tech: "Trường bắn (BA)", speed: 1.75, bonus: "Trụ cung di động cực trâu" }
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
      4: { food: 50, wood: 0, gold: 70, stone: 0, hp: 90, atk: "8+1=9 (Lửa)", melee: 0, pierce: 3, range: "7+2=9 (Gỗ)", trainTime: "40s", los: 8, tech: "Trường bắn (BA)", speed: 3.75, bonus: "Tốc độ xé gió, rỉa máu" }
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
      4: { food: 35, wood: 0, gold: 15, stone: 0, hp: 140, atk: 13, melee: 6, pierce: 3, range: 0, trainTime: "26s", los: 4, tech: "Doanh trại (BB)", speed: 2.0, bonus: "Bộ binh cận chiến tối hậu" }
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
      4: { food: 60, wood: 0, gold: 40, stone: 0, hp: 160, atk: 30, melee: 8, pierce: 0, range: 0, trainTime: "36s", los: 4, tech: "Hàn Lâm Viện (BY)", speed: 1.5, bonus: "Công 30 giáp 8 vô địch" }
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
      4: { food: 0, wood: 180, gold: 80, stone: 0, hp: 175, atk: 60, melee: 0, pierce: 0, range: 12, trainTime: "50s", los: 12, tech: "Xưởng pháo (BK)", speed: 1.5, bonus: "Hủy diệt diện rộng cực đại" }
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
      4: { food: 0, wood: 100, gold: 80, stone: 0, hp: 55, atk: 40, melee: 0, pierce: 0, range: 10, trainTime: "50s", los: 10, tech: "Xưởng pháo (BK)", speed: 1.5, bonus: "Bắn liên thanh như súng máy" }
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
  if (unit.id === "chariot_archer" && !civ.techTree.chariotArcher) hasUnit = false;
  if (unit.id === "cavalry" && !civ.techTree.cavalry) hasUnit = false;
  if (unit.id === "scythe_chariot" && !civ.techTree.scytheChariot) hasUnit = false;
  if (unit.id === "cataphract" && !civ.techTree.cataphract) hasUnit = false;
  if (unit.id === "armored_elephant" && !civ.techTree.elephant) hasUnit = false;
  if (unit.id === "elephant_archer" && !civ.techTree.elephant) hasUnit = false;
  if (unit.id === "composite_bowman" && !civ.techTree.compositeBowman) hasUnit = false;
  if (unit.id === "heavy_horse_archer" && !civ.techTree.horseArcher) hasUnit = false;
  if (unit.id === "heavy_catapult" && !civ.techTree.heavyCatapult) hasUnit = false;
  if (unit.id === "helepolis" && !civ.techTree.helepolis) hasUnit = false;
  if (unit.id === "centurion" && !civ.techTree.centurion) hasUnit = false;
  if (unit.id === "priest" && !civ.techTree.priest) hasUnit = false;
  if (unit.id === "camelry" && (civ.id === "greek" || civ.id === "yamato" || civ.id === "egyptian" || civ.id === "macedonian")) hasUnit = false;
  if (unit.id === "chariot" && !civ.techTree.wheel) hasUnit = false;
  if (unit.id === "legion" && !["choson", "roman", "yamato", "greek", "macedonian", "phoenician"].includes(civ.id)) hasUnit = false;
  if (unit.id === "hoplite" && ["egyptian", "assyrian", "babylonian", "palmyran", "persian", "shang"].includes(civ.id)) hasUnit = false;
  if (unit.id === "stone_thrower" && civ.id === "yamato") hasUnit = false;

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
      if (unit.id === "villager") s.food = 35; // Nông dân 35 thực
      break;

    case "assyrian":
      if (unit.id === "villager") s.speed = "2.6 (+30%)";
      if (unit.id === "chariot_archer") {
        s.bonus = "⚡ Bắn nhanh +33%";
        s.trainTime = "40s (Bắn +33%)";
      }
      break;

    case "egyptian":
      if (unit.id === "villager") s.bonus = (s.bonus ? s.bonus + " • " : "") + "💰 Đào vàng +20% (13 vàng)";
      if (unit.id === "chariot_archer") s.hp = "93 (+33% HP)";
      if (unit.id === "scythe_chariot") s.hp = "133 (+33% HP)";
      if (unit.id === "priest") s.range = (age === 3 ? "12 (+3)" : "15-16 (+3)");
      break;

    case "babylonian":
      if (unit.id === "villager") s.bonus = (s.bonus ? s.bonus + " • " : "") + "⚪ Đào đá +3 (13 đá)";
      if (unit.id === "priest") s.bonus = (s.bonus ? s.bonus + " • " : "") + "⚡ Hồi mana +30%";
      break;

    case "hittite":
      if (unit.id === "chariot_archer") s.atk = (age === 3 ? "5 (+1)" : "6 (+1)");
      if (unit.id === "stone_thrower") s.hp = "300 (x2 Máu)";
      if (unit.id === "heavy_catapult") s.hp = "350 (x2 Máu)";
      break;

    case "phoenician":
      if (unit.id === "villager") s.bonus = (s.bonus ? s.bonus + " • " : "") + "🪵 Chặt gỗ +3 (13 gỗ)";
      if (unit.id === "armored_elephant") s.food = "127 (-25%)";
      if (unit.id === "elephant_archer") s.food = "135 (-25%)";
      break;

    case "sumerian":
      if (unit.id === "villager") s.hp = "40 (+60%)";
      if (unit.id === "stone_thrower" || unit.id === "heavy_catapult") s.bonus = "⚡ Bắn nhanh x2";
      break;

    case "persian":
      if (unit.id === "villager") s.bonus = (s.bonus ? s.bonus + " • " : "") + "🥩 Ăn voi hươu +30%";
      if (unit.id === "armored_elephant") s.speed = "2.25 (+50%)";
      // Không có Bánh xe -> Nông dân không tăng tốc ở đời 3, 4
      if (unit.id === "villager" && age >= 3) s.speed = "2.0 (Không bánh xe)";
      break;

    case "yamato":
      if (unit.id === "villager") s.speed = "2.6 (+30%)";
      if (unit.id === "scout_cavalry") s.food = "75 (-25%)";
      if (unit.id === "cavalry" || unit.id === "cataphract") s.gold = "60 (-25%)";
      break;

    case "minoan":
      if (unit.id === "composite_bowman") s.range = (age === 3 ? "8 (+1)" : "9-10 (+2)");
      break;

    case "choson":
      if (unit.id === "broad_swordsman") s.hp = "150 (+80)";
      if (unit.id === "legion") s.hp = "240 (+80)";
      if (unit.id === "priest") s.gold = "85 (-30%)";
      break;

    case "roman":
      if (unit.id === "broad_swordsman" || unit.id === "legion") s.bonus = "⚡ Chém nhanh +33%";
      if (unit.id === "ballista" || unit.id === "helepolis") s.wood = "85 (-15%)";
      // Không có Bánh xe -> Dân đời 3/4 giữ tốc độ 2.0
      if (unit.id === "villager" && age >= 3) s.speed = "2.0 (Không bánh xe)";
      break;

    case "carthaginian":
      if (unit.id === "armored_elephant" || unit.id === "elephant_archer") s.hp = "750 (+25%)";
      if (unit.id === "hoplite") s.hp = "150 (+25%)";
      if (unit.id === "centurion") s.hp = "200 (+25%)";
      break;

    case "palmyran":
      if (unit.id === "villager") {
        s.food = "75 (+50%)";
        s.melee = "1 (+1)";
        s.bonus = "⚡ Làm việc nhanh +20%";
      }
      if (unit.id === "camelry") s.speed = "3.8 (Siêu tốc)";
      break;

    case "macedonian":
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
      s.bonus = (s.bonus ? s.bonus + " • " : "") + "Kháng hú x4";
      if (unit.id === "villager" && age >= 3) s.speed = "2.0 (Không bánh xe)";
      break;

    case "greek":
      if (unit.id === "hoplite" || unit.id === "centurion") s.speed = "1.95 (+30% lướt gió)";
      break;
  }

  return { hasUnit: true, isAgeAvailable: true, stats: s };
}
