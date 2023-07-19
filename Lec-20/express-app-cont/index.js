const express = require('express');
const app = express();



app.get('/', function (req, res) {
    // console.log(req);
    res.send('You are at home page');
})

app.get('/random', function (req, res) {
    const randomNumber = Math.floor(Math.random() * 10);
    res.send(`Random generated number is ${randomNumber}`);
})

app.get('/docs/css/:option', (req, res) => {
    const { option } = req.params;
    // console.log(req.params);
    // console.log(req.params.option);
    res.send(`Successfully made a request ${option}`);
})

app.get('/user/:username/:password', (req,res)=>{
    const {username, password} = req.params;

    res.send(`Your username is ${username} and your password is ${password}`);
});


app.get('/print', (req, res)=>{
    const {name, password} = req.query;
    console.log(req.query);
    res.send(`You made a request at /print route and your name is ${name}, your password is ${password}`);
})



app.get('*', function (req, res) {
    res.send('Sorry!!, Page Not Found!!')
})

const port = 5000;

app.listen(port, function () {
    console.log('Server is working fine at port', port);
})
