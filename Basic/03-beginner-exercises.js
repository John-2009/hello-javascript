/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Este es un comentario
// 2. Escribe un comentario en varias líneas
/* Este es un comentario
en varias
lineas 
de texto*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let stringType = "Este es una variable tipo texto."
let num = 1
let decimal = 3.4
let itTrue = true
let itFalse = false

console.log(stringType)
console.log(num)
console.log(decimal)
console.log(itTrue)
console.log(itFalse)

// 4. Imprime por consola el valor de todas las variables
console.log(stringType)
console.log(num)
console.log(decimal)
console.log(itTrue)
console.log(itFalse)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof stringType)
console.log(typeof num)
console.log(typeof decimal)
console.log(typeof itTrue)
console.log(typeof itFalse)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
stringType = "Esta variable de texto fue modificada."
num = 100
decimal = 300.4
itTrue = false
itFalse = true

console.log(stringType)
console.log(num)
console.log(decimal)
console.log(itTrue)
console.log(itFalse)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
stringType = 300
num = "100"
decimal = false
itTrue = 3.4
itFalse = "false"

console.log(stringType)
console.log(num)
console.log(decimal)
console.log(itTrue)
console.log(itFalse)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const stringTypeCons = 300
const numCons = "100"
const decimalCons = false
const itTrueCons = 3.4
const itFalseCons = "false"
// 9. A continuación, modifica los valores de las constantes
stringTypeCons = "Cambiando el valor de una constante"

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse