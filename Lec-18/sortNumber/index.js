const fs = require('fs');
const path = require('path');

function getData(fileName) {

    return new Promise((resolve, reject) => {
        const F1 = path.join(__dirname, 'data', fileName);
        fs.readFile(F1, 'utf-8', (err, data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    })
}


async function createOutput(){
    const data1 = await getData('input1.txt');
    const data2 = await getData('input2.txt');

    const arr1 = data1.split('\r\n');
    const arr2 = data2.split('\r\n');

    const arr = [...arr1, ...arr2];

    arr.sort((a,b)=>{
        return a-b;
    })

    const finalData = arr.join('\n');

    const finalLocation = path.join(__dirname, 'data', 'output2.txt');
    fs.writeFile(finalLocation, finalData, (err)=>{
        if(err){
            console.log(err);
            return;
        }

        console.log('File written successfully!!');
    })



}

createOutput();





// getData('input1.txt')
//     .then((data1)=>{
//         const arr1 = data1.split('\r\n');
//         getData('input2.txt')
//             .then((data2)=>{
//                 const arr2 = data2.split('\r\n');
//                 const arr = [...arr1, ...arr2];
//                 arr.sort((a,b)=> {
//                     return a-b;
//                 })

//                 const F3 = path.join(__dirname, 'data', 'output.txt');
//                 const finalData = arr.join('\n');

//                 fs.writeFile(F3, finalData, (err)=>{
//                     if(err){
//                         console.log(err);
//                         return;
//                     }
//                     console.log('File Written Successfully!!');
//                 })

//             })
//     })




// fs.readFile(F2, 'utf-8', (err, data) => {
//     input2 = data;
// });

// console.log(input1);
// console.log(input2);

// let input = [...input1, ...input2];

// console.log(input);






