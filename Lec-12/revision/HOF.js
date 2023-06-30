
// case 1
// function a(fn) {
//     console.log('inside function a');
//     fn();
// }

// function b() {
//     console.log('inside function b');
// }

// a(b);


// case 2
function a() {
    function b() {
        console.log('inside function b');
    }
    console.log('inside function a');
    return b;
}

let temp = a();
temp();
