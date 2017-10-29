'use strict';
// arrancar epxress    $  node  02-request.js
//  :id ---parametro
// en la url del navegador
// http://localhost:1111/usuario/23-juan-65

const express = require('express'),
          app = express();

          app
               .get('/',(req,res)=>{
                     //res.end('<h1>JAreina</h1>')
                     res.send('<h1>JAreina</h1>')
               })
               .get('/jareina',(req,res)=>{
                   //301  ó 302 permanente o no
                   res.redirect(301,"http://jareina.github.io/jareina")
               })
               .get('/json', (req,res)=>{
                         res.json({
                                name: "JAreina",
                                age: 99,
                                alias: "Juan"
                         });
               })
                //contenido de una vista para leer motores de plantilla como pug
                //NO FUNCIONA PORQUE HAY QUE CONFIGUAR EL TIPO DE VIEW QUE DESPLEGARÁ EXPRESS
               .get('/render',(req,res)=>{
                        res.render(`${__dirname}/index.html`);
               })
               .listen( 1111, ()=> console.log("INICIADO EXPRESS: PORT 1111"));