# Robotron 2000

Montador didático de robô para praticar DOM, eventos e módulos JavaScript, preservando o visual original.

## Tecnologias

HTML, CSS e JavaScript. Sem framework de interface.

## Executar

Na raiz do repositório, com Python 3 instalado:

```sh
python -m http.server 8000
```

Abra http://localhost:8000/. Módulos ES precisam de servidor HTTP; não use file://.

## Recursos e melhorias

- Adicionar e remover peças recalcula os atributos a partir das quantidades.
- Quantidades entre 0 e 99; controles nativos acessíveis por teclado.
- Layout empilhado em telas pequenas e confirmação da simulação sem recarregar a página.

## Testes

Com Node.js 18 ou superior, execute na raiz:

```sh
node --test tests/*.test.cjs
```

Os testes de regressão usam o test runner nativo, DOM e serviços simulados, sem instalar dependências. Cobrem fluxos específicos de lógica, não substituem testes visuais, de acessibilidade ou integração em navegador real.

## Escopo e limitações

A produção é apenas uma simulação; não cria ou envia pedidos. As atividades originais em atividades/ foram preservadas.

## Contexto

Projeto de estudos de Eduardo (EduT3). A proposta e os recursos originais foram preservados; as melhorias priorizam correção, uso por teclado, adaptação de layout e documentação.
