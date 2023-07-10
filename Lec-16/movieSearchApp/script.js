const form = document.querySelector('form');
const inp = document.querySelector('#inp');
const list = document.querySelector('#list');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    getMovies(inp.value);
    inp.value = '';
    list.innerText = '';
})


function getMovies(searchText){
    const URL = `https://api.tvmaze.com/search/shows?q=${searchText}`;
    // console.log(URL);

    axios.get(URL)
        .then((res)=>{
            for(let movieItem of res.data){
                if(movieItem.show.image){

                    const image = document.createElement('img');
                    image.setAttribute('src' , movieItem.show.image.medium);
                    image.style.margin = '10px';

                    console.log(image);

                    list.append(image);


                }
            }
        })

}

