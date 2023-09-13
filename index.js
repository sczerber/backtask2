// const N = 1;
// const M = 10;
// for (let i = N; i <= M; i++) {
//     console.log(i)
// }


const fs = require('fs');
const path = require('path');
const axios = require('axios');
const http = require('http');


// fs.writeFile('1.txt', 'Hello !', 'utf-8', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Done!')
// })

// fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//
//     console.log('txt data')
// })
// ;(async () => {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     console.log(data);
// });

// fs.readFile(path.resolve(__dirname, '1.json'), 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('done')
// })

async function f() {

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

    fs.writeFile(path.resolve(__dirname, '1.json'), JSON.stringify(data), 'utf-8', (err) => {
    if (err) {
        throw err;
    }

    console.log(data)
})
}

http
    .createServer((request, response) => {
        response.setHeader("Content-type", "text/html; charset=utf-8;")
        if (request.url === '/create-json-file') {
            f();
            response.write('JSON file created, look at your IDE');
        } else if (request.url === '/test1') {
            response.write('test done')
        } else {
            response.write(request.url);
        }
        response.end();
    })
    .listen(3000);





