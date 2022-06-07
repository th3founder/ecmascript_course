/* Es10 */

/*flat */
/* Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos. */
let array = [1,2,3, [1,2,3, [1,2,3 ]]]

console.log(array.flat(2))
/* //////////////////////// */

/* flatmap */
/* Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar. */
let arr = [1,2,3,4,5];
console.log(arr)
console.log(arr.flatMap(value => [value, value*2]));

/* ////////////////////////// */

/* timStart, elimina espacios al inicio de una variable */
let hello = '          hello world'
console.log(hello) 
console.log(hello.trimStart());

/* timeEnd */
let hello2 = '  Hello CEO               '
console.log(hello2)
console.log(hello2.trimEnd())


/* ////////////////////////// */
/* try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch. */
try{

}catch{
    error
}

/* //////////////////////////// */
/* Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries(). */
let entries =[['name','Alvaro'],['age',22]]
let transform = Object.fromEntries(entries)
console.log(transform)
console.log(Object.fromEntries(entries))

let {name, age} = transform
console.log(name)

/* //////////////////////////// */
/* symbol, Symbol.prototype.description: permite regresar el descripcion opcional del Symbol */

let mySymbol = `My symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)

/* //////////////////////////// */
/* trim, limpia los espacios al inicio y al final*/
let hella = "    Hello world    "
console.log(hella.trim())


