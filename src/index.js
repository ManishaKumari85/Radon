const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Manisha:9831671085@manisha.t8nm5.mongodb.net/manisha456-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

const mid= function(req, res, next){
    let currentDate= new Date();
    let dateTime= currentDate.getDate() + "-"
                  +(currentDate.getMonth()+1) + "-"
                  +currentDate.getFullYear() + " "
                  +currentDate.getHours() + ":"
                  +currentDate.getMinutes() + ":"
                  +currentDate.getSeconds(); 
    let ip= req.ip
    let url= req.url
    console.log(`${dateTime}, ${ip}, ${url}`)
    res.send(`${dateTime}, ${ip}, ${url}`)
    next()
}

app.use(mid)