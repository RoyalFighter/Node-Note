//creating this file to create server and see how node and express can be used 
//to create server express is simpler than node


//steps to create server using express

//1st import express 
const express=require("express");

//2nd create an instance of express or initailizing

const app=express();    

//3rd use app to create server mention port and one call back function to log status

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
// now run it using node express-server


//now lets create some route to display on server
//to create route we use get method

//for home page  takes app.get and 2 param in call back fun and res.send to send response back to user
//here directly can render html element
app.get("/",(req,res)=>{
  res.send("<h2>welcome to home page ...............</h2>");
});
//about route
app.get("/about",(req,res)=>{
    res.send("<h2>welcome to about page ...............</h2>");
  });



  // every time going in server and typing nodemon is not fun
  //do this to make things eassier
  //in package.json  add

  /*
  "main": "express-server.js",
  in script
  "scripts": {
    "start": "node express-server.js", //fro hosting app in heruko
    "backend":"nodemon express-server.js"
  }
*/
//now to run file simply on terminal write npm run backend;


/*
we use http req method to specify which action we want to perform on server
eg GET POST PUT PATCH DELETE 
get is used to read or retrive data form server

post is used to send data to server

put is used to update data in server

patch is used to update data in server

delete is used to delete data in server


*/