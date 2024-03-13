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

// // 1.Comparação de strings (sem case sensitive):
// Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais, ignorando o tamanho das letras (maiúsculas e minúsculas).

var originalGame = "Battlefield 2042";
var game = "battlefield 2042";

function NameSearcher(name1, name2) {
  if (name1.toLowerCase() !== name2.toLowerCase()) {
    console.log("Os nomes estão Diferentes.");
  } else {
    console.log("Os nomes estão iguais.");
  }
}

NameSearcher(originalGame, game);
console.log(
  "-----------------------------------------------------------------"
);

// 2.Extrair números de uma string:
// Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.

var textinho =
  "and LeBron did! right for the 3 point shot, he just passed the world record for most record points, 30k!! The legend of the 21st century!";

const regexNumeros = /\d+/g;
const numerosEncontrados = encontrarNumeros(textinho);

function encontrarNumeros(texto) {
  const numeros = texto.match(regexNumeros);
  return numeros;
}
console.log(numerosEncontrados);
console.log("==============================");

// 3.Inverter a ordem das palavras em uma frase:
// Desenvolva uma função em JavaScript que recebe uma frase e retorna uma nova string com a ordem das palavras invertidas
const textito = "Olha, estou Invertido! Como faz pra voltar?";
const youGotReversed = reverseMachine(textito);

function reverseMachine(textinho) {
  const palavras = textinho.split(" ");
  return palavras.reverse().join(" ");
}
console.log(youGotReversed);
