class tarefas{
    constructor(nome, status) {
        this.nome = nome;
        this.concluido = status;
    }
}

var lista_tarefas = []

function construir_lista(lista_tarefas) {
    var output = $("#output");
    output.empty();

    for (let i=0; i <lista_tarefas.length; i++) {
        if (lista_tarefas[i].concluido === "concluido") {
            output.append("<p>" + "[*]" + lista_tarefas[i].nome + "</p>");
        }
        else if (lista_tarefas[i].concluido === "não concluido") {
            output.append("<p>" + "[ ]" + lista_tarefas[i].nome + "</p>");
        }
        
        output.append("<p>" + lista_tarefas[i].nome + "</p>");
        console.log(lista_tarefas[i]);
    }
    
}

function instanciar_tarefas(nome) {
    lista_tarefas.push(new tarefas(nome, "não concluido"));
}

function concluir_tarefa(nome) {
    for (let i = 0; i < lista_tarefas.length; i++) {
        if (lista_tarefas[i].nome === nome) {
            lista_tarefas[i].concluido = "concluido";
            break;
        }
    }
    construir_lista(lista_tarefas);
}

$("#addTarefa").click(function() {

    var texto = document.getElementById("nomeTarefa").value;
    // lista_tarefas.push(texto);
    instanciar_tarefas(texto)
    construir_lista(lista_tarefas);
});

$("#removeTarefa").click(function() {
    var tarefaremover = document.getElementById("removerNomeTarefa").value;
    console.log(tarefaremover);

    lista_tarefas = lista_tarefas.filter(tarefa => tarefa.nome !== tarefaremover);
    construir_lista(lista_tarefas);
});

