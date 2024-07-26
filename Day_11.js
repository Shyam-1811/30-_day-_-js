//  methods to create promise in js
// Task - 1
const promiseOne  = new Promise(function (resolve,reject) {
    setTimeout((function(){
        resolve({username : "Shyam",
            emainId : "Shyam@gmail.com"
        })
    }),2000)
})
promiseOne.then(function (user) {
    console.log(user)
})
// Task - 2
 new Promise(function (resolve,reject) {
    setTimeout((function(){
        reject({username : "Ritik",
            emainId : "Ritik@gmail.com"
        })
    }),5000)
}).then(function (user) {
    console.log(user)
}).catch(function (error) {
    console.log("error");
 }).finally(() => console.log("execute"))
//  Task - 3,6
fetch("https://api.github.com/users/shyam-1811")
.then((Response) =>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((Error)=>
console.log("Error generated "))
