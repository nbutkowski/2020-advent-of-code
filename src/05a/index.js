/* eslint-disable max-len */
import {readInputFile} from '../common.js';
import {deserializeBarcode} from './functions.js';

const file = process.argv[2];

if (file) {
    const result = readInputFile(file, '\n').reduce((max, datum) => {
        console.log(`${typeof max} ${max}`);
        const boardingPass = deserializeBarcode(datum);
        return (boardingPass.seatId > max) ? boardingPass.seatId : max;
    }, 0);

    console.log(result);
}

