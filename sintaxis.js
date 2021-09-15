//----------------------------Variables y tipos de datos----------------------------

var nombre = 'Sandra'; //string
let edad = 20; //number
const verdadero = true; //boolean, puede ser true o false

let array = [ 1, 'hola', true, false, [], {}]; // puede contener cualquier tipo de dato adentro

let objetoLiteral = {
    nombrePropiedad1: valor1,
    nombrePropiedad2: valor2,
    nombrePropiedadN: valorN,
    nombreMetodo: function(parametro1, parametroN) {
        // bloque codigo
        //return o console.log();
    }
};

// literal template, es lo mismo que concatenar cadenas de texto con el operador + 

`aca va la cadena de texto, si quiero agregar una variable la agrego asi ${nombreVariable} y puedo seguir escribiendo el texto o agregar mas variables cuando quiera`;


//----------------------------Operadores----------------------------

//Aritmeticos: + - / * % 
//Incremento: ++ 
//Decremento: --
//Concatenacion: 'cadena de ' + 'texto'
//Comparacion simple: == (devuelve un booleano)
//Comparacion estricta: === (devuelve un booleano)
//Desigualdad simple: != (devuelve un booleano)
//Desigualdad estricta: !== (devuelve un booleano)
//Mayor, menor, mayor o igual, menor o igual: > < >= <= (devuelve un booleano)
//AND:  && (devuelve un booleano)
//OR: || (devuelve un booleano)
//Negacion: !


//----------------------------Funciones----------------------------

//Los parametros no son requeridos si o si, pueden tenerlos o no
//Expresada
let miFuncion = function(parametro1, parametro2, parametroN){
    //bloque de codigo
    //return
};

//Declarada
function nombre(parametro1, parametro2, parametroN){
    //bloque de codigo
    //return
};

function sumar(a,b) {
    return a + b;
};

//----------------------------Arrow Functions----------------------------

// No necesitamos la palabra reservada function, y para utilizarlas las asignamos a una variable. 
// le pasamos los parametros primero y luego de la flecha => insertamos el bloque de codigo.
// si tenes una sola sentencia de código y es lo que queres retornar no hacen falta ni la palabra reservada return ni las llaves. 
let suma = (a,b) => a + b;

// si tiene un solo parametro no hacen falta los parentesis. 

let elDoble = num => num*2;

//Si tiene varias sentencias a ejecutar si hacen falta las llaves y el return. 

let esPar = numero => {
	if(numero %2 === 0 ) {
	    return true;
    }
        return false; 
};

//para ejecutar o invocar la funcion, se trata exactamente igual que con una funcion declarada o expresada. 

console.log(elDoble(6)); //12

// agrego esto para tenerlo en cuenta que puede servir, como conseguir fechas y horas. utilizamos Date(), .getHours() o .getMinutes()
let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}


//----------------------------Callbacks----------------------------

// Callback es cuando recibimos como argumento de una función, otra función y ejecutamos ese argumento.
// Cuando se pasa una función como callback, es decir como parametro en una función, no va con los parentesis. 

//ejemplo con un callback anonimo
setTimeout( function(){console.log('Hola Mundo!')}, 1000);

//ejemplo con funciones declaradas previamente
let sum = (n1, n2) => n1 + n2;
let rest = (n1, n2) => n1 - n2;
let mult = (n1, n2) => n1 * n2;
let div = (n1, n2) => n1 / n2;

let calculadora = (n1,n2, operacion) => operacion(n1,n2);

calculadora(5,3, sum); //con esto sumamos
calculadora(5,3, rest); //con esto restamos
calculadora(5,3, mult); //con esto multiplicamos
calculadora(5,3, div); //con esto dividimos


//----------------------------Condicionales----------------------------

if(condicion){
    //bloque de codigo si la condicion se cumple.
}

if(condicion){
    //bloque de codigo si la condicion se cumple. 
} else {
    //bloque de codigo si la condicion NO se cumple.
}

if(condicion){
    //bloque de codigo si la condicion se cumple.
} else if (otraCondicion){
    //bloque de codigo si la otra condicion se cumple.
} else {
    //bloque de codigo si ninguna de las otras condiciones NO se cumple.
}

