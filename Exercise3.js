/* First Node App
3. Create a method to inverse sort and print the files of a given path
3. Cree un método para ordenar e imprimir en reversa los archivos de una ruta determinada
*/
const fs = require("fs");
const activityThree = function(){
    fs.readdir("./", (err, files) => {
        if (err) return console.error(err);
        files.reverse().map((f)=>console.log(f))
      });
}
activityThree();