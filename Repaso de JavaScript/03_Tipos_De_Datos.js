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
