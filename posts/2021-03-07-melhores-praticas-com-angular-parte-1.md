---
title: Melhores práticas com Angular - Parte 1
description: Algumas dicas para escrever seu código melhor em Angular e também Javascript.
date: 2021-03-07 01:06:41
image: /assets/img/angular.png
category: angular
background: "#D6002F"
---
## Introdução

Independentemente com o que você está trabalhando, se você se preocupa com os detalhes, você está no caminho da perfeição, quer você alcance ou não.

Preparei algumas dicas/sugestões para você no Angular. Então chega de conversa fiada e vamos pro conteúdo.

## 1. Uso do NgIf

Todos nós utilizamos as diretiva estrutural que inclui condicionalmente um modelo com base de um valor booleano. Esta dica não é para melhorar o desempenho ou funcionalidade. Isso é tudo sobre a experiência do desenvolvedor.

```
isAnimalVisible = this.people?.id === this.people?.animal?.id;
```
 
```
// Condições vagas que precisam ser investigadas ❌

<div> *ngIf="people?.id === people?.animal?.id;"<br>
   Conteúdo à ser exibido...                       
</div>

// Você pode entender por nomenclatura e expressões mais simples ✅

<div> *ngIf="isAnimalVisible"
   Conteúdo à ser exibido...
</div>
```

Você pode ver a diferença de relance. Isso pode parecer trivial no início, mas quando as condições se complicam, é melhor encapsulá-las em uma variável com nomenclatura significativa.




---
layout: post
date: 2021-02-21 04:12:03
image: /assets/img/merge-array.png
title: Justando arrays e objetos com Spread syntax no JavaScript
description: Evite usar bibliotecas externas para coisas simples como fazer
  merge de objetos e arrays.
introduction: Evite usar bibliotecas externas para coisas simples como fazer
  merge de objetos e arrays.
twitter_text: Evite usar bibliotecas externas para coisas simples como fazer
  merge de objetos e arrays.
main-class: js
color: "#D6BA32"
tags:
  - dicas
categories:
  - Dicas rápidas
---
## Introdução

Fala pessoal, eu recentemente comecei uma [série de vídeos com dicas bem rápidas](https://www.youtube.com/watch?v=1dNNL95BsJE&list=PLlAbYrWSYTiOviR_zL01FMa-kWEMDIjeO) lá no meu canal do YouTube, mas como eu também gosto de texto e também quero facilitar a busca seja pelo Google ou pelo YouTube, vou portar os vídeos para cá também. Espero que dê certo =)

## Vídeo

<iframe width="560" height="315" src="https://www.youtube.com/embed/1Y8h-R-uymM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Utilizando o poder do ...Spread

Antigamente para fazer esse tipo de formatação nós precisávamos fazer algum método próprio ou cair em soluções como o [Lodash](https://lodash.com/docs/4.17.15#merge). Mas agora graças ao [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) nós conseguimos fazer isso de forma simples, somente utilizando o JS puro.

Vamos ver abaixo alguns exemplos na prática:

```javascript
const arrayOne = [1, 2, 3, 4]
const arrayTwo = [5, 6, 7, 8]

// juntando os arrays
const newArray = [...arrayOne, ...arrayTwo] // [1, 2, 3, 4, 5, 6, 7, 8]

// funciona com objetos também!
const props = { id: '1', name: 'Willian' }
const moreProps = { age: 30, height: 178 }

const newObj = { ...props, ...moreProps } // { id: '1', name: 'Willian', age: 30, height: 178 }

// E você também consegue sobrepôr valores
const defaultProps = { id: '1', name: 'Willian' }
const newProps = { id: '3', age: 30 }

// Chaves iguais são sobreescritas pelo último objeto passado
const propsObj = { ...defaultProps, ...newProps } // { id: '3', name: 'Willian', age: 30 }

```

## Conclusão

E aí, gostou da dica? Se curtiu, não deixa de se inscrever lá no [canal do YouTube](https://www.youtube.com/WillianJustenCursos/) para essa e mais outras dicas.