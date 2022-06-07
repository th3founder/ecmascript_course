/* replace all */
const string = "JavaScript es maravilloso y con JavaScript puedo constuir el futuro"

const replaceString = string.replace("JavaScript", "Python") //remplaza la primer coincidencia

console.log(replaceString)

const replaceString2 = string.replaceAll("JavaScript","Python") //remplaza todas las coincidencias
console.log(replaceString2)

/* ////////////////////// */
/* metodos privados, utilizados dentro de las clases */
class Message{
    show(val){
        console.log(val)
    };
    #show(val){ // Con el # convertimos al método en privado y nos dara error en clg
        console.log(val)
    }
    get #add(val){
        ...
    }
}

const message = new Message();
message.show("Hola");


/* ////////////////////// */
/* primise any */
/* es un objeto global de promise cuyo argumento va a ser la forma de un array de promesas, gestionando y calculando la respuesta de la primera que sea resuelta de forma satisfactoria */

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3]).then(response => console.log(response)); //El primero que se resuelve es el resolve de la promesa 2 e ignora los demas

/* ////////////////////// */
//  🦴 WeakRef(element);
/*le permite mantener la referencia debil a otro objeto sin evitar que ese objeto sea recogio por el garbage colector el cual js incorpora*/
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    {...}
}

/* ////////////////////// */
// 🧪 Nuevos operadores lógicos

let isTrue = true
let isFalse = false
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);

let isTrue1 = undefined
let isFalse1 = false
console.log(isTrue1 ??= isFalse)