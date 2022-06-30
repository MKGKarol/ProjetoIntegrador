var selectDisciplina = document.getElementById('disciplina');
var selectNota = document.getElementById('nota');
var btn = document.getElementById('btn-enviar');
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
var data;
var disciplinas = [
    {id: 1, nome : "Desenvolvimento WEB"},
    {id: 2, nome : "Banco de Dados"},
    {id: 3, nome : "Sistemas Operacionais"}
];

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
    nota = parseInt( selectNota.value);
    disciplina = parseInt( selectDisciplina.value);
    if(disciplina != 0)
        nome_disciplina = selectDisciplina.options[disciplina].text;
        
    if(disciplina == 0 || nota == 0)
        alert('Existem campos obirgatórios não preenchidos!');
    else{
        $.ajax({
            method: "PUT",
            url: "https://localhost:7108/api/AvaliacaoAulas/" + id,
            contentType: "application/json",
            dataType: "json",
            async: false,
            data: JSON.stringify(
                {   id: id, 
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

function init(){
    consultar(id);
}

function consultar(id){
    $.ajax({
        method: "GET",
        url: "https://localhost:7108/api/AvaliacaoAulas/" + id,
        dataType: 'json',
        crossDomain: true,
        success: function(resultado){
            document.getElementById('comentario').value = resultado.comentario;
            

            selectDisciplina.value = disciplina;
            disciplinas.map(function(disciplina){
                if(disciplina.nome == resultado.nomeDisciplina)
                    selectDisciplina.value = disciplina.id;
            });

            selectNota.value = resultado.nota;
        }
    })
}

function voltar(){
    window.location.href = "avaliacao-list.html"
}

init();