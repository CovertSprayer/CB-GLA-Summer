const express = require('express') // returns a function
const app = express(); // returns a object


const todos = ['Go to Swimming', 'Watching Movies', 'Playing Games', 'Coding'];


app.get('/todos', (req, res)=>{
    res.json(todos);
})

app.get('/', (req, res) => {
    console.log('Hello to Server!');
    res.send('You made a request, You are at Home Page');
})

app.get('/dog', (req, res) => {
    res.status(200).send({msg:'Wooof Wooof!!'});
})

app.get('/cat', (req, res) => {
    res.send('<h1>Meowwww!!</h1>');
})

// app.get('/dog', (req,res)=>{
//     res.send('this is another /dog route');
// })


app.listen(4444, () => {
    console.log('Server is Up at port', 4444);
})