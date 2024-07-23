// Day - 5
// Task - 1
function check(num) {
    if (num % 2 == 0) {
        console.log(`number ${num} is even no.`);
    }
    else{
        console.log(`number ${num} is odd no.`);
    }
}
check(3002);
// Task - 2
function Square(number) {
    return number*number; 
}
const result = Square(5)
    console.log(`result is : ${result}`);
// Task - 3
function max(Number1, Number2) {
    if (Number1 > Number2) {
        console.log(`Number ${Number1} is greater among ${Number1} and ${Number2}`);
    }
    else{
        console.log(`Number ${Number2} is greater among ${Number1} and ${Number2}`);
    }
}
max(4,66)
// Task - 4
function concat(string, strings) {
    return string.concat(strings)
}
console.log(concat("Shyam","Verma"))
// Task - 5
const addTwoNum = (Number3, Number4)=>
    Number3 + Number4
console.log(`sum of the two number is : ${addTwoNum(3,8)}`);
// Task - 6
const name = (String)


// Task - 7
function multiply(a, b = 1) {
    return a * b;
  }
 console.log(` product is ${multiply(5, 2)}`);
//  Task - 8
const user = {
    username  : "Shyam Verma",
    age: 22
}
function passingObject(anyObject){
    console.log(` My username is ${anyObject.username} and age is ${anyObject.age = 44}`);
}
passingObject(user);
// Task - 9

function callbackFunction(){
    console.log('I am  a callback function');
}
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);






