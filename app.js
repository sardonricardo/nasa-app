const router  = require('./routes/router');
const express = require('express');


const app = express();
const port = 3000;

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


//Routes
app.use('/api', router); 




app.listen (port, () => {
    console.log(`Servidor Escuchando por el puerto  http://localhost:${port}`); 
})

