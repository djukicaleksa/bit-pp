// //////////////////////////////////////////HUMANIZER 13th task
// function humanize(number) {
//     if (number % 100 >= 11 && number % 100 <= 13)
//         return number + "th";

//     switch (number % 10) {
//         case 1: return number + "st";
//         case 2: return number + "nd";
//         case 3: return number + "rd";
//     }

//     return number + "th";
// }
// console.log(humanize(1));
// console.log(humanize(20));
// console.log(humanize(12));
//////////////////////////////////////////RETIREMENT 12th task
// function retirement(birth, gender) {
//     var year = 2020;
//     var res;
//     if (gender === 'M' || gender === 'm' || gender === 'male' || gender === 'MALE' || gender === 'Male') {
//         res = 65 - (year - birth);
//     }
//     if (gender === 'f' || gender === 'F' || gender === 'female' || gender === 'FEMALE' || gender === 'Female') {
//         res = 60 - (year - birth);
//     }
//     if (res <= 0) {
//         return "Vec bi trebalo da ste u penziji :)"
//     } else {
//         return "Za " + res + " godina je vreme za penziju!!"
//     }

// }
// console.log(retirement(1999, "m"));

