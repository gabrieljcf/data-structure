const DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export function conversorDeBases(decimalNumber: number, base: number) {
    if (!(base >= 2 && base <= 36) ) return "";
    const convertedValue: number[] = [];
    let currentDecimalNumber = decimalNumber;
    while(currentDecimalNumber > 0) {
        const remainder = Math.floor(currentDecimalNumber % base);
        convertedValue.push(remainder);
        currentDecimalNumber = Math.floor(currentDecimalNumber / base);
    }

    let result = '';
    while(convertedValue.length > 0) {
        const remainder = convertedValue.pop();
        if (remainder !== undefined) result += DIGITS[remainder];
    }
    return result;
}
