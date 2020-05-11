const express = require('express');
//const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo DB Connected");
});

app.listen( port, () =>{
    console.log(`Example app listening at http://localhost: ${port}`)
});
