const express = require("express")
const morgan = require("morgan");
const app = express();

// bring in router
const getPost = require("./routers/post.js");

// User middleware
const myOwnMiddleWare = (res, req, next) =>{
  console.log("Our Own Middleware Applied !!!");
  next();
}


// middleware
app.use(morgan("dev"));
// using our Own middleware ...
app.use(myOwnMiddleWare);

app.get("/", getPost.get);

const port = 3000;
app.listen(port, ()=>{
  console.log('Server is started at port: 3000' );
});
