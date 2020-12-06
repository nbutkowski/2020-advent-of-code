/* eslint-disable max-len */
import {readInputFile} from '../common.js';

function solver(file) {
    let result = -1;
    let result2 = -1;
    let result3 = -1;

    const year = 2020;

    try {
        const sortedList = readInputFile(file, '\n').map((line) => parseInt(line)).sort();
        
        sortedList.forEach((alpha) => {
            const sublist = sortedList.filter((x) => x > alpha);
            if (sublist.includes(alpha)) {
                throw new Error('wtf - this shouldn\t happen....');
            }
            const candidate = findCounterpart(sublist, year-alpha);
            if (candidate > -1) {
                result = alpha;
                result2 = candidate;
                result3 = year - alpha - candidate;
                return;
            }
        });

        console.log('\t'+result);
        console.log('\t'+result2);
        console.log('\t'+result3);

        if (result + result2 + result3 != year) {
            throw new Error('these results don\'t add up...');
        }

        return result * result2 * result3;
    } catch (err) {
        console.error(err);
    }
}

function findCounterpart(ascending, target) {
    let result = -1;

    ascending.forEach( (alpha) => {
        const omega = target - alpha;
        if (ascending.includes(omega)) {
            result = alpha;
            return result;
        }
    });
    return result;
}

export {solver};
