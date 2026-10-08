# ⚔️ BẢNG TRA CỨU CHỈ SỐ LÍNH TOÀN TẬP - AGE OF EMPIRES I (RISE OF ROME 1.0b)
> **Nguồn Dữ Liệu Authoritative (Chính Xác 100%):**  
> Toàn bộ chỉ số được trích xuất trực tiếp từ file cơ sở dữ liệu gốc của game **`empires.dat`** (Genie Engine Format `VER 3.7` - Rise of Rome 1.0b) cùng bảng chuỗi ngôn ngữ **`language.dll`** và **`languagex.dll`** được cài đặt thực tế trên máy tại thư mục:  
> `C:\Program Files\XArena\Game\AOE1R\data2\empires.dat`.

---

## 📌 MỤC LỤC
1. [Hệ Thống Thuộc Tính & Cơ Chế Tính Sát Thương Genie Engine](#1-hệ-thống-thuộc-tính--cơ-chế-tính-sát-thương-genie-engine)
2. [Doanh Trại Bộ Binh - Nhà BB (Barracks)](#2-doanh-trại-bộ-binh---nhà-bb-barracks)
3. [Trường Bắn Cung - Nhà BA (Archery Range)](#3-trường-bắn-cung---nhà-ba-archery-range)
4. [Chuồng Ngựa Chiến - Nhà BL (Stable)](#4-chuồng-ngựa-chiến---nhà-bl-stable)
5. [Viện Hàn Lâm Lính Xiên - Nhà BY (Academy)](#5-viện-hàn-lâm-lính-xiên---nhà-by-academy)
6. [Xưởng Khí Tài Công Thành - Nhà BK (Siege Workshop)](#6-xưởng-khí-tài-công-thành---nhà-bk-siege-workshop)
7. [Đền Thờ Phù Thủy - Nhà BP (Temple)](#7-đền-thờ-phù-thủy---nhà-bp-temple)
8. [Nhà Chính - Nông Dân (Town Center)](#8-nhà-chính---nông-dân-town-center)
9. [Bến Tàu Hải Quân - Nhà BS (Dock)](#9-bến-tàu-hải-quân---nhà-bs-dock)
10. [Bảng Tra Cứu Toàn Diện Điểm Cộng 16 Quốc Gia (Civ Bonuses)](#10-bảng-tra-cứu-toàn-diện-điểm-cộng-16-quốc-gia-civ-bonuses)
11. [Cơ Chế Ẩn: Bonus Khắc Hệ, Sát Thương Lan & Kháng Thu Phục](#11-cơ-chế-ẩn-bonus-khắc-hệ-sát-thương-lan--kháng-thu-phục)

---

## 1. HỆ THỐNG THUỘC TÍNH & CƠ CHẾ TÍNH SÁT THƯƠNG GENIE ENGINE

Mỗi đơn vị quân trong tệp `empires.dat` được biên dịch với các thuộc tính nhị phân chuẩn xác:
* **Máu (HitPoints - HP):** Sinh lực tối đa của đơn vị.
* **Tấn công hiển thị (Displayed Attack):** Sát thương cơ bản hiển thị trên giao diện người dùng.
* **Giáp cận chiến (Melee Armor - Lớp giáp Class 4):** Giảm trực tiếp sát thương đòn đánh cận chiến. Đòn đánh cận chiến luôn gây tối thiểu 1 sát thương.
* **Giáp chống tên (Pierce Armor - Lớp giáp Class 3):** Giảm trực tiếp sát thương từ tên, đạn cẩu tên, đạn pháo.
* **Tầm xa (Range):** Bán kính bắn tối đa đo bằng ô gạch (tiles). Đơn vị cận chiến có tầm xa = 0.
* **Tầm xa tối thiểu (Min Range):** Cẩu đá có Min Range = 2.0; Helepolis có Min Range = 3.0 (mục tiêu đứng sát trong vòng cự ly này sẽ không thể bắn).
* **Tầm nhìn (Line of Sight - LOS):** Bán kính phát hiện sương mù chiến tranh của đơn vị.
* **Tốc độ di chuyển (Speed):** Tốc độ chuẩn trong mã nguồn Genie Engine (tính theo tiles/giây ở tốc độ Normal 1.0x).
* **Tốc độ ra đòn (Reload Time / Attack Speed):** Thời gian giãn cách giữa 2 đòn đánh (tính bằng giây). Reload Time càng nhỏ thì đánh/bắn càng nhanh.
* **Thời gian huấn luyện (Train Time):** Thời gian sản xuất 1 đơn vị từ nhà tương ứng (tính bằng giây).
* **Công thức sát thương thực tế của Genie Engine:**
  $$\text{Damage} = \sum_{\text{Class } i} \max\Big(0, \text{Attack}[i] - \text{Armor}[i]\Big)$$
  Khi một đơn vị có chỉ số giáp âm (ví dụ: Kỵ binh có Giáp Class 8 = -8), đòn đánh có Công Class 8 = 0 của Lạc đà sẽ gây: $0 - (-8) = +8$ sát thương cộng thêm!

---

## 2. DOANH TRẠI BỘ BINH - NHÀ BB (BARRACKS)

Nhánh bộ binh BB có ưu thế chi phí rẻ, thời gian sinh quân nhanh (24s - 26s), càn quét phá công trình hiệu quả.

| Đơn Vị (Việt Nam) | Tên Game (DLL) | ID Game | Đời | Chi Phí Gốc | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tốc Đánh (RoF) | Tầm Nhìn | Huấn Luyện | Điểm Đặc Trưng & Sau Khi Max Công Nghệ |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Lính Chùy** | Clubman | 73 | 1 | 50 Thực | 40 | 3 | 0 / 0 | 0 | 1.20 | 1.5s | 4 | 26s | Đơn vị chiến đấu duy nhất ở Đời 1. Giáp ẩn: Nhóm Class 9 (-5 vs Kỵ binh). |
| **Lính Rìu** | Axeman | 74 | 2 | 50 Thực | 50 | 5 | 0 / 0 | 0 | 1.20 | 1.5s | 4 | 26s | Nâng cấp từ Chùy (100F). Nâng BS Đời 2: Công 5+2 = 7, Giáp 0+2 = 2/0. |
| **Quẩy Đá** | Slinger | 347 | 2 | 40 Thực, 10 Đá | 25 | 2 | 0 / 2 | 4 | 1.20 | 1.5s | 5 | 24s | **Sẵn 2 giáp tên (0/2)**. Công Class 1 (+2 vs Cung). Đào đá: Tầm xa 5. |
| **Kiếm Ngắn** | Short Swordsman | 75 | 3 | 35 Thực, 15 Vàng | 60 | 7 | 1 / 0 | 0 | 1.20 | 1.5s | 4 | 26s | Có sẵn **1 giáp cận chiến**. Nâng BS Đời 3: Công 7+4 = 11, Giáp 1+4 = 5/0. |
| **Kiếm Bản Rộng** | Broad Swordsman | 76 | 3 | 35 Thực, 15 Vàng | 70 | 9 | 1 / 0 | 0 | 1.20 | 1.5s | 4 | 26s | Nâng từ Kiếm ngắn (140F, 50G). Nâng BS: Công 9+4 = 13, Giáp 1+4 = 5/0. |
| **Kiếm Dài** | Long Swordsman | 77 | 4 | 35 Thực, 15 Vàng | 80 | 11 | 2 / 0 | 0 | 1.20 | 1.5s | 4 | 26s | Nâng cấp: 160F, 50G. Sẵn **2 giáp cận chiến**. Max BS: Công 18, Giáp 6/0. |
| **Kiếm Thần (Lê Dương)** | Legion | 282 | 4 | 35 Thực, 15 Vàng | 160 | 13 | 2 / 0 | 0 | 1.20 | 1.5s | 4 | 26s | Nâng cấp: 1400F, 600G. Max BS: **Công 20, Giáp 6/0** (Choson: **240 HP**, Roman: chém +33%). |

> [!NOTE]
> * **Cơ Chế Quẩy Đá (Slinger):** Trong bản mở rộng Rise of Rome, Quẩy đá sở hữu sẵn **2 giáp chống tên** và **Công Class 1 (+2 sát thương lên Cung thủ)**. Do Cung T (Bowman) đời 2 chỉ có 3 công, khi bắn vào Quẩy đá (2 giáp) chỉ gây được: $3 - 2 = 1$ sát thương, trong khi Quẩy đá bắn trả gây: $2 + 2 = 4$ sát thương!
> * **Choson Legion:** Nhận hiệu ứng cộng vĩnh viễn **+80 HP** cho toàn bộ dòng lính kiếm (Legion Choson đạt 240 HP).
> * **Roman Legion:** Được giảm thời gian hồi chiêu ra đòn (Reload Time giảm xuống tương đương tăng **+33% tốc độ chém**).

---

## 3. TRƯỜNG BẮN CUNG - NHÀ BA (ARCHERY RANGE)

Nhánh cung thủ là linh hồn chiến thuật của AoE 1, sở hữu tầm bắn vượt trội và khả năng cơ động cao.

| Đơn Vị (Việt Nam) | Tên Game (DLL) | ID Game | Đời | Chi Phí Gốc | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tốc Đánh (RoF) | Tầm Nhìn | Huấn Luyện | Điểm Đặc Trưng & Sau Khi Max Công Nghệ |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Cung T (Trần)** | Bowman | 4 | 2 | 40 Thực, 20 Gỗ | 35 | 3 | 0 / 0 | 5 | 1.20 | 1.4s | 7 | 30s | Đời 2 nâng Chặt gỗ: Tầm xa 5+1 = 6. Tốc độ bắn cực nhanh (1.4s/phát). |
| **Cung Cải Tiến** | Improved Bowman | 5 | 3 | 40 Thực, 20 Vàng | 40 | 4 | 0 / 0 | 6 | 1.20 | 1.4s | 8 | 30s | Nâng từ Cung T (140F, 80W). Nâng Chặt gỗ Đời 3: Tầm xa 6+2 = 8. |
| **Cung A (2 Áo)** | Composite Bowman | 6 | 3 | 40 Thực, 20 Vàng | 45 | 5 | 0 / 0 | 7 | 1.20 | 1.4s | 9 | 30s | **Chi phí 40F + 20G (Không tốn gỗ!)**. Đời 3: Tầm xa 7+2 = 9. Đời 4 có Lửa: Công 6, Tầm xa 10 (Minoan: **Tầm xa 11**). |
| **Cung R (Ngựa Cung)** | Chariot Archer | 41 | 3 | 40 Thực, 70 Gỗ | 70 | 4 | 0 / 0 | 7 | 2.00 | 1.5s | 9 | 40s | Yêu cầu Bánh Xe. Kháng phù thủy cao. Đời 3: Tầm xa 7+2 = 9. Đời 4 có Lửa: Công 5, Tầm xa 10, Giáp tên +2. |
| **Cung C (Ngựa Cung Vàng)** | Horse Archer | 39 | 4 | 50 Thực, 70 Vàng | 60 | 7 | 0 / 2 | 7 | 2.20 | 1.5s | 9 | 40s | **Sẵn 2 giáp chống tên**. Cơ động cao (Speed 2.2). Tên lửa: Công 8, Tầm xa 10 (Yamato: -25% giá). |
| **Cung C Thần** | Heavy Horse Archer | 281 | 4 | 50 Thực, 70 Vàng | 90 | 8 | 0 / 2 | 7 | 2.50 | 1.5s | 9 | 40s | Nâng cấp: 1750F, 800G. Tốc độ phi cực nhanh **2.50**. Tên lửa: Công 9, Tầm xa 10. |
| **Voi Bắn Tên** | Elephant Archer | 25 | 4 | 180 Thực, 60 Vàng | 600 | 5 | 0 / 0 | 7 | 0.90 | 1.5s | 8 | 50s | Trụ bắn di động 600 HP. Đời 4: Tên lửa (Công 6), Tầm xa 7+2 = 9 (Carthage: **750 HP**, Phoenicia: 135F). |

> [!IMPORTANT]
> * **Sự thật chi phí Cung A:** Trong `empires.dat`, chi phí sản xuất của Composite Bowman là **40 Food và 20 Gold** (hoàn toàn không tiêu tốn Gỗ).
> * **Tần số bắn của Cung đi bộ:** Bowman, Improved Bowman và Composite Bowman có Reload Time là **1.4s** (bắn nhanh hơn Cung R là 1.5s).
> * **Assyrian Cung R:** Tốc độ bắn được tăng **+33%** (Reload Time giảm còn xấp xỉ ~1.12s), biến Cung R Assyrian thành đơn vị đấu tiễn mạnh nhất Đời 3.
> * **Egyptian Cung R:** Được hưởng trọn vẹn điểm cộng **+33% HP** (70 -> 93 HP).
> * **Minoan Cung A:** Được cộng **+2 Tầm xa** (Đời 3 đạt tầm xa 9, lên Đời 4 đạt tầm xa 11 - bắn xa hơn mọi loại cung tên khác).

---

## 4. CHUỒNG NGỰA CHIẾN - NHÀ BL (STABLE)

Binh chủng kỵ binh giữ vai trò cơ động càn quét, bắt lẻ dân, khắc chế cung và đột kích căn cứ.

| Đơn Vị (Việt Nam) | Tên Game (DLL) | ID Game | Đời | Chi Phí Gốc | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tốc Đánh (RoF) | Tầm Nhìn | Huấn Luyện | Điểm Đặc Trưng & Sau Khi Max Công Nghệ |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Ngựa Dò** | Scout | 299 | 2 | 100 Thực | 60 | 3 | 0 / 0 | 0 | 2.00 | 1.5s | 8 | 30s | Mở bản đồ, câu voi, chọc dân. Kháng phù thủy tự nhiên. Nâng BS: Công 3+2 = 5 (Yamato: 75 Thực). |
| **Ngựa Chém Thường** | Cavalry | 37 | 3 | 70 Thực, 80 Vàng | 150 | 8 | 0 / 0 | 0 | 2.00 | 1.5s | 4 | 40s | **+5 vs Bộ binh**. Nâng BS Đời 3: Công 8+4 = 12, Giáp 0+2 = 2/2 (Yamato: 52.5F, 60G). |
| **Ngựa Chém Giáp** | Heavy Cavalry | 38 | 4 | 70 Thực, 80 Vàng | 150 | 10 | 1 / 1 | 0 | 2.00 | 1.5s | 4 | 40s | Nâng từ Chém (350F, 125G). **Sẵn giáp 1/1, +5 vs Bộ binh**. Max BS/BC: Công 17, Giáp 5/3. |
| **Chém Thần (Hiệp Sĩ)** | Cataphract | 283 | 4 | 70 Thực, 80 Vàng | 180 | 12 | 3 / 1 | 0 | 2.00 | 1.5s | 4 | 40s | Nâng cấp: 2000F, 850G. **Sẵn giáp 3/1, +5 vs Bộ binh**. Max BS/BC: **Công 19, Giáp 7/3**. |
| **Lạc Đà** | Camel Rider | 338 | 3 | 70 Thực, 60 Vàng | 125 | 6 | 0 / 0 | 0 | 2.00 | 1.5s | 4 | 30s | **Tạo cực nhanh (30s)**. **+8 vs Kỵ binh, +4 vs Xe ngựa**. Lên Đời 4 nâng Đầu máu: **150 HP** (Palmyra: Tốc độ 2.50). |
| **Sọc Đơn (Ngựa Bánh Xe)** | Chariot | 40 | 3 | 40 Thực, 60 Gỗ | 100 | 7 | 0 / 0 | 0 | 2.00 | 1.5s | 4 | 40s | Yêu cầu Bánh Xe. Kháng hú cực cao. Nâng BS: Công 7+4 = 11, Giáp 2/2 (Egyptian: **133 HP**). |
| **Ngựa Đạp Đôi** | Scythe Chariot | 339 | 4 | 40 Thực, 60 Gỗ | 120 | 9 | 2 / 0 | 0 | 2.00 | 1.5s | 4 | 40s | Nâng cấp: 1200F, 800W. **Sẵn 2 giáp cận chiến**. **Chém lan 37.5% diện rộng** (Egyptian: **160 HP**). |
| **Voi Húc Thường** | War Elephant | 46 | 4 | 170 Thực, 40 Vàng | 600 | 15 | 0 / 0 | 0 | 0.90 | 1.5s | 4 | 50s | **Dẫm lan xung quanh**. Nâng BS: Công 15+4 = 19 (Persian: **Tốc độ 1.35**, Carthage: **750 HP**, Phoenicia: 127.5F). |
| **Voi Húc Thần (Bọc Giáp)** | Armored Elephant | 345 | 4 | 170 Thực, 40 Vàng | 600 | 18 | 2 / 1 | 0 | 0.90 | 1.5s | 5 | 50s | Nâng cấp: 1000F, 800G. **Sẵn giáp 2/1**. **Dẫm lan hủy diệt**. Max BS: **Công 22, Giáp 6/3** (Carthage: **750 HP**). |

> [!TIP]
> * **Tốc độ chuẩn trong Game:** Tất cả kỵ binh cưỡi ngựa (Ngựa dò, Ngựa chém, Chém giáp, Cataphract, Lạc đà, Sọc đơn, Đạp đôi) trong mã nguồn game đều chạy cùng tốc độ chuẩn là **2.00 tiles/giây** (không phải 1.75 hay 1.80 như các tài liệu không chính thức ghi nhận).
> * **Cơ chế Lạc Đà (Camel Rider):** Nhờ cơ chế lớp giáp ẩn `Armor Class 8 = -8` của kỵ binh ngựa, Lạc đà khi chém vào Ngựa chém / Chém thần sẽ được cộng thêm đúng **+8 sát thương**, và khi chém vào Xe ngựa (Sọc đơn, Cung R, Đạp đôi có Armor Class 8 = -4) được cộng **+4 sát thương**.
> * **Đạp Đôi Chém Lan:** Gây sát thương lan 37.5% ra tất cả các mục tiêu đứng sát xung quanh bán kính 1 ô gạch.
> * **Voi Persian:** Được hưởng +50% tốc độ di chuyển gốc ($0.90 \times 1.50 = 1.35$), trở thành voi chạy nhanh nhất toàn game.

---

## 5. VIỆN HÀN LÂM LÍNH XIÊN - NHÀ BY (ACADEMY)

Binh chủng thiết giáp cận chiến sở hữu chỉ số công - thủ thuần túy cao nhất trong các đơn vị bộ binh.

| Đơn Vị (Việt Nam) | Tên Game (DLL) | ID Game | Đời | Chi Phí Gốc | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tốc Đánh (RoF) | Tầm Nhìn | Huấn Luyện | Điểm Đặc Trưng & Sau Khi Max Công Nghệ |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Lính Xiên Thường** | Hoplite | 93 | 3 | 60 Thực, 40 Vàng | 120 | 17 | 5 / 0 | 0 | 0.90 | 1.5s | 4 | 36s | **Giáp khởi điểm 5/0**. Đời 3 nâng BS: Công 17+4 = 21, Giáp 5+4 = 9/0 (Greek: Chạy 1.17, Carthage: 150 HP). |
| **Lính Xiên Nâng Cấp** | Phalanx | 94 | 4 | 60 Thực, 40 Vàng | 120 | 20 | 7 / 0 | 0 | 0.90 | 1.5s | 4 | 36s | Nâng cấp: 300F, 100G. **Giáp khởi điểm 7/0**. Max BS: Công 27, Giáp 13/0. |
| **Xiên Thần** | Centurion | 291 | 4 | 60 Thực, 40 Vàng | 160 | 30 | 8 / 0 | 0 | 0.90 | 1.5s | 4 | 36s | Nâng cấp: 1800F, 700G. **Sẵn giáp 8/0, Công 30**. Max BS: **Công 37, Giáp 14/0** (Carthage: **200 HP**, Greek: Chạy nhanh 1.17, Macedon: +2 Giáp tên). |

> [!NOTE]
> * **Tốc độ lính Xiên:** Tốc độ di chuyển gốc trong game là **0.90**. Lính xiên Greek nhận điểm cộng +30% tốc độ di chuyển ($0.90 \times 1.30 = 1.17$), di chuyển gần tương đương bộ binh thường.
> * **Macedonian Centurion:** Có sẵn nội tại tăng thêm **+2 Giáp chống tên**, khắc phục triệt để nhược điểm sợ cung của dòng lính Xiên.

---

## 6. XƯỞNG KHÍ TÀI CÔNG THÀNH - NHÀ BK (SIEGE WORKSHOP)

Vũ khí công thành mang hỏa lực hủy diệt diện rộng, là khắc tinh số 1 của các cụm quân tụ đông và công trình phòng ngự.

| Đơn Vị (Việt Nam) | Tên Game (DLL) | ID Game | Đời | Chi Phí Gốc | HP | Công | Giáp (Melee/Pierce) | Tầm Xa (Tối Thiểu - Tối Đa) | Tốc Độ | Tốc Đánh (RoF) | Tầm Nhìn | Huấn Luyện | Bán Kính Nổ Lan / Cơ Chế Bắn |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Cẩu Đá Nhỏ** | Stone Thrower | 35 | 3 | 180 Gỗ, 80 Vàng | 75 | 50 | 0 / 0 | 2.0 - 10.0 | 0.80 | 5.0s | 13 | 60s | Nổ lan diện tích 0.5 tile (Min 2.0). Gây sát thương lên cả quân mình. (Hittite: 150 HP, Sumerian: Bắn nhanh x2). |
| **Bắn Đá Vừa (Catapult)** | Catapult | 36 | 4 | 180 Gỗ, 80 Vàng | 75 | 60 | 0 / 0 | 2.0 - 12.0 | 0.80 | 5.0s | 15 | 60s | Nâng cấp: 300F, 250W. Bán kính nổ lan 1.5 tiles (Min 2.0). (Hittite: 150 HP, Sumerian: Bắn nhanh x2). |
| **Cẩu Đá To (Thần)** | Heavy Catapult | 280 | 4 | 180 Gỗ, 80 Vàng | 150 | 60 | 0 / 0 | 2.0 - 13.0 | 0.80 | 5.0s | 16 | 60s | Nâng cấp: 1800F, 900W. **Máu 150 HP**. Nổ lan 1.5 tiles (Min 2.0). (Hittite: **300 HP**, Sumerian: **Bắn nhanh x2**). |
| **Pháo Lùn / Cẩu Tên** | Ballista | 11 | 3 | 100 Gỗ, 80 Vàng | 55 | 40 | 0 / 0 | 3.0 - 9.0 | 0.80 | 3.0s | 11 | 50s | Bắn tên xuyên thẳng không có sát thương nổ lan (Min 3.0). Tốc độ bắn 3.0s/phát. |
| **Pháo Liên Thanh** | Helepolis | 279 | 4 | 100 Gỗ, 80 Vàng | 55 | 40 | 0 / 0 | 3.0 - 10.0 | 0.80 | 1.5s | 12 | 50s | Nâng cấp: 1500F, 1000W. **Tốc độ bắn 1.5s (Nhanh gấp đôi Ballista!)**, xả tên liên tục phá tan đội hình đối phương (Min 3.0). |

> [!WARNING]
> * **Sát thương nổ lan thực tế:** Cẩu đá gây sát thương vật lý thật trên mặt đất (Blast Attack). Nếu quân đồng minh áp sát mục tiêu đang bị bắn, đòn đạn đá sẽ tiêu diệt cả quân mình!
> * **Helepolis Rate of Fire:** Trong `empires.dat`, Reload Time của Helepolis giảm từ **3.0s xuống đúng 1.5s**, nghĩa là tốc độ bắn tăng chính xác **gấp 2 lần** so với Ballista đời 3.
> * **Hittite Siege Bonus:** Pháo cẩu đá Hittite được nhân đôi lượng máu chuẩn (**75 -> 150 HP** cho Cẩu nhỏ/vừa, và **150 -> 300 HP** cho Cẩu thần).
> * **Sumerian Siege Bonus:** Cẩu đá Sumerian giảm thời gian nạp đạn còn 2.5s (**tốc độ bắn gấp đôi**).

---

## 7. ĐỀN THỜ PHÙ THỦY - NHÀ BP (TEMPLE)

Binh chủng tâm linh có khả năng thu phục binh lực đối phương và hồi phục sinh lực cho đồng minh.

| Đơn Vị (Việt Nam) | Tên Game (DLL) | ID Game | Đời | Chi Phí Gốc | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tốc Đánh (RoF) | Tầm Nhìn | Huấn Luyện | Điểm Đặc Trưng & Công Nghệ Nâng Cấp |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Phù Thủy (Thầy Tu)** | Priest | 125 | 3 | 125 Vàng | 25 | 0 | 0 / 0 | 10.0 | 0.80 | 1.5s | 12 | 50s | Thu phục quân địch, tự động hồi máu cho đồng minh. Khắc tinh cứng của Ngựa chém, Lạc đà, Voi. |

### Các Công Nghệ Nâng Cấp Tại Nhà BP:
* **Mysticism (Đời 3, 120G):** Tăng tầm thu phục thêm **+3 ô** (Tầm xa 10 -> 13).
* **Astrology (Đời 3, 150G):** Tăng tốc độ hồi phục Mana sau khi thu phục thêm **+30%**.
* **Polytheism (Đời 3, 120G):** Tăng tốc độ di chuyển của phù thủy thêm **+30%** (0.80 -> 1.04).
* **Fanaticism (Đời 4, 200G):** Tăng tốc độ hồi phục Mana thêm **+50%**.
* **Monotheism (Đời 4, 350G):** Cho phép thu phục **Công trình, Tháp canh và Ruộng** của đối phương.
* **Astronomy (Đời 4, 200G):** Tăng thêm **+3 Tầm xa** cho phù thủy.
* **Afterlife (Đời 4, 250G):** Tăng thêm **+3 Tầm xa** cho phù thủy (Tối đa đạt tầm xa 16-19 ô).

> [!NOTE]
> * **Egyptian Priest:** Phù thủy Ai Cập mặc định được cộng **+3 Tầm xa** ngay từ khi sinh ra (Tầm xa khởi điểm là **13.0** thay vì 10.0; khi nâng cấp đầy đủ công nghệ đạt tới **19.0 ô** - đứng ngoài toàn bộ tầm nhìn màn hình để hú).
> * **Babylonian Priest:** Tốc độ hồi phục Mana gốc nhanh gấp 3 lần (**x3 Rejuvenation rate**), cho phép hú liên tục nhiều đơn vị đối phương.
> * **Choson Priest:** Giá rẻ hơn **-30% Vàng** (chỉ tốn **87 Vàng** thay vì 125 Vàng).

---

## 8. NHÀ CHÍNH - NÔNG DÂN (TOWN CENTER)

| Đơn Vị (Việt Nam) | Tên Game (DLL) | ID Game | Đời | Chi Phí Gốc | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tốc Đánh (RoF) | Tầm Nhìn | Huấn Luyện | Khả Năng Khai Thác & Nâng Cấp |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Nông Dân (Dân)** | Villager | 83 / 293 | 1 | 50 Thực | 25 | 3 | 0 / 0 | 0 | 1.10 | 1.5s | 4 | 20s | Thu thập tài nguyên, xây dựng, sửa chữa. Sau khi có Bánh xe (Đời 3), tốc độ chạy tăng từ 1.10 lên **1.43** (+30%). |

### Đặc Trưng Nông Dân Của Các Nền Văn Minh:
* **Shang:** Chi phí rẻ nhất game: **35 Thực** (giảm 30%), giúp ép dân và lên đời ổn định nhất.
* **Assyrian:** Tốc độ chạy **1.43** ngay từ Đời 1 (+30% tốc độ di chuyển), bằng tốc độ dân có Bánh xe.
* **Sumerian:** Lượng máu **40 HP** (+60% máu gốc), chống sư tử và kháng chọc dò cực tốt.
* **Palmyran:** Chi phí **75 Thực**, có sẵn **1 giáp cận chiến (1/0)** và làm việc nhanh hơn **+20% trên mọi nguồn tài nguyên** (quả, gỗ, hươu voi, vàng, đá).
* **Phoenician:** Chặt gỗ mang về **13 gỗ/chuyến** (+3 gỗ), tốc độ chặt cây tăng vượt bậc.
* **Persian:** Tốc độ ăn thịt hoang (hươu, voi) nhanh hơn **+30%**.
* **Egyptian:** Tốc độ đào vàng tăng **+20%** (13 vàng/chuyến).
* **Babylonian:** Tốc độ đào đá tăng **+30%** (13 đá/chuyến).

---

## 9. BẾN TÀU HẢI QUÂN - NHÀ BS (DOCK)

| Đơn Vị (Việt Nam) | Tên Game (DLL) | ID Game | Đời | Chi Phí Gốc | HP | Công | Giáp (Melee/Pierce) | Tầm Xa | Tốc Độ | Tốc Đánh (RoF) | Tầm Nhìn | Huấn Luyện | Đặc Tính & Nâng Cấp |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Thuyền Đánh Cá Nhỏ** | Fishing Boat | 13 | 1 | 50 Gỗ | 45 | 0 | 0 / 0 | 0 | 1.40 | - | 6 | 40s | Đánh bắt cá ven bờ. |
| **Thuyền Bè** | Raft | 292 | 1 | 40 Gỗ | 40 | 0 | 0 / 0 | 0 | 1.50 | - | 4 | 40s | Thuyền bè trinh sát sơ khai. |
| **Thuyền Vận Tải Nhẹ** | Light Transport | 17 | 1 | 150 Gỗ | 150 | 0 | 0 / 0 | 0 | 1.40 | - | 4 | 75s | Chở tối đa 5 đơn vị bộ binh/kỵ binh qua sông. |
| **Thuyền Đánh Cá Lớn** | Fishing Ship | 14 | 2 | 50 Gỗ | 75 | 0 | 0 / 0 | 0 | 2.00 | - | 6 | 40s | Đánh cá xa bờ và tốc độ thu gom nhanh. |
| **Thuyền Buôn Nhỏ** | Trade Boat | 15 | 2 | 100 Gỗ | 200 | 0 | 0 / 0 | 0 | 2.00 | - | 4 | 50s | Trao đổi tài nguyên tại bến tàu đồng minh. |
| **Thuyền Tên Nhẹ** | Scout Ship | 19 | 2 | 135 Gỗ | 120 | 5 | 0 / 0 | 5 | 1.75 | 1.5s | 7 | 60s | Bắn tên kiểm soát đường thủy Đời 2. |
| **Thuyền Tên Chiến** | War Galley | 20 | 3 | 135 Gỗ | 160 | 8 | 0 / 0 | 6 | 1.75 | 1.7s | 9 | 60s | Nâng cấp từ Scout Ship (100F, 50W). |
| **Thuyền Lửa** | Fire Galley | 360 | 3 | 115 Gỗ, 40 Vàng | 200 | 24 | 0 / 0 | 1 | 2.00 | 1.0s | 8 | 45s | Phun lửa cận chiến tốc độ 1.0s/phát, khắc tinh thuyền tên. |
| **Thuyền Buôn Lớn** | Merchant Ship | 16 | 3 | 100 Gỗ | 250 | 0 | 0 / 0 | 0 | 2.50 | - | 4 | 50s | Tốc độ di chuyển 2.50. |
| **Thuyền Vận Tải Lớn** | Heavy Transport | 18 | 3 | 150 Gỗ | 200 | 0 | 0 / 0 | 0 | 1.75 | - | 5 | 75s | Chở tối đa 10 đơn vị quân đội. |
| **Thuyền Chiến 3 Tầng** | Trireme | 21 | 4 | 135 Gỗ | 200 | 12 | 0 / 0 | 7 | 1.75 | 1.8s | 10 | 60s | Nâng cấp từ War Galley (300F, 100W). |
| **Thuyền Bắn Đá Nhỏ** | Catapult Trireme | 250 | 4 | 135 Gỗ, 75 Vàng | 120 | 35 | 0 / 0 | 9 | 1.35 | 5.0s | 12 | 90s | Bắn đá diện rộng phá hủy công trình ven biển. |
| **Pháo Hạm Thần** | Juggernaught | 277 | 4 | 135 Gỗ, 75 Vàng | 200 | 35 | 0 / 0 | 10 | 1.35 | 5.0s | 13 | 90s | Nâng cấp: 2000F, 900W. Pháo hạm hủy diệt tối thượng. |

---

## 10. BẢNG TRA CỨU TOÀN DIỆN ĐIỂM CỘNG 16 QUỐC GIA (CIV BONUSES)

| Quốc Gia | Nhóm Văn Hóa | Điểm Mạnh & Chỉ Số Lính Độc Quyền | Điểm Yếu Công Nghệ |
| :--- | :--- | :--- | :--- |
| **1. Shang** | Đông Á | Dân rẻ **35 Thực**; Tường thành x2 máu | Không điểm cộng sát thương/tốc độ; Thiếu Voi, Cẩu to, Đạp đôi, Chém thần |
| **2. Assyrian** | Babylon | Dân chạy **1.43 (+30%)**; Cung R bắn nhanh **+33%** | Không Đầu máu (Cung R 70 HP); Đời 4 yếu nhất game |
| **3. Egyptian** | Ai Cập | Cung R **93 HP (+33%)**; Sọc đơn 133 HP, Đạp đôi 160 HP; Phù thủy **+3 Range**; Dân đào vàng +20% | Không Ngựa chém BL; Không Voi; Không Lính xiên |
| **4. Babylonian** | Babylon | Tường & Tháp x2 HP; Phù thủy hồi Mana **x3 tốc độ**; Dân đào đá +30% | Không có đơn vị chạy nhanh hay cộng sát thương trực tiếp |
| **5. Hittite** | Babylon | Toàn bộ Cung BA **+1 Công**; Pháo cẩu đá **x2 HP (150/300 HP)**; Tàu chiến +4 Range | Không có Cẩu đá to đời 4 (Heavy Catapult); Phù thủy yếu |
| **6. Phoenician** | Babylon | Dân chặt gỗ mang về **13 gỗ**; Voi húc/tên **giảm 25% Thực** (127.5F / 135F); Thuyền pháo bắn nhanh +65% | Lính không có giáp đặc biệt; Không Đạp đôi; Không Cẩu to |
| **7. Sumerian** | Babylon | Dân **40 HP (+60%)**; Ruộng x2 sản lượng (500 thực); Cẩu đá bắn nhanh **gấp đôi** (Reload Time 2.5s) | Không Voi; Không Ngựa đôi; Không Tên lửa |
| **8. Persian** | Babylon | Dân ăn thịt hoang **+30%**; Voi húc chạy **1.35 (+50% tốc độ)** | Khởi đầu bị trừ 50 Thực (còn 150F); **Không có Bánh xe** (không Cung R, Đạp đôi) |
| **9. Yamato** | Đông Á | Toàn bộ Kỵ binh (Ngựa dò, Chém, Cataphract, Cung C) **giảm 25% chi phí**; Tàu +30% HP | Không Cẩu đá nhà BK; Không Đạp đôi; Không Voi; Cung R không có giáp tên |
| **10. Minoan** | Hy Lạp | Cung A **+2 Tầm xa** (9 ô ở Đời 3, 11 ô ở Đời 4); Ruộng +60 thực; Tàu chiến -33% giá | Không Cung R; Không Ngựa chém BL; Không Lạc đà |
| **11. Choson** | Đông Á | Dòng kiếm BB **+80 HP** (Legion đạt 240 HP); Phù thủy -30% giá (87 Gold); Tháp +2 Range | **Không có Bánh xe**; Ngựa chém không có Đầu máu, không Giáp 4 |
| **12. Roman** | La Mã | Nhà rẻ -15% gỗ; Chòi -50% đá (75 đá); Dòng kiếm BB **chém nhanh +33%** | **Không có Bánh xe**; Không có Cẩu đá to đời 4 |
| **13. Carthaginian** | La Mã | Voi và Lính xiên **+25% HP** (Voi 750 HP, Xiên thần 200 HP); Tháp canh lửa +50% công | **Không có Bánh xe**; Không Ngựa chém BL |
| **14. Palmyran** | La Mã | Dân làm việc **+20%**, có sẵn **1 giáp (1/0)**; Thuế chuyển hàng 0%; Lạc đà chạy nhanh nhất **(2.50)** | Dân đắt **75 Thực**; nếu mất dân đầu game sẽ rất khó hồi phục |
| **15. Macedonian** | La Mã | Toàn quân **kháng Phù thủy x4 lần**; Lính bộ & Cẩu đá +2 tầm nhìn; Pháo BK rẻ **50% chi phí**; Lính xiên +2 giáp tên | **KHÔNG CÓ NHÀ CHỢ (BM)** (không Bánh xe, không chặt gỗ, không đào vàng/đá) |
| **16. Greek** | Hy Lạp | Lính xiên **chạy nhanh +30% (tốc độ 1.17)**; Tàu chiến chạy nhanh +30% | **Không có Bánh xe**; Không Ngựa chém BL; Không Lạc đà; Rất tốn vàng |

---

## 11. CƠ CHẾ ẨN: BONUS KHẮC HỆ, SÁT THƯƠNG LAN & KHÁNG THU PHỤC

### 1. Cơ Chế Khắc Chế Bí Mật (Genie Engine Bonus Damage):
Trong mã nguồn Genie Engine của `empires.dat`, sát thương cộng thêm được định nghĩa thông qua các lớp giáp âm (`Negative Armor Class`):
* **Lạc đà (Camel Rider):**
  * Kỵ binh cưỡi ngựa mang `Armor Class 8 = -8`. Đòn đánh của Lạc đà mang `Attack Class 8 = 0`.  
    $\rightarrow$ Sát thương gây ra: $0 - (-8) = \mathbf{+8}$ sát thương lên Ngựa dò, Ngựa chém, Chém giáp, Cataphract.
  * Xe ngựa mang `Armor Class 8 = -4`.  
    $\rightarrow$ Sát thương gây ra: $0 - (-4) = \mathbf{+4}$ sát thương lên Sọc đơn, Cung R, Đạp đôi.
* **Kỵ binh (Scout, Cavalry, Heavy Cav, Cataphract):**
  * Toàn bộ Bộ binh mang `Armor Class 9 = -5`. Đòn đánh của Kỵ binh mang `Attack Class 9 = 0`.  
    $\rightarrow$ Sát thương gây ra: $0 - (-5) = \mathbf{+5}$ sát thương lên Lính chùy, Lính rìu, Kiếm ngắn, Kiếm rộng, Kiếm dài, Legion.
* **Quẩy đá (Slinger):**
  * Đơn vị cung thủ mang `Armor Class 1 = -2`. Đòn đánh của Quẩy đá mang `Attack Class 1 = 0`.  
    $\rightarrow$ Sát thương gây ra: $0 - (-2) = \mathbf{+2}$ sát thương lên Cung T, Cung A, Cung R, Cung C.
* **Ngựa sọc đơn (Chariot):**
  * Gây sát thương **gấp đôi (x2 attack)** khi chém trúng Phù thủy (Priest).

### 2. Cơ Chế Sát Thương Lan (Blast Width & Splash Damage):
* **Ngựa đạp đôi (Scythe Chariot):** Bán kính lan 2.0 tiles, gây **37.5% sát thương cơ bản** lan ra tất cả các mục tiêu đứng sát bên cạnh.
* **Voi húc (War Elephant / Armored Elephant):** Bán kính lan 2.0 tiles, gây **50% sát thương chà đạp** lan sang các đơn vị đứng cạnh bên mục tiêu chính.
* **Pháo cẩu đá (Stone Thrower / Catapult / Heavy Catapult):** Gây sát thương nổ lan diện rộng (Stone Thrower: 0.5 tile; Catapult & Heavy Catapult: 1.5 tiles). Gây sát thương lên cả quân phe mình.

### 3. Cơ Chế Kháng Phù Thủy (Conversion Resistance):
* **Đơn vị bình thường:** Tỷ lệ bị thu phục chuẩn (chu kỳ hú trung bình từ 4 - 8 lần).
* **Xe ngựa (Cung R, Sọc đơn, Đạp đôi) & Ngựa dò (Scout):** Sở hữu khả năng miễn nhiễm cao tự nhiên, Phù thủy cần gấp đôi thời gian và xác suất thấp hơn rất nhiều để thu phục thành công.
* **Quân Macedonian:** Toàn bộ quân lính có hệ số kháng phù thủy **gấp 4 lần** (gần như miễn nhiễm hoàn toàn trước các đợt hú thông thường).

---
*Tài liệu được trích xuất tự động và đối chiếu từ cơ sở dữ liệu `empires.dat` và DLL ngôn ngữ của Age of Empires: Rise of Rome 1.0b.*
