'use strict';
// arrancar epxress    $  node  02-request.js
//  :id ---parametro
// en la url del navegador
// http://localhost:1111/usuario/23-juan-65

const express = require('express'),
          app = express();

          app
               .get('/',(req,res)=>{
                     res.end('<h1>JAreina</h1>')

               })
               .get('/usuario/:id-:name-:age', (req,res)=>{
                      res.end(`
                          <h1>
                   ${req.params.name}, ESTÁS EN EXPRESS
                   TU ID : ${req.params.id}
                   TU EDAD: ${req.params.age}

                          </h1>


                      	`)
               })
               //http://localhost:1111/search?q=buscar%20node
               .get('/search',(req,res)=>{
                         res.end(`
              <div>
                   <p>
              RESULTADOS DE LA BUSQUEDA
              <mark>${req.query.q}</mark>
                   </p>



              </div>


                         	`)
               })
               .listen( 1111, ()=> console.log("INICIADO EXPRESS: PORT 1111"));