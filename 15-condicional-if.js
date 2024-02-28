// var anoNasc = 2003;

// if (anoNasc > 2003) console.log("A pessoa nasceu depois de 2003");
// // if (anoNasc < 2003) console.log("A pessoa nasceu antes de 2003!");
// // if (anoNasc == 2003) console.log("A pessoa nasceu em 2003!");
// else console.log(`A pessoa nasceu antes de 2003!`);

//função sinaleiro

// function sinaleiro(cor) {
//   if (cor == "vermelho") console.log(`Pare`);
//   else if (cor == "amarelo") console.log(`preste atenção`);
//   else if (cor == "verde") console.log(`Siga`);
//   else
//     console.log(
//       `Você informou cores diferentes de verde, amarelo ou vermelho. Seu Burro!`
//     );
// }
// sinaleiro("dourado");

//condicional composto com if

const login = "admin";
var senha = "123456";

//banco de dados

const loginUser = "admin";
const senhaUser = "admin";

if (login == loginUser || senha == senhaUser) console.log(`Acesso permitido!`);
else console.log(`Acesso Negado! Perigo, perigo!`);

// desvio condicional if com block de comandos
console.log(
  `------------------------------------------------------------------------`
);
var idade = 19;
if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("Incrementei a idade...");
  console.log(`A nova idade agora é ${idade}`);
  console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei!`);

console.log(" ");
console.log(
  "--------------------------------------------------------------------------"
);

// desvio condicional if inline(ternário)
//else = : if = ?
// condicao vem antes do if/

var preco = 500;

var resultado = preco <= 100 ? `Ta barato demais!` : `Ta caro demais!`;

// if (preco <= 100) console.log(`Ta barato`);
// else console.log(`Tá caro DEMAIS!!!!!`);
console.log(resultado);
