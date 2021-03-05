---
title: "JavaScript: métodos de Arrays"
description: Neste post vamos aprender como usar alguns métodos de array no Javascript.
date: 2021-03-05 05:55:35
image: /assets/img/javascript_array_methods.jpeg
category: js
background: "#EFD81D"
---
## Método push()

O **push()** serve para adicionarmos elementos no final do array:

```
const array = ['vermelho', 'azul', 'amarelo', 'cinza'];
array.push('preto');

// ['vermelho', 'azul', 'amarelo', 'cinza', 'preto'];
```

## Método pop()

O **pop()** remove o último elemento de um array:

```
const array = [10, 20, 30, 40, 50];
array.pop();

// [10, 20, 30, 40];
```