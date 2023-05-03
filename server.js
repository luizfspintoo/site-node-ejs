const express = require('express'); //Cria servidor
const app = express();


app.set("view engine", "ejs") //Ferramenta para redenriza HTML é com EJS(dentro de views)

//Cria uma rota
app.get("/", function(req, res){
  res.render("index");
})

//Rota sobre
app.get("/sobre", function(req, res){
  res.render("about");
})

//Roda o servidor
app.listen(8080);
console.log("Rodando...")