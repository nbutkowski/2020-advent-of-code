import {solver} from './functions.js';

const inputFile = process.argv[2];
if (inputFile) {
    console.log(solver(inputFile));
}
