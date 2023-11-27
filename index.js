const express = require('express');
const connectDB = require('./db/db');
const app = express();
const bodyParser = require('body-parser');
//modulos
const userRouter = require('./app/routes/user')
const userWord = require('./app/routes/word')

//modelos
const { User } = require('./app/models/user')
const { Word } = require('./app/models/word')
//settings
app.set('port',3001)

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(bodyParser.json({limit:'20mb'}))
app.use(bodyParser.urlencoded({limit:'20mb',extended:true}))

//rutas
app.use(userRouter)
app.use(userWord)

//crear usuario

const createNewUser = () => {
    console.log('creando usuario')
    User.create({
        "name": "adrian",
        "email": "adrian@gmail.com",
        "password": "12345"
    })
}


const createNewWord = () => {
    Word.create({
        word:'venerate',
        meaning:'venerate',
        usexample:'venerate'
    })
}

app.listen(app.get('port'), () => {
    console.log(`App corriendo en puerto ${app.get('port')}`);
})




connectDB();
//createNewWord();
//createNewUser();
