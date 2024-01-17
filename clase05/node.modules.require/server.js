// exporto las operaciones
const operaciones = require("./api/operaciones.js");

console.log("Iniciando server.js");
console.log("-----------------------");
console.log(`SUMA 1 + 2 = ${operaciones.sum(1, 2)} `);
console.log("-----------------------");
console.log(`RESTA 1 - 2 = ${operaciones.res(1, 2)} `);
console.log("-----------------------");
console.log(`MULTIPLICACION 1 * 2 = ${operaciones.mul(1, 2)} `);
console.log("-----------------------");
console.log(`DIVISION 1 / 2 = ${operaciones.div(1, 2)} `);
console.log("-----------------------");
