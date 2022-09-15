import { conversorDeBases } from "../../src/stack/conversorDeBases";

test("Should be able to convert a decimal number with base 8", () => {
    const value = conversorDeBases(100345, 8);
    expect(value).toBe("303771")
});