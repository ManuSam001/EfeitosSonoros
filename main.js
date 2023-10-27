//Declaração/criação de função tocaSomXD
function tocaSomXD (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
//criando a referências contantes listaDeTeclas e buscando a classe coletiva.tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador =0;
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas [contador].classList[1];
    const idAudio = "#som_" + efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}
