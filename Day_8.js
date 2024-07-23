// Day - 8
// Task - 1
const name = "Shyam Verma"
const  age = 20;
console.log(`This is me ${name} and I'm ${age} year old`);
// Task -2 
const para = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
console.log(` lorem generator is ${para}`);
// TAsk - 3 , 4
const  user = {
    username : "Ritik",
    userage : 20
}
const { username}= name
const { userage}= age
console.log(`username is ${name}`);
console.log(`userage is ${age}`);
// Task - 5
const array1 = [1, 2, 3, 4, 5]
const array2 = [11, 22, 33, 44, 55]
const array3 = [ ...array1, ...array2]
console.log(array3);
console.log(` spreading elements using spread operator is ${array3}`);
// TAsk - 6
let total = 0;
function moreArgument(...num) {
    for (const numb of num) {
      total += numb;
    }
    return total;
}
moreArgument(10,20,30)
console.log(`sum is ${total}`);
// Task - 7
// with second parameter
let result;
function product(num, num1= 1) {
  result =  num * num1;
    return result;
}
product(10,)
console.log(`the product is : ${result}`);
// without second parameter 

let multiply 
function product1(num, num1) {
  num * num1;
  multiply =  num * num1;
}
product1(10,20)
console.log(`the product is : ${multiply}`);
// Task - 8


