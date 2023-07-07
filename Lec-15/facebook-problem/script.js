
function downloadFile(path, cb){
    console.log('Starting to download the file from', path);
    setTimeout(() => {
        const file = path.split('/').pop();
        cb(file);
    }, 3000);
}

function compressFile(fileName, cb){
    console.log('Starting to compress the file', fileName);
    setTimeout(() => {
        const compressedFile = fileName.split('.')[0] + '.zip';
        cb(compressedFile);
    }, 2000);
}

function uploadFile(file, cb){
    console.log('Starting to upload the file', file);
    setTimeout(() => {
        cb();
    }, 3000);
}

downloadFile('http://facebook.com/user/profile.jpg', function(file){
    console.log('file downloaded successfully', file);
    compressFile(file, function(compressedFile){
        console.log('file compressed successfully', compressedFile);
        uploadFile(compressedFile, function(){
            console.log('File uploaded successfully');
        })
    })

});






