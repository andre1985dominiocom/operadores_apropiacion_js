import contar from 'prompt-sync';

// Se llama el métdo importado
let contador = contar()
// Definición de las variables para el contador de visitas y las visitas diarias
const contadorVisitas = 100;
let visitasDiarias = 25;

// Realización de operaciones matemáticas con las variables definidas
let totalVisitas = contadorVisitas + visitasDiarias - 10 + 20;

// Mostrar el resultado en la consola
console.log("Total de visitas después de las operaciones: " + totalVisitas);