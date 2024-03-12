class Pessoa {
  constructor(pNome, pIdade) {
    this.nome = pNome;
    this.idade = pIdade;
  }
  apresentarSe() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }

  envelhecer() {
    this.idade++;
  }
  //this (isto, em ingles)
}

//Criando objetos do "tipo" Pessoa

var pessoa1 = new Pessoa("Talda Dienifer", 52); //Objeto pessoa = Talda Dienifer
var p2 = new Pessoa("Taldo Pedrin", 18);

p2.apresentarSe();
pessoa1.apresentarSe();

pessoa1.envelhecer();
pessoa1.apresentarSe();

p2.envelhecer();
p2.apresentarSe();

//Abstração
console.log("------------------ABSTRAÇÃO----------------------------")
class Pet {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  alimentar() {
    console.log(`${this.nome} foi alimentado!`);
  }


}
const meuPet = new Pet("Rex", 2, "Cachorro")
console.log(`Meu pet é um ${meuPet.tipo}`)
meuPet.alimentar()

