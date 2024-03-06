function idade(anoNascimento) {
  return anoAtual - anoNascimento;
}

var nascimento = 2007;
var anoAtual = 2024;

console.log(
  `Você nasceu em ${nascimento}, logo, você tem ${idade(nascimento)} anos!`
);

console.log(` `);

console.log(`----------------------------------------------------------------`);

function distViagem(quantCombustivel) {
  return quantCombustivel * 12;
}

var combustivel = 30;

console.log(
  `Você possui ${combustivel} Litros de combustível. Você poderá percorrer por ${distViagem(
    combustivel
  )} Kilômetros.`
);
console.log(" ");
console.log("-------------------------------------------------------");

var idadeVoto = 12;

console.log(idadeVoto);

function votar(idade) {
  switch (true) {
    case idadeVoto < 16:
      console.log(
        `Você nao está apto a votar!! É necessário esperar mais ${
          16 - idadeVoto
        } anos.`
      );

      break;
    case idadeVoto >= 16:
      console.log("Você já pode exercer seu voto!");
      break;
    case idadeVoto > 85:
      console.log(
        "Você tem a opção de exercer o seu voto, lembre-se que ele não é mais obrigatorio. Sinta-se livre para fazer sua escolha!"
      );
      break;
  }
}

votar();
console.log(
  `------------------------------------------------------------------------`
);

var idadeMinha = 16;

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log(`Você não pode votar!`);

      break;

    case idade >= 16 && idade < 18:
      console.log(`Você pode votar voluntariamente.`);
      break;
    default:
      console.log(`Você pode Votar`);
      break;
  }
}
votacao(idadeMinha);


console.log(`----------------------------------------------------`)