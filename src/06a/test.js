/* eslint-disable max-len */
import {removeNewline, findUniqueChars} from './functions.js';

import should from 'should'; // eslint-disable-line no-unused-vars

const tests =
[
    {str: 'abc', expected: 3},
    {str: `a
b
c`, expected: 3},
    {str: `ab
ac`, expected: 3},
    {str: `a
a
a
a`, expected: 1},
    {str: 'b', expected: 1},
];

describe('06a', () => {
    describe('#findUniqueChars', () => {
        tests.forEach((test) => {
            it(`should return ${test.expected}`, () => {
                (test.expected).should.equal(findUniqueChars(removeNewline(test.str)).length);
            });
        });
    });
});
