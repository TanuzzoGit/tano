const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(8080);
app.get('/', (req,res)=>{
    
    res.sendFile('homepage.html', {root: __dirname + '/public'})
   
});
//mi secco a rifare il procedimento per le altre pagine tanto ho capito 
//lo rifarò soltanto se servirà 
app.get('/tano', (req,res)=>{
        res.send("<h1> un malo sticchione <br> @no__niente<br> <a href='/'> Home </a> </h1>")
        res.end()

})


app.all('*',(req,res)=> { 
        res.send("<h1>Risorsa non trovata  <a href='/'> Home </a> </h1>")
        res.end();
    });
