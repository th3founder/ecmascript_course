/* multilinea en strings */
//antes
let lorem = "quiero escribir una clase epica\n"+"Otra frase epica.";

//ahora
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase en otra linea epica
`;

console.log(lorem)
console.log(lorem2)
//.....................................................
/* destructuracion */


let person ={
    'name':'Alvaro',
    'age':22,
    'country':'Mexico'
}

console.log(person.name,person.age,person.country);

//destructurar
let {name,age,country} = person
console.log(name,age,country);

//.....................................................

/* spread operator */

let team1 = ['Oscar','Alvaro','Julian','Ricardo'];
let team2 = ['Valeria','Dania','Jessica','Kamila'];

let education = ['David',...team1,...team2];

console.log(education)

//......................................................

/* Let y const */
{
    var global = "Global Var"
}

{
    let globalLet = "Global Let"
    console.log(globalLet)  //si imprime
}

{
    const globalConst = "Global const"
    console.log(globalConst) //si imprime
}

console.log(global,globalLet,globalConst);
//arroja error porque gloalLet y globalConst solo son locales