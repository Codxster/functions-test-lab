let myFunctions = require('./functions')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('James')).toBe("Hello, James")
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('Jill')).toBe("Hello, Jill")
})

describe('Math', () => {
    test('Subtraction Test', () => {
        expect(myFunctions.subtract(10, 5)).toBe(5)
    })

    test('Division Test', () => {
        expect(myFunctions.divide(5, 5)).toBe(1)
    })

    test('Multiplication Test', () => {
        expect(myFunctions.multiply(5, 5)).toBe(25)
    })

    test('Addition Test', () => {
        expect(myFunctions.add(5, 5)).toBe(10)
    })
})


