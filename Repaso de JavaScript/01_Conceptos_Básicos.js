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
