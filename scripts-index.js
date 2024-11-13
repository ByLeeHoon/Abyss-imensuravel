const SUPABASE_URL = 'https://hduqbajuilragjnhjgvn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdXFiYWp1aWxyYWdqbmhqZ3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NzUyMDYsImV4cCI6MjA0NzA1MTIwNn0.2D-cZAiS70YUmiwJVC4rKQEyxq3mwofFfA3B9IOW3CE';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('search-bar').addEventListener('input', function() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        const characterName = card.querySelector('span').textContent.toLowerCase();
        if (characterName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

async function displaySavedCharacters() {
    const { data, error } = await supabase.from('characters').select('*');

    if (error) {
        console.error('Erro ao recuperar fichas: ', error);
    } else {
        const savedCharactersDiv = document.getElementById('saved-characters');
        savedCharactersDiv.innerHTML = '<h2>Fichas Salvas</h2>';
        data.forEach(character => {
            savedCharactersDiv.innerHTML += `
                <div class="character-card">
                    <span>AGI: ${character.agi} | FOR: ${character.forca} | INT: ${character.intelecto} | PRE: ${character.presenca} | VIG: ${character.vigor}</span>
                    <button onclick="accessCharacter('${character.id}')">Acessar Ficha</button>
                    <button onclick="deleteCharacter('${character.id}')">Excluir Ficha</button>
                </div>`;
        });
    }
}

function accessCharacter(characterId) {
    alert(`Acessando ficha do personagem com ID: ${characterId}`);
}

async function deleteCharacter(characterId) {
    const { error } = await supabase.from('characters').delete().eq('id', characterId);

    if (error) {
        console.error('Erro ao excluir ficha: ', error);
    } else {
        alert('Ficha do personagem foi excluída!');
        displaySavedCharacters();
    }
}

window.onload = displaySavedCharacters;
