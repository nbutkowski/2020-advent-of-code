/* eslint-disable max-len */
import should from 'should'; // eslint-disable-line no-unused-vars
import {binaryCrawl, deserializeBarcode} from './functions.js';

describe('05a', () => {
    describe('#binaryCrawl()', () => {
        const tests = [
            {str: '1010011', expected: 44},
            {str: '010', expected: 5},
        ];
        tests.forEach((test) => {
            describe(`given'${test.str}'`, () => {
                it(`shuold return ${test.expected}`, () => {
                    (test.expected).should.equal(binaryCrawl(0, Math.pow(2, test.str.length)-1, test.str));
                });
            });
        });
    });
    describe('#deserializeBarcode()', () => {
        const tests = [
            {barcode: 'FBFBBFFRLR', expected: {row: 44, column: 5, seatId: 357}},
            {barcode: 'BFFFBBFRRR', expected: {row: 70, column: 7, seatId: 567}},
            {barcode: 'FFFBBBFRRR', expected: {row: 14, column: 7, seatId: 119}},
            {barcode: 'BBFFBBFRLL', expected: {row: 102, column: 4, seatId: 820}},
        ];
        tests.forEach((test) => {
            describe(`given'${test.barcode}'`, () => {
                it(`return row:${test.expected.row}, column:${test.expected.column}, seatId:${test.expected.seatId}`, () => {
                    (test.expected).should.deepEqual(deserializeBarcode(test.barcode));
                });
            });
        });
    });
});
