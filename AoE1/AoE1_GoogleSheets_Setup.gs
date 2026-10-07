/**
 * Google Apps Script: Khởi tạo Cơ Sở Dữ Liệu AoE 1 Việt - Trung chuẩn tự động
 * 
 * HƯỚNG DẪN SỬ DỤNG:
 * 1. Mở trang Google Sheets mới: https://sheets.new
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script
 * 3. Xóa hết mã cũ, dán toàn bộ đoạn mã này vào.
 * 4. Nhấn nút "Lưu" (Save), sau đó chọn hàm "initAoE1Database" và nhấn "Chạy" (Run).
 * 5. Cấp quyền truy cập nếu Google yêu cầu. Bảng tính sẽ tự động tạo 4 Tab định dạng chuyên nghiệp!
 */

function initAoE1Database() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Tạo Sheet: 16 Nền Văn Minh
  setupCivSheet(ss);
  
  // 2. Tạo Sheet: Đơn Vị & Công Trình
  setupUnitsSheet(ss);
  
  // 3. Tạo Sheet: Cây Công Nghệ
  setupTechSheet(ss);
  
  // 4. Tạo Sheet: Luật & Thể Thức Thi Đấu
  setupRulesSheet(ss);
  
  SpreadsheetApp.getUi().alert("Hoàn tất!", "Đã khởi tạo thành công toàn bộ Cơ sở dữ liệu AoE 1 Việt - Trung với định dạng chuẩn!", SpreadsheetApp.getUi().ButtonSet.OK);
}

