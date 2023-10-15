const multer = require("multer");
const userScema = require("../Modules/userScema")
const {uuid} =require('uuidv4')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Upload/'); // Update e destination to a relative pathth
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now().toString() + file.originalname;
      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  });
const GetUser=async(req,res)=>{
    const userData=await userScema.find({})
    res.send({UserAll:userData})
}

const CreateUser=async(req,res)=>{
const user=new userScema({
    id:uuid(),
    name:req.body.name,
    email:req.body.email,
    age:Number(req.body.age)
})
await user.save()
res.send({Data:"Data is inserted into the server"})

}
const GetOneUser=async(req,res)=>{
    const id=req.params.id;
    const finduser=await userScema.findOne({_id:req.params.id})
    res.send(finduser);
}

const UpdateUser=async(req,res)=>{
    const id=req.params.id;
    const user=await userScema.findOne({id:id});
    user.name=req.body.name;
    user.email=req.body.email;
    user.age=req.body.age;
    await user.save();
    res.status(200).json({message:"User is updated"})
}


// const addNewUser=async(req,res,next)=>{
//     const user=new userScema(
//         {
//           id:uuid(),
//           name:req.body.name,
//           email:req.body.email,
//           password:req.body.password,
//           image:req.file.fieldname,
//         }
//       )
//       await user.save();
    
//       res.send({ message: 'Image added' });
// }

const addNewUser=async (req, res, next) => {
    const user = new userScema({
      id: uuid(),
      name: req.body.name,
      email: req.body.email,
      image: req.file?.filename, // Use req.file.filename
    });
  
    await user.save();
    res.send({ message: 'All information with image added' });
  }




module.exports={
    GetUser,CreateUser,GetOneUser,UpdateUser,addNewUser
}