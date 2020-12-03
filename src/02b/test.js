import assert from 'assert';
import { solver } from './functions.js';

const inputFile = process.env.input;

it('should work', () => {
    assert.equal(solver(inputFile), 705);
});
