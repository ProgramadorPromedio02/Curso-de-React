// Clase 1: Conceptos Básicos de JavaScript
// ........................................

//let dato = 5;

// let dato
// dato = 5;

// console.log(dato);

//Tipos de datos

//Number
// let miNumero = 1;
// console.log(typeof(miNumero));
//String
// let miString = `Hola mundo`;
// console.log(typeof(miString));
//Boolean
// let miBooleano = false;
// console.log(typeof(miBooleano));
//Undefined
// let dato;
// console.log(typeof(dato));

//Operadores

//Suma
// let suma = 5 + 5;
// console.log(suma);
//Resta
// let resta = 3 - 1;
// console.log(resta);
//División
// let division = 3/0;
// console.log(division);
//Multiplicación
// let multiplicacion = 5 * 10;
// console.log(multiplicacion);
//potencia
// let potencia = 3 ** 3; // 3 * 3 * 3
// console.log(potencia);
//Cadenas de carácteres
// let frase = "hola" + " mundo" + "!";
// console.log(frase);

//Incremento
// let x = 1;
// let y = ++x; // Incrementa x en 1 y luego asigna el valor a y
// console.log(x); // Imprime 2
// console.log(y); // Imprime 2

// let z = x++;
// console.log(z);
// console.log(x);
//Decremento
// let a = x--;
// console.log(a);
// console.log(x);
// let b = --x;
// console.log(b);

//Booleanos

// console.log(true);
// console.log(false);
// console.log(!true);
// console.log(!false);
// console.log(!!true);

//Igualdad

// console.log(true === true);
// console.log(true === false);
// console.log(true !== false);
// console.log(false !== false);
// console.log(3 == "3");
// console.log(3 === "3");

//Mayor que

// console.log(5 > 3);

//Menor que

// console.log(5 < 3);

//Mayor igual

// console.log(3 >= 3);

//Menor igual

// console.log(2 <= 1);
// console.log("a" < "b");
// console.log("a" < "c");
// console.log("a" < "d");
// console.log("e" < "d");

//Lógicos
//Operador AND &&

// console.log(true && false && true && true);
// console.log(0 && true);
// console.log(1 && "hello");
// console.log(0 == false);
// console.log(1 == true);

//Operador OR ||
// console.log(false || false || true || false);

//Condicionales
//Sentencia IF

// if (true) {
//   console.log("Es true");
// }

// let operacion = 0 + 1;

// if (operacion >= 7) {
//   console.log("Es true");
// } else if (operacion < 7 && operacion > 2) {
//   console.log("Está entre 7 y 2");
// } else {
//   console.log("Es menor de 2");
// }

//Sentencia SWITCH

// let operacion = 5 - 5;

// switch (operacion) {
//   case 0:
//     console.log("El resultado es 0");
//     break;
//     case 7:
//       console.log("El resultado es 7");
//       break;
//     default:
//       console.log("El resultado no es ni 0 ni 7");
// }

//Funciones

// function saludar(nombre = "Carlos") {
//   return `¡Hola ${nombre}!`;
//   //return "¡Hola " + nombre + "!";
// }

//console.log(saludar("Carlos"));
//console.log(saludar("Pepe"));
//console.log(saludar("Maria"));
// console.log(saludar("Paola"));
// console.log(saludar());

// class Inventario {
//   constructor(nombre) {
//     this.nombre = nombre;
//     this.articulos = [];
//   }
//   getNombre() {
//     return this.nombre;
//   }
//   add(articulo, cantidad) {
//     this.articulos[articulo] = cantidad;
//   }
//   cantidad(articulo) {
//     return this.articulos[articulo];
//   }
// }

// let libros = new Inventario("libros");
// console.log(libros.getNombre());
// console.log(libros.add("Aprendiendo JavaScript", 5));
// console.log(libros.cantidad("Aprendiendo JavaScript"));

