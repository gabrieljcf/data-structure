import StackWithObject from "./stackWithObject";

const BASE = 2;
export function decimalToBinary(decimalNumber: number) {
    const remainderStack = new StackWithObject();
    let currentDecimalValue = decimalNumber;
    while(currentDecimalValue > 0) {
        const remainder = Math.floor(currentDecimalValue % BASE);
        remainderStack.push(remainder);
        currentDecimalValue = Math.floor(currentDecimalValue / BASE);
    }
    let binaryString = '';
    while(!remainderStack.isEmpty()) {
        binaryString += remainderStack.pop().toString();
    }
    return binaryString;
}