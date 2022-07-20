const express=require("express");
const router=express()
const {shortUrl,getUrl}=require("../controller/urlController")


router.post("/url/shorten",shortUrl)
router.get("/:urlCode",getUrl)
router.all("/**", function (req, res) {
<<<<<<< HEAD
    res.status(404).send({ status: false, msg: "no such api found" })
=======
  res.status(404).send({status: false,msg: "no such api found"})
>>>>>>> bf100e4b0e156c0335faa08c19ccc8ccd2c34981
})


module.exports=router