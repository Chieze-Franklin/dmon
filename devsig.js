#!/usr/bin/env node
const chalk = require('chalk');
const program = require('commander');

const { editConfig, getReport, startMonitor } = require('./commands');
const { getAndVerifyEmail } = require('./middleware');

process.on('uncaughtException', (error) => {
  console.log(chalk.redBright(error.message));
  console.log(error);
});

function commaSeparatedList(value, previous) {
  return value.split(',');
}

program
  .version('0.0.1')
  .description('DevSig Agent');

program
  .command('start [monitor]')
  .option('-a, --apps <apps>', 'list the apps to monitor', commaSeparatedList)
  .option('-k, --key-events <events>', 'list the keyboard events to monitor', commaSeparatedList)
  .option('-m, --mouse-events <events>', 'list the mouse events to monitor', commaSeparatedList)
  .description('Start a monitor or all monitors')
  //.action(getAndVerifyEmail)
  .action(startMonitor);

program
  .command('report <reporter>')
  .option('--group-by <field>', 'the field or column by which rows are grouped together')
  .option('--logs <logs>', 'list the logs to consider', commaSeparatedList)
  .description('Generate a report')
  .action(getReport);

program
  .command('config [field] [value]')
  .description('Get or set the value of a config field')
  .action(editConfig);

program.parse(process.argv);
  