/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let variableNum=10
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log(variableNum)
variableNum += 2 // Suma con asignación
console.log(variableNum)
variableNum -= 2 // Resta con asignación
console.log(variableNum)
variableNum *= 2 // Multiplicación con asignación
console.log(variableNum)
variableNum /= 2 // División con asignación
console.log(variableNum)
variableNum %= 2 // Módulo con asignación
console.log(variableNum)
variableNum **= 2 // Exponente con asignación
console.log(variableNum)
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(1==1)
console.log(1<2)
console.log(1!=2)
console.log(2>1)
console.log(3<4)
// 5. Utiliza el operador lógico and
console.log(1==1 && 2==2)
// 6. Utiliza el operador lógico or
console.log(2!="2" || true==true)
// 7. Combina ambos operadores lógicos
console.log(2!="2" || true==true && true==true)
// 8. Añade alguna negación
console.log(!true)
console.log(!false)
// 9. Utiliza el operador ternario
let itIsVacation=true
itIsVacation ? console.log("We are on vacations") : console.log("We are working")
// 10. Combina operadores aritméticos, de comparáción y lógicas
let num1=0
let num2=6
console.log((num1+3)*2+(num1++) == num2 && num2 != (num1++)+2*(3+num1))