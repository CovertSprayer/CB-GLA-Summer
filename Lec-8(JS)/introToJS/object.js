var obj = {
    'a': true,
    b: false,
    'user age':24,
    print: function(){
        console.log('Hello from Obj');
    },
    marks:[80, 75, 90, 88],
    anotherObj:{
        temp1: 'Inside anotherObj'
    }
}

console.log(obj);
console.log(typeof obj);

// to access value -> ./[]
// console.log(obj.age);
// console.log(obj.print());
// console.log(obj.marks);
// console.log(obj['marks']);
console.log(obj['user age']);
