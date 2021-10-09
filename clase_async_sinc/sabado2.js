function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject(" not / 0");
    } else {
      resolve(dividendo / divisor);
    }
  });
}
dividir(8, 0)
  .then((result) => {
    console.log(`resultado: ${result}`);
  })
  .catch((error) => {
    console.log(`Error:${error}`);
  });

setTimeout(() => {
  console.log(`msj 1`);
}, 2000);
console.log(`msj 2`);

const intervalo = setInterval(() => {
  console.log("msj");
}, 400);

console.log(intervalo);
