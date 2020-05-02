const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@oministack-e2wvo.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
 
// req.query = acessar query params (para filtros)
// req.params = acessar routes params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);


app.listen(3333);
