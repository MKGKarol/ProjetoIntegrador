var selectDisciplina = document.getElementById('disciplina');
var selectNota = document.getElementById('nota');
var btn = document.getElementById('btn-enviar');
var comentario = '';
var disciplina = 0;
var nome_disciplina = '';
var nota = 0;

selectDisciplina.addEventListener('change', function(){
    disciplina = parseInt( selectDisciplina.value);
    if(disciplina != 0)
        nome_disciplina = selectDisciplina.options[disciplina].text;    
})

selectNota.addEventListener('change', function(){
    nota = parseInt( selectNota.value);
})

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('/');
}

btn.addEventListener("click", function () {
    comentario = document.getElementById('comentario').value;
    if(disciplina == 0 || nota == 0)
        alert('Existem campos obirgatórios não preenchidos!');
    else{
        $.ajax({
            method: "POST",
            url: "https://x8ki-letl-twmt.n7.xano.io/api:A5S3v3Y2/avaliacao_aula",
            data: { nome_disciplina: nome_disciplina , nota: nota, comentario: comentario , data: formatDate(new Date())}
        }).done(
            alert("Avaliação cadastrada com sucesso!")
        )
    }
})