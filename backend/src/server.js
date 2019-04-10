const express = require('express');

const app = express();


//Permite que o aplicativo retorne e receba json
app.use(express.json());

//Permite que o aplicativo retorne e receba arquivos
app.use(express.urlencoded({ extended: true}));

app.use(require('./routes'));


app.listen(3333);