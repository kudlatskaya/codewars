
export function simpleMultiplication(num: number): number{

    return (num % 2) ? num * 9 : num * 8;
}

export function findNeedle(haystack: any[]):string {
    let index = haystack.findIndex((item) => item == 'needle');
    return  `found the needle at position ${index}`;
}

export function sumCubes(n: number): number {
    // your code here
    let sum: number = 0;

    for(let i = 1; i <= n; i++) {
        sum += i**3;
    }

    return sum
}

export function basicOp(operation: string, value1: number, value2: number): number {
    // Good luck!

    let result = (operation === '+')
        ? value1 + value2
        : (operation === '-')
            ? value1 - value2
            : (operation === '*')
                ? value1 * value2
                : (operation === '/')
                    ? value1 / value2
                    : 0;

    return result;
}