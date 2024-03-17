function sum(array) {
    let suma = 0;
    for (let numero of array) {
      suma += numero;
    }
    return suma;
  }

function prom(array) {
    let suma = 0;
    for (let numero of array) {
      suma += numero;
    }
    return suma / array.length;
}

function convertirAMayusculas(array) {
    let nuevoArray = [];
    for (let texto of array) {
      nuevoArray.push(texto.toUpperCase());
    }
    return nuevoArray;
}

function pares(array) {
    let pares = [];
    for (let numero of array) {
      if (numero % 2 === 0) {
        pares.push(numero);
      }
    }
    return pares;
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(prom([1, 2, 3, 4, 5]));
console.log(convertirAMayusculas(["hoLa muNdo", "adIOS mundo"]));
console.log(pares([1, 2, 3, 4, 5, 6]));