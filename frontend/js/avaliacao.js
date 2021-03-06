var selectDisciplina = document.getElementById('disciplina');
var selectNota = document.getElementById('nota');
var btn = document.getElementById('btn-enviar');
var comentario = '';
var disciplina = 0;
var nome_disciplina = '';
var nota = 0;
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");


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
            url: "https://localhost:7108/api/AvaliacaoAulas",
            contentType: "application/json",
            dataType: "json",
            async: false,
            data: JSON.stringify(
                {   id:0, 
                    nomeDisciplina: nome_disciplina, 
                    nota: nota, 
                    comentario: comentario, 
                    data: new Date()
                })
        }).done(
            window.location.href = "avaliacao-list.html"
        )
    }
})

function voltar(){
    window.location.href = "avaliacao-list.html"
}