// if ternario
condicion ? 'bloque de codigo si la condicion se cumple' : 'bloque de codigo si la condicion NO se cumple'; // condicion ? true : false;

//switch

switch(expresion) {
    case caso1: 
        //bloque de codido si se cumple el caso1
    break;
    case caso2: 
        //bloque de codido si se cumple el caso2
    break;
    case casoN: 
        //bloque de codido si se cumple el casoN
    break;
    default: 
        ////bloque de codido si ningun caso se cumple
    break;
}


//----------------------------Metodos de Strings----------------------------

let unString = 'Soy un string';

unString.length; //propiedad que devuelve la longitud
unString.indexOf(parametro); //devuelve el índice donde comienza el string que buscas, si no lo encuentra devuelve -1
unString.trim(); //elimina espacios en blanco
unString.slice(desde, hasta); //recorta un string en los indices que le especifiques
unString.split(); //transforma el string en array
unString.replace(loQueBuscasReemplazar, elReemplazo); //reemplaza lo que le digas del string por otra cosa que le especifiques


//----------------------------Arrays----------------------------

// cada elemento dentro del array tiene su posición (indice) la cual empieza a contar desde 0. 
let miArray = ['Lucho', 'Mono', 'Jullo'];
let edades = [24, 25, 23];
let valores = [true, false, true];
let variados = ['Nacho', 24, true, edades];

miArray[1]; //devuelve el elemento en el indice 1 del array, en este caso devuelve 'Mono'

// copiar el array sin referenciarlo 
let arrayOriginal = ['hola', 'soy', 1, 'array'];
let arrayCopia = [...arrayOriginal];
let arrayCopia2 = arrayOriginal.slice();
let arrayCopia3 = [].concat(arrayOriginal);
let arrayCopia4 = arrayOriginal.concat();


//----------------------------Metodos de Arrays----------------------------

miArray.push(elemento1, elemento2, elementoN); //agrega uno o mas elementos al FINAL del array
miArray.pop(); // elimina el ULTIMO elemento del array
miArray.shift(); // elimina el PRIMER elemento del array
miArray.unshift(elemento1, elemento2, elementoN); //agrega uno o mas eleementos al INICIO del array 
miArray.indexOf(parametro); //te devuelve el indice del parametro que le pidas que busque, si no lo encuentra devuelve -1
miArray.lastIndexOf(parametro); //te devuelve el indice del parametro que le pidas que busque comenzando de atras hacia adelante, si no lo encuentra devuelve -1
miArray.join(); //unifica los elementos del array en un string
miArray.includes(elemento); // recibe un elemento a buscar en el array y devuelve un booleano

miArray.map(function(elemento){
    //definimos las modificaciones que queremos aplicar sobre cada elemento del array
    //recorre y devuelve un array del mismo largo que el original
});
miArray.filter(function(elemento){
    //definimos la condicion que queremos utilizar como filtro para cada elemento del array
    //recorre, filtra y devuelve un array con los elementos que cumplen la condicion
});
miArray.reduce(function(acumulador, elemento, indice, array){
    //devuelve un unico valor
    //definimos el comportamiento qeu queremos implementar sobre el acumulador y el elemento
    // podemos indicar el valor iniciar que por defecto es 0
});
miArray.forEach(function(elemento){
    //definimos el comportamiento que queremos implementar sobre cada elemento del array
    //no retorna nada
});

miArray.slice(inicio, fin); //devuelve una copia de una parte del array dentro de un array
//si el inicio es un valor negativo extrae los ultimos elementos del array desde el final, si es omitido por defecto es 0, si es mayor al array.length devuelve vacio
//si el final es un valor negativo realiza un desplazamiento al final, si es mayor al array.length o si es omitido extrae hasta el final del array

miArray.splice(inicio, cant, item1,item2,itemN); //nos sirve para remover y/o agregar elementos de un array. 
//la cantidad es opcional, indica la cantidad de elementos a eliminar, si se omite o es mayor al array.length se eliminaran todos los elementos desde el inicio
//items(opcional) indica los elementos que se agregaran al array desde el inicio, si se omite splice solo elimina