function setupCivSheet(ss) {
  let sheet = ss.getSheetByName("16 Nền Văn Minh") || ss.insertSheet("16 Nền Văn Minh");
  sheet.clear();
  
  const headers = [
    ["STT", "Tên Quân (VN)", "Tên Quốc Tế", "Tên Tiếng Trung", "Kiến Trúc", "Đặc Điểm & Lợi Thế Vượt Trội", "Nhược Điểm Cốt Lõi", "Quân Đời 3 Chủ Đạo", "Quân Đời 4 Tuyển", "Tier Solo Đời 3", "Tier 4v4 Random", "Đánh Giá Tổng Quan"]
  ];
  
  const data = [
    [1, "Shang", "Shang", "商", "Đông Á", "Dân rẻ 35 thực. Tường thành x2 HP. Ép đời chuẩn và ổn định nhất game.", "Chỉ số quân không có bonus sát thương hay tốc chạy. Thiếu pháo to, voi, ngựa đôi.", "Cung R (BA), Ngựa chém (BL), Sọc đơn, Phù thủy", "Lính BB chém (Legion), Bắn đá nhỏ (Onager)", "S+", "A", "Quân chuẩn mực nhất AoE; Solo Shang thuần tiễn là đỉnh cao vi mô Việt - Trung."],
    [2, "Assyrian", "Assyrian", "亚述", "Lưỡng Hà", "Dân chạy nhanh +30%. Cung R bắn nhanh +33% (tốc độ ra tên cực dày).", "Không có Đầu Máu (BM) -> Cung R 75 HP. Đời 4 yếu nhất game (không cung lửa, pháo to).", "Cung R (BA tuyển nhất), Phù thủy, Sọc đơn", "Yếu nhất đời 4; lính BB và Cẩu đá nhỏ", "S+", "S", "Bá vương đời 3; quản lý bản đồ rộng và ép đối thủ nghẹt thở; solo Assyrian là kinh điển."],
    [3, "Egyptian", "Egyptian", "埃及", "Ai Cập", "Cung R +33% HP (93 máu trâu nhất). Dân đào vàng +20%. Phù thủy tầm xa +3.", "Không có Ngựa chém BL, không Voi, không Xiên. Đầu đời 3 thường thiếu gỗ nếu ép nhiều BA.", "Cung R (93 máu trâu bò), Phù thủy, Sọc đơn", "Ngựa đạp đôi max công nghệ, Cẩu đá to, Phù thủy sét", "S", "S", "Quân toàn diện cả đời 3 và 4; Cung R đổi mạng cực lời; Đời 4 đạp đôi + cẩu đá to vô cùng khó chịu."],
    [4, "Babylonian", "Babylonian", "巴比伦", "Lưỡng Hà", "Tường & Chòi máu x2. Phù thủy hồi mana +30%. Dân đào đá +3.", "Quân đội không có chỉ số chạy nhanh hay cộng sát thương trực tiếp.", "Cung R, Ngựa chém, Sọc đơn, Phù thủy hồi năng lượng nhanh", "Đạp đôi, Cung A 3 áo, Cẩu đá to, Chòi thần x2 máu", "A", "A", "Lối đánh bền bỉ, thủ nhà dẻo; đời 4 công thủ toàn diện với Chòi thần 1000 HP và Cẩu đá to."],
    [5, "Hittite", "Hittite", "西台 / 赫梯", "Lưỡng Hà", "Cung R mặc định +1 công (4+1=5). Bắn đá x2 máu (300 HP đời 3). Tàu chiến bắn xa +4.", "Không có Cẩu đá to nhất (Heavy Catapult), Phù thủy không có nâng cấp tốt.", "Cung R (+1 công cực rát), Bắn đá x2 máu, Ngựa chém", "Cung R lửa, Đạp đôi, Ngựa chém giáp 4, Bắn đá kẹp cung", "S", "S+", "Quân tuyển hàng đầu trong Random; Cung R cắn dân siêu nhanh, Bắn đá trâu máu khắc mọi dàn cung."],
    [6, "Phoenician", "Phoenician", "腓尼基", "Lưỡng Hà", "Dân chặt gỗ +3 (13 gỗ/chuyến). Voi giảm 25% giá thực (135 thực). Tàu bắn nhanh +65%.", "Giáp lính không có điểm vượt trội, không có Ngựa đôi, không Cẩu đá to.", "Cung R (ra quân số lượng lớn nhờ dồi dào gỗ), Ngựa chém, Sọc đơn", "Voi húc và Voi tên giá rẻ siêu đông; Cung R lửa; Cẩu đá nhỏ", "A", "S", "Khả năng hồi dân và vẽ ruộng vô đối; tích gỗ cực nhanh giúp ép nhiều nhà quân BA/BL dễ dàng."],
    [7, "Sumerian", "Sumerian", "苏美尔", "Lưỡng Hà", "Dân 40 HP (trâu hơn 60% dân thường). Ruộng x2 sản lượng (500 thực). Cẩu đá bắn nhanh x2.", "Không có Voi, không có Ngựa đôi, không Cung lửa.", "Cung R (tiết kiệm gỗ tái ruộng), Ngựa chém, Bắn đá bắn tốc độ cao", "Cẩu đá to bắn liên thanh, Đạp đôi, Ngựa chém giáp 4", "A+", "S", "Dân 40 máu khó bị bắt lẻ; khả năng hồi phục kinh tế tốt; cẩu đá bắn tốc độ liên thanh kinh hoàng."],
    [8, "Persian", "Persian", "波斯", "Lưỡng Hà", "Dân săn voi hươu nhanh +30%. Voi di chuyển nhanh +50% (chạy như ngựa).", "Khởi đầu bị trừ 50 thực (150 thực). Không có Bánh xe (không có Cung R, Đạp đôi).", "Ngựa chém (ép đời sớm chém rát), Lạc đà (khắc chém), Cung A 2 áo", "Voi điên (Voi húc chạy thần tốc), Cung A 3 áo, Cẩu đá to", "B+", "A+", "Chém Persian đầu đời 3 kích sớm là mối đe dọa lớn; Đời 4 Voi điên càn quét xuyên qua mọi hàng thủ."],
    [9, "Yamato", "Yamato", "大和", "Đông Á", "Dân chạy nhanh +30%. Ngựa chém rẻ hơn 25% vàng (75 vàng thay vì 100). Tàu chiến +30% máu.", "Cung R yếu (không giáp tên), Đời 4 không có Đạp đôi, không Voi, không Cẩu đá to.", "Ngựa chém (Vua chém số lượng áp đảo), Cung A, Phù thủy", "Ngựa chém thần (Cataphract), Cung A 2 áo, Lính xiên", "S", "S", "Vua của chiến thuật đánh Chém; rẻ hơn 25% vàng giúp đẻ chém không ngắt nhịp; solo Yamato đỉnh cao."],
    [10, "Minoan", "Minoan", "米诺斯", "Hy Lạp", "Cung A tầm xa +1 đời 3, +2 đời 4 (tầm xa tối đa 11). Ruộng +60 thực. Tàu chiến rẻ 33%.", "Không có Cung R, không Ngựa chém BL, không Lạc đà. Dễ bị bắt bài nếu đối phương kẹp pháo sớm.", "Cung A (tầm xa 8-9 bắn rát), Cẩu đá, Sọc đơn", "Cung A tầm xa 11 kẹp Bắn đá to & Pháo lùn Ballista, Đạp đôi", "A", "S", "Dàn Cung A Minoan đứng tụ sau lưng đồng đội là bức tường lửa bất khả xâm phạm; tầm xa 11 áp chế mọi thứ."],
    [11, "Choson", "Choson", "朝鲜", "Đông Á", "Lính BB kiếm +80 HP (tối đa 240 HP). Phù thủy giảm 30% giá vàng. Chòi canh tầm xa +2.", "Không có Bánh xe (không Cung R, không Đạp đôi). Ngựa chém không có Đầu máu, không giáp 4.", "Ngựa chém công giáp cơ bản, Phù thủy rẻ, Cung A, BB kẹp Phù thủy", "BB chém thần (Legion 240 HP trâu bò), Phù thủy rẻ, Chòi thần tầm xa", "C", "B+", "Quân đánh đời 3 khó khăn nhất; tuy nhiên Đời 4 lính BB 240 máu cùng dàn Phù thủy giá rẻ là thế lực khủng khiếp."],
    [12, "Roman", "Roman", "罗马", "La Mã", "Công trình rẻ 15% gỗ. Chòi canh giảm 50% đá (chỉ tốn 75 đá). Lính BB kiếm chém nhanh +33%.", "Không có Bánh xe (không Cung R, không Đạp đôi). Không có Cẩu đá to đời 4.", "Ngựa chém BL, BB kiếm, Dâng chòi (Tower rush), Cung A", "BB chém thần (Legion máy khâu), Ngựa chém thần, Pháo lùn rẻ gỗ", "B", "A", "Tiết kiệm gỗ kinh khủng; dâng chòi và đánh BB cực kỳ khó chịu; lính kiếm Roman chém nhanh như máy khâu."],
    [13, "Carthaginian", "Carthaginian", "迦太基", "La Mã", "Voi và Lính Xiên +25% HP (Voi 750 HP, Xiên 150-200 HP). Tháp canh lửa +50% dame.", "Không có Bánh xe (không Cung R, không Đạp đôi). Không có Ngựa chém BL.", "Lạc đà (chống chém), Lính Xiên (150 HP), Cung A", "Voi húc 750 HP (máu dày nhất game), Xiên thần (Centurion 200 HP), Pháo lùn", "B", "A", "Bậc thầy cận chiến hạng nặng; Voi 750 máu và Xiên 200 máu có thể nghiền nát mọi chướng ngại vật."],
    [14, "Palmyran", "Palmyran", "帕尔米拉", "La Mã", "Dân làm việc nhanh +20%. Dân có sẵn 1 giáp. Chuyển đồ thuế 0%. Lạc đà chạy nhanh nhất.", "Dân đắt 75 thực/con (gấp rưỡi). Mất dân đầu game là thảm họa.", "Lạc đà (siêu cơ động bắt chém), Cung R, Ngựa chém BL", "Đạp đôi, Cung R lửa, Bắn đá to", "A+", "A+", "Quân phát triển tốc độ cao nếu quản lý dân tốt; Lạc đà Palmyra là ác mộng của mọi loại ngựa chém."],
    [15, "Macedonian", "Macedonian", "马其顿", "La Mã", "Toàn quân kháng Phù thủy x4 lần. Lính bộ & Bắn đá tầm nhìn +2. Pháo rẻ 50% chi phí.", "KHÔNG CÓ CHỢ (BM) -> Không Bánh xe, không Chặt gỗ, không bơm đồ, không đào vàng nhanh.", "Ngựa chém BL (trâu kháng hú), Lính Xiên, Bắn đá rẻ 50%", "Xiên thần, Pháo lùn Helepolis siêu rẻ, Bắn đá kẹp Xiên", "B+", "A", "Khắc tinh tuyệt đối của các bài Phù thủy; pháo rẻ giúp tạo dựng hỏa lực tầm xa áp đảo với chi phí tiết kiệm."],
    [16, "Greek", "Greek", "希腊", "Hy Lạp", "Lính Xiên chạy nhanh +30%. Tàu chiến di chuyển nhanh +30%.", "Không có Bánh xe, không Ngựa chém BL, không Lạc đà, không Voi. Cực tốn vàng.", "Lính Xiên chạy nhanh, Cung A, Phù thủy, Sọc đơn", "Xiên thần (Centurion) lướt gió, Cẩu đá to, Pháo lùn Helepolis", "C+", "B+", "Vua lính Xiên; Xiên Greek đời 4 chạy nhanh như lướt gió áp sát tiêu diệt nhanh cả cung thủ lẫn pháo đối phương."]
  ];
  
  formatSheetTable(sheet, headers, data, "#1a73e8");
}

