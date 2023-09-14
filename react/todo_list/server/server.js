const express = require('express');
const cors = require ('cors');
require('dotenv').config();
const app = express();
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = process.env.PORT;
require('./routes/todo.routes')(app);

app.listen(port, ()=> console.log(`Listening on port : ${port}`));