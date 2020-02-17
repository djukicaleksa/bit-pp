////////////////////////////////////////////////////PRVI
/*var e = 3;
var br = 0;
var a = [5, -4, 2, 18, 7];
for (var i = 0; i < a.length; i++) {
    if (e === a[i]) {
        console.log("Yes");
        br++;
    }
}
if (br === 0) {

    console.log("No");
}*/
///////////////////////////////////////////////////DRUGI
// var a=[-3,11,5,3.4,-8];
// for (var i=0;i<a.length;i++) {
//     if (a[i]>0) {
//         a[i]*=2;
//         console.log(a[i]);

//     } else {
//         console.log(a[i]);

//     }
// }
/////////////////////////////////////////////////TRECI
// var a=[4,2,-42,-1,6,-173];
// var pom =a[0];
// var min=0;
// for(var i=0;i<a.length;i++) {
//         if (pom>a[i]) {
//             pom=a[i];
//             min=i;
//         } 
// }
// console.log(min);
///////////////////////////////////////////////////CETVRTI
// var a=[4,-234,2,-42,-1,6,-173];
// var pom =a[0];
// var min=0;
// var c=[];
// for(var i=0;i<a.length;i++){
//     if (pom>a[i]){
//         pom=a[i];
//     }
// }
// for (var i=0;i<a.length;i++){


//     if(pom!==a[i]) {
//         c[i]=a[i];
// }} pom=c[0];
//     for (var i=0;i<c.length;i++) {
//         if (pom>c[i]) {
//             pom=c[i];
//         }
//     }
//     console.log(pom);
////////////////////////////////////////////////////PETI
// var a=[3,11,-5-3,2];
// var sum=0;
// for (var i=0;i<a.length;i++){
//     if(a[i]>0) {
//         sum+=a[i];
//     }
// }
// console.log(sum);
////////////////////////////////////////////////////SESTI
// var a = [2, 4, -2, 7, -2, 4, 2];
// x = a.length - 1;
// var s = "";
// var z = "";
// for (var i = a.length - 1; i >= 0; i--) {
//     s += a[i];
// }
// for (var i = 0; i < a.length; i++) {
//     z += a[i];
// }

// if (s === z) {
//     console.log("The array is symmetric");s
// } else {
//     console.log("Array is assymetric");

// }
//////////////////////////////////////////////SEDMI
// var a = [4, 5, 6, 2];
// var b = [3, 8, 11, 9];
// var res=[];
// j=0;

// for (var i=0; i < a.length; i++) {

//         res[j]=a[i];
//         j++;
//         res[j]=b[i];
//         j++;

// }
// console.log(res);


////////////////////////////////////////////OSMI
// var a=[4,5,6,2];
// var b=[3,8,11,9];
// var res=[];
// for (var i=0;i<a.length;i++){
//     res[i]=a[i];

// }
// for (var i=0;i<b.length;i++){
//     res[b.length+i]=b[i];
// }
// console.log(res);
//////////////////////////////////////////DEVETI
var arr = [4, 2, 2, 6, 2, 8, 2, 2];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
