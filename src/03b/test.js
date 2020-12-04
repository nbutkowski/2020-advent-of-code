import assert from 'assert';
import should from 'should'; //eslint-disable-line no-unused-vars
import { solver, getTerrain, getHeight, getWidth } from './functions.js';

const example = 
`..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`;

describe('03b', () => {
    describe('#getWidth()', () => {
        describe('given example', () => {
            it('should return the width', () => {
                (11).should.equal(getWidth(example));
            });
        });
    });
    describe('#getHeight()', () => {
        describe('given example', () => {
            it('should return the height', () => {
                (11).should.equal(getHeight(example));
            });
        });
    });
    describe('#getTerrian', () => {
        const tests = [
            { args: [0, 0, example], expected: '.'},
            { args: [1, 0, example], expected: '.'},
            { args: [2, 0, example], expected: '#'}, 
            { args: [3, 0, example], expected: '#'}, 
            { args: [4, 0, example], expected: '.'}, 
            { args: [5, 0, example], expected: '.'}, 
            { args: [6, 0, example], expected: '.'}, 
            { args: [7, 0, example], expected: '.'}, 
            { args: [8, 0, example], expected: '.'}, 
            { args: [9, 0, example], expected: '.'}, 
            { args: [10, 0, example], expected: '.'}, 
            { args: [0, 1, example], expected: '#'},
            { args: [1, 1, example], expected: '.'},
            { args: [2, 1, example], expected: '.'}, 
            { args: [3, 1, example], expected: '.'}, 
            { args: [4, 1, example], expected: '#'}, 
            { args: [0, 2, example], expected: '.'},
            { args: [1, 2, example], expected: '#'},
            { args: [2, 2, example], expected: '.'}, 
            { args: [3, 2, example], expected: '.'}, 
            { args: [4, 2, example], expected: '.'}, 
            { args: [5, 2, example], expected: '.'},
            { args: [6, 2, example], expected: '#'},
            { args: [7, 2, example], expected: '.'},
            { args: [11, 0, example], expected: '.'},
            { args: [12, 0, example], expected: '.'},
            { args: [13, 0, example], expected: '#'},
            { args: [14, 0, example], expected: '#'},
            { args: [15, 0, example], expected: '.'},
            { args: [10, 1, example], expected: '.'},
            { args: [10, 9, example], expected: '#'},
            { args: [10, 10, example], expected: '#'},
        ];
        tests.forEach(test => {
            describe(`given ${test.args[0]}, ${test.args[1]}`, () => {
                it(`should return ${test.expected}`, () => {
                    const result = getTerrain(...test.args);
                    (test.expected).should.equal(result);
                });
            });
        });
    });
    describe('#solver()', () => {
        const tests = [
            {args: [1,1], expected: 2},
            {args: [3,1], expected: 7},
            {args: [5,1], expected: 3},
            {args: [7,1], expected: 4},
            {args: [1,2], expected: 2}
        ];

        tests.forEach(test => {
            describe(`given slope of ${test.args[0]}, ${test.args[1]}`, () => {
                it(`solver should return ${test.expected} tree(s)`, () => {
                    assert.equal(solver(example, test.args[0], test.args[1]), test.expected);
                });
            });
        });
    });
});

