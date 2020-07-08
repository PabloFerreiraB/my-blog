---
title: Introdução ao NextJS - Parte 2
description: Quais são as vantagens e desvantagens do Static Site Generation,
  Client Site Rendering e Server Side Rendering.
date: 2020-07-08 06:39:36
image: /assets/img/ssr-nextjs-reactjs.png
category: dev
background: "#617222"
---
Nessa post retorno para entendermos as vantagens e desvantagens de **Static Site Generation**, **Client Site Rendering** e **Server Side Rendering**. Caso ainda não tenha consultado o primeiro artigo ou até mesmo gostaria de revê-lo, acesse o link a seguir:<br/>

[Introdução ao NextJS - Parte 1 | O que é, qual a diferença e quando usar ?](https://pabloferreira.netlify.app/introducao-ao-nextjs-parte-1/)

## Static Site Generation

### Vantagens

- **``Uso quase nulo do servidor``**. Como já foi renderizado os arquivos HTML, CSS e JS tudo antes, o servidor não terá nenhum processo para rodar.

- **``Pode ser servidor em uma CDN``**. Consequentemente terá um cache melhor, pois não precisará trazer toda hora os dados, tendo no cache retornará dele e pronto.

- **``Melhor performance entre todos``**. As duas opções acima explica o motivo.

- **``Flexibilidade para usar em qualquer servidor``**. Todo servidor roda arquivos estáticos.<br/>

### Desvantagens

- **``Tempo de build pode ser bem alto``**. Caso você tiver muitas páginas no seu site, você precisará criar todas essas páginas, esse processo é o processo do build. Consequentemente o build pode ser bem demorado.

- **``Dificuldades para escalar em aplicações grandes``**. Você terá que criar todas as páginas antes, e se a aplicação se muito grande, você terá bastante dificuldades para controlar.

- **``Dificuldades para realizar atualizações constantes``**. Caso sua aplicação precisa de atualizações constantes, tipo um E-Commerce. Pois toda hora terá que realizar o build novo, e se cada build levar em torno de 15 minutos, toda alteração por mais simples que seja levará os 15 minutos.

Bom, citamos um pouco das vantagens e desvantagens que o ``Static Site Generationso `` nos oferece. Seguiremos para o próximo.

## Single Page Application (SPA)

### Vantagens

- **``Permite páginas ricas em interações sem recarregar``**. Depois de baixado o App, tudo será feito no browser. Onde você não precisará mais ficar dando reload.

- **``Site rápido após o load inicial``**. Após feito o load inicial, onde foi baixado todo o JavaScript, depois de baixado ele já carregou tudo o que precisava.

- **``Ótimo para aplicações web``**. Por exemplo: Facebook web, Spotify web, Twitter Web, entre tantos outros que utilizam o SPA.

- **``Possui diversas bibliotecas para trabalhar``**.

### Desvantagens

- **``Load inicial pode ser muito grande``**. Se seu arquivo JavaScript for muito grande, irá demorar mais para iniciar o site.

- **``Performance imprevisível``**. Pois cada página você terá um arquivo JavaScript grande, outro pequeno e aí acaba tendo algumas inconsistência.

- **``Dificuldades no SEO``**. Como o arquivo JavaScript é carregado antes