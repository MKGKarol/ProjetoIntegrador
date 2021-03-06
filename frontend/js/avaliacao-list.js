function listar(){
    

    $.ajax({
        method: "GET",
        url: "https://localhost:7108/api/AvaliacaoAulas",
        dataType: 'json',
        crossDomain: true,
        success: function(resultado){
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
            conteudo += "<th scope=\"col\">Ações</th>";
            conteudo += "</tr>";
            conteudo += "</thead>";
            conteudo += "<tbody>";

            if(resultado.length > 0){
                for (i = 0; i < resultado.length; i++) {
                    conteudo += "<tr>";
                    conteudo += "<td>" + resultado[i].id + "</td>";
                    conteudo += "<td>" + resultado[i].data + "</td>";
                    conteudo += "<td>" + resultado[i].nomeDisciplina + "</td>";
                    conteudo += "<td>" + resultado[i].nota + "</td>";
                    conteudo += "<td>" + resultado[i].comentario + "</td>";
                    conteudo += "<td>";
                    conteudo += "<a class=\"button is-danger\" onclick=\"excluir(" + resultado[i].id + ")\">Excluir</a>";
                    conteudo += "<a class=\"button is-primary\" href=\"avaliacao-edit.html?id=" + resultado[i].id + "\">Visualizar</a>";
                    conteudo += "</td>";
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
        }   
    })
}

function excluir(id){
    $.ajax({
        method: "DELETE",
        url: "https://localhost:7108/api/AvaliacaoAulas/" + id,
        dataType: 'json',
        crossDomain: true,
        success: function(){
            alert("Avaliação ecluída com sucesso!");
            listar();
        }
    })
}

function init(){
    listar();
}

init();