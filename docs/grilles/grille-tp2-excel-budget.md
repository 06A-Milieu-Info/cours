---
title: "Grille d’évaluation — TP2"
description: "Grille critériée — Outil de budget mensuel (Excel)"
aside: true
---

# Grille d’évaluation — TP2  
**Outil de budget mensuel (Excel)**

> **Échelle descriptive (A–E)**  
> **A = 100 %** · **B = 80 %** · **C = 60 %** · **D = 40 %** · **E = 0 %**

---

## 1) Gabarit — Formules et robustesse (20 %)

**Tests fonctionnels**
- Les cellules jaunes contiennent des **formules** (aucun calcul manuel)
- Les totaux (revenus, dépenses fixes) affichent **0,00 $** lorsque vides
- Aucune erreur Excel (`#DIV/0!`, `#N/A`, etc.)
- Format monétaire appliqué aux cellules d’argent principales

| Niveau | Description | Note |
|------|-------------|------|
| **A** | Toutes les formules sont présentes, robustes et sans erreur. | 100 % |
| **B** | Fonctionnement correct avec de légers détails mineurs. | 80 % |
| **C** | Fonctionnement partiel, quelques erreurs ou fragilités. | 60 % |
| **D** | Plusieurs erreurs ou formules manquantes. | 40 % |
| **E** | Gabarit non fonctionnel ou calculs manuels. | 0 % |

---

## 2) Dates du mois, budget mensuel et budget journalier (15 %)

**Tests fonctionnels**
- Les dates **Du** et **Au** s’ajustent automatiquement selon le mois affiché
- Le **budget mensuel** est calculé par formule (revenus − dépenses fixes)
- Le **budget journalier** est calculé par formule (budget mensuel ÷ nombre de jours du mois)
- Test rapide : changer le mois → dates et budgets se recalculent

| Niveau | Description | Note |
|------|-------------|------|
| **A** | Dates et budgets automatisés et correctement recalculés. | 100 % |
| **B** | Calculs automatisés avec légères imperfections. | 80 % |
| **C** | Calculs corrects pour le mois affiché, adaptation limitée. | 60 % |
| **D** | Calculs partiellement incorrects ou partiellement manuels. | 40 % |
| **E** | Dates ou budgets incorrects ou absents. | 0 % |

---

## 3) Catégories et liste déroulante (validation de données) (10 %)

**Tests fonctionnels**
- La table des catégories est remplie (budgets mensuels)
- La colonne **Catégorie** utilise une **liste déroulante**
- Les choix correspondent aux catégories définies

| Niveau | Description | Note |
|------|-------------|------|
| **A** | Liste déroulante complète et correctement liée aux catégories. | 100 % |
| **B** | Liste fonctionnelle avec détails mineurs. | 80 % |
| **C** | Liste partielle ou liaison imparfaite. | 60 % |
| **D** | Liste peu fonctionnelle ou incohérente. | 40 % |
| **E** | Absence de liste déroulante fonctionnelle. | 0 % |

---

## 4) Statistiques et mise en forme conditionnelle (15 %)

**Tests fonctionnels**
- Statistiques calculées à partir de la liste de dépenses :
  - moyenne
  - plus grosse dépense
  - plus petite dépense
  - total des dépenses
- Mise en forme conditionnelle sur le **total des dépenses** :
  - rouge si le total dépasse le budget mensuel
  - vert si le total est inférieur ou égal au budget mensuel
- Test rapide : modifier une dépense → la couleur s’ajuste

| Niveau | Description | Note |
|------|-------------|------|
| **A** | Statistiques exactes et mise en forme conditionnelle fonctionnelle. | 100 % |
| **B** | Statistiques exactes avec légers écarts de présentation. | 80 % |
| **C** | Statistiques partiellement exactes ou mise en forme imparfaite. | 60 % |
| **D** | Plusieurs statistiques incorrectes ou mise en forme absente. | 40 % |
| **E** | Statistiques absentes ou non fonctionnelles. | 0 % |

---

## 5) Données saisies — Cohérence et variété (10 %)

**Tests fonctionnels**
- La feuille de travail est une **copie du gabarit**
- Des données sont saisies (revenus, dépenses fixes, dépenses)
- Plusieurs catégories sont utilisées
- Il peut y avoir plusieurs dépenses pour une même date

| Niveau | Description | Note |
|------|-------------|------|
| **A** | Données complètes, variées et cohérentes. | 100 % |
| **B** | Données adéquates avec légère répétition ou manque de variété. | 80 % |
| **C** | Données présentes mais peu exploitables. | 60 % |
| **D** | Données incomplètes ou incohérentes. | 40 % |
| **E** | Données absentes ou feuille incorrecte. | 0 % |

---

## 6) TCD — Dépenses par jour et mise en forme conditionnelle (15 %)

**Tests fonctionnels**
- Feuille dédiée correctement nommée
- TCD :
  - lignes : Date
  - valeurs : Somme de Dépense
- Mise en forme conditionnelle :
  - la ligne devient rouge si la somme de dépenses d’une date dépasse le budget journalier
- Test rapide : modifier une dépense → la ligne réagit

| Niveau | Description | Note |
|------|-------------|------|
| **A** | TCD correct et mise en forme conditionnelle fonctionnelle. | 100 % |
| **B** | TCD correct avec mise en forme partielle ou imparfaite. | 80 % |
| **C** | TCD correct sans mise en forme fonctionnelle. | 60 % |
| **D** | TCD partiellement correct ou mal structuré. | 40 % |
| **E** | TCD absent ou non fonctionnel. | 0 % |

---

## 7) TCD — Dépenses par catégorie, graphique et impression (15 %)

**Tests fonctionnels**
- Feuille dédiée correctement nommée
- TCD :
  - lignes : Catégorie
  - valeurs : Somme de Dépense
- Graphique circulaire :
  - titre explicite
  - valeurs affichées
- Mise en page :
  - TCD et graphique tiennent sur une page, en mode portrait

| Niveau | Description | Note |
|------|-------------|------|
| **A** | TCD et graphique complets, lisibles et prêts à l’impression. | 100 % |
| **B** | TCD et graphique corrects avec ajustements mineurs. | 80 % |
| **C** | TCD correct, graphique ou mise en page partielle. | 60 % |
| **D** | TCD ou graphique incomplet ou peu lisible. | 40 % |
| **E** | TCD et graphique absents ou non fonctionnels. | 0 % |

---

## Respect des consignes et modalités de remise (pénalité)

**Tests fonctionnels**
- Fichier au format **.xlsx**
- **Exactement 4 feuilles**
- Noms des feuilles conformes aux consignes

| Situation observée | Pénalité appliquée |
|-------------------|-------------------|
| Toutes les consignes sont respectées | **0 %** |
| Oublis mineurs ou incohérences | **−5 %** |
| Non-respect important des consignes | **−10 %** |

---

## Retard dans la remise (pénalité)

| Retard observé | Pénalité appliquée |
|---------------|-------------------|
| ≤ 24 h | **−10 %** |
| ≤ 48 h | **−20 %** |
| ≤ 72 h | **−30 %** |
| Plus de 72 h | **Travail refusé** |

::: warning
La pénalité pour retard s’applique **après** l’évaluation des critères et **s’additionne**, s’il y a lieu, à la pénalité pour non-respect des consignes.
:::
