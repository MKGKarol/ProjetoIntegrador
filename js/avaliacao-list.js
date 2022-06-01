function listar(){
    

    $.get("https://x8ki-letl-twmt.n7.xano.io/api:A5S3v3Y2/avaliacao_aula", function(resultado){
        var i;
        var tableBody = document.getElementById("lista-avaliacao");
        var conteudo = "";
    
        conteudo += "<table class=\"table table-striped\">";
        conteudo += "<thead>";
        conteudo += "<tr>";
        conteudo += "<th scope=\"col\">Id</th>";
        conteudo += "<th scope=\"col\">Data</th>";
        conteudo += "<th scope=\"col\">Disciplina</th>";
        conteudo += "<th scope=\"col\">Avaliação</th>";
        conteudo += "<th scope=\"col\">Comentário</th>";
        conteudo += "</tr>";
        conteudo += "</thead>";
        conteudo += "<tbody>";

        if(resultado.length > 0){
            for (i = 0; i < resultado.length; i++) {
                conteudo += "<tr>";
                conteudo += "<td>" + resultado[i].id + "</td>";
                conteudo += "<td>" + resultado[i].data + "</td>";
                conteudo += "<td>" + resultado[i].nome_disciplina + "</td>";
                conteudo += "<td>" + resultado[i].nota + "</td>";
                conteudo += "<td>" + resultado[i].comentario + "</td>";
                conteudo += "</tr>";
            }
        }else{
            conteudo += "<tr>";
            conteudo += "<td colspan='5'>Não existem registros</td>";
            conteudo += "</tr>";
        }

        conteudo += "</tbody>";
        conteudo += "</table>";

        tableBody.innerHTML = conteudo;
    });   
}

function init(){
    listar();
}

init();