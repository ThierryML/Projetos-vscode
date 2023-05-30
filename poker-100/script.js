function perguntarAno(){
    
    const anoNascimento = prompt('Ano de nascimento');
    const anoNascimentoNumero = Number(anoNascimento);
    const anoAtual = 2022;

    // idade -> ano atual - ano de nascimento
    const idade = anoAtual - anoNascimentoNumero;

    alert( idade );

    // se a idade for maior que 17 
    if ( idade > 17 ){
        // remover a classe escondido do elemento com a classe selecionar-jogo    
        const painel = document.querySelector('.selecionar-jogo');
        painel.classList.remove('escondido');
    } else {// se nao
        
        /*
        pegar o paragrafo e vou trocar o texto dele dizendo que não pode jogar e mostrar a idade tbm
        */

        //1 - Pegar o elemento com a classe aviso e trazer para o javascript
        const paragrafo = document.querySelector('.aviso');

        //2 - faço a alteração necessária - trocar o texto
        paragrafo.innerHTML = `Opa! Foi mal! voce tem ${idade} anos e por isso nao tem idade para jogar`;

    }

}

let jogo;

function selecionarJogo(botao){
    
    console.log(botao);

    // desmarcar o botao que havia sido marcado antes
    // remover a classe selecionado do botao clicado anteiormente (selecionado anteiormente)
    // 1 - pegar o botao selecionado antes
    const botaoSelecionadoAnteriormente = document.querySelector('.jogo .selecionado');

    if ( botaoSelecionadoAnteriormente !== null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    
    // adicionar a classe selecionado no elemento botao
    botao.classList.add('selecionado');

    jogo = botao.innerHTML;

    liberaBotaoContinuar();
}

let qtdeJogadores;

function selecionarQuantidadeJogadores(botao){
    
    // verificar se existe um botão que já foi selecionado anteriormente
    const botaoSel = document.querySelector('.qtd-jogadores .selecionado');
    // se existir
    if ( botaoSel !== null){
        // remover a classe selecionado desse botao que foi selecionado anteriormente
        botaoSel.classList.remove('selecionado');
    }

    // adicionar a classe selecionado
    botao.classList.add('selecionado');

    qtdeJogadores = botao.innerHTML;

    liberaBotaoContinuar();
}

function continuar(){
    // ocultar o painel do jogo
    const painel = document.querySelector('.selecionar-jogo');
    painel.classList.add('escondido');

    // exibir o painel iniciando jogo
    const load = document.querySelector('.loading-overlay');
    load.classList.remove('escondido');

        
    // exibir com o innerHTML
    const paragrafo = document.querySelector('.mensagem-iniciando');
    paragrafo.innerHTML = `O jogo selecionado foi ${jogo} com a quantidade de jogadores ${qtdeJogadores}`;
}

function liberaBotaoContinuar(){

    // se o jogo foi selecionado
    if ( jogo !== undefined){
        // a quantidade de joga. foi selecionado
        if ( qtdeJogadores !== undefined){
            //libera o botao
            const botaoContinuar = document.querySelector('.botao-continuar');
            botaoContinuar.classList.add('selecionado');
        }
    }

}