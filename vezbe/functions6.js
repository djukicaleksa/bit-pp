"use strict";
//                     2.


// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

// function array(a, b) {
//     var newarray = [];
//     for (var i = 0; i < a.length; i++) {
//         newarray.push(a[i])
//         newarray.push(b[i])
//     }
//     return newarray
// }
// var output = array(["a", "b", "c"], [1, 2, 3])
// console.log(output)

///////          3       ////////////

// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

// (function () {
//     var array = [1, 2, 3, 4, 5, 6];
//     var k = 3;
//     var res = array.slice(k, array.length);
//     var secres = array.slice(0, k);
//     res = res.concat(secres)
//     console.log(res);
// })()

////////////////       4           ////////////

// Write a function that takes a number and returns array of its digits.

// (function () {
//     var numbersArray = [];
//     var so = 6347;
//     var someNumber = so.toString();
//     for (var i = 0; i < someNumber.length; i++) {
//         numbersArray.push(parseInt(someNumber[i]));
//     }

//     console.log(numbersArray);

// })()
/////////////////     5       /////////////////////////
// Write a program that prints a multiplication table for numbers up to 12.

// (function () {
//     var mul = "";
//     for (var i = 1; i <= 12; i++) {
//         for (var j = 1; j <= 12; j++) {
//             mul += i.toString() + '*' + j.toString() + '=' + (i * j + "\t");
//         }
//         mul += '\n';
//     }
//     console.log(mul)
// })()

/////////////////////          6           /////////////////
// Write a function to input temperature in Centigrade and convert to Fahrenheit.


// (function () {
//     var input = 20;
//     var res = (input * (9 / 5)) + 32;
//     console.log(res)

// })()

////////////////////          7          /////////////


// Write a function to find the maximum element in array of numbers.
//  Filter out all non-number elements.

// (function () {
//     var array = [1, 2, 4, "v", 723, "yes", 129];
//     var maxNumb = array[0]
//     for (var i = 0; i < array.length; i++) {
//         if (typeof array[i] !== "number") {
//             continue;
//         }

//         if (maxNumb < array[i]) {
//             maxNumb = array[i]
//         }
//     }
//     console.log(maxNumb);

// })()

////////////////            8           //////////////

// Write a function to find the maximum and minimum elements.
//  Function returns an array

(function () {
    var array = [11, 4, 5, 2, 55, 32, 643, 12];
    array.sort(function (a, b) { return a - b })
    
    console.log(array)
})()