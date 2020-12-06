/* eslint-disable max-len */
import {readInputFile} from '../common.js';
import {countUniqueChars} from './functions.js';

const inputFile = process.argv[2];

if (inputFile) {
    const groupCounts = readInputFile(inputFile, '\n\n').reduce((sum, group) => sum += countUniqueChars(group), 0);

    console.log(groupCounts);
}

