// function maxNum(a, b) {
//     if (a > b) {
//         var res = a;
//     } else {
//         var res = b;
//     }
//     return res;

// }
// console.log(maxNum(5, 7) + " Is Greater of Two!!");
// // //////////////////////////////////////////////DRUGI
// function isOdd(a) {
//     if (typeof a === "number") {
//         if (a % 2 === 0) {
//             return "Broj je paran";
//         } else {
//             return "Broj je neparan";
//         }
//     } else {
//         return "Vrednost koju ste uneli nije broj!!!!!";

//     }
// }
// console.log(isOdd(123));
//////////////////////////////////////////////////////


/////////////////////////////////////////////////////
/*function ismax(a, b) {
    if (a > b) {
        var res = a;
    } else {
        var res = b;
    }
    return res;
}
console.log(ismax(9, 5) + " Je veci od ta dva broja!"); 
*/

///////////////////////////////
/*function isOdd(a) {
    if (a % 2 === 0) {
        return "number is even"

    } else {
        return "odd"
    }
}
var res = isOdd(25) + " ----- ";
console.log(res);
*/
///////////////////////

/*function longnumber(a) {
    if (a > 99 && a < 1000 || a < -99 && a > -1000) {
        return "number has three digits"
    } else {
        return "numer hasn't three digits"
    }
}
var res = longnumber(758);
console.log(res);
*/
///////////////////////////////

/**function aritmetic(a, b, c, d) {
    return (a + b + c + d) / 4;
}
var res = aritmetic(25, 12, 25, 14);
console.log(res);
*/
/////////////////////////////////
/*function digits(a) {

    for (var b = 0; a > 0; b++) {
        a = (a - (a % 10)) / 10;

    }
    return b;
}
var res = digits(1555858587848);
console.log(res);
*/
///////////////////////////

/*
function digits(numbers, value) {
    var res = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === value) {
            res++;
        }
    }

    return res
}

var rs = digits([2, 4, 7, 3, 8, 7, 7, 1], 7);
console.log(rs);
*/

/////////////////////////////////

/*
function sumodd(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            sum += a[i];

        }
    }
    return sum;
}
var array = [25, 14, 12, 2, 5, 8, 7];
var res = sumodd(array);
console.log(res);

console.log(sumodd(array) + 12);
if (sumodd(array) % 2 === 0) {
    console.log("Suma neparnih brojeva areja je paran broj");

} else {
    console.log("Suma neparnih brojeva areja je neparan broj");
}
*/
///////////////////////////////////////////
function sum(word, elem, elem1) {
    var br = 0;
    for (var i = 0; i < word.length; i++) {
        if (elem === word[i]) {
            br++;
        }
        if (elem1 === word[i]) {
            br++;
        }

    }
    return br;



}


var rec = "Ceo dan sam nA programiranju,A sad bi trebala pauza da bude ja ne znam sta cemo dA radimo za test";
var e = "a";
var d = "A";
var sum = sum(rec, e, d)
console.log(sum);