// Clase 2: Bucles/Loops
//WHILE
/*
let i = 1;

while (i < 11) {
  console.log(i);
  i++;
}

function bucleWhile(num) {
  let i = 1;
  while (i < num) {
    console.log(i);
    i++;
  }
}

console.log(bucleWhile(11));
*/
//DO WHILE
/*
function doWhile(num) {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < num);
}

console.log(doWhile(11));
*/
//FOR
/*
//for(inicializacion; condicion; actualizacion) {}
function bucleFor(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}

console.log(bucleFor(11));
*/
//Array/Arreglo
/*
const array = [];
array[0] = "1";
array[1] = "2";

console.log(array[0]);
*/
//const array = new array(1000);
/*
const obj = {
  unArray: new Array(10000),
};

/*
const unArray = obj.unArray;

for (let i = 0, longitud = unArray.length; i < longitud; i++) {
  obj.unArray[i] = "Hola";
}
const obj = {
  unArray: new Array(10000),
};

function badPerformance() {
  console.time("bad");
  for (let i = 0; i < obj.unArray.length; i++) {
    console.log((obj.unArray[i] = "Hola"));
  }
  console.timeEnd("bad");
}

function goodPerformance() {
  console.time("good");
  let unArray = obj.unArray;
  for (let i = 0, longitud = unArray.length; i < longitud; i++) {
    unArray[i] = "Hola";
  }
  console.timeEnd("good");
}

console.log(badPerformance());
console.log(goodPerformance());
*/
/*
const miArray = [1, 2, 3, 4];
miArray.forEach(function (item, index) {
  console.log(`El valor de la posición ${index} es: ${item}`);
});
*/
/*
const libro = {
  titulo: "Aprendiendo JavaScript",
  autor: "Carlos Azaustre",
  numPaginas: 100,
  editorial: "carlosazaustre.es",
  precio: "24.90",
};
*/
/*
const props = Object.getOwnPropertyNames(libro);
props.forEach((name) => {
  let valor = Object.getOwnPropertyDescriptor(libro, name).value;
  console.log(`La prop ${name} contiene: ${valor}`);
});
*/

// forEach
// -------
// Itera sobre elementos de un arreglo.

// Object.getOwnPropertyNames
// --------------------------
// Devuelve los nombres de todas las propiedades propias de un objeto.

// Object.getOwnPropertyDescriptor
// -------------------------------
// Devuleva la información detallada sobre las propiedades propias de un objeto en JavaScript.

/*
for (let prop in libro) {
  console.log(`La prop ${prop} contiene ${libro[prop]}`);
}
*/

// Clase 3: Tipos de Datos y Clases Core en JavaScript

/*
const libro = {
  titulo: "Aprendiendo JavaScript",
  autor: "Carlos Azaustre",
  numPaginas: 100,
  editorial: "carlosazaustre.es",
  precio: "24.90",
  leer: function () {
    console.log("He leido el libro");
  },
};
console.log(libro.titulo);
console.log(libro["numPaginas"]);

libro.titulo = "Desarrollo web con React";
console.log(libro.titulo);

let pages = "numPaginas";
console.log(libro["pages"]);
console.log(libro.pages);
console.log(libro.leer());

let libro = new Object({ titulo: "duaaaaaaaaaaaaaaaaaaaahhhhhhhh" });
console.log(libro.titulo);

let libro = {
  titulo: "Aprendiendo JavaScript",
  autor: {
    nombre: "Carlos Azaustre",
    edad: 36,
    redes: {
      twitch: "twitch.tv/carlosazaustre",
      tiktok: "tiktok.com/@carlosazaustre",
    },
  },
};

console.log(libro.autor.nombre);
console.log(libro["autor"]["redes"]["twitch"]);

const coche1 = { marca: "Tesla", modelo: "X" };
const coche2 = { marca: "Tesla", modelo: "X" };
const coche3 = coche1;

console.log(coche1 === coche2);
console.log(coche1.marca === coche2.marca);
console.log(coche3 === coche1);
*/

// console.log(25); //25
// console.log(25.5); //25.5
// console.log(0x1f); //31
// console.log(0x10); //16
// console.log(5.4e2); //540
// console.log(1 / 0); //Infinity
// console.log(-1 / 0); //-Infinity
// console.log(1e1000); //Infinity
// console.log("a" / 15); // NaN

// toFixed()
// -------
// Es un método de javascript que formatea un número con un número específico de dígitos después del punto decimal y lo convierte en una cadena de caracteres.

// toExponential()
// Es un método de javascript que devuelve una representación de cadena de un número en notación exponencial

//let numero = 5;
//let num = new Number(1);

