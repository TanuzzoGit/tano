const http = require('http');

const server = http.createServer((req,res)=>{

   /*  if(req.url==='/'){
res.write("bonjour..");
res.end
}*/
switch (req.url) {
    case '/':
        res.write("voglio prendermi un sesso limone e sale")
        res.end();
        break;
    case '/profilo':
        res.write("mammt");
        res.end();
        break;
    case '/flavio':
        res.write('ciao flaviuccio')
        res.end();
        break;
        
    default:
     //   res.end("<p> ciao fra<a href="/"> Home </a> </p>") <<<< Questo non va, non so perché.
        res.end("ciao");
        break;
        
}


//setta la risposta ^^

//console.log(req);
})
//            porta 
server.listen(8080);
