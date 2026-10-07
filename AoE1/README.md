# 🏛️ CẨM NANG TOÀN THƯ AOE 1 (ĐẾ CHẾ 1) - VIỆT NAM & TRUNG QUỐC
*Phiên bản chuẩn thi đấu: Age of Empires: Rise of Rome (AoE 1 RoR Patch 1.0a / UP1.5)*

---

## 📌 1. TỔNG QUAN VỀ AOE 1 & VĂN HÓA THI ĐẤU VIỆT - TRUNG

**Age of Empires (AoE 1)**, đặc biệt là bản mở rộng **Rise of Rome (RoR)** ra mắt từ năm 1998, đã trở thành một hiện tượng thể thao điện tử (Esports) độc nhất vô nhị tại hai quốc gia: **Việt Nam** và **Trung Quốc**. 

Trong khi phần còn lại của thế giới chuyển dịch sang các phiên bản mới, cộng đồng Việt - Trung đã duy trì, chuyên nghiệp hóa và đưa tựa game này lên tầm đỉnh cao chiến thuật suốt hơn 25 năm qua với các giải đấu giao hữu và quy chuẩn quốc tế khắt khe.

### 🌟 Sự Khác Biệt Trong Phong Cách Chơi:
* **Trung Quốc (Thế mạnh Cung R - Shang & Assyrian):**
  * Tinh thần chuẩn mực, kỷ luật và chính xác như lập trình.
  * Thao tác vi mô ép đời cực chuẩn (nông dân không một giây nhàn rỗi, ăn dứt điểm từng cây gỗ/con hươu).
  * Lối điều Cung R dàn hàng ngang, tận dụng tối đa tầm bắn và độ nở của đội hình.
  * Các huyền thoại tiêu biểu: **Shenlong (Thần Long), Tiểu Thủy Ngư, Sơ Luyến, Đổ Thánh, Minh Nhật, Chiến Tướng**.
* **Việt Nam (Thế mạnh Random & Biến Ảo - 4v4, Đánh Chém):**
  * Lối chơi giàu tính đột biến, sáng tạo, ứng biến theo địa hình bản đồ (Hill Country).
  * Kỹ năng thao tác "vẩy E" (bắt quân, bo nhỏ chống thú hoang, bẫy ngựa chém) đạt cảnh giới thần sầu.
  * Đỉnh cao phối hợp đồng đội 4v4 (phân vai chặt chẽ giữa Chém bán máu và Chủ lực tay to).
  * Các huyền thoại tiêu biểu: **Chim Sẻ Đi Nắng, BiBi, Hồng Anh, Hoàng Mai Nhi, Gunny, Cam Quýt, Vanelove**.

---

## 📁 2. HỆ THỐNG DỮ LIỆU SẴN SÀNG CHO GOOGLE SHEETS

Trong thư mục dự án này, hệ thống cơ sở dữ liệu đã được cấu trúc thành các tệp chuẩn để import vào Google Sheets:

