const express = require("express");
const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log("servidor online");
});

app.get("/get-user/:name", (req, res) => {
  console.log("Rota de API criada pelo(a): " + req.params.name);
  res.send("oi");
});

app.post("/enviarObjeto", (req, res) => {
  var objeto = req.body;
  console.log(objeto);
  console.log("rodou");
  res.json(objeto);
});
