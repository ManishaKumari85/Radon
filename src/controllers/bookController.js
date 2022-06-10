const authorModel = require("../models/newAuthor")
const bookModel= require("../models/newBook")
const publisherModel = require("../models/newPublisher")

const createAuthor= async function (req, res) {
    let book = req.body
    let bookCreated = await authorModel.create(book)
    res.send({data: bookCreated})
}
const newPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}


const createBook = async function(req,res){
    let book = req.body
    let authorId=await authorModel.find().select({_id:1}) //get the list of objects contaning author obj_id
    authorIdArr=authorId.map((obj)=>{return obj._id.toString()}) //get the string from object_id

    //[ObjecID("62a1f206194c63050bb9f00e")] -----> "62a1f206194c63050bb9f00e"
    let publisheId=await publisherModel.find().select({_id:1}) //get the list of objects contaning publisher obj_id
    let publishIdArr=publisheId.map((obj)=>{return obj._id.toString()}) //get the string from object_id
    
    if (book.author_id!=undefined){  //check if u enter the author id or not
        if(book.publisher!=undefined){ //check if u enter the publisher id or not
            if (authorIdArr.includes(book.author_id)){ // check wether the author id is in db or not
                if(publishIdArr.includes(book.publisher)){ // check wether the publisher id is in db or not
                    let bookCreated = await bookModel.create(book)
                    return res.send({data: bookCreated})
                }
                return res.send({data: "Invalid Publisher Id"})
            } 
            return res.send({data: "Invalid Author Id"})
        }
         return res.send({data: "Missing Publisher Id"}) 
    }
    return res.send({data: "Missing Author Id"})
}


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher')
    res.send({data: specificBook})

}
const updatePenguin = async function(req,res){
    let data= await publisherModel.find({name:{$in:["penguin","Harper Collins"]}}).select({_id:1})
    let arr = data.map((obj)=>obj._id.toString())
    let book = await bookModel.findOneAndUpdate({publisher:{$in:arr}},{$set:{"isHardCover":true}})
    res.send({msg:book})

}
const updatePrice = async function(req,res) {
    let authId = await authorModel.find({rating:{$gt: 3.5}}).select({_id:1})
    let arr = authId.map((obj)=>obj._id.toString())
    let newBook = await bookModel.findOneAndUpdate({author_id:{$in:arr}},{$inc:{"price":+10}})
    res.send({msg:newBook})
}


module.exports.createAuthor= createAuthor
module.exports.createBook = createBook
module.exports.newPublisher = newPublisher
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
 module.exports.updatePrice =updatePrice
 module.exports.updatePenguin=updatePenguin
