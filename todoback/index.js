const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routers/todorouters');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/todos', todoRouter);

const PORT = 3001

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
.then( () => {
    app.listen(3001, () => console.log(mongoose.connection.readyState));
})
