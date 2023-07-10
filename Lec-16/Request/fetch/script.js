const URL = 'https://dummyjson.com/products';

const btn = document.querySelector('button');
const list = document.querySelector('.list');


btn.addEventListener('click', ()=>{
    list.innerText = '';
    
    fetch(URL)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            // console.log(data.products);

            for(let product of data.products){
                console.log(product.title);

                const li = document.createElement('li');
                li.innerText = product.title;

                list.append(li);

            }

        })
        .catch(err => {
            console.log(err);
        })
})




