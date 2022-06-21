const blogController = require("../models/blogModel");

const createBlog = async function(req, res){
    try{
        const details = req.body

        if(!details.title) return res.send(400).send({stauts: false, msg: "Title of the blog is required"});
        if(!details.body) return res.send(400).send({stauts: false, msg: "Body of the blog is required"});
        if(!details.authorId) return res.send(400).send({stauts: false, msg: "Author_Id of the blog is required"});
        if(!details.category) return res.send(400).send({stauts: false, msg: "Category of the blog is required"});

        const validate = await blogController.findOne(details.authorId);
        if(!validate) return res.status(400).send({status: false, msg: "You have entered a invalid Author_Id"});

        const data = await blogController.create(data)
        res.status(200).send({status: true, data: data})
    }
    catch(err){
        res.status(500).send({status: false, msg: err.message});
    }
}

module.exports = {createBlog};