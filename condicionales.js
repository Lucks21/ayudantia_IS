const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//num mayor de los 3
if(numero1 > numero2 && numero1 >numero3){
    console.log("El numero mayor es el 1");
}else if(numero2 > numero1 && numero2 >numero3){
    console.log("El numero mayor es el 2");
    }else if(numero3 > numero1 && numero3 >numero2){
        console.log("El numero mayor es el 3");
    }
//num menor de los 3
if(numero1 < numero2 && numero1 < numero3){
    console.log("El numero menor es el 1");
}else if(numero2 < numero1 && numero2 < numero3){
    console.log("El numero menor es el 2");
    }else if(numero3 < numero1 && numero3 < numero2){
        console.log("El numero menor es el 3");
    }
//num1 es par o impar
if (numero1 % 2 === 0) {
    console.log("numero1 es par");
  } else {
    console.log("numero1 es impar");
  }
//num2 es par o impar
if (numero2 % 2 === 0) {
    console.log("numero2 es par");
  } else {
    console.log("numero2 es impar");
  }
//num3 es par o impar
if (numero3 % 2 === 0) {
    console.log("numero3 es par");
  } else {
    console.log("numero3 es impar");
  }
//num1 es multiplo de 5
if (numero1 % 5 === 0) {
    console.log("El numero 1 es multiplo de 5");
  } else {
    console.log("El numero 1 no es multiplo de 5");
  }
//num2 es multiplo de 5
if (numero2 % 5 === 0) {
    console.log("El numero 2 es multiplo de 5");
  } else {
    console.log("El numero 2 no es multiplo de 5");
  }
//num3 es multiplo de 5
if (numero3 % 5 === 0) {
    console.log("El numero 3 es multiplo de 5");
  } else {
    console.log("El numero 3 no es multiplo de 5");
  }