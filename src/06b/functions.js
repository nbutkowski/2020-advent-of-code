/* eslint-disable max-len */
import {removeNewline, findUniqueChars} from '../06a/functions.js';

function solver(group) {
    const uniqueChars = [...findUniqueChars(removeNewline(group))];
    const members = group.split(/\n/g);

    return uniqueChars.reduce((commonChars, char) => {
        return doAllMembersContain(char, members) ? commonChars += char : commonChars;
    }, '');
}

function doAllMembersContain(char, members) {
    return members.reduce((truth, member) => truth && member.includes(char), true);
}

export {solver};
