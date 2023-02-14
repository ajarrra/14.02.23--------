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
    isEmployed: true
};

let Nestana = {
    name: "NEstana",
    age: 56,
    weight: 52
};

// view , edit , add
console.log (Ajar.age);
console.log (Elya.name);
console.log (Nestana.weight );


Ajar.age = 81; //меняем свойство
console.log(Ajar.age);


Nestana.weight = 50; 
console.log(Nestana.weight);

Ajar.favouriteBooks = ["Harry Potter ", " harry poter 2"]; //добавляем свойство



delete Ajar.favouriteBooks; //удаляем свойство
