
// datatype is function
console.log(typeof Function);
console.log(typeof Array);
console.log(typeof String);
console.log(typeof Number);
console.log(typeof Object);
console.log(typeof Boolean);


console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(String.prototype.__proto__ === Object.prototype);
console.log(Boolean.prototype.__proto__ === Object.prototype);
console.log(Number.prototype.__proto__ === Object.prototype);



let arr = [1,2,3,4];

Array.prototype.push = function(){
    console.log('Not pushing any number anymore!!');
}

arr.push(10);

console.log(arr.__proto__.__proto__ === Object.prototype);




