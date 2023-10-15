require('dotenv').config()
const DB={
app:{
PORT:process.env.PORT
    },
dbUrl:{
 url:process.env.DBURL
}
    
}

module.exports={
    DB
}