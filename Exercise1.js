/* 
First Node App
1. Create a method to get all the files inside a given path
1. Cree un método para obtener todos los archivos dentro de una ruta determinada
*/

const fs = require("fs");
const activityOne = function () {
  fs.readdir("./prueba", (err, files) => {
    err ? console.log(err) : console.log(files);
  });
};
activityOne();
