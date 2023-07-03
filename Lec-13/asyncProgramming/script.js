console.log("Hello");

delay(5);

console.log("Coders");



function delay(n) {
    let currTime = new Date().getTime();
    while (currTime + n * 1000 >= new Date().getTime()) {

    }
}