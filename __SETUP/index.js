import fs from 'fs';

const inputFile = process.argv[2];

if (inputFile) {
    const data = fs.readFileSync(inputFile, 'utf8');

    console.log(data);
}