// console.log(parseInt("15"));
// console.log(parseInt("1111", 16));
// console.log(parseFloat("5e3"));

// let n = 2.5678;
// console.log(parseInt(n.toFixed(2))); //2
// console.log(n.toFixed(0)); //3
// console.log(n.toExponential(2)); //2.57e+0
//console.log((1111).toString(10)); //1111
// console.log((15).toString(2)); //1111
// console.log((4369).toString(16)); //1111
// console.log(Math.PI); //3.141592653589793
// console.log(Math.E); //2.718281828459045
// console.log(Math.random()); //0.13621357578144955
// console.log(Math.random()); //0.6392769384893757
// console.log(Math.pow(2, 6)); //64
// console.log(2 ** 6); //64
// console.log(Math.min(2, 4, 6)); //2
// console.log(Math.max(4, 6, 2)); //6

// let miArray7 = [3, 6, 1, 4];

// class miNuevoArray {
//   constructor(arr) {
//     this.array = arr;
//   }
// }

// console.log(miArray1);
// //console.log(miArray2); // NO POR QUÉ ERROR :(
// console.log(miArray3);
// console.log(miArray4);
// console.log(miArray5[0][1]);
// console.log(miArray6.length);
// console.log(miArray7.sort());
// console.log(miArray7.pop());
// console.log(miArray7);
// console.log(miArray7.push(2));
// console.log(miArray7);
// console.log(miArray7.sort());
// console.log(miArray7.reverse());

// .join()
// -------
// Es un método que une todos los elementos de un array en una cadena, separados por un separador especificado.

// let valor = 3;
// const template = [
//   "<li>",
//   valor,
//   "</li>"
// ].join("");

// console.log(template);

// .map()
// -------
// Es un método que crea un nuevo array, aplicando una función a cada elemento del array original.

// let miArray1 = [2, 4, 6, 8];
// let raices = miArray1.map(Math.sqrt)

// console.log(raices);

// let miArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let resultado = miArray2.filter(item => item % 3 === 0)
// console.log(resultado);
// console.log(miArray2);

// .slice()
// --------
// Devuelve una porción de una array como un nuevo array, especificando un inicio y un final opcionales.

// let miArray1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// console.log(miArray1.slice(2));
// console.log(miArray1);
// console.log(miArray1.slice(2, 4));
// console.log(miArray1);
// console.log(miArray1.slice(2, -1));
// console.log(miArray1.slice(2, -2));

// Clase String
// ------------
// Es un objeto que representa una secuencia de caracteres y proporciona métodos para trabajar con cadenas de texto. Los métodos son los siguientes:
// 1. .charCodeAt(): Devuelve el valor Unicode del carácter en un índice específico de la cadena.
// 2. .indexOf(): Devuelve el índice de la primera ocurrencia de un valor especificado dentro de la cadena.
// 3. .substring(): Devuelve una parte de la cadena, especificada por un índice inicial y una final.
// 4. .split(): Divide una cadena en un array de subcadenas, utilizando un separador especificado.

// console.log("javacript"[2]);
// console.log("javascript".length);
// console.log("javascript".charCodeAt(2));
// console.log("javascript".indexOf("string"));
// console.log("javascript".substring(2, 4));

// let texto = "Hola";
// let text = newString("Hola");

// const fecha = new Date();
// console.log(fecha.toString().split(" ")[4].split(":")/*[0]*/);

// Clase 4: Manejo de Arrays/Arreglos
// ..................................

// Métodos
// -------

// .find()
// -------
// Es un método que devuelve el primer elemento de un array que cumple con una condición especificada en una función de prueba.

// .some()
// -------
// Es un método que verifica si al menos un elemento de un array cumple con una condición especificada en una función de prueba, devolviendo true si es así, de lo contrario devuelve false.

// .includes()
// Es un método que verifica si un array incluye un determinado elemento, devolviendo true si lo encuentra y false si no lo encuentra.

// .every()
// --------
// Es un método que verifica si todos los elementos de un array cumplen con una condición especificada en una función de prueba, devolviendo true si es así para todos los elementos, de lo contrario devuelve false.

// .filter()
// ---------
// Es un método que crea un nuevo array con todos los elementos que pasan una prueba (función de prueba) especificada.

// .reduce()
// ---------
// Es un método que aplica una función reductora sobre cada elemento de un array, devolviendo un valor único resultante.

