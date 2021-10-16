const fs = require("fs");

const Contenedor = require("./Content");

const express = require("express");
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en Puerto: ${PORT}`);
});

const pd = new Contenedor("productos.txt");

app.get("/", (req, res) => {
  res.send("Server Express");
});

app.get("/Productos", async (req, res) => {
  const ps = await pd.getAll();
  const p = await JSON.parse(ps, null, 2);
  console.log(p);
  res.send(p);
});

app.get("/ProductosRandom", (req, res) => {
  async function mostrarRandom() {
    let maximo = 4,
      minimo = 1;
    function getAleatorio(maximo, minimo) {
      let num = Math.floor(Math.random() * (maximo - minimo));
      return num + minimo;
    }
    const p = await pd.getById(getAleatorio(maximo, minimo));
    res.send(p);
  }
  mostrarRandom();
});
