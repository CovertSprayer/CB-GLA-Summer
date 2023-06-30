//-------------------- adv closure

function outerFun() {
    let a = 10;

    function innerFun() {
        let b = 100;
        a++;
        console.log(a);

        function innerMostFun() {
            b++;
            a++;
            console.log(a, b);
        }

        return innerMostFun;
    }
    return innerFun;
}

let fun = outerFun();
let fun1 = fun();
let fun2 = fun();

fun1();
fun1();
fun1();
fun2();
fun2();
fun1();

//11,12,13,11,12,14
//11 12 13 14 15 16
//11,12,13,14,15,16,11,12,13,14,17,18
//11,11,12,13,14,12,13,15
//11,12,13,11,12,14

