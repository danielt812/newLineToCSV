const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

figlet.text(
  'New Line to CSV',
  {
    font: 'Big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  },
  function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.magentaBright(data));
    console.log(chalk.cyanBright('\nEnter your values and press return\n'));
  }
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on('line', (input) => {
  if (!input) {
    console.log(chalk.magentaBright('CSV:'), chalk.blue(arr.join(', ')));
    clipboardy.writeSync(arr.join(', '));
    console.log(chalk.cyanBright('\nCSV copied to clipboard!\n'));
    rl.close();
  } else {
    arr.push(input);
  }
});
