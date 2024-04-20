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
