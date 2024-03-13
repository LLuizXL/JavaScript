// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino. A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(ra, nome, dataNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.dataNascimento;
  }
  apresentar() {
    console.log(
      `Este é ${this.nome}. Nascido em ${this.dataNascimento},
Sua idade é de ${this.calcularIdade()} anos.
RA ${this.ra} | Curso atual: ${this.curso} `
    );
  }
}
const aluno = new Aluno(
  "3782",
  "Luiz Guilherme",
  2007,
  "Desenvolvimento de Sistemas T.I"
);

aluno.apresentar();

console.log("--------------------------------------------------------");

// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  setPreco(novoPreco) {
    console.log(`-------------------------------------
    Alteração de preço no sorvete de ${this.sabor}!!!
    -------------------------------------------------`);
    return (this.preco = novoPreco);
  }
  cardapioSorvete() {
    console.log(`Sorvete de ${this.sabor}, Tamanho ${this.tamanho}
 R$ ${this.preco}`);
  }
}
const sorvete1 = new Sorvete("Chocolate", 4, "Pequeno");
const sorvete2 = new Sorvete("Morango", 6, "Grande");
const sorvete3 = new Sorvete("Melancia", 5, "Médio");
sorvete1.cardapioSorvete();
console.log("--------------------");
sorvete2.cardapioSorvete();
console.log("---------------------");
sorvete3.cardapioSorvete();
sorvete2.setPreco(10.51);
sorvete2.cardapioSorvete();
