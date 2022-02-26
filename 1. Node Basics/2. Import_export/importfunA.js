const helper = require('./exportfuncA');

// helper is an object which constain two funtion as its child
// sum and pro

console.log(helper.sum(10,5));
console.log(helper.pro(2,5));


/*
console.log(process);

in this file process chile does not has any thing in export coz there
this file is not exporting anything .....


mainModule: Module {
    id: '.',
    path: 'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\import_export',
    exports: {},
    filename: 'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\import_export\\importfunA.js',
    loaded: false,
    children: [ [Module] ],
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
