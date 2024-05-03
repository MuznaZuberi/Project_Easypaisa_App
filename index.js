#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("***********", "EasyPaisa APP", "**********"));
let App = await inquirer.prompt([
    {
        name: "info1",
        type: "string",
        message: "Enter user name or email",
    },
    {
        name: "info2",
        type: "number",
        message: "Enter your password",
    },
    {
        name: "info3",
        type: "list",
        message: "Select Your Transaction ? ",
        choices: ["Send Money", "Bill Payment", "Online Payment", "Mobile Packages", "Easyload", "Easycash Loan"],
    },
    {
        name: "info4",
        type: "list",
        message: "All Transactions",
        choices: ["EasyPaisa Transfer", "Bank Transfer", "CNIC Transfer", "Other Wallet", "Electricity", "Telephone", "Gas", "Water", "Education", "Others", "Token number"],
    },
]);
if (App.info3 == "Send Money" && App.info4 == "EasyPaisa Transfer" || App.info3 == "Send Money" && App.info4 == "Bank Transfer" || App.info3 == "Send Money" && App.info4 == "CNIC Transfer") {
    console.log(chalk.yellowBright("*******", "Send Money", "********"));
    console.log(chalk.green("Your transaction successfully completed!"));
}
else if (App.info3 == "Bill Payment" && App.info4 == "Electricity" || App.info3 == "Bill Payment" && App.info4 == "Telephone" || App.info3 == "Bill Payment" && App.info4 == "Gas" || App.info3 == "Bill Payment" && App.info4 == "Water") {
    console.log(chalk.yellowBright("********", "Bill Payment", "**********"));
    console.log(chalk.green("Your bill transaction successfully completed!"));
}
else if (App.info3 == "Online Payment" && App.info4 == "Token number" || App.info3 == "Online Payment" && App.info4 == "Token number" || App.info3 == "Online Payment" && App.info4 == "Token number" || App.info3 == "Online Payment" && App.info4 == "Token number") {
    console.log(chalk.yellowBright("********", "Online Payment", "**********"));
    console.log(chalk.green("Your Online Payment transaction successfully completed!"));
}
else {
    console.log("Invalid!");
}
