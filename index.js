const express = require("express")
const route = require('./Routes/routes')
const  mongoose = require("mongoose")
const app = express()
const port =process.env.PORT || 3000
const multer=require("multer")
//MIDDLEWARE
app.use(express.json());
app.use(multer().any());

mongoose.connect("mongodb+srv://Manisha:9831671085@manisha.t8nm5.mongodb.net/groupno49",{
    useNewUrlParser : true
})

.then(()=>console.log("connected"))
.catch(err=> console.log("not connrected"));


app.use('/', route)

app.listen(port,  () => {
    console.log(`Example app listening on port ${port}!`);
})
