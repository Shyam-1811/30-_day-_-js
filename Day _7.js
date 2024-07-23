// Day 7
// Task -1 
const book = {
    title  : "HARRY POTTER",
    author : "JK ROWLING",
    year : 2001
}
console.log(book);
console.log( typeof book);
// Task -2 
console.log(book.title);
console.log(book.author);
// Task - 3
console.log(book["author"]);
// TAsk - 4
 
// Task - 5
const library = {
     book1  : {
            name : "PHYSICS" ,
            year : 2000
    },
     book2 : {
        name : "CHEMISTRY",
        year : 1999
    }
}
console.log(library.book1);
console.log(library.book2);
// Task - 6
console.log(library.book1.year);
console.log(library.book2.name);
// Task - 7 and 8


// TASK - 9
const user = {
    name : "SHYAM",
    fathername : "UDAY VERMA"
}
console.log(Object.keys(user));
console.log(Object.values(userr));