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