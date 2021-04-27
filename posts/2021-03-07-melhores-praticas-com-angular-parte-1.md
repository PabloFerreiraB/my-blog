---
title: Melhores práticas com Angular - Parte 1
description: Algumas dicas para escrever seu código melhor em Angular e também Javascript.
date: 2021-03-07 01:06:41
image: /assets/img/angular.png
category: angular
background: "#334444"
---
## Introdução

Independentemente com o que você está trabalhando, se você se preocupa com os detalhes, você está no caminho da perfeição, quer você alcance ou não.\
\
O Angular é considerado uma das estruturas JavaScript mais proeminentes para o desenvolvimento de aplicativos da web. A estrutura é desenvolvida pelos engenheiros do Google e mantida pelo próprio Google.

Portanto, não há dúvidas sobre sua popularidade. Tenho trabalhado em algumas aplicações angulares de grande escala e, devido a isso, tive a chance de explorar mais. Mergulhar no Angular me ajudou a obter algumas dicas e truques novos para aprimorar minhas habilidades com o desenvolvimento.

Ao longo do desenvolvimento obtive algumas novas práticas com Angular, que ajudam a escrever código limpo, manter o padrão de codificação e desempenho.

Preparei algumas dicas/sugestões para você. Então chega de conversa fiada e vamos pro conteúdo.

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

## 2. **Evite vazamentos de memória em Observables**

Vazamentos de memória observáveis ​​são muito comuns e encontrados em todas as linguagens de programação, biblioteca ou estrutura. Observables no Angular são muito úteis porque otimizam seus dados, mas o vazamento de memória é um dos problemas muito sérios que podem ocorrer se você não estiver focado.

Seguem algumas dicas para evitar os vazamentos.

### Usando ‘async pipe’:

Você pode utilizar observáveis ​​assinados ou usar ' `async pipe`' e promessa na view. Você deve evitar inscrever observables ​​no componente e vinculá-lo à view. Portanto, o resultado final é que, se não houver uma técnica correta, os vazamentos de memória podem ocorrer.

```html
<ul>
  <li *ngFor="let item of collection;">{{item.id}}</li>
</ul>
```

### Usando ‘take(1)’:

É um operador que completa a emissão tomando seu valor e permite que ‘take(1)’ não se inscreva quando um novo valor é encontrado. Isso garantirá que você obtenha os dados apenas uma vez. Esteja seguro com o ‘take(1)’ e evite vazamentos de memória facilmente. Exemplo:

```typescript
data$.pipe(take(1)).subscribe((res)=> console.log(res))
```

Para maiores informações segue a [documentação](https://www.learnrxjs.io/learn-rxjs/operators/filtering/take)

## 3. **Use trackBy junto com *ngFor**

Ao usar ngFor para fazer um loop em uma matriz em templates, use-o com uma função trackBy que retornará um identificador exclusivo para cada item do DOM.

Quando um array muda, o Angular renderiza novamente toda a árvore DOM. Mas quando você usa trackBy, o Angular saberá qual elemento foi alterado e fará alterações no DOM apenas para esse elemento.

```html
<ul>
  <li *ngFor="let item of itemList;">{{item.id}}</li>
</ul>
```

No exemplo acima, está sem a função trackBy e cada vez que as alterações ocorrerem, toda a árvore DOM será renderizada novamente.

### Usando a função trackBy

```html
<ul>
  <li li *ngFor="let item of itemList; trackBy: trackByFn">{{item.id}}</li>
</ul>
```
```typescript
export class MyApp {

    getItems() { // load more items }

    trackByFn(index, item) {
        return index; // or item.id
    }
}
```

## 4. **Divida sua aplicação em pequenos componentes reutilizáveis**.

Isso pode ser o princípio de responsabilidade única. Componentes grandes são muito difíceis de depurar, gerenciar e testar. Se o componente se tornar grande, divida-o em componentes menores mais reutilizáveis ​​para reduzir a duplicação do código, para que possamos gerenciar, manter e depurar facilmente com menos esforço.

![Static Site](/assets/img/Diagram.png "Diagram")