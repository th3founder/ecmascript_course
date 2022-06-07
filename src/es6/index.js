/* En Ecmascript6 se agregaron los parametros por defecto 
-Se pueden establecer ciertos a una funcion por defecto 
*/

//Antiguo
function newFunc(name,age,country){
    var name = name;
    var age = age;
    var country = country
    console.log(name,age,country)
}

/* ECMAscript6 */
function newFunction2(name="Oscar",age=32,country="mx"){
    console.log(name,age,country);

}

newFunction2();
newFunction2("Alvaro",22,"GDL");


//template literals
/* permiten separar o unir varios elementos */

//antigui
let hello = "Hello"
let world = "World"
let epicPhrase = hello+" "+world;
console.log(epicPhrase)

//nuevo
let epixPhrase2 = `${hello} ${world}`;
console.log(epixPhrase2)