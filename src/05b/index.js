/* eslint-disable max-len */
import fs from 'fs';
import {deserializeBarcode} from '../05a/functions.js';

const inputFile = process.argv[2];

let seatIds = [];
const possible = [];

if (inputFile) {
    const data = fs.readFileSync(inputFile, 'utf8');
    seatIds = data.split('\n').map((datum) => parseInt(deserializeBarcode(datum).seatId));
    // console.log(seatIds.length);

    const max = seatIds.sort((a, b) => a - b)[seatIds.length-1];
    const min = seatIds.sort((a, b) => a - b)[0];

    // console.log(max);
    // console.log(min);
    for (let i=min; i < max; i++) {
        possible.push(i);
    }

    // console.log(possible.length);
    const missing = possible.filter((seatId) => !seatIds.includes(seatId));
    console.log(missing);
}

