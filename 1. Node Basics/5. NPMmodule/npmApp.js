const http = require('http');

const sever = http.createServer((req, res) => {
   res.write("Hello , This is from node.js ");
   res.end();
})

sever.listen(3000, ()=> console.log("Sever Started on port 3000"));



/*
  package.json....
  {
    "name": "npmmodile",
    "version": "1.0.0",
    "description": "",
    "main": "npmApp.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "nodemon": "^2.0.15"
    }
  }

  In package.json ther is a filed  ->  "script"
  if you conver this like below ....

  "scripts": {
    "dev": "node npmApp.js"
  },

  now you can comple npmApp.js file using command " npm run dev"
  this " npm run dev " will ve replaced by the "node npmApp.js"  autometically

   OR

   "scripts": {
     "dev": "nodemon npmApp.js"
   },

   now you can comple npmApp.js file using command " npm run dev"
   this " npm run dev " will ve replaced by the "nodemon npmApp.js"  autometically
*/
