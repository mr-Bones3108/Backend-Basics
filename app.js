const express = require('express');
 const app = express();
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');
 const cors = require('cors');

 require('dotenv/config')



 //middleware
 app.use(cors()); 
 app.use(bodyParser.json());

// //Middleware
// app.use('/post', ()=>{
//     console.log('This is a middleware running');
// });

const postRoute = require('./routes/posts');


app.use('/posts', postRoute);
 //ROUTS

 app.get('/', (req, res) => {
     res.send('We are on Home');
 });
 //How to start listerning to the server


 // Connect to DB

mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true , useNewUrlParser: true , useUnifiedTopology: true }, ()=> {
    console.log('Connected to Db')
})

 //How to start listerning to the server

 app.listen(3000); 