const btnTrofei = document.getElementById('btn-trofei');
const btnTema = document.getElementById('btn-tema');
const trofeiBox = document.getElementById('trofei-box');

// Mostra o nasconde i trofei
btnTrofei.addEventListener('click', function() {
    if (trofeiBox.style.display === 'block') {
        trofeiBox.style.display = 'none';
    } else {
        trofeiBox.style.display = 'block';
    }
});

// Attiva / Disattiva la modalità scura
btnTema.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});