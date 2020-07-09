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

## Static Site Generation (SSG)

### Vantagens

- **`Uso quase nulo do servidor`**.<br/>
Como já foi renderizado os arquivos HTML, CSS e JS tudo antes, o servidor não terá nenhum processo para rodar.

- **`Pode ser servidor em uma CDN`**.<br/>
Consequentemente terá um cache melhor, pois não precisará trazer toda hora os dados, tendo no cache retornará dele e pronto.

- **`Melhor performance entre todos`**.<br/>
As duas opções acima explica o motivo.

- **`Flexibilidade para usar em qualquer servidor`**.<br/>
Qualquer servidor consegue rodar arquivos estáticos.

### Desvantagens

- **`Tempo de build pode ser bem alto`**.<br/>
Caso você tiver muitas páginas no seu site, você precisará criar todas essas páginas, esse processo é o processo do build. Consequentemente o build pode ser bem demorado.

- **`Dificuldades para escalar em aplicações grandes`**.<br/>
Você terá que criar todas as páginas antes, e se a aplicação se muito grande, você terá bastante dificuldades para controlar.

- **`Dificuldades para realizar atualizações constantes`**.<br/>
Caso sua aplicação precisa de atualizações constantes, tipo um E-Commerce. Pois toda hora terá que realizar o build novo, e se cada build levar em torno de 15 minutos, toda alteração por mais simples que seja levará os 15 minutos.

Bom, citamos um pouco das vantagens e desvantagens que o `Static Site Generation` nos oferece. Seguiremos para o próximo abaixo.

## Single Page Application (SPA)

### Vantagens

- **`Permite páginas ricas em interações sem recarregar`**.<br/>
Depois de baixado o App, tudo será feito no browser. Onde você não precisará mais ficar dando reload.

- **`Site rápido após o load inicial`**.<br/>
Após feito o load inicial, onde foi baixado todo o JavaScript, depois de baixado ele já carregou tudo o que precisava.

- **`Ótimo para Aplicações Web`**.<br/>
Por exemplo: Facebook Web, Spotify Web, Twitter Web, entre tantos outros que utilizam o SPA.

- **`Possui diversas bibliotecas para trabalhar`**.

### Desvantagens

- **`Load inicial pode ser muito grande`**.<br/>
Se seu arquivo JavaScript for muito grande, irá demorar mais para iniciar o site.

- **`Performance imprevisível`**.<br/>
Pois cada página você terá um arquivo JavaScript grande, outro pequeno e aí acaba tendo algumas inconsistência.

- **`Dificuldades no SEO`**.<br/>
Como o arquivo JavaScript é carregado antes, para então fazer requisições na **api** e assim poder renderizar. Acontece que ali você ainda não tem o conteúdo, você tem apenas o esqueleto do site e assim o Google dificilmente encontrará o seu site.

Bom, citamos um pouco das vantagens e desvantagens que o *Server Side Rendering* nos oferece. Seguiremos para o próximo e último tipo abaixo.

## Server Side Rendering (SSR)

### Vantagens

- **`Ótimo em SEO`**.<br/>
Pois tudo é renderizado no lado do servidor. Quando o Google abre a página do site e ele recebe os dados, já tem tudo pronto ali pra ele. Consequentemente ele indexa muito melhor.

- **`Meta tags com previews mais adequados`**.<br/>
As meta tags já estão com os previews certo, pois como ele consegue fazer toda a parte descrita acima de pegar os dados como, título, descrição, imagens e tudo mais. Logo as meta tags estará correta de acordo com a aquela página em si.

- **`Melhor performance para o usuário`**.<br/>
Isso quer dizer que o conteúdo será visto mais rápido. Como já entregamos tudo pronto, pois foi renderizado tudo no servidor não terá demora.

- **`Menor processamento do lado do cliente`**.<br/>
Como assim? Como já foi dito acima que tudo é renderizado no servidor, o browser do cliente não terá esforços para exibir o conteúdo em tela. Assim ele tem uma vantagem para dispositivos mais fracos.

### Desvantagens

- **`TTFB (Time to first byte) maior`**.<br/>
Acontece que o servidor irá preparar tudo para antes para entregar todo o conteúdo. Então quando você acessa uma url do site por exemplo, terá todo o processo feito antes pelo servidor, para assim entregar o conteúdo.

- **`HTML maior`**.<br/>
Já que ele entrega todo o HTML montado, consequentemente será maior. Essa podemos também considerar como uma "vantagem" talvez.

- **`Reload completo nas mudanças de rota`**.<br/>
Toda vez que fazemos uma chamada, ele vai até o servidor e precisa recarregar para fazer a chamada. Da para disfarçarmos esse reload, criando uma situação com microinteração ou algo assim. Mais de qualquer forma ele precisa ir até o servidor para retornar o conteúdo.

Hoje a gente viu sobre os três tipos de aplicação e entendemos o fluxogramas, vantagens e desvantagens de cada um. Entendemos que o NextJS suporta o (SSG), (SSR) e também o (SPA). Essa é uma grande vantagens do NextJS.<br/>

Imagino que agora você está se perguntando:

## Quando posso utilizar um ou outro ?

Vamos lá, entenderemos quando utilizar cada um deles:

> **Static Site Generation (Gatsby, NextJS)**

- Quando a performance foi muito importante.

- Site simples sem muito interação do usuário.

- Se você é a única pessoa que publica conteúdo.

- Se você faz pouca atualização no site.

- Se o site é simples com poucas páginas.

**Exemplos:** Portifólios, Blogs e Landing Pages.

> **Single Page Application (SPA)**

- Quando não tem tanta necessidade de indexar informações no Google.

- Quando o usuário faz muitas interações na página.

- Quando se tem informações diferentes para cada usuário (Autenticação, por exemplo).

**Exemplos:** Facebook Web, Spotify Web, Twitter Web.

> **Server Side Rendering**

- Quando tem necessidades de um SPA, mais precisa de um loading mais rápido.

- Quando muda o conteúdo frequentemente.

- Quando trabalha com um número muito grande de páginas.

- Quando precisa de uma boa indexação no Google.

**Exemplos:** E-Commerce e Sites de Notícias.<br/><br/><br/>

Bom, chegamos ao fim de mais um post, finalizando essa segunda parte. Espero que vocês possam ter entendido o que é o NextJS e como ele funciona. Quais as diferenças dele para outros Frameworks existentes e também quais tipos utilizar de acordo com suas necessidades.

No próximo post iremos conhecer e entender um pouco sobre o **GraphQL**.

Até a próxima...