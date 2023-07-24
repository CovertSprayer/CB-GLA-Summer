const express = require('express');
const app = express();
const path = require('path');
const comments = require('./data/comments');
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

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

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { text, createdBy } = req.body;

    const comment = comments.find(comment => comment.id == id);
    comment.text = text;
    comment.createdBy = createdBy;

    // res.send('you made a patch request.');
    res.redirect('/comments');
});


app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id == id);
    const index = comments.indexOf(comment);

    comments.splice(index, 1);

    // res.send('you made a delete request');
    res.redirect('/comments');  
});


///// update and delete are left










const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at PORT', PORT);
})