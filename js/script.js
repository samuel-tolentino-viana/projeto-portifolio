const naofunciona = document.querySelectorAll('.desativado');
const botoesProjetos = document.querySelectorAll('.mostrar-informacoes');
const trocarTema = document.querySelector('#trocar-tema');



// BOTÕES DESATIVADOS DO PERFIL



for (let percorrerLista of naofunciona) {
    percorrerLista.addEventListener('click', (e) => {
        e.preventDefault(); // <-- ISSO IMPEDE O LINK DE SUBIR PARA O TOPO
        alert('[ERRO] Apenas o segundo funciona.')
    });
};



// BOTÕES DOS PROJETOS



for (let botao of botoesProjetos) {
    botao.addEventListener('click', () => {
        let conteudo = botao.parentElement; // PEGA O ELEMENTO PAI DO CONTEUDO CLICADO
        let informacaoDoProjeto = conteudo.querySelector('.info-projeto'); // DENTRO DO ELEMENTO COLETADO, BUSCA O INFO-PROJETO DENTRO DELE

        informacaoDoProjeto.classList.toggle('desativar'); // COM O ITEM ACHADO DENTRO DO PROJETO QUE FOI CLICADO, TROCA A CLASSE E VERIFICA SE ELA EXISTE E TROCA A MENSAGEM DO BOTÃO

        if (informacaoDoProjeto.classList.contains('desativar')) {
            botao.innerHTML = 'Ver mais';
        } else {
            botao.innerHTML = 'Ver menos';
        };
    });
};



// TROCAR TEMA


let tema = 'claro';

trocarTema.addEventListener('click', (e) => {
    e.preventDefault();
    let corpo = document.querySelector('body');
    if (!corpo.classList.contains('modo-escuro')) {
        corpo.classList.add('modo-escuro');
        trocarTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
        tema = 'escuro';
        localStorage.setItem('corDoTema', tema);
    } else {
        corpo.classList.remove('modo-escuro');
        trocarTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
        tema = 'claro';
        localStorage.setItem('corDoTema', tema);
    };
});

let modo = localStorage.getItem('corDoTema');
console.log(modo);

if (modo === 'escuro') {
    let corpo = document.querySelector('body');
    corpo.classList.add('modo-escuro');
    trocarTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    tema = 'escuro';
} else {
    corpo.classList.remove('modo-escuro');
    trocarTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    tema = 'claro';
}


// SALVAR MODO ESCURO







// ROLAGEM



const navLinks = document.querySelectorAll('header .menu .links');

navLinks.forEach((links) => { // FOREACH PERCORRE TODOS OS LINKS COM O PARÂMETRO

    links.addEventListener('click', (e) => { // O e PERMITE ACESSAR VARIAS INFORMAÇÕES SOBRE OQUE ACONTEUCEU

        e.preventDefault(); // PREVINE QUE O LINK QUE FOI CLICADO 

        const atributo = document.querySelector(links.getAttribute('href')); // PEGA O LINK QUE FOI CLICADO E VERIFICA SE NELE HÁ O ATRIBUTO: href

        if (atributo) {

            const alturaDoHeader = document.querySelector('header').offsetHeight; // offsetHeight PEGA A ALTURA DO ELEMENTO HTML

            const posicaoDoHeader = atributo.offsetTop - alturaDoHeader - 18; // CALCULA A ALTURA PARA SE POSICIONAR

            window.scrollTo({ // A TELA VAI ROLAR E DEIXAR A PARTE DE CIMA COM OQUE FOI CALCULADO E VAI ROLAR SUAVEMENTE
                top: posicaoDoHeader,
                behavior: 'smooth'
            });
        }
    });
});