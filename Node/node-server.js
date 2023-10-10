//to create server we need some core module called http module
//http has method that has call back function having 2 para as req and response
//------------------------------------------------------server creation
/*
const http=require("http")
 const server=http.createServer((req,res)=>{
    console.log("Server created sucessfully");

})
//server takes port , localhost as parameter and call back function
server.listen("5000","localhost",()=>{
    console.log("Server running on port 5000");
})
//server takes port , localhost as parameter and call back function
server.listen("9000","localhost",()=>{
    console.log("Server running on port 9000");
})
*/
//------------------------------------------server creation
//we use local host to represrnt ip of local computer ie 127.0.0.1
//port help to acces the server


//creating route--------------------------------------------
const http=require("http")
 const server=http.createServer((req,res)=>{
   //Route to home page to display something when server starts
   if(req.url==="/"){
    //to render html first tell
    res.setHeader("Content-Type","text/html")
    res.write("<h2>iam form home page</h2>")
    res.end();
   }
   //about route
   if(req.url==="/about"){
  
    res.setHeader("Content-Type","text/html")
    res.write("<h2>iam form about page</h2>")
    res.end();
   }


})
//--------------------------------------------------------creating route usinng node
server.listen("9000","localhost",()=>{
    console.log("Server running on port 9000");
})