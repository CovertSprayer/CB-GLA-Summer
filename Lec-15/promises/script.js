
const kalClasshogi = false;

const p = new Promise((resolve, reject) => {
    if(kalClasshogi){
        resolve();
    }
    else{
        reject();
    }
})

p.then(function(){
    console.log('Humne DOM padha!!');
})
.catch(function(err){
    console.log(err);
})