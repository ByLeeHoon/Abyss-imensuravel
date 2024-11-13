const SUPABASE_URL = 'https://hduqbajuilragjnhjgvn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdXFiYWp1aWxyYWdqbmhqZ3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NzUyMDYsImV4cCI6MjA0NzA1MTIwNn0.2D-cZAiS70YUmiwJVC4rKQEyxq3mwofFfA3B9IOW3CE';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('save-character-btn').addEventListener('click', async function() {
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
        window.location.href = 'index.html';
    }
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.creation-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

window.onload = function() {
    showSection('attributes');
};
