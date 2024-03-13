//Criando objeto com data específica
var data1 = new Date();
console.log(data1);

//Criando um objeto do tipo "data" com data específica

var data2 = new Date("2005-05-12");
console.log(data2);

var data3 = new Date("2007=06-06");
console.log(`Data : ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);

const diferencaAnos = data1.getFullYear() - data3.getFullYear();

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log(`Retornando o mês por escrita`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
console.log(`Retornando o dia da semana por escrita!`);
console.log(`Dia: ${diaSemana[data3.getDay()]}`);

console.log(`Eu tenho ${data1.getFullYear() - data3.getFullYear()} anos.`);

console.log(`Diferença em anos: ${diferencaAnos}`);

if (
  data1.getMonth() < data3.getMonth() ||
  (data1.getMonth() === data3.getMonth() && data1.getDate() < data3.getDate)
) {
  console.log(`Ainda não fez aniversário!`);
  console.log(`Idade: ${diferencaAnos - 1}`);
}
