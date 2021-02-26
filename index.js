console.log('Request data...');

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendDate = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendDate);
    }, 2000)
})

// promise.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)
//         },2000)
//     })

//     p2.then(clientData => {
//         console.log('Data received', clientData);
//     })
// })

// Упростим

promise.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            // Сделаем ошибку
            // reject(data);
            resolve(data)
        },2000)
    })
}).then(clientData => {
    console.log('Data received', clientData);
    clientData.fromPromise = true;
    return clientData
}).then(data => {
    console.log('Modified', data)
}).catch(err => {
    console.error('Error:', err)
}).finally(() => console.log('В любом случае выводится в конце'))



const sleep = ms => new Promise (resolve => setTimeout(() => resolve(), ms));

sleep(2000).then(() => console.log('After 2 sec'));
sleep(4000).then(() => console.log('After 4 sec'));

// 2 возможности

// Сработает только тогда когда завершаться все промисы в массиве
Promise.all([sleep(2000), sleep(6000)])
    .then(() => {
        console.log('All promise working');
    })

// Сработает только тогда когда завершаться первый промис
Promise.race([sleep(2000), sleep(6000)])
    .then(() => {
        console.log('Race working');
    })