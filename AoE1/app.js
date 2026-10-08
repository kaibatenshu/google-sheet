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
  const urlParams = new URLSearchParams(window.location.search);
  const civParam = urlParams.get('civ');
  if (civParam && AOE_CIVILIZATIONS.some(c => c.id === civParam)) {
    selectedMatrixCiv = civParam;
  }
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

function getAgeShortName(age) {
  switch (age) {
    case 1: return 'Đời 1 (Stone Age)';
    case 2: return 'Đời 2 (Tool Age)';
    case 3: return 'Đời 3 (Bronze Age)';
    case 4: return 'Đời 4 (Iron Age)';
    default: return `Đời ${age}`;
  }
}

// =============================================================================
// THÔNG TIN CÔNG TRÌNH TẠO QUÂN (ẢNH NHÀ + TÊN NHÀ HIỂN THỊ KHI RÊ CHUỘT)
// =============================================================================
function getUnitBuildingInfo(unit) {
  const map = {
    villager: {
      bldgNameVi: "Nhà Chính",
      bldgNameEn: "Town Center",
      code: "TC",
      image: "images/buildings/town_center.png",
      note: "Sinh sản nông dân (20s) và lên đời"
    },
    clubman: {
      bldgNameVi: "Doanh Trại",
      bldgNameEn: "Barracks",
      code: "BB",
      image: "images/buildings/barracks.png",
      note: "Huấn luyện bộ binh cận chiến sơ khai"
    },
    axeman: {
      bldgNameVi: "Doanh Trại",
      bldgNameEn: "Barracks",
      code: "BB",
      image: "images/buildings/barracks.png",
      note: "Nâng cấp từ Lính chùy tại BB (Đời 2)"
    },
    slinger: {
      bldgNameVi: "Doanh Trại",
      bldgNameEn: "Barracks",
      code: "BB",
      image: "images/buildings/barracks.png",
      note: "Tạo tại Doanh Trại (BB), yêu cầu thêm Nhà Kho (BS)"
    },
    broad_swordsman: {
      bldgNameVi: "Doanh Trại",
      bldgNameEn: "Barracks",
      code: "BB",
      image: "images/buildings/barracks.png",
      note: "Nâng cấp từ Kiếm ngắn tại BB (Đời 3)"
    },
    legion: {
      bldgNameVi: "Doanh Trại",
      bldgNameEn: "Barracks",
      code: "BB",
      image: "images/buildings/barracks.png",
      note: "Nâng cấp bộ binh tối thượng tại BB (Đời 4)"
    },
    bowman: {
      bldgNameVi: "Trường Bắn",
      bldgNameEn: "Archery Range",
      code: "BA",
      image: "images/buildings/archery_range.png",
      note: "Huấn luyện cung thủ sơ khai (Đời 2)"
    },
    chariot_archer: {
      bldgNameVi: "Trường Bắn",
      bldgNameEn: "Archery Range",
      code: "BA",
      image: "images/buildings/archery_range.png",
      note: "Tạo tại BA, yêu cầu nâng cấp Bánh xe tại Chợ (BM)"
    },
    composite_bowman: {
      bldgNameVi: "Trường Bắn",
      bldgNameEn: "Archery Range",
      code: "BA",
      image: "images/buildings/archery_range.png",
      note: "Nâng cấp từ Cung T tại BA (Đời 3)"
    },
    heavy_horse_archer: {
      bldgNameVi: "Trường Bắn",
      bldgNameEn: "Archery Range",
      code: "BA",
      image: "images/buildings/archery_range.png",
      note: "Nâng cấp từ Cung C tại BA (Đời 4)"
    },
    elephant_archer: {
      bldgNameVi: "Trường Bắn",
      bldgNameEn: "Archery Range",
      code: "BA",
      image: "images/buildings/archery_range.png",
      note: "Huấn luyện voi bắn cung hạng nặng (Đời 4)"
    },
    scout_cavalry: {
      bldgNameVi: "Nhà Ngựa",
      bldgNameEn: "Stable",
      code: "BL",
      image: "images/buildings/stable.png",
      note: "Do thám và quấy rối mở bản đồ (Đời 2)"
    },
    camelry: {
      bldgNameVi: "Nhà Ngựa",
      bldgNameEn: "Stable",
      code: "BL",
      image: "images/buildings/stable.png",
      note: "Kỵ binh khắc chế ngựa chém và kỵ binh (Đời 3)"
    },
    cavalry: {
      bldgNameVi: "Nhà Ngựa",
      bldgNameEn: "Stable",
      code: "BL",
      image: "images/buildings/stable.png",
      note: "Kỵ binh sốc sát thương cận chiến (Đời 3)"
    },
    chariot: {
      bldgNameVi: "Nhà Ngựa",
      bldgNameEn: "Stable",
      code: "BL",
      image: "images/buildings/stable.png",
      note: "Tạo tại BL, yêu cầu nghiên cứu Bánh xe tại Chợ (BM)"
    },
    scythe_chariot: {
      bldgNameVi: "Nhà Ngựa",
      bldgNameEn: "Stable",
      code: "BL",
      image: "images/buildings/stable.png",
      note: "Tạo tại BL, yêu cầu nâng cấp Đạp đôi từ Sọc đơn (Đời 4)"
    },
    cataphract: {
      bldgNameVi: "Nhà Ngựa",
      bldgNameEn: "Stable",
      code: "BL",
      image: "images/buildings/stable.png",
      note: "Nâng cấp kỵ binh chém tối thượng tại BL (Đời 4)"
    },
    armored_elephant: {
      bldgNameVi: "Nhà Ngựa",
      bldgNameEn: "Stable",
      code: "BL",
      image: "images/buildings/stable.png",
      note: "Nâng cấp từ Voi húc War Elephant tại BL (Đời 4)"
    },
    hoplite: {
      bldgNameVi: "Học Viện",
      bldgNameEn: "Academy",
      code: "BY",
      image: "images/buildings/academy.png",
      note: "Huấn luyện bộ binh hạng nặng giáp đồng (Đời 3)"
    },
    centurion: {
      bldgNameVi: "Học Viện",
      bldgNameEn: "Academy",
      code: "BY",
      image: "images/buildings/academy.png",
      note: "Nâng cấp xiên thần tối thượng tại BY (Đời 4)"
    },
    stone_thrower: {
      bldgNameVi: "Xưởng Pháo",
      bldgNameEn: "Siege Workshop",
      code: "BK",
      image: "images/buildings/siege_workshop.png",
      note: "Chế tạo máy bắn đá công thành tầm xa (Đời 3)"
    },
    ballista: {
      bldgNameVi: "Xưởng Pháo",
      bldgNameEn: "Siege Workshop",
      code: "BK",
      image: "images/buildings/siege_workshop.png",
      note: "Chế tạo pháo bắn tên xuyên thấu (Đời 3)"
    },
    heavy_catapult: {
      bldgNameVi: "Xưởng Pháo",
      bldgNameEn: "Siege Workshop",
      code: "BK",
      image: "images/buildings/siege_workshop.png",
      note: "Nâng cấp cẩu đá hủy diệt diện rộng tại BK (Đời 4)"
    },
    helepolis: {
      bldgNameVi: "Xưởng Pháo",
      bldgNameEn: "Siege Workshop",
      code: "BK",
      image: "images/buildings/siege_workshop.png",
      note: "Nâng cấp pháo liên thanh cực nhanh tại BK (Đời 4)"
    },
    priest: {
      bldgNameVi: "Đền Thờ",
      bldgNameEn: "Temple",
      code: "BP",
      image: "images/buildings/temple.png",
      note: "Đào tạo pháp sư / thầy tu thu phục và hồi máu (Đời 3)"
    }
  };

  return map[unit.id] || {
    bldgNameVi: "Doanh Trại",
    bldgNameEn: "Barracks",
    code: "BB",
    image: "images/buildings/barracks.png",
    note: "Công trình quân sự"
  };
}

