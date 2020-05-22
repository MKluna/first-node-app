/* 
4. Create a method to get the amount of files starting with one letter
4. Cree un método para obtener la cantidad de archivos que comienzan con una letra
*/

const fs = require('fs');
let a = 'a';
let file=[];

const exerciseFour = function(){
    fs.readdir('./', (err, files) => {
        if(err) return console.error(err);
        file = files.filter(file => file.startsWith(a))
        console.log('Cantidad de archivos que comienzan con la letra',a,': ',file.length);
    });
}
exerciseFour();

