import fs from 'fs';
import {deserializeBarcode} from './functions.js';

const inputFile = process.argv[2];

if (inputFile) {
    const data = fs.readFileSync(inputFile, 'utf8');
    let max=-1;
    data.split('\n').forEach((datum) => {
        const boardingPass = deserializeBarcode(datum);
        if (boardingPass.seatId > max) {
            max = boardingPass.seatId;
        };
    });
    console.log(max);
}

