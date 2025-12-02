import area from 'prompt-sync';
import perimetro from 'prompt-sync';

// Se definen las variables y se llama el método importado
let areas = area()
let perimetros = perimetro()

// Se definen las dimensiones del rectángulo como constantes
const base = 25;
const altura = 35;

// Se calculan el área y el perímetro del rectángulo
areas = base * altura;
perimetros = 2 * (base + altura);

// Se muestra el resultado en la consola
console.log("El resultado es: " + areas + " y " + perimetros);