const mongoose=require('mongoose');
const { DB } = require('./Config');

mongoose.connect(DB.dbUrl.url)
.then(data=>{console.log("MongoDB is connected")})
.catch(error=>console.log(error.message))