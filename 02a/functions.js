import fs from 'fs';

function solver(file) {
    let validPasswords = -1;

    try {
        const pwList = readInputFile(file);
        pwList.forEach( row => {
            const policy = row.substring(0, row.indexOf(':'));
            const pw = row.substring(row.indexOf(':')+2);

            const policy_min = policy.substring(0, policy.indexOf('-'));
            const policy_max = policy.substring(policy.indexOf('-')+1, policy.indexOf(' '));
            const policy_char = policy.substring(policy.indexOf(' ')+1);

            const occurances = pw.length - pw.replace(new RegExp(policy_char, 'g'), '').length
            if (occurances <= policy_max &&  occurances >=policy_min) {
                validPasswords++;
            }
        });

        if(validPasswords == -1) {
            throw('there\'s probably at least one valid pw in the list...');
        }

       return validPasswords;
    } catch (err) {
        console.error(err);
    }
}

function readInputFile(file) {
    const result = [];
    const input = fs.readFileSync(file, 'utf8');
    input.split('\n').forEach( line => {
        result.push(line);
    });

    if (result.length < 1) {
        throw('error reading input: ', result.length);
    }

     return result;
}

export { solver, readInputFile };