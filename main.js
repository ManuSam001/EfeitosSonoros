//Declaração/criação de função tocaSomXD
function tocaSomXD (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
//criando a referências contantes listaDeTeclas e buscando a classe coletiva.tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//criaçõa da repetição "while" e trocado pelo "for" com variavel,condição e incremento
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const teclas = listaDeTeclas [contador]; //guarda o contador da lista
    const efeito = teclas.classList[1];   //chama o 2° item classe individual do som
    const idAudio = `#som_${efeito}`;    //utiliza a junção template string 
    teclas.onclick = function(){       //função anônima auxiliar para chamar tocaSom
        tocaSomXD(idAudio);         //chamada da função tocaSom com parâmetro idAudio
    }
}
