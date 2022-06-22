const express = require('express');
const router = express.Router();
const userController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!");
})

router.post("/authors", userController.createAuthor);
router.post("/blogs", blogController.createBlog);
router.get("/blogs",blogController.getBlog);
router.put("/blogs/:blogId", blogController.updateBlog);

module.exports = router;