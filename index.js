//создали обьект
let example = {};//пустой обьект
let Elya = {
    name: "Elya",
    age: 28,
    isEmployed: false

};         //может юыть хоть скока свойств


let Ajar = {
    name: "Ajar",
    age: 18,
    height: 165,
    weight: 53,
    isEmployed: true,
    sayBye: function () {
        console.log("bye");
    }
};

Ajar.sayBye(); //вызвали функцию в обьете

let Nestana = {
    name: "NEstana",
    age: 56,
    weight: 52,
    greeting: function () {
        console.log("hello my name is " + this.name);
    }
};

Nestana.greeting();

// view , edit , add
console.log(Ajar.age);
console.log(Elya.name);
console.log(Nestana.weight);


Ajar.age = 81; //меняем свойство
console.log(Ajar.age);


Nestana.weight = 50;
console.log(Nestana.weight);

Ajar.favouriteBooks = ["Harry Potter ", " harry poter 2"]; //добавляем свойство

delete Ajar.favouriteBooks; //удаляем свойство

//функция внутри обьекта  это метод
let elaman = {
    name: "elaman",
    age: 28,
    sayHello: function () {
        console.log("Hello " + this.name);
    },
    sayAge: function () {
        console.log("i'am " + this.age + " old");
    }
}

elaman.sayHello(); //выводит функцию в обьекте 
// () обязательно писать что бы вывести
elaman.name = "Elaman agai";
elaman.sayHello();

console.log(elaman.age);
elaman.sayAge();


//обьект кот позволяет хранить число и что то с ним делать
let example1 = {
    number: 0,
    inc: function () {
        this.number = this.number + 1; //добавляет одно
    },
    add: function (num) {
        this.number = this.number + num;     //функция кот увелич число намбер на опред число в методе
    },
    subtract: function (num) {
        this.number = this.number - num;    //метод кот вычитает
    },
    print: function () {
        console.log(this.number); //выводит цифру
    },
}

example1.print();

example1.inc();
example1.inc();
example1.inc();
console.log(example1.number);

//калькулятор достор

example1.add(5);
console.log(example1.number);
example1.subtract(4);
console.log(example1.number);
example1.print();


