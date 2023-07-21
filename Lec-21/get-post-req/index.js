const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // res.send('working fine!!');
    res.render('home')
})

app.get('/userdata', (req, res) => {
    res.send('you made a get request')
})

app.post('/userdata', (req, res) => {
    console.log(req.body);
    res.send('You made a post request');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at PORT', PORT);
})

