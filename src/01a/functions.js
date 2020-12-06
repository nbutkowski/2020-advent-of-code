/* eslint-disable max-len */
import {readInputFile} from '../common.js';

function solver(file) {
    let ascending = [];
    let result = -1;
    const target = 2020;

    try {
        ascending = readInputFile(file, '\n').map((line) => parseInt(line)).sort();

        ascending.forEach( (alpha) => {
            const omega = target - alpha;
            if (ascending.includes(omega)) {
                result = alpha;
            }
        });
        return result * (target - result);
    } catch (err) {
        console.error(err);
    }
}

export {solver};
