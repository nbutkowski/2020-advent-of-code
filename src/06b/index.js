/* eslint-disable max-len */
import {readInputFile} from '../common.js';
import {solver} from './functions.js';

const inputFile = process.argv[2];

if (inputFile) {
    const groups = readInputFile(inputFile, '\n\n');
    const sum = groups.reduce((sum, group) => sum += solver(group).length, 0);
    console.log(sum);
}
