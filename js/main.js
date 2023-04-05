//alert("Esse projeto foi desenhado e pensado para Desktop, ao usar em outros dispositivos podera haver erros de exibição!")

import { pecas } from './estatisticas.js';


console.log(pecas)

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

controle.forEach( (elemento) => {
  elemento.addEventListener("click", (evento)=> {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatistica(evento.target.dataset.peca)
  }) 
})

function manipulaDados(operacao, controle){
  const peca = controle.querySelector("[data-contador]")


  if(operacao === "-") {
    if (parseInt(peca.value) > 0) {
      peca.value -= 1
    }
  }else{
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatistica(peca) {
  estatistica.forEach( (elemento ) => {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}


