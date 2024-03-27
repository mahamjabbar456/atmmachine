#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 20000;
let pin = 3456;
let mypin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "\n  Pin Hint 3456 \n Enter your pin : "
});
if (mypin.pin === pin) {
    console.log("Correct pin.");
    let operations = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Select the operation which you want to perform : ",
        choices: ["fast cash", "withdraw", "check balance"]
    });
    // console.log(operations.operation);
    if (operations.operation === "fast cash") {
        let cashamount = await inquirer.prompt({
            name: "cash",
            type: "list",
            message: "Select one amount which you want to withdraw : ",
            choices: ["1000", "2000", "5000", "10000"]
        });
        // console.log(cashamount.cash);
        if (cashamount.cash === "1000") {
            balance -= cashamount.cash;
        }
        else if (cashamount.cash === "2000") {
            balance -= cashamount.cash;
        }
        else if (cashamount.cash === "2000") {
            balance -= cashamount.cash;
        }
        else {
            balance -= cashamount.cash;
        }
        console.log(`Your remaining balance is : ${balance}`);
    }
    else if (operations.operation === "withdraw") {
        let drawamount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter the amount : "
        });
        // console.log(drawamount.amount);
        if (drawamount.amount > balance) {
            console.log("Insufficient balance.");
        }
        else {
            balance -= drawamount.amount;
            console.log(`Your remaining balance is : ${balance}`);
        }
    }
    else {
        console.log(`Your current balance is ${balance}`);
    }
}
else {
    console.log("Incorrect pin.");
}
