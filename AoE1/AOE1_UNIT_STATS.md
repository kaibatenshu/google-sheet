# ⚔️ BẢNG TRA CỨU CHỈ SỐ LÍNH TOÀN TẬP - AGE OF EMPIRES I (RISE OF ROME 1.0b)
*Dữ liệu được kiểm tra, xác thực và chuẩn hóa theo phiên bản chuẩn thi đấu Việt Nam & Quốc tế (AoE 1 RoR Patch 1.0b)*

---

## 📌 MỤC LỤC
1. [Tổng Quan & Quy Chuẩn Đo Lường](#1-tổng-quan--quy-chuẩn-đo-lường)
2. [Doanh Trại Bộ Binh - Nhà BB (Barracks)](#2-doanh-trại-bộ-binh---nhà-bb-barracks)
3. [Trường Bắn Cung - Nhà BA (Archery Range)](#3-trường-bắn-cung---nhà-ba-archery-range)
4. [Chuồng Ngựa Chiến - Nhà BL (Stable)](#4-chuồng-ngựa-chiến---nhà-bl-stable)
5. [Viện Hàn Lâm Lính Xiên - Nhà BY (Academy)](#5-viện-hàn-lâm-lính-xiên---nhà-by-academy)
6. [Xưởng Khí Tài Công Thành - Nhà BK (Siege Workshop)](#6-xưởng-khí-tài-công-thành---nhà-bk-siege-workshop)
7. [Đền Thờ Phù Thủy - Nhà BP (Temple)](#7-đền-thờ-phù-thủy---nhà-bp-temple)
8. [Nhà Chính - Nông Dân (Town Center)](#8-nhà-chính---nông-dân-town-center)
9. [Bến Tàu Hải Quân - Nhà BShips (Dock)](#9-bến-tàu-hải-quân---nhà-bships-dock)
10. [Ma Trận Điểm Cộng Đặc Trưng 16 Quốc Gia (Civ Bonuses)](#10-ma-trận-điểm-cộng-đặc-trưng-16-quốc-gia-civ-bonuses)
11. [Cơ Chế Ẩn: Khắc Chế, Sát Thương Lan & Kháng Thu Phục](#11-cơ-chế-ẩn-khắc-chế-sát-thương-lan--kháng-thu-phục)

---

## 1. TỔNG QUAN & QUY CHUẨN ĐO LƯỜNG

Trong Age of Empires: Rise of Rome (RoR 1.0b), tất cả các chỉ số được định nghĩa trong engine game theo hệ thống:
* **Máu (HP):** Lượng sinh lực tối đa của đơn vị.
* **Tấn công (Attack):** Sát thương cơ bản mỗi đòn đánh.
* **Giáp cận chiến (Melee Armor):** Giảm trực tiếp sát thương từ các đòn đánh cận chiến (kiếm, chùy, xiên, móng vuốt, kỵ binh). Đòn đánh luôn gây tối thiểu 1 sát thương.
* **Giáp chống tên (Pierce Armor):** Giảm trực tiếp sát thương từ tên, đạn pháo và đạn đá.
* **Tầm xa (Range):** Số ô gạch (tiles) tối đa đơn vị có thể bắn trúng. Tầm xa 0 biểu thị đơn vị đánh giáp lá cà (cận chiến).
* **Tầm nhìn (Line of Sight - LOS):** Bán kính phát hiện sương mù chiến tranh.
* **Tốc độ di chuyển (Speed):** Đo bằng số ô gạch di chuyển trên 1 giây ở tốc độ gốc (1.0x).
* **Thời gian huấn luyện (Train Time):** Tính bằng giây (s).

---

## 2. DOANH TRẠI BỘ BINH - NHÀ BB (BARRACKS)

Nhánh bộ binh từ nhà BB có ưu điểm chi phí thấp, sản xuất nhanh, kháng tên khá ở một số loại và phá hủy công trình hiệu quả.

| Đơn Vị | Tên Tiếng Anh | Đời | Chi Phí | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tầm Nhìn | Huấn Luyện | Chỉ Số Sau Nâng Cấp Tối Đa (Max Tech) |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Lính Chùy** | Clubman | 1 | 50 Thực | 40 | 3 | 0 / 0 | 0 | 1.20 | 4 | 26s | Công 3, Giáp 0/0 (Đời 1) |
| **Lính Rìu** | Axeman | 2 | 50 Thực | 50 | 5 | 0 / 0 | 0 | 1.20 | 4 | 26s | Nâng từ Chùy (100F). Công 5+2 (BS) = 7, Giáp 0+2 (BS) |
| **Quẩy Đá** | Slinger | 2 | 40 Thực, 10 Đá | 25 | 2 | 0 / 2 | 4 | 1.20 | 5 | 24s | **+1.5 công vs Cung**. Nâng Đào đá: Tầm xa 5. Giáp BS: 4/2 |
| **Kiếm Ngắn** | Short Swordsman | 3 | 35 Thực, 15 Vàng | 60 | 7 | 1 / 0 | 0 | 1.20 | 4 | 26s | Nâng BS: Công 7+4 = 11, Giáp 1+4 = 5/0 (Choson: 140 HP) |
| **Kiếm Bản Rộng** | Broad Swordsman | 3 | 35 Thực, 15 Vàng | 70 | 9 | 1 / 0 | 0 | 1.20 | 4 | 26s | Nâng BS: Công 9+4 = 13, Giáp 1+4 = 5/0 (Choson: 150 HP, Roman chém +33%) |
| **Kiếm Dài** | Long Swordsman | 4 | 35 Thực, 15 Vàng | 80 | 11 | 2 / 0 | 0 | 1.20 | 4 | 26s | Nâng BS: Công 11+7 = 18, Giáp 2+6 = 8/0 (Choson: 160 HP) |
| **Kiếm Thần (Lê Dương)** | Legion | 4 | 35 Thực, 15 Vàng | 160 | 13 | 2 / 0 | 0 | 1.20 | 4 | 26s | Nâng BS: **Công 13+4(BS)+3(BS)= 20**, **Giáp 2+4 = 6/0** (Choson: **240 HP**, Roman chém +33%) |

> [!NOTE]
> * **Quẩy đá (Slinger):** Sở hữu sẵn **2 giáp chống tên (0/2)** ngay từ Đời 2, nhận thêm **+1.5 sát thương ẩn** khi bắn trúng đơn vị cung thủ và tường thành, biến nó thành khắc tinh số 1 của Cung T đời 2.
> * **Choson Bonus:** Toàn bộ dòng lính kiếm từ Short Swordsman đến Legion được cộng **+80 HP vĩnh viễn** (Legion Choson đạt 240 HP).
> * **Roman Bonus:** Dòng lính kiếm tấn công với tốc độ nhanh hơn **+33%** (tương đương chém liên tục như máy khâu).

---

## 3. TRƯỜNG BẮN CUNG - NHÀ BA (ARCHERY RANGE)

Nhánh cung thủ là nòng cốt chiến thuật trong mọi kèo đấu AoE 1 (đặc biệt là Cung R và Cung A).

| Đơn Vị | Tên Tiếng Anh | Đời | Chi Phí | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tầm Nhìn | Huấn Luyện | Chỉ Số Sau Nâng Cấp Tối Đa (Max Tech) |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Cung T (Trần)** | Bowman | 2 | 40 Thực, 20 Gỗ | 35 | 3 | 0 / 0 | 5 | 1.20 | 6 | 30s | Nâng Chặt gỗ BM: Tầm xa 5+1 = 6 (Hittite: Công 4) |
| **Cung Cải Tiến** | Improved Bowman | 3 | 40 Thực, 20 Gỗ | 40 | 4 | 0 / 0 | 6 | 1.20 | 7 | 30s | Nâng Chặt gỗ: Tầm xa 6+2 = 8, Giáp tên BS: +2 (Hittite: Công 5) |
| **Cung A (1 Áo / 2 Áo)** | Composite Bowman | 3 | 40 Thực, 20 Vàng *(0 Gỗ)* | 45 | 5 | 0 / 0 | 7 | 1.20 | 8 | 30s | Đời 3 nâng Chặt gỗ 2: Tầm xa 7+2 = 9. Đời 4 có Lửa: Công 5+1 = 6, Tầm xa 10. **(Minoan: Tầm xa 9 ở Đời 3, tối đa 11 ở Đời 4)** |
| **Cung R (Ngựa Cung)** | Chariot Archer | 3 | 40 Thực, 70 Gỗ | 70 | 4 | 0 / 0 | 7 | 2.00 | 8 | 40s | Yêu cầu Bánh Xe. Đời 3: Tầm xa 7+2 = 9. Đời 4: Tên Lửa (Công 5), Tầm xa 7+3 = 10, Giáp tên +2. **(Egyptian: 93 HP; Assyrian: Bắn nhanh +33%; Hittite: Công 4+1 = 5)** |
| **Cung C (Ngựa Cung Vàng)** | Horse Archer | 4 | 50 Thực, 70 Vàng | 60 | 8 | 0 / 0 | 7 | 2.00 | 8 | 40s | Đời 4: Tầm xa 7+3 = 10, Tên Lửa (Công 9), Giáp tên BS: 0/2 (Yamato: 37.5F, 52.5G) |
| **Cung C Thần** | Heavy Horse Archer | 4 | 50 Thực, 70 Vàng | 90 | 9 | 0 / 0 | 7 | 2.00 | 8 | 40s | Nâng cấp: 1750F, 800G. Tầm xa 7+2 = 9 (hoặc 10), Tên Lửa (Công 10), Giáp BS: 0/2. **(Hittite: Công 10+1 = 11)** |
| **Voi Bắn Tên** | Elephant Archer | 4 | 180 Thực, 60 Vàng | 600 | 6 | 0 / 0 | 7 | 1.00 | 8 | 50s | Đời 4: Tên Lửa (Công 7), Tầm xa 7+2 = 9, Giáp tên BS: 0/2. **(Carthaginian: 750 HP; Phoenician: 135 Thực)** |

> [!IMPORTANT]
> * **Chi phí Cung A:** Cung A tốn **40 Thực và 20 Vàng**, hoàn toàn **KHÔNG TỐN GỖ** để sinh quân (nhiều người chơi nhầm lẫn giữa Gỗ và Vàng).
> * **Kháng Phù Thủy:** Cung R (Chariot Archer) là đơn vị xe ngựa nên sở hữu cơ chế ẩn **kháng thu phục tự nhiên** (Phù thủy mất thời gian gấp đôi để hú thành công).
> * **Assyrian Bonus:** Cung R bắn với tần suất nhanh hơn **+33%**, tạo ra mật độ hỏa lực vượt trội nhất khi đấu tiễn.
> * **Egyptian Bonus:** Cung R có lượng máu gốc **+33% HP** (70 -> 93 HP).
> * **Minoan Bonus:** Cung A được cộng **+2 Tầm xa** (Đời 3 cơ bản đạt 9 ô, lên Đời 4 đủ công nghệ đạt 11 ô - vượt tầm xa mọi loại quân bắn khác trừ Pháo cẩu to).

---

## 4. CHUỒNG NGỰA CHIẾN - NHÀ BL (STABLE)

Binh chủng kỵ binh giữ vai trò quyết định trong việc tạo đột biến, sốc sát thương bắt dân, khắc chế cung và càn quét chiến trường.

| Đơn Vị | Tên Tiếng Anh | Đời | Chi Phí | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tầm Nhìn | Huấn Luyện | Chỉ Số Sau Nâng Cấp Tối Đa (Max Tech) |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Ngựa Dò** | Scout Cavalry | 2 | 100 Thực | 60 | 3 | 0 / 0 | 0 | 2.00 | 8 | 30s | Nâng BS Đời 2: Công 3+2 = 5. Kháng phù thủy cao. (Yamato: 75 Thực) |
| **Ngựa Chém Thường** | Cavalry | 3 | 70 Thực, 80 Vàng | 150 | 8 | 1 / 0 | 0 | 1.80 | 5 | 40s | **+5 vs Bộ binh**. Nâng BS Đời 3: Công 8+4 = 12, Giáp 1+2 = 3/2. (Yamato: 52.5 Thực, 60 Vàng) |
| **Ngựa Chém Giáp** | Heavy Cavalry | 4 | 70 Thực, 80 Vàng | 150 | 10 | 1 / 1 | 0 | 1.80 | 5 | 40s | **+5 vs Bộ binh**. Nâng BS Đời 4: Công 10+7 = 17, Giáp 1+4 = 5/3 |
| **Chém Thần (Hiệp Sĩ)** | Cataphract | 4 | 70 Thực, 80 Vàng | 180 | 12 | 3 / 1 | 0 | 1.80 | 5 | 40s | Nâng cấp: 2000F, 850G. **+5 vs Bộ binh**. Max BS/BC: **Công 12+7 = 19**, **Giáp 3+4 = 7/3**. (Yamato: 52.5F, 60G) |
| **Lạc Đà** | Camelry | 3 | 70 Thực, 60 Vàng | 125 | 6 | 0 / 0 | 0 | 1.75 | 5 | 30s | **+8 vs Kỵ binh, +4 vs Xe ngựa**. Nâng BS Đời 3: Công 6+4 = 10, Giáp 2/2. Lên Đời 4 có Đầu máu: **150 HP**. (Palmyran: Tốc độ 2.19) |
| **Sọc Đơn (Ngựa Bánh Xe)** | Chariot | 3 | 40 Thực, 60 Gỗ | 100 | 7 | 0 / 0 | 0 | 1.80 | 5 | 40s | Yêu cầu Bánh Xe. **Sát thương x2 vs Phù thủy**. Nâng BS: Công 7+4 = 11, Giáp 2/2. Kháng hú cao. (Egyptian: 133 HP) |
| **Ngựa Đạp Đôi** | Scythe Chariot | 4 | 40 Thực, 60 Gỗ | 120 | 9 | 2 / 0 | 0 | 1.80 | 5 | 40s | Yêu cầu Bánh Xe & Nâng cấp (1200F, 800W). **Chém lan 37.5%**. Max BS/BC: **Công 9+4 = 13**, **Giáp 2+2 = 4/2**. (Egyptian: 160 HP) |
| **Voi Húc Thường** | War Elephant | 4 | 170 Thực, 40 Vàng | 600 | 15 | 0 / 0 | 0 | 1.00 | 5 | 50s | **Dẫm lan xung quanh**. Nâng BS: Công 15+4 = 19. (Persian: Tốc độ 1.50; Carthage: 750 HP; Phoenician: 127.5 Thực) |
| **Voi Húc Thần (Bọc Giáp)**| Armored Elephant | 4 | 170 Thực, 40 Vàng | 600 | 18 | 2 / 1 | 0 | 1.00 | 5 | 50s | Nâng cấp: 1000F, 800G. **Dẫm lan mạnh**. Max BS: **Công 18+4 = 22**, **Giáp 2+4 = 6/3**. (Persian: Tốc độ 1.50; Carthage: **750 HP**; Phoenician: 127.5 Thực) |

> [!TIP]
> * **Cơ chế Lạc Đà:** Lạc đà có tốc độ tạo lính rất nhanh (30s so với 40s của Ngựa chém), giá rẻ hơn 20 vàng, và sở hữu điểm sát thương cộng thêm ẩn **+8 sát thương khi đánh kỵ binh** (Ngựa chém, Ngựa dò, Chém thần) và **+4 sát thương khi đánh xe ngựa** (Sọc đơn, Cung R, Đạp đôi).
> * **Cơ chế Đạp Đôi (Scythe Chariot):** Khi tấn công mục tiêu chính, đơn vị gây **37.5% sát thương cơ bản lan rộng** ra tất cả các mục tiêu tiếp giáp trong phạm vi 1 ô gạch (kể cả đồng đội nếu đứng quá gần trong một số phiên bản).
> * **Persian Voi Điên:** Voi Persian có tốc độ chạy **1.50** (nhanh hơn +50% so với tốc độ rùa bò 1.00 của voi thường), áp sát và dẫm nát đội hình đối phương trước khi kịp phản ứng.

---

## 5. VIỆN HÀN LÂM LÍNH XIÊN - NHÀ BY (ACADEMY)

Binh chủng thiết giáp hạng nặng với chỉ số công thủ vượt trội nhất cận chiến, thường dùng làm bức tường thép càn quét hoặc phòng thủ cứ điểm.

| Đơn Vị | Tên Tiếng Anh | Đời | Chi Phí | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tầm Nhìn | Huấn Luyện | Chỉ Số Sau Nâng Cấp Tối Đa (Max Tech) |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Lính Xiên Thường** | Hoplite | 3 | 60 Thực, 40 Vàng | 120 | 17 | 5 / 0 | 0 | 1.00 | 4 | 36s | Đời 3 nâng BS: Công 17+4 = 21, Giáp 5+4 = 9/0. (Carthaginian: 150 HP; Greek: Tốc độ 1.30; Macedonian: Giáp 5/2) |
| **Lính Xiên Nâng Cấp** | Phalanx | 4 | 60 Thực, 40 Vàng | 120 | 20 | 7 / 0 | 0 | 1.00 | 4 | 36s | Nâng cấp: 300F, 100G. Max BS: Công 20+7 = 27, Giáp 7+6 = 13/0. (Carthaginian: 150 HP; Greek: Tốc độ 1.30; Macedonian: Giáp 7/2) |
| **Xiên Thần** | Centurion | 4 | 60 Thực, 40 Vàng | 160 | 30 | 8 / 0 | 0 | 1.00 | 4 | 36s | Nâng cấp: 1800F, 700G. Max BS: **Công 30+4 = 34**, **Giáp 8+4 = 12/0** (hoặc 14/0). (Carthaginian: **200 HP**; Greek: **Tốc độ 1.30**; Macedonian: **Giáp 8/2**) |

---

## 6. XƯỞNG KHÍ TÀI CÔNG THÀNH - NHÀ BK (SIEGE WORKSHOP)

Vũ khí công thành mang hỏa lực hủy diệt diện rộng hoặc xuyên phá đường thẳng, là khắc tinh tối thượng của các cụm quân tụ đông và công trình phòng ngự.

| Đơn Vị | Tên Tiếng Anh | Đời | Chi Phí | HP | Công | Giáp (Melee/Pierce) | Tầm Xa (Tối Thiểu - Tối Đa) | Tốc Độ | Tầm Nhìn | Huấn Luyện | Bán Kính Nổ Lan / Đặc Tính Nâng Cấp |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Cẩu Đá Nhỏ** | Stone Thrower | 3 | 180 Gỗ, 80 Vàng | 75 | 50 | 0 / 0 | 2 - 10 | 0.80 | 10 | 50s | Bán kính nổ **1x1 ô**. Tấn công lan gây sát thương cho cả quân mình. (Hittite: 150 HP; Sumerian: Bắn nhanh x2; Macedonian: 90W, 40G) |
| **Bắn Đá Vừa (Onager)** | Catapult | 4 | 180 Gỗ, 80 Vàng | 75 | 60 | 0 / 0 | 2 - 12 | 0.80 | 12 | 50s | Nâng cấp: 300F, 250W. Bán kính nổ **1.5x1.5 ô**. (Hittite: 150 HP; Sumerian: Bắn nhanh x2; Macedonian: 90W, 40G) |
| **Cẩu Đá To (Thần)** | Heavy Catapult | 4 | 180 Gỗ, 80 Vàng | 150 | 60 | 0 / 0 | 2 - 12 (Nâng BM lên 13) | 0.80 | 13 | 50s | Nâng cấp: 1800F, 900W. Bán kính nổ **2x2 ô** (quét sạch cụm quân). (Hittite: **300 HP**; Sumerian: **Bắn nhanh x2**; Macedonian: **90W, 40G**) |
| **Pháo Lùn / Pháo Tép** | Ballista | 3 | 100 Gỗ, 80 Vàng | 55 | 40 | 0 / 0 | 9 (Nâng BM lên 10) | 0.80 | 10 | 50s | Bắn đạn xuyên thẳng không gây nổ lan. (Macedonian: 50W, 40G) |
| **Pháo Liên Thanh** | Helepolis | 4 | 100 Gỗ, 80 Vàng | 55 | 40 | 0 / 0 | 10 | 0.80 | 10 | 50s | Nâng cấp: 1500F, 1000W. **Tốc độ bắn nhanh gấp 3 lần Ballista** (xả tên liên hồi xuyên phá hàng rào địch). (Macedonian: 50W, 40G) |

> [!WARNING]
> * **Sát thương đồng minh của Bắn Đá:** Cẩu đá nhỏ, Bắn đá và Cẩu đá to gây sát thương vật lý thật trên mặt đất. Nếu quân mình áp sát mục tiêu đang bị bắn, đòn đạn đá sẽ tiêu diệt cả quân mình!
> * **Hittite Siege HP:** Bắn đá Hittite có lượng máu gấp đôi tiêu chuẩn (**75 -> 150 HP** cho Cẩu nhỏ/vừa, và **150 -> 300 HP** cho Cẩu to).
> * **Sumerian Siege Fire Rate:** Cẩu đá Sumerian nạp đạn và bắn với chu kỳ nhanh gấp đôi (**x2 attack speed**).

---

## 7. ĐỀN THỜ PHÙ THỦY - NHÀ BP (TEMPLE)

Binh chủng tâm linh duy nhất của game, có khả năng biến quân địch thành quân mình và hồi phục sinh lực cho quân đội đồng minh.

| Đơn Vị | Tên Tiếng Anh | Đời | Chi Phí | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tầm Nhìn | Huấn Luyện | Điểm Đặc Trưng & Công Nghệ Hỗ Trợ |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Phù Thủy (Thầy Tu)** | Priest | 3 | 125 Vàng | 25 | 0 | 0 / 0 | 9 | 0.90 | 10 | 50s | Khắc tinh tuyệt đối của Ngựa chém, Lạc đà, Voi húc. Tự động hồi máu cho quân đồng minh lân cận. |

### Các Nâng Cấp Công Nghệ Tại Đền Thờ (BP):
* **Mysticism (Đời 3, 120G):** Tăng tầm thu phục thêm **+3 ô** (Tầm xa 9 -> 12).
* **Astrology (Đời 3, 150G):** Tăng tốc độ hồi Mana sau khi hú thêm **+30%**.
* **Polytheism (Đời 3, 120G):** Tăng tốc độ di chuyển của phù thủy thêm **+30%** (0.90 -> 1.17).
* **Fanaticism (Đời 4, 200G):** Tốc độ hồi Mana tăng thêm **+50%**.
* **Monotheism (Đời 4, 350G):** Cho phép thu phục **Công trình, Tháp canh và Ruộng** của đối phương.
* **Astronomy (Đời 4, 200G):** Tăng thêm **+3 Tầm xa** (Tối đa lên 15 ô).
* **Afterlife (Đời 4, 250G):** Tăng thêm **+3 Tầm xa** cho phù thủy.
* **Jihad (Đời 4, 300G):** Biến Nông dân thành chiến binh cuồng tín (+sức tấn công và tốc độ di chuyển).

> [!NOTE]
> * **Egyptian Priest:** Phù thủy Ai Cập mặc định có **+3 Tầm xa** (bắt đầu ở tầm 12 ngay từ Đời 3, khi nâng max công nghệ Đời 4 tầm xa đạt tới **15-16 ô** - đứng ngoài toàn bộ màn hình để thu phục).
> * **Babylonian Priest:** Tốc độ hồi phục Mana gốc nhanh gấp 3 lần (**x3 Rejuvenation rate**), cho phép hú liên tục nhiều đơn vị liên tiếp.
> * **Choson Priest:** Giá rẻ hơn **30% Vàng** (chỉ tốn **85 Vàng** thay vì 125 Vàng).

---

## 8. NHÀ CHÍNH - NÔNG DÂN (TOWN CENTER)

| Đơn Vị | Tên Tiếng Anh | Đời | Chi Phí | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tầm Nhìn | Huấn Luyện | Khả Năng Khai Thác & Nâng Cấp |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Nông Dân** | Villager | 1 | 50 Thực | 25 | 3 | 0 / 0 | 0 | 1.10 (Bánh xe: 1.43) | 4 | 20s | Thu thập mọi tài nguyên, xây dựng và sửa chữa công trình. Tấn công thú dữ hoặc đập công trình. |

### Các Biến Thể Nông Dân Đặc Trưng:
* **Shang:** Chi phí rẻ chỉ **35 Thực** (giảm 30%), giúp duy trì việc ép dân liên tục không gián đoạn.
* **Assyrian:** Tốc độ chạy **1.43** ngay từ Đời 1 (+30% tốc độ), bằng tốc độ dân có Bánh xe.
* **Sumerian:** Lượng máu **40 HP** (+60% máu), chống chịu cực tốt trước sư tử hoang và các đợt ngựa dò chọc quấy.
* **Palmyran:** Chi phí đắt **75 Thực**, có sẵn **1 giáp cận chiến (1/0)** và làm việc nhanh hơn **+20% trên mọi nguồn tài nguyên** (gỗ, quả, thịt thú, vàng, đá).
* **Phoenician:** Chặt gỗ mang về **13 gỗ/chuyến** (+3 gỗ), tốc độ chặt cây tăng vọt.
* **Persian:** Tốc độ ăn thịt hoang (hươu, voi) nhanh hơn **+30%**.
* **Egyptian:** Tốc độ đào vàng tăng **+20%** (13 vàng/chuyến).
* **Babylonian:** Tốc độ đào đá tăng **+30%** (13 đá/chuyến).

---

## 9. BẾN TÀU HẢI QUÂN - NHÀ BSHIPS (DOCK)

| Tàu Chiến | Tên Tiếng Anh | Đời | Chi Phí | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tầm Nhìn | Huấn Luyện | Đặc Tính & Nâng Cấp |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Thuyền Đánh Cá Nhỏ** | Fishing Boat | 1 | 50 Gỗ | 60 | 0 | 0 / 0 | 0 | 1.50 | 5 | 30s | Đánh bắt cá ven bờ |
| **Thuyền Đánh Cá Lớn** | Fishing Ship | 2 | 50 Gỗ | 120 | 0 | 0 / 0 | 0 | 2.00 | 7 | 30s | Đánh cá xa bờ và tốc độ thu gom nhanh |
| **Thuyền Tên Nhẹ** | Scout Ship / Light Galley | 2 | 135 Gỗ | 160 | 12 | 0 / 0 | 6 | 2.00 | 8 | 40s | Bắn tên tầm xa kiểm soát mặt nước Đời 2 |
| **Thuyền Tên Chiến** | War Galley | 3 | 135 Gỗ | 200 | 12 | 0 / 0 | 7 | 2.00 | 8 | 40s | Nâng cấp từ Light Galley (100F, 50W) |
| **Thuyền Chiến 3 Tầng** | Trireme | 4 | 135 Gỗ, 75 Vàng | 250 | 12 | 0 / 0 | 8 | 2.00 | 9 | 40s | Nâng cấp: 300F, 100W |
| **Thuyền Bắn Đá Nhỏ** | Catapult Trireme | 4 | 135 Gỗ, 75 Vàng | 120 | 35 | 0 / 0 | 9 | 1.50 | 10 | 50s | Bắn đá diện rộng phá hủy công trình ven biển |
| **Pháo Hạm Thần** | Juggernaught | 4 | 135 Gỗ, 75 Vàng | 200 | 35 | 0 / 0 | 10 | 1.50 | 11 | 50s | Nâng cấp: 2000F, 900W. Pháo hạm tối thượng |
| **Thuyền Lửa** | Fire Galley | 3 | 115 Gỗ, 40 Vàng | 200 | 24 | 0 / 0 | 1 | 2.00 | 6 | 40s | Phun lửa cận chiến thiêu rụi tàu tên |

> [!NOTE]
> * **Yamato:** Máu toàn bộ tàu chiến được cộng **+30% HP**.
> * **Hittite:** Tàu chiến bắn tên được cộng **+4 Tầm xa**.
> * **Phoenician:** Thuyền bắn đá và Juggernaught bắn nhanh hơn **+65%**.
> * **Persian:** Thuyền 3 tầng (Trireme) bắn nhanh hơn **+30%**.
> * **Carthaginian:** Thuyền lửa (Fire Galley) có sát thương tăng **+30%**.

---

## 10. MA TRẬN ĐIỂM CỘNG ĐẶC TRƯNG 16 QUỐC GIA (CIV BONUSES)

| Quốc Gia | Nhóm Kiến Trúc | Đặc Điểm Chỉ Số Lính Độc Quyền | Điểm Yếu Công Nghệ Lính |
| :--- | :--- | :--- | :--- |
| **1. Shang** | Đông Á | Dân rẻ **35 Thực**; Tường thành x2 máu | Không có điểm cộng sát thương/tốc độ; Thiếu Voi, Cẩu to, Đạp đôi, Chém thần |
| **2. Assyrian** | Babylon | Dân chạy **1.43 (+30%)**; Cung R bắn nhanh **+33%** | Không Đầu máu (Cung R chỉ 75 máu); Đời 4 yếu nhất game |
| **3. Egyptian** | Ai Cập | Cung R **93 HP (+33%)**; Sọc đơn 133 HP, Đạp đôi 160 HP; Phù thủy **+3 Range**; Dân đào vàng +20% | Không Ngựa chém BL; Không Voi; Không Lính xiên |
| **4. Babylonian** | Babylon | Tường & Tháp x2 HP; Phù thủy hồi Mana **x3 tốc độ**; Dân đào đá +30% | Không có đơn vị chạy nhanh hay cộng sát thương trực tiếp |
| **5. Hittite** | Babylon | Toàn bộ Cung BA **+1 Công**; Pháo cẩu đá **x2 HP (150/300 HP)**; Tàu chiến +4 Range | Không có Cẩu đá to nhất (Heavy Catapult); Phù thủy yếu |
| **6. Phoenician** | Babylon | Dân chặt gỗ mang về **13 gỗ**; Voi húc/tên **giảm 25% Thực**; Thuyền pháo bắn nhanh +65% | Lính không có giáp đặc biệt; Không Đạp đôi; Không Cẩu to |
| **7. Sumerian** | Babylon | Dân **40 HP (+60%)**; Ruộng x2 sản lượng (500 thực); Cẩu đá bắn nhanh **gấp đôi** | Không Voi; Không Ngựa đôi; Không Tên lửa |
| **8. Persian** | Babylon | Dân ăn thịt hoang **+30%**; Voi húc chạy **1.50 (+50% tốc độ)** | Khởi đầu bị trừ 50 Thực (còn 150F); **Không có Bánh xe** (không Cung R, Đạp đôi) |
| **9. Yamato** | Đông Á | Toàn bộ Kỵ binh (Ngựa dò, Chém, Cataphract, Cung C) **giảm 25% chi phí**; Tàu +30% HP | Không Cẩu đá nhà BK; Không Đạp đôi; Không Voi; Cung R không có giáp tên |
| **10. Minoan** | Hy Lạp | Cung A **+2 Tầm xa** (9 ô ở Đời 3, 11 ô ở Đời 4); Ruộng +60 thực; Tàu chiến -33% giá | Không Cung R; Không Ngựa chém BL; Không Lạc đà |
| **11. Choson** | Đông Á | Dòng kiếm BB **+80 HP** (Legion đạt 240 HP); Phù thủy -30% giá (85 Gold); Tháp +2 Range | **Không có Bánh xe**; Ngựa chém không có Đầu máu, không Giáp 4 |
| **12. Roman** | La Mã | Nhà rẻ -15% gỗ; Chòi -50% đá (75 đá); Dòng kiếm BB **chém nhanh +33%** | **Không có Bánh xe**; Không có Cẩu đá to đời 4 |
| **13. Carthaginian** | La Mã | Voi và Lính xiên **+25% HP** (Voi 750 HP, Xiên thần 200 HP); Tháp canh lửa +50% công | **Không có Bánh xe**; Không Ngựa chém BL |
| **14. Palmyran** | La Mã | Dân làm việc **+20%**, có sẵn **1 giáp (1/0)**; Thuế chuyển hàng 0%; Lạc đà chạy nhanh nhất **(2.19)** | Dân đắt **75 Thực**; nếu mất dân đầu game sẽ rất khó hồi phục |
| **15. Macedonian** | La Mã | Toàn quân **kháng Phù thủy x4 lần**; Lính bộ & Cẩu đá +2 tầm nhìn; Pháo BK rẻ **50% chi phí**; Lính xiên +2 giáp tên | **KHÔNG CÓ NHÀ CHỢ (BM)** (không Bánh xe, không chặt gỗ, không đào vàng/đá) |
| **16. Greek** | Hy Lạp | Lính xiên **chạy nhanh +30% (tốc độ 1.30)**; Tàu chiến chạy nhanh +30% | **Không có Bánh xe**; Không Ngựa chém BL; Không Lạc đà; Rất tốn vàng |

---

## 11. CƠ CHẾ ẨN: KHẮC CHẾ, SÁT THƯƠNG LAN & KHÁNG THU PHỤC

### 1. Cơ Chế Khắc Chế Bí Mật (Hidden Bonus Damage):
* **Lạc đà (Camelry):**
  * Gây thêm **+8 sát thương** lên các đơn vị thuộc nhóm Kỵ binh cưỡi ngựa (Ngựa dò, Ngựa chém, Ngựa chém giáp, Cataphract).
  * Gây thêm **+4 sát thương** lên các đơn vị Xe ngựa (Sọc đơn, Cung R, Đạp đôi).
* **Ngựa chém (Cavalry / Cataphract):**
  * Gây thêm **+5 sát thương** lên tất cả các đơn vị Bộ binh (Lính chùy, Lính rìu, Dòng lính kiếm BB, Quẩy đá).
* **Quẩy đá (Slinger):**
  * Gây thêm **+1.5 sát thương** lên các đơn vị Cung thủ (Cung T, Cung A, Cung R, Cung C) và Tường thành.
* **Ngựa sọc đơn (Chariot):**
  * Gây sát thương **gấp đôi (x2 attack)** khi chém trúng Phù thủy (Priest).

### 2. Cơ Chế Sát Thương Lan (Trample & Splash Damage):
* **Ngựa đạp đôi (Scythe Chariot):** Gây **37.5% sát thương lan** ra tất cả các mục tiêu đứng xung quanh trong bán kính 1 ô gạch.
* **Voi húc (War Elephant / Armored Elephant):** Gây **50% sát thương chà đạp** lan sang các đơn vị đứng cạnh bên mục tiêu chính.
* **Pháo cẩu đá (Stone Thrower / Catapult / Heavy Catapult):** Gây sát thương nổ lan hoàn toàn 100% tại tâm và giảm dần theo khoảng cách (Bán kính từ 1 đến 2 ô gạch). Gây sát thương lên cả quân phe mình.

### 3. Cơ Chế Kháng Phù Thủy (Conversion Resistance):
* **Đơn vị bình thường:** Tỷ lệ bị thu phục chuẩn (chu kỳ hú từ 4 - 8 lần).
* **Xe ngựa (Cung R, Sọc đơn, Đạp đôi) & Ngựa dò (Scout):** Sở hữu khả năng miễn nhiễm cao tự nhiên, Phù thủy cần gấp đôi thời gian và xác suất thấp hơn để biến đổi.
* **Quân Macedonian:** Toàn bộ quân lính có hệ số kháng phù thủy **gấp 4 lần** (gần như miễn nhiễm hoàn toàn trước các đợt hú thông thường).

---
*Tài liệu được biên soạn phục vụ công tác đối chiếu dữ liệu, phát triển ứng dụng và bảo tồn kiến thức chuẩn của cộng đồng Age of Empires 1 Việt Nam.*
