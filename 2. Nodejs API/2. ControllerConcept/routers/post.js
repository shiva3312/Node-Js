const express =  require("express");
const postConstroller = require("../controllers/post");

const router = express.Router();

router.get("/", postConstroller.get);
module.exports = router;