// const posts = [{
//   id: 1,
//   title: "Mi primer post",
//   //image: "https://img.com/1",
//   tags: ["javascript", "webdevelopment"],
// }, {
//   id: 2,
//   title: "Mi experiencia con React",
//   image: "https://img.com/2",
//   tags: ["javascript", "webdevelopment", "react"],
// }, {
//   id: 3,
//   title: "Por qué dejé Angular",
//   image: "https://img.com/3",
//   tags: ["javascript", "webdevelopment", "angular"]
// }]

//console.log(posts.find(post => post.title == "Por qué dejé Angular"));
//console.log(posts.some(post => post.tags.includes("react")));
//console.log(posts.every(post => post.tags.includes("javascript")));
//console.log(posts.map(post => post.title));
//console.log(posts.filter(post => post.image !== undefined));
// console.log(posts.reduce((allTags, post) => {
//   return [...allTags, ...post.tags];
// }, []));
// console.log(posts.reduce((allTags, post) => {
//   return Array.from(new Set([...allTags, ...post.tags]));
// }, []));
// console.log(posts.reduce((allTags, post) => {
//   return [...allTags, ...post.tags];
// }, []).filter((post, index, self) => index === self.indexOf(post)));

// Objeto set
// ----------
// Es un objeto que se utiliza para eliminar duplicados de un array.

// Clase 5: Objeto THIS
// ....................

// Objeto this
// -----------
// Es un objeto que se refiere al contexto de ejecución actual y representa el objeto al que pertenece el código en ese momento.

// Método .bind()
// --------------
// Es un método que crea una nueva función que, cuando se llama, tiene un valor this predefinido, con los argumentos proporcionados previamente.

// var obj = {
//   foo: function () {return "foo" },
//   bar: function () {
//     //var that = this;
//     document.addEventListener("click", event => this.foo())

//   }
// }

// Clase 6: Closures
// .................

// const saludar = function(nombre) {
//   return "Hola " + nombre;
// }

// console.log(saludar("Carlos"));
// console.log(saludar());

// const a = "Hey!";
// function global() {
//   const b = "¿Qué ";
//   function local() {
//     const c = "tal?"
//     return a + b + c;
//   }
//   return local;
// }

// console.log(global());
// console.log(global()());
// const closure = global();
// closure();

// closure()
// ---------
// Un closure es una función que recuerda el ámbito en el que fue creada, permitiendo acceder a variables externas incluso después de que la función haya terminado de ejecutarse.

// const miContador = (function() {
//   let _contador = 0;
//   function incrementar() {
//     return _contador++;
//   }
//   function decrementar() {
//     return _contador--;
//   }
//   function valor() {
//     return _contador;
//   }
//   return { //ES6 en adelante
//     incrementar,
//     decrementar,
//     valor
//   }
//   // Retorna un objeto con las funciones incrementar, decrementar, y la variable valor.
//   // Las funciones incrementar y decrementar son referencias a las funciones definidas previamente.
//   // La variable valor es una referencia a la variable definida previamente.
// })();

// console.log(miContador);
// console.log(miContador.valor());
// console.log(miContador.incrementar());
// console.log(miContador.valor());
// console.log(miContador.incrementar());
// console.log(miContador.incrementar());
// console.log(miContador.valor());
// console.log(miContador.decrementar());
// console.log(miContador.valor());

// Clase 7: Asincronía en JavaScript(Promesas, Async, Await)
// .........................................................

// const datos = [{
//   id: 1,
//   title: "Iron Man",
//   year: 2008
// }, {
//   id: 2,
//   title: "Spiderman: Homecoming",
//   year: 2017
// }, {
//   id: 3,
//   title: "Avengers: Endgame",
//   year: 2019
// }];

// // const datos = [];

// // const getDatos = () => {
// //   return datos;
// // }

// const getDatos = () => {
//   return new Promise((resolve, reject) => {
//     if(datos.length === 0) {
//       reject(new Error("No existen datos"));
//     }

//     setTimeout(() => {
//       resolve(datos);
//     }, 1500);
//   });
//   // setTimeout(() => {
//   //   return(datos);
//   // }, 1500);
// }

// // getDatos().then((datos) => console.log(datos));

