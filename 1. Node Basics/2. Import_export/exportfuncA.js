/*
function sum(a, b){
  return a+b;
}

function pro(a,b){
  return a*b;
}

// same above two functioncan be implemented usnign arrow function
//const sum = (a, b) => a+b;
//const pro = (a,b) => a*b;

module.exports = {
  sum,
  pro
};

*/


// All above code can be written in single line of code written in below
exports.sum = (a, b) => a+b;
exports.pro = (a,b) => a*b;

/*
console.log(process);
In this case in process the "mainMoudule : Module" shows a exprot has
two function sum and pro.


mainModule: Module {
   id: '.',
   path: 'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\import_export',
   exports: { sum: [Function: sum], pro: [Function: pro] },
   filename: 'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\import_export\\exportfuncA.js',
   loaded: false,
   children: [],
   paths: [
     'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\import_export\\node_modules',
     'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\node_modules',
     'C:\\Users\\Shivam Chaurasiya\\Desktop\\node_modules',
     'C:\\Users\\Shivam Chaurasiya\\node_modules',
     'C:\\Users\\node_modules',
     'C:\\node_modules'
   ]
 }

*/
