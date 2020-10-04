// Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.
function oddOrEven(number) {
  return number % 2 === 0 ? true : false;
}
console.log(oddOrEven(11));

// Crear una función que recibe dos números y un operador (su nombre como string - es decir "suma", "resta"...) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.
function automaticCalculator(number1, number2, operation) {
  let result = 0;
  switch(operation){
    case 'sum':
      result = number1 + number2;
      break;
    case 'substraction':
      result = number1 - number2;
      break;
    case 'multiplication':
      result = number1 * number2;
      break;
    case 'division':
      result = number1 / number2;
      break;
  }
  return result;
}
console.log(automaticCalculator(3,4, "division"))


// Dado un array de números enteros positivos desordenados, devolver otro array con los números ordenados. HACER SIN SORT.
function orderArray(array) {
  let numBefore = array[0];
  let orderedArray = [];

  for(let item of array) {
    if(item < numBefore) {

    }
  }
}

// Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible por divisor menor que limite. Ambos valores serán siempre enteros positivos.
function getBigDivisible(divisor, limit) {
  while(limit % divisor !== 0){
    limit--;
  }
  return limit;
}
console.log(getBigDivisible(6, 100));

// Cada día una planta crece en metros en base a su velocidadCrecimiento. Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.
function getDaysToGrow(growSpeed, decreceSpeed, deriderableHeight) {
  let plantHeight = 0;
  let days = 0;
  do {
    plantHeight += growSpeed - decreceSpeed;
    days++;
  } while(plantHeight < deriderableHeight)
  return days;
}

console.log("Days to grow", getDaysToGrow(4, 2, 50));

// Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:
// Los lunes odio el 12.
// Los martes odio los números mayores de 95.
// Los miércoles odio el 34.
// Aborrezco el 0 en jueves.
// En viernes odio los números pares.
// Ni me hables del 56 en sábado.
// El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)
// Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no