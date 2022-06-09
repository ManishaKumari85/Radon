const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
  bookName :{type:String,
    required:true},
price:{indianprice:Number,
europprices:Number},
year:Number,
tag:[String],
authorName:String,
totalpages:Number,
stockavialable:Boolean},{
 timestamps:true   
}    
)
module.exports=mongoo