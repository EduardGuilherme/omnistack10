const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://Eduardo:123@cluster0-m0v5w.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});
app.use(cors());
app.use(express.json());
app.use(routes);





app.listen(3333); 