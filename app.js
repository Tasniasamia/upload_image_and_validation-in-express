const express = require('express');
const app = express();
const path = require('path');
const morgan=require('morgan')
app.use(morgan('dev'))
const userRoute=require('./Route/User/UserRoute')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/route',userRoute)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./View/index.html"))
})
// Not Found (404) Error Handler
app.use((req, res, next) => {
  res.status(404).json({ error: true, message: 'Not Found: This route does not exist' });
});

// Server Error (500) Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: true, message: 'Something broke on the server' });
});

module.exports = app;
