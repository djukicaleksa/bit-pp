"use strict";
////////////////////Player constructor function
(function (){
    function Person(name,surname) {
        this.name = name;
        this.surname = surname;
    }
    /////////Person prototype
    Person.prototype.getFullName = function (){
        return this.name +" , " + this.surname;
    }//////////Employee constructor function
    function Employee (name,surname,job,salary) {
        Person.call(this,name,surname);
        this.job = job;
        this.salary = salary;
    }
    //////////Employee prototype
    Employee.prototype=Object.create(Person.prototype); ///////// Prototype chaining
    Employee.prototype.constructor = Employee; //////////// Prototype chaining
    Employee.prototype.getData = function(){
        var getFullName=this.getFullName(); /////////////getting rid of this;
        var getFullName = Object.getPrototypeOf(Employee.prototype).getFullName.call(this); ////Prototype chaining
        return getFullName + " , " + this.salary;
    }/////////////////// Developer constructor function
    function Developer (name,surname,job,salary,specialization){
        Employee.call(this,name,surname,job,salary);
        this.specialization=specialization;
    }
    ///////////////////Developer Prototype
    Developer.prototype=Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;
    Developer.prototype.getSpecializaton = function (){
        var getData = this.getData();
        var getData = Object.getPrototypeOf(Developer.prototype).getData.call(this);
        return this.specialization + " , " + getData;
    }////////////////// Manager constructor function
    function Manager (name,surname,job,salary,specialization,department){
        Developer.call(this,name,surname,job,salary,specialization);
        this.department=department;
    }
    ///////////////////Manager prototype
    Manager.prototype=Object.create(Developer.prototype);
    Manager.prototype.constructor = Manager;
    Manager.prototype.getDepartment = function (){
        var getFullName = this.getFullName();
        //var getFullName = Object.getPrototypeOf(Manager.prototype).getFullName.call(this);
                    ///Two lines above should do the same thing?
        return this.department + " , " + getFullName;///////////THis should only return department info,but for the sake of progress we use methodes given by prototype chaining
    }
    Manager.prototype.getAllData = function (){
        var getSpecializaton = this.getSpecializaton();

        return getSpecializaton + " , " + this.department;
    }

    var person =new Manager("Aleksa","Djukic","Something",2525,"NotSure","Doesnt Matter");
    console.log(person.getDepartment());
    console.log(person.getAllData());


})();