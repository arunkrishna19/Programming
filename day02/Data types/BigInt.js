// This file is about the "BigInt" data type.
let maxNumber = (2**53)-1;
console.log(maxNumber);
// Number data type has a storage limit of "2^53 -1", after that we need to use "BigInt" data type

console.log (maxNumber+1); //this works because of within limit
console.log (maxNumber+2); //fails due to exceeded limit
console.log (maxNumber+3); // issue with big int is odd number work fine even numbers fail

const limit = 9007199254740991n; //to specify bigInt we need to add "n" after the number 
console.log(typeof limit);
console.log (limit+1n); // Rule: a number add,sub or anything with bigInt also has to be bigInt.
console.log (limit+2n); 
console.log (limit+3); //fails due to bigInt rule not satisfied

