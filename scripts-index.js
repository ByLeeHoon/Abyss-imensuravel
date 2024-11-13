document.querySelectorAll('.dadoIcon').forEach(icon => {
  icon.addEventListener('click', function() {
    const resultado = Math.floor(Math.random() * 20) + 1; // Dado de 20 faces
    const pericia = this.dataset.pericia;
    
    fetch('https://discord.com/api/webhooks/1285426560404291687/Pkb3fAR0LOosvxzVyn4PR6oIX20ptqxLYEvqneWjQe_WWR0-4lo-H916jaRAXEVKD-5l', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: `Resultado do dado para ${pericia}: ${resultado}`
      })
    }).then(response => {
      if (response.ok) {
        alert(`Resultado enviado para o Discord: ${resultado}`);
      } else {
        alert('Falha ao enviar o resultado para o Discord.');
      }
    }).catch(error => {
      console.error('Erro:', error);
    });
  });
});

document.querySelectorAll('.treino, .outros').forEach(input => {
  input.addEventListener('input', function() {
    const pericia = this.dataset.pericia;
    const treinoValue = parseInt(document.querySelector(`.treino[data-pericia="${pericia}"]`).value) || 0;
    const outrosValue = parseInt(document.querySelector(`.outros[data-pericia="${pericia}"]`).value) || 0;
    const bonus = treinoValue + outrosValue;
    document.getElementById(`bonus-${pericia}`).textContent = bonus;
  });
});
