import { cipher } from "../src/ceasar-cipher.js";


it("check text wrapping", () => {
    expect(cipher("xyz", 3)).toBe("abc")
})

it("check case preservation", () => {
    expect(cipher("HeLLo", 3)).toBe("KhOOr")
})

it("check punctuation and spaces", () => {
    expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})