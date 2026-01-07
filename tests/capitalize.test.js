import { capitalizeFirstChar } from "../src/capitalize";


test("check if first character is capitalized", () => {
    expect(capitalizeFirstChar("hello")).toBe("Hello")
})

test("check if first character is capitalized", () => {
    expect(capitalizeFirstChar("odin")).toBe("Odin")
});