function setupUnitsSheet(ss) {
  let sheet = ss.getSheetByName("Chỉ Số Đơn Vị & Công Trình") || ss.insertSheet("Chỉ Số Đơn Vị & Công Trình");
  sheet.clear();
  
  const headers = [
    ["Loại", "Tên Đơn Vị / Công Trình", "Tên Tiếng Anh", "Đời Yêu Cầu", "Nhà Sinh Ra", "HP", "Công", "Giáp Cận", "Giáp Tên", "Tầm Xa", "Tốc Độ", "Chi Phí", "Đặc Tính & Lưu Ý Chiến Thuật"]
  ];
  
  const data = [
    ["Đơn vị", "Nông Dân (Dân)", "Villager", "Đời 1", "Nhà Chính (TC)", "25 (Sume 40)", "3", "0 (Pal 1)", "0", "0", "2.0 (Assy/Yama 2.6)", "50 Thực (Shang 35, Pal 75)", "Nòng cốt kinh tế; Sumerian 40 HP trâu nhất, Palmyran có sẵn 1 giáp và hái lượm nhanh +20%."],
    ["Đơn vị", "Ngựa Dò", "Scout", "Đời 2", "Nhà Ngựa (BL)", "60", "3", "0", "0", "0", "3.75", "100 Thực", "Do thám mở map, câu voi, chọc quấy dân đối phương đầu game, kháng hú nhẹ."],
    ["Đơn vị", "Cung R (Ngựa Cung)", "Chariot Archer", "Đời 3", "Nhà Cung (BA)", "70 (Egy 93, Assy 75)", "4 (+1 Hittite)", "0", "0", "7 (+2 Chặt gỗ)", "3.0", "40 Gỗ, 70 Thực", "Đơn vị cơ động phổ biến nhất game; Assyrian bắn nhanh +33%, Egyptian 93 máu."],
    ["Đơn vị", "Ngựa Chém Thường", "Cavalry", "Đời 3", "Nhà Ngựa (BL)", "150", "8", "1", "0", "0", "3.25", "70 Thực, 80 Vàng (Yama 60V)", "Sốc sát thương, đồ sát dân cực lẹ, khắc tinh Cung R khi áp sát; Yamato rẻ 25% vàng."],
    ["Đơn vị", "Lạc Đà", "Camelry", "Đời 3", "Nhà Ngựa (BL)", "125", "7 (+4 vs ngựa)", "0", "0", "0", "3.25 (Palmyra siêu tốc)", "70 Thực, 60 Vàng", "Khắc tinh số 1 của Ngựa chém BL; giá rẻ hơn chém, chạy nhanh, chém kỵ binh đối thủ cực đau."],
    ["Đơn vị", "Sọc Đơn", "Chariot", "Đời 3", "Nhà Ngựa (BL)", "100", "7", "0", "0", "0", "3.25", "40 Gỗ, 70 Thực", "Chỉ tốn gỗ và thực, kháng phù thủy cực cao, càn quét chống phù thủy và đỡ đòn cho cung."],
    ["Đơn vị", "Cung A (2 Áo)", "Composite Bowman", "Đời 3", "Nhà Cung (BA)", "45", "5", "0", "0", "7 (Minoan 8-9)", "2.4", "40 Gỗ, 20 Vàng", "Đòi hỏi nâng cấp trong BA; Minoan cộng tầm xa; tụ cung thủ nhà hoặc đẩy đường cực rát."],
    ["Đơn vị", "Lính Xiên (Hoplite)", "Hoplite", "Đời 3", "Hàn Lâm Viện (BY)", "120 (Carthage 150)", "17", "5", "0", "0", "1.5 (Greek 1.95)", "60 Thực, 40 Vàng", "Công 17 cực cao, giáp cứng; Greek chạy nhanh +30%, Carthaginian 150 HP trâu bò."],
    ["Đơn vị", "Cẩu Đá Nhỏ", "Stone Thrower", "Đời 3", "Nhà Pháo (BK)", "150 (Hittite 300)", "50 (Lan)", "0", "0", "10", "1.5", "180 Gỗ, 80 Vàng (Macedon rẻ 50%)", "Vũ khí bắn lan giải tán đám đông; ác mộng Cung R tụ lại; Hittite x2 máu (300 HP), Sumerian bắn nhanh x2."],
    ["Đơn vị", "Phù Thủy (Thầy Tu)", "Priest", "Đời 3", "Nhà Phù Thủy (BP)", "25", "0 (Hú)", "0", "0", "9 (Egyptian 12)", "1.5", "125 Vàng (Choson 85V)", "Khắc chế cứng Chém, Lạc đà, Voi; hồi máu cho quân mình; Egyptian tầm xa 12, Babylon hồi mana +30%."],
    ["Đơn vị", "Ngựa Đạp Đôi", "Scythe Chariot", "Đời 4", "Nhà Ngựa (BL)", "120", "9", "2", "2", "0", "3.25", "75 Gỗ, 75 Thực", "Quân rác bá đạo nhất đời 4; chỉ tốn Gỗ và Thực, chém lan diện rộng, ủi nát dân và bộ binh."],
    ["Đơn vị", "Ngựa Chém Thần", "Cataphract", "Đời 4", "Nhà Ngựa (BL)", "180", "12 (+5 vs bộ)", "3", "0", "0", "3.25", "70 Thực, 80 Vàng", "Đơn vị kỵ binh vàng mạnh nhất; giáp trâu máu dày, đồ sát bộ binh và cung tên trong nháy mắt."],
    ["Đơn vị", "Voi Húc Thần", "Armored Elephant", "Đời 4", "Nhà Cận Chiến (BL)", "600 (Carthage 750)", "18 (Lan)", "2", "1", "0", "1.5 (Persian 2.25)", "170 Thực, 40 Vàng (Phoeni rẻ 25%)", "Cỗ xe tăng bọc thép; Persian chạy nhanh như ngựa; Phoenician giá rẻ; Carthage trâu 750 HP."],
    ["Đơn vị", "Pháo Cẩu To", "Heavy Catapult", "Đời 4", "Nhà Pháo (BK)", "175 (Hittite 350)", "60 (Lan cực đại)", "0", "0", "12", "1.5", "180 Gỗ, 80 Vàng", "Hỏa lực hủy diệt tầm xa số 1; bắn tan nát từng cụm quân và thổi bay công trình từ 12 ô."],
    ["Đơn vị", "Xiên Thần", "Centurion", "Đời 4", "Hàn Lâm Viện (BY)", "160 (Carthage 200)", "30", "8", "0", "0", "1.5 (Greek 1.95)", "60 Thực, 40 Vàng", "Chiến binh có chỉ số công 30 giáp 8 khủng khiếp; Greek chạy cực nhanh, Carthage 200 HP."]
  ];
  
  formatSheetTable(sheet, headers, data, "#0f9d58");
}

