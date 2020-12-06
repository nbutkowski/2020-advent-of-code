import {readInputFile} from '../common.js';

function solver(file) {
    let validPasswords = -1;

    try {
        const pwList = readInputFile(file, '\n');
        pwList.forEach( (row) => {
            const policy = row.substring(0, row.indexOf(':'));
            const pw = row.substring(row.indexOf(':')+2);

            const policyMin = policy.substring(0, policy.indexOf('-'));
            const policyMax = policy.substring(
                policy.indexOf('-')+1, policy.indexOf(' '));
            const policyChar = policy.substring(policy.indexOf(' ')+1);

            const occurances = pw.length - pw.replace(
                new RegExp(policyChar, 'g'), '').length;

            if (occurances <= policyMax && occurances >=policyMin) {
                validPasswords++;
            }
        });

        if (validPasswords == -1) {
            throw new Error('there\'s at least one valid pw in the list...');
        }

        return validPasswords;
    } catch (err) {
        console.error(err);
    }
}

export {solver};
