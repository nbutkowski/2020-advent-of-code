import should from 'should'; // eslint-disable-line no-unused-vars
import {countValidPassports, parsePassports} from './functions.js';

const example =
`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

describe('04a', () => {
    describe('#parsePassports', () => {
        const expectedResult = 4;
        it(`should return ${expectedResult}`, () => {
            (expectedResult).should.equal(parsePassports(example).length);
        });
    });
    describe('#countValidPassports', () => {
        const expectedResult = 2;
        it(`should return ${expectedResult}`, () => {
            const passports = parsePassports(example);
            // eslint-disable-next-line max-len
            (expectedResult).should.equal(countValidPassports(passports).length);
        });
    });
});
