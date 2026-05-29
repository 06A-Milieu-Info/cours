---
title: Fonctions conditionnelles et logiques
---

# Fonctions conditionnelles et logiques

## Exercice associé

<a href="./../../module-02/06-Fonctions%20conditionnelles%20et%20logiques.xlsx" target="_blank" rel="noopener">06 – Fonctions conditionnelles et logiques</a>

## Fonction SI
Permet de prendre une décision.

SI(condition; valeur_si_vrai; valeur_si_faux)

## Fonction ET
Vérifie que toutes les conditions sont vraies.

ET(condition1; condition2)

Dans un si: SI(ET(condition1; condition2); valeur_si_vrai; valeur_si_faux)

## Fonction SOMME.SI ou MOYENNE.SI
Additionne ou calcule une moyenne selon un critère.

SOMME.SI(plage; critere; plage_somme)

## SI ERREUR
Permet de gérer les erreurs dans les formules, comme la division par zéro.

```text
SIERREUR(valeur; valeur_si_erreur)
```

### Exemple pour la moyenne
Pour éviter l'erreur de division par zéro lors du calcul d'une moyenne :

```text
SIERREUR(MOYENNE(A1:A10); 0)
```
