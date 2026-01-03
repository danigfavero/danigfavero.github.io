---
title: "Accountability e Transparência — O Direito a Explicações"
excerpt: "Quando se fala em transparência nos sistemas algorítmicos, a ideia costuma parecer imediatamente positiva..."
date: "2020-10-21"
readTime: "4 min read"
tags: ["pt-br", "computational law"]
author: "Daniela Favero"
---

Quando se fala em transparência nos sistemas algorítmicos, a ideia costuma parecer imediatamente positiva: com mais transparência e clareza, dá a impressão de que a consequência direta é mais confiança. Mas, depois de mergulhar em alguns textos fundamentais sobre o tema, percebi que a questão é bem mais ambígua. A transparência pode, sim, ter um efeito emancipador, mas também pode ser limitada, distorcida e até instrumentalizada como estratégia de poder.

![Diagrama mostrando uma caixa-preta recebendo um input e devolvendo um output, com a legenda "o comportamento interno do código é desconhecido".](/black-box.png)
*O algoritmo como caixa-preta: visível por fora, opaco por dentro*

## A promessa iluminista e seus limites

No artigo de *Ananny e Crawford*, a transparência aparece em sua origem histórica como um ideal herdado do Iluminismo, baseado na premissa de que ver é entender e de que a exposição da informação seria, por si só, libertadora. Com o tempo, porém, essa noção foi sendo tensionada pela prática e acabou se tornando mais complexa. Em vez de um conceito único, passaram a surgir diferentes classificações, como transparência “*fuzzy*” ou “clara”, *accountability* forte ou fraca, além de distinções entre processos e eventos, ou entre transparência retrospectiva e em tempo real.

O ponto central é que não existe uma única transparência. Mais do que isso, ela nem sempre cumpre aquilo que promete. Dependendo de como é implementada, pode gerar sobrecarga de informação, criar binários artificiais ou ameaçar a privacidade. Em alguns casos, pode até reforçar modelos neoliberais, ao produzir a sensação de que “abrir” sistemas é suficiente, quando, na prática, isso não resulta em relações mais confiáveis. Tornar informações visíveis, por si só, não garante confiança, que depende de interpretação, contexto e das relações de poder envolvidas.

Essa leitura me levou a uma conclusão importante: isoladamente, a transparência não é suficiente. É necessário falar também de responsabilidade.

## Transparência não é sinônimo de responsabilidade

![Fotografia de uma caixa transparente em formato de casa.](/transparent.jpg)
*Abrir a caixa-preta não garante que saibamos interpretá-la*

Foi nesse ponto que a discussão sobre *accountability* passou a fazer mais sentido para mim. O que importa não é apenas abrir o código ou tornar dados acessíveis, mas assumir a responsabilidade pelo que esse código e esses dados produzem no mundo. Quem desenha sistemas algorítmicos acaba sendo responsável pelas escolhas de *design* feitas ao longo desse processo e pelos impactos sociais que essas escolhas geram, ainda que essa responsabilidade nem sempre seja explicitada.

*Jenna Burrell*, em seu artigo “*How the machine ‘thinks’: Understanding opacity in machine learning algorithms*”, descreve três tipos de opacidade que podem persistir mesmo em sistemas apresentados como transparentes: a opacidade intencional, quando informações são deliberadamente ocultadas; a opacidade técnica, quando falta conhecimento especializado para compreender o sistema; e a opacidade de escala, quando a complexidade cresce a ponto de inviabilizar a interpretação.

Nos dois primeiros casos, as soluções parecem mais diretas: abrir o código (*open source*) e investir em educação. Existe uma preocupação recorrente de que a abertura de sistemas aumentaria sua vulnerabilidade, partindo da ideia de que segurança depende do sigilo do código. No entanto, como aponta *Burrell*, essa lógica é frágil: vulnerabilidades existem independentemente de o sistema ser aberto ou fechado, e a abertura permite auditoria, escrutínio técnico e correções mais rápidas. Nesse sentido, transparência técnica só faz sentido quando acompanhada de alfabetização algorítmica, para que diferentes atores possam, de fato, interpretar, questionar e avaliar esses sistemas.

