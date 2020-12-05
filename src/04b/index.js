import fs from 'fs';
import {parsePassports} from '../04a/functions.js';
import {countValidPassports} from './functions.js';

const inputFile = process.argv[2];

if (inputFile) {
    const data = parsePassports(fs.readFileSync(inputFile, 'utf8'));
    console.log(countValidPassports(data).length);
}
