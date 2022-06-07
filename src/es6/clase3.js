//Arrow Functions, Promesas y Parámetros en objetos

let name = 'Alvaro';
let age = 22

/* Objetos */
//antigua forma de hace objeto  es5
obj = {
    name: name,
    age: age,
}

//nueva forma de objeto     es6
obj2 = {name,age};
console.log(obj2.name)

//.......................................

/* arrow functions */

const names = [
    {name:'Alvaro',age:22},
    {name:'Ceci',age:26}
]

//es5
let listOfName2 = names.map(function(item){
    console.log(item.name,item.age);
})


//es6
let listOfNames2 = names.map((item)=> console.log(item.name,item.age))

const listOfNames3 = (name,age) =>{

}

const listOfName4 = name =>{
    
}

const square = num => num*num; //simplifica el return

//.................................................

/* promesas */
const helloPromise = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("Hey todo good")
        }else{
            reject("Ups! algo salio mal")
        }
    })
}

helloPromise().then(response =>console.log(response)).then(()=>console.log("hola")).catch(error=>console.log(error))