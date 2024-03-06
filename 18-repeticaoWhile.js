let contador = 0;

while (contador < 5) {
  contador++;
  console.log(contador);
}
console.log(" ");
console.log("---------------------------------------------------------------");
let contRegressiva = 5;

while (contRegressiva > 0) {
  console.log(contRegressiva);
  contRegressiva--;
}
console.log("Lançamento!");
console.log(" ");
console.log(
  "-----------------------------------------------------------------"
);

var x = 20;

while (x > 10) {
  console.log(`Entrei no laço While...`);
  x = 0;
}
console.log(`Terminei!`);

//Estourando o limite do cartão - versão WHILE!!!!!!!!! eba
var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100; //Math.random() cria valor aleatório entre 0 e 1.
  fatura += gasto;
  console.log(`Gastei R$ ${gasto.toFixed(2)} ------
  Fatura: R$ ${fatura.toFixed(2)}`);
  fatura > limite && console.log(`Estourou o limite do cartão`);
  // && faz somente um IF, sem o else.
}
console.log(" ");
console.log(
  `---------------------------------------------------------------------------------`
);
var limite = 500;
var fatura = 0;

do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(`Gastei R$ ${gasto.toFixed(2)} ------
Fatura: R$ ${fatura.toFixed(2)}`);

  fatura > limite && console.log(`Estourou o limite do cartão`);
} while (fatura <= limite);
