import assert from 'assert';
import {solver} from './functions.js';

const inputFile = process.env.input;

it('should work', () => {
    console.log('here');
    console.log(inputFile);
    assert.equal(solver(inputFile), 627);
});
