'use strict';
// arrancar epxress    $  node  express.js
const express = require('express'),
          app = express();

          app
               .get('/',(req,res)=>{
                     res.sendFile(`${__dirname}/index.html`)

               })
               .listen( 1111, ()=> console.log("INICIADO EXPRESS: PORT 1111"));