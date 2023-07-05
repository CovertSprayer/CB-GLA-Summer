
let person1 = {
    name:'Abhishek',
    age:25,
    isAdult:true
}


// ---------------- constructor function
function Person(name, age, isAdult){
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;
}

Person.prototype.getDetails = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}, isAdult: ${this.isAdult}`);
}

let p1 = new Person('Mayank', 24, true);
let p2 = new Person('Navneet', 16, false);

console.log(p1);
console.log(p2);

p1.getDetails();
p2.getDetails();


console.log(p1.__proto__ === Person.prototype);
console.log(p2.__proto__ === Person.prototype);

console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);





