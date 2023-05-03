const express = require('express'); //Cria servidor
const app = express();


app.set("view engine", "ejs") //Ferramenta para redenriza HTML é com EJS(dentro de views)

//Cria uma rota
app.get("/", function(req, res){
  const items = [
    {
      title: "D",
      mensagem: "esenvolvimento de aplicações Web/ Bacana"
    },

    {
      title: "E",
      mensagem: "JS usa JavaScript para redenrizar HTML"
    },

    {
      title: "M",
      mensagem: "uito legal de usar"
    }
  ];

  let subtitle = "EJS é uma linguagem de modelagem para criação de páginas HTML em JavaScript";
  res.render("pages/index", {
    qualidades: items,
    subtitle: subtitle,
  });
})

//Rota sobre
app.get("/sobre", function(req, res){
  res.render("pages/about");
})

//Roda o servidor
app.listen(8080);
console.log("Rodando...")