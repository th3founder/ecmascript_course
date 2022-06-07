/* clases */
class calculator{
    constructor(){ //El constructor es como el molde
        this.valueA = 0; 
        this.valueB = 0;
    }
    sum(valueA,valueB){ //aqui construimos la propiedad donde tendremos 2 datos de entrada
        this.valueA = valueA; //re asignamos los datos introducidos en el constructor
        this.valueB = valueB
        return this.valueA + this.valueB //retornamos la suma
    }
    res(valueA,valueB){
        this.valueA = valueA; //re asignamos los datos introducidos en el constructor
        this.valueB = valueB
        return this.valueA-this.valueB
    }
}

const calcular = new calculator(); //almacenamos en una constante
console.log(calcular.sum(1,2))
console.log(calcular.sum(2,2))
console.log(calcular.res(2,1))


/* ////////////////////////////////////// */
/* Modulos */
const hello = () =>{
    return `hello`
}

export default hello


/* //////////////////////////////////// */

/* Generators */
/* funciones  especiales que retorna una serie de valores segun el algotimo definido*/

function* helloWorld(){ /* Se coloca * para indicar que es un generator */
    if(true){   
        yield `Hello, `; //yield permite retornar algo y lo guarda de forma interna
    }if(true){
        yield `World, `;
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);//next recuerda donde estaba antes de ejecutarse para asi poder imprimir el valor correcto
console.log(generatorHello.next().value);


//fibonnaci
function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  
