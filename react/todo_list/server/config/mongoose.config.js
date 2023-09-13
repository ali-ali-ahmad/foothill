require('dotenv').config();
const dbHost = process.env.DB_HOST;
const mongoose = require("mongoose");
mongoose.connect(`mongodb:${dbHost}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('Established a connection to Datebase'))
.catch(err => console.log('something went wrong when connecting to Datebase', err));