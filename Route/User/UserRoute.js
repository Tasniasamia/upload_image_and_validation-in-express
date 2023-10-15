const express = require('express');
const { GetUser, CreateUser, GetOneUser, UpdateUser, addNewUser,  } = require('../../Controller/User.Controller');
const route = express.Router();
const multer = require('multer');
const userScema = require('../../Modules/userScema');
const { uuid } = require('uuidv4');
const { body, validationResult } = require('express-validator');
const { validation } = require('../../Validation/validation');
const { validationResponse } = require('../../Validation/auth');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Upload/'); // Use a relative path
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now().toString() + file.originalname;
    cb(null, uniqueSuffix); // Save the file with a unique name
  },
});


const upload = multer({ storage: storage });

route.post('/profile2', upload.single('image'),validation,validationResponse,addNewUser);


route.get('/', GetUser);
route.post('/', CreateUser);
route.get('/:id', GetOneUser);
route.put('/:id', UpdateUser);

module.exports = route;
