import {solver} from './functions.js';

import should from 'should'; // eslint-disable-line no-unused-vars

const tests =
[
    {str: 'abc', expected: 3},
    {str: `a
b
c`, expected: 0},
    {str: `ab
ac`, expected: 1},
    {str: `a
a
a
a`, expected: 1},
    {str: 'b', expected: 1},
];

describe('06b', () => {
    describe('#solver', () => {
        tests.forEach((test) => {
            it(`should return ${test.expected}`, () => {
                (test.expected).should.equal(solver(test.str).length);
            });
        });
    });
});
