'use strict';
(function () {
    ///////////////////////////////////// CONSTRUCTOR FUNCTIONS
    function Product(name, price, expDate) {
        this.name = name;
        this.price = price;
        this.expDate = expDate;
        this.id = Math.round(((99999 - 10000) * Math.random()) + 10000);
        this.getInfo = function () {
            return this.name[0] + this.name[this.name.length - 1] + this.id + ", " + this.name + ", " + this.expDate;
        }
    }
    function ShoppingBag() {
        this.listOfProducts = [];
        this.getMostExpensive = function () {
            var sortArray = [];
            var noOfElem = this.listOfProducts.length;
            for (var i = 0; i < noOfElem; i++) {
                sortArray.push(this.listOfProducts[i].price);
                console.log('whaat');

            }

            sortArray.sort(function (a, b) { return b - a });
            return sortArray[0];

        }
        this.addProduct = function (product) {
            var today = new Date();
            if (Date.parse(product.expDate) > Date.parse(today)) {
                this.listOfProducts.push(product);
            } else {
                return "The date is not valid!"
            }


        }
        this.averagePrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return (sum / listOfProducts.length).toFixed(3);
        }
        this.calculateTotatlPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return sum;

        }
    }
    function PaymentCard(balance, status, validation) {
        this.balance = balance;
        this.status = status;
        this.validation = validation;
    }
    //////////////////////////////// CREATE FUNCTIONS
    var createProduct = function (name, price, expDate) {
        return new Product(name, price, expDate);
    }
    var createShoppingBag = function () {
        return new ShoppingBag();
    }
    var createPaymentCard = function (balance, status, validation) {
        return new PaymentCard(balance, status, validation);
    }

    ///////////////////////////CHECKOUT FUNCTION
    var checkoutAndBuy = function (bag, card) {
        if (card.balance > bag.calculateTotatlPrice()) {
            return 'PURCHASE HAS BEEN SUCCESSFUL';
        }
        return "YOU DONT HAVE ENOUGH MONEY ON YOUR ACCOUNT";
    }

    /////////////////////////////////////////// OPERATIONS
    var item1 = createProduct('Neseser', 523, '12 04 2023');
    var item2 = createProduct("Banana", 139, "04 05 2020");
    var item3 = createProduct("Apple", 100, "08 04 2017");

    var cart = createShoppingBag();

    cart.addProduct(item1);
    cart.addProduct(item2);
    cart.addProduct(item3);

    var masterCard = createPaymentCard(215166, 'active', '05 05 2025');
    console.log(checkoutAndBuy(cart, masterCard));



})();





// function calcSumOfArray (array){
//     //     var sum=0;
//     //     for(var i=0;i<array.length;i++){
//     //         sum+=array[i].price;
//     //     }
//     // }