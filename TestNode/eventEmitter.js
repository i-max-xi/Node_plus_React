const EventEmitter = require('events');

const celebrity = new EventEmitter();

//Subscribe to celebrityfr observer 1

celebrity.on('race', (result) => {
    result === 'win' ? 
    console.log('congrats')
    : console.log('booo');

})


process.on('exit', (code) => {
    console.log("Process exit event with code: ", code);
})

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');