//Laço de repetição FOR
//escrever para o usuário 1000x "Prestar mais atenção na aula"

for (let i = 0; i <= 1000; i++) {
  console.log(i);
}

console.log("------------------------");
//numeros impares apenas:

for (let i = 0; i <= 1000; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log("---------------------");
//NUMEROS DE 1 A 20 COM FOR
for (let n = 0; n <= 20; n++) {
  console.log(n);
}

//escrever todos os números PARES entre 1 e 20 com FOR
console.log(
  "-------------------------------------------------------------------------------------"
);

for (let n = 2; n <= 20; n += 2) {
  console.log(n);
}
console.log(
  "-----------------------------------------------------------------------------------"
);
console.log("Solucao 2");

for (let n = 1; n <= 20; n++) {
  if (n % 2 == 0) console.log(n);
}
console.log(
  "------------------------------------------------------------------------------"
);
//Dado um vetor com numeros 5,6,8,14,0,9,7,2
//calcule e exiba a somtória de seus elementos.
const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var total = 0;
for (let i = 0; i < numeros.length; i++) {
  total += numeros[i];
}
console.log(`A soma dos números é igual a ${total}`);

//Dado um vetor com numeros 5,6,7,14,0,9,7,2.
//Multiplique todos os seus elementos por 3 utilizando o loop FOR
//Em seguida, mostre o novo vetor.

var numba = [5, 6, 7, 14, 0, 9, 7, 2];

var multi = 3;
var finalValor = 0;

for (let n = 0; n < numba.length; n++) {
  numba[n] *= multi;
}
console.log("Multiplicação por 3:");

console.table(numba);

//Dada a matriz 2x3, escrever para o usuário todos os seus elementos
// com as respectivas posições da matriz
// [8,4,1]
// [3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz[${linha}, ${coluna}] = ${matriz[linha][coluna]}`);
  }
}

