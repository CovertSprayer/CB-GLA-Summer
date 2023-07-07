const URL = 'http://facebook.com/user/profile.jpg';

function downloadFile(path){
    return new Promise((resolve, reject) => {
        console.log('Starting to download the file from', path);
        setTimeout(() => {
            const file = path.split('/').pop();
            resolve(file);
        }, 3000);
    })
}

function compressFile(fileName){
    return new Promise((resolve, reject) => {
        console.log('Starting to compress the file', fileName);
        setTimeout(() => {
            const compressedFile = fileName.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 2000);
    })
}

function uploadFile(file){
    return new Promise((resolve, reject) => {
        console.log('Starting to upload the file', file);
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}

// downloadFile(URL).then(function(file){
//     console.log('File downloaded successully', file);
//     compressFile(file).then(function(compressedFile){
//         console.log('file compressed successfully', compressedFile);
//         uploadFile(compressedFile).then(function(){
//             console.log('File uploaded successfully');
//         })
//     })
// })

// downloadFile(URL)
// .then(compressFile)
// .then(uploadFile)
// .then(function(){
//     console.log('All Done!!')
// })
// .catch(function(err){
//     console.log(err);
// })

// ------------------------------------- async-await

async function solve(){
    try {
        const file = await downloadFile(URL);
        const compressedFile = await compressFile(file);
        await uploadFile(compressedFile);
        console.log('All Done!!')
    } 
    catch (error) {
        console.log(error);
    }
}

solve();
