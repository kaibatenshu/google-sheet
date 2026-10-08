/**
 * LOGIC TƯƠNG TÁC GIAO DIỆN AOE 1
 * 16 TABS CHỌN QUỐC GIA (1 HÀNG DUY NHẤT) & BẢNG MA TRẬN BINH CHỦNG FULLWIDTH
 */

// STATE TOÀN CỤC
let selectedMatrixCiv = 'assyrian'; // Mặc định Assyrian như ảnh mẫu

// KHỞI CHẠY ỨNG DỤNG KHI DOM SẴN SÀNG
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderCivTabs();
  renderMatrixTable();
}

// =============================================================================
// 1. TẠO 16 TABS CHỌN QUỐC GIA (BỎ CHỮ TRONG NGOẶC ĐỂ VỪA 1 HÀNG)
// =============================================================================

function renderCivTabs() {
  const container = document.getElementById('civTabsBar');
  if (!container) return;

  container.innerHTML = AOE_CIVILIZATIONS.map(c => `
    <button 
      class="civ-tab-btn ${c.id === selectedMatrixCiv ? 'active' : ''}" 
      onclick="selectCiv('${c.id}')"
      title="${c.name} (${c.nameVi}) - ${c.specialBonus[0]}"
    >
      <span class="civ-tab-icon">${c.icon}</span>
      <span class="civ-tab-name">${c.name}</span>
    </button>
  `).join('');
}

function selectCiv(civId) {
  selectedMatrixCiv = civId;

  // Cập nhật tab active
  document.querySelectorAll('.civ-tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.civ-tab-btn'))
    .find(btn => btn.getAttribute('onclick').includes(`'${civId}'`));
  if (activeBtn) activeBtn.classList.add('active');

  renderMatrixTable();
}

// =============================================================================
// 2. BẢNG MA TRẬN CHỈ SỐ QUÂN CHUẨN SPREADSHEET (FULLWIDTH & GỌN GÀNG)
// =============================================================================

function renderMatrixTable() {
  const table = document.getElementById('matrixTable');
  if (!table) return;

  const civ = AOE_CIVILIZATIONS.find(c => c.id === selectedMatrixCiv) || AOE_CIVILIZATIONS[0];

  // 4. ẨN CÁC QUÂN KHÔNG CÓ TRONG QUỐC GIA ĐANG CHỌN (CHỈ HIỂN THỊ QUÂN CÓ TRONG TECH TREE)
  const visibleUnits = MATRIX_UNITS.filter(u => {
    const check = getUnitMatrixStats(u, civ.id, u.firstAge);
    return check.hasUnit;
  });

  // Hiển thị đầy đủ cả 4 đời
  const agesToRender = [1, 2, 3, 4];

  // 1. THEAD (HÀNG TIÊU ĐỀ QUÂN: ICON LỚN, ĐÃ BỎ CHỮ XÁM PHÍA DƯỚI)
  let theadHtml = `
    <thead>
      <tr class="row-header-units">
        <th colspan="2" class="corner-units-label">
          QUÂN
        </th>
        ${visibleUnits.map(u => `
          <th class="th-unit-col" title="${u.name} (${u.nameEn}) • Mở khóa từ Đời ${u.firstAge}">
            <div class="th-unit-content">
              <div class="sheet-unit-avatar">
                <img src="${u.image}" alt="${u.name}" class="sheet-unit-img">
              </div>
              <div class="sheet-unit-name" title="${u.name}">${u.name}</div>
            </div>
          </th>
        `).join('')}
      </tr>
    </thead>
  `;

  // 2. TBODY (CỘT A: ĐỜI ROWSPAN 14, CỘT B: 14 CHỈ SỐ)
  let tbodyHtml = '<tbody>';

  agesToRender.forEach(age => {
    MATRIX_METRICS.forEach((m, mIndex) => {
      tbodyHtml += `<tr>`;

      // CỘT A: ĐỜI (CHỈ TẠO Ở HÀNG ĐẦU CỦA ĐỜI)
      if (mIndex === 0) {
        tbodyHtml += `
          <td rowspan="${MATRIX_METRICS.length}" class="col-age-cell age-block-${age}">
            <div class="age-inner-text">ĐỜI ${age}</div>
          </td>
        `;
      }

      // CỘT B: CHỈ SỐ (ICON + TÊN)
      tbodyHtml += `
        <td class="col-metric-cell" title="${m.label}">
          <div class="metric-flex">
            <span class="metric-ico">${m.icon}</span>
            <span class="metric-text">${m.label}</span>
          </div>
        </td>
      `;

      // DỮ LIỆU CỦA TỪNG QUÂN (RÚT GỌN CHỮ DÀI, RÊ CHUỘT HIỆN TOOLTIP ĐẦY ĐỦ)
      visibleUnits.forEach(u => {
        const res = getUnitMatrixStats(u, civ.id, age);

        if (!res.isAgeAvailable) {
          tbodyHtml += `<td class="data-cell cell-locked-age" title="${u.name} mở khóa ở Đời ${u.firstAge}"></td>`;
        } else {
          const val = res.stats[m.key];
          const cellObj = formatMatrixCell(m, val, u, civ, age);

          tbodyHtml += `
            <td class="data-cell ${cellObj.isBonus ? 'has-bonus' : ''}" title="${cellObj.title}">
              ${cellObj.display}
            </td>
          `;
        }
      });

      tbodyHtml += `</tr>`;
    });
  });

  tbodyHtml += '</tbody>';

  table.innerHTML = theadHtml + tbodyHtml;
}

