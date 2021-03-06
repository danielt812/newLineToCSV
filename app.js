const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const log = console.log;

figlet.text(
  'CSV Utility App',
  {
    font: 'Big',
    horizontalLayout: 'fitted',
    verticalLayout: 'default',
  },
  function (err, data) {
    if (err) {
      log(err);
      return;
    }
    log(chalk.magentaBright(data));
    log(chalk.cyanBright('Enter your values and press return\n'));
  }
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on('line', (input) => {
  if (input) {
    arr.push(input);
  } else {
    log(chalk.cyanBright('Preview:'), chalk.blue(arr.join(', ')));
    clipboardy.writeSync(arr.join(', '));
    log(chalk.magentaBright('\nCSV copied to clipboard!\n'));
    rl.close();
  }
});
