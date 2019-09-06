const fs= require('fs');
const http =require('http');
const path=require('path');


let server=http.createServer(function (req,res){
    res.setHeader('Content-Type', 'application/json')
    let resData=fs.readdirSync(path.join(__dirname,'./public/assets/images/'),{encoding:'utf8'}).toString();
    resData=resData.split(',').map(item=>(`./assets/images/`+item)).toString();
    res.end(resData);
})

server.listen(8081);