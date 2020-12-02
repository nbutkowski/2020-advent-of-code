import fs from 'fs';

let validPasswords = 0;

try {
    const pwList = readInputFile();

    pwList.forEach( row => {
        const policy = row.substring(0, row.indexOf(':'));
        const pw = row.substring(row.indexOf(':')+2);

        const policy_first_position = parseInt(policy.substring(0, policy.indexOf('-')))-1;
        const policy_second_position = parseInt(policy.substring(policy.indexOf('-')+1, policy.indexOf(' ')))-1;
        const policy_char = policy.substring(policy.indexOf(' ')+1);

        if(policy_first_position < 0 || policy_second_position < 0) {
            throw ('wtf');
        }

        const first_character = pw.charAt(policy_first_position);
        const second_character = pw.charAt(policy_second_position);

        if (evaluatePw(first_character, second_character, policy_char)) {
            validPasswords++;
        }
    });

    if(validPasswords == -1) {
        throw('there\'s probably at least one valid pw in the list...');
    }

    console.log(validPasswords);
} catch (err) {
    console.error(err);
}

function evaluatePw(a, b, c) {
    return (a == c && b != c) || (a != c && b == c)
}

function readInputFile() {
    const result = [];
    const input = fs.readFileSync('input.txt', 'utf8');
    input.split('\n').forEach( line => {
        result.push(line);
    });

    if (result.length < 1) {
        throw('error reading input: ', result.length);
    }

     return result;
}