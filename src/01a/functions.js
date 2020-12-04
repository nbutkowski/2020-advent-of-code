import fs from 'fs';

function solver(inputFile) {
    const ascending = [];
    let result = -1;
    const target = 2020;

    try {
        const input = fs.readFileSync(inputFile, 'utf8');
        input.split('\n').forEach( (line) => {
            ascending.push(parseInt(line));
        });

        ascending.sort();

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
