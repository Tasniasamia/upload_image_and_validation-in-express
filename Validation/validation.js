const { check } = require("express-validator");

exports.validation=[
    check("name")
.trim()
.notEmpty()
.withMessage("The name will not be empty")

.isLength({min:6})
.withMessage("The name will at least 6 characters")

.isLength({max:23}),

]