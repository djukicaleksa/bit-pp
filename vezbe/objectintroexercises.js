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



var foodMaker = function (name, type, complexity, ingredients, preptime, prepinstruction) {
    return {
        name: name,
        type: type,
        complexity: complexity,
        ingredients: ingredients,
        preptime: preptime,
        prepinstruction: prepinstruction,
        printIngr: function () {
            return this.ingredients;
        },
        checkTime: function () {
            if (this.preptime < 15) {
                return "Food can be prepared in 15 minutes";
            } else {
                return "Food can't be prepared in 15 minutes";
            }
        },
        changeType: function () {
            this.type = newType;

        },

    }

}