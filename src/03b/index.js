import fs from 'fs';
import { solver } from './functions.js';

const inputFile = process.argv[2];
if (inputFile) {
    const map = fs.readFileSync(inputFile, 'utf8');
    const slopes = [
        {x:1, y:1},
        {x:3, y:1},
        {x:5, y:1},
        {x:7, y:1},
        {x:1, y:2}
    ];

    let total = 1;

    slopes.forEach( slope => {
        const result = solver(map, slope.x, slope.y);
        total *= result;
    });

    console.log(total);
}
