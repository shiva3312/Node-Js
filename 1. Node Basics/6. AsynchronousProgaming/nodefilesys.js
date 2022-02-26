const fs = require('fs')
const fileName  = 'note.txt';


//   1st event ..........

fs.readFile(fileName, (err, data)=> {
  if(err){
    console.log(err);
  }
  else{
    console.log(data.toString());
  }
})


//  2nd event ...........
console.log("This is asynchronous Programing");


/*

 Asynchronous Programing :
    This in non-blocking process.
     Event will be executed ony by one without waiting for any one of these to complete
     instead they will be executed and completed as the presocess running other callbacks

These two event loop are handled by single thread in node.js

firstly 2nd envent will show the result the 1st event will show the result because
the first event is taking more time than usual that's why callbak funtion handle that case
and the second event will get executed and shows the result before first.

*/
