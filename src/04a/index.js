import fs from 'fs';
import {countValidPassports, parsePassports} from './functions.js';

const inputFile = process.argv[2];

if (inputFile) {
    const data = parsePassports(fs.readFileSync(inputFile, 'utf8'));
    console.log(countValidPassports(data).length);
}
