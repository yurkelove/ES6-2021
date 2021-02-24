const car = "Tesla";
const carYear = 2018;


const details = `Автомобилю ${car} - ${2021 - carYear} года.`;


const burger = {
    name: "Golden",
    price: 218
}

const html = `
    <div>
        <h2>${burger.name}</h2>
        <p>${burger.price}</p>
    </div>
`

document.body.innerHTML = html;


// Вложженая структура

const cars = [
    {name: "Tesla", year: 2020},
    {name: "Nissan", year:2012}
]

const htmlCars = `
    <ul>
    ${cars.map(car => `<li>${car.name}</li>`)}
    </ul>
`;

document.body.innerHTML = htmlCars;

const carDetails = {
    name: "Golden",
    price: 218,
    info: "New",
    tags: ["electric","fast"]
}

const renderTags = (tags) => {
    return `
        <ul>
            ${tags.map(tag => `<li>
                ${tag}
            </li>`).join('')}
        </ul>
    `
}

const htmlCarDetails = `
    <div>
        <p>Name: ${carDetails.name}</p>
        <p>Price: ${carDetails.price}</p>
        ${carDetails.info ? `<p>r</p>` : "n"}
    </div>
`

const renderTag = `
    <div>
    <p>Name: ${carDetails.name}</p>
    <p>Price: ${carDetails.price}</p>
    ${renderTags(carDetails.tags)}
    </div>
`


document.body.innerHTML = renderTag;