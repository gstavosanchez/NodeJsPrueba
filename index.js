/*const math = require('./math.js');

console.log(math.add(1,2));
console.log(math.substract(10,5)); */
//const fs = require('fs');
//Escribir archivos en Nodejs
/*fs.writeFile('./texto.txt','Linea 1', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});
//const resut = fs.writeFile('','');
console.log('Ultima linea de codigo'); */

/*fs.readFile('./texto.txt',function(err,data){

    if(err){
        console.log(err);
    }
    console.log(data.toString());

});Lectura de archivos*/

/*const http = require('http');
const colors = require('colors');

const handleServer =  http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola mundo desde node js</h1>');
    res.end();
});
const server = http.createServer(handleServer);
server.listen(3000,function(){
    console.log('Server on port 3000'.yellow);
}) */

const express = require('express');
const colors = require('colors');
const server = express();

server.get('/',function(req,res){
    res.send('<h1>Hola mundo</h1>');
    res.end();
});
server.listen(3000,function(){
    console.log('Server port 3000'.red);
});
