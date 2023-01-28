const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const data = require("./assets/objekte.json");
const users = require("./assets/users.json");

const bodyParser = require('body-parser')

app.listen(port);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.put('/login-request', (req, res) => {
    console.log('receiving data ...');
    const email = req.body.email;
    const password = req.body.password;

    const user = Array.from(users).find(user => user.email === email);
    if (!user) {
        res.send(JSON.stringify({message: "Fehler"}));
    }

    const isPasswordCorrect = user.password === password;

    if (!isPasswordCorrect) {
        res.send(JSON.stringify({message: "Fehler"}));

    }

    res.send(JSON.stringify({message: "Success"}));
});

app.get('/mock-api', (req, res) => {
    setTimeout(() => {
        res.send(data);
    }, 5000);
});
