test("One euro should be 1.206 dollars", function () {
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One Dollar should be 106.58 yen", function () {
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(3.5)
    const expected = 3.5 * 106.5;
    expect(fromDollarToYen(3.5)).toBe(373);
})

test("One Yen should be 159.8 yen", function () {
    const { fromYenToPound } = require('./app.js')
    const yen = fromYenToPound(3.5)
    const expected = 3.5 * 159.8;
    expect(fromYenToPound(3.5)).toBe(560);
})
