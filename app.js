
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(amount) {
    let result1 = amount * oneEuroIs.USD;
    return result1;
}

function fromDollarToYen(amount) {
    let result2 = (amount / oneEuroIs.USD) * oneEuroIs.JPY;
    return Math.round(result2)
      
}

function fromYenToPound(amount) {
    let result3 = amount * (oneEuroIs.JPY / oneEuroIs.GBP);
    return Math.round(result3);
    
};


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};

