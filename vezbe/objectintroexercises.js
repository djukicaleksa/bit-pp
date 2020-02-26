// var coffe = {
//     name: "instant",
//     strength: "strong",
//     flavour: "vanilla",
//     milk: "soy milk",
//     sugar: "without sugar"

// }

// var movie = {
//     title: "Parasite",
//     actors: ["Pera", "Mika", "Zika"],
//     director: "Xio Yo",
//     genre: ["thriller", "mistery"],
//     popularity: "Oscar winner"
// }
// // console.log(movie.actors);
// var objMaker = function (description, language, repository, inDev) {
//     return {
//         description: description,
//         language: language,
//         repository: repository,
//         inDev: inDev,
//         printrepo: function () {
//             return console.log(this.repository);

//         },
//         checklanguage: function () {
//             if (this.language === "javascript" || this.language === "JAVASCRIPT" || this.language === "JavaScript") {
//                 return "Project is written in JS! :)"
//             } else {
//                 return "Project is not written in JS!!";

//             }

//         },
//         checkinDev: function () {
//             if (this.inDev) {
//                 return 'The project is still in development!';

//             } else {
//                 return 'Project is finished!';

//             }
//         }


//     }
// }
// var p = objMaker("Ovo je neki deskription", 'HTML', "NO REPOSITORY YET", true);
// console.log(p.checkinDev());



// var foodMaker = function (name, type, complexity, ingredients, prepTime, prepInstruction, newType, del) {
//     return {
//         name: name,
//         type: type,
//         complexity: complexity,
//         ingredients: ingredients,
//         prepTime: prepTime,
//         prepInstruction: prepInstruction,
//         printIngr: function () {
//             return this.ingredients;
//         },
//         checkTime: function () {
//             if (this.preptime < 15) {
//                 return "Food can be prepared in 15 minutes";
//             } else {
//                 return "Food can't be prepared in 15 minutes";
//             }
//         },
//         changeType: function () {
//             this.type = newType;
//             return this.type;

//         },
//         deleteIngredient: function () {
//             var res = [];
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 if (this.ingredients[i] !== del) {

//                     res[res.length] = this.ingredients[i];

//                 }


//             } this.ingredients = res;
//             return this.ingredients;
//         }

//     }

// }
// var p = foodMaker('Hleb', 'Serbian', 1, ['brasno', 'voda', 'kvasac'], 12, 'Samo zamesis i peces', 'Chinese', 'voda');
// console.log(p);
// console.log(p.changeType());
// console.log(p.deleteIngredient());
// console.log(console);

// function build(name, cuisine, compl, ingre, time, improv) {
//     return {
//         name: name,
//         cuisine: cuisine,
//         complexity: compl,
//         ingredients: ingre,
//         time: time,
//         instruction: improv,
//         getIngredients: function () {
//             var res = "";
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 res += this.ingredients[i] + "\t";
//             }
//             console.log(res);
//         },
//         isPrepTime: function () {
//             var res = "";
//             if (this.time < 15) {
//                 res = "can be prepared"
//             } else {
//                 res = "can not be prepared"
//             }
//             console.log(res)
//         },
//         setTipe: function (newtype) {
//             this.cuisine = newtype;
//             console.log(this.cuisine)
//         },
//         setIngredients: function (del) {
//             var res = [];
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 if (del !== this.ingredients[i]) {
//                     res[res.length] = this.ingredients[i];

//                 }
//             }
//             this.ingredients = res
//             console.log(this.ingredients)
//         },
//         print: function () {
//             return (
//                 "Name is : " + this.name + '\n'

//             );

//         }
//     }
// }

// var pizza = build("margarita", "italian", 3, ["eggs", "water", "flour"], 10, "imropvisation")
// var capricoza = build("margarita", "italian", 3, ["eggs", "water", "flour"], 15, "imropvisation")
// pizza.getIngredients()
// pizza.isPrepTime()
// pizza.setTipe("serbia")
// pizza.setIngredients("eggs")
// console.log(capricoza)
// console.log(pizza.print())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function FoodMaker(name, type, complexity, ingredients, prepTime, prepInstruction, newType, del) {

//     this.name = name;
//     this.type = type;
//     this.complexity = complexity;
//     this.ingredients = ingredients;
//     this.prepTime = prepTime;
//     this.prepInstruction = prepInstruction;
//     this.printIngr = function () {
//         return this.ingredients;
//     };
//     this.checkTime = function () {
//         if (this.preptime < 15) {
//             return "Food can be prepared in 15 minutes";
//         } else {
//             return "Food can't be prepared in 15 minutes";
//         }
//     };
//     this.changeType = function () {
//         this.type = newType;
//         return this.type;

//     };
//     this.deleteIngredient = function () {
//         var res = [];
//         for (var i = 0; i < this.ingredients.length; i++) {
//             if (this.ingredients[i] !== del) {

//                 res[res.length] = this.ingredients[i];

//             }


//         } this.ingredients = res;
//         return this.ingredients;
//     }

// }


// var p = new FoodMaker('Hleb', 'Serbian', 1, ['brasno', 'voda', 'kvasac'], 12, 'Samo zamesis i peces', 'Chinese', 'voda');
// console.log(p);
// console.log(p.changeType());
// console.log(p.deleteIngredient());

// function FoodMaker(name, type, complexity, ingredients, prepTime, prepInstruction, newType, del) {

//     this.name = name;
//     this.type = type;
//     this.complexity = complexity;
//     this.ingredients = ingredients;
//     this.prepTime = prepTime;
//     this.prepInstruction = prepInstruction;
//     this.printIngr = function () {
//         return this.ingredients;
//     };
//         this.checkTime = function () {
//             if (this.preptime < 15) {
//                 return "Food can be prepared in 15 minutes";
//             } else {
//                 return "Food can't be prepared in 15 minutes";
//             }
//         };
//         this.changeType = function () {
//             this.type = newType;
//             return this.type;

//         };
//         this.deleteIngredient = function () {
//             var res = [];
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 if (this.ingredients[i] !== del) {

//                     res[res.length] = this.ingredients[i];

//                 }


//             } this.ingredients = res;
//             return this.ingredients;
//         }

// }
// var p = new FoodMaker('Hleb', 'Serbian', 1, ['brasno', 'voda', 'kvasac'], 12, 'Samo zamesis i peces', 'Chinese', 'voda');
// console.log(p);
// console.log(p.changeType());
// console.log(p.deleteIngredient());

