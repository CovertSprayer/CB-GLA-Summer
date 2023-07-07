

console.log('you wake up');
console.log('you order food');

function step1(cb){
    setTimeout(() => {
        console.log('Food arrived');
        cb();
    }, 5000);
}

console.log('you order cold drinks');

function step2(){
    setTimeout(() => {
        console.log('Cold drinks arrived');
    }, 3000);
}

// step1();
// step2();

step1(step2);