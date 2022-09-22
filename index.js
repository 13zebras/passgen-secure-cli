#!/usr/bin/env node

import chalk from "chalk";
import clipboardy from "clipboardy";
import { program } from "commander";
import createPassword from "./utils/createPassword.js";
import savePassword from "./utils/savePassword.js";

const log = console.log;

program.version("1.0.0").description("Simple Password Generator");

program
  .option("-l, --length <number>", "length of password", 20)
  .option("-s, --save", "save password to passwords.txt")
  .option("-n0, --nonumbers", "remove numbers", false)
  .option("-sy, --symbols", "include symbols", false)
  .parse();

const { length, save, nonumbers, symbols } = program.opts();

// Generate password

const generatedPassword = createPassword(length, nonumbers, symbols);

if (save) {
  savePassword(generatedPassword);
}

clipboardy.writeSync(generatedPassword);

log(chalk.green("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard "));

// console.log(program.opts())

// Can create commands and actions on the
// program using Commander.js
// program
//   .command('generate')
//   .action(() => {
//     console.log("Generated")
//   })
//   .parse()
