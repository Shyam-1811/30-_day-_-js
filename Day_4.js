// Day _4
// Task - 1
console.log("The values are : ");
for (let i = 1; i <= 10; i++) {
   console.log(i);
}
// Task - 2
console.log("The values are : ");
for (let index = 5; index <= 50; index+=5) {
   console.log(index);
}
// Task - 3
let sum = 0
let n = 10;
while(n != 0){
  sum = sum + n;
  n--;
}
console.log(`The sum is ${sum}`);
// Task - 4
console.log(`Number in reverse order is : `);
let num = 10;
while (num > 0) {
    console.log(`${num}`);
    num--;
}
// Task - 5
console.log("The value from 1 to 5 are : ")
let num1 = 1;
do {
   console.log(num1);
   num1= num1+ 1
} while (num1 <=5);
// Task - 6
console.log("The factorial of given no. is : ");
let fact = 6;
let Number = 1;
do {
    Number = Number*fact;
    fact--; 
}
 while (fact != 0)
 console.log(`${Number}`);
// TAsk - 7
console.log(`pattern printing :`);
let no = 5;
for (let i = 1; i <= no; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}
// Task - 8
console.log(`The value after skipping 5 are :`);
for (let index = 1; index <= 10; index++) {
   if (index == 5) {
      continue;
   } 
   console.log(`${index}`);
}
// Task - 9
console.log(`The value after break 7 are :`);
for (let index = 1; index <= 10; index++) {
   if (index == 7) {
      break;
   } 
   console.log(`${index}`);
}
