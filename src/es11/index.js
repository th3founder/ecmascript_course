const button = document.getElementById("btn");

button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello()
})


/* ////////////////////// */
/* Big int */

const aBigNumber = 90009090909n; //forma1

const anotherBigNumber = BigInt(90009090909) //forma2

console.log(aBigNumber);
console.log(anotherBigNumber)

/* ////////////////////// */

/* .allSettled */
/* devuelve una promesa despues de que todas las promesas dadas se hayan cumplido o rechazado */
const promise1 = new Promise((resolve,reject)=> reject("Reject"))

const promise2 = new Promise((resolve,reject)=> resolve("Resolve"))

const promise3 = new Promise((resolve,reject)=> resolve("Resolve 1"))

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response))

/* ////////////////////// */

/* global this */

console.log(window)
console.log(globalThis)

/* ////////////////////// */
/* null */
// 🔍 Nuevo operador lógico: null operator
const foo = null ?? "Default String"
console.log(foo)

/* ////////////////////// */
// ⛓ Optional chaining

const user = {};

console.log(user?.profile?.email)

if(user?.profile?.email){
    console.log(`Email`)
}else{
    console.log(`Fail`)
}