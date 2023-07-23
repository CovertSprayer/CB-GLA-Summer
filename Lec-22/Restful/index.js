const express = require('express');
const app = express();
const path = require('path');
const comments = require('./data/comments');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // res.send('Working FINE!!');
    res.render('home');
});

app.get('/comments', (req, res) => {
    // res.send(comments);
    res.render('comments/index', { comments })
});

app.get('/comment/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { text, createdBy } = req.body;
    comments.push({
        id: comments.length + 1,
        text,
        createdBy
    });

    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find((comment) => {
        return comment.id == id
    });

    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id == id);
    res.render('comments/edit', { comment });
});


///// update and delete are left








const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at PORT', PORT);
})