// =============================================================================
// 2. BẢNG MA TRẬN CHỈ SỐ QUÂN (ĐÃ LẬT TOÀN DIỆN: CÁC ĐỜI LẬT LÊN TRÊN HÀNG CỘT)
// =============================================================================

function renderMatrixTable() {
  const table = document.getElementById('matrixTable');
  if (!table) return;

  const civ = AOE_CIVILIZATIONS.find(c => c.id === selectedMatrixCiv) || AOE_CIVILIZATIONS[0];
  const agesToRender = [1, 2, 3, 4];

  // Lọc danh sách quân hiển thị (HÀNG DỌC BÊN TRÁI)
  const visibleUnits = MATRIX_UNITS.filter(u => {
    return [1, 2, 3, 4].some(age => {
      const res = getUnitMatrixStats(u, civ.id, age);
      return res.hasUnit && res.isAgeAvailable;
    });
  });

  // 1. THEAD: 1 HÀNG TIÊU ĐỀ DUY NHẤT (QUÂN + 4 ĐỜI)
  let theadHtml = `
    <thead>
      <tr class="row-header-eras">
        <th class="corner-units-label-fixed">QUÂN</th>
        <th class="th-era-col era-block-1">Đời 1</th>
        <th class="th-era-col era-block-2">Đời 2</th>
        <th class="th-era-col era-block-3">Đời 3</th>
        <th class="th-era-col era-block-4">Đời 4</th>
      </tr>
    </thead>
  `;

  // 2. TBODY: MỖI HÀNG LÀ 1 QUÂN, MỖI Ô CÓ 2 DÒNG CANH GIỮA
  let tbodyHtml = '<tbody>';

  if (visibleUnits.length === 0) {
    tbodyHtml += `
      <tr>
        <td colspan="5" class="empty-units-notice" style="text-align: center; padding: 35px; color: #94a3b8; font-size: 0.95rem;">
          Không có đơn vị quân khả dụng.
        </td>
      </tr>
    `;
  } else {
    visibleUnits.forEach(u => {
      const bldg = getUnitBuildingInfo(u);
      tbodyHtml += `<tr class="row-unit-full">`;

      // CỘT QUÂN STICKY BÊN TRÁI (AVATAR ICON + TÊN QUÂN + HOVER HIỂN THỊ NHÀ TẠO QUÂN)
      tbodyHtml += `
        <td class="col-unit-name-cell-fixed">
          <div class="unit-flex-cell">
            <div class="sheet-unit-avatar-sm">
              <img src="${u.image}" alt="${u.name}" class="sheet-unit-img">
            </div>
            <div class="unit-text-meta">
              <div class="unit-cell-name-vi">${u.name}</div>
              <div class="unit-cell-name-en">${u.nameEn}</div>
            </div>
          </div>

          <!-- POPOVER HOVER: ẢNH NHÀ VÀ TÊN NHÀ TẠO RA QUÂN -->
          <div class="unit-bldg-hover-card">
            <div class="bldg-card-header">
              <span class="bldg-card-tag">NƠI TẠO QUÂN</span>
              <span class="bldg-card-code">${bldg.code}</span>
            </div>
            <div class="bldg-card-body">
              <div class="bldg-card-img-wrapper">
                <img src="${bldg.image}" alt="${bldg.bldgNameVi}" class="bldg-card-icon">
              </div>
              <div class="bldg-card-content">
                <div class="bldg-card-title-vi">${bldg.bldgNameVi}</div>
                <div class="bldg-card-title-en">${bldg.bldgNameEn}</div>
                <div class="bldg-card-note">${bldg.note}</div>
              </div>
            </div>
          </div>
        </td>
      `;

      // 4 CỘT ĐỜI: MỖI Ô CÓ 2 DÒNG CANH GIỮA (TÀI NGUYÊN & CHỈ SỐ)
      [1, 2, 3, 4].forEach(age => {
        tbodyHtml += `
          <td class="data-cell cell-age-entry era-cell-${age}">
            ${renderUnitAgeCell(u, civ, age)}
          </td>
        `;
      });

      tbodyHtml += `</tr>`;
    });
  }

  tbodyHtml += '</tbody>';
  table.innerHTML = theadHtml + tbodyHtml;
}

