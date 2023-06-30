

// function decelaration
function add(){
    var a = 10;
    var b = 20;
    console.log(a+b);

}
console.log(typeof add);

// function call
add();


// parameterised function
function multiply(num1, num2){
    console.log(num1*num2);
}

multiply(5,2);
multiply(5,2);
multiply(5,2);
multiply(5,2);

// function returning a value

function subtract(num1, num2){
    return num1-num2;
}

let ans = subtract(10, 8);
console.log(ans)

// function is datatype in js like other datatypes eg: string, number, boolean etc 

function getMovieFun(movieName){

    function Avengers(){
        console.log('Inside Avengers Function');
    }

    function WonderWoman(){
        console.log('Inside WonderWoman Function');
    }

    function _default(){
        console.log('No Matched Movie Function Found!!');
    }

    if(movieName === 'Avengers'){
        return Avengers;
    }
    else if(movieName === 'WonderWoman'){
        return WonderWoman;
    }
    else{
        return _default;
    }
}

// var finalFunction = getMovieFun('Avengers');
var finalFunction = getMovieFun('WonderWoman');
// console.log(typeof finalFunction);
// finalFunction();
// console.log(finalFunction);

getMovieFun('kdfsdkl')();


// add('hello',5); // it wont throw any error

// function add(a,b){
//     console.log(a+b)
//     return a+b;
// }




// console.log(sum(5,6)) // -> will throw an error(sum is not defined)

// var sum = function(a,b){
//     return a+b;
// }


//------------------------------arrow function

var sum = function(a,b){
    return a+b;
}

//  step -1
var sum = (a,b)=>{
    return a+b;
}
// step -2 (if u have single line to return)
var sum = (a,b) => a+b;

// step-3 (if u have single parameter)
var print = a => console.log(a);
print('this is something you should print')

var subtract = (a,b) => a-b;

console.log(subtract(2,6));


// --------------------------- HOF and callback functions

var rectData = [{l:5,b:5},{l:20,b:2},{l:10,b:8},{l:7,b:12}];

var area = (l,b) => l*b;
var perimeter = (l,b) => 2*(l+b);

function getData(data, logicFun){
    var areaData = [];
    for(let rectangle of data){
        var ans = logicFun(rectangle.l, rectangle.b);
        areaData.push(ans);
    }
    return areaData;
}

console.log(getData(rectData, area));
console.log(getData(rectData, perimeter));



// function area(l,b){
//     return l*b;
// }


// function getArea(data){
//     var areaData = [];
//     for(let rectangle of data){
//         var length = rectangle.l;
//         var breath = rectangle.b;

//         var area = (length*breath);

//         areaData.push(area);
        
//     }
//     return areaData;
// }

// var areaData = getArea(rectData);
// console.log(areaData);

//High order Function HOF-> if a function accepts or returns a function that function is called HOF
// eg-> line no 117 -> getData,
// eg-> line no 37 -> getMovieFun
