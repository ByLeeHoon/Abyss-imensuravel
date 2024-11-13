const SUPABASE_URL = 'https://hduqbajuilragjnhjgvn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdXFiYWp1aWxyYWdqbmhqZ3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NzUyMDYsImV4cCI6MjA0NzA1MTIwNn0.2D-cZAiS70YUmiwJVC4rKQEyxq3mwofFfA3B9IOW3CE';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('new-character-btn').addEventListener('click', function() {
    console.log('Botão "Nova Ficha" clicado');
    document.getElementById('character-creation').style.display = 'block';
    showSection('attributes');
});

document.getElementById('save-character-btn').addEventListener('click', async function() {
    console.log('Botão "Salvar Ficha" clicado');
    const agi = document.getElementById('agi').value;
    const forca = document.getElementById('for').value;
    const intelecto = document.getElementById('int').value;
    const presenca = document.getElementById('pre').value;
    const vigor = document.getElementById('vig').value;

    const { data, error } = await supabase
        .from('characters')
        .insert([{ agi, forca, intelecto, presenca, vigor }]);
    
    if (error) {
        console.error('Erro ao salvar ficha: ', error);
    } else {
        alert('Ficha do personagem foi salva na nuvem!');
        displaySavedCharacters();
        document.getElementById('character-creation').style.display = 'none';
    }
});

function showSection(sectionId) {
    console.log(`Mostrando seção: ${sectionId}`);
    const sections = document.querySelectorAll('.creation-section');
    sections.forEach(section => {
        section.style.display = 'none[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/NatanaelSaymon/code-drops/tree/ada5a46222082116f8d070796ed15e4c0539d38b/TEMPLATE_BOOTSTRAP.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/lgfranco22/blog/tree/2ff765f5547038ea91aa40671858d9fd9d5ffb28/entrar.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "2")
