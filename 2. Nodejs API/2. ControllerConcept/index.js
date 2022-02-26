const express = require("express")
const morgan = require("morgan");
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const bodyPsrser = reqrire('body-parser');


const app = express();
dotenv.config();
// DataBase



// bring in router
const getPost = require("./routers/post.js");





// middleware
app.use(morgan("dev"));
app.use(bodyPsrser);
// app.get("/", getPost.get);
app.use("/",getPost);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
