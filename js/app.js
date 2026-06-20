/**
 * ==================================================
 * 文件名称：app.js
 *
 * 功能：
 * 项目入口文件
 *
 * 负责：
 * 1. 初始化仪表盘
 * 2. 启动模块（目前只包含心率模拟）
 * 3. 管理全局状态（暂无）
 * 4. 管理定时器（心率定时刷新）
 *
 * 后续可扩展：
 * - 小米账号同步
 * - 健康数据同步
 * - 蓝牙状态
 * - 消息通知
 * ==================================================
 */

/**
 * 模拟心率数据生成函数
 *
 * 当前仅用于 UI 展示，后续可替换为小米设备实时心率
 */
function randomHeart() {

    /**
     * 生成 65~84 之间的随机整数（包含 65，不包含 84 上限，实际范围为 65~83，但写法为 65 + Math.floor(Math.random() * 20)，最大值为 65+19=84）
     * 注意：Math.random()*20 得到 0~19.999，floor 后为 0~19，所以最终值 65~84。
     */
    const bpm = 65 + Math.floor(Math.random() * 20);

    /**
     * 更新页面中 id="heart" 元素的文本内容为心率值
     */
    document.getElementById('heart').innerText = bpm;

    // 在控制台输出心率日志，便于调试
    console.log('[Heart]', bpm, 'BPM');
}

/**
 * 仪表盘初始化函数
 */
function initDashboard() {

    // 打印启动日志
    console.log('================================');
    console.log('Mi Watch Dashboard Started');
    console.log('Version: 1.0.0');
    console.log('================================');

    /**
     * 首次加载时立即显示一个随机心率
     */
    randomHeart();

    /**
     * 设置定时器，每 3 秒（3000 毫秒）刷新一次心率
     */
    setInterval(randomHeart, 3000);
}

/**
 * 启动应用（调用初始化函数）
 */
initDashboard();