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

Vamos ver abaixo um exemplo na prática:

```typescript
const isAnimalVisible = this.people?.id === this.people?.animal?.id;
```
 
```html
// Condições vagas que precisam ser investigadas ❌

<div *ngIf="people?.id === people?.animal?.id">
   Conteúdo à ser exibido...                       
</div>

// Você pode entender por nomenclatura e expressões mais simples ✅

<div *ngIf="isAnimalVisible">
   Conteúdo à ser exibido...
</div>
```

Você pode ver a diferença de relance. Isso pode parecer trivial no início, mas quando as condições se complicam, é melhor encapsulá-las em uma variável com nomenclatura significativa.
