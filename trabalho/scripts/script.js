//Utilizei class pq torna a minha vida mais fácil. Afinal temos Programação Orientada a Objeto :D
class tarefas{
    constructor(nome, status) {
        this.nome = nome;
        this.concluido = status;
    }
}


var lista_tarefas = []; // <-- Importante, não remova

function instanciar_tarefas(nome) {
    lista_tarefas.push(new tarefas(nome, "não concluido"));
}




function construir_lista() {
    var output = $("#output");
    output.empty();

    for (let i = 0; i < lista_tarefas.length; i++) {
        let status = lista_tarefas[i].concluido === "concluido" ? "[x]" : "[  ]";
        //Se o valor for igual a concluido, recebe [x], se não, recebe [  ]
        let nome = lista_tarefas[i].nome;
        let li
        if (status == "[  ]") {
            li = $(`
                <li class="textinho">
                    ${status} ${nome}
                    <button class="remover_botao" data-nome="${nome}">Remover</button>
                    <button class="atualizar_status" data-nome="${nome}">Concluir</button>
                </li>
            `);
        
        } else {
            li = $(`
                <li class="textinho">
                    ${status} ${nome}
                    <button class="remover_botao" data-nome="${nome}">Remover</button>
                    <button class="atualizar_status" data-nome="${nome}">Cancelar conclução</button>
                </li>
            `);
        }
        
        output.append(li);
    }

    //Aqui são os botões que fica do ladin da tarefa
    $(".remover_botao").click(function() {
        let nome = $(this).data("nome");
        lista_tarefas = lista_tarefas.filter(tarefa => tarefa.nome !== nome);
        construir_lista();
    });

    $(".atualizar_status").click(function() {
        let nome = $(this).data("nome");
        let tarefa = lista_tarefas.find(tarefa => tarefa.nome === nome);
        if (tarefa.concluido === "não concluido") {
            
            tarefa.concluido = "concluido";
            construir_lista();
        } else if (tarefa.concluido === "concluido") {
            tarefa.concluido = "não concluido";
            construir_lista();
        }
    });
}



$("#addTarefa").click(function() {
    var texto = document.getElementById("nomeTarefa").value;
    
    for (let i = 0; i < lista_tarefas.length; i++) {
        if (lista_tarefas[i].nome === texto) {
            alert(`Tarefa ${texto} já existe na lista :/`);
            return;
        }
    }
    if (texto.trim() === "") { //trim() é pra remover os espaços em branco. Tipo " " ou "          ola"
        alert("Esqueceu do nome :/");
        return;
    }

    document.getElementById("nomeTarefa").value = "";
    instanciar_tarefas(texto)
    construir_lista();
});

$("#removeTarefa").click(function() {
    var tarefaremover = document.getElementById("nomeTarefa").value;
    lista_tarefas = lista_tarefas.filter(tarefa => tarefa.nome !== tarefaremover);
    construir_lista();
});

$("#nomeTarefa").keypress(function(e) {
    if (e.which === 13) { // 13 é o código da tecla Enter pro teclado :D
        $("#addTarefa").click();
    }
});