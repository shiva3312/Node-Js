const express =  require("express");


exports.get = (req,res)=>{
  res.json({
    posts:[
      {title : 'First Post'},
      {title : 'Second Post'}
    ],
  });
};
