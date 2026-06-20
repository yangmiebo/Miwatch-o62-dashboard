/**
 * ==================================================
 * 文件名称：battery.js
 *
 * 功能：
 * 1. 获取设备电池电量（Web Battery API）
 * 2. 更新底部电量文字（剩余电量 XX%）
 * 3. 更新 SVG 进度环（表盘外圈）
 *
 * 颜色修改说明：
 * 在下方「颜色设置」区域，你可以自由更改：
 *   - 固定颜色：将 `ring.style.stroke` 设为任意颜色值。
 *   - 分段变色：已提供 3 段示例（绿/黄/红），直接修改色值即可。
 * ==================================================
 */

async function updateBattery() {

    // ---------- 1. 获取电量 ----------
    // 调试开关：设为 true 则使用固定值（便于测试），false 则使用真实 API
    const DEBUG_FIXED = true;   // ← 改为 false 即启用真实电量

    let level = 10;  // 固定测试值

    if (!DEBUG_FIXED && navigator.getBattery) {
        const battery = await navigator.getBattery();
        level = Math.round(battery.level * 100);
    }

    // ---------- 2. 更新底部文字 ----------
    const batteryTop = document.getElementById('batteryTop');
    if (batteryTop) {
        batteryTop.innerText = `${level}%`;   // 只显示数值和百分号
    }

    // ---------- 3. 更新进度环 ----------
    const ring = document.getElementById('batteryRing');
    const radius = 196;                         // 必须与 HTML 中的 r 一致
    const circumference = 2 * Math.PI * radius; // ≈ 1231.5
    ring.style.strokeDasharray = circumference + 7; // 补偿圆头
    const offset = circumference - circumference * (level / 100);
    ring.style.strokeDashoffset = offset;

    // ---------- ★ 颜色设置（修改此处即可） ----------
    // 分段变色（根据电量自动切换颜色）—— 修改下面的色值即可
    if (level > 60) {
        ring.style.stroke = '#579668';            // 绿色（高电量）
        ring.style.filter = 'drop-shadow(0 0 10px #579668)';
    } else if (level > 20) {
        ring.style.stroke = '#bda94f';            // 黄色（中电量）
        ring.style.filter = 'drop-shadow(0 0 10px #bda94f)';
    } else {
        ring.style.stroke = '#bc291e';            // 红色（低电量）
        ring.style.filter = 'drop-shadow(0 0 10px #bc291e)';
    }
    // -------------------------------------------------
}

// 执行更新
updateBattery();

/**
 * 可选：监听电量变化，实现实时更新
 */
if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
        battery.addEventListener('levelchange', updateBattery);
    });
}