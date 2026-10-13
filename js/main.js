import { pecas } from './estatisticas.js';
const controles = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const quantidades = Object.fromEntries(Object.keys(pecas).map(peca => [peca, 0]));
function atualizar() {
  estatisticas.forEach(elemento => {
    elemento.textContent = Object.entries(quantidades).reduce((total, [peca, quantidade]) => total + quantidade * pecas[peca][elemento.dataset.estatistica], 0);
  });
  controles.forEach(botao => {
    const quantidade = quantidades[botao.dataset.peca];
    botao.disabled = botao.dataset.controle === "-" ? quantidade === 0 : quantidade === 99;
    botao.parentElement.querySelector("[data-contador]").value = String(quantidade).padStart(2, "0");
  });
}
controles.forEach(botao => botao.addEventListener("click", () => {
  const peca = botao.dataset.peca;
  quantidades[peca] = Math.max(0, Math.min(99, quantidades[peca] + (botao.dataset.controle === "+" ? 1 : -1)));
  atualizar();
}));
document.querySelector(".montador").addEventListener("submit", evento => {
  evento.preventDefault();
  document.getElementById("status").textContent = "Simulação concluída! A configuração permanece disponível para ajustes.";
});
atualizar();
