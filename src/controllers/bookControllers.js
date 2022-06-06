const bookModel=require("../models/BookModel")
let creatBook=async function (req,res) {
    let data=req.body
    let savedData=await bookModel.create(data)
    res.send({msg:savedData})
}
let getBooklist=async  function(req,res){
    let allBooks=await bookModel.find()
    res.send({msg:allBooks})
}
module.exports.creatBook=creatBook
module.exports.getBooklist=getBooklist