var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

frutas.push("Tangerina");

console.log("Adicionado Tangerina");
console.table(frutas);

frutas.unshift("Goiaba");

console.log("Adicionado Goiaba");
console.table(frutas);

console.log(frutas[5]);

frutas.splice(4, 1);
console.table(frutas);

var position = frutas.indexOf("Uva");
console.log(position);
frutas.splice(position, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);

console.log(" ");
console.log("----------------------------Atividade 2----------------------");

console.log(" ");

var vetor1 = [1, 2, 3, 4, 5];
console.table(vetor1);

// console.log("Elemento 3:", vetor1[2]);

var copia1 = vetor1.slice();

// console.table(copia1);
// var copia1 = copia1.map(x => x * 2);

copia1[0] = 2;
copia1[1] = 4;
copia1[2] = 6;
copia1[3] = 8;
copia1[4] = 10;

console.table(copia1);
