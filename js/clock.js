/**
 * ==================================================
 * 文件名称：clock.js
 *
 * 功能：
 * 1. 获取当前系统时间
 * 2. 更新表盘上的时间显示（时:分）
 * 3. 更新表盘上的日期显示（星期 月 日）
 * 4. 新增：更新秒和上下午（AM/PM），显示在步数正上方
 * 5. 每秒自动刷新
 * ==================================================
 */

/**
 * 更新时间、日期、秒和上下午
 */
function updateClock() {

    // 创建当前时间的 Date 对象
    const now = new Date();

    /**
     * 获取小时（24小时制），并转换为两位数（如 9 -> "09"）
     */
    const hours = String(now.getHours()).padStart(2, '0');

    /**
     * 获取分钟，同样转换为两位数
     */
    const minutes = String(now.getMinutes()).padStart(2, '0');

    /**
     * 更新页面中 id="time" 的元素，显示格式为 "HH:MM"
     */
    document.getElementById('time').innerText = `${hours}:${minutes}`;

    /**
     * 设置日期格式选项
     * weekday: 'short' → 星期缩写（如 Sat）
     * day: 'numeric' → 日期数字（如 20）
     * month: 'short' → 月份缩写（如 Jun）
     */
    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    };

    /**
     * 使用 toLocaleDateString 将日期格式化为 "Sat Jun 20" 样式（英语环境）
     */
    const dateString = now.toLocaleDateString('en-US', options);

    /**
     * 更新页面中 id="date" 的元素，并将字符串转为大写（如 "SAT JUN 20"）
     */
    document.getElementById('date').innerText = dateString.toUpperCase();

    // ========== 新增：秒和上下午（AM/PM） ==========
    /**
     * 获取秒数，并转换为两位数（如 5 -> "05"）
     */
    const seconds = String(now.getSeconds()).padStart(2, '0');

    /**
     * 判断上下午：小时 >= 12 为 PM，否则为 AM
     */
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    /**
     * 获取页面中用于显示秒和上下午的元素（id="secondsDisplay"）
     * 该元素位于步数板块的正上方
     */
    const secondsDisplay = document.getElementById('secondsDisplay');

    /**
     * 如果该元素存在，则更新其内容为 "秒数 上下午"，例如 "45 PM"
     */
    if (secondsDisplay) {
        secondsDisplay.innerText = `${seconds} ${ampm}`;
    }
    // ========== 新增结束 ==========
}

/**
 * 页面加载时立即执行一次，避免延迟显示
 */
updateClock();

/**
 * 设置定时器，每秒（1000 毫秒）刷新一次时间与日期
 * 同时也刷新秒和上下午
 */
setInterval(updateClock, 1000);