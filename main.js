//Declaração/criação de função tocaSomXD
function tocaSomXD (){
    document.querySelector('#som_tecla_XD').play();
}
//criando a referências contantes listaDeTeclas e buscando a classe coletiva.tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador =0;
while(contador < 9){
    listaDeTeclas[contador].onclick = tocaSomXD;
}