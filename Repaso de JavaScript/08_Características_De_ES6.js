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
