//Es9

/* reposo, extrae propiedades de un objeto que aun no se ha constuido */
const obj = {
    name: `GMC`,
    model: `AT4`,
    price: 1298000
}

let {name, ...all} = obj

let{price, ...inc} = obj

console.log(name,all) //presenta name y todo lo demas del objeto
console.log(inc)


/* //////////////////////////// */

/* Propiedades de propagacion, unir multiples objetos en 1 objeto */
const truck1 = {
    name: `GMC`,
    model: `AT4`,
    price: 1298000
}
const truck2 = {
    ...truck1,
    name: `Chevrolet`,
    model: `Cheyenne`,

}
console.log(truck2)


/* ////////////////////////// */

/* promise.finally ... se puede saber cuando ha terminado el llamado y ejecutar una funcion o linea de codigo */

const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => {
            resolve("HelloWorld")
        }, 3000)
        : reject(new Error('Test de error'))
    })
}

helloWorld().then(response =>console.log(response)).catch(error => console.log(error)).finally(()=>console.log("Finalizado"))
//finally permite ejecutar el bloque segun sea el caso

/* ////////////////////////////// */

/* 🌟 Regex */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const math = regexData.exec('2022-02-20')
const year = math[1];
const month = math[2];
const day = math[3];

console.log(year,month,day)



/* 🌟 Otra de las nuevas características de ES9 en la captura de grupos es nombrar nuestros grupos para encontrarlos de una forma más fácil. El código que hace el profe Oscar al final podría resumirse en lo siguiente:
 */
const regexCalendar = /(?<day1>[0-9]{2})-(?<month1>[0-9]{2})-(?<year1>[0-9]{4})/
const match = regexCalendar.exec('04-02-2022');
const { year1, month1, day1 } = match.groups;

console.log(year1, month1, day1);
console.log(typeof(year1))