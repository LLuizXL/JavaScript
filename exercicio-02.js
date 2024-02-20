var nome = "Jim Carrey";
var dataNascimento = 2001;
var idade = 2024 - dataNascimento;

console.log(nome, "Nasceu em", dataNascimento);

console.log(nome, "possui", idade, " anos!");

console.log(" ");
console.log("--------------");

var comprimento = 12;
var largura = 6;
var area = comprimento * largura;
console.log(
  "Um retângulo com comprimento de",
  comprimento,
  "cm, e com largura de",
  largura,
  "cm, sua área é de",
  area,
  "cm²."
);

var altura = 5;
var volume = largura * comprimento * altura;

console.log(
  "Adicionado uma dimensão: Uma altura de",
  altura,
  "cm. Agora a figura possui um volume de",
  volume,
  "cm²."
);

console.log(" ");
console.log("---------------------------------------------------");

var a = 2;
var b = 3;
var c = -1;

console.log("Equação ", a, "x² +", b, "x", -1);

console.log("Função de delta b² - 4.a.c --> 3² - 4 x 2 x -1");
console.log("Resolução: Delta é igual a ", b ** 2 - 4 * a * c);

console.log(" ");
console.log("-----------------------------------------");

var valor = 450;
var desconto = 0.03;
var valorTotal = valor - valor * desconto;
console.log(
  "Cupom de 3% de desconto aplicado na compra de R$ 450. Você ganhou R$",
  valor * desconto,
  "de desconto. Valor final: R$ ",
  valorTotal
);
console.log(" ");
console.log(
  "--------------------------------------------------------------------------------------"
);

var tempo = 3.5;
var velMedia = 95;
var distancia = tempo * velMedia;
console.log(
  "Foruma da velocidade média é: Distancia/Tempo. Neste caso, teremos que separar A distância. a Nova formula ficará: Distância = velocidade x tempo"
);
console.log("Formula: D = 3.5 x 95");
console.log("Resolução:", distancia, "Kilômetros.");
