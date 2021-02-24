
const width = '100mm';
const auto = {
    name: 'Tesla',
    year: 2020,
    color: "silver",
    dimensions: {
        size: {
            width: '1,99mm',
            length: '5,036mm'
        }
    }
}

// const { name, year, color } = auto;

// const { width, length } = auto.dimensions.size;

// Перейменовать переменную, новое название carWidth
const { width: carWidth, length } = auto.dimensions.size;
console.log(carWidth);


const autoName = {
    title: 'Tesla',
    color: "silver",
}

// Дефолтное значение
const {title, color = "green"} = autoName;
console.log(title, color);


// С массивом

const mass = ['Tesla', '2020', 'green'];

const [massTitle, massYear, massColor] = mass;

console.log(massTitle,massYear,massColor);

// Строка

const stringTest = "Tesla, 2020,green";

const [stringName, stringYear, stringColor] = stringTest.split(',');
console.log(stringName, stringYear ,stringColor);

// Если надо разбить сразу в переменные отдельные 
const varTest = "Tesla, 2020,green, 20, discount";

const [varName, varYear, varColor, ...dealer] = varTest.split(',');

console.log(varName, varYear ,varColor, dealer);

const [quantity, discount] = dealer;
console.log(quantity, discount);

// Поменять переменные местами

let left = "left";
let right = "right";

[right, left] = [left, right]
console.log({left,right})

// Деструктуризация переменных из функции
function convert(valute) {
    const complete = {
        Eur: valute * 30,
        Usd: valute * 27.75
    }

    return complete;
}

const amount = convert(5000);
console.log(amount)
const { Eur, Usd } = convert(5000);
console.log(Eur);


// Рассчитываем стоимость заказа и доставки
// Сделаем что б порядок передачи не имел значение и не ломалось
function getTotal({total = 1000, shipment = 0.1} = {}) {
    return total + total * shipment;
}

const total = getTotal();
console.log(total);