// 3. ĐỊNH DẠNG GIÁ TRỊ VÀ TOOLTIP CHO CELL (RÚT GỌN GỌN GÀNG, TOOLTIP RÕ RÀNG DỄ HIỂU)
function formatMatrixCell(m, val, unit, civ, age) {
  if (val === 0 || val === "0" || val == null || val === undefined || val === "" || val === "-") {
    return {
      display: '',
      title: (val === 0 || val === "0") ? `${m.label}: 0 (${unit.name})` : '',
      isBonus: false
    };
  }

  // Lấy thông tin bonus đặc quyền hoặc đặc tính
  const bonusInfo = getCivBonusInfo(unit.id, civ.id, m.key, val, age, unit.name, m.label);
  const isBonus = bonusInfo.isBonus;
  const title = bonusInfo.tooltip;

  let display = '';
  if (m.key === 'food') {
    display = `<span class="cell-res-text food">${val}</span>`;
  } else if (m.key === 'wood') {
    display = `<span class="cell-res-text wood">${val}</span>`;
  } else if (m.key === 'gold') {
    display = `<span class="cell-res-text gold">${val}</span>`;
  } else if (m.key === 'stone') {
    display = `<span class="cell-res-text stone">${val}</span>`;
  } else if (m.key === 'tech') {
    // Rút gọn tên công trình / nâng cấp để giữ cell gọn gàng
    let short = String(val)
      .replace(/Nhà Chính \(TC\)/g, "TC")
      .replace(/Doanh trại \(BB\)/g, "BB")
      .replace(/Trường bắn \(BA\)/g, "BA")
      .replace(/Nhà Ngựa \(BL\)/g, "BL")
      .replace(/Hàn Lâm Viện \(BY\)/g, "BY")
      .replace(/Xưởng pháo \(BK\)/g, "BK")
      .replace(/Đền thờ \(BP\)/g, "BP")
      .replace(/Nhà Phù thủy \(BP\)/g, "BP")
      .replace(/Bánh xe \(Wheel\)/g, "Bánh xe")
      .replace(/Nâng Legion BB/g, "Legion")
      .replace(/Nâng Centurion BY/g, "Centurion")
      .replace(/Nâng Cung A tối đa/g, "Cung A")
      .replace(/Nâng Kiếm chém/g, "Kiếm chém")
      .replace(/Nâng lên Rìu \(BB\)/g, "Rìu")
      .replace(/Nâng Cung chạc BA/g, "Cung chạc")
      .replace(/Hưởng BS & BM/g, "BS & BM")
      .replace(/Kinh tế tối đa/g, "Max KT")
      .replace(/Công nghệ tối đa/g, "Max CN");

    display = `<span class="cell-desc">${short}</span>`;
  } else if (m.key === 'bonus') {
    // Rút gọn đặc tính trong ô (ngắn gọn, không bao giờ bị cắt chữ ..)
    let short = String(val);
    if (short === 'Bắn +33%') short = '⚡ Bắn +33%';
    else if (short === 'Chém +33%') short = '⚡ Chém +33%';
    else if (short === 'Bắn x2') short = '⚡ Bắn x2';
    else if (short === 'Đào vàng +20%') short = '⚡ Vàng +20%';
    else if (short === 'Đào đá +30%') short = '⚡ Đá +30%';
    else if (short === 'Chặt gỗ +3') short = '⚡ Gỗ +3';
    else if (short === 'Ăn thịt +30%') short = '⚡ Thịt +30%';
    else if (short === 'Làm việc +20%') short = '⚡ Việc +20%';
    else if (short === 'Kháng hú x4') short = '⚡ Kháng hú x4';

    display = `<span class="cell-desc">${short}</span>`;
  } else {
    display = `<span class="cell-desc">${val}</span>`;
  }

  return { display, title, isBonus };
}

