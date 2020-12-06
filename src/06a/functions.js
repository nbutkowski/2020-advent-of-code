/* eslint-disable max-len */

function findUniqueChars(input) {
    return [...input].reduce((findUniqueChars, char) => !findUniqueChars.includes(char) ? findUniqueChars += char : findUniqueChars, '');
}

function removeNewline(input) {
    return input.replace(/\n/g, '');
}

export {removeNewline, findUniqueChars};
