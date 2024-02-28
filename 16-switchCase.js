//implementação de condicional
var mes = 7;
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log(`Primeiro Trimestre`);

    break;

  case 4:
  case 5:
  case 6:
    console.log(`Segundo Trimestre`);
    break;

  case 7:
  case 8:
  case 9:
    console.log(`Terceiro Trimestre`);
    break;
  case 10:
  case 11:
  case 12:
    console.log(`Quarto Trimestre`);

    break;
  default:
    if (mes > 12) console.log(`Mês não definido`);
}

var menuSelecionado = "Regulamento";
switch (menuSelecionado) {
  case "Home":
    console.log(`Você clicou no link Home!`);
    break;

  case "Quem somos":
    console.log(`Você clicou no link Quem Somos`);
    break;

  case "Contrato":
    console.log(`Você clicou no link Contrato!`);
    break;
  default:
    console.log(`Opção Invalida!`);
    break;
}
