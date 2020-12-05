/* eslint-disable max-len */

const requiredFields = [
    'byr', // (Birth Year)
    'iyr', // (Issue Year)
    'eyr', // (Expiration Year)
    'hgt', // (Height)
    'hcl', // (Hair Color)
    'ecl', // (Eye Color)
    'pid', // (Passport ID)
    // 'cid', // (Country ID)
];

const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

function validate(passport) {
    const fields = passport.map((field) => field.split(':'));
    const matchedFields = requiredFields.filter((requiredField) => {
        return fields.reduce((result, field) => {
            return requiredField == field[0] && checkField(...field) ? true: result;
        }, false);
    });
    return matchedFields.length == requiredFields.length ? true : false;
}

function checkField(key, value) {
    if (key == 'byr') {
        return checkByr(value);
    } else if (key == 'iyr') {
        return checkIyr(value);
    } else if (key == 'eyr') {
        return checkEyr(value);
    } else if (key == 'hgt') {
        return checkHgt(value);
    } else if (key == 'hcl') {
        return checkHcl(value);
    } else if (key == 'ecl') {
        return checkEcl(value);
    } else if (key == 'pid') {
        return checkPid(value);
    } else { // shouldn't reach this spot
        return false;
    }
}

function range(value, min, max) {
    try {
        const number = parseInt(value);
        return number <= max && number >= min;
    } catch (err) {
        console.log(err);
        return false;
    }
}

function checkByr(value) {
    return range(value, 1920, 2002);
}

function checkIyr(value) {
    return range(value, 2010, 2020);
}

function checkEyr(value) {
    return range(value, 2020, 2030);
}

function checkHgt(value) {
    try {
        const number = value.substring(0, value.length-2);
        return (value.endsWith('cm') && range(number, 150, 193) ) ||
            (value.endsWith('in') && range(number, 59, 76));
    } catch (err) {
        console.log(err);
        return false;
    }
}

function checkHcl(value) {
    try {
        const regex = /^([0-9]|[a-f]){6}$/g;
        return value.charAt(0) == '#' && regex.test(value.substring(1, value.length));
    } catch (err) {
        console.log(err);
        return false;
    }
}

function checkEcl(value) {
    return eyeColors.reduce((result, color) => value == color ? true : result, false);
}

function checkPid(value) {
    try {
        return (/^[0-9]{9}$/g).test(value);
    } catch (err) {
        console.log(err);
        return false;
    }
}

function countValidPassports(parsedPassportsList) {
    return parsedPassportsList.reduce((validList, parsedPassport) =>
        validate(parsedPassport) ?
            [...validList, parsedPassport] :
            validList, []);
}

export {checkByr, checkIyr, checkEyr, checkHgt, checkHcl, checkEcl, checkPid, countValidPassports, requiredFields, validate};