// 4. KIỂM TRA BONUS QUỐC GIA & ĐẶC TÍNH CHIẾN ĐẤU, TẠO TOOLTIP ĐƠN GIẢN DỄ HIỂU
function getCivBonusInfo(unitId, civId, key, val, age, unitName, metricLabel) {
  if (val === 0 || val === "0" || val == null || val === "" || val === "-") {
    return { isBonus: false, tooltip: (val === 0 || val === "0") ? `${metricLabel}: 0 (${unitName})` : "" };
  }

  // 1. BONUS ĐẶC QUYỀN RIÊNG THEO QUỐC GIA (16 NỀN VĂN MINH AOE 1)
  if (civId === "shang" && unitId === "villager" && key === "food" && val === 35) {
    return { isBonus: true, tooltip: `⚡ Dân Shang: Giá rẻ chỉ 35 thực (tiết kiệm 15 thực)` };
  }

  if (civId === "assyrian") {
    if (unitId === "villager" && key === "speed" && (age === 1 || age === 2)) {
      return { isBonus: true, tooltip: `⚡ Dân Assyrian: Chạy nhanh 1.43 ngay từ Đời 1 (+30% so với dân thường 1.10)` };
    }
    if (["bowman", "chariot_archer", "composite_bowman"].includes(unitId) && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Cung Assyrian: Tốc độ bắn tên nhanh hơn 33%` };
    }
  }

  if (civId === "egyptian") {
    if (unitId === "villager" && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Dân Egyptian: Khai thác mỏ vàng nhanh hơn 20%` };
    }
    if (unitId === "chariot_archer" && key === "hp") {
      return { isBonus: true, tooltip: `⚡ Cung R Egyptian: Máu 93 (+33% so với 70 máu gốc)` };
    }
    if (unitId === "chariot" && key === "hp") {
      return { isBonus: true, tooltip: `⚡ Sọc đơn Egyptian: Máu 133 (+33% so với 100 máu gốc)` };
    }
    if (unitId === "scythe_chariot" && key === "hp") {
      return { isBonus: true, tooltip: `⚡ Đạp đôi Egyptian: Máu 160 (+33% so với 120 máu gốc)` };
    }
    if (unitId === "priest" && key === "range") {
      return { isBonus: true, tooltip: `⚡ Phù thủy Egyptian: Tầm xa +3 (${val} tầm xa so với ${age === 3 ? 9 : 10} thường)` };
    }
  }

  if (civId === "babylonian") {
    if (unitId === "villager" && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Dân Babylonian: Khai thác mỏ đá nhanh hơn 30%` };
    }
    if (unitId === "priest" && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Phù thủy Babylonian: Hồi phục lực chuyển hóa (mana) nhanh gấp 3 lần` };
    }
  }

  if (civId === "hittite") {
    if (["bowman", "chariot_archer", "composite_bowman", "heavy_horse_archer"].includes(unitId) && key === "atk") {
      return { isBonus: true, tooltip: `⚡ Cung Hittite: Sát thương +1 công ở mọi đời (${val} công)` };
    }
    if (["stone_thrower", "heavy_catapult"].includes(unitId) && key === "hp") {
      return { isBonus: true, tooltip: `⚡ Cẩu đá Hittite: Máu gấp đôi (${val} máu)` };
    }
  }

  if (civId === "phoenician") {
    if (unitId === "villager" && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Dân Phoenician: Chặt gỗ mang về 13 gỗ (+3 gỗ mỗi lượt)` };
    }
    if (["armored_elephant", "elephant_archer"].includes(unitId) && key === "food") {
      return { isBonus: true, tooltip: `⚡ Voi Phoenician: Giảm 25% giá thực (chỉ ${val} thực)` };
    }
  }

  if (civId === "sumerian") {
    if (unitId === "villager" && key === "hp") {
      return { isBonus: true, tooltip: `⚡ Dân Sumerian: Máu 40 (+60% so với dân thường 25 HP)` };
    }
    if (["stone_thrower", "heavy_catapult"].includes(unitId) && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Cẩu đá Sumerian: Tốc độ bắn đá nhanh gấp đôi (x2)` };
    }
  }

  if (civId === "persian") {
    if (unitId === "villager" && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Dân Persian: Săn hươu voi nhanh hơn 30%` };
    }
    if (unitId === "armored_elephant" && key === "speed") {
      return { isBonus: true, tooltip: `⚡ Voi Persian: Tốc độ di chuyển tăng 50% (tốc độ 1.50)` };
    }
  }

  if (civId === "yamato") {
    if (["scout_cavalry", "cavalry", "cataphract", "heavy_horse_archer"].includes(unitId) && (key === "food" || key === "gold")) {
      return { isBonus: true, tooltip: `⚡ Kỵ binh Yamato: Giảm 25% chi phí (${key === "food" ? val + " thực" : val + " vàng"})` };
    }
  }

  if (civId === "minoan") {
    if (unitId === "composite_bowman" && key === "range") {
      return { isBonus: true, tooltip: `⚡ Cung A Minoan: Tầm xa +2 (${val} tầm xa so với 7 thường)` };
    }
  }

  if (civId === "choson") {
    if (["broad_swordsman", "legion"].includes(unitId) && key === "hp") {
      return { isBonus: true, tooltip: `⚡ Kiếm Choson: Máu +80 (${val} HP)` };
    }
    if (unitId === "priest" && key === "gold") {
      return { isBonus: true, tooltip: `⚡ Phù thủy Choson: Giảm 30% giá vàng (chỉ 85 vàng)` };
    }
  }

  if (civId === "roman") {
    if (["broad_swordsman", "legion"].includes(unitId) && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Kiếm Roman: Tốc độ vung kiếm chém nhanh hơn 33%` };
    }
  }

  if (civId === "carthaginian") {
    if (["armored_elephant", "elephant_archer", "hoplite", "centurion"].includes(unitId) && key === "hp") {
      return { isBonus: true, tooltip: `⚡ Quân Carthage: Máu +25% (${val} máu)` };
    }
  }

  if (civId === "palmyran") {
    if (unitId === "villager" && key === "food") {
      return { isBonus: true, tooltip: `⚡ Dân Palmyran đắt hơn: Giá 75 thực (+50% so với dân thường 50)` };
    }
    if (unitId === "villager" && key === "melee" && (age === 1 || age === 2)) {
      return { isBonus: true, tooltip: `⚡ Dân Palmyran: Có sẵn 1 giáp cận chiến` };
    }
    if (unitId === "villager" && key === "bonus") {
      return { isBonus: true, tooltip: `⚡ Dân Palmyran: Tốc độ làm việc nhanh hơn 20%` };
    }
    if (unitId === "camelry" && key === "speed") {
      return { isBonus: true, tooltip: `⚡ Lạc đà Palmyran: Tốc độ chạy nhanh hơn 25% (tốc độ 2.19)` };
    }
  }

  if (civId === "macedonian") {
    if (["stone_thrower", "heavy_catapult", "ballista", "helepolis"].includes(unitId) && (key === "wood" || key === "gold")) {
      return { isBonus: true, tooltip: `⚡ Pháo Macedonian: Rẻ hơn 50% (${key === "wood" ? val + " gỗ" : val + " vàng"})` };
    }
    if (["hoplite", "centurion"].includes(unitId) && key === "pierce" && age === 3) {
      return { isBonus: true, tooltip: `⚡ Xiên Macedonian: Có sẵn +2 giáp chống tên` };
    }
    if (key === "bonus" && val === "Kháng hú x4") {
      return { isBonus: true, tooltip: `⚡ Quân Macedonian: Kháng phù thủy gấp 4 lần, +2 tầm nhìn` };
    }
  }

  if (civId === "greek") {
    if (["hoplite", "centurion"].includes(unitId) && key === "speed") {
      return { isBonus: true, tooltip: `⚡ Xiên Greek: Tốc độ chạy nhanh hơn 30% (tốc độ 1.30)` };
    }
  }

  // 2. ĐẶC TÍNH KHẮC CHẾ / ĐẶC BIỆT CỦA TỪNG LOẠI QUÂN (Ô VÀNG)
  if (key === "bonus") {
    if (val === "+1.5 vs Cung") return { isBonus: true, tooltip: `⭐ Quẩy đá: Gây thêm +1.5 sát thương khi bắn lính cung` };
    if (val === "+8 vs Kỵ") return { isBonus: true, tooltip: `⭐ Lạc đà: Gây thêm +8 sát thương khi cận chiến với kỵ binh` };
    if (val === "+5 vs BB") return { isBonus: true, tooltip: `⭐ Ngựa chém: Gây thêm +5 sát thương khi cận chiến với bộ binh` };
    if (val === "x2 vs Hú") return { isBonus: true, tooltip: `⭐ Sọc đơn: Kháng phù thủy và gây sát thương x2 lên phù thủy` };
    if (val === "Chém lan") return { isBonus: true, tooltip: `⭐ Đạp đôi: Đòn đánh chém lan xung quanh và kháng phù thủy` };
  }

  // 3. ĐẶC TÍNH THÔNG THƯỜNG CỦA QUÂN (KHÔNG TÔ VÀNG, TOOLTIP RÕ RÀNG)
  if (key === "bonus") {
    if (val === "Kháng hú") return { isBonus: false, tooltip: `Kháng phù thủy: Khó bị phù thủy đối phương thu phục` };
    if (val === "Húc nhà") return { isBonus: false, tooltip: `Voi húc: Sát thương đè lan xung quanh, công phá nhà cực mạnh` };
    if (val === "Trâu máu") return { isBonus: false, tooltip: `Voi tên: Lượng máu cực lớn (600 HP) và tầm bắn xa 9` };
    if (val === "Bắn lan") return { isBonus: false, tooltip: `Cẩu đá: Sát thương nổ lan diện rộng, phá hủy công trình` };
    if (val === "Bắn lan to") return { isBonus: false, tooltip: `Cẩu to: Sát thương nổ lan cực lớn (tầm xa 12, công 60)` };
    if (val === "Xuyên hàng") return { isBonus: false, tooltip: `Pháo tép: Bắn tên lớn xuyên qua nhiều quân địch theo hàng thẳng` };
    if (val === "Liên thanh") return { isBonus: false, tooltip: `Helepolis: Bắn liên thanh cực nhanh, đạn xuyên nhiều mục tiêu` };
    if (val === "Hú & hồi") return { isBonus: false, tooltip: `Phù thủy: Thu phục lính địch từ xa và hồi máu cho đồng minh` };
    if (val === "Hú xa & nhà") return { isBonus: false, tooltip: `Phù thủy: Tầm thu phục xa hơn và có thể thu phục công trình` };
    if (val === "Cung thần") return { isBonus: false, tooltip: `Cung C thần: Tốc độ chạy nhanh 2.0, công 9, tầm xa 9` };
    if (val === "Áp đảo") return { isBonus: false, tooltip: `Legion: Bộ binh đông đảo, giá rẻ, công phá nhà cực nhanh` };
    if (val === "Siêu lính") return { isBonus: false, tooltip: `Centurion: Chiến binh giáp sắt mạnh nhất (công 30, giáp 8)` };
    if (val === "Đục nhà") return { isBonus: false, tooltip: `Kiếm chém: Sát thương cao và công phá công trình nhanh` };
    if (val === "Kiếm dài") return { isBonus: false, tooltip: `Kiếm dài: Nâng cấp tăng sát thương và giáp phòng thủ` };
    if (val === "Giáp dày") return { isBonus: false, tooltip: `Lính xiên: Giáp cận chiến rất cao, phòng ngự cực tốt` };
    if (val === "Phalanx") return { isBonus: false, tooltip: `Phalanx: Đội hình xiên nâng cấp, công 20, giáp 7` };
    if (val === "Cơ bản") return { isBonus: false, tooltip: `Đặc tính cơ bản của đơn vị` };
    if (val === "Cận chiến") return { isBonus: false, tooltip: `Tấn công cận chiến phạm vi gần` };
    if (val === "Chặt gỗ") return { isBonus: false, tooltip: `Nông dân mang gỗ nhiều hơn sau khi nâng cấp` };
    if (val === "Bánh xe") return { isBonus: false, tooltip: `Đã nâng cấp Bánh xe: Tăng tốc độ di chuyển lên 1.43` };
    if (val === "Max KT") return { isBonus: false, tooltip: `Đã hoàn thành toàn bộ nâng cấp kinh tế tối đa` };
    if (val === "Tầm xa 6") return { isBonus: false, tooltip: `Tầm bắn tối đa đạt 6` };
    if (val === "Tầm xa 7") return { isBonus: false, tooltip: `Tầm bắn tối đa đạt 7` };
    if (val === "Lửa tầm 7") return { isBonus: false, tooltip: `Tên lửa bắn xa tầm 7` };
  }

  // 4. CÁC Ô CHỈ SỐ THÔNG THƯỜNG KHÁC
  return { isBonus: false, tooltip: `${metricLabel}: ${val} (${unitName})` };
}

function isBonusStat(unitId, civId, key, val, age, unitName, metricLabel) {
  return getCivBonusInfo(unitId, civId, key, val, age, unitName, metricLabel).isBonus;
}
