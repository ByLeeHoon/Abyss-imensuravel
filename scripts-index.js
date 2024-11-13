const SUPABASE_URL = 'https://hduqbajuilragjnhjgvn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdXFiYWp1aWxyYWdqbmhqZ3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NzUyMDYsImV4cCI6MjA0NzA1MTIwNn0.2D-cZAiS70YUmiwJVC4rKQEyxq3mwofFfA3B9IOW3CE';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

window.onload = async function() {
    await displaySavedCharacters();
};

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
                    <span>AGI: ${character.agi} | FOR: ${character.forca} | INT: ${character.intelecto} | PRE: ${character.presenca} | VIG: ${character[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/NatanaelSaymon/code-drops/tree/ada5a46222082116f8d070796ed15e4c0539d38b/TEMPLATE_BOOTSTRAP.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/lgfranco22/blog/tree/2ff765f5547038ea91aa40671858d9fd9d5ffb28/entrar.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "2")
