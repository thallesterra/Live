const port = 3002;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/routes');
const app = express();


app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/public', express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function () {
    console.log(`Servidor na porta ${port}...`)
})

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

module.exports = app;