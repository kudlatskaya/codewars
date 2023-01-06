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
    //  console.log(odd);
    //  console.log(even);

    
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

 // console.log(findOutlier([1, 2, 3]));

  function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
  }


  function validatePIN (pin) {
    console.log(pin.length);
    console.log(Number.isInteger(+pin));

    if((pin.length == 4 || pin.length == 6) && /^[0-9]+$/.test(pin)) return true;
    
    return false;
  }

  //console.log(validatePIN('12.0'));

  function spinWords(string){
    let arr = string.split(' ');
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length >= 5) { 
        arr[i] = [...arr[i]].reverse().join(''); 
      }
    }
    
    return arr.join(' ');
    
  }

  // Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

  // This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
  
  // All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
  
  // What is considered Valid?
  // A string of braces is considered valid if all braces are matched with the correct brace.
  
  // Examples
  // "(){}[]"   =>  True
  // "([{}])"   =>  True
  // "(}"       =>  False
  // "[(])"     =>  False
  // "[({})](]" =>  False

  function validBraces(braces){
    [...braces] = braces;
    
    for(let i = 0; i < braces.length; i++) { 
      if(braces[i] == '(') braces[i] = 1;
      if(braces[i] == '[') braces[i] = 2;
      if(braces[i] == '{') braces[i] = 3;
      if(braces[i] == ')') braces[i] = -1;
      if(braces[i] == ']') braces[i] = -2;
      if(braces[i] == '}') braces[i] = -3;

    }
    
    if (braces.length % 2 == 0) { 
      for(let i = 0; i < braces.length/2; i++) { //console.log(braces[braces.length - i -1]);
        if (Math.abs(braces[i]) != Math.abs(braces[braces.length - i -1])) {
          return false;
        }
        else if(!(braces[i] > 0 && braces[braces.length - i -1] < 0)) {
          return false;
        } 
      }

      return true;
    }
    
    return false;
  }
  //validBraces('()');
  //console.log(validBraces('(){}[]'));

  function invert(array) {
    
    
     return array.map(item => item * (-1)); 
  }


  var uniqueInOrder=function(iterable){
    [...iterable] = iterable; 
    let arr = [];
    let i = 0, j = 0;
    if(iterable.length != 0) {
       arr[j] = iterable[i]; 
    j++;
    }
   

   for(i = 1; i < iterable.length; i++){

      if(iterable[i] != iterable[i - 1]) {
        arr[j] = iterable[i];
        j++;
      }  
    }

    return arr;
  }
  //uniqueInOrder([ 'A', 'B', 'C', 'c','c', 'A', 'D' ]);
  //console.log(uniqueInOrder([]));
  // let sum = new Function('a', 'b', 'return a + b');

  function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let arr = [];
    let k = 0;
    let coincidence;
    
    for(let i = 0; i < birds.length; i++) {
      coincidence = true;

      for(let j = 0; j < geese.length; j++) {
       if(geese[j] == birds[i]) {
        coincidence = false;
        break;
       }
      } 
      if(coincidence) {
        arr[k] = birds[i];
        k++;
    }
  }
      
      return arr;
  }

  // console.log(gooseFilter([ 'Blue Swedish', 'Roman Tufted', 'Crested', 'Hook Bill', 'Barbary', 'Pilgrim', 'Barbary', 'Mallard', 'Crested', 'Barbary', 'African' ]));

  function powersOfTwo(n){
    let arr = [];

    for(let i = 0; i <= n; i++) {
      arr[i] = Math.pow(2, i);
    }
    return arr;
  }

  //console.log(powersOfTwo(0));

  function aliasGen(name, lastName){
     var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' };
     var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' };
    let nameLater = name[0].toUpperCase(); console.log(nameLater);
    let surnameLater = lastName[0].toUpperCase(); console.log(surnameLater);
    if((nameLater.charCodeAt() < 65 || nameLater.charCodeAt() > 90) ||
    (surnameLater.charCodeAt() < 65 || surnameLater.charCodeAt() > 90)) {
    return 'Your name must start with a letter from A - Z.';
  }
  
    return firstName[nameLater] + ' ' + surname[surnameLater];
}

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
function addLength(str) {
  let arr = str.split(' ');
   let new_array = arr.map((item) => { 
    return item + ' ' + item.length; 
   })

   return new_array;
 }

 function litres(time) {
  let liters = time*0.5;
  
  return Math.floor(liters);
}

//console.log(addLength("Bike Aillington"));