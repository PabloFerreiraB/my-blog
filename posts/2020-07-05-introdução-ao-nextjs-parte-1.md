---
title: Introdução ao NextJS - Parte 1
description: O que é, qual a diferença e quando usar ?
date: 2020-07-04T09:21:50.000Z
image: /assets/img/ssr-nextjs-reactjs.png
category: dev
background: "#617222"
---
## O que é o NextJS?

O **NextJS** é um Framework Web desenvolvido em **ReactJS** lançado em 2016 por [Guillhermo Rouch](https://github.com/rauchg) (confundador da empresa [Vercel](https://vercel.com/)). É mantido pela zeit e pela comunidade open-source, e visa agilizar o processo de construção de um app React oferecendo componentes para rota, suporte a SSR (server side rendering) além de webpack já configurado para React e transpilação de ES6 e ES7 que incluem recursos como async e await. Mesmo com tudo isso, ele mantém o início simples e flexível o bastante pra escalar o projeto para o tamanho que for necessário.

Antes de ver porque utilizar o NextJS, vamos entender um pouco sobre o que é `Framework Web`.

## Mais então, o que é um Framework Web?

Um Framework Web é um sistema opinativo com estrutura e ferramentas já definidas. Eles nos ajudam no desenvolvimento rápido e seguro de aplicações, mas é recomendável estudar antes a tecnologia em si em que o mesmo é desenvolvido, por exemplo o `React`.

Trata-se de biblioteca de frontend, embora seja considerada uma estrutura, ele foi o primeiro framework a usar arquitetura baseada em componentes e é feito em `JavaScript`, então se espera de você saber JavaScript para poder usar o React.

## E porque usar o NextJS ?

Abaixo listo algumas motivos de porque utilizar o NextJS e não outro framework: 

* Renderização no servidor ( Server Side Rendering - SSR )
* Geração de estáticos ( Static Site Generation - SSG )
* CSS-in-JS (Vem com a estrutura em Styled-jsx, mais podemos utilizar qualquer outro como Styled Components, Emotion, etc )
* Zero Configuration (já tem incluso: rotas, hot reloading, code splitting, etc )
* Completamente extensível ( controle completo do Babel/Webpack, plugins )
* Otimizado para produção

Ah ta bom o NextJS parece perfeito né ? Mais no mercado de trabalho ele é usado mesmo ?\
Bom prefiro listar algumas das grandes empresas que hoje utilizam o NextJS, e deixo por suas próprias conclusões.

> **Netflix, GitHub, Twitch, Uber, Ticketmaster, Trovit, Coinbase, Scale** entre outras...

Ai você pode está se perguntando: Mais quais a diferença do NextJS para o Gatsby, Create React App ou qualquer outro framework web ?

Antes de apontarmos a diferença aqui, precisamos entender que existem alguns tipos de aplicação, então vamos apontar aqui os tipo e entender a diferença.

## Tipos de uma aplicação

> Static Site Generation ( HTML/CSS/JS )

  Pode ser puro, você escrevendo HTML, CSS, JS ou pode usar um gerador estático, que no caso por exemplo o GatsbyJS faz, que basicamente ele pega os dados de uma API passa durante um processo e cria os arquivos estáticos, que no final é os arquivos HTML, CSS, JS.

![Static Site](/assets/img/ssg.png "Static Site")

> Client Site Rendering ( CSR / Single Page Application - SPA )

  Como o nome já diz, ele renderiza do lado do Client. Diferente do anterior, agora ele terá os arquivos HTML, CSS, JS onde que o JavaScript irá baixar no browser. Aí ele que vai pegar os dados da API tudo do lado o Client e vai renderizar os dados em tela.

![Client Site Rendering](/assets/img/csr.png "Client Site Rendering")

> Server Side Rendering ( SSR )

  Ao contrário do anterior, esse renderiza do lado do Server. O usuário faz a chamada e então ele renderiza do lado do servidor, depois ele entrega para o Client.

![Server Side Rendering](/assets/img/ssr.png "Server Side Rendering")

## Conclusão

E por hoje é só galera, nessa primeira parte foi explicando o básico sobre o NextJS, e também abordamos sobre os Framework Web. Espero que seja útil para vocês irem aprendendo esses pequenos detalhes. Peço que se puderem, compartilhem com seus amigos, eu estou começando ainda, então é muito importante que vocês me ajudem nesse início.

Na segunda parte do post iremos ver as vantagens e desvantagens de cada um: **Static Site Generation**, **Client Site Rendering** e **Server Side Rendering**