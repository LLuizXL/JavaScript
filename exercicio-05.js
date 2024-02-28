function idade(anoNascimento) {
  return anoAtual - anoNascimento;
}

var nascimento = 2007;
var anoAtual = 2024;

console.log(
  `Você nasceu em ${nascimento}, logo, você tem ${idade(
    nascimento
  )} anos!`
);

console.log(` `);

console.log(`----------------------------------------------------------------`);

function distViagem(quantCombustivel) {
  return quantCombustivel * 12;
}

var combustivel = 30

console.log(`Você possui ${combustivel} Litros de combustível. Você poderá percorrer por ${distViagem(combustivel) } Kilômetros.`)






