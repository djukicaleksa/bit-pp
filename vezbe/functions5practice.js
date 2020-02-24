// //////////////////////////////////////////////// FIRSTTASK
// function replace(a) {
//     var minI = 0;
//     var maxI = 0;

//     for (var i = 0; i < a.length; i++) {
//         if (a[i] > a[maxI]) {
//             maxI = i;
//         }
//         if (a[i] < a[minI]) {
//             minI = i;
//         }
//     }

//     var tmp = a[minI];
//     a[minI] = a[maxI];
//     a[maxI] = tmp;

//     return a;
// }
// console.log(replace([3, 500, 12, 149, 53, 414, 1, 19]));
//////////////////////////////////////////// SECONDTASK
// var arr = [3, 500, -10, 149, 53, 414, 1, 19];

// function dividingValues(array) {
//     var outputArray = [];
//     for (var i = 0; i < array.length; i++) {
//         outputArray[i] = array[i] / 2 + 5;
//         if (outputArray[i] === 0) {
//             outputArray[i] = 20;

//         }
//     }
//     return outputArray;
// }
// console.log(dividingValues(arr));
/////////////////////////////////////////THIRD TASK
// function grades(names, points) {
//     var res = '';
//     for (var i = 0; i < names.length; i++) {
//         if (points[i] < 51 || points[i] > 100) {
//             res += "\nStudent: " + names[i] + ", Points: " + points[i] + ", Grade: FAILED";
//             continue;
//         }

//         var grade = 5;

//         if (points[i] >= 51 && points[i] <= 60) {
//             grade = 6;
//         } else if (points[i] >= 61 && points[i] <= 70) {
//             grade = 7;
//         } else if (points[i] >= 71 && points[i] <= 80) {
//             grade = 8;
//         } else if (points[i] >= 81 && points[i] <= 90) {
//             grade = 9;
//         } else if (points[i] >= 91 && points[i] <= 100) {
//             grade = 10;
//         }

//         res += "\nStudent: " + names[i] + ", Points: " + points[i] + ", Grade: " + grade;
//     }

//     return res;
// }

// console.log(grades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));
/////////////////////////////////////////////// SIXTH TASK


// function calculate() {
//     var sum = 0;
//     for (var i = 1; i <= 1000; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     for (var i = 1; i <= 500; i++) {
//         if (i % 2 === 1) {
//             sum -= i;
//         }

//     }
//     return sum * 12.5;
// }
// console.log(calculate());

/////////////////////////////////////// SEVENTH TASK
// var stringMaker = function (array) {
//     var res = '';
//     for (var i = 0; i < array.length; i++) {
//         if (typeof (array[i] === "string") && array[i].length > 1) {
//             res += array[i][0] + array[i][1];
//         }

//     }
//     return res;
// }
// console.log(stringMaker(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));
////////////////////////////////////////// EIGHT TASK
// var reversed = function (text) {
//     var res = "";
//     for (var i = text.length - 1; i >= 0; i--) {
//         res += text[i];
//     }
//     return res;
// }

// var string = " Belgrade Institute of Technology";
// console.log(reversed(string));

var combinations = function (number) {
    var res = '';
    for (var i = 1; i <= number; i++) {
        for (var j = 1; j <= number; j++) {
            if (i != j) {
                res += "(" + i + "," + j + ")" + "\t";
            }
        }
    }
    return res;
}
console.log(combinations(7));
/////////////////////////////////////////////////
