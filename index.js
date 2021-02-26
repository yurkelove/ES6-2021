const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

delay(2000).then(() => console.log('delay'));


const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('Fetch todo started');
//     return delay(2000).then(() => fetch(url)).then(response => response.json());
// }

// fetchTodos().then(data => {
//     console.log('Data', data)
// }).catch(e => console.error(e));


// async await
// await - должны быть асинхронные

async function fetchAsyncTodos() {
    console.log('Fetch todo started');
    // Пока не выполниться дальше не перейдем
    // Обработаем ошибки
    try {
        await delay(2000)
        // Как результат просто в переменную получим наш response
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data', data);
    } catch (e) {
        console.error(e);
    } finally {
        console.log('В любом случае сработает');
    }
    
}

fetchAsyncTodos();