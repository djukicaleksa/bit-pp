////////////////////////////////////////////////////////////////////----TASK 1
// Write a function to check whether the `input` is a string or not.


// function isString(a) {
//     if (typeof a === "string") {
//         return "true";
//     }
//     else {
//         return "false";
//     }
// }
// var res = isString(12)

// console.log(res);


////////////////////////////////////////////////////////////////////----TASK 2
// Write a function to check whether a string is blank or not.


// function blankOrNot(a) {
//     if (a === "") { //////////////////////////////////////////-- posle uslova uvek idu viticaste zagrade
//         return "true";
//     }
//     else {
//         return "false";
//     }
// }

// var res = blankOrNot("");

// console.log(res)


////////////////////////////////////////////////////////////////////----TASK 3
// Write a function that concatenates a given string n times (default is 1).


// function conc(a, stagod) {
//     var res = "";
//     for (let i = 0; i < a; i++) {
//         res += stagod; //res=res+string;

//     }
//     return res;

// }

// console.log(conc(5, "-AHA-"));


////////////////////////////////////////////////////////////////////----TASK 4
// Write a function to count the number of letter occurrences in a string.

// function letter(t, s) {
//     var count = 0
//     for (let i = 0; i < t.length; i++) {
//         if (s === t[i]) {
//             count = count + 1;    //moze i skraceno samo count++
//         }
//     }
//     return count;
// }

// console.log(letter("abrakadabra dabre", "r"));


////////////////////////////////////////////////////////////////////----TASK 5
// Write a function to find the position of the first occurrence of a character in a string. 
// The result should be in human numeration form. If there are no occurrences of the character, 
// the function should return -1.

// function letter(t, s) {

//     for (let i = 0; i < t.length; i++) {
//         if (s === t[i]) {
//             return i + 1;
//         }
//     }
//     return -1;
// }

// console.log(letter("HelloWorld", "g"));


////////////////////////////////////////////////////////////////////----TASK 6
// Write a function to find the position of the last occurrence of a character 
// in a string. The result should be in human numeration form. If there are no
//  occurrences of the character, function should return -1.

// function lastletter(t, s) {
//     var pom = 0;
//     for (let i = 0; i < t.length; i++) {
//         if (s === t[i]) {
//             pom = i + 1
//         }

//     }
//     return pom
// }

// console.log(lastletter("HelloWorld", "l"));
////////////////////////////////////////////////////////////////////----TASK 7
// Write a function to convert string into an array. Space in a string should 
// be represented as “null” in new array.

// function convert(t) {
//     var a = [];
//     for (var i = 0; i < t.length; i++) {
//         if (t[i] !== " ") {
//             a[i] = t[i];
//         } else {
//             a[i] = null;
//         }
//     }
//     return a;
// }
// console.log(convert("djes ba sta rais"));
//////////////////////////////////////////////////////////////////----TASK 8

// Write a function that accepts a number as a parameter and checks if 
// the number is prime or not. Note: A prime number (or a prime) is a natural 
// number greater than 1 that has no positive divisors other than 1 and itself.

// function prime(n) {
//     for (i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return n + " is not prime number"
//         }
//     }
//     return n + " is prime number"
// }

// console.log(prime(19));


//////////////////////////////////////////////////////////////////----TASK 9
// Write a function that replaces spaces in a string with provided separator. 
// If separator is not provided, use “-” (dash) as the default separator.

function replace(text, char) {
    var s = "";

    if (typeof char === "undefined") {
        char = "-";
    }

    for (var i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            s += char;
        } else {
            s += text[i];
        }
    }
    return s;
}
console.log(replace("My random string"));
