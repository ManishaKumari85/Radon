const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookModel=require("../models/BookModel")
const bookController=require("../controllers/bookControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/creatBook",bookController.creatBook)
router.get("/getBooklist",bookController.getBooklist)
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;