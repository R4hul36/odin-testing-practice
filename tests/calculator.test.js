import { calculator } from "../src/calculator.js"

it("add two numbers", () => {
    expect(calculator.add(2,3)).toBe(5)
})

it("subtract two numbers", () => {
    expect(calculator.subtract(5,3)).toBe(2)
})

it("divide two numbers", () => {
    expect(calculator.divide(9,3)).toBe(3)
})

it("multiply two numbers", () => {
    expect(calculator.multiply(7,3)).toBe(21)
})