const authorController = require("../models/authorModel");
const blogModel = require("../models/blogModel");
const blogController = require("../models/blogModel");

const createBlog = async function(req, res){
    try{
        const details = req.body

        if(!details.title) return res.stauts(400).send({stauts: false, msg: "Title of the blog is required"});
        if(!details.body) return res.status(400).send({stauts: false, msg: "Body of the blog is required"});
        if(!details.authorId) return res.status(400).send({stauts: false, msg: "Author_Id of the blog is required"});
        if(!details.category) return res.status(400).send({stauts: false, msg: "Category of the blog is required"});

        const validate = await authorController.findById(details.authorId);
        if(!validate) return res.status(400).send({status: false, msg: "You have entered a invalid Author_Id"});

        const data = await blogController.create(details)
        res.status(200).send({status: true, data: data})
    }
    catch(err){
        res.status(500).send({status: false, msg: err.message});
    }
}

const getBlog = async function(req, res){
    try{
        let q = req.query;
        let filter = {
            isDeleted: false,
            isPublished: true,
            ...q
        };
        const validate = await authorController.findById(q.authorId);
        if(!validate) return res.status(404).send({status:false, msg: "AuthorId is not valid"});

        const data = await blogModel.find(filter);
        if(data.length == 0) return res.status(404).send({status:false, msg: "No blog is found"});

        res.status(201).send({status: true, data: data})
    }catch(err){
        res.status(500).send({status: false, msg: err.message});
    }
}

const updateBlog = async function(req, res){
    try{
        const blogId = req.params.blogId
        const details = req.body
        const validId = await blogModel.findById(blogId)
        if (!validId){
            return res.status(400).send({status:false, msg:"Blog Id is invalid"})
        }
        const authorIdFromParam = req.body.authorId
        const authorIdFromBlog = validId.authorId.toString()
        if (authorIdFromParam !== authorIdFromBlog) {
            return res.status(401).send({status : false, msg : "This is not your blog, you can not update it."})
        }
        const updatedDetails = await blogModel.findOneAndUpdate(
            {_id : blogId},
            {title : details.title, body : details.body, tags : details.tags,
            subcategory : details.subcategory, isPublished : true, publishedAt : new Date()},
            {new : true, upsert : true})
        res.status(201).send({status:true, data:updatedDetails})
    }
    catch(err) {
        console.log(err)
        res.status(500).send({status:false, msg: err.message})
    }
}

const deleteBlogById = async function(req, res){
    try{
        const blogId = req.params.blogId;
        if(!blogId) return res.status(404).send({status: false, msg: "BlogId is invalid"});

        const check = await blogModel.findById({_id: blogId});
        if(check.isDeleted == true) return res.status(404).send({status: false, msg: "The blog is already deleted"});

        const deleteDetails = await blogModel.findOneAndUpdate(
            {_id: blogId },
            {isDeleted: true, deletedAt: new Date()},
            {new: true}
        )
        res.status(200).send({status: true, data: deleteDetails});
    }catch(err){
        res.status(404).send({msg: err.message});
    }
}

const deleteBlogByQuery = async function(req, res){
    try{

    }catch(err){
        res.status(500).send({status: false, msg: err.message})
    }
}

module.exports = {createBlog, getBlog, updateBlog, deleteBlogById, deleteBlogByQuery};