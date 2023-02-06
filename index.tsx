export function simpleMultiplication(num: number): number{

    return (num % 2) ? num * 9 : num * 8;
}

export function findNeedle(haystack: any[]):string {
    let index = haystack.findIndex((item) => item == 'needle');
    return  `found the needle at position ${index}`;
}