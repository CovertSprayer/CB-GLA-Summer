const URL = 'https://dummyjson.com/products';

const btn = document.querySelector('button');
const list = document.querySelector('.list');


btn.addEventListener('click', ()=>{
    list.innerText = '';

    axios.get(URL)
        .then((res)=>{
            console.log(res.data.products);

            for(let product of res.data.products){

                const li = document.createElement('li');
                li.innerText = product.title;

                list.append(li);
            }
        })
})