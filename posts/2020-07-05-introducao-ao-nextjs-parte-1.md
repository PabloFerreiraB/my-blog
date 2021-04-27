---
title: Introdução ao NextJS - Parte 1
description: O que é, quais as diferenças e quando usar ?
date: 2020-07-04T09:21:50.000Z
image: /assets/img/ssr-nextjs-reactjs.png
category: react
background: "#5ED3F3"
---

## O que é o NextJS?

O **NextJS** é um Framework Web desenvolvido em **ReactJS** lançado em 2016 por [Guillhermo Rouch](https://github.com/rauchg) (Confundador da empresa [Vercel](https://vercel.com/)). É mantido pela Zeit e pela comunidade Open-Source. Visa agilizar o processo de construção de um app ReactJS oferecendo componentes para rota, suporte a **SSR (Server Side Rendering)**, além de **Webpack** já configurado para **ReactJS,** **Transpilação de ES6 e ES7** e que incluem recursos como **async** e **await**. E ainda assim mantém o início simples e flexível o bastante pra escalar o projeto para o tamanho que for necessário.

Antes de ver porque utilizarmos o NextJS é proveitoso, vamos entender um pouco sobre o que é `Framework Web`.

## Mais então, o que é um Framework Web?

Um Framework Web é um sistema opinativo com estrutura e ferramentas já definidas. Eles nos ajudam no desenvolvimento rápido e seguro de aplicações, mas é recomendável estudar antes a tecnologia em si que a mesma é desenvolvida, por exemplo o `ReactJS`.

Trata-se de biblioteca Frontend embora seja considerada uma estrutura. Ele foi o primeiro Framework a usar arquitetura baseada em componentes e é feito em `JavaScript`, então se espera que saber pelo menos o básico de JavaScript para poder usar o ReactJS.

## E porque usar o NextJS ?

Abaixo listo alguns motivos de porquê utilizar o NextJS e não outro Framework:

- **Renderização no servidor** ( Server Side Rendering - SSR )
- **Geração de estáticos** ( Static Site Generation - SSG )
- **CSS-in-JS** ( Vem com a estrutura em Styled-JSX, mas podemos utilizar qualquer outro, por exemplo: **Styled Components,** **Emotion** entre outros )
- **Zero Configuration** ( Já tem incluso: `Rotas`, `Hot Reloading` e `Code Splitting` entre outros )
- **Completamente extensível** ( Controle completo do Babel/Webpack, plugins )
- Otimizado para produção

**Ah, então o NextJS é perfeito ?**<br/>
Não, não existe tecnologia alguma bala de prata.

**Mas no mercado de trabalho ele é realmente utilizado ?**<br/>
Bom, prefiro listar algumas das grandes empresas que hoje utilizam o NextJS e deixo a conclusão por sua conta.

> **Netflix, GitHub, Twitch, Uber, Ticketmaster, Trovit, Coinbase, Scale** entre outras...

Você pode está se perguntando:<br/>
**Mas quais as diferenças do NextJS para o GatsbyJS, Create React App ou qualquer outro Framework web ?**

Antes de apontar a diferença aqui, precisamos entender que existem alguns tipos de aplicação, então vamos apontar quais os tipos e entendermos as diferenças.

## Tipos de uma aplicação

> **Static Site Generation ( HTML/CSS/JS )**

Pode ser puro, você escrevendo HTML, CSS e JS ou pode usar um gerador estático, que por exemplo o GatsbyJS faz, basicamente ele pega os dados de uma **API,** passa durante um processo e cria os arquivos estáticos, onde no final são arquivos HTML, CSS e JS.

![Static Site](/assets/img/ssg.png "Static Site")

> **Client Site Rendering ( CSR )**

Como o nome já diz, ele renderiza do lado do Client. Diferente do anterior, agora ele terá os arquivos HTML, CSS e JS. Onde que o JavaScript será baixado no browser, após isso ele pegará os dados da API e vai renderizar os dados em tela.

![Client Site Rendering](/assets/img/csr.png "Client Site Rendering")

> **Server Side Rendering ( SSR )**

Ao contrário do anterior, esse renderiza os dados do lado do servidor. O usuário faz a chamada e com todos arquivos já prontos ele entrega para o Client e assim será renderizado os dados em tela.

![Server Side Rendering](/assets/img/ssr.png "Server Side Rendering")

## Conclusão

E por hoje é só galera, nessa primeira parte foi explicando o básico sobre o NextJS, e também abordamos sobre os Framework Web. Espero que seja útil para vocês irem aprendendo esses pequenos detalhes. Peço que se puderem, compartilhem com seus amigos. Estou começando meu blog, então é muito importante que vocês me ajudem nesse início.

Na segunda parte do post iremos ver as vantagens e desvantagens dos tipos de aplicação: **Static Site Generation**, **Client Site Rendering** e **Server Side Rendering**.<br/>

Até a próxima...
