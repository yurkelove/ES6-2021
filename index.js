const UkraineCity = ["Kiev", "Chernigiv", "Oddess","Dnepr"];
const EvroupeCity = ["London", "Paris","Madrid"];


// spread - разварачивает массив с которым мы работаем

// склонируем массив
const clone = [...UkraineCity, "Париж2", ...EvroupeCity];


// С обьектами работаем

const ukrWithPopulation = {
    Madrid: 5,
    Kiev: 3,
    Bar: 2,
    Zal: 1
}

const evrWithPopulation = {
    Berlin: 10,
    Praha: 3,
    Par: 2
}

const newObject = {...ukrWithPopulation};
console.log(newObject);

// Practice
const numbers = [5, 37,42,17];

const maxNumber = Math.max(...numbers);

console.log(maxNumber);

const divs = document.querySelectorAll('div');
const nodes = [...divs];


// REST
// область применения 

function sum(a,b, ...rest) {
    console.log(rest)
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const numberS = [1,2,3,4,5];

// Spread

console.log(sum(...numberS));

const a = numberS[0];
const b = numberS[1]

const [c, d, ...other] = numberS;

console.log(c,d, other);

const person = {
    name: "Max",
    age: 20,
    city: 'Moscow'
}

const {name, age, ...address} = person;

console.log(name,age,address)

