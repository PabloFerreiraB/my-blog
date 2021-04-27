---
title: Introdução ao NextJS - Parte 2
description: Conheça quais são as vantagens e desvantagens do Static Site
  Generation, Client Site Rendering e Server Side Rendering.
date: 2020-07-08T06:39:36.000Z
image: /assets/img/ssr-nextjs-reactjs.png
category: react
background: "#5ED3F3"
---
Nesse post retorno para entendermos as vantagens e desvantagens de **Static Site Generation**, **Client Site Rendering** e **Server Side Rendering.** _Caso ainda não tenha lido o primeiro artigo ou até mesmo gostaria de revê-lo, acesse o link a abaixo:_<br/>

[Introdução ao NextJS - Parte 1 | O que é, qual a diferença e quando usar ?](https://pabloferreira.netlify.app/introducao-ao-nextjs-parte-1/)

E o primeiro que veremos será o Static Site Generation. Sem mais enrolação vamos lá.

## Static Site Generation (SSG)

### Vantagens

- **`Uso quase nulo do servidor`.**<br/>
Como já foi renderizado antes os arquivos HTML, CSS e JS, o servidor não terá nenhum processo para rodar.

- **`Pode ser servidor em uma CDN (Content Delivery Network)`.**<br/>
Consequentemente terá um cache melhor, pois não precisará pegar todas vez os dados, tendo no cache retornará dele e pronto.

- **`Melhor performance entre todos`.**<br/>
As duas opções acima explica o motivo.

- **`Flexibilidade para usar em qualquer servidor`.**<br/>
Qualquer servidor consegue rodar arquivos estáticos.

### Desvantagens

- **`Tempo de Build pode ser bem alto`.**<br/>
Caso seu projeto tenha muitas páginas, precisará criar todas elas, essa ação é o processo do Build. Consequentemente o Build pode ser bem demorado. Algo que atrapalhará e muito.

- **`Dificuldades para escalar em aplicações grandes`.**<br/>
Você terá que criar todas as páginas antes, e se a aplicação for muito grande, você terá bastante dificuldades para controlar isso.

- **`Dificuldades para realizar atualizações constantes`.**<br/>
Caso sua aplicação precisar de atualizações constantes, tipo um E-Commerce. Toda hora terá que realizar um Build novo, e se cada Build levar em torno de 15 minutos por exemplo, toda alteração por mais simples que seja levará os 15 minutos.

Bom, citamos um pouco das vantagens e desvantagens que o `Static Site Generation` nos oferece. Seguiremos para o próximo tipo abaixo:

## Single Page Application (SPA)

### Vantagens

- **`Permite páginas ricas em interações sem recarregar`.**<br/>
Depois de baixado o App, tudo será feito no browser. Onde não precisará mais ficar dando reload na página.

- **`Site rápido após o load inicial`.**<br/>
Após feito o load inicial, foi baixado todo o JavaScript da aplicação. Depois de baixado ele já carregou todos arquivos que precisa para ser exibido em tela.

- **`Ótimo para Aplicações Web`.**<br/>
Por exemplo: Facebook Web, Spotify Web, Twitter Web e tantos outros que utilizam o tipo SPA.

- **`Possui diversas bibliotecas para trabalhar`.**

### Desvantagens

- **`Load inicial pode ser muito grande`.**<br/>
Se seu arquivo JavaScript for muito grande, irá demorar mais para iniciar e ser exibido o site.

- **`Performance imprevisível`.**<br/>
Pois cada página você terá arquivos JavaScript grandes e pequenos, onde acaba tendo algumas inconsistências.

- **`Dificuldades no SEO`.**<br/>
Como o arquivo JavaScript é carregado antes, para então fazer requisições na **Api** e assim poder renderizar. Acontece que ali você ainda não tem o conteúdo, você tem apenas o esqueleto do site e assim o Googlebot (Robô do Google) dificilmente encontrará o seu site.

Bom, citamos um pouco das vantagens e desvantagens que o *Server Side Rendering* nos oferece. Seguiremos para o próximo e último tipo abaixo:

## Server Side Rendering (SSR)

### Vantagens

- **`Ótimo em SEO`.**<br/>
Pois tudo é renderizado no lado do servidor. Quando o Googlebot (Robô do Google) abre a página do site ele recebe os dados e já tem tudo pronto pra ele. Consequentemente ele indexa muito melhor seu site.

- **`Meta tags com previews mais adequados`.**<br/>
As meta tags já estão com os previews certos, pois ele consegue fazer toda a parte descrita acima, que é pegar os dados como o: título, descrição, imagens e tudo mais. Logo as meta tags estarão corretas de acordo com a aquela página em si.

- **`Melhor performance para o usuário`.**<br/>
Isso quer dizer que o conteúdo será visto mais rápido. Como já entregamos tudo pronto e foi renderizado tudo no servidor não terá demora.

- **`Menor processamento do lado do cliente`.**<br/>
Como assim? Como foi dito acima, tudo é renderizado no servidor. O browser do cliente não terá esforços para exibir o conteúdo em tela e assim tem uma vantagem para dispositivos mais fracos.

### Desvantagens

- **`TTFB (Time to first byte) maior`.**<br/>
Acontece que o servidor irá preparar tudo antes para entregar o conteúdo. Então quando você acessa uma URL de um site por exemplo, terá todo o processo feito antes pelo servidor.

- **`HTML maior`.**<br/>
Já que ele entrega todo o HTML montado, consequentemente será maior. Essa podemos talvez considerar até como uma **"vantagem".**

- **`Reload completo nas mudanças de rota`.**<br/>
Toda vez que fazemos uma chamada, ele vai até o servidor e precisa recarregar para retornar o conteúdo. Porém da para disfarçarmos esse Reload da tela criando uma situação com Microinteração ou algo assim. Mas de qualquer forma ele precisará ir até o servidor para retornar o conteúdo.

Hoje vimos sobre os três tipos de aplicação e entendemos o fluxogramas, vantagens e desvantagens de cada um. Entendemos que o NextJS suporta o (SSG), (SSR) e também o (SPA). Essa é uma grande vantagem do NextJS.<br/>

Imagino que agora você está se perguntando:

## Quando posso utilizar um ou outro ?

Vamos lá, entenderemos quando utilizar cada um deles:

> **Static Site Generation (Gatsby, NextJS)**

- Quando a performance for muito importante.

- Site simples sem muita interação do usuário.

- Se você é a única pessoa que publica conteúdo.

- Se você faz pouca atualização no site.

- Se o site é simples com poucas páginas.

**Exemplos:** Portfólios, Blogs e Landing Pages.

> **Single Page Application (SPA)**

- Quando não tem tanta necessidade de indexar informações no Google.

- Quando o usuário faz muitas interações nas páginas.

- Quando se tem informações diferentes para cada usuário (Por exemplo Autenticação).

**Exemplos:** Facebook Web, Spotify Web, Twitter Web.

> **Server Side Rendering**

- Quando tem necessidade de um SPA, mas precisa de um loading mais rápido.

- Quando muda o conteúdo frequentemente.

- Quando trabalha com número muito grande de páginas.

- Quando precisa de uma boa indexação no Google.

**Exemplos:** E-Commerce e Sites de Notícias.

## Conclusão

Bom, chegamos ao fim de mais um post, finalizando com a introdução sobre NextJS onde foi abordados em duas partes. Espero que vocês possam ter entendido o que é o NextJS e como ele funciona, quais as diferenças dele para outros Frameworks existentes e também quais tipos utilizar de acordo com suas necessidades.

No próximo post iremos conhecer e entender um pouco sobre o **GraphQL.**

Até a próxima...