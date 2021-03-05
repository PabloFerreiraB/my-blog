---
title: Métodos de Arrays
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

## Método unshift()

O **unshift()** faz o contrário do que o **push()** faz, ele adiciona um elemento no início de um array:

```
const array = [casa, shopping, navio];
array.unshift('hospital');

// [hospital, casa, shopping, navio];
```

## Método slice()

O **slice()** extrai uma sessão de um array e retorna um novo array:

```
const array = [peixe, cachorro, gato, tigre];
array.slice(1, 3);

// [cachorro, gato];
```
Acima irá retornar o array com os elemento do 1 ao 3.
