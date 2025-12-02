import calculo from 'prompt-sync';

// Se llama el método importado
const operacion = calculo()

// Se realiza la operación matemática y se almacenan los resultados en variables separadas
// Primero se calcula el valor de la expresón en parentesis,
// luego se divide, se multiplica y finalmente se suman y restan los resultados según el orden de operaciones.
const calcular1 = (20 + 10) / 5 + 3 * 2 - 4;
const calcular2 = (20 + 10) / 5 + 3 * 2 - 4;
const calcular3 = (20 + 10) / 5 + 3 * 2 - 4;

// Se concatenan los resultados en una sola variable
const calcular = calcular1 + "\n" + calcular2 + "\n" + calcular3;

// Se muestra el resultado en la consola
console.log("El resultado de la operación es: " + calcular);