// População A: x habitantes, Taxa anual de crescimento = 3%
// População B: x habitantes, Taxa anual de crescimento = 1,5%

// Quantos anos até a população do país A iguale a população do país B.

var populacaoA = Math.random() * 300000; //PODERIA USAR O Math.round(variavelpara multiplicar) para arredondar o valor gerado aleatoriamente.
var populacaoB = Math.random() * 1000000;
var anos = 0;
const taxaA = 0.03;
const taxaB = 0.015;

console.log(
  `População A é de ${populacaoA.toFixed(
    0
  )} Habitantes.  |||  População B é de ${populacaoB.toFixed(0)} Habitantes.`
);

while (populacaoB > populacaoA) {
  populacaoA = populacaoA += populacaoA * taxaA;
  populacaoB = populacaoB += populacaoB * taxaB;
  anos++;
  if (populacaoB <= populacaoA) {
    console.log(`A população B ultrapassou a população A em ${anos} anos.`);
  }
}
console.log(
  "-----------------------Método Correto:----------------------------"
);

while (populacaoA < populacaoB) {
  anos++;
  populacaoA *= 1.03;
  populacaoB *= 1.015;
}

console.log(
  `A população A (${Math.round(
    populacaoA
  )}) irá passar a População B (${Math.round(populacaoB)}) em ${anos} Anos!`
);
console.log("------------------------------------------------------------------------------------------------")
console.log(" ")

console.log("--------------Jogo da Velha aleatório--------------");

var jogoVelha = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

console.log(`_____|____|_____`);
console.log(`_____|____|_____`);
console.log(`     |    |     `);

var Player1 = "X";
var Player2 = "O";
var tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

  let linha = Math.floor(Math.random() * 3);
  let coluna = Math.floor(Math.random() * 3);

  if (tabuleiro[linha][coluna] == "") tabuleiro[linha][coluna] = jogador;
  else{Jogada(jogador)
    
}


function verificarVitóriaX(){

//Diagonal:
if (tabuleiro[0][0] === Player1 && tabuleiro[1][1] === Player1 && tabuleiro[2][2] === Player1 || tabuleiro[2][0] === Player1 && tabuleiro[1][1] === Player1 && tabuleiro[0][2] === Player1)
   console.log ("Jogador X venceu a rodada.")
   //Linhas:

   else if (tabuleiro[0][0]=== Player1 && tabuleiro[0][1]=== Player1 && tabuleiro[0][2]=== Player1 || tabuleiro[1][0] === Player1 && tabuleiro[1][1] === Player1 && tabuleiro[1][2] === Player1 || tabuleiro[2][0] === Player1 && tabuleiro[2][1] === Player1 && tabuleiro[2][2] === Player1) 
   console.log("Jogador X Venceu a partida")
//Colunas:
else if (tabuleiro[0][0] === Player1 && tabuleiro[0][1] === Player1 && tabuleiro[0][2] === Player1 && || tabuleiro[0][1] === Player1 && tabuleiro[1][1] === Player1 && tabuleiro[2][1] === Player1 || tabuleiro[0][2] === Player1 && tabuleiro[1][2] === Player1 && tabuleiro[2][2] === Player1)

console.log("Jogador X Ganhou.")
}

Jogada(Player1);
Jogada(Player2);
console.table(tabuleiro);



function verificarColuna(jogador, tabuleiro) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[0][j] === jogador && tabuleiro[1][j] === jogador && tabuleiro[2][j] === jogador) {
        return true;
      }
    }
