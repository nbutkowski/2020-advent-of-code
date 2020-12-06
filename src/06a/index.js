import {readInputFile} from '../02a/functions.js';

const inputFile = process.argv[2];

if (inputFile) {
    const groupCounts = readInputFile(inputFile);

    console.log(groupCounts);
}

