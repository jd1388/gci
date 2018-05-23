const program = require('commander');

program
    .command('add-program <program> <path>')
    .alias('ap')
    .description('Add program')
    .action((program, path) => {
        console.log(`${program} is stored at ${path}`);
    });

program
    .command('open-program <program>')
    .alias('op')
    .description('Open program')
    .action(program => {
        console.log(`${program} would have been opened`);
    });

program
    .command('remove-program <program>')
    .alias('rp')
    .description('Remove program')
    .action(program => {
        console.log(`${program} would have been removed`)
    });

program
    .command('set-browser <program>')
    .alias('sb')
    .description('Set default browser')
    .action(program => {
        console.log(`${program} would have been set as default browser`);
    });

program
    .version('1.0.0')
    .help()
    .parse(process.argv);
