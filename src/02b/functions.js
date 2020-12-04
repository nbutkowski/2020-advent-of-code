import {readInputFile} from '../02a/functions.js';

function solver(file) {
    let validPasswords = 0;

    try {
        const pwList = readInputFile(file);

        pwList.forEach( (row) => {
            const policy = row.substring(0, row.indexOf(':'));
            const pw = row.substring(row.indexOf(':')+2);

            const policyFirstPosition = parseInt(
                policy.substring(0, policy.indexOf('-')))-1;
            const policySecondPosition = parseInt(
                policy.substring(policy.indexOf('-')+1, policy.indexOf(' ')))-1;
            const policyChar = policy.substring(policy.indexOf(' ')+1);

            if (policyFirstPosition < 0 || policySecondPosition < 0) {
                throw new Error('wtf');
            }

            const firstCharacter = pw.charAt(policyFirstPosition);
            const secondCharacter = pw.charAt(policySecondPosition);

            if (evaluatePw(firstCharacter, secondCharacter, policyChar)) {
                validPasswords++;
            }
        });

        if (validPasswords == -1) {
            // eslint-disable-next-line max-len
            throw new Error('there\'s probably at least one valid pw in the list...');
        }

        return validPasswords;
    } catch (err) {
        console.error(err);
    }
}

function evaluatePw(a, b, c) {
    return (a == c && b != c) || (a != c && b == c);
}

export {solver};
