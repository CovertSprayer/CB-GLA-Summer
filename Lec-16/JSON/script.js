
// IIFEs
// (function(){})();

const obj = {
    firstName: 'Rajesh',
    lastName: 'Kumar',
    age: 30,
    isAdult: true,
    arr: [2,3,4,5],
    print:function(){
        console.log(`Hi my name is ${this.firstName + ' ' + this.lastName}`)
    }
}

console.log(obj);
obj.print();

const objInString = JSON.stringify(obj);
console.log(objInString);
// console.log(objInString.firstName);


const dataInObj = JSON.parse(objInString);
console.log(JSON.parse(objInString));
console.log(dataInObj.firstName);

