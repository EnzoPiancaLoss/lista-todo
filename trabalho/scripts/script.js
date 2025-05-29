class tarefas{
    constructor(nome, status) {
        self.nome = nome;
        self.concluido = status;
    }
}

var lista_tarefas = []

function construir_lista(lista_tarefas) {
    var output = $("#output");
    output.empty();

    for (let i=0; i <lista_tarefas.length; i++) {
        output.append("<p>" + lista_tarefas[i].nome + "</p>");
        console.log(lista_tarefas[i]);
    }
    
}

function instanciar_tarefas(nome) {
    lista_tarefas.push(new tarefas(nome, "não concluido"));
}

$("#addTarefa").click(function() {

    var texto = document.getElementById("nomeTarefa").value;
    // lista_tarefas.push(texto);
    instanciar_tarefas(texto)
    construir_lista(lista_tarefas);
});

$("#removeTarefa").click(function() {
    // Isso remove tudo
    // var output = $("#output");
    // output.empty();

    var tarefaremover = document.getElementById("removerNomeTarefa").value;
    console.log(tarefaremover);

    lista_tarefas = lista_tarefas.filter(lista_tarefas => lista_tarefas !== tarefaremover);
    construir_lista(lista_tarefas);
});

