
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

function parsePassports(passports) {
    const rawList = passports.split('\n\n');
    return rawList.reduce((parsed, raw) => [...parsed, raw.split(/\s+/)], []);
}

function validate(passport) {
    const fields = passport.map((field) => field.split(':')[0]);
    // eslint-disable-next-line max-len
    const missingFields = requiredFields.filter((requiredField) => !fields.includes(requiredField));
    return missingFields.length == 0 ? true : false;
}

function countValidPassports(parsedPassportsList) {
    // eslint-disable-next-line max-len
    return parsedPassportsList.reduce((validList, parsedPassport) => {
        // eslint-disable-next-line max-len
        return validate(parsedPassport) ? [...validList, parsedPassport] : validList;
    }, []);
}

export {countValidPassports, parsePassports, requiredFields, validate};
