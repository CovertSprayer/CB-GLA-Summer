const colors = require('colors'); // returns an object
const figlet = require('figlet');


figlet('Node JS', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log(data.rainbow);
})

console.log('Hello Coders'.green);
console.log('JavaScript'.rainbow);