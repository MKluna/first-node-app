/* 
First Node App
2. Create a method to print all the files
2. Cree un método para imprimir todos los archivos
*/
const fs = require("fs");
fs.readdir("./", (err, files) => {
  if (err) return console.error(err);
  files.map((f) => console.log(f));
});