function setupTechSheet(ss) {
  let sheet = ss.getSheetByName("Cây Công Nghệ") || ss.insertSheet("Cây Công Nghệ");
  sheet.clear();
  
  const headers = [
    ["Công Trình", "Tên Nâng Cấp (VN)", "Tên Tiếng Anh", "Đời Yêu Cầu", "Chi Phí", "Tác Dụng Chi Tiết", "Đơn Vị Hưởng Lợi Trực Tiếp"]
  ];
  
  const data = [
    ["Chợ (BM)", "Bánh Xe", "Wheel", "Đời 3", "175 Thực, 75 Gỗ", "Dân chạy nhanh +30%; Mở khóa Cung R, Sọc đơn, Đạp đôi.", "Dân, Cung R, Sọc Đơn, Đạp Đôi."],
    ["Chợ (BM)", "Chặt Gỗ 1", "Woodworking", "Đời 2", "120 Thực, 75 Gỗ", "Cung thủ tăng +2 Tầm xa; Dân mang thêm +2 gỗ mỗi chuyến.", "Dân gỗ, Cung trần, Cung R, Cung A."],
    ["Chợ (BM)", "Chặt Gỗ 2", "Artisanship", "Đời 3", "170 Thực, 150 Gỗ", "Cung thủ tăng thêm +1 Tầm xa (+3 tổng cộng); Dân +2 gỗ.", "Cung R, Cung A, Voi tên."],
    ["Chợ (BM)", "Chặt Gỗ 3", "Craftsmanship", "Đời 4", "240 Thực, 200 Gỗ", "Cung thủ tăng thêm +1 Tầm xa (+4 tổng cộng); Dân +2 gỗ.", "Cung R, Cung A max tầm xa 11."],
    ["Chợ (BM)", "Đào Vàng 1", "Gold Mining", "Đời 2", "120 Thực, 100 Gỗ", "Dân đào vàng nhanh +15% và mang thêm +3 vàng.", "Dân vàng; cần thiết cho Ngựa chém, Lạc đà, Cung A."],
    ["Chính Phủ (BC)", "Đầu Máu", "Nobility", "Đời 3", "175 Thực, 120 Vàng", "Tăng 15% lượng Máu (HP) tối đa cho kỵ binh và voi.", "Ngựa chém (172 HP), Cung R (80/106 HP), Voi (690 HP)."],
    ["Chính Phủ (BC)", "Bắn Chặn", "Ballistics", "Đời 3", "150 Thực, 75 Vàng", "Vũ khí tầm xa bắn đón đầu mục tiêu đang di chuyển.", "Cung R, Cung A, Cẩu đá, Chòi canh."],
    ["Chính Phủ (BC)", "Tên Lửa", "Alchemy", "Đời 4", "250 Thực, 200 Vàng", "Tăng +1 Sát thương công cho tất cả vũ khí tầm xa.", "Cung R lửa, Cung A, Pháo cẩu, Tháp canh."],
    ["Chính Phủ (BC)", "Viết Chữ", "Writing", "Đời 3", "150 Thực, 75 Gỗ", "Chia sẻ toàn bộ bản đồ và tầm nhìn với đồng minh.", "Tối quan trọng trong 2v2 và 4v4."],
    ["Khoáng Sản (BS)", "Công Cận Chiến 1", "Toolworking", "Đời 2", "100 Thực", "Tăng +2 Sát thương công cho cận chiến.", "Lính chùy, Ngựa dò, Ngựa chém, Lạc đà."],
    ["Khoáng Sản (BS)", "Công Cận Chiến 2", "Metalworking", "Đời 3", "160 Thực, 50 Gỗ", "Tăng thêm +2 Sát thương công (+4 tổng).", "Ngựa chém (công 12), Lạc đà, Kiếm."],
    ["Khoáng Sản (BS)", "Giáp Tên Kỵ Binh 1", "Leather Armor Cavalry", "Đời 3", "125 Thực, 80 Gỗ", "Tăng +2 Giáp chống bắn tên cho kỵ binh.", "Ngựa chém và Lạc đà lao vào dàn Cung R đỡ tên tốt."],
    ["Đền Thờ (BP)", "Hồi Mana Thần Tốc", "Astrology", "Đời 3", "150 Vàng", "Phù thủy hồi năng lượng nhanh hơn +30%.", "Babylon kết hợp công nghệ này hồi mana liên tục."]
  ];
  
  formatSheetTable(sheet, headers, data, "#f2994a");
}

