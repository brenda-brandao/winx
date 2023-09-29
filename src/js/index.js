// verificar quando o usuário passar o mouse em cima do personagem
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {

    personagem.addEventListener('mouseenter', () => {

        // transição suave para vizualizar em tela menor
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // verificar se já existe um personagem selecionado
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        // personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        // alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        // alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
