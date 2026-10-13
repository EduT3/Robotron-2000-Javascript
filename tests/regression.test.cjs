const test = require('node:test');
const assert = require('node:assert/strict');
const { context, element } = require('./dom.cjs');

test('adding then removing restores stats; zero cannot underflow', () => {
 const t = context(); t.load('js/estatisticas.js', true);
 const count = element(); const stat = element(); stat.dataset.estatistica = 'forca';
 const minus = element(), plus = element();
 for (const [button, operation] of [[minus, '-'], [plus, '+']]) { button.dataset = { peca: 'bracos', controle: operation }; button.parentElement = { querySelector: () => count }; }
 t.ctx.document.querySelectorAll = selector => selector === '[data-controle]' ? [minus, plus] : [stat];
 t.load('js/main.js', true);
 assert.equal(minus.disabled, true); plus.events.click(); assert.equal(stat.textContent, 29);
 minus.events.click(); assert.equal(stat.textContent, 0); minus.events.click(); assert.equal(stat.textContent, 0);
});
