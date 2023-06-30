//-------------------- basic closure

function outerFun() {
    let a = 10;

    function innerFun() {
        a++;
        console.log(a);
    }

    return innerFun;
}

let fun1 = outerFun();
let fun2 = outerFun();


// fun1(); //11
// fun1(); //12
// fun1(); //13
// fun1(); //14

fun1(); //11 ,11 ,11
fun1(); //12 ,12 ,12
fun2(); //13 ,11 ,11
fun2(); //14 ,11 ,12
fun1(); //15 ,13 ,13