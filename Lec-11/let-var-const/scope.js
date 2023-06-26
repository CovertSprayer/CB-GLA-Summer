
function random(){
    var a1 = 10;
    let b1 = 20;
    const c1 = 30;

    {
        console.log('Inside Block-1')
        console.log(a1,b1,c1);
        var a2 = 100;
        let b2 = 200;
        const c2 = 300;
        console.log(a2);
        console.log(b2);
        console.log(c2);
    }
    {
        console.log('Inside Block-2')

        console.log(a1,b1,c1);
        // console.log(a2,b2,c2);
        console.log(a2);
        // console.log(b2); // error
        // console.log(c2); // error
    } 
}

random()

// console.log(a1,b1,c1) // error
