import assert from 'assert';
import should from 'should';
import { solver, sled, getTerrain, getHeight, getWidth } from './functions.js';

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

const expectedResult = 7;

describe('03a', () => {
    describe('#getWidth()', () => {
        describe('given example', () => {
            it('should return 11', () => {
                (11).should.equal(getWidth(example));
            });
        });
    });
    describe('#getHeight()', () => {
        describe('given example', () => {
            it('should return 11', () => {
                (11).should.equal(getHeight(example));
            });
        });
    });
    describe('#sled()', () => {
        const tests = [
            { args: [0,0,10], expected: {x: 3, y: 1} },
            { args: [1,1,10], expected: {x: 4, y: 2} },
            { args: [10,0,10], expected: {x: 3, y: 1} },
        ];
        tests.forEach(test => {
            describe(`given ${test.args}`, () => {
                it(`should return { ${test.expected.x}, ${test.expected.y} }`, () => {
                    const result = sled(...test.args);
                    (result.x).should.equal(test.expected.x);
                    (result.y).should.equal(test.expected.y);
                });
            });
        });
    });
    describe('#getTerrian', () => {
        const tests = [
            { args: [0, 0, example], expected: '.'},
            { args: [0, 2, example], expected: '#'}, 
            { args: [10, 11, example], expected: '.'},
            { args: [11, 11, example], expected: '#'}
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
        it('solver should work', () => {
            assert.equal(solver(example), expectedResult);
        });
    });
});

