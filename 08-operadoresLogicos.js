// Operadores Lógicos
var manha = true;
var sono = true;

console.log("--------------------------------");
console.log("Manhã: ", manha, "| Estou com sono? ", sono);

console.log("Está de manhã e estou com sono?: ", manha && sono); //Operador AND (E
console.log(" Está de manhã ou estou com sono?", manha || sono); //Operador OR (OU):

sono = false;
console.log(" ");
console.log("-------------------------------------------");
console.log("Operador AND (E): ", manha && sono);
console.log("Operador OR (OU): ", manha || sono);