miArray.sort(); // si no le pasamos callback ordena con la posicion de valor de string Unicode
miArray.sort(callback); //la funcion como parametro con el modo de ordenamiento

miArray.find(callback(e, array)); // devuelve el valor del primer elemento que cumple con la funcion especificada en el callback
    //indicamos el elemento a buscar y la posicion en la que comenzara


//----------------------------Ciclos----------------------------

//FOR
// for(condicion inicial; condicion a evaluar; modificador de la variable inicializadora) { bloque de codigo si se cumple la condicion };
for(i = 0; i < 10 ; i++){
    console.log('el valor de i es = a: ' + i);
};

//WHILE y DO WHILE
while(condicion) {
    //bloque de codigo si se cumple la condicion
    //algo que modifique la condicion para que eventualmente se deje de cumplir
};
//do while es como el while solo que sin importar la condicion se ejecuta el ciclo al menos 1 vez

let vuelta=1;
while(vuelta <=5){
    console.log('Dando la vuelta numero ' + vuelta);
    vuelta++;
};

do{
    console.log('Dando la vuelta numero ' + vuelta);
    vuelta++
} while(vuelta <= 5);


//----------------------------Objetos Literales----------------------------

let nombreObjeto = {
    nombrePropiedad1: valor1,
    nombrePropiedad2: valor2,
    nombrePropiedadN: valorN,
    nombreMetodo: function(parametros){
        //bloque de codigo
        // para referime a algo que es parte del objeto uso la palabra reservada this. Un ejemplo seria this.nombrePropiedad1 si quiero referirme al valor de nombrePropiedad1
        //return o console.log
    }
}

nombreObjeto.nombrePropiedadN; //con objeto.propiedad accedes al valor de la propiedad del objeto
nombreObjeto.nombreMetodo(); //con objeto.nombreMetodo(); podes invocar los metodos de tu objeto


//----------------------------Funciones Constructoras----------------------------

//son moldes que nos permiten crear otros objetos con las mismas propiedades. Su nombre suele comenzar en mayusculas para diferenciarlas.

function Auto(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}; 

//para crear un objeto usando la funcion constructora usamos la palabra new. 

let nuevoAuto = new Auto('Ford', 'Falcon');


//----------------------------JSON----------------------------

let amigos = ['Coco', 'Crash', 'Spyro', 'Sparks']; //array de amigos

let amigosJSON = JSON.stringify(amigos); // transformamos tipo de dato en un texto formato JSON

let amigosOriginal = JSON.parse(amigosJSON); // transformamos un texto con formato JSON al tipo de dato equivalente en Javascript


//----------------------------Modulos----------------------------

let series = ['Friends','Mr. Robot', 'Breaking Bad'];

module.exports = series; // por lo general al final del archivo a module.exports le asignas la variable que quieres exportar

//una vez exportado el modulo, en el archivo que lo querramos importar usamos la función require() y le pasamos como argumento la ruta hacia el archivo donde esta el modulo que exportamos. 

//ejemplo: let modulo = require('./nombreDelModulo');


//----------------------------FileSystem----------------------------

const fs = require('fs');
fs.writeFileSync('archivoQueQueremosEscribir.txt', 'ContenidoNuevo'); //Si el archivo no existe, lo crea. Este método BORRA TODO el contenido existente y lo REEMPLAZA por el nuevo.
// Acepta contenido de tipo STRING, si queremos pasar un JSON hay que utilizar el metodo  JSON.stringify();

fs.appendFileSync('archivoDondeQueremosEscribir.txt', 'Contenido'); //Si el archivo no existe, lo crea. Agrega contenido al final del contenido existente sin borrarlo. 

let ejemplo = fs.readFileSync('ejemplo.txt', 'utf-8'); //Nos permite recuperar datos de un archivo para poder usarlos.
// Como primer parametro va la ruta del archivo a leer. Como segundo parametro aclaramos el tipo de encoding asi podemos decodificar la informacion. 

let ejemploJSON = fs.readFileSync('ejemplo.JSON', 'utf-8');
let ejemploJ = JSON.parse(ejemploJSON);
// Si queremos utilizar datos que estan en formato JSON hay que pasarlos a objeto literal para poder manipularlos con JavaScript