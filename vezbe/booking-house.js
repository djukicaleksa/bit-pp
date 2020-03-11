`use strict`;
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
        const age = Math.round((new Date().getTime() - this.dateOfBirth.getTime()) / 1000 / 60 / 60 / 24 / 7 / 52);
        return `${this.name}\t${this.surname}\t${age} years old`;

        //return ` ` + this.name + `\t ` + this.surname + `\t` + (Math.abs(Math.round((this.dateOfBirth.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24 / 7 / 52))) + ` years old`;
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }
    Player.prototype.getData = function () {
        const age = (Math.abs(Math.round((new Date().getTime() - this.person.dateOfBirth.getTime()) / 1000 / 60 / 60 / 24 / 7 / 52)));
        return `\t\t${this.country.name}, ${this.country.odds * this.betAmount}eur, ${this.person.name}, ${this.person.surname}, ${age} years old`;
        //return ` ` + this.country.name + `, ` + this.country.odds * this.betAmount + ` eur, ` + this.person.name + ` ` + this.person.surname + ` ` + (Math.abs(Math.round((this.person.dateOfBirth.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24 / 7 / 52))) + ` years old`;
    }
    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    Address.prototype.getData = function () {
        return `\t${this.street}, ${this.number}, ${this.postalCode}${this.city}, ${this.country}`;
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }
    BettingPlace.prototype.getNumberOfPlayers = function () {
        return this.listOfPlayers.length;
    }

    BettingPlace.prototype.getData = function () {
        let sum = 0;
        this.listOfPlayers.forEach(function (player) {
            sum += player.betAmount;
        })
        // for (let i = 0; i < this.listOfPlayers.length; i++) {
        //     sum += this.listOfPlayers[i].betAmount;
        // }
        return `\t${this.address.street}, ${this.address.postalCode}, ${this.address.city}, Sum of all bets : ${sum}eur`;
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
        let res = ``;
        this.listOfBettingPlaces.forEach(function (bettingPlace) {
            res += `${bettingPlace.getData()}\n`;

            bettingPlace.listOfPlayers.forEach(function (player) {
                res += `${player.getData()}\n`;
            })
        });



        // for (let i = 0; i < this.listOfBettingPlaces.length; i++) {
        //     res += this.listOfBettingPlaces[i].getData() + '\n';
        //     for (let j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
        //         res += this.listOfBettingPlaces[i].listOfPlayers[j].getData() + `\n`;
        //     }
        // }

        return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfPLayers} bets,\n${res}`;

    }
    const CONTINENTS = Object.freeze({
        EUROPE: `EU`,
        ASIA: `AS`,
        AFRICA: `AF`,
        SOUTHAMERICA: `SA`,
        NORTHAMERICA: `NA`,
        AUSTRALIA: `AU`



    });

    const createNewPlayer = function (person, betAmount, country) {
        return new Player(person, betAmount, country);
    }
    const createBettingPlace = function (address) {
        return new BettingPlace(address);
    }
    const tournament = new BettingHouse(`SerbiaOpen`);

    const person1 = new Person(`Aleksa`, `Djukic`, `05 07 99`);
    const person2 = new Person(`Milorad`, `Petrovic`, `7 05 99`);
    const person3 = new Person(`Georgije`, `Isailovic`, `8 04 99`);
    const person4 = new Person(`Dragorad`, `Arsovic`, `9 02 99`);

    const address1 = new Address(`Serbia`, `RItopek`, 11353, `Kajmcalanska`, `87`);
    const address2 = new Address(`China`, `Ripotek`, 16213, `Dunavsko Sokace`, `815257`);

    const mozzart = new BettingPlace(address1);
    const soccer = new BettingPlace(address2);

    const serbia = new Country(`Serbia`, 1.3, CONTINENTS.EUROPE);

    const player1 = createNewPlayer(person1, 20000, serbia);
    const player2 = createNewPlayer(person2, 1131234, serbia);
    const player3 = createNewPlayer(person3, 1351241, serbia);
    const player4 = createNewPlayer(person4, 131673, serbia);

    mozzart.addPlayer(player1);
    mozzart.addPlayer(player2);

    soccer.addPlayer(player3);
    soccer.addPlayer(player4);

    tournament.addBettingPlace(mozzart);
    tournament.addBettingPlace(soccer);

    console.log(tournament.getData());








})();