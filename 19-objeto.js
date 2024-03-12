// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }

//   envelhecer() {
//     this.idade++;
//   }
//   //this (isto, em ingles)
// }

// //Criando objetos do "tipo" Pessoa

// var pessoa1 = new Pessoa("Talda Dienifer", 52); //Objeto pessoa = Talda Dienifer
// var p2 = new Pessoa("Taldo Pedrin", 18);

// p2.apresentarSe();
// pessoa1.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();

// //Abstração
// console.log("------------------ABSTRAÇÃO----------------------------");
// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é um ${meuPet.tipo} e tem ${meuPet.idade} anos! ele é um ${meuPet.tipo}!!`
// );
// meuPet.alimentar();

// console.log("---------------------HERANÇA-------------------------");

// class Animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }

//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado!`);
//   }

//   emitirSom() {
//     console.log(`Som padrão de animal!`);
//   }
// }

// class Cachorro extends Animal {
//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado`);
//   }
//   emitirSom() {
//     console.log(`Au Au Yessir!`);
//   }
// }
// const meuCachorro = new Cachorro("Covarde", 5, "Ração espacial");
// const pet = new Animal("Corágem", 4, "Ração");

// pet.alimentar();
// pet.emitirSom();
// console.log(" ");
// meuCachorro.alimentar();
// meuCachorro.emitirSom();

// console.log(`----------------Encapsulamento--------------------`);

// class Petzinho {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   getNome() {
//     return this.nome;
//   }

//   setNome(novoNome) {
//     this.nome = novoNome;
//   }
// }

// const novoPetzinho = new Petzinho("Bobzinho", 3, "Cachorro");
// console.log(novoPetzinho.getNome());
// novoPetzinho.setNome("Rex");
// console.log(novoPetzinho.getNome());

// console.log(`-------------------------Polimorfismo---------------------------`);

console.log("--------------------Polimorfismo--------------------");
class Animal {
  constructor(nome) {
    this.nome = nome;
  }


  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}


class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O cachorro late!");
  }
}


class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O gato mia!");
  }
}


// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];


for (const animal of animais) {
  animal.fazerBarulho();
}