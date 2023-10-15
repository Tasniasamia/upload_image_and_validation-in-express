const app=require("./app");
const config=require("./Config/Config")
const Port = config.DB.app.PORT
require("./Config/db")

app.listen(Port,()=>{
    console.log(`Server is http://localhost:${Port}`)
})