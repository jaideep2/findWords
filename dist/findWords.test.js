"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findWords_1 = require("./findWords");
// Test cases
console.log((0, findWords_1.findWords)("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]
console.log((0, findWords_1.findWords)("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]
// Additional test cases
console.log((0, findWords_1.findWords)("a", ["a", "aa", "aaa"]));
// Expected output: ["a"]
console.log((0, findWords_1.findWords)("aaa", ["a", "aa", "aaa", "aaaa"]));
// Expected output: ["a", "aa", "aaa"]
console.log((0, findWords_1.findWords)("", ["a", "b", "c"]));
// Expected output: []
console.log((0, findWords_1.findWords)("abc", ["a", "ab", "abc", "abcd"]));
// Expected output: ["a", "ab", "abc"]
console.log((0, findWords_1.findWords)("xyz", ["xy", "yz", "xz", "xyz", "yxz"]));
// Expected output: ["xy", "yz", "xz", "xyz", "yxz"]
