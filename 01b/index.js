import fs from 'fs';

let result = -1;
let result2 = -1;
let result3 = -1;

const year = 2020;

try {
    
    const sortedList = readInputFileAsSortedIntList();
    
    sortedList.forEach((alpha) => {
        const sublist = sortedList.filter(x => x > alpha);
        if(sublist.includes(alpha)) {
           throw ('wtf - this shouldn\t happen....'); 
        }
        const candidate = findCounterpart(sublist, year-alpha);
        if (candidate > -1) {
            result = alpha;
            result2 = candidate;
            result3 = year - alpha - candidate;
            return;
        }
    });

    console.log(result);
    console.log(result2);
    console.log(result3);

    if(result + result2 + result3 != year) {
        throw('these results don\'t add up...');
    }

    console.log(result * result2 * result3);
} catch (err) {
    console.error(err);
}

function findCounterpart(ascending, target) {
    let result = -1;

    ascending.forEach( alpha => {
        const omega = target - alpha;
        if(ascending.includes(omega)) {
            result = alpha;
            return result;
        }
    })
    return result; 
}

function readInputFileAsSortedIntList() {
    const ascending = [];
    const input = fs.readFileSync('input.txt', 'utf8');
    input.split('\n').forEach( line => {
        ascending.push(parseInt(line));
    });
    return ascending.sort();
}
