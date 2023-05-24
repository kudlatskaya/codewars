// export function simpleMultiplication(num: number): number{
//
//     return (num % 2) ? num * 9 : num * 8;
// }
//
// export function findNeedle(haystack: any[]):string {
//     let index = haystack.findIndex((item) => item == 'needle');
//     return  `found the needle at position ${index}`;
// }
//
// export function sumCubes(n: number): number {
//     // your code here
//     let sum: number = 0;
//
//     for(let i = 1; i <= n; i++) {
//         sum += i**3;
//     }
//
//     return sum
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
    cars: [car1, car2]
}];
var students = [
    {
        id: 1, name: 'Masha', group: 10, marks: [
            {subject: 'math', mark: 5, done: true},
            {subject: 'rus', mark: 3, done: false},
            {subject: 'fiz', mark: 8, done: true},
        ]
    },
    {
        id: 2, name: 'Misha', group: 11, marks: [
            {subject: 'math', mark: 10, done: true},
            {subject: 'rus', mark: 4, done: true},
            {subject: 'fiz', mark: 8, done: true},
        ]
    },
    {
        id: 3, name: 'Dasha', group: 11, marks: [
            {subject: 'math', mark: 5, done: true},
            {subject: 'rus', mark: 3, done: false},
            {subject: 'fiz', mark: 10, done: true},
        ]
    },
    {
        id: 4, name: 'Pasha', group: 12, marks: [
            {subject: 'math', mark: 5, done: true},
            {subject: 'rus', mark: 5, done: true},
            {subject: 'fiz', mark: 2, done: false},
        ]
    },
    {
        id: 5, name: 'Sasha', group: 12, marks: [
            {subject: 'math', mark: 5, done: true},
            {subject: 'rus', mark: 5, done: true},
            {subject: 'fiz', mark: 5, done: true},
        ]
    },
];
var studentsFilter = function (group) {
    var _students = students.filter(function (item) {
        return item.group === group;
    });
    return _students;
};
var marksFilter = function (mark) {
    var _students = students.filter(function (item) {
        for (var i = 0; i < item.marks.length; i++) {
            if (item.marks[i].mark === mark)
                return true;
        }
        return false;
    });
    return _students;
};
var deleteStudent = function (id) {
    var _students = students.filter(function (item) {
        return item.id !== id;
    });
    students = __spreadArray([], _students, true);
};
var groupStudents = {
    students: students,
    studentsFilter: studentsFilter,
    marksFilter: marksFilter,
    deleteStudent: deleteStudent,
    mark: 5,
    group: 11
};
// console.log('studentsFilter');
// console.log(groupStudents.studentsFilter(groupStudents.group));
// console.log('marksFilter');
// console.log(groupStudents.marksFilter(groupStudents.mark));
// console.log('delete student');
// groupStudents.deleteStudent(3);
// console.log(students);

function sumNoDuplicates(numList) {
    let flag = false;
    let repeatElement = new Set();

    for (let i = 0; i < numList.length; i++) {
        let value = numList[i];

        for (let j = i + 1; j < numList.length; j++) {
            if (numList[j] === value) {
                repeatElement.add(numList[j])
            }
        }
    }

    for (let el of repeatElement.values()) {
        for (let i = 0; i < numList.length; i++) {
            if (numList[i] == el) {
                numList.splice(i, 1);
                i--;
            }
        }
    }

    return numList.reduce((sum, item) => sum + item, 0);
}

//console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));

var cubeChecker = function (volume, side) {

    return (volume > 0 && side > 0) ? volume / side / side == side : false;
};

function keepOrder(ary, val) {
    let _array = [...ary, val].sort((a, b) => a - b);
    console.log(_array)
    return _array.findIndex(item => item == val)
    // for(let i = 0; i < ary.length; i++) {
    //     if(val <= ary[i] ) return i;
    //     if(i == ary.length-1) return ++i;
    // }

    //return index;
}

function countSheeps(arrayOfSheep) {
    let sheepCount = 0;

    arrayOfSheep.forEach(sheep => {
        sheep && sheepCount++
    })

    return sheepCount;
}

// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ]))

// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).
//
// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input).
// Return the final value after execution is complete.
function add(num) {
    return num + 1;
}

function mult(num) {
    return num * 30;
}

//
// chain(2, [add, mult]);
// returns 90;

const chain = (initial, [...action]) => {

    for (let i = 0; i < action.length; i++) {
        initial = action[i](initial)
    }
    return initial
}

//console.log('chain:' + chain(2, [add, mult]))

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)
//
// Examples
//     [1, 1, 2] ==> 2
//     [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    numbers.sort();
    if (numbers[0] === numbers[1]) return numbers[numbers.length - 1];
    if (numbers[numbers.length - 1] === numbers[numbers.length - 2]) return numbers[0];

    return 0;
}

// console.log(stray([17, 17, 26, 17, 17, 17, 17] ))

// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
//     1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function doubleInteger(i) {
    i *= 2;
    return i;
}

/*Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y).
The function should return the mean between the mean of the the first x elements of the array and the mean of the
last y elements of the array.

    The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length.
    Otherwise the function should return -1.

getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of the array is
(1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

getMean([1,3,2,4], 1, 2) should return -1 because x is not higher than 1.

getMean([1,3,2,4], 2, 8) should return -1 because 8 is higher than the array's length.*/

function getMean(arr, x, y) {

    if (x <= 1 || x > arr.length || y <= 0 || y > arr.length) return -1;

    let resultX = arr.reduce((sum, current, i) => {
        if (i < x) return sum += current;
        else return sum;
    });

    let resultY = arr.reduceRight((sum, current, i, array) => {
        if (i >= array.length - y) return sum += current;
        else return sum;
    });

    let avX = resultX / x;
    let avY = resultY / y;

    return (avX + avY) / 2;
}

let arr = [41, 21, 25, 3, 6, 63, 52, 12, 47, 24, 62, 63, 7, 1, 95, 87, 68, 69, 72, 93, 19, 74, 1, 23, 79, 84, 65, 2, 25, 18, 90, 57, 26, 6, 84, 25, 30, 10, 5, 0, 7, 60, 89, 44, 5, 15, 95, 69, 21, 57, 76, 35, 63, 96, 19, 15]

// console.log(getMean(arr, 37, 56))

function parseInt(string) {
    // const numbersStr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    //     'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    //     'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty',
    //     'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million']
    const numbersStr = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand',
        1000000: 'million'
    }

    // const numbersNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    //     30, 40, 50, 60, 70, 80, 90, 100, 1000, 1000000]

    let stringArr = string.split(/[" ",-]/)

    let numbers = []

    stringArr.forEach((el, index) => {
        for (const [key, val] of Object.entries(numbersStr)) {
            if (el === val) {
                numbers[index] = key;
            }

        }
    })
    let number = '';
     numbers.map((el, i) => {
        if(el == 100) { //пройти до 100, 1000 и 1млн и перемножить
            numbers[i] *= numbers[--i];
            numbers.splice(i, 1)
        }
         if(el == 1000) {
             numbers[i] *= numbers[--i];
             numbers.splice(i, 1)
         }
         if(el == 1000000) {
             numbers[i] *= numbers[--i];
             numbers.splice(i, 1)
         }
    })
    console.log(numbers)

    // суммровать массив


     return numbers
}

console.log(parseInt("two hundred thousand three hundred twenty three")) //246