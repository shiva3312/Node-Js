const fs = require('fs')
const fileName  = 'note.txt';



// 1st event ..........
 const data = fs.readFileSync(fileName);
 console.log(data.toString());



//  2nd event ...........
console.log("This is asynchronous Programing");


/*

 Synchronous Programing :
    This in blocking process.
     Event will be executed ony by one and waiting for prior task to complete


These two event loop are handled by single thread in node.js

firstly 1st envent will show the result the 2nd event will show the result

*/
