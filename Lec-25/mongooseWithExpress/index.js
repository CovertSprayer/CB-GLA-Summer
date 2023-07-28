const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const methodOverride = require('method-override');


mongoose.connect('mongodb://127.0.0.1:27017/GLA-DB')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.send('working fine!!');
});

app.get('/users', async (req, res) => {

    // User.find({})
    //     .then(users => res.send(users))
    //     .catch(err => res.send(err));

    try {
        const users = await User.find({});
        res.render('users/index', { users })
    }
    catch (error) {
        res.send(error);
    }
});


app.get('/users/new', (req, res) => {
    res.render('users/new')
})

app.post('/users', async (req, res) => {
    const { name, photo, gender, email, contact, address, age } = req.body;
    await User.create({ name, photo, gender, email, contact, address, age });

    res.redirect('/users')
});


app.get('/users/:id/edit', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.render('users/edit', { user });
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.render('users/show', { user });
})

app.patch('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, photo, gender, email, contact, address, age } = req.body;
    const user = await User.findById(id);



    user.name = name;
    user.age = age;
    user.photo = photo;
    user.gender = gender;
    user.email = email;
    user.contact = contact;
    user.address = address;

    await user.save();
    res.redirect('/users');
})



app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.redirect('/users');
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
});
