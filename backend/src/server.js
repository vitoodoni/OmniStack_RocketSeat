const express = require('express');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pgfsf.mongodb.net/omnistack?retryWrites=true', {
    
    useNewUrlParser: true
})

//Permite que o aplicativo retorne e receba json
app.use(express.json());

//Permite que o aplicativo retorne e receba arquivos
app.use(express.urlencoded({ extended: true}));

app.use(require('./routes'));


app.listen(3333);