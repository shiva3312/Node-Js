/*

 you can't change function name on import
 
 const {add, mult} = require('./deStructexport');

  this above line will give error ( use same function name as give in 'deStructexport' file )

*/
const {sum, pro} = require('./deStructexport');
console.log(sum(10,5));
console.log(pro(2,5));
