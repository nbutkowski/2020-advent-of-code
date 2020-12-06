/* eslint-disable max-len */
import {readInputFile} from '../common.js';
import {removeNewline, findUniqueChars} from './functions.js';

const inputFile = process.argv[2];

if (inputFile) {
    const groupCounts = readInputFile(inputFile, '\n\n').reduce((sum, group) => sum += findUniqueChars(removeNewline(group)).length, 0);

    console.log(groupCounts);
}