function setupRulesSheet(ss) {
  let sheet = ss.getSheetByName("Luật & Thể Thức Thi Đấu") || ss.insertSheet("Luật & Thể Thức Thi Đấu");
  sheet.clear();
  
  const headers = [
    ["Mã Kèo", "Thể Thức Thi Đấu", "Đặc Trưng Trận Đấu", "Loại Quân Áp Dụng", "Binh Chủng Đời 3", "Quy Định Cấm Kỵ Cốt Lõi", "Phong Cách Việt Nam vs Trung Quốc"]
  ];
  
  const data = [
    ["KT01", "Solo Shang Thuần Tiễn", "Đỉnh cao vi mô và ép đời chuẩn mực nhất; điều cung R tuyệt đỉnh.", "Shang vs Shang", "Chỉ duy nhất Cung R (BA)", "Cấm chém, cấm phù thủy, cấm sọc đơn, cấm pháo, cấm thành chòi. Cấm đập móng.", "TQ ép đời siêu chuẩn và đi quân mẫu mực; VN đột biến, vẩy E rỉa dân."],
    ["KT02", "Solo Assyrian Thuần Tiễn", "Ép đời thần tốc, quản lý map siêu rộng, xả tên dày đặc.", "Assyrian vs Assyrian", "Chỉ duy nhất Cung R (BA)", "Cấm chém, cấm phù thủy, cấm pháo, cấm thành chòi. Cấm đập móng.", "Cung Assyrian bắn nhanh +33%; đua dạt dân và điều rỉa."],
    ["KT03", "Solo Yamato Thuần Chém", "Sát thương sốc cực cao; kiểm soát mỏ vàng và bắt dân ăn hoang.", "Yamato vs Yamato", "Chỉ duy nhất Ngựa Chém (BL)", "Cấm Cung A, cấm phù thủy, cấm pháo, cấm thành chòi. Cấm đập móng.", "Đua kích 3 sớm (9x); luồn lách mỏ quả ruộng lúa đồ sát nông dân."],
    ["KT04", "2v2 Shang Hỗn Mã", "Sự kết hợp hoàn hảo giữa 1 Cung R và 1 Chém BL.", "Shang vs Shang", "Cung R phối hợp Ngựa chém", "Cấm phù thủy, cấm pháo, cấm thành chòi. Đúng phân vai 1 Cung 1 Chém.", "Chém làm bia đỡ đòn và càn quét, Cung R xả hỏa lực phía sau."],
    ["KT05", "Solo Random", "Ứng biến đa dạng, đọc bản đồ và tận dụng chất quân ngẫu nhiên.", "Random 16 quân", "Tự do mọi binh chủng đời 3", "Cấm thành chòi đời 3. Cấm đập móng dân đời 1-2.", "VN sở trường Random: dâng L, công phù, cẩu đá phá nhà biến ảo."],
    ["KT07", "4v4 Random (Đặc Sản VN)", "Đấu trường đỉnh cao của AoE Việt Nam; tinh hoa đồng đội.", "Random 16 quân", "Tự do binh chủng đời 3 & 4", "Cấm thành chòi đời 3. Tuân thủ luật bơm đồ qua BM. Cấm bug sửa ruộng.", "Phân vai: Đầu cánh chém rát bán máu; Trong cánh tay to sóc dân lên 4."],
    ["LUAT01", "Luật Đời 1 - Đời 2", "Bảo vệ giai đoạn đầu phát triển công bằng.", "Mọi thể thức", "Dân & Ngựa dò", "CẤM ĐẬP MÓNG DÂN. Cho phép vẩy E cứu dân. Cấm công nhà đời 2.", "Đảm bảo trận đấu văn minh, tôn vinh kỹ năng phát triển kinh tế."],
    ["LUAT02", "Luật Đời 3", "Giai đoạn giao tranh khốc liệt nhất.", "Mọi thể thức", "Theo thỏa thuận kèo", "CẤM ĐẮP THÀNH (Wall) và CHÒI CANH (Tower) ở đời 3. Cấm bơm đồ khi chưa có BM.", "Khuyến khích lối chơi tấn công cống hiến, cơ động, phô diễn điều quân."],
    ["LUAT03", "Luật Đời 4", "Giai đoạn hậu kỳ khi đã tích đủ tài nguyên.", "Mọi thể thức", "Mở khóa toàn bộ quân tuyển", "ĐƯỢC PHÉP xây Thành Chòi tự do khi đã lên xong Đời 4.", "Cuộc chiến quân hạng nặng: Voi thần, Đạp đôi, Xiên thần, Pháo cẩu to, Tên lửa."]
  ];
  
  formatSheetTable(sheet, headers, data, "#9c27b0");
}

function formatSheetTable(sheet, headers, data, headerColor) {
  // Ghi tiêu đề
  const headerRange = sheet.getRange(1, 1, 1, headers[0].length);
  headerRange.setValues(headers);
  headerRange.setBackground(headerColor);
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  
  // Ghi dữ liệu
  if (data.length > 0) {
    const dataRange = sheet.getRange(2, 1, data.length, data[0].length);
    dataRange.setValues(data);
    dataRange.setVerticalAlignment("middle");
    
    // Tô màu xen kẽ hàng (Zebra striping)
    for (let r = 2; r <= data.length + 1; r++) {
      let bg = (r % 2 === 0) ? "#f8f9fa" : "#ffffff";
      sheet.getRange(r, 1, 1, data[0].length).setBackground(bg);
    }
  }
  
  // Viền bảng và Freeze dòng đầu
  sheet.getRange(1, 1, data.length + 1, headers[0].length).setBorder(true, true, true, true, true, true, "#dadce0", SpreadsheetApp.BorderStyle.SOLID);
  sheet.setFrozenRows(1);
  
  // Tự động căn chỉnh độ rộng cột
  for (let c = 1; c <= headers[0].length; c++) {
    sheet.autoResizeColumn(c);
  }
}
