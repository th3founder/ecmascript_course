const data = {
    frontend: 'Avlaro',
    backend: 'Angel',
    data: 'Thiago'
}

const entries = Object.entries(data)
console.log(entries)

console.log(entries[1][0])

/* //////////////////////////////////// */
/* object values, devuelve los valores de un objeto a un arreglo */

const data2 ={
    frontend: 'Avlaro',
    backend: 'Angel',
    data: 'Thiago'

}

const values = Object.values(data2); //convierte los valores de un objeto a array
console.log(values);
console.log(values.length);

if(values.includes('Angel')){
    console.log('AAAA');
}else{
    console.log(":(")
}

/* //////////////////////////// */

const string = 'Hello';
console.log(string.padStart(8,`Hi `));
console.log(string.padEnd(1),`dev`)


