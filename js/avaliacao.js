var selectDisciplina = document.getElementById('disciplina');
var selectNota = document.getElementById('nota');
var btn = document.getElementById('btn-enviar');

var disciplina = 0;
var nota = 0;

selectDisciplina.addEventListener('change', function(){
    disciplina = parseInt( selectDisciplina.value);
})

selectNota.addEventListener('change', function(){
    nota = parseInt( selectNota.value);
})

btn.addEventListener("click", function () {
    if(disciplina == 0 || nota == 0)
        alert('Existem campos obirgatórios não preenchidos!');
})