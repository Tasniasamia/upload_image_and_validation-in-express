const { validationResult } = require("express-validator");

 const validationResponse=(req, res,next) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
          return res.send(`Hello, ${req.body.name}!`);
        }
      
        res.send({ errors: result.array() });
        next()
      }


exports.validationResponse=validationResponse