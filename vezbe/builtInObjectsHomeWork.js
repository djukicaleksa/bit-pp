/*TASK 1
Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

	12345 -> 54321
*/
// var revNumber = function (numero) {
//     var revNumero = (numero).toString().split("").reverse().join("");
//     console.log(typeof revNumero);
//     console.log(revNumero);

//     return Number(revNumero)

// }
// console.log(revNumber(152315));
// /////////////////////////////////////////////////////////////// /TASK 2 
// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”
// 
// var sortedString = function(str){
//     str = str.split("")
//     return str.sort().join("");
// }
// console.log(sortedString("webmaster"));
////////////////////////////////////////////////////////////////////TASK 3
// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// var alphabetizeWords = function (str) {
//     str = str.split(" ");

//     var res = "";
//     res = str[0].split("").sort().join("") + " " + str[1].split("").sort().join("") + " " + str[2].split("").sort().join("");

//     return res;

// }
// console.log(alphabetizeWords("Republic Of Serbia"));
////////////////////////////////////////////////////////// TASK 4
// Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]

// var stringToArray = function(str){
//     return str.split(" ");
// }
// console.log(stringToArray("This seems too easy to be true?"));
// var stringToArrayViaLoop = function (str){
//     var temp=0;
//     var res=[];
//     for (var i=0;i<str.length;i++){
//         if(str[i]===" " ){
//             res.push(str.slice(temp,i+1));
//             temp=i;
//         }
//     }
//     res.push(str.slice(temp,str.length));
//     return res;
    
// }
// console.log(stringToArrayViaLoop("This seems too easy to be true?"));
/////////////////////////////////////////////////////////////////// TASK 5

// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."
// var abbreviateString = function(str){
//     var  abb=str.split(" ");
//     abb[abb.length-1]=abb[abb.length-1][0]+".";
//     return abb.join(" ");
// }
// console.log(abbreviateString("Aleksa Djukic"));
/////////////////////////////////////////////////////////////// TASK 6
// Write a function that adds string to the left or right of string, by replacing it’s characters.

// 	'0000', ‘123’, 'l' -> 0123 
// '00000000', ‘123’, 'r' -> 12300000
// var stringReplacer = function(firststr,secondstr,position){
//     var res="";
//         if (position==="l" || position==="L"){
//             res=secondstr+ firststr.slice(firststr.length-(firststr.length-secondstr.length), firststr.length)
//         }
//         if(position==="r" || position==="R"){
//             res=firststr.slice(0,firststr.length-secondstr.length)+secondstr;
//         }
//         return res;

// }
// console.log(stringReplacer("aleksadjukic","123","l"));
////////////////////////////////////////////////////////////// TASK 7
// var capitalize = function(str){
//     return str.charAt(0).toUpperCase()+str.slice(1)
// }
// console.log(capitalize("i wrote this in lowercase"));
////////////////////////////////////////////////////////////// TASK 8
// var hideEmail = function (email){
//     var res="";
//     res = email.slice(0,email.indexOf("@")/2)+"...."+email.slice(email.indexOf("@"),email.length+1);
//     return res;
// }
// console.log(hideEmail("riodjuka@gmail.com"));
///////////////////////////////////////////////////////////// TASK 9
var casereplace= function(str){
    var res="";
    for (var i=0;i<str.length;i++){
        
        if (str[i]==str[i].toUpperCase()){
            res+=str[i].toLowerCase();
        }
        if ( str[i]==str[i].toLowerCase()){
            res+=str[i].toUpperCase();
        }
    }
    return res;
}
console.log(casereplace("AllIwantFoRCHRISmasIsZyu"));
console.log(casereplace("thiswaswritteninlowercase"));

