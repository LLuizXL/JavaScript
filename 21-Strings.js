var texto1 = "Olá, ";
var texto2 = "eu sou um texto!";
var texto3 = texto1 + texto2;

console.log(texto3);

texto1 += texto2;

console.log(texto1);

console.log(`Tamanho do texto: ${texto1.length} caracteres!`);

console.log("----------------------------------");
//Caracteres de escape
var texto5 = 'Olá, meu nome é "Cristiano"!';
console.log(texto5);
var texto6 = "Quebra de linha \noutra linha";
console.log(texto6);
var texto7 = "Tabulação \toutra tabulação";
console.log(texto7);
console.log(`----------------------------------`);

//Obetendo partes de uma string (Método substring)
var texto8 = "O esperto rato, perplexo ficou frente ao aparato";
var sub = texto8.substring(16, 24); //Posição onde começa e onde termina
console.log(sub);
var sub2 = texto8.substr(10, 4); //
console.log(sub2);
console.log("-----------------------------");

//Substituir partes de uma string (Método Replace)
var texto9 = "O rato roeu a roupa do rei de Roma!";
var novoTexto = texto9.replace("rato", "COELHO");
console.log(texto9);
console.log(novoTexto);

// Maiúsculas e minúsculas ( Métodos toUperrCase e toLowerCase)
var texto10 = "O RATO Roeu a RoUPa do rEI de ROMa!";
console.log(texto10.toLowerCase());
console.log(texto10.toUpperCase());
console.log("--------------------------------");
//Limpando espaços em branco (Método trim)
var texto11 = "     Texto aqui no meio        ";
console.log('******',texto11,'******');
console.log('******',texto11.trim(),'******');
console.log("---------------------------------------------");
//Buscando a posição de uma string (Método indexOf)

var texto12 = "O rato roeu a roupa do rato de roma!";

var posicao = texto12.indexOf("roupa");

var ultimaPosicao = texto12.lastIndexOf("rato");
console.log(`Primeira ocorrência: ${posicao}
Ultima ocorrência: ${ultimaPosicao}`);
console.log("---------------------------------------");

//Dividindo uma string em partes (Método split)

var texto13 = "O rato roeu a roupa do rei de Roma!";
var palavras = texto13.split(" ");

var chaveAcesso = "1234-5678-9012-3456";
var partes = chaveAcesso.split("-");
console.log(partes);
console.log(palavras);