// async function fetchingData() {
//   try {
//     const datosFetched = await getDatos();
//     console.log(datosFetched);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// fetchingData();

// Clase 8: Nuevas características en ES6 y más
// ............................................

// const nombre = "Carlos";
// const apellido = "Azaustre";

// console.log(nombre + " " + apellido);
// console.log(`${nombre} ${apellido}`);

// function Componente({backgroundColor}) {
//   return (<div className={`bg-color-${backgroundColor}`}>Hola</div>)
// }

// const nombre = "Carlos";
// const edad = 36;
// const twitter = "https://twitter.com/carlosazaustre";

// const persona = {
//   nombre,
//   edad,
//   twitter
// }

// console.log(persona);

// function Componente({initialState, totalCount}) {
//   const [state, setState] = useState({initialState, totalCount})
// }

// function nombreDeLaFuncion () {
//   return "Hola";
// }

// const funcionFlecha = () => "Hola"

// console.log(nombreDeLaFuncion());
// console.log(funcionFlecha());

// function ListaDeTareas() {
//   return (
//     <ul>
//       {listado.map((elemento) => (
//         <li>{elemento.nombre}</li>
//       ))}
//     </ul>
//   );
// }

// const cuadrado = {
//   x: 10,
//   y: 10,
// };

// function calcularArea({ x, y }) {
//   return x * y;
// }

// calcularArea(cuadrado);

// function Avatar({ username, url }) {
//   return <img src={url} alt={username} />;
// }

// function suma(a = 0, b = 0) {
//   // if (a === undefined || b === undefined) {
//   //   console.log("Debes introducir 2 valores");
//   //   return;
//   // }
//   return a + b;
// }
// console.log(suma(3));

// const array = [1, 2, 3, 4, 5];
// const otroArray = [6, 7, 8, 9, 10];

// const nuevoArray = [...array, ...otroArray];
// console.log(nuevoArray);

// const obj1 = {
//   a: "a",
//   b: "b",
//   c: "c",
// };
// const obj2 = {
//   d: "d",
//   e: "e",
// };

// // const nuevoObjeto = Object.assign({}, obj1, obj2);
// const nuevoObjeto = { ...obj1, ...obj2 };
// console.log(nuevoObjeto);

// function Componente({ id, ...props }) {
//   return <NuevoComponente key={id} {...props} />;
// }

// export function suma(a , b) {
//   ...
// }

// export function otraFuncion() {
//   ...
// }

// export function resta(a, b) {
//   ...
// }

// import suma from "./suma";
// import resta from "./resta";

// function calculadora() {
//   suma();
//   resta();
// }
// console.log(suma(3));

// import React { useState, useEffect, Fragment } from "react";

// React.useState
// React.useEffect
// React.Fragment

// const coche = {
//   marca: "Tesle",
//   model: "CyberTruck",
// };

// let modelo = coche.model ? coche.model : "X";
// // if (coche.model()) {
// //   modelo = coche.model;
// // } else {
// //   modelo = "X";
// // }

// console.log(modelo);

// function ListaTareas({ tareas }) {
//   return (
//     <React.Fragment>
//       {tareas.length ? (
//         <ul>
//           {tareas.map((tarea, index) => (
//             <li key={index}>{tarea}</li>
//           ))}
//         </ul>
//       ) : (
//         <div>No hay tareas.</div>
//       )}
//     </React.Fragment>
//   );
// }

// Repaso de Métodos
// .find()
// .some()
// .every()
// .includes()
// .map()
// .filter()
// .reduce()

// function suma(a, b) {
//   //a = b == null ? 0 : a;
//   a = a ?? 0;
//   b = b ?? 0;
//   //b = b == null ? 0 : b;
//   return a + b;
// }

// console.log(suma(4));

// function Avatar({ user }) {
//   return <img src={user.imageUrl ?? "https://placeholder.it/jfkjdkf"} />;
// }

// const user = {
//   nombre,
//   edad,
//   location: {
//     x,
//     y,
//     city: {
//       zipcode,
//       ldl,
//     },
//   },
// };
// // const zipcode = user && user.location && user.location.city && user.location.city.zipcode;
// //const zipcode = user?.location.city.zipcode;

// function User() {
//   return <div>ZIP Code: {user?.location.city.zipcode}</div>;
// }
