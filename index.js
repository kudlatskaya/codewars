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

var hotpo = function (n) {
    let arr = [];
    let i = 0;

    if (n == 0 || n == 1) return 0; //Optional Handler to n = 0

    arr[i] = n;
    while (arr[i] != 1) {
        i++;
        arr[i] = (!(arr[i - 1] % 2)) ? (arr[i - 1] / 2) : (3 * arr[i - 1] + 1);
    }

    return arr.length - 1;
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    // Return a new array with the strings filtered out
    let arr = [];
    arr = l.filter(item => Number.isInteger(item));
    return arr;
}


//   Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
function getSum(a, b) {
    let i = (a > b) ? b : a;
    let lenght = (a > b) ? a : b;
    let sum = 0;

    while (i <= lenght) {
        sum = sum + i;
        i++;
    }

    return sum;
}


// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let n = 0;

    while (p0 < p) {
        
      p0 = Math.floor(p0 + p0 / 100 * percent + aug);
      n++;
    }

    return n;
}

function past(h, m, s){
    return s * 1000 + m * 60 * 1000 + h * 60 * 60 * 1000;
  }

  function disemvowel(str) {
    //«A», «E», «I», «O», «U»
    str = str.replace(/[aeiou]/gi, '');
    return str;
  }

  function findOutlier(integers){
    let odd = 0; //неч
    let even = 0; //чет
    
     for(let i = 0; i < integers.length; i++) {
       if(integers[i]%2 == 0) { 
        even++;
         
       } else {
        odd++;
       }
     }
     console.log(odd);
     console.log(even);

    
      if(odd == integers.length - 1) {
        for(let i = 0; i < integers.length; i++) {
          if (integers[i]%2 == 0) return integers[i]; 
        }
      }
      
    if(even == integers.length - 1) {
        for(let i = 0; i < integers.length; i++) {
          if (integers[i]%2 != 0) return integers[i]; 
        }
      }
  }

  console.log(findOutlier([1, 2, 3]));