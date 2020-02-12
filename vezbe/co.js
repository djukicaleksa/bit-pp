
//////////////////////////////////////////////PRVIZADATAK
/*var a = 3;
var b = -7;
var c = 3;
var x = a * b * c;
var result = "";

if (x < 0) {
    result = "This is output -";
}
else {
    result = "This is output +";
}

console.log(result);



var number = 10;
var */

/*////////////////////////////drugi
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var f = -1;
var res;
if (a>b&&a>c&&a>d&&a>f) {
    res = a;

}
  else if (b>c&&b>d&&b>f) {
      res = b;
  }
  else if (c>d&&c>f) {
      res =c ;
  }
      else if (d>f) {
          res = d;
      }
      else {
          res = f;
      }
        console.log(res)*/
//////////////////////////////////////////////////////////////////////////////////////////TRECI

/*var a = 0;
var b = -1;
var c = 4;
var prva;
var druga;
var treca;

if (a > b && a > c) {
    if (b > c) {
        prva = a;
        druga = b;
        treca = c;
    }
    else {
        prva = a;
        druga = c;
        treca = b;
    }

}
else if (b > a && b > c) {
    if (c > a) {
        prva = b;
        druga = c;
        treca = a;
    }

}
else {
    prva = c;
    if (b > a) {
        druga = b;
        treca = a;
    }
    else {
        druga = a;
        treca = b;
    }
}
console.log(prva, druga, treca);

*/
//////////////////////////////////////////////////////////////CETVRTI


/*var a = 14;
var res = "";
ifNumber = typeof (a) === "number";
if (ifNumber && a % 2 === 0) {
    res = a;
} else {
    res = "X";
}
console.log(a + " / 2+ =", res);
//////////////////////////////////////////////////////////PETI
/*var a = 5;
var b = 7;
var res;
if (a > b) {
    res = a;
}
else {
    res = b;
}
console.log(res)*/
////////////////////////////////////////////////////////////////SESTI
/*
var c = 37;
var f = (9 * c / 5) + 32;
var t = (f - 32) / 9 *5;
console.log(t + "c is " + f + "F");*/


///////////////////////////////////////////////////////////////////SEDMI
/*var a = 11;
var b = 13;
var res = a - b;
res = Math.abs(res);

if (res > b) {
    res = res * 2;

}

console.log(res);*/
/////////////////////////////////////////OSMI
/*var a = 12;
var b = 12;
var res;
if (a===b) {
    res = (a+b) *3;
} else {
   res = a+b;
}
console.log(res);*/

//////////////////////////////////////////////////////////////DEVETI
/*var a, b, res;
a = 34;
b = 50;
res = "";
if (a === 50 || b === 50 || a + b === 50) {
    res = "true";
} else {
    res = "false";
}

console.log(res);

*/
var a = -7;
var res = "";
if (a >= 20 && a <= 100) {
    res = "20 - 100";
}
else {
    if (a >= 100 && a <= 400) {
        res = "100-400";
    } else {
        res = "false";
    }

}

console.log(res)