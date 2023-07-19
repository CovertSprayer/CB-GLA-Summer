const express = require('express');
const app = express();
const path = require('path')

console.log(process.cwd());
console.log(__dirname);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.render('home', {
        title: 'Learning templating'
    });
    // res.send('You are at home page');
});

app.get('/user', (req, res) => {
    console.log(req.query);
    const {name, age, address} = req.query;

    res.render('user', {
        name,
        age,
        address
    })
})


const port = 5000;
app.listen(port, () => {
    console.log('Server is up at port', port);
})

