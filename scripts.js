document.getElementById('rpg-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const characterName = document.getElementById('character-name').value;
    alert(`Ficha do personagem ${characterName} foi salva!`);
    // Aqui você pode adicionar lógica para salvar os dados em algum lugar
});
