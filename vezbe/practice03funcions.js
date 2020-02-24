// /////////////////////////////////////FIRST TASK
// function insert(text, add, loc) {
//     var res = '';
//     if (typeof (loc) === 'undefined') {
//         loc = 1;
//     }
//     for (var i = 0; i < text.length; i++) {
//         if (i !== loc) {
//             res = res + text[i];
//         } else {
//             res += add;
//         }
//     }
//     return res;
// }
// console.log(insert('My random string', '--ADDED TEXT--', 7));
///////////////////////////////////////SECOND TASK
// function convert(array) {
//     res = '';
//     for (var i = 0; i < array.length; i++) {
//         if ((isNaN(array[i]) !== true && typeof (array[i]) === "number") && array[i] !== null && array[i] !== Infinity && array[i] !== undefined)
//             res += array[i];
//     }
//     return res;
// }
// console.log(convert([2, NaN, 15, false, -22, 'huee', undefined, 47, null]));
///////////////////////////////////////// THIRD TASK
// function convert(array) {
//     res = '';
//     for (var i = 0; i < array.length; i++) {
//         if ((isNaN(array[i]) !== true && typeof (array[i]) === "number") && array[i] !== null && array[i] !== Infinity && array[i] !== undefined && array[i] !== 0)
//             res += array[i];
//     }
//     return res;
// }
// console.log(convert([2, NaN, 15, false, -22, 'huee', undefined, 0, 47, null]));
/////////////////////////////////////////////////////////////// FOURTH TASK
// function reverse(a) {
//     var pom = '' + a;
//     var res = '';
//     for (var i = pom.length - 1; i >= 0; i--) {
//         res += [pom[i]];
//     }
//     return parseInt(res);
// }
// console.log(reverse(13142251));
/////////////////////////////////////////////////////////////// FIFTH TASK
// function last(a, b) {
//     var res = [];
//     if (typeof (b) === 'undefined') {
//         return a[a.length - 1];


//     } else {
//         for (var i = a.length - b; i < a.length; i++) {
//             res[res.length] = a[i];
//         }
//         return res;
//     }

// }
// console.log(last([3, 5, 7, 6, 2, 1], 3));
/////////////////////////////////////////////////////////// SIXTH TASK
function specific(length, e) {
    var a = [];
    if (typeof (e) === 'undefined') {
        for (var i = 0; i < length; i++) {
            a[i] = null;

        }

    }
    for (var i = 0; i < length; i++) {
        a[i] = e;

    }
    return a;
}
console.log(specific(23, 'hue'));

function insert(text, add, loc) {
    var res = '';
    if (typeof (loc) === 'undefined') {
        loc = 1;
    }
    for (var i = 0; i < text.length; i++) {
        if (i !== loc) {
            res = res + text[i];
        } else {
            res += add;
        }
    }
    return res;
}
console.log(insert('My random string', '--ADDED TEXT--', 7));