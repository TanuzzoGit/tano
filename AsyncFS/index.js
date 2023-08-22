
/* parte Sync

const {readFileSync, writeFileSync} = require('fs');
const prova = readFileSync("./prova.txt", "utf-8");
console.log(prova);
writeFileSync("./prova.txt", " ciao flavio");
writeFileSync("./prova.txt", " \n pi saluti e cuntintizza ", {flag: 'a'});
writeFileSync("./prova.txt", " \n megghiu u pacchiu ra sasizza", {flag: 'a'});
*/

//parte Async 
const {readFile, writeFile} = require('fs');
readFile('./prova.txt', 'utf-8', (error, result) => {
    if (error){ 
        console.log("fanculo");
        return
}
    console.log(result);
})
//voglio fare una prova con il try-catch perché sinceramente if error mi sembra babbo 
try {
    readFile('./prova.txt', 'utf-8',(err, data) =>{
        console.log(data);
    })
    
} catch (err) { 

    console.log("fanculo")

}
//non so se è scritto giusto però lo sprito è quello
//possibilmente visto che comunque l'errore è ritornato dal callback in realtà questo è un giro stupido
//anche perché err risulta inutilizzata, poi mi dici 
//piccola pausa dal video perché voglio capire se posso utilizzare le funzioni async per farlo meglio perché 
//mi sembra un modo rozzo 


const getFile = async () =>{
    readFile("./prova", 'utf-8').then((result) => {
        console.log("\n _________ \n"+result)
    }).catch((err) => {
        console.log(err)
    });
}


getFile();