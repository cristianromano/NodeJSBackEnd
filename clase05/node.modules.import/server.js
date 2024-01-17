// el type TIENE QUE SER MODULE cuando quiero trabajar con ECMA 6 en el PACKAGE.JSON
import { sumar } from "./api/operaciones.js";

// importar ECMA6 con alias
import * as operaciones from "./api/operaciones.js";

console.log("Iniciando server.js!!");
console.log("-----------------------");
console.log(`SUMA 1 + 2 = ${sumar(1, 2)} `);
console.log("-----------------------");
console.log(`RESTA 1 - 2 = ${operaciones.restar(1, 2)} `);
console.log("-----------------------");
console.log(`MULTIPLICACION 1 * 2 = ${operaciones.multiplicar(1, 2)} `);
console.log("-----------------------");
console.log(`DIVISION 1 / 2 = ${operaciones.dividir(1, 2)} `);
console.log("-----------------------");
console.log("Fin server.js!!");
