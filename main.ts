#!/usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import Choices from "inquirer/lib/objects/choices.js"

const currency : any = {
    USD :1,
    EUR :0.92,
    GBP :0.76,
    INR :74.57,
    PKR :278,
    YEN :151.61,
    AUD :1.52,

}
 let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message:"Please Select Your Currency",
            type: "list",
            choices:["USD", "EUR", "GBP", "INR", "PKR", "YEN", "AUD"],
        },
        {
            name: "to",
            message:"Please Select Your Currency",
            type: "list",
            choices:["USD", "EUR", "GBP", "INR", "PKR", "YEN", "AUD"],
        },
        {
            name: "amount",
            message:"Please Enter Your Amount",
            type: "number",
        }
    ]
 )
 let fromAmount = currency[userAnswer.from]
 let toAmount = currency[userAnswer.to]
 let amount = userAnswer.amount
 let baseAmount =amount/fromAmount
 let convertedAmount = baseAmount * toAmount

 console.log(chalk.bgCyan(convertedAmount));

