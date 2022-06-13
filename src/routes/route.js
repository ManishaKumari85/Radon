const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.post("/newPublisher", bookController.newPublisher)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.put("/updatePrice", bookController.updatePrice)
router.put("/updatePenguin", bookController.updatePenguin)
router.get("/basicmid")
router.get("/createmid")
module.exports = router;







