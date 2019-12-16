const calculator = require(`../calculator`);


// test (`add number`, () => {
//     let valA = 2;
//     let valB = 2;
//     let expectedResult = 4;
//     let result = calculator.add(valA, valB);

//     expect(result).toBe(expectedResult);
// })

// test('multiply numbers', () => {
//     let valA = 4;
//     let valB = 2;
//     let expectedResult = 8;
//     let result = calculator.multiply(valA, valB);
//     expect(result).toBe(expectedResult);
// });



let valA = 2
let valB = 2

describe(`addition`, () => {
    test('add numbers', () => {
        let expectedResult = 4
        let result = calculator.add(valA, valB)
        expect(result).toBe(expectedResult)
    })
    
    test('sub num', () => {
        let expected = 0
        let result = calculator.subtract(valA,valB)
        expect(result).toBe(expected)
    })
})

describe(`multiply`, () => {
    test('mult num', () => {
        let expected = 4
        let result = calculator.multiply(valA,valB)
        expect(result).toBe(expected)
    })
    
    test('div num', () => {
        let expected = 1
        let result = calculator.divide(valA,valB)
        expect(result).toBe(expected)
    })
})
