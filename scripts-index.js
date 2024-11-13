document.getElementById('rolarDado').addEventListener('click', function() {
  const resultado = Math.floor(Math.random() * 20) + 1; // Dado de 20 faces
  
  fetch('https://discord.com/api/webhooks/YOUR_WEBHOOK_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: `Resultado do dado: ${resultado}`
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
