/* eslint-disable max-len */
import {readInputFile} from '../common.js';
import {deserializeBarcode} from '../05a/functions.js';

const file = process.argv[2];

if (file) {
    const possible = [];
    const seatIds = readInputFile(file, '\n').map((datum, index) => {
        possible.push(index);
        return parseInt(deserializeBarcode(datum).seatId);
    });

    const missing = possible.filter((seatId) => !seatIds.includes(seatId));
    console.log(missing);
}
