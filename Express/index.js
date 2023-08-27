const express = require('express');
const app = express();

app.listen(8080);
app.get('/', (req,res)=>{
    
    res.send("goodbye world! <br> <a href='/tano'> Tano </a>")
    res.end();
});

app.get('/tano', (req,res)=>{
        res.send("<h1> un malo sticchione <br> @no__niente<br> <a href='/'> Home </a> </h1>")
        res.end()

})


app.all('*',(req,res)=> { 
        res.send("<h1>Risorsa non trovata  <a href='/'> Home </a> </h1>")
        res.end();
    });
//funzionamento uguale al moduloHTTP che tempo sprecato 