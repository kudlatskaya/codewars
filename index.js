"use strict";
var myName;

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0;
    let dogYears = 0;

    for (let i = 0; i < humanYears; i++) {
        if (i == 0) {
            catYears += 15;
            dogYears += 15;

        } else if (i == 1) {
            catYears += 9;
            dogYears += 9;

        } else {
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears, catYears, dogYears];
}

//   Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// const quarterOf = (month) => {
//     let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (month == arr[i][j]) return i + 1;
//         }

//     }
// }
const quarterOf = m => Math.ceil(m / 3);

//console.log(quarterOf(4));

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending) {
    let length = ending.length;
    console.log("дл" + length);
    if (length === 0) {
        return (ending == str.slice(-length));
    } else {
        return false;
    }

}

//Гипотеза Коллатца
//console.log(solution('abc', 'bc'));
// if(number is четное) number = number / 2
// if(number is нечетное) number = 3*number + 1

var hotpo = function(n){
    let arr = [];
    let i = 0;
  
    if (n == 0 || n == 1) return 0; //Optional Handler to n = 0
 
    arr[i] = n;
    while (arr[i] != 1) {
        i++;
        arr[i] = (!(arr[i-1] % 2)) ? (arr[i-1] / 2) : (3 * arr[i-1] + 1);
    }

    return arr.length-1;
}

// Test.assertEquals(hotpo(1), 0);
// Test.assertEquals(hotpo(5), 5);
// Test.assertEquals(hotpo(6), 8);
// Test.assertEquals(hotpo(23), 15);
