
const {count}=require("console")
const bookModel=require("../models/bookmodel")
const createbook=async function(req,res){
let body=req.body
let bodydata=await bookModel.create(body)
res.send({msg:bodydata})
   
}
const booklist=async function(req,res){
    let bookname=await bookModel.find().select({bookName:1,authorName:1})
    res.send({msg:bookname})
}
const year=async function(req,res){
 let data=req.body.year
 let bookyr=await bookModel.find({year:data})
 res.send({msg:bookyr})  
}
const getparticularsbooks=async function(req,res){
    let condition=req.body
    let condition1=await bookModel.find(condition)
    res.send({msg:condition1})
}
const convert=async function(req,res){
   let convertrs=await bookModel.find({
       "price.indianprice":{$in:[100,200,500]}
   })
   res.send({msg:convertrs}) 
}
const randombooks=async function(req,res){
  let randombooks1=await bookModel.find({$or:[{"stockavailable":true},{"totalpages":{$gt:500}}]})  
res.send({msg:randombooks1})}

module.exports.booklist=booklist
module.exports.createbook=createbook
module.exports.year=year
module.exports.getparticularsbooks=getparticularsbooks
module.exports.convert=convert
module.exports.randombooks=randombooks


