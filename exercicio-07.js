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

console.log(
  "------------------------------------------------------------------------------------------------"
);
console.log(" ");

console.log("--------------Jogo da Velha aleatório--------------");

// const tabuleiro = [
//   [" ", " ", " "],
//   [" ", " ", " "],
//   [" ", " ", " "],
// ];
// let jogadorAtual = "X";

// function jogar(jogador) {
//   let linha, coluna;
//   do {
//     linha = Math.floor(Math.random() * 3);
//     coluna = Math.floor(Math.random() * 3);
//   } while (tabuleiro[linha][coluna] !== " ");

//   tabuleiro[linha][coluna] = jogador;
//   jogadorAtual = jogadorAtual === "X" ? "O" : "X";
// }

// function verificaVencedor() {
//   for (let i = 0; i < 3; i++) {
//     if (
//       tabuleiro[0][i] === tabuleiro[1][i] &&
//       tabuleiro[1][i] === tabuleiro[2][i] &&
//       tabuleiro[1][i] !== " "
//     ) {
//       console.log(`O jogador ${tabuleiro[1][i]} ganhou.`);
//       return tabuleiro[1][i];
//     } else if (
//       tabuleiro[i][0] === tabuleiro[i][1] &&
//       tabuleiro[i][1] === tabuleiro[i][2] &&
//       tabuleiro[i][1] !== " "
//     ) {
//       console.log(`O jogador ${tabuleiro[i][1]} ganhou.`);
//       return tabuleiro[i][1];
//     }
//   }

//   //Tirei as diagonais do laço for, se não ela seria verificada 3 vezes(sem necessidade)
//   if (
//     tabuleiro[0][0] === tabuleiro[1][1] &&
//     tabuleiro[1][1] === tabuleiro[2][2] &&
//     tabuleiro[1][1] !== " "
//   ) {
//     console.log(`O jogador ${tabuleiro[1][1]} ganhou.`);
//     return tabuleiro[1][1];
//   } else if (
//     tabuleiro[0][2] === tabuleiro[1][1] &&
//     tabuleiro[1][1] === tabuleiro[2][0] &&
//     tabuleiro[1][1] !== " "
//   ) {
//     console.log(`O jogador ${tabuleiro[1][1]} ganhou.`);
//     return tabuleiro[1][1];
//   }
//   if (!tabuleiro.some((event) => event.includes(""))) {
//     console.log("O jogo empatou.");
//     return "Empate";
//   }
//   return "";
// }

// let vencedor = "";

// while (!vencedor) {
//   jogar(jogadorAtual);
//   console.table(tabuleiro);
//   vencedor = verificaVencedor();

//   if (!vencedor) {
//     jogar(jogadorAtual);
//     console.table(tabuleiro);
//     vencedor = verificaVencedor();
//   }
// }

// Estrutura do Tabuleiro
const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;

  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    if (
      //Verifica coluna
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i] &&
      tabuleiro[1][i] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[1][i]} ganhou`);
      return tabuleiro[1][i];
    } else if (
      //Verifica linha
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2] &&
      tabuleiro[i][1] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[i][1]} ganhou`);
      return tabuleiro[i][1];
    }
  }
  if (
    // Vefifica diagonal
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[1][1] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[1][1]} ganhou`);
    return tabuleiro[1][1];
  } else if (
    // Vefifica diagonal
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[1][1] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[1][1]} ganhou`);
    return tabuleiro[1][1];
  }

  if (!tabuleiro.some((event) => event.includes(" "))) {
    console.log("O jogo empatou");
    return "Empate";
  }
  return "";
}

let vencedor = "";

while (!vencedor) {
  jogar(jogadorAtual);
  console.table(tabuleiro);
  vencedor = verificaVencedor();

  if (!vencedor) {
    jogar(jogadorAtual);
    console.table(tabuleiro);
    vencedor = verificaVencedor();
  }
}
