const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/random', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10);
    res.render('random', { randomNum });
});

app.get('/print/:n', (req, res) => {
    const { n } = req.params;
    res.render('printN', { n });
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})
