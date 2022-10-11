setTimeout(() => {
    console.log('🐇 finishes!');
}, 1000)
console.log('🐢 finishes!');

process.on('exit', (code) => {
    console.log("Process exit event with code: ", code);
})

// let myobj = {val :'🐢 finishes!'};
// console.log(typeof(myobj));

// JSON.stringify(myobj);

// console.log(typeof(myobj));

// setTimeout(() => {
//     console.log('🐇 finishes!');
// }, 1000)