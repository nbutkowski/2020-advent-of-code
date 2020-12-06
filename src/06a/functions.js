/* eslint-disable max-len */

function countUniqueChars(input) {
    return [...removeNewline(input)].reduce((uniqueChars, char) => !uniqueChars.includes(char) ? uniqueChars += char : uniqueChars, '').length;
}

function removeNewline(input) {
    return input.replace(/\n/g, '');
}

export {countUniqueChars};
