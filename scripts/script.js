const naofunciona = document.querySelectorAll('.desativado');
const botoesProjetos = document.querySelectorAll('.mostrar-informacoes');
const trocarTema = document.querySelector('.trocar-tema');

// BOTÕES DESATIVADOS DO PERFIL

for(let percorrerLista of naofunciona) {
    percorrerLista.addEventListener('click', (e) => {
        e.preventDefault(); // <-- ISSO IMPEDE O LINK DE SUBIR PARA O TOPO
        alert('[ERRO] Apenas o segundo funciona.')
    });
};

// BOTÕES DOS PROJETOS

for(let botao of botoesProjetos) {
    botao.addEventListener('click', () => {
        let conteudo = botao.parentElement; // PEGA O ELEMENTO PAI DO CONTEUDO CLICADO
        let informacaoDoProjeto = conteudo.querySelector('.info-projeto'); // DENTRO DO ELEMENTO COLETADO, BUSCA O INFO-PROJETO DENTRO DELE

        informacaoDoProjeto.classList.toggle('desativar'); // COM O ITEM ACHADO DENTRO DO PROJETO QUE FOI CLICADO, TROCA A CLASSE E VERIFICA SE ELA EXISTE E TROCA A MENSAGEM DO BOTÃO

        if(informacaoDoProjeto.classList.contains('desativar')) {
            botao.innerHTML = 'Ver mais';
        } else {
            botao.innerHTML = 'Ver menos';
        };
    });
};

// TROCAR TEMA

trocarTema.addEventListener('click', (e) => {
    e.preventDefault();
    let corpo = document.querySelector('body');
    if(!corpo.classList.contains('modo-escuro')) {
        corpo.classList.add('modo-escuro');
        trocarTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        corpo.classList.remove('modo-escuro');
        trocarTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    };
});