const mongoose=require('mongoose');

const userScema=mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

})

module.exports=mongoose.model("User",userScema)