// -----------------------------------------------------------------------------
// RENDER NỘI DUNG 2 DÒNG TRONG MỖI Ô (CANH GIỮA: DÒNG 1 TÀI NGUYÊN, DÒNG 2 CHỈ SỐ)
// -----------------------------------------------------------------------------
function renderUnitAgeCell(u, civ, age) {
  const res = getUnitMatrixStats(u, civ.id, age);
  if (!res.hasUnit || !res.isAgeAvailable) {
    return `<div class="cell-age-locked">-</div>`;
  }

  const s = res.stats;

  // DÒNG 1: TÀI NGUYÊN MUA (CANH GIỮA)
  const costItems = [];
  if (s.food > 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'food', s.food, age, u.name, 'Thực');
    costItems.push(`
      <span class="cost-item ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/food.png" class="res-mini-ico" alt="Thực">
        <span class="cost-num food">${s.food}</span>
      </span>
    `);
  }
  if (s.wood > 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'wood', s.wood, age, u.name, 'Gỗ');
    costItems.push(`
      <span class="cost-item ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/wood.png" class="res-mini-ico" alt="Gỗ">
        <span class="cost-num wood">${s.wood}</span>
      </span>
    `);
  }
  if (s.gold > 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'gold', s.gold, age, u.name, 'Vàng');
    costItems.push(`
      <span class="cost-item ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/gold.png" class="res-mini-ico" alt="Vàng">
        <span class="cost-num gold">${s.gold}</span>
      </span>
    `);
  }
  if (s.stone > 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'stone', s.stone, age, u.name, 'Đá');
    costItems.push(`
      <span class="cost-item ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/stone.png" class="res-mini-ico" alt="Đá">
        <span class="cost-num stone">${s.stone}</span>
      </span>
    `);
  }
  const costHtml = costItems.length > 0 ? costItems.join('') : '<span class="cost-free">0</span>';

  // DÒNG 2: CÁC CHỈ SỐ (CANH GIỮA, CÓ TOOLTIP NẾU LÀ CHỈ SỐ ĐẶC BIỆT)
  const statItems = [];

  // 1. Thời gian huấn luyện (Train time)
  if (s.trainTime && s.trainTime !== '-' && s.trainTime !== 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'trainTime', s.trainTime, age, u.name, 'Thời gian huấn luyện');
    statItems.push(`
      <span class="stat-pill ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/train_time.png" class="stat-mini-ico" alt="TG">
        <span class="stat-pill-val">${s.trainTime}</span>
      </span>
    `);
  }

  // 2. Máu (HP)
  if (s.hp > 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'hp', s.hp, age, u.name, 'Máu');
    statItems.push(`
      <span class="stat-pill ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/hp.png" class="stat-mini-ico" alt="HP">
        <span class="stat-pill-val">${s.hp}</span>
      </span>
    `);
  }

  // 3. Công (Attack)
  if (s.atk > 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'atk', s.atk, age, u.name, 'Công');
    statItems.push(`
      <span class="stat-pill ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/attack.png" class="stat-mini-ico" alt="Công">
        <span class="stat-pill-val">${s.atk}</span>
      </span>
    `);
  }

  // 4. Giáp (Melee / Pierce Armor)
  const meleeB = getCivBonusInfo(u.id, civ.id, 'melee', s.melee, age, u.name, 'Giáp cận');
  const pierceB = getCivBonusInfo(u.id, civ.id, 'pierce', s.pierce, age, u.name, 'Giáp tên');
  if (s.melee > 0 || s.pierce > 0 || meleeB.isBonus || pierceB.isBonus) {
    const isArmorBonus = meleeB.isBonus || pierceB.isBonus;
    const armorTooltip = isArmorBonus ? (meleeB.tooltip || pierceB.tooltip) : `Giáp cận: ${s.melee} | Giáp chống tên: ${s.pierce}`;
    statItems.push(`
      <span class="stat-pill ${isArmorBonus ? 'has-bonus-stat' : ''}" title="${armorTooltip}">
        <img src="images/icons/melee_armor.png" class="stat-mini-ico" alt="Giáp">
        <span class="stat-pill-val">${s.melee}/${s.pierce}</span>
      </span>
    `);
  }

  // 5. Tầm xa (Range)
  if (s.range > 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'range', s.range, age, u.name, 'Tầm xa');
    statItems.push(`
      <span class="stat-pill ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/range.png" class="stat-mini-ico" alt="Tầm xa">
        <span class="stat-pill-val">${s.range}</span>
      </span>
    `);
  }

  // 6. Tốc độ di chuyển (Speed)
  if (s.speed > 0) {
    const b = getCivBonusInfo(u.id, civ.id, 'speed', s.speed, age, u.name, 'Tốc độ');
    statItems.push(`
      <span class="stat-pill ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/speed.png" class="stat-mini-ico" alt="Tốc độ">
        <span class="stat-pill-val">${s.speed}</span>
      </span>
    `);
  }

  // 7. Đặc tính / Bonus đặc biệt (nếu có)
  if (s.bonus && s.bonus !== '-' && s.bonus !== 'Cơ bản' && s.bonus !== '0') {
    const b = getCivBonusInfo(u.id, civ.id, 'bonus', s.bonus, age, u.name, 'Đặc tính');
    statItems.push(`
      <span class="stat-pill bonus-pill ${b.isBonus ? 'has-bonus-stat' : ''}" title="${b.tooltip}">
        <img src="images/icons/bonus.png" class="stat-mini-ico" alt="Đặc tính">
        <span class="stat-pill-val">${s.bonus}</span>
      </span>
    `);
  }

  const statsHtml = statItems.join('');

  return `
    <div class="cell-unit-2lines">
      <div class="cell-line-cost">${costHtml}</div>
      <div class="cell-line-stats">${statsHtml}</div>
    </div>
  `;
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
      return { isBonus: true, tooltip: `⚡ Voi Persian: Tốc độ di chuyển tăng 50% (tốc độ 1.35)` };
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
      return { isBonus: true, tooltip: `⚡ Lạc đà Palmyran: Tốc độ chạy nhanh hơn 25% (tốc độ 2.50)` };
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
      return { isBonus: true, tooltip: `⚡ Xiên Greek: Tốc độ chạy nhanh hơn 30% (tốc độ 1.17)` };
    }
  }

  // 2. ĐẶC TÍNH KHẮC CHẾ / ĐẶC BIỆT CỦA TỪNG LOẠI QUÂN (Ô VÀNG)
  if (key === "bonus") {
    if (val === "+2 vs Cung" || val === "+1.5 vs Cung") return { isBonus: true, tooltip: `⭐ Quẩy đá: Gây thêm +2 sát thương khi bắn lính cung` };
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
