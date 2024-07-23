// Day - 6
// Task - 1
const Num = [1, 2, 3, 4, 5]
console.log(Num);
console.log(typeof Num);
// Task - 1
const newNum = [1, 2, 3, 4, 5]
newNum.map((num) => num + 0)
console.log(newNum);
console.log(typeof(newNum));
// Task - 2
const array = [ 11, 12, 13, 14, 15]
console.log(` last element is :${array.pop()}`);
console.log(` first element is :${array[0]}`);
// Task - 3
const arr1 = [ 10, 20, 30 ,40]
console.log(` array before push method`);
arr1.push(50);
console.log(arr1);
console.log(`values in array after updation : ${arr1}`);
// Task - 4
arr1.pop();
console.log("array after pop operation :");
console.log(arr1);
// Task - 5
arr1.shift();
console.log("array after shift method ");
console.log(arr1);
// Task - 6
arr1.unshift(100)
console.log("array after unshift method : ");
console.log(arr1);
// Tasks - 7
const myArray = [10,11, 20,21, 30,31, 40,41, 50]
 const myarr = myArray.map( (num) => num*2)
 console.log(" array after map function:  " );
console.log(myarr);
// TAsk - 8
const myArray1 = [10,11, 20,21, 30,31, 40,41, 50]
 const  myArray2 = myArray1.filter( (num) => num % 2 == 0)
 console.log(" array after filter function:  " );
console.log(myArray2);
// Task - 9
const myArray3 = [1,2,3,4,5,6,7,8,9,10]
const sum = myArray3.reduce( (acc, cv) => 
    acc + cv, 0)
console.log(` sum  is ${sum}`);
// Task - 10
const newArray = [ 100,90,80,70,60,50,40,30,20,10]
for (let index = 0; index < newArray.length; index++) {
    console.log(` value at index ${index} is ${newArray[index]}`);
}
console.log(newArray);
// Task - 11
const newArray1 = [ 100,90,80,70,60,50,40,30,20,10]
console.log("Use of foreaxh loop : ");
newArray1.forEach( function (num) {
    console.log(num);
})
// TAsk - 12
let arr3 = [];
let row = 3;
let col = 3;
let h = 0

for (let i = 0; i < row; i++) {
    arr3[i] = [];
    for (let j = 0; j < col; j++) {
        arr3[i][j] = h++;
    }
}
console.log(arr3);
// Task 13
console.log(` value at index 2, 2 is given below`);
console.log(arr3[2][2]);