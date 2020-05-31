---
title: Finalmente meu blog está no ar.
description: Nesse meu primeiro artigo não poderia falar de outra coisa a não
  ser sobre o meu novo site. Falarei um pouco das novas tecnologias que utilizei
  para a criação do mesmo, espero que gostem.
date: 2020-05-30T10:33:33.000Z
thumbnail: /assets/img/favicon.png
category: dev
background: "#617222"
---
## Introdução

Sempre quis ter um blog pessoal, ao decorrer do tempo li diversos artigos em blogs de tanta gente e sempre achei o máximo. Então finalmente parei de só querer e resolvi ir atrás para criar o meu próprio blog.

No dia 26 de novembro de 2019 estava procurando mais um curso na plataforma da [Udemy](https://www.udemy.com/) quando encontrei o [curso](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/) do **Willian Justen**, lembro que estava entre os mais votados, de cara não conhecia quase nada do que o curso apresentava, mais fui e comprei mesmo assim, ainda bem 😜

Nessa época não achei melhor não começar o curso, pois estava vendo um outro e estava focado nele, após quase 2 meses, finalmente comecei o curso mencionado acima e logo nas primeiras aulas gostei tanto que me arrependi de não ter iniciado antes.

## Mais então, quais tecnologias foram usadas para construir esse blog ?

* [Gatsby](https://www.gatsbyjs.org/)
* [Gatsby Image](https://www.gatsbyjs.org/packages/gatsby-image/) [](https://www.gatsbyjs.org/packages/gatsby-image/)
* [GraphQL](https://graphql.org/)[](https://www.styled-components.com/)
* [Styled Components](https://www.styled-components.com/)
* [Styled Icons](https://styled-icons.js.org/)
* [Algolia](https://www.algolia.com/products/instantsearch/)
* [Netlify](https://www.netlify.com/) e [Netlify CMS](https://www.netlifycms.org/)

## O que é Gatsby?

O Gatsby é um SSG (Server Site Generator) open-source baseado em React, onde utiliza o [GraphQL](https://graphql.org/) para consumir conteúdos. Ele possui as funcionalidades do React e várias outras mais que facilitam para criação de sites e aplicações web. Gatsby é um framework bem poderoso, e te permite ter o desenvolvimento com alta performance e rapidez. 

Achei bem legal no Gatsby é que desenvolvemos em React e no build é gerado arquivos estáticos auxiliando no SEO da aplicação, além de ter vários [plugins](https://www.gatsbyjs.org/plugins) que nos ajuda muito, sua [documentação oficial](https://www.gatsbyjs.org/docs/) é realmente muito boa também.

## Gatsby Image

É um componente React, a consulta de imagens com o GraphQL permite acessar os dados da imagem e realizar transformações com a [Sharp](https://github.com/lovell/sharp), uma biblioteca de processamento de imagens de alto desempenho.

## GraphQL

GraphQL é uma linguagem de consulta que foi criada pelo Facebook. É utilizado para consulta e manipulação de APIs Web possuindo por exemplo [queries e mutations](https://graphql.org/learn/queries/).

## Styled Components

É uma biblioteca para React e React Native que permite que você use estilos de CSS ao nível de componente na sua aplicação, mistura de JavaScript com CSS, caso não conheça nada sobre ele aconselho dar uma olhada na [documentação oficial](https://styled-components.com/).  Juntamente com o styled components utilizei o [styled-media-query](https://github.com/morajabi/styled-media-query) para poder criar os estilos de acordo com cada media query do blog.

## Styled Icons

Ícones em pacotes ou individualmente são facilmente importados para seu site. É recomendável importar ícones individualmente usando o ES modules, para saber mais pode consultar a [documentação oficial.](https://styled-icons.js.org/)

## Algolia

Utilizei o [Algolia](https://www.algolia.com/) para o sistema de busca do blog, ele simplesmente é fantástico. Seu sistema de busca é bem poderoso e permite buscar por conteúdos dentro dos posts, por sinônimos e também tem um "typo correction", caso a pessoa erre alguma letra mesmo assim ele buscará pela palavra correta. Demais né ?

## Netlify e Netlify CMS

**Netlify** - O Netlify cria, implanta e hospeda sites ou aplicativos estáticos, oferece serviços extraordinários para hospedarmos nossos projetos, bem fácil de mexer e com várias coisas que ajuda bastante. Se não conhece corre lá no [site](https://www.netlify.com/) deles e conheça, te garanto que irá gostar.

**Netlify CMS** - O Netlify tem também um CMS próprio, que é bem fácil de integrar com outras plataformas e muito simples de usar. Com ele consegui adicionar um CMS para meu blog sem muito esforço.

## Conclusão

Então por hoje é só, gostaria de agradecer ao Willian Justen por toda ajuda que me deu ao longo do curso, tirando todas minhas dúvidas e mostrando diversas vezes meus erros quando enroscava em uma parte rsrs.\
\
Os tópicos que abordei foi um resumo bem simples de cada tecnologia, mais espero que tenham gostado e que seja útil para vocês de alguma forma.\
\
Até a próxima 😜