const printDate = function(){
    const ben = new Date()
    console.log(ben);
   
}
const printMonth = function(){
    const ben = new Date()
    console.log(ben.getMonth());
}
const getBatchInfo = function(){

    console.log("radon W3D1 the topic for today is Nodejs module system")
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo