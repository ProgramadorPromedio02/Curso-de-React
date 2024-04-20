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
