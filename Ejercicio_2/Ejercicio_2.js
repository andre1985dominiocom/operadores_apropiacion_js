import calificacion from 'prompt-sync';

// Definición de las notas obtenidas en la asignatura y se llama el método importado
const notas = calificacion()
const nota1 = 4.5;
const nota2 = 3.5;
const nota3 = 3.8;

// Cálculo del promedio de las notas obtenidas
let promedio = (nota1 + nota2 + nota3) / 3;

// Mostrar el promedio en la consola
console.log("El promedio de la asignatura es: "  + promedio)