O terceiro caso, o da escala, é o mais desafiador. À medida que mais dados são incorporados, os modelos tendem a se tornar mais precisos, mas também mais difíceis de compreender. *Burrell* sugere alternativas que vão desde a limitação do uso de *machine learning* em contextos críticos até a criação de métricas de discriminação para avaliar impactos. A ideia de métricas me parece particularmente interessante: mesmo sem compreender cada detalhe do modelo, é possível avaliar seus efeitos no mundo real. Ainda assim, sigo achando que, em sistemas que impactam diretamente a vida das pessoas, algum grau de explicabilidade deveria ser obrigatório, mesmo que isso implique custos computacionais maiores.

## Entre interpretabilidade e explicabilidade

Essa discussão aparece novamente no artigo de *Bibal e colegas*, que relaciona o tema à legislação europeia. Os autores diferenciam interpretabilidade — quando o próprio modelo é compreensível, como no caso de árvores de decisão — e explicabilidade, que envolve o uso de ferramentas externas para traduzir modelos do tipo “caixa-preta”.

Nesse trabalho, a explicabilidade não é tratada como um atributo binário, mas como um espectro. Os níveis vão desde a identificação das *features* mais relevantes até a justificativa completa de uma decisão específica. Essa gradação deixa claro que, em determinados contextos, especialmente jurídicos e administrativos, não basta que o algoritmo seja preciso. Ele precisa ser justificável com base em fatos, normas legais e argumentos compreensíveis para os afetados por suas decisões.

## O passo adiante: responsabilidade social dos algoritmos

O documento do *FAT-ML Working Group* leva esse debate para um plano mais prático, ao propor princípios como responsabilidade, explicabilidade, acurácia, auditabilidade e justiça. O ponto que mais me chamou atenção foi a proposta de um *Social Impact Statement*: um relatório que acompanharia cada sistema algorítmico, avaliando seus impactos desde o design até depois do lançamento.

A ideia lembra relatórios de impacto ambiental, mas aplicados ao contexto digital. Se já consideramos natural avaliar os efeitos sociais e ambientais de grandes obras de infraestrutura, faz sentido questionar por que sistemas algorítmicos, que também tomam decisões relevantes sobre vidas humanas, muitas vezes escapam desse tipo de escrutínio.

## Transparência como começo, não como fim

Depois de atravessar esses textos, fiquei com a convicção de que tratar a transparência como um fim em si mesmo é insuficiente. Sem mecanismos claros de responsabilidade, explicabilidade e avaliação de impactos, a simples abertura de sistemas corre o risco de se tornar apenas simbólica. Mais do que olhar para dentro dos modelos, é necessário entender como eles operam em contextos sociais específicos, como decisões são distribuídas entre humanos e sistemas técnicos, e quem arca com as consequências dessas decisões.

Algoritmos incorporam escolhas feitas ao longo de seu desenvolvimento e implantação, e essas escolhas produzem efeitos concretos. Abrir a caixa-preta pode ser um passo importante, mas só ganha sentido quando há estruturas institucionais capazes de responder por esses efeitos, questioná-los e, quando necessário, revisá-los. Nesse cenário, a transparência deixa de ser um objetivo isolado e passa a funcionar como parte de um arranjo mais amplo de responsabilização.

## Referências
- Ananny M and Crawford K, **Seeing without Knowing: Limitations of the Transparency Ideal and Its Application to Algorithmic Accountability.** New Media & Society. Disponível em: ["http://mike.ananny.org/papers/anannyCrawford_seeingWithoutKnowing_2016.pdf](http://mike.ananny.org/papers/anannyCrawford_seeingWithoutKnowing_2016.pdf)
- Burrell J., **How the machine “thinks”: Understanding opacity in machine learning algorithms.** Big Data & Society.
- Bibal A et al., **Legal Requirements on Explainability in Machine Learning.** Artificial Intelligence and Law. Disponível em: [https://link.springer.com/article/10.1007/s10506-020-09270-4](https://link.springer.com/article/10.1007/s10506-020-09270-4)
- AT-ML Working Group, **Principles for Accountable Algorithms and a Social Impact Statement for Algorithms.** Disponível em: [http://www.fatml.org/resources/principles-for-accountable-algorithms](http://www.fatml.org/resources/principles-for-accountable-algorithms)

