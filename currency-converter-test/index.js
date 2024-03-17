import {convertCurrency,showSomething} from "cs-currency-converter"

async function test() {
    try {
        const amountInUSD = 100;
        const amountInEUR = await convertCurrency(amountInUSD, 'USD', 'EUR');
        console.log(`${amountInUSD} USD is approximately ${amountInEUR.toFixed(2)} EUR`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

test();
showSomething('hello world')
