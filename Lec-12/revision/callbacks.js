
function check(value, cb) {
    return cb(value)
}

function checkforBool(num) {
    return typeof num === 'boolean';
}

function checkforNum(num) {
    return typeof num === 'number';
}



console.log(check(5, checkforNum));
console.log(check(true, checkforBool));

