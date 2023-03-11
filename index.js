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
            { subject: 'math', mark: 5, done: true },
            { subject: 'rus', mark: 3, done: false },
            { subject: 'fiz', mark: 8, done: true },
        ]
    },
    {
        id: 2, name: 'Misha', group: 11, marks: [
            { subject: 'math', mark: 10, done: true },
            { subject: 'rus', mark: 4, done: true },
            { subject: 'fiz', mark: 8, done: true },
        ]
    },
    {
        id: 3, name: 'Dasha', group: 11, marks: [
            { subject: 'math', mark: 5, done: true },
            { subject: 'rus', mark: 3, done: false },
            { subject: 'fiz', mark: 10, done: true },
        ]
    },
    {
        id: 4, name: 'Pasha', group: 12, marks: [
            { subject: 'math', mark: 5, done: true },
            { subject: 'rus', mark: 5, done: true },
            { subject: 'fiz', mark: 2, done: false },
        ]
    },
    {
        id: 5, name: 'Sasha', group: 12, marks: [
            { subject: 'math', mark: 5, done: true },
            { subject: 'rus', mark: 5, done: true },
            { subject: 'fiz', mark: 5, done: true },
        ]
    },
];
var studentsFilter = function (group) {
    var _students = students.filter(function (item) { return item.group === group; });
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
    var _students = students.filter(function (item) { return item.id !== id; });
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

    for(let i = 0; i < numList.length; i++) {
        let value = numList[i];

        for (let j = i + 1; j < numList.length; j++) {
            if (numList[j] === value) {
                repeatElement.add(numList[j])
            }
        }
    }

    for(let el of repeatElement.values()) {
        for(let i = 0; i < numList.length; i++) {
            if(numList[i] == el ) {
                numList.splice(i, 1);
                i--;
            }
        }
    }

    return numList.reduce( (sum, item) => sum + item, 0 );
}

console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));
