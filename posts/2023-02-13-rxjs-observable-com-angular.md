---
title: RxJS Observable com Angular
description: Você já trabalhou com fluxos de dados em aplicações reativas? Então
  você deve conhecer os Observables. Eles são um padrão de programação que
  permite representar um fluxo de dados ao longo do tempo.
date: 2023-02-13 11:45:46
image: /assets/img/observable.png
category: Angular
background: "#D6002F"
---
![RxJS Observable](/assets/img/rxjs-observable.png "RxJS Observable")

## \
\
Existem dois tipos de Observables: **Unicast** e **Multicast**.

* ***Observáveis Unicast***: Esses observáveis têm uma relação um-para-um entre o observável e seus assinantes. Cada assinante tem sua própria execução independente do observável. Isso significa que, se houver múltiplos assinantes de um observável unicast, cada assinante receberá sua própria corrente independente de valores.
* ***Observáveis Multicast***: Esses observáveis têm uma relação um-para-muitos entre o observável e seus assinantes. Eles permitem que múltiplos assinantes compartilhem uma única execução do observável. Isso significa que, se houver múltiplos assinantes de um observável multicast, todos os assinantes receberão a mesma corrente de valores.

Em outras palavras, quando um valor é emitido por um observável multicast, todos os assinantes receberão o mesmo valor, enquanto se o mesmo valor for emitido por um observável unicast, cada assinante receberá uma cópia separada do valor.

Existem algumas maneiras diferentes de criar um observável multicast, como usando o operador `share` ou a classe `Subject` no RxJS. Observáveis multicast podem ser úteis em situações em que você deseja compartilhar uma única corrente de valores entre múltiplos assinantes, por exemplo, ao trabalhar com dados em tempo real ou grandes conjuntos de dados.

## C﻿onclusão

Saber a diferença entre esses dois tipos de Observables é fundamental para escolher o mais adequado para cada situação e garantir a eficiência e escalabilidade da sua aplicação. Em geral, os observáveis unicast são mais simples e fáceis de entender, mas os observáveis multicast oferecem opções mais poderosas e flexíveis para trabalhar com correntes de dados.