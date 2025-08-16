---
title: "Accountability e Transparência — O Direito a Explicações"
excerpt: "..."
date: "2020-10-21"
readTime: "3 min read"
tags: ["pt-br", "computational law"]
author: "Daniela Favero"
---

Quando se fala em transparência nos sistemas algorítmicos, a ideia parece sempre positiva. Mais transparência, mais clareza, mais confiança. Mas depois de mergulhar em alguns textos fundamentais sobre o tema, percebi que a questão é muito mais ambígua. A transparência pode ser libertadora, mas também pode ser limitada, distorcida e até usada como estratégia de poder.

![Diagrama mostrando uma caixa-preta recebendo um input e devolvendo um output, com a legenda "o comportamento interno do código é desconhecido".](/black-box.png)
*O algoritmo como caixa-preta: visível por fora, opaco por dentro*

## A promessa iluminista e seus limites

No artigo de **Ananny e Crawford**, a transparência aparece em sua origem histórica: fruto do Iluminismo, carregada da ideia de que ver é entender, de que a exposição da informação seria sempre libertadora. Só que essa noção romântica foi se multiplicando em diferentes formas: transparência “*fuzzy*” ou “clara”, *accountability* forte ou fraca, processos versus eventos, retrospectiva versus tempo real.

O ponto central é que não existe uma única transparência. E, mais importante ainda, nem sempre ela cumpre aquilo que promete. Ela pode gerar sobrecarga de informação, criar binários falsos, ameaçar a privacidade. Pode até reforçar modelos neoliberais e dar a sensação de que “abrir” é o suficiente, quando, na prática, não gera confiança nenhuma. Afinal, confiar é muito mais complexo do que simplesmente enxergar.

Essa leitura me fez perceber algo essencial: sozinha, a transparência não basta. É preciso falar também de responsabilidade.

## Transparência não é sinônimo de responsabilidade

![Fotografia de uma caixa transparente em formato de casa.](/transparent.jpg)
*Abrir a caixa-preta não garante que saibamos interpretá-la*

Foi aí que a discussão de *accountability* passou a fazer sentido para mim. O que importa não é apenas abrir o código ou mostrar os dados, mas assumir a responsabilidade pelo que esse código e esses dados produzem no mundo. Quem desenha sistemas algorítmicos precisa ser responsável pelas escolhas de design e pelos impactos sociais.

Essa responsabilidade se torna ainda mais clara quando olhamos para os diferentes tipos de opacidade descritos por **Jenna Burrell**:

- Opacidade intencional – quando empresas ou governos escondem informações deliberadamente.
- Opacidade técnica – quando falta conhecimento especializado para entender.
- Opacidade de escala – quando a complexidade do sistema cresce tanto que já não é interpretável.


Nos dois primeiros casos, as soluções são mais diretas: abrir o código (*open source*) e investir em educação. Concordo totalmente com **Burrell**: sistemas abertos não são menos seguros; pelo contrário, permitem identificar vulnerabilidades. E a alfabetização algorítmica deveria ser parte básica da formação cidadã.

O terceiro caso, o da escala, é o mais desafiador. Quanto mais dados entram, mais precisos os modelos se tornam, mas também mais incompreensíveis. **Burrell** sugere alternativas como parar de usar machine learning em contextos críticos (algo extremo) ou criar métricas de discriminação para medir impactos. Gosto dessa ideia de métricas: mesmo sem entender cada detalhe do modelo, é possível avaliar o que ele gera no mundo real. Mas sigo achando que, em sistemas que impactam vidas, a explicabilidade deveria ser obrigatória, ainda que isso custe mais em termos computacionais.

## Entre interpretabilidade e explicabilidade

Esse dilema aparece de novo no artigo de **Bibal e colegas**, que conecta o tema à legislação europeia. Eles diferenciam interpretabilidade (quando o modelo é por si só compreensível, como árvores de decisão) e explicabilidade (quando precisamos de ferramentas externas para traduzir um modelo “caixa-preta”).

O mais interessante é que a explicabilidade não é binária: existem níveis. Desde conhecer as features principais usadas numa decisão até ter a justificativa completa de como uma decisão foi tomada. Essa gradação deixa claro que, em alguns contextos — especialmente jurídicos e administrativos —, não basta que o algoritmo seja preciso. Ele precisa ser justificável, com base em fatos, artigos legais e argumentos compreensíveis.

## O passo adiante: responsabilidade social dos algoritmos

Por fim, o documento do **FAT-ML Working Group** amplia o debate para a prática. Ele propõe princípios como responsabilidade, explicabilidade, acurácia, auditabilidade e justiça. Mas a parte que mais me chamou atenção foi a proposta de um Social Impact Statement: uma espécie de relatório que deveria acompanhar cada sistema, avaliando seu impacto no design, antes e depois do lançamento.
A ideia me parece potente, quase como um relatório de impacto ambiental, mas aplicado ao digital. Se nos acostumamos a avaliar o impacto de grandes obras no meio ambiente, por que não avaliar o impacto social de algoritmos que tomam decisões sobre vidas humanas?

## Transparência como começo, não como fim

Depois de atravessar esses textos, fiquei com uma convicção: falar em transparência, sozinha, é insuficiente. Precisamos falar de responsabilidade, de explicabilidade, de justiça. Precisamos enxergar não só para dentro do sistema, mas através dele: entender como humanos e não-humanos se articulam, como decisões são produzidas e quem é afetado.

Os algoritmos não são neutros. Eles carregam escolhas, valores e consequências. Abrir a caixa-preta pode ser um começo, mas só faz sentido se vier acompanhado da disposição de assumir os impactos do que está lá dentro. Transparência é importante, mas responsabilidade é indispensável.


## Referências
- Ananny M and Crawford K, **Seeing without Knowing: Limitations of the Transparency Ideal and Its Application to Algorithmic Accountability.** New Media & Society. Disponível em: ["http://mike.ananny.org/papers/anannyCrawford_seeingWithoutKnowing_2016.pdf](http://mike.ananny.org/papers/anannyCrawford_seeingWithoutKnowing_2016.pdf)
- Burrell J., **How the machine “thinks”: Understanding opacity in machine learning algorithms.** Big Data & Society.
- Bibal A et al., **Legal Requirements on Explainability in Machine Learning.** Artificial Intelligence and Law. Disponível em: [https://link.springer.com/article/10.1007/s10506-020-09270-4](https://link.springer.com/article/10.1007/s10506-020-09270-4)
- AT-ML Working Group, **Principles for Accountable Algorithms and a Social Impact Statement for Algorithms.** Disponível em: [http://www.fatml.org/resources/principles-for-accountable-algorithms](http://www.fatml.org/resources/principles-for-accountable-algorithms)
