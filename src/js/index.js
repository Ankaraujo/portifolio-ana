
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    //quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //marca aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    // esconde conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //mostra conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}
