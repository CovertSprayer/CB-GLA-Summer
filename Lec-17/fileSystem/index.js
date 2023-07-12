const fs = require('fs');
const path = require('path');

const data = 'this is temp string';

// console.log(__dirname);

const loc = path.join(__dirname, 'data', 'output.txt');

// fs.writeFile(loc, data, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log('File Written Successfully!!');
// });


fs.readFile(loc, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    // console.log(data.toString());
    console.log(data);
});


