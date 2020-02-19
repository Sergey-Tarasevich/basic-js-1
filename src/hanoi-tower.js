module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turnSpeedInSeconds = turnsSpeed / 3600;
    const turnCount = 2 ** disksNumber -1;
    return {turns: turnCount, seconds: turnCount / turnSpeedInSeconds};
}