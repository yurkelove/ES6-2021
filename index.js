// ООП - парадигма програмированния

// Инкапсуляция, полиморфизм и наследование

// Инкапсуляция - позволяет нам несколько свойст в один обьект в одном классе, можем через this

class Person {
    constructor (name, sername) {
        console.log(`constructor created, ${name} ${sername}`);
        this.name = name;
        this.sername = sername;
    }

    toString() {
        return `Person with name ${this.name} and sername ${this.sername}`
    }
}

function buttonClick() {
    // Создали обьект , что есть екземляром класса Person
    let person = new Person("Yura","Kuzkin");
    let person2 = new Person("Ivan", "Ivanov");
    console.log(person);
    console.log(person2);
    console.log(person.toString());
}

// Полиморфизм - позволяет создавать несколько классов и задействовать методы с одними и темежи названия и свойства, но будут разная информация

class User {
    constructor(name, age) {
        this.name = name + "_user";
        this.age = age + 1;
    }

    toString() {
        return `User ${this.name} ${this.age}`
    }
}

// Наследование , унаследовали все что есть у Person, и можем усовершенствовать

class PersonNew extends Person {
    setRole(role) {
        this.role = role;
    }

    getRole(role) {
        return this.role;
    }
    // Можем переопределить 
    toString() {
        return `User ${this.name} ${this.sername} and role ${this.getRole()}`;
    }
}

function buttonClick() {
    // Создали обьект , что есть екземляром класса Person
    let person = new Person("Yura","Kuzkin");
    let person2 = new User("Ivan", "Ivanov");
    console.log(person);
    console.log(person2);
    console.log(person.toString());
    // Полиморфизм
    console.log(person2.toString());
    // Наследование
    let person3 = new PersonNew("Yura", "Kuzkin");
    person3.setRole('front-end-developer');
    console.log(person3);
    // Переписали метод
    console.log(person3.toString());
}


// Функциональное програмированние

// Функцию можно присвоить переменной и передать в аргумент
// 1 - чистая функция, желательно
// которая не обращается к внешним переменным, только принимает аргументы и работает с ними

// Нечистая - функция которая обращается вне своей функции например к переменным, к источникам данных
// Переменные не должны быть перезаписаны и изменяемы

function main(a,b) {
    return a + b;
}

// Нечистая
function main2() {
  console.log("hello world");
}

// Функции первого класса и высшего порядка
// Функция первого класса - ведет себя как переменная, можем передать аргументов в другую, и вернуть ее

const firstClass = function ( a, b) {
    return a + b;
}

// Функция высшего порядка
// Функция возвращает функцию, или принимает аргуметом другую функцию

function heightClass(a) {
    return function(b) {
        return a + b;
    }
}

let func = heightClass(2);
let res = func(3);

console.log(res);

// Функция высшего порядка

let arr = ['a', 'b', 'c'];
arr.forEach(function(item) {
    console.log(item);
});

function addText(func) {
    return `Hello ${func()}`;
}

let hello = addText(function(){
    return "Sam";
})

console.log(hello);


// Карирование

function curry(func) {
    return function(a) {
        return function(b) {
            return func(a , b);
        }
    }
}

function sum(a,b) {
    return a + b;
}
console.log(sum(1,2));

let cursum = curry(sum);

let res1 = cursum(2)(5);
console.log(res1);

