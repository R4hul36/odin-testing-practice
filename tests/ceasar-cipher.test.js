import { cipher } from "../src/ceasar-cipher.js";


it("check text wrapping", () => {
    expect(cipher("xyz", 3)).toBe("abc")
})