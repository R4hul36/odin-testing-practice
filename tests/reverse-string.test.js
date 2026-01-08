import { reverseString } from "../src/reverse-string.js"

it("reverse a string", () => {
    expect(reverseString("rain")).toBe("niar")
})

it("reverse a string", () => {
    expect(reverseString("hello!")).toBe("!olleh")
})