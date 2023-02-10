
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