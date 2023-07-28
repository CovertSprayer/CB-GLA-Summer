const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/GLA-DB')
    .then(()=> console.log('DB connected'))
    .catch((err)=> console.log(err));

const dummyUsers = [
    {
        name:'Sparsh Singh',
        age:22,
        gender:'Male',
        email:'sparshsingh@gmail.com',
        contact:9090909090,
        address:'New Delhi, India'
    },
    {
        name:'Rohit Kumar',
        age:24,
        gender:'Male',
        email:'rohitkumar@gmail.com',
        contact:9090909090,
        address:'Goa, India'
    },
    {
        name:'Shubham',
        age:22,
        gender:'Male',
        email:'shubham@gmail.com',
        contact:9090909090,
        address:'Noida, India'
    },
    {
        name:'Vaishali',
        age:25,
        photo:'https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png',
        gender:'Female',
        email:'vatsal@gmail.com',
        contact:9090909090,
        address:'Banglore, India'
    },
    {
        name:'Aryan',
        age:20,
        gender:'Male',
        email:'aryan.com',
        contact:9090909090,
        address:'Manali, India'
    }
];


async function seedData(){
    await User.deleteMany({});
    await User.create(dummyUsers);
    console.log('DB Seeded successfully!');
}

seedData();