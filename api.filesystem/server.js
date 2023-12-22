////*SYNC*//////

const { setFlagsFromString } = require("v8");

// const { readFileSync, writeFileSync } = require("fs");

// try {
//   let datos = readFileSync("../datos.txt", "utf-8");
//   console.log("rd1 ok", datos, datos.length);

//   let valorGuardar = new Date().toISOString();
//   writeFileSync("../datos.txt", valorGuardar, "utf-8");

//   datos = readFileSync("../datos.txt", "utf-8");
//   console.log("rd2 ok", datos, datos.length);
// } catch (error) {
//   console.log("ERROR", error);
// }

////*ASYNC*//////

// const { readFile, writeFile } = require("fs");

// readFile("../datos.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("ERROR", err);
//   } else {
//     console.log("rd1 OK", data, data.length);

//     let valorGuardar = new Date().toLocaleString();
//     writeFile("../datos.txt", valorGuardar, "utf-8", (err) => {
//       if (err) {
//         console.log("ERROR", err);
//       } else {
//         console.log("Lectura OK");
//         readFile("../datos.txt", "utf-8", (err, data) => {
//           if (err) {
//             console.log("ERROR", err);
//           } else {
//             console.log("rd2 OK", data, data.length);
//           }
//         });
//       }
//     });
//   }
// });

////*PROMESAS*//////

const { readFile, writeFile } = require("fs").promises;

async function leerYEscribir() {
  try {
    console.log("iniciando lectura");

    let datos = await readFile("../datos.txt", "utf-8");

    console.log("rd1 ok", datos, datos.length);

    let valorGuardar = new Date().toLocaleString();

    await writeFile("../datos.txt", valorGuardar, "utf-8", { flag: "a+" });
    console.log("WR OK");

    datos = await readFile("../datos.txt", "utf-8");
    console.log("rd2 ok", datos, datos.length);

    console.log("fin lectura");
  } catch (error) {
    console.log("ERROR", error);
  }
}

leerYEscribir();
