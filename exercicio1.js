let numeroInicial = parseInt(prompt("Digite o primeiro numero do intervalo"));
let numeroFinal = parseInt(prompt("Digite o ultimo numero do intervalo"));

if (isNaN(numeroInicial && numeroFinal)) {
  alert("Voce não digitou numeros, digite novamente");
} else {
  if (numeroInicial == numeroFinal) {
    alert("Os numeros são iguais, digite novamente");
  } else {
    if (numeroFinal < numeroInicial) {
      [numeroInicial, numeroFinal] = [numeroFinal, numeroInicial];
      console.log("Você digitou o numero Final menor que o Inicial, porém foi corrigido!")
    }
    console.log("Os numeros pares são:");
    for (let contador = numeroInicial; contador <= numeroFinal; contador++) {
      if (contador % 2 == 0) {
        console.log(contador);
      }
    }
  }
}
