/* eslint-disable max-len */
import {removeNewline} from '../06a/functions.js';

function solver(group) {
    const uniqueChars = [...removeNewline(group)].reduce((chars, candidate) => chars.has(candidate) ? chars : chars.add(candidate), new Set());
    const members = group.split(/\n/g);

    return Array.from(uniqueChars).reduce((commonChars, char) => {
        return doAllMembersContain(char, members) ? commonChars += char : commonChars;
    }, '');
}

function doAllMembersContain(char, members) {
    return [...members].reduce((truth, member) => truth && member.includes(char), true);
}

export {solver};
