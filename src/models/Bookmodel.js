const mongoose=require('mongoose')
const bookSchema =new mongoose.Schema({
    BookName:{
        type:String,
        required:true,
        unique :true
    },
    AuthorName :{
        type:String,
        required:true
    },
    Category :{
        type:String,
        required:true
    },
    Year:{
        type:Number,
        required:true
    },
  }, { timestamps:true});

    module.exports=mongoose.model('Book',bookSchema);







