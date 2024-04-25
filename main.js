#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\tWelcome to Currency Converter\n"));
//define the list of currencies and their exchange rates
let exchangeRate = {
    "USD": 1, //base currency
    "EUR": 0.9, //european currency (euro)
    "JYP": 113, //japenese currency (yen)
    "AUD": 1.65, //Austrailian dollar
    "PKR": 280, //Pakistan rupees
    "BHD": 0.38, //Bahrian dinar
    "GBP": 0.80, //Pound sterling
};
//prompt the user to select currencies to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.green("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "AUD", "PKR", "BHD", "GBP"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.green("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "AUD", "PKR", "BHD", "GBP"]
    },
    {
        name: "Amount",
        type: "input",
        message: chalk.yellow("Enter the amount to convert:"),
    }
]);
//Perform currency conversion by using formula
let fromAmount = exchangeRate[userAnswer.from_currency];
let toAmount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.Amount;
//formula of conversion
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//display the converted amount
console.log(`\nConverted Amount = ${chalk.green.bold(convertedAmount.toFixed(2))}`);
