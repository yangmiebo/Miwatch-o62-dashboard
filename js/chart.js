/**
 * ==================================================
 * 文件名称：chart.js
 *
 * 功能：
 * 步数模块
 *
 * 当前版本：
 * 数据结构预留（仅定义了今日步数和目标，以及完成率计算）
 *
 * 后续功能：
 * - 步数环（用于显示进度）
 * - 卡路里
 * - 距离统计
 * - 运动时间
 * - 活动进度
 * ==================================================
 */

/**
 * 今日运动数据对象
 */
const stepData = {

    /**
     * 当前步数（模拟数据：6850 步）
     */
    current: 6850,

    /**
     * 每日目标步数（10000 步）
     */
    target: 10000
};

/**
 * 计算步数完成率（百分比）
 * 返回 0~100 的整数
 */
function getStepPercent() {

    return Math.round(
        stepData.current / stepData.target * 100
    );
}

/**
 * 在控制台输出步数调试信息
 */
console.log(
    '[Steps]',
    stepData.current,
    '/',
    stepData.target,
    '(' + getStepPercent() + '%)'
);

/*更新步数*/
function updateSteps() {
    const stepsElement = document.getElementById('steps');
    if (stepsElement) {
        // 可以从 stepData.current 读取，也可以模拟变化
        stepsElement.innerText = stepData.current;
    }
}

// 初始更新
updateSteps();