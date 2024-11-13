// Função para enviar resultado ao Discord
function enviarParaDiscord(pericia, resultado, bonus, resultadoFinal) {
  fetch('https://discord.com/api/webhooks/YOUR_WEBHOOK_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: `Resultado do dado para ${pericia}: ${resultadoFinal} (1d20: ${resultado} + Bônus: ${bonus})`
    })
  }).then(response => {
    if (response.ok) {
      alert(`Resultado enviado para o Discord: ${resultadoFinal}`);
    } else {
      alert('Falha ao enviar o resultado para o Discord.');
    }
  }).catch(error => {
    console.error('Erro:', error);
  });
}

// Evento de clique no ícone de dado
document.querySelectorAll('.dadoIcon').forEach(icon => {
  icon.addEventListener('click', function() {
    const resultado = Math.floor(Math.random() * 20) + 1; // Dado de 20 faces
    const pericia = this.dataset.pericia;
    const bonus = parseInt(document.getElementById(`bonus-${pericia}`).textContent) || 0;
    const resultadoFinal = resultado + bonus;
    enviarParaDiscord(pericia, resultado, bonus, resultadoFinal);
  });
});

// Atualizando o bônus ao mudar treino ou outros
document.querySelectorAll('.treino, .outros').forEach(input => {
  input.addEventListener('input', function() {
    const pericia = this.dataset.pericia;
    const treinoValue = parseInt(document.querySelector(`.treino[data-pericia="${pericia}"]`).value) || 0;
    const outrosValue = parseInt(document.querySelector(`.outros[data-pericia="${pericia}"]`).value) || 0;
    const bonus = treinoValue + outrosValue;
    document.getElementById(`bonus-${pericia}`).textContent = bonus;
  });
});
