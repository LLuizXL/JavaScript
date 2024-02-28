var matrizTop = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matrizTop);
console.log("Matriz [0,0]: ", matrizTop[0][0]);
console.log("Matriz [1,1]: ", matrizTop[1][1]);
console.log("Matriz [2,2]: ", matrizTop[2][2]);

console.log(
  "Sequência da 1 diagonal principal: " +
    matrizTop[0][0] +
    " " +
    matrizTop[1][1] +
    " " +
    matrizTop[2][2]
);
console.log(
  "Sequência da 2 diagonal principal: " +
    matrizTop[0][2] +
    " " +
    matrizTop[1][1] +
    " " +
    matrizTop[2][0]
);
console.log(
  "Sequência da 3 diagonal principal: " +
    matrizTop[2][2] +
    " " +
    matrizTop[1][1] +
    " " +
    matrizTop[0][0]
);

console.log(
  "Sequência da 4 diagonal principal: " +
    matrizTop[2][0] +
    " " +
    matrizTop[1][1] +
    " " +
    matrizTop[0][2]
);
console.log(" ");
console.log("------------------ATV----------------------------");
console.log(" ");

var usuarios = [
  ["Débi", "37", "Roxo", "Mexerica", "Ohio, EUA", "Quandavious Dingleton"],
  [
    "Lóide",
    "36",
    "Preto (é Daltônico)",
    "Jabuticaba",
    "Nova Iorque, EUA",
    "Quintavinius Dinglessius",
  ],
];

console.log(" ");

console.table(usuarios);

console.log("Oi, " + usuarios[0][0] + "! Seja bem-vindo ao nosso sistema.");

console.log(
  "Você mora em " +
    usuarios[0][4] +
    ", E tem um pet chamado " +
    usuarios[0][5] +
    "."
);

console.log(
  "Sua idade é " +
    usuarios[0][1] +
    " e gosta muito da fruta " +
    usuarios[0][3] +
    "."
);
console.log(" ");
console.log("--------------------------------------");

console.log("Oi, " + usuarios[1][0] + "! Seja bem-vindo ao nosso sistema.");

console.log(
  "Você mora em " +
    usuarios[1][4] +
    ", E tem um pet chamado " +
    usuarios[1][5] +
    "."
);

console.log(
  "Sua idade é " +
    usuarios[1][1] +
    " e gosta muito da fruta " +
    usuarios[1][3] +
    "."
);

function saudacao(nome) {
  console.log(`Olá, ${nome}, seja bem vindo!`);
}

saudacao("Luiz");
saudacao("Rosy");
saudacao("Arkkai");

//criando uma funcao de soma de dois valores retornando um resultado

function somar(valor1, valor2) {
  return valor1 + valor2; //return: retorna o desfecho/argumento da função, gerando um resultado
}

console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`12 + 8 = ${somar(5, 3)}`);
console.log(`6,7 + 5,2 = ${somar(6.7, 5.2)}`);
//Criando uma funcao que calcula e retorna o desconto em uma venda

function desconto(valorVenda, desc) {
  return (valorVenda * desc) / 100;
}

var totalPedido = 300;
var totalDesconto = desconto(totalPedido, 5);

console.log(`-----------------------------------------`);
console.log(`Total do pedido: R$${totalPedido}`);
console.log(`Total dos descontos: R$${totalDesconto}`);
console.log(`Valor final da venda: R$${totalPedido - totalDesconto}`);
console.log(`-----------------------------------------`);

function apresentaPessoa(nome, idade, cidade) {
  console.log(
    `Apresento a vocês: ${nome}, que tem ${idade} anos e mora em ${cidade} !`
  );
}
apresentaPessoa("Luiz", 17, "Botucatu");
