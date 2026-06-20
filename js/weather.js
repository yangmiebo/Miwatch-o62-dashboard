/**
 * ==================================================
 * 文件名称：weather.js
 *
 * 功能：
 * 显示天气信息
 *
 * 当前版本：
 * 模拟天气数据（固定温度 26°C）
 *
 * 后续版本：
 * 可接入 OpenWeather API、和风天气 API 或高德天气 API
 *
 * 计划显示：
 * - 温度
 * - 天气图标
 * - 湿度
 * - 风速
 * ==================================================
 */

/**
 * 更新天气信息函数
 */
function updateWeather() {

    /**
     * 模拟温度值（后续替换为 API 返回数据）
     */
    const temperature = 26;

    /**
     * 更新页面中 id="weather" 的元素，显示格式为 "26°"
     */
    document.getElementById('weather').innerText = `${temperature}°`;

    // 在控制台输出天气日志
    console.log('[Weather]', temperature + '°C');
}

/**
 * 执行更新（页面加载时立即更新）
 */
updateWeather();