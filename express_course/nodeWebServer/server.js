var http =require('http')//import Node.js core module
//creating server
var fs =require('fs')
//read file
var data=fs.readFile('TestFile.rtf',
function (err,data) {
    if(err !=null)
    {
        console.log(err.toString());

    }
    console.log(data.toString());
})

var readdata =fs.writeFile('TestFile1.rtf','hello node',function(err){
    if(err)
    {
        console.log(err)
    }
    else{
       console.log('inserted') 
    }
})
//append
var appenddata =fs.appendFile('TestFile1.rtf','hello node appended',function(err){
    if(err)
    {
        console.log(err)
    }
    else{
       console.log('inserted') 
    }
})
var server=http.createServer(function(req,res){
    //handle incomming requests here..
    if(req.url=='/')
    {
   
    res.writeHead(200,{"Content-Type":'text/html'});
    res.write('<h1>hello</h1>')
    res.end()
    }
    else  if(req.url=='/contact')
    {
   
    res.writeHead(200,{"Content-Type":'text/html'});
    res.write('<h1>8879074932</h1>')
    res.end()
    }
    
}) 
server.listen(5000); //listening to any incoming request
console.log("Node.js 500 is running"); 