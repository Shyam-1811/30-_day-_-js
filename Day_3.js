// Day 3
// Task - 1
let Num = -66;
if (Num > 0) {
    console.log(`Number ${Num} is positive`);
}
else if(Num == 0){
    console.log(`Number ${Num} is equal to 0 `);
}
else{
    console.log(`Number ${Num} i Negative`);
}
// Task - 2
const age = 7;
if (age >= 18) {
    console.log(`Person can vote`);
}
else{
    console.log(`person can't vote, wait till 18.`);
}
// Task - 3
let Num1 = 22;
let Num2 = 11;
let Num3 = 90;
if (Num1 > Num2) {
    if (Num1 > Num3) {
        console.log(`Number ${Num1} is greatest among three numbers`);
    }
    else{
        console.log(`Number ${Num3} is greatest among three numbers`);
    }
}
else{
    console.log(`Number ${Num2} is greatest among all three number`);
}
// Task - 4
let day = 4;
switch (day) {
    case 1: 
        console.log(`Monday`);
        break;
        case 2: 
        console.log(`Tuesday`);
        break;
        case 3: 
        console.log(`Wednesday`);
        break;
        case 4: 
        console.log(`Thursday`);
        break;
        case 5: 
        console.log(`Friday`);
        break;
        case 6: 
        console.log(`Saturday`);
        break;
        case 7: 
        console.log(`Sunday`);
        break;
    default:
        console.log(`Enter a valid number to find somr useful result`);
        break;    
}
// Task - 5
let marks = 40;
switch (marks) {
    case 90: 
        console.log(`Grade is A`);
        break;
        case 70: 
        console.log(`Grade is B`);
        break;
        case 50: 
        console.log(`Grade is C`);
        break;
        case 40: 
        console.log(`Grade is D`);
        break;
        case 30: 
        console.log(`Grade is E`);
        break;
    default:
        console.log(`Enter a valid score to find somr useful result`);
        break;    
}
// Task - 6
let number = 507
number % 2 == 0 ? console.log("Even" ) : console.log("odd" )
// Task - 7
const year = 2024;
if (year % 4 == 0 && year % 400 == 0) {
    if (year %  100 == 0) {
        console.log(`Year ${year} is leap year`);
    }
    else
    {
        console.log(`Year ${year} is not a leap year`);
    }
}
 else{
    console.log(`Year ${year} is not a leap year`);
 }

