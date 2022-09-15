/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const n = changed.length;
    if (n % 2) return [];
    
    const results = [];
    changed.sort((a, b) => a - b);
    const numberMap = new Map();
    
    for (let i = 0; i < changed.length; i++) {
        numberMap.has(changed[i]) ? numberMap.set(changed[i], numberMap.get(changed[i]) + 1) : numberMap.set(changed[i], 1);
    }

    for (let j = 0; j < changed.length; j++) {
        if (changed[j] === 0 && numberMap.get(changed[j]) >= 2) {
            numberMap.set(changed[j], numberMap.get(changed[j]) - 2);
            results.push(changed[j]);
        }
        else if (changed[j] > 0 && numberMap.get(changed[j]) && numberMap.get(changed[j] * 2)) {
            numberMap.set(changed[j], numberMap.get(changed[j]) - 1);
            numberMap.set(changed[j] * 2, numberMap.get(changed[j] * 2) - 1);
            results.push(changed[j]);
        }
    }
    return results.length === n/2 ? results : [];
};