const helloWorld = () =>{
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(()=> resolve("Hello world"), 3000)
            : reject(new Error ('Test fallido'))
    })
}

const helloAsync = async() =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync()


/* ////////// */

/* Proceso de ejecucion correcto // */
const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello)
    }catch(error){
        console.log(error);
    }
}

anotherFunction();


/* ////////////////////////////////////////////// */
// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        console.log('Cuentas con: ',money," mx");
        if(money >= 35000) {    
            console.log('Estamos calculando si puedes sacar un vehiculo')
            setTimeout(() => {
                resolve('Aqui tienes tu GMC sierra Denali');
            }, 8000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Los sentimos, no tienes fondos suficientes:('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to GMC!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(97000); //1. llamas a la funcion comprar helado e Ingresas el dinero

/* ////////////////////////////////// */
const buyATruck = (monenyPerMonth) =>{
    return new Promise((resolve,reject) =>{
        console.log("Your salary per month is: ",monenyPerMonth);
        if(monenyPerMonth>=36000){
            console.log("We are calculating if we can give you a GMC...");
            setTimeout(() => {
                resolve("Congrats, you are available for buy a GMC Sierra denali");
            }, 6000);
        }else{
            reject("Sorry!, we can not give you a suscription for a GMC");
        }
    })
}


const giveGMC = async (money) =>{
    try{
        console.log("Welcome to GMC")
        const permission = await buyATruck(money);
        console.log(permission);
        console.log("Thanks and enjoy your new truck")
    }catch(e){
        console.log("ups we have an error",e);
    }
}

giveGMC(97000)