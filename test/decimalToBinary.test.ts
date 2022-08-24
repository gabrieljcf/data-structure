import { decimalToBinary } from "../src/decimalToBinary"

test("should be able to tranform a decimal number in binary", () => {
    const convertedValue = decimalToBinary(156);
    expect(convertedValue).toBe("10011100");
})