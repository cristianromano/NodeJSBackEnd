const process = require("process");

console.log(process);

process.stdout.write("Hola mundo\n");

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
