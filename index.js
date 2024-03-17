import axios from "axios";

export async function convertCurrency(amount, fromCurrency, toCurrency) {
    try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const exchangeRates = response.data.rates;
        const exchangeRate = exchangeRates[toCurrency];
        if (!exchangeRate) {
            throw new Error(`Conversion from ${fromCurrency} to ${toCurrency} is not supported.`);
        }
        return amount * exchangeRate;
    } catch (error) {
        throw new Error('Failed to fetch exchange rates.');
    }
}

export function showSomething(a) {
    console.log(a);
}




