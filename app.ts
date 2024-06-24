import inquirer from 'inquirer';

// Conversion rates (as of the latest available data)
const USD_To_PKR = 277.90;
const PKR_To_USD = 0.0036;
const EUR_To_PKR = 297.45;
const PKR_To_EUR = 0.0034;

const confirm = await inquirer.prompt([
    {
        message: "Would you like to convert your currency?",
        type: "confirm",
        name: "choice",
    },
]);

if (confirm.choice) {
    const question1 = await inquirer.prompt([
        {
            message: "Choose the currency you want to convert from",
            type: "list",
            name: "currency",
            choices: ["PKR (Pakistani Rupees)", "USD (Dollar)", "EUR (Euro)"],
        },
    ]);

    if (question1.currency === "PKR (Pakistani Rupees)") {
        const question2 = await inquirer.prompt([
            {
                message: "Enter the value in PKR to convert it to USD and EUR",
                type: "input",
                name: "value",
            },
        ]);
        // Convert PKR to other currencies
        const convertedValueToUSD = question2.value * PKR_To_USD;
        const convertedValueToEUR = question2.value * PKR_To_EUR;
        console.log(`Converted value in USD: ${convertedValueToUSD.toFixed(4)}`);
        console.log(`Converted value in EUR: ${convertedValueToEUR.toFixed(4)}`);
    } else if (question1.currency === "USD (Dollar)") {
        const question3 = await inquirer.prompt([
            {
                message: "Enter the value in USD to convert it to PKR",
                type: "input",
                name: "value",
            },
        ]);

        // Convert USD to PKR
        const convertedValueToPKR = question3.value * USD_To_PKR;
        console.log(`Converted value in PKR: ${convertedValueToPKR.toFixed(2)}`);
    } else if (question1.currency === "EUR (Euro)") {
        const question4 = await inquirer.prompt([
            {
                message: "Enter the value in EUR to convert it to PKR",
                type: "input",
                name: "value",
            },
        ]);

        // Convert EUR to PKR
        const convertedValueFromEUR = question4.value * EUR_To_PKR;
        console.log(`Converted value in PKR: ${convertedValueFromEUR.toFixed(2)}`);
    }
} else {
    console.log("No conversion selected.");
}
