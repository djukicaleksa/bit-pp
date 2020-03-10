"use strict";
(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    Person.prototype.getData = function () {
        return " " + this.name + "\t " + this.surname + "\t" + (Math.abs(Math.round((this.dateOfBirth.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24 / 7 / 52))) + ' years old';
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }
    Player.prototype.getData = function () {
        return " " + this.country.name + ", " + this.country.odds * this.betAmount + " eur, " + this.person.name + " " + this.person.surname + ' ' + (Math.abs(Math.round((this.person.dateOfBirth.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24 / 7 / 52))) + ' years old';
    }
    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    Address.prototype.getData = function () {
        return " " + this.street + " " + this.number + ", " + this.postalCode + this.city + ", " + this.country;
    }
    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }
    BettingPlace.prototype.getNumberOfPlayers = function () {
        return this.listOfPlayers.length;
    }

    BettingPlace.prototype.getData = function () {
        var sum = 0;
        for (var i = 0; i < this.listOfPlayers.length; i++) {
            sum += this.listOfPlayers[i].betAmount;
        }
        return " " + this.address.street + ", " + this.address.postalCode + ', ' + this.address.city + ", sum of all bets : " + sum + 'eur';
    }
    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPlayers.push(player);
    }
    function BettingHouse(competition, ) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPLayers = 0;

        this.addBettingPlace = function (bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace);
            this.numberOfPLayers += bettingPlace.getNumberOfPlayers();
        }

    }
    BettingHouse.prototype.getData = function () {
        var res = 0;
        for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
            res += this.listOfBettingPlaces[i].getData() + '\n';
            for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
                res += this.listOfBettingPlaces[i].listOfPlayers[j].getData() + '\n';
            }
        }

        return '' + this.competition + ', ' + this.listOfBettingPlaces.length + ' betting places, ' + this.numberOfPLayers + ' bets\n'
            + res;
    }
    var CONTINENTS = Object.freeze({
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTHAMERICA: "SA",
        NORTHAMERICA: "NA",
        AUSTRALIA: "AU"


    });

    var createNewPlayer = function (person, betAmount, country) {
        return new Player(person, betAmount, country);
    }
    var createBettingPlace = function (address) {
        return new BettingPlace(address);
    }
    var tournament = new BettingHouse('SerbiaOpen');

    var person1 = new Person('Aleksa', 'Djukic', '05 07 99');
    var person2 = new Person('Milorad', 'Petrovic', '7 05 99');
    var person3 = new Person('Georgije', 'Isailovic', '8 04 99');
    var person4 = new Person('Dragorad', 'Arsovic', '9 02 99');

    var address1 = new Address('Serbia', 'RItopek', 11353, 'Kajmcalanska', '87');
    var address2 = new Address('China', 'Ripotek', 16213, 'Dunavsko Sokace', '815257');

    var mozzart = new BettingPlace(address1);
    var soccer = new BettingPlace(address2);

    var serbia = new Country('Serbia', 1.3, CONTINENTS.EUROPE);

    var player1 = createNewPlayer(person1, 20000, serbia);
    var player2 = createNewPlayer(person2, 1131234, serbia);
    var player3 = createNewPlayer(person3, 1351241, serbia);
    var player4 = createNewPlayer(person4, 131673, serbia);

    mozzart.addPlayer(player1);
    mozzart.addPlayer(player2);

    soccer.addPlayer(player3);
    soccer.addPlayer(player4);

    tournament.addBettingPlace(mozzart);
    tournament.addBettingPlace(soccer);

    console.log(tournament.getData());





    var player1 = new Player


})();