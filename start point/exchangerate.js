console.log(
  "This program converts from one currency to another using current exchange rate"
);
/* N/B: If "a" is the money you have in one 
currency and "b" is the exchange rate, 
then "c" is how much money you'll have 
after the exchange. So a * b = c, and a = c/b
i.e. we have c = a * b
        where   a = sum you have
                b = exchange rate
                c = money after exchange
*/

function convertCurrency(amount, fromCurrency, toCurrency) {
  const exchangeRates = {
    //I will start with Naira, a highly devalued currency
    "NGN": {
      "USD": 1500, // this implies that 1 NGN = 1,500 USD
      "EUR": 1600, // this implies that 1 NGN = 1,600 EUR
      
    },
    "USD": {
        "NGN": 1.00, // this implies that 1 USD = 1.00 NGN
        "EUR": 0.93, // this implies that 1 USD = 0.93 EUR

  },
    "EUR": {
        "NGN": 1.00, // this implies that 1 USD = 1.00 NGN
        "USD": 0.93, // this implies that 1 USD = 0.93 EUR
}
