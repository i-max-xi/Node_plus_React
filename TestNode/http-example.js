// const http = require('https');    // main class
// const { request } = require('https');   //request destructured out

const { get } = require('https');   // get for when request only entails getting and not receiving


// const req = get('https://www.google.com', (res) => {
    
get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log("No more data")
    })
});

// req.end();    // end not needed when you get