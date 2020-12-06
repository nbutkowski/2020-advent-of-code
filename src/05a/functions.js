/* eslint-disable max-len */
function deserializeBarcode(barcode) {
    const r = decodeRow(barcode.substring(0, 7));
    const c = decodeColumn(barcode.substring(7, 10));
    const s = decodeSeatId(r, c);
    return {
        row: r,
        column: c,
        seatId: s,
    };
}

function binaryCrawl(min, max, binary) {
    const avg = (max+min) / 2;

    if (binary.charAt(0) == 1) {
        max = Math.floor(avg);
        if (binary.length == 0) {
            return max;
        }
    } else {
        min = Math.ceil(avg);
        if (binary.length == 0) {
            return min;
        }
    }

    return binaryCrawl(min, max, binary.substring(1, binary.length));
}

function toBinaryString(text, flag) {
    return [...text].reduce((number, char) => char != flag ? number+='0' : number+='1', '');
}

function decodeRow(text) {
    const binary = toBinaryString(text, 'F');
    return binaryCrawl(0, 127, binary);
}

function decodeColumn(text) {
    const binary = toBinaryString(text, 'L');
    return binaryCrawl(0, 7, binary);
}

function decodeSeatId(row, column) {
    return 8 * row + column;
}


export {binaryCrawl, deserializeBarcode};
