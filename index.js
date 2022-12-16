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

const quarterOf = (month) => {
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (month == arr[i][j]) return i + 1;
        }

    }
}

console.log(quarterOf(0));