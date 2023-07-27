const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/GLA-DB')
    .then(() => {
        console.log('DB connected');
    })
    .catch(err => console.log(err));


const studentSchema = new mongoose.Schema({
    name: String,
    rollNo: String,
    course: String,
    year: Number
});

const facultySchema = new mongoose.Schema({
    name: String,
    graduation: String,
    experience: Number,
    salary: Number
})

const Faculty = mongoose.model('Faculty', facultySchema);
const Student = mongoose.model('Student', studentSchema);

// const student1 = new Student({
//     name:'Sparsh',
//     rollNo:'124',
//     course:'B.Tech',
//     year:3
// })

// student1.save();


// Student.create({ name: 'Yuvraj', rollNo: '20wek23', course: 'B.Tech', year: 4 })
//     .then((obj) => {
//         console.log(obj, 'successfully created the document');
//     });


const studentsData = [
    {
        name: 'Ankit',
        rollNo: '004',
        course: 'B.Sc',
        year: 2
    },
    {
        name: 'Baburao',
        rollNo: 'sdfk23423',
        course: 'B.A',
        year: 1
    },
    {
        name: 'Prakhar',
        rollNo: '2115001178',
        course: 'B.Tech',
        year: 3
    },
    {
        name: 'Puneet Superstar',
        rollNo: '2115sdfsd3214',
        course: 'B.Com',
        year: 2
    },
    {
        name: 'Donald Putins',
        rollNo: '214534',
        course: 'B.Tech',
        year: 4
    },
    {
        name: 'Pawan',
        rollNo: '1234',
        course: 'B.Tech',
        year: 3
    }
]

// Student.create(studentsData)
//     .then(()=>{
//         console.log('Data inserted successfully!');
//     })

// Student.updateOne({name:'Ankit'}, {rollNo:'123456789', year:12})
//     .then(()=>{console.log('Document updated successfully!')});

// Student.updateMany({course:'B.Tech'}, {year:4})
//     .then(()=>{console.log('Documents updated successfully!')})


// Student.deleteOne({rollNo:'214534'})
//     .then(()=> console.log('Deleted document successfuly'));

// Student.deleteMany({course:'B.Tech'})
//     .then(() => console.log('Deleted documents successfuly'))

// Student.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));

// Student.find({course:'B.Tech'})
//     .then(data => console.log(data));

// Student.find({name:'Pawan'})
//     .then(data => console.log(data));

// Student.findById('64c0d995200c07bcb815e0d5')
//     .then(data => console.log(data));

// Student.findByIdAndUpdate('64c0d995200c07bcb815e0d5', {rollNo:2005} , {new:true})
//     .then(data => console.log(data));

Student.findByIdAndDelete('64c0d995200c07bcb815e0d5')
    .then(data => console.log(data));