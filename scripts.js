const SUPABASE_URL = 'https://hduqbajuilragjnhjgvn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdXFiYWp1aWxyYWdqbmhqZ3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NzUyMDYsImV4cCI6MjA0NzA1MTIwNn0.2D-cZAiS70YUmiwJVC4rKQEyxq3mwofFfA3B9IOW3CE';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('rpg-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const characterName = document.getElementById('character-name').value;

    const { data, error } = await supabase
        .from('characters')
        .insert([{ name: characterName }]);

    if (error) {
        console.error('Erro ao salvar ficha: ', error);
    } else {
        alert(`Ficha do personagem ${characterName} foi salva na nuvem!`);
        displaySavedCharacters();
    }
});

async function displaySavedCharacters() {
    const { data, error } = await supabase.from('characters').select('*');

    if (error) {
        console.error('Erro ao recuperar fichas: ', error);
    } else {
        const savedCharactersDiv = document.getElementById('saved-characters');
        savedCharactersDiv.innerHTML = '<h2>Fichas Salvas:</h2>';
        data.forEach(character => {
            savedCharactersDiv.innerHTML += `<p>${character.name}</p>`;
        });
    }
}

window.onload = displaySavedCharacters;
