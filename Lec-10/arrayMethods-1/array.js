var arr = [2,6,7,3,4,0];

console.log(arr);

// insert at end
arr.push(20);
console.log(arr);

// remove from end
var lastValue = arr.pop();
console.log(lastValue)
console.log(arr);

// insert at front 
arr.unshift(50);
console.log(arr);

// remove at front
arr.shift();
console.log(arr);

// spilce(starting index, no of elem to be removed, elem to be inserted);
arr.splice(2,1);
console.log(arr);

arr.splice(2,0,50,40,-2);
console.log(arr);

arr.splice(3,1,400);
console.log(arr);

