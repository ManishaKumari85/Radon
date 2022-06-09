
 const express = require('express');
 const router = express.Router();
 const BookController=require("../controllers/bookcontrollers")
 router.post("/createBooks", BookController.createbook)
 router.get("/booklist",BookController.booklist)
 router.post("/year",BookController.year)
 router.post("/getparticularsbooks",BookController.getparticularsbooks)
 router.get("/convert",BookController.convert)
 router.get("/randombooks",BookController.randombooks)
 
 