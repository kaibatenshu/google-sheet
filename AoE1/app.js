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
          const isBonus = isBonusStat(u.id, civ.id, m.key, val);
          const cellObj = formatMatrixCell(m, val, u);

          tbodyHtml += `
            <td class="data-cell ${isBonus ? 'has-bonus' : ''}" title="${cellObj.title}">
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

// 3. ĐỊNH DẠNG GIÁ TRỊ VÀ TOOLTIP CHO CELL (GIẢI THÍCH DÀI DÒNG HIỆN KHI RÊ CHUỘT)
function formatMatrixCell(m, val, unit) {
  if (val === 0 || val === "0" || val == null || val === undefined || val === "" || val === "-") {
    return {
      display: '',
      title: (val === 0 || val === "0") ? `${m.label}: 0` : ''
    };
  }

  const fullText = String(val);
  const title = `${m.label}: ${fullText} (${unit.name})`;
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
    let short = fullText
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
    // Rút gọn đặc tính dài dòng, toàn bộ chi tiết nằm trong tooltip
    let short = fullText;
    if (fullText.includes("Bắn nhanh +33%")) short = "⚡ +33% bắn";
    else if (fullText.includes("Bắn nhanh x2")) short = "⚡ x2 bắn";
    else if (fullText.includes("Chém nhanh +33%")) short = "⚡ +33% chém";
    else if (fullText.includes("Làm việc +20%")) short = "⚡ +20% việc";
    else if (fullText.includes("Làm việc nhanh +20%")) short = "⚡ +20% việc";
    else if (fullText.includes("Đào vàng 13")) short = "💰 +20% vàng";
    else if (fullText.includes("Đào đá 13")) short = "⚪ +30% đá";
    else if (fullText.includes("Chặt gỗ 13")) short = "🪵 +3 gỗ";
    else if (fullText.includes("Ăn voi hươu +30%")) short = "🥩 +30% thịt";
    else if (fullText.includes("Kháng phù thủy x4") || fullText.includes("Kháng hú x4")) short = "🛡️ Kháng hú";
    else if (fullText.includes("lướt gió")) short = "⚡ +30% tốc";
    else if (fullText.includes("Lao động cơ bản")) short = "Cơ bản";
    else if (fullText.includes("Bộ binh cận chiến")) short = "Cận chiến";
    else if (fullText.includes("vs Cung thủ")) short = "+1.5 vs Cung";
    else if (fullText.includes("vs Kỵ binh") || fullText.includes("vs Kỵ")) short = "+8 vs Kỵ";
    else if (fullText.includes("Liên thanh")) short = "Liên thanh";
    else if (fullText.includes("Tầm xa 5, giáp cận +2")) short = "+1 tầm, +2 giáp";
    else if (fullText.includes("Tầm xa 6, giáp cận +4")) short = "+2 tầm, +4 giáp";
    else if (fullText.length > 10) short = fullText.slice(0, 9) + '…';

    display = `<span class="cell-desc">${short}</span>`;
  } else {
    display = `<span class="cell-desc">${fullText}</span>`;
  }

  return { display, title };
}

// KIỂM TRA CHỈ SỐ CÓ PHẢI LÀ BONUS CỦA QUỐC GIA ĐANG CHỌN KHÔNG
function isBonusStat(unitId, civId, key, val) {
  if (!val || val === 0 || val === "0" || val === "-") return false;
  const valStr = String(val);
  if (valStr.includes('+') || valStr.includes('⚡') || valStr.includes('Rẻ') || valStr.includes('%') || valStr.includes('x2') || valStr.includes('(-25%)') || valStr.includes('(-50%)') || valStr.includes('(-30%)')) {
    return true;
  }

  if (civId === 'shang' && unitId === 'villager' && key === 'food' && val === 35) return true;
  if (civId === 'egyptian' && (unitId === 'chariot_archer' || unitId === 'chariot' || unitId === 'scythe_chariot') && key === 'hp') return true;
  if (civId === 'egyptian' && unitId === 'priest' && key === 'range') return true;
  if (civId === 'hittite' && ['bowman', 'chariot_archer', 'composite_bowman', 'heavy_horse_archer'].includes(unitId) && key === 'atk') return true;
  if (civId === 'hittite' && unitId === 'stone_thrower' && key === 'hp') return true;
  if (civId === 'sumerian' && unitId === 'villager' && key === 'hp' && val >= 40) return true;
  if (civId === 'choson' && (unitId === 'broad_swordsman' || unitId === 'legion') && key === 'hp') return true;
  if (civId === 'choson' && unitId === 'priest' && key === 'gold') return true;
  if (civId === 'carthaginian' && ['armored_elephant', 'elephant_archer', 'hoplite', 'centurion'].includes(unitId) && key === 'hp') return true;
  if (civId === 'yamato' && ['scout_cavalry', 'cavalry', 'cataphract', 'heavy_horse_archer'].includes(unitId) && (key === 'food' || key === 'gold')) return true;
  if (civId === 'palmyran' && unitId === 'villager' && (key === 'food' || key === 'melee')) return true;
  if (civId === 'palmyran' && unitId === 'camelry' && key === 'speed') return true;
  if (civId === 'macedonian' && ['stone_thrower', 'heavy_catapult', 'ballista', 'helepolis'].includes(unitId) && (key === 'wood' || key === 'gold')) return true;
  if (civId === 'macedonian' && ['hoplite', 'centurion'].includes(unitId) && key === 'pierce') return true;
  if (civId === 'greek' && ['hoplite', 'centurion'].includes(unitId) && key === 'speed') return true;
  if (civId === 'minoan' && unitId === 'composite_bowman' && key === 'range') return true;
  if (civId === 'persian' && unitId === 'armored_elephant' && key === 'speed') return true;
  if (civId === 'phoenician' && ['armored_elephant', 'elephant_archer'].includes(unitId) && key === 'food') return true;

  return false;
}
