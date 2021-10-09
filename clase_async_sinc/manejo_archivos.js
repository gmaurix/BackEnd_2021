try {
  const fs = require("fs");

  const pd = JSON.parse(fs.readFileSync("productos.json"));
  console.table(pd);
} catch (error) {
  console.log("algo anda mal");
}
