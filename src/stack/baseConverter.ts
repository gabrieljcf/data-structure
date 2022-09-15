import StackWithObject from "./stackWithObject";

const DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export function baseConverter(decimalNumber: number, base: number) {
    if(!isValidBase(base)) return '';
    const remainderStack = new StackWithObject();
    let currentDecimalValue = decimalNumber;
    while(currentDecimalValue > 0) {
        const remainder = Math.floor(currentDecimalValue % base);
        remainderStack.push(remainder);
        currentDecimalValue = Math.floor(currentDecimalValue / base);
    }
    let convertedBase = '';
    while(!remainderStack.isEmpty()) {
        convertedBase += DIGITS[remainderStack.pop()];
    }
    return convertedBase;
}

function isValidBase(base: number) {
    return (base >= 2 && base <= 36)
}