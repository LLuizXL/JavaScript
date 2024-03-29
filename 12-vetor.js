// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros);
// console.log(numeros[2]);

// numeros[2] = 6;
// console.log(numeros);
// console.log(numeros[2]);

//Criando variáveis do tipo array(vetores)

var dinos = ["Tiranossauro Rex", "Estercossauro", "Anquilossauro"];
console.log(dinos); // retorna todos os itens do array
console.log(dinos[0]); // retorna o primeiro item do array

console.log(" ");

console.table(dinos); //cria tabela com os itens do array
console.log(dinos.length);
console.log("O vetor tem", dinos.length, "elementos!");

// adicionando elementos ao vetor existente

dinos.push("Brontossauro"); //array.push adiciona um item no final ddo vetor
console.table(dinos);

dinos.unshift("Crisserátops"); //adiciona itens no inicio do array

dinos[3] = "Titanossauro";
console.table(dinos); //alterando elementos com base no índice(posição)

//Obtendo um elemento com base em seu índice
console.log("Primeira posição:", dinos[0]);
console.log("Segunda posição:", dinos[1]);
console.log("Item da posição 20:", dinos[20]);

//Removendo elementos do vetor
dinos.pop(); //remove o último elemento
console.table(dinos);

dinos.shift(); //remove o primeiro elemento
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do índice 1, contando 1.
console.table(dinos);

console.log(" ");
console.log("-------------------Continuação Aula-----------------------");
var dinos = [
  "Crisserátops",
  "Tiranossauro",
  "Estercossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "PeterRodáctilo",
  "LoisSauro",
];

console.table(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está na posição " + posicao);

var elementoProcurado = "PeterRodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está na posição " + posicao);


var elementoProcurado = "LoisSauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está na posição " + posicao);
// O indexOf retorna o valor da posição do elemento citado na variável.
console.log(" ")

var copia1 = dinos.slice()
console.log("Vetor cópia 1")
console.table(copia1);