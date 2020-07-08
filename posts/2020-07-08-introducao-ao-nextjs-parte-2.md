---
title: Introdução ao NextJS - Parte 2
description: Quais são as vantagens e desvantagens do Static Site Generation,
  Client Site Rendering e Server Side Rendering.
date: 2020-07-08T06:39:36.000Z
image: /assets/img/ssr-nextjs-reactjs.png
category: dev
background: "#617222"
---
Nessa post retorno para entendermos as vantagens e desvantagens de **Static Site Generation**, **Client Site Rendering** e **Server Side Rendering**. Caso ainda não tenha consultado o primeiro artigo ou até mesmo gostaria de revê-lo, acesse o link a seguir:<br/>

[Introdução ao NextJS - Parte 1 | O que é, qual a diferença e quando usar ?](https://pabloferreira.netlify.app/introducao-ao-nextjs-parte-1/)

E o primeiro que veremos será o Static Site Generation. Sem mais enrolação vamos lá.

## Static Site Generation

### Vantagens

> - **`Uso quase nulo do servidor`**.<br/>
Como já foi renderizado os arquivos HTML, CSS e JS tudo antes, o servidor não terá nenhum processo para rodar.

> - **`Pode ser servidor em uma CDN`**.<br/>
Consequentemente terá um cache melhor, pois não precisará trazer toda hora os dados, tendo no cache retornará dele e pronto.

> - **`Melhor performance entre todos`**.<br/>
As duas opções acima explica o motivo.

> - **`Flexibilidade para usar em qualquer servidor`**.<br/>
Qualquer servidor consegue rodar arquivos estáticos.

### Desvantagens

> - **`Tempo de build pode ser bem alto`**.<br/>
Caso você tiver muitas páginas no seu site, você precisará criar todas essas páginas, esse processo é o processo do build. Consequentemente o build pode ser bem demorado.

> - **`Dificuldades para escalar em aplicações grandes`**.<br/>
Você terá que criar todas as páginas antes, e se a aplicação se muito grande, você terá bastante dificuldades para controlar.

> - **`Dificuldades para realizar atualizações constantes`**.<br/>
Caso sua aplicação precisa de atualizações constantes, tipo um E-Commerce. Pois toda hora terá que realizar o build novo, e se cada build levar em torno de 15 minutos, toda alteração por mais simples que seja levará os 15 minutos.

Bom, citamos um pouco das vantagens e desvantagens que o `Static Site Generation` nos oferece. Seguiremos para o próximo abaixo.

## Single Page Application (SPA)

### Vantagens

> - **`Permite páginas ricas em interações sem recarregar`**. Depois de baixado o App, tudo será feito no browser. Onde você não precisará mais ficar dando reload.

> - **`Site rápido após o load inicial`**. Após feito o load inicial, onde foi baixado todo o JavaScript, depois de baixado ele já carregou tudo o que precisava.

> - **`Ótimo para aplicações web`**. Por exemplo: Facebook web, Spotify web, Twitter Web, entre tantos outros que utilizam o SPA.

> - **`Possui diversas bibliotecas para trabalhar`**.

### Desvantagens

> - **`Load inicial pode ser muito grande`**. Se seu arquivo JavaScript for muito grande, irá demorar mais para iniciar o site.

> - **`Performance imprevisível`**. Pois cada página você terá um arquivo JavaScript grande, outro pequeno e aí acaba tendo algumas inconsistência.

> - **`Dificuldades no SEO`**. Como o arquivo JavaScript é carregado antes, para então fazer requisições na **api** e assim poder renderizar. Acontece que ali você ainda não tem o conteúdo, você tem apenas o esqueleto do site e assim o google dificilmente encontrará o seu site.

Bom, citamos um pouco das vantagens e desvantagens que o *Server Side Rendering* nos oferece. Seguiremos para o próximo e último tipo abaixo.

## Server Side Rendering

### Vantagens

> - **`Ótimo em SEO`**. Pois tudo é renderizado no lado do servidor. Quando o google abre a página do site e ele recebe os dados, já tem tudo pronto ali pra ele.

> - **`Meta tags com previews mais adequados`**. 











