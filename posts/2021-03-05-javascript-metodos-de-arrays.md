---
title: Métodos de Arrays no Javascript
description: Neste post vamos aprender como usar alguns métodos de array no Javascript.
date: 2021-03-05 05:55:35
image: /assets/img/javascript_array_methods.jpeg
category: javascript
background: "#334444"
---
## Método push()

O **push()** serve para adicionarmos elementos no final do array:

```javascript
const array = ['vermelho', 'azul', 'amarelo', 'cinza'];
array.push('preto');

// ['vermelho', 'azul', 'amarelo', 'cinza', 'preto'];
```


## Método map()

O **map()** invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

```javascript
const array = [10, 20, 30, 40, 50];
.map(item => item * 2);

//  [20, 40, 60, 80, 100];
```


## Método pop()

O **pop()** remove o último elemento de um array:

```javascript
const array = [10, 20, 30, 40, 50];
array.pop();

// [10, 20, 30, 40];
```


## Método unshift()

O **unshift()** faz o contrário do que o **push()** faz, ele adiciona um elemento no início de um array:

```javascript
const array = [casa, shopping, navio];
array.unshift('hospital');

// [hospital, casa, shopping, navio];
```


## Método slice()

O **slice()** extrai uma sessão de um array e retorna um novo array:

```javascript
const array = [peixe, cachorro, gato, tigre];
array.slice(1, 3);

// [cachorro, gato];
```
Acima irá retornar o array com os elemento do 1 ao 3.



## Método join()

O **join()** junta vários elementos de um array, tornando-os em uma string.

```javascript
const array = [1, 2, 3, 4, 5, 6];
array.join('-');

// [1-2-3-4-5-6];
```
Acima irá retornar o array com os elemento separados com um **traço**, assim como determinei com o método join().


## Método splice()

Com o **splice()** podemos definir um índice inicial e final para substituirmos valores entre eles:

```javascript
const array = [10, 25, 50, 42, 15];
array.splice(1, 2, '200');

// [10, 200, 42, 15];
```


## Método split()

O **split()** divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.

```javascript
const myString = 'Olá mundo. Como você está ?';
myString.split(' ', 3);

// ['Olá', 'mundo', 'Como'];
```
No exemplo acima, o split() procura por 0 ou mais espaços em uma string e retorna as 3 primeiras divisões que encontrar.



## Método reverse()

O **reverse()** inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.

```javascript
const array = [1, 2, 3, 4, 5, 6];
array.reverse();

// [6, 5, 4, 3, 2, 1];
```


## Método filter()

O **filter()** cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```javascript
const array = [3, 5, 20, 35, 50].filter((item) => item >= 20);

// [20, 35, 50];
```
Nesse exemplo, eu filtrei o array informando que queria de retorno apenas os items que fosse maior ou igual a 20.



## Conclusão

E por hoje é só, foram apenas alguns métodos dentre tantos outros que temos no Javascript. Na próxima parte irei abordar outros bem legais também, só que iremos aprofundar mais em cenários pouco mais complexos.

Espero que tenham gostado, até a próxima! 