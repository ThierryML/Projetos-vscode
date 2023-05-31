
let prato;
let bebidas;
let sobremesas;
function comida(primeiro, selecionartitulo){
// 1° pegar o elemento comida1 e trazer para o js.
const selecionar1 = document.querySelector('.total1 .selecionado');
//condição para evitar o null.
if(selecionar1 !== null){
    selecionar1.classList.remove('selecionado');
    }

//2° colocar a classe selecionado nesse elemento.
primeiro.classList.add('selecionado');
//3° desmarcar o botão selecionado e selecionar o que foi clicado.
 primeiro.innerHTML;
const elementotitulo = document.querySelector(selecionartitulo+'.nomeprato')

console.log(selecionartitulo+'.nomeprato');

prato = elementotitulo.innerHTML;
}

function bebida(segundo){
// 1° pegar o elemento comida1 e trazer para o js.
const selecionar2 = document.querySelector(' .total2 .selecionado');
//condição para evitar o null.
if(selecionar2 !== null){
    selecionar2.classList.remove('selecionado');
    }

//2° colocar a classe selecionado nesse elemento.
segundo.classList.add('selecionado');
//3° desmarcar o botão selecionado e selecionar o que foi clicado.
 segundo.innerHTML;

console.log(segundo);

}

function sobremesa(terceiro){
    // 1° pegar o elemento comida1 e trazer para o js.
    const selecionar3 = document.querySelector(' .total3 .selecionado');
    //condição para evitar o null.
    if(selecionar3 !== null){
        selecionar3.classList.remove('selecionado');
        }
    
    //2° colocar a classe selecionado nesse elemento.
    terceiro.classList.add('selecionado');
    //3° desmarcar o botão selecionado e selecionar o que foi clicado.
     terceiro.innerHTML;
    
    console.log(terceiro);
}

