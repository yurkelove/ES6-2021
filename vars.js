// var - можно обновлять, можно повторно обьявлять
// область видимости переменной , это функция, или глобальный обьект window

// let , const - область видимости блок, может быть функция , любой элемент с фигурными скобками
// let - можно обновлять, const - нет

let speed = 60;

// const car = 'tesla';
// можно обновить обьект 
const car = {
    name: 'tesla',
    color: 'red'
}

car.name = "audi"; // можно обновить обьект

speed = 40;


// Стрелочная функция
// Все стрелочные функции анонимные, или же можем присвоить переменной
// стрелочная функция не создает контенктс исполениния, а использует внешний (this)

const header = document.querySelector('.header');

header.addEventListener('click', function() {
    console.log(this); // () =>  будем указывать на глобальный обьект window, внутри функции стрелочной привязывается к внешнему контексту
    this.style.color = "red";

    setTimeout( () => { // не сработает так как контекст this будет смотреть на глобальный window, нужно переделать на () => и тогда this использует внешний контекст
        console.log(this);
        this.style.color = 'red';
        this.style.textTransform = "upperCase";
    }, 200)
})