
// ========================explicit binding


// function updatePerson(person, name, age) {
//     person.name = name;
//     person.age = age;
// }

function updatePerson(name, age) {
    this.name = name;
    this.age = age;
    // console.log(this);
}

let person1 = {
    name: 'Abhinav',
    age: 25,
}

let person2 = {
    name: 'Jatin',
    age: 23
}

const details = ['Jatin Rathore', 35];
// updatePerson(person1, 'Abhishek', 25);
updatePerson.call(person1, 'Abhishek', 25);
updatePerson.apply(person2, details);

console.log(person1)
console.log(person2)

let newFun = updatePerson.bind(person2);
newFun('ABCD', '123');

console.log(person2)
