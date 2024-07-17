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
check(3007);
// Task - 2
function Square(number) {
    let result = number*number;
    console.log(` square of number ${number} is ${result}`);
}
Square(5);
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
const sum = (Number3, Number4)=>
    Number3 + Number4
const addTwoNum = sum(5,2)
console.log(`sum of given no. is ${addTwoNum}`);

