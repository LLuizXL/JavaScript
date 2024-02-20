//Operadores de incremento e decremento
var idade = 16;
console.log(idade);

idade++; //idade = idade + 1
console.log(idade);

idade--; //idade = idade -1
console.log(idade);

console.log("---------------");

var novaIdade = idade++;
console.log("Idade:", idade, "| Nova idade:", novaIdade);

var novaIdade = ++idade;
console.log("Idae: ", idade, "| Nova Idade:", novaIdade);

//incremento e decremento coom valor específico

novaIdade += 10; //novaIdade = novaIdade + 10
console.log(novaIdade);

novaIdade -= 20; //novaIdade = novaIdade - 20
console.log(novaIdade);
