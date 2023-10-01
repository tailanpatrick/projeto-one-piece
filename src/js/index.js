//pegar os botões no js para verificar se usuário clicou neles
const botoes = document.querySelectorAll('.botao');

// pegar os personagens no js para poder mostrar as informações do personagem
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //verificar se já existe um botão com a classe "selecionado", se sim remover ela
        desselecionarBotao();


        // adicionar a classe "selecionado" no botao que foi clicado
        botao.classList.add('selecionado');

        //verificar se já existe um personagem com a classe "selecionado", se sim remover ela
        desselecionarPersonagem();

        // adicionar a classe "selecionado" no pesonagem que foi clicado
        personagens[indice].classList.add("selecionado");

    });
});



function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

