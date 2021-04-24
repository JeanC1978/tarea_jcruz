// Un productor de leche lleva el registro de lo
// que produce en litros, 

// pero cuando entrega le pagan en galones. 

// Realice un algoritmo, y represéntelo en JS, 

// que ayude al productor a saber cuánto recibirá por la entrega de su producción de un día (1 galón = 3.785 litros).

let litro = +prompt('Ingrese la cantidad de litros en números?')
console.log(`la cantidad de galones es : ${litro / 3.785}`)