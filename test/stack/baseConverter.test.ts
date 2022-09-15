import { baseConverter } from "../../src/stack/baseConverter";

test("Should be able to convert a decimal number with base 8", () => {
    const value = baseConverter(100345, 8);
    expect(value).toBe("303771")
});

test("Should be able to convert a decimal number with base 2", () => {
    const value = baseConverter(100345, 2);
    expect(value).toBe("11000011111111001");
});

test("Should be able to convert a decimal number with base 16", () => {
    const value = baseConverter(100345, 16);
    expect(value).toBe("187F9");
});

test("Should be able to convert a decimal number with base 35", () => {
    const value = baseConverter(100345, 35);
    expect(value).toBe("2BW0");
});

test("Should be able to return an empty value if an invalid base is sent", () => {
    const value = baseConverter(100345, 40);
    expect(value).toBe("");
});