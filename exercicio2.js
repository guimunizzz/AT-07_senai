let valorUm = parseInt(prompt("Digite um numero entre 1 a 10"));

let valorAleatorio = Math.ceil(Math.random() * 10);

for (let contagem = 2; contagem >= 0; contagem--) {
  if (isNaN(valorUm)) {
    alert("Voce não digitou um numero, tente novamente");
    break;
  } else {
    if (valorUm == valorAleatorio) {
      alert(`Parabens!! Você acertou, o numero era ${valorAleatorio}`);
      break;
    } else if (contagem == 0) {
      alert(`Suas tentativas acabaram, o numero correto era ${valorAleatorio}`);
    } else {
      if (valorAleatorio > valorUm) {
        alert(
          `Você não acertou, o numero digitado é menor que o numero aleatorio! Voce ainda tem ${contagem} tentativas`
        );
        valorUm = parseInt(prompt("Digite um numero entre 1 a 10"));
      } else {
        alert(
          `Você não acertou, o numero digitado é maior que o numero aleatorio! Voce ainda tem ${contagem} tentativas`
        );
        valorUm = parseInt(prompt("Digite um numero entre 1 a 10"));
      }
    }
  }
}