| Tên Tệp | Định Dạng | Mô Tả Nội Dung |
| :--- | :--- | :--- |
| [`01_16_Civilizations.csv`](file:///c:/Devtools/Projects/google-sheet/AoE1/01_16_Civilizations.csv) | CSV (UTF-8) | Dữ liệu đầy đủ 16 loại quân (Tên VN, Tên Anh, Tên Trung, Điểm mạnh/yếu, Tier đời 3 & 4). |
| [`02_Units_Buildings.csv`](file:///c:/Devtools/Projects/google-sheet/AoE1/02_Units_Buildings.csv) | CSV (UTF-8) | Toàn bộ chỉ số lính, kỵ binh, pháo binh, phù thủy và công trình (Máu, Công, Giáp, Tầm xa, Chi phí). |
| [`03_Tech_Tree.csv`](file:///c:/Devtools/Projects/google-sheet/AoE1/03_Tech_Tree.csv) | CSV (UTF-8) | Bảng cây công nghệ nâng cấp (Nhà BM, BC, BS, BP, Đời yêu cầu, Chi phí, Tác dụng cụ thể). |
| [`04_Rules_Formats_VN_CN.csv`](file:///c:/Devtools/Projects/google-sheet/AoE1/04_Rules_Formats_VN_CN.csv) | CSV (UTF-8) | Bộ luật thi đấu chính thức Việt - Trung và chi tiết các thể thức kinh điển (Shang, Assyrian, Random, 2v2, 4v4). |
| [`index.html`](file:///c:/Devtools/Projects/google-sheet/AoE1/index.html) | HTML5 / CSS3 / JS | Giao diện Web App tương tác độc lập (tra cứu, tìm kiếm, lọc Tier, timeline). |
| [`AoE1_GoogleSheets_Setup.gs`](file:///c:/Devtools/Projects/google-sheet/AoE1/AoE1_GoogleSheets_Setup.gs) | Apps Script | Mã nguồn Google Apps Script khởi tạo tự động 4 Sheet chuẩn đẹp 1-click & hỗ trợ Web App. |

---

## ⚔️ 3. PHÂN TÍCH CHUYÊN SÂU 16 NỀN VĂN MINH (CIVILIZATIONS)

### 1. 🏹 Shang (商 - Thương)
* **Kiến trúc:** Đông Á (East Asian).
* **Đặc tính độc quyền:** Dân chỉ tốn **35 thịt** (so với 50 thịt tiêu chuẩn). Tường thành x2 lượng máu.
* **Chất quân qua các đời:**
  * **Đời 1 - 2:** Ép đời chuẩn và ổn định nhất game. Do dân rẻ, người chơi ít khi bị gián đoạn sinh dân dù thế bài ít đồ ăn.
  * **Đời 3:** Đánh Cung R (BA), Ngựa chém (BL), Sọc đơn, Phù thủy. Quân không có bonus chỉ số trực tiếp nhưng lợi thế ép đời sớm giúp kiểm soát thế trận vượt trội.
  * **Đời 4:** BB chém (Legion), Bắn đá nhỏ (Onager), Ngựa chém giáp 4. Không có Cẩu đá to, không có Voi, không có Ngựa đôi.
* **Đánh giá thi đấu:** Tier **S+** ở thể thức Solo thuần tiễn; Tier **A** trong 4v4.

### 2. ⚡ Assyrian (亚述 - Áp-si)
* **Kiến trúc:** Babylon / Lưỡng Hà.
* **Đặc tính độc quyền:** Dân di chuyển nhanh **+30%** (tương đương tốc độ ngựa dò). Cung R bắn nhanh **+33%** (tần suất xả tên dày đặc nhất game).
* **Chất quân qua các đời:**
  * **Đời 1 - 2:** Dân chạy nhanh giúp câu voi, lùa hươu và trốn chạy sư tử/ngựa dò cực kỳ an toàn.
  * **Đời 3:** Cung R mạnh nhất game về hỏa lực dồn sát thương và rỉa máu; bù lại không có Đầu Máu (Nobility) nên chỉ có 75 HP.
  * **Đời 4:** Yếu nhất game; thiếu hầu hết công nghệ hạng nặng (không có cung lửa, không có pháo to, không voi).
* **Đánh giá thi đấu:** Tier **S+** đời 3; Kèo Solo Assyrian là một trong hai kèo thuần tiễn danh giá nhất.

### 3. 🛡️ Egyptian (埃及 - Ai Cập)
* **Kiến trúc:** Ai Cập.
* **Đặc tính độc quyền:** Cung R được **+33% HP** (93 máu thay vì 70 máu). Dân đào vàng mang về 13 vàng/chuyến (+20%). Phù thủy tầm xa **+3** (12 ở đời 3, 16 ở đời 4).
* **Chất quân qua các đời:**
  * **Đời 1 - 2:** Phát triển bình thường; cần chú ý cân đối gỗ vì đầu đời 3 Cung R tốn nhiều gỗ.
  * **Đời 3:** Cung R trâu máu nhất, bắn đổi mạng vô cùng lợi; Phù thủy tầm xa 12 đứng ngoài tầm cung để hú kỵ binh.
  * **Đời 4:** Cực kỳ bá đạo với Ngựa đạp đôi max công nghệ, Phù thủy sấm sét và Cẩu đá to (Heavy Catapult).
* **Đánh giá thi đấu:** Tier **S** toàn diện cả đời 3 và đời 4.

### 4. 🏰 Babylonian (巴比伦 - Ba-bi-lon)
* **Kiến trúc:** Babylon / Lưỡng Hà.
* **Đặc tính độc quyền:** Tường thành và Tháp canh x2 máu. Phù thủy hồi năng lượng (mana) nhanh **+30%**. Dân đào đá mang về 13 đá (+3).
* **Chất quân qua các đời:**
  * **Đời 3:** Quân toàn diện: Cung R, Ngựa chém, Sọc đơn, Phù thủy hồi mana thần tốc. Thích hợp thủ nhà dẻo dai.
  * **Đời 4:** Rất mạnh với Ngựa đạp đôi, Cung A 3 áo, Cẩu đá to và Tháp canh thần x2 máu (1000 HP).
* **Đánh giá thi đấu:** Tier **A**; lối đánh bền bỉ, phản công mẫu mực.

### 5. ☄️ Hittite (西台 / 赫梯 - Hít-ti)
* **Kiến trúc:** Babylon / Lưỡng Hà.
* **Đặc tính độc quyền:** Cung R mặc định **+1 công** (công 4+1 = 5, nâng chặt gỗ lên 6). Bắn đá (Catapult) x2 máu (300 HP đời 3, 350 HP đời 4). Tàu chiến bắn xa +4.
* **Chất quân qua các đời:**
  * **Đời 3:** Cung R sát thương cực rát (tiêu diệt dân đối phương nhanh hơn hẳn); Bắn đá 300 máu là ác mộng của mọi dàn cung tụ lại.
  * **Đời 4:** Cung R có tên lửa, Đạp đôi, Bắn đá kẹp Cung R.
* **Đánh giá thi đấu:** Tier **S+** trong thể thức Random; lựa chọn chủ lực trong mơ của mọi đội hình 4v4.

### 6. 🌲 Phoenician (腓尼基 - Phê-nê)
* **Kiến trúc:** Babylon / Lưỡng Hà.
* **Đặc tính độc quyền:** Dân chặt gỗ mang về **13 gỗ** (+3 gỗ/chuyến, tăng ~30% tốc độ tích lũy gỗ). Voi giảm **25% giá thực** (chỉ 135 thực thay vì 180).
* **Chất quân qua các đời:**
  * **Đời 3:** Khả năng ép nhiều nhà BA cực kỳ dồi dào nhờ thừa gỗ; cơ cấu ruộng và hồi dân sau các đợt bị chọc phá nhanh nhất game.
  * **Đời 4:** Voi húc và Voi tên siêu rẻ; số lượng voi áp đảo đè bẹp đối thủ; có Cung R lửa.
* **Đánh giá thi đấu:** Tier **A** đời 3; Tier **S** phát triển kinh tế và late game.

### 7. 🌾 Sumerian (苏美尔 - Su-me)
* **Kiến trúc:** Babylon / Lưỡng Hà.
* **Đặc tính độc quyền:** Dân có **40 HP** (dân thường 25 HP, trâu hơn 60%). Ruộng gấp đôi sản lượng (**500 thực** thay vì 250). Cẩu đá bắn nhanh **gấp đôi** (x2 attack speed).
* **Chất quân qua các đời:**
  * **Đời 1 - 2:** Dân 40 HP chống sư tử và ngựa dò cực tốt; dân đi ăn hoang khó bị bắt lẻ.
  * **Đời 3:** Tiết kiệm hàng ngàn gỗ nhờ ruộng 500 thực; Cung R bền bỉ, Cẩu đá bắn tốc độ cao.
  * **Đời 4:** Cẩu đá to bắn liên thanh giải tán đám đông trong tích tắc, kết hợp Đạp đôi càn quét.
* **Đánh giá thi đấu:** Tier **S** trong Random; toàn diện cả công và thủ.

### 8. 🐘 Persian (波斯 - Ba Tư)
* **Kiến trúc:** Babylon / Lưỡng Hà.
* **Đặc tính độc quyền:** Dân ăn hươu và voi nhanh **+30%**. Voi di chuyển nhanh **+50%** (chạy nhanh như ngựa chém). Khởi đầu bị trừ 50 thực (chỉ có 150 thực).
* **Chất quân qua các đời:**
  * **Đời 1 - 2:** Cần dò thấy bầy quả sớm để bù 50 thực khởi đầu. Dân ăn thịt hoang siêu nhanh giúp kích đời cực sớm.
  * **Đời 3:** Không có Bánh xe (không có Cung R); thường đánh Ngựa chém BL ép đời sớm hoặc Lạc đà.
  * **Đời 4:** **Voi điên** (Voi húc chạy thần tốc) là cơn ác mộng kinh hoàng nhất trên bản đồ.
* **Đánh giá thi đấu:** Tier **B+** đời 3; Tier **S** đời 4 nếu giữ được kinh tế vàng/thực.

### 9. ⚔️ Yamato (大和 - Nhật Bản)
* **Kiến trúc:** Đông Á.
* **Đặc tính độc quyền:** Dân di chuyển nhanh **+30%** (tương tự Assyrian). Ngựa chém (Scout, Cavalry) rẻ hơn **25% vàng** (chỉ 75 vàng thay vì 100).
* **Chất quân qua các đời:**
  * **Đời 3:** Vua của chiến thuật đánh Chém; đẻ ngựa chém liên tục không lo đứt nhịp vàng; cơ động bắt dân khắp bản đồ.
  * **Đời 4:** Ngựa chém thần (Cataphract), Cung A, Lính xiên. Không có Đạp đôi, không có Voi.
* **Đánh giá thi đấu:** Tier **S** đánh chém đời 3; Kèo Solo Yamato là đỉnh cao chém sốc sát thương.

### 10. 🎯 Minoan (米诺斯 - Mi-nô-an)
* **Kiến trúc:** Hy Lạp.
* **Đặc tính độc quyền:** Cung A (Composite Bowman) có tầm xa **+1 ở đời 3** và **+2 ở đời 4** (tầm xa tối đa lên tới **11 ô**, xa nhất game). Ruộng +60 thực.
* **Chất quân qua các đời:**
  * **Đời 3:** Không có Cung R, không có Ngựa chém BL. Đánh Cung A (tầm xa 8-9) đứng tụ một góc; bất kỳ đạo quân nào lao vào đều ngã gục trước khi chạm tới.
  * **Đời 4:** Cung A tầm xa 11 kẹp Pháo cẩu to và Pháo lùn Ballista tạo thành pháo đài bất khả xâm phạm.
* **Đánh giá thi đấu:** Tier **S** ở vai trò chủ lực bảo kê đồng đội trong 4v4.

### 11. 🛡️ Choson (朝鲜 - Triều Tiên)
* **Kiến trúc:** Đông Á.
* **Đặc tính độc quyền:** Lính BB kiếm (Swordsman / Legion) được **+80 HP** (tối đa lên tới 240 HP). Phù thủy giảm **30% giá vàng** (85 vàng thay vì 125). Tháp canh tầm xa +2.
* **Chất quân qua các đời:**
  * **Đời 3:** Quân đánh đời 3 khó khăn nhất (không Bánh xe, không Ngựa chém đầu máu); thường đánh Ngựa chém cơ bản kẹp Phù thủy giá rẻ hoặc Cung A.
  * **Đời 4:** BB chém thần 240 máu (Legion) cực kỳ trâu bò, tràn ngập căn cứ đối phương kết hợp dàn Phù thủy giá rẻ.
* **Đánh giá thi đấu:** Tier **C** đời 3; Tier **B+** / **A** đời 4.

### 12. 🔨 Roman (罗马 - La Mã)
* **Kiến trúc:** La Mã.
* **Đặc tính độc quyền:** Công trình rẻ hơn **15% gỗ** (trừ tường và chòi). Chòi canh giảm **50% đá** (chỉ tốn 75 đá). Lính BB kiếm chém nhanh **+33%**.
* **Chất quân qua các đời:**
  * **Đời 3:** Tiết kiệm lượng gỗ khổng lồ; thường đánh Ngựa chém kẹp BB kiếm hoặc chiến thuật Dâng Chòi (Tower Rush).
  * **Đời 4:** BB Legion đánh nhanh như máy khâu, Ngựa chém thần, Pháo lùn Helepolis cực rẻ gỗ.
* **Đánh giá thi đấu:** Tier **B** đời 3; Tier **A** trong tay người chơi giỏi khai thác tiết kiệm gỗ.

### 13. 🦣 Carthaginian (迦太基 - Cát-ta)
* **Kiến trúc:** La Mã.
* **Đặc tính độc quyền:** Voi (húc & tên) và Lính Xiên (Hoplite) được **+25% HP** (Voi húc 750 HP - trâu nhất game; Xiên 150-200 HP). Tháp canh lửa +50% sát thương.
* **Chất quân qua các đời:**
  * **Đời 3:** Không có Bánh xe, không có Ngựa chém BL; chủ yếu dựa vào Lạc đà chống kỵ binh hoặc Lính Xiên 150 máu thủ nhà.
  * **Đời 4:** Voi húc 750 HP và Xiên thần 200 HP càn quét như xe ủi đất hạng nặng.
* **Đánh giá thi đấu:** Tier **B** đời 3; Tier **A** đời 4 cận chiến.

### 14. 🐪 Palmyran (帕尔米拉 - Pan-mi-ra)
* **Kiến trúc:** La Mã.
* **Đặc tính độc quyền:** Dân làm việc nhanh **+20%** trên mọi loại tài nguyên. Dân có sẵn **1 giáp**. Bơm tài nguyên cho đồng đội **thuế 0%**. Lạc đà chạy nhanh nhất game.
* **Nhược điểm chí mạng:** Dân đắt **75 thực/con** (gấp rưỡi dân thường); nếu bị mất dân đầu trận sẽ cực kỳ thọt.
* **Chất quân qua các đời:**
  * **Đời 3:** Đánh Lạc đà bắt chém cực ngọt; Cung R hoặc Ngựa chém BL cơ động cao.
  * **Đời 4:** Có Đạp đôi, Cung R lửa, Bắn đá to; khả năng bơm đồ tiếp đạn cho đồng đội vô địch.
* **Đánh giá thi đấu:** Tier **A+**; yêu cầu khả năng giữ dân điêu luyện.

### 15. 🧙‍♂️ Macedonian (马其顿 - Ma-xê-đô-ni-a)
* **Kiến trúc:** La Mã.
* **Đặc tính độc quyền:** Toàn quân **kháng Phù thủy gấp 4 lần**. Lính bộ và Bắn đá có tầm nhìn +2. Pháo cẩu và Pháo lùn giảm **50% chi phí**.
* **Nhược điểm chí mạng:** **KHÔNG CÓ NHÀ CHỢ (BM)** -> Không thể nghiên cứu Bánh xe, không nâng cấp Chặt gỗ, không đào vàng/đá nhanh, không thể chuyển tài nguyên.
* **Chất quân qua các đời:**
  * **Đời 3:** Đánh Ngựa chém BL (trâu nhờ kháng hú), Lính Xiên, Bắn đá siêu rẻ.
  * **Đời 4:** Pháo lùn Helepolis và Pháo cẩu to giá rẻ như cho; dàn pháo đẩy đến đâu tan hoang đến đó.
* **Đánh giá thi đấu:** Tier **B+** đời 3; Tier **A** đè bẹp các đối thủ dùng Phù thủy.

### 16. 🔱 Greek (希腊 - Hy Lạp)
* **Kiến trúc:** Hy Lạp.
* **Đặc tính độc quyền:** Lính Xiên (Hoplite, Phalanx, Centurion) di chuyển nhanh **+30%** (chạy đuổi kịp bộ binh).
* **Chất quân qua các đời:**
  * **Đời 3:** Khá tù túng vì không có Bánh xe, không có Ngựa chém BL, không Lạc đà; phải vận hành Lính Xiên chạy nhanh kẹp Cung A hoặc Phù thủy.
  * **Đời 4:** Xiên thần (Centurion) lướt gió với chỉ số công 30 giáp 8, kết hợp Cẩu đá to và Pháo lùn Helepolis càn quét mọi vật cản.
* **Đánh giá thi đấu:** Tier **C+** đời 3; Tier **B+** đời 4.

---

## 🔄 4. BẢNG TƯƠNG KHẮC BINH CHỦNG CỐT LÕI (COUNTER MATRIX)

Hiểu rõ cơ chế khắc chế là chìa khóa để ra quân chuẩn xác trong các trận đấu đỉnh cao:

```
               [ Cung R ]
             ↗            ↖
     (Khắc chế)          (Khắc chế)
         /                    \
   [ Lạc Đà ] <----------> [ Ngựa Chém ]
        |       (Khắc chế)       |
        |                        |
(Bị khắc chế)              (Bị khắc chế)
        v                        v
  [ Phù Thủy ] <---------- [ Sọc Đơn / Đạp Đôi ]
               (Bị kháng hú)
```

| Đơn Vị Tấn Công | Khắc Chế Tốt Nhất | Bị Khắc Chế Bởi | Lưu Ý Chiến Thuật |
| :--- | :--- | :--- | :--- |
| **Cung R (BA)** | Bộ binh chậm, Lính chém khi chưa áp sát, Dân | Ngựa chém áp sát, Lạc đà, Pháo cẩu đá | Cần không gian thả diều (hit & run), tụ số lượng đông. |
| **Ngựa Chém (BL)** | Cung R đi lẻ, Dân, Pháo cẩu | Lạc đà, Phù thủy, Lính xiên giáp sắt | Đột kích mỏ tài nguyên, sốc sát thương bắt tướng. |
| **Lạc Đà (BL)** | Toàn bộ Kỵ binh (Ngựa chém, Ngựa dò) | Cung R tụ đông, Phù thủy, Bộ binh kiếm | Khắc tinh kỵ binh rẻ vàng; chạy nhanh bắt chém. |
| **Sọc Đơn / Đạp Đôi** | Phù thủy (Kháng hú cực cao), Dân | Lạc đà, Ngựa chém, Lính xiên | Đơn vị chỉ tốn Gỗ và Thực; càn quét đám đông. |
| **Phù Thủy (BP)** | Kỵ binh đắt tiền (Chém, Voi), Đơn vị trâu | Sọc đơn, Cung R, Bắn đá tầm xa | Đứng sau hàng rào bảo vệ để thu phục quân chủ lực địch. |
| **Cẩu Đá (BK)** | Cung tụ đám đông, Công trình, Chòi | Ngựa chém cơ động, Lạc đà, Pháo lùn | Sát thương lan diện rộng; cẩn thận bắn trúng quân mình. |
| **Xiên Thần (BY)** | Mọi đơn vị cận chiến, Kỵ binh không chạy | Phù thủy tầm xa, Cung thả diều, Cẩu đá | Chỉ số cận chiến khủng khiếp (Công 30 Giáp 8). |

---

## 🏆 5. CÁC THỂ THỨC THI ĐẤU KINH ĐIỂN VIỆT - TRUNG

### 1. Solo Shang Thuần Tiễn (商朝纯弓)
* **Bản chất:** Đỉnh cao của thao tác vi mô, căn ke tài nguyên và tư duy vị trí. Cả hai bên đều chơi quân Shang và chỉ được phép đánh duy nhất Cung R ở đời 3.
* **Thời gian kích 3 chuẩn:** 23 - 26 dân, kích đời 3 trong khoảng `09:30 - 10:15` (trong game).
* **Quyết định thắng bại:** Khả năng ép dân không đứt nhịp, cơ cấu ruộng vuông vắn kín kẽ, điều cung rỉa máu và giữ tụ cung.

### 2. Solo Assyrian Thuần Tiễn (亚述纯弓)
* **Bản chất:** Cuộc chiến tốc độ cao. Dân chạy nhanh và Cung R bắn nhanh +33% tạo nên nhịp độ dồn dập nghẹt thở.
* **Quy tắc:** Chỉ đánh Cung R đời 3, không dùng chém hay phù thủy.
* **Đặc trưng:** Yêu cầu khả năng dạt dân ăn hoang rộng và kỹ năng điều quân phân tán rỉa dân cực gắt.

### 3. Solo Yamato Thuần Chém (大和纯骑)
* **Bản chất:** Kèo đấu cận chiến sốc sát thương. Hai bên dùng Yamato và chỉ được đánh Ngựa Chém BL đời 3.
* **Thời gian kích 3 chuẩn:** Ép 21 - 23 dân, kích đời cực sớm (`08:45 - 09:30`).
* **Đặc trưng:** Cạnh tranh mỏ vàng gay gắt, luồn lách bắt dân và đua nâng cấp công giáp trong nhà BS.

### 4. 2v2 Shang Hỗn Mã (2v2 商朝混马 - Song Long)
* **Bản chất:** Sự kết hợp hoàn mỹ giữa 1 game thủ đánh Cung R và 1 game thủ đánh Ngựa chém.
* **Chiến thuật:** Người đánh chém chủ động lao lên quấy rối, đỡ đòn và ép góc; người đánh cung đứng sau xả sát thương dọn dẹp.

### 5. 4v4 Random (Thể thức Quốc Hồn của AoE Việt Nam)
* **Bản chất:** Đấu trường đồng đội 8 người chơi đỉnh cao nhất. Mỗi người bốc ngẫu nhiên 1 trong 16 loại quân trên bản đồ Gigantic Hill Country.
* **Phân vai kinh điển:**
  * **Đầu cánh (Chém bán máu / Ép đời):** Đóng BL chém rát, dâng quân công thẳng nhà đối diện, hy sinh để kìm chân 2 nhà đối phương.
  * **Trong cánh (Chủ lực tay to):** Bo nhà kín mít, kích 3 an toàn, sóc 4-6 nhà BA, mở rộng kinh tế ruộng, tích quân đẩy ra cứu cánh hoặc bật Đời 4 để time đè kết liễu trận đấu.

---

## 📜 6. BỘ LUẬT THI ĐẤU CHUẨN VIỆT - TRUNG (OFFICIAL RULES)

Được chuẩn hóa qua các kỳ giải đấu lớn (Việt - Trung 2011, 2015, 2017, 2019, 2023, 2024):

### 1. Cài Đặt Trận Đấu (Game Settings):
* **Bản đồ:** Hill Country (Đồi núi).
* **Kích thước bản đồ:** Solo (Large) | 2v2 (Large/Huge) | 4v4 (Gigantic).
* **Dân số (Pop limit):** 200 Pop.
* **Tốc độ:** Normal (1.5 hoặc 2.0 tùy thỏa thuận giải).
* **Chế độ xem bản đồ:** Default (có sương mù).
* **Điều kiện chiến thắng:** Conquest (Tiêu diệt hoàn toàn).

### 2. Quy Định Đời 1 & Đời 2:
* ❌ **CẤM ĐẬP MÓNG DÂN:** Tuyệt đối không được dùng móng công trình (nhà BE, BS, BM...) để bao vây, nhốt hoặc đập chết nông dân đối phương khi chưa có lính.
* ✅ **CHO PHÉP VẨY E:** Được phép đặt móng nhà BE để cản đường thú dữ, chặn đường rút lui của ngựa chém hoặc tự bảo vệ dân mình.
* ❌ **CẤM CÔNG NHÀ ĐỜI 2:** Trong các thể thức đánh đời 3, không được đẻ quẩy đá hay lính chùy để sang phá hoại nhà đối thủ trước khi lên đời 3.
* ✅ **NGỰA DÒ:** Được phép dùng ngựa dò chém quấy rối khi đã hoàn tất nâng cấp lên Đời 2.

### 3. Quy Định Đời 3:
* ❌ **CẤM ĐẮP THÀNH (Wall - BW) & XÂY CHÒI (Watch Tower - BT):** Ở đời 3 trong các kèo chuẩn tiễn và tự do, nghiêm cấm xây thành và tháp canh (nhằm giữ lối chơi tấn công cống hiến, cơ động).
* ❌ **CẤM BƠM TÀI NGUYÊN KHI CHƯA CÓ CHỢ (BM):** Chỉ được chuyển tài nguyên khi đã xây xong nhà Chợ và tuân thủ mốc thời gian quy định của giải.
* ❌ **CẤM SỬ DỤNG BUG GAME:** Nghiêm cấm dùng lỗi sửa ruộng (Farm Glitch) làm ruộng bất tử hoặc các thủ thuật can thiệp bộ nhớ.

### 4. Quy Định Đời 4:
* ✅ **MỞ KHÓA TOÀN DIỆN:** Khi người chơi đã bấm nâng cấp và lên xong Đời 4 (Iron Age), được phép xây Thành và Tháp canh tự do, đồng thời bung toàn bộ vũ khí hủy diệt (Voi thần, Cẩu to, Xiên thần, Tên lửa...).

---

## ⏱️ 7. CÔNG THỨC ÉP ĐỜI CHUẨN TIMELINE (CHỈNH TỪNG GIÂY)

### Công Thức 23 - 25 Dân Đánh Cung R (Shang / Assyrian):
1. **Dân 1 - 2 - 3:** Đóng ngay 2 nhà BE đầu tiên; lùa dân ăn quả khởi đầu (4-6 cây quả).
2. **Dân 4 - 5 - 6:** Cho ăn quả cùng 3 dân đầu; dân thứ 6 đi tìm mỏ thịt tiếp theo (hươu, voi).
3. **Dân 7 - 8 - 9:** Cắt đi chặt gỗ; tìm vị trí đẹp đóng nhà BS đầu tiên ăn gỗ.
4. **Dân 10 - 15:** Tiếp tục khai thác quả, câu 1-2 con voi về gần Nhà Chính (TC) để tiết kiệm thời gian vận chuyển.
5. **Dân 16 - 22:** Lùa bầy hươu về nhà chính hoặc đóng BS thứ hai để ăn thịt hoang; tiếp tục đóng BE đúng nhịp tránh bị "chậm dân" (Limit pop).
6. **Nhấp Đời 2:** Đủ 500 thịt -> Nhấp nâng cấp đời 2 ở giây `07:15 - 07:45`. Trong quá trình lên đời 2, điều phối dân cân đối: ~10 dân gỗ, ~13-14 dân thịt.
7. **Lên Đời 2:** Lập tức đóng ngay nhà Chợ (BM) và nhà Quân (BA hoặc BL).
8. **Nhấp Đời 3:** Đủ 800 thịt và hoàn thành BM + BA -> Nhấp nâng cấp đời 3 ở phút `08:30 - 09:15`.
9. **Trong Quá Trình Lên Đời 3:**
   * Nâng cấp **Chặt gỗ 1** trong nhà BM.
   * Dồn gỗ đóng thêm 3-4 nhà BA (đối với bài Cung) hoặc đào vàng (đối với bài Chém).
10. **Lên Đời 3:** Nhấp nâng cấp **Bánh xe (Wheel)** ngay lập tức; xả quân đều đặn tại các nhà quân!

---

## 🚀 8. HƯỚNG DẪN ĐƯA TOÀN BỘ LÊN WEB (3 PHƯƠNG ÁN)

### Phương Án 1: Triển khai trực tiếp thành Web App bằng Google Apps Script (Khuyên dùng)
Nếu bạn đã tạo Google Sheets, bạn có thể biến nó thành một Website độc lập có link truy cập công khai trong 1 phút:
1. Trong màn hình **Google Apps Script**, nhấn nút **`+` (Thêm tệp)** bên trái ➔ Chọn **HTML** ➔ Đặt tên là `index`.
2. Mở file [`index.html`](file:///c:/Devtools/Projects/google-sheet/AoE1/index.html) trong thư mục này, sao chép toàn bộ mã và dán vào file `index.html` trong Apps Script ➔ Nhấn Lưu.
3. Ở góc trên bên phải màn hình Apps Script, nhấn nút xanh: **Triển khai (Deploy)** ➔ **Tùy chọn triển khai mới (New deployment)**.
4. Chọn loại: **Ứng dụng web (Web app)**:
   * **Mô tả:** AoE 1 Cẩm Nang Web.
   * **Người có quyền truy cập (Who has access):** Chọn **Bất kỳ ai (Anyone)**.
5. Nhấn **Triển khai (Deploy)** ➔ Google sẽ cấp một đường link URL dạng `https://script.google.com/macros/s/.../exec`. Bạn có thể gửi link này cho bất kỳ ai hoặc mở trên điện thoại!

---

### Phương Án 2: Xuất bản Google Sheets trực tiếp lên Web
Nếu bạn muốn chia sẻ bảng tính trực quan dưới dạng trang web:
1. Mở bảng tính Google Sheets của bạn.
2. Trên menu chọn: **Tệp (File)** ➔ **Chia sẻ (Share)** ➔ **Xuất bản lên web (Publish to web)**.
3. Chọn xuất bản **Toàn bộ tài liệu (Entire Document)** ➔ Nhấn **Xuất bản (Publish)**. Bạn sẽ nhận được đường link web để xem trực tiếp.

---

### Phương Án 3: Mở trực tiếp hoặc Đưa lên Hosting Miễn Phí (Vercel / GitHub Pages / Netlify)
Tệp [`index.html`](file:///c:/Devtools/Projects/google-sheet/AoE1/index.html) đã được thiết kế hoàn chỉnh dạng Single Page Application (Dark & Gold AoE Theme, tra cứu tức thì, lọc Tier):
* **Xem ngay trên máy tính:** Nhấp đúp chuột vào tệp [`index.html`](file:///c:/Devtools/Projects/google-sheet/AoE1/index.html) để mở trên trình duyệt bất kỳ.
* **Đưa lên web vĩnh viễn (0 đồng):**
  * Kéo thả thư mục dự án vào [Netlify Drop](https://app.netlify.com/drop) để có ngay website trong 10 giây.
  * Hoặc đẩy lên GitHub và bật tính năng **GitHub Pages** (Settings ➔ Pages ➔ Source: main branch).


---
*Tài liệu được biên soạn và chuẩn hóa phục vụ cộng đồng AoE Việt Nam - Trung Quốc.*
