
////////////////////////TASK 1/////////////////////////////

// function duplicateArray(array) {
//     var b = [];
//     for (var i = 0; i < array.length; i++) {
//         b.push(array[i]);
//         b.push(array[i]);

//     }
//     return b;
// }

// console.log(duplicateArray([2, 4, 7, 11, -2, 1]));

////////////////////////TASK 2 /////////////////////////////

// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

// function removeDuplicates(array) {
//     array.sort(function (a, b) { return a - b });
//     var b = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === array[i + 1]) {
//             continue;
//         }
//         b.push(array[i]);
//     }
//     return b;
// }
// console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

////////////////////////TASK 3 /////////////////////////////

// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// function isNumberOfElementsOdd(array) {
//     var result = false;
//     if (array.length % 2 === 1) {
//         result = true;
//     }
//     return result;
//}
// console.log(isNumberOfElementsOdd([1, 2, 9, 2, 5]));

// b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function lessThanMiddle(array) {
//     if (!isNumberOfElementsOdd(array)) {
//         return "Error!";
//     }

//     var indexOfMiddleElement = (array.length - 1) / 2;
//     var res = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < array[indexOfMiddleElement]) {
//             res++;
//         }
//     }
//     return res;
// }
// console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

//////////////////////////////////// TASK 4 //////////////////////////////////

// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

// var smallestElement = function (array) {
//     var sortedArray = array.slice().sort(function (a, b) { return a - b });
//     var minValue = sortedArray[0];
//     // for (var i = 0; i < array.length; i++) {
//     //     if (minValue === array[i]) {
//     //         var minLastIndex = i;
//     //     }

//     var minLastIndex = array.lastIndexOf(minValue);
//     return {
//         minValue: minValue,
//         minLastIndex: minLastIndex
//     }
// }
// console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));

///////////////////////////////////// TASK 5 ///////////////////////////


// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]



// var proSubstring = function (array) {
//     var res = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase().indexOf('pro') !== -1) {
//             res.push(array[i]);
//         }
//     }
//     return res;
// }

// var array = ['JavaScript', 'Programming', 'fun', 'product'];
// console.log(proSubstring(array));

// // Write a function that finds all the elements in a given array less than a given element. 
// // 	Input: [2, 3, 8, -2, 11, 4], 6 
// // 	Output: [2, 3, -2, 4]

// var lessThanSomeNumber = function (array, someNumber) {
//     var b = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < someNumber) {
//             b.push(array[i]);
//         }
//     }
//     return b;
// }
// console.log(lessThanSomeNumber([2, 3, 8, -2, 11, 4], 6));

// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.
//We have not yet been over this part of programming principles
// var shoppingCart = [
//     { name: 'apples', price: 100 },
//     { name: 'milk', price: 80 },
//     { name: 'bananas', price: 150 }

// ]
// var totalPrice = function (array) {
//     var res = 0;
//     for (var i = 0; i < array.length; i++) {
//         res += array[i].price;
//     }
//     return res;
// }

// // Write a function that calculates the average product price of your shopping list. 

// var averagePrice = function (array, sum) {
//     var avg = sum / array.length;
//     return avg;
// }
// console.log(averagePrice(shoppingCart, totalPrice(shoppingCart)));









