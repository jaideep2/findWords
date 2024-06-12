import { findWords } from './findWords';

// Test cases
console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]

console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]

// Additional test cases
console.log(findWords("a", ["a", "aa", "aaa"]));
// Expected output: ["a"]

console.log(findWords("aaa", ["a", "aa", "aaa", "aaaa"]));
// Expected output: ["a", "aa", "aaa"]

console.log(findWords("", ["a", "b", "c"]));
// Expected output: []

console.log(findWords("abc", ["a", "ab", "abc", "abcd"]));
// Expected output: ["a", "ab", "abc"]

console.log(findWords("xyz", ["xy", "yz", "xz", "xyz", "yxz"]));
// Expected output: ["xy", "yz", "xz", "xyz", "yxz"]
