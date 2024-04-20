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
