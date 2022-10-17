/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const sentenceSet = new Set([...sentence]);
    return sentenceSet.size === 26;
};