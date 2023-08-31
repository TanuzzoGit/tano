const express = require('express');
const app = express();
app.use(express.static('public'));
const {persone} = require('./persone');
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
app.get('/provaJson', (req, res)=>{
       
        const nuovapersona = persone.map((persona)=>{
            const {nome,eta,tabaccoPreferito} = persona;
            return {nome, eta, tabaccoPreferito};
    })
    
    res.json(nuovapersona);

})
app.get('/profilo/:id',(req,res)=>{
    const {id} = req.params
    const persona = persone.find((personu) => 
    personu.id===id
     )
    if (!persona){
        return res.status(404).send("persona non esistente");
    }
     console.log(persona)
    res.json(persona);
    
})
app.get('/persone/search', (req,res) =>{
    console.log(req.query);
    const {query, limit} = req.query;
    let Filtrate = [...persone];
    if (query){
        Filtrate = Filtrate.filter((persone) => {
            return persone.nome.startsWith(query.toLowerCase());
        })

    }
    if(limit){
        Filtrate=Filtrate.slice(0,Number(limit));
    }
    if(Filtrate.length===0) return res.status(404).send("Persona non trovata");
    else res.status(200).json(Filtrate);
    
})


app.all('*',(req,res)=> { 
        res.send("<h1>Risorsa non trovata  <a href='/'> Home </a> </h1>")
        res.end();
    });
