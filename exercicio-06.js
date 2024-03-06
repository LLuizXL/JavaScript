//Daça um progarama em JavaScript
// que imprima os elementos da sua digonal principal
// |   3    5    8      |
// |   1    9    2      |
// |   7    1    4      |

var elementos = [
  [3, 5, 4],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(elementos);


for (let linha = 0; linha < elementos.length; linha++) {
    for (let coluna = 0; coluna < elementos.length; coluna++) {
        if(linha == coluna) console.log(`Matriz Diagonal ${linha}, ${coluna} é igual a ${elementos[linha][coluna]}`)
    
}
}