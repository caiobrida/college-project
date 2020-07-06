const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://kiritodas:kiritodas@cluster0-fl4fc.mongodb.net/college_project?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MONGO CONNECTED"))

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);