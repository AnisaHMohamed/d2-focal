// ```Get valuses from command line arguments (as an array)
const args = process.argv.slice(2);
// remove first 2 elements from array

// sum = 0
let sum = 0;
// for each element in the arguments provided
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
// convert element to a number 
  const number = parseFloat(arg,10);
//   if element is a number and a whole number
if(!Number.isNaN(number) && Number.isInteger(number)){
//     sum = sum +element
  sum = sum + number;
}
}
console.log(`Sum of all numbers is: ${sum}`)
// print out the resulting sum```
