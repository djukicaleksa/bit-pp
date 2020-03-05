"use strict"

var main = (function () {
    console.log("Hi!");
    ////////////Create consructor function
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return this.name[0] + this.name[this.name.length - 1]
        }
    }

    /////////////////Create constructor func movie
    function Movie(title, duration, genre) {
        this.title = title;
        this.duration = duration;
        this.genre = genre;
        this.getData = function () {
            return this.title + ", " + this.duration + "min." + ", " + this.genre.getData() + "\n"
        }
    }

    //////////////////Create const func program
    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.numbOfMovies;
        this.addMovie = function (a) {
            this.listOfMovies.push(a)
        };
        this.getData = function () {
            this.numbOfMovies = this.listOfMovies.length;
            var res = "";
            var count = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                res += this.listOfMovies[i].getData();
                count += this.listOfMovies[i].duration;
            }
            return this.date + ',\t' + count + ',\n' + res + '\n';

        }
    }



    ///////////Create const func festival
    function Festival(name) {
        this.name = name;
        this.listOfProg = [];
        this.numbOfMovInProgram
        this.addProgram = function (p) {
            this.listOfProg.push(p)
        };
        this.getData = function () {
            var res = "";
            var count = 0;
            for (var i = 0; i < this.listOfProg.length; i++) {
                res += this.listOfProg[i].getData() + '\n';
                for (var j = 0; j < this.listOfProg[i].listOfMovies.length; j++) {
                    count++;
                }

            }
            return this.name + " festival has " + count + ' movie titles ' + '\n ' + res
        }
    }
    //////////////Create function movie
    var createMovie = function (title, duration, genre) {
        return new Movie(title, parseInt(duration), genre)
    }
    /////////////////create function program
    var createProgram = function (date) {
        return new Program(date)
    }


    var progr = createProgram("20.05.2020")
    console.log(progr);

    var zanr = new Genre("Action")
    var zanr1 = new Genre("Drama")
    var mov = createMovie("Lord of the rings", "150", zanr)
    console.log(mov);



    var film = new Movie("Lord of the rings", 150, zanr)
    var film1 = new Movie("Seven pounds", 120, zanr1)
    var film2 = new Movie("Seven pounds", 120, zanr1)
    var prog = new Program("06.03.2020")
    var prog1 = new Program("10.05.2020")

    prog1.addMovie(film2)
    prog.addMovie(film);
    prog.addMovie(film);
    prog.addMovie(film1);

    var fest = new Festival("Bitef")
    fest.addProgram(prog);
    fest.addProgram(prog1);
    console.log(fest.getData());








})()