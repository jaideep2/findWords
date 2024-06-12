# findWords
Weekend Health Challenge

## Description

This project implements a function named `findWords` that accepts two arguments: an input string and a dictionary. The function returns an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

## High-Level Approach

1. **Count the Letters in the Input String**: Use a frequency counter to count the occurrences of each letter in the input string.
2. **Check Each Word in the Dictionary**: For each word in the dictionary, use a frequency counter to count the occurrences of each letter in the word.
3. **Compare Counters**: Check if the word's letter count can be satisfied using the letter count from the input string. This means that for every letter in the word, the input string should have at least as many of that letter.
4. **Store Valid Words**: If the word can be formed, add it to the result list.

## Installation and Running the Code

1. Install [Node.js](nodejs.org) then TypeScript:
```bash
npm install -g typescript
```

2. Clone the Repository:
```bash
git clone <repository-url>
cd find-words
```

3. Install Dependencies:
```bash
npm install
```

4. Compile the TypeScript code:
```bash
npm run build
```

5. Run the tests:
```bash
node dist/findWords.test.js
```

