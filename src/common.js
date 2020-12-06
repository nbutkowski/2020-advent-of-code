import fs from 'fs';

function readInputFile(file, delim) {
    const result = [];
    const input = fs.readFileSync(file, 'utf8');
    input.split(delim).forEach( (line) => {
        result.push(line);
    });

    if (result.length < 1) {
        throw ('error reading input: ', result.length);
    }

    return result;
}

export {readInputFile};
