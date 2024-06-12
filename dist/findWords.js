"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWords = void 0;
/**
 * Function to find words from a dictionary that can be formed by rearranging
 * some or all of the letters in the input string.
 *
 * @param {string} inputString - A string consisting of lowercase English letters.
 * @param {string[]} dictionary - An array of words to check against the input string.
 * @returns {string[]} - An array of words that can be formed from the input string.
 */
function findWords(inputString, dictionary) {
    /**
     * Helper function to create a frequency map of letters in a string.
     *
     * @param {string} str - The input string.
     * @returns {{ [key: string]: number }} - The frequency map of the letters.
     */
    function createFrequencyMap(str) {
        const freqMap = {};
        for (const char of str) {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        return freqMap;
    }
    // Create a frequency map for the input string
    const inputFreqMap = createFrequencyMap(inputString);
    // Result array to store words that can be formed
    const result = [];
    // Check each word in the dictionary
    for (const word of dictionary) {
        // Create a frequency map for the current word
        const wordFreqMap = createFrequencyMap(word);
        // Flag to check if the word can be formed
        let canFormWord = true;
        // Check if the input string has enough of each letter to form the word
        for (const char in wordFreqMap) {
            if (!inputFreqMap[char] || inputFreqMap[char] < wordFreqMap[char]) {
                canFormWord = false;
                break;
            }
        }
        // If the word can be formed, add it to the result
        if (canFormWord) {
            result.push(word);
        }
    }
    return result;
}
exports.findWords = findWords;
