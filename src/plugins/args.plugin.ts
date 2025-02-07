import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const args = yargs(hideBin(process.argv))
    .option('b', {
        'alias': 'base',
        type: 'number',
        demandOption: true,
        'describe': 'Multiplication table base'
    })
    .option('l', {
        'alias': 'list',
        type: 'number',
        default: 10,
        description: 'Multiplication table limit'
    })
    .option('fn', {
        'alias': 'file name',
        type: 'string',
        default: 'table',
        description: 'File name'
    })
    .check((argv, options) => {
        if (argv.b < 1) {
            throw 'Error: base must be greater than 0'
        };

        return true;
    })
    .parseSync();

