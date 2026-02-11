---
title: RechercheV
---

# RechercheV

## Exercice associé

[08 – Recherche](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQAuQGQtIzGAQpyW-hccqJkUAUpVEuCiglNK9P1LmxkoQBE?e=0j7J5D)

⚠️ Ne travaillez pas dans la version Excel du navigateur Web.

**Veuillez télécharger une copie de chaque exercice.**
- Fichier --> Créer une copie --> Télécharger une copie

## Objectif
- Rechercher rapidement une information dans une liste ou un tableau.
- Éviter de faire des recherches manuelles ligne par ligne.
- Assurer la cohérence des données dans un classeur.

## Fonction RECHERCHEV
Syntaxe de base :

`=RECHERCHEV(valeur_recherchée; table_matrice; no_index_col; [valeur_proche])`

- `valeur_recherchée` : ce que vous cherchez (ex. un code, un nom).
- `table_matrice` : une plage de valeurs, en commençant par la colonne de recherche.
- `no_index_col` : numéro de la colonne à retourner dans le tableau (1 = première colonne, 2 = deuxième, etc.).
- `[valeur_proche]` : VRAI (approx.) ou FAUX (exact). Utiliser FAUX dans ce cours.

## Procédure (recherche exacte)
1. Placer le curseur dans la cellule où le résultat doit apparaître.
2. Taper `=RECHERCHEV(` ou utiliser l’outil d’insertion de fonctions.
3. Sélectionner la valeur recherchée (cellule à gauche ou au-dessus).
4. Sélectionner la plage de données complète (en fixant la plage avec les $ si nécessaire : `$A$2:$D$20`).
5. Indiquer le numéro de colonne à retourner (ex. 3 pour la 3e colonne).
6. Indiquer FAUX pour obtenir une correspondance exacte.
7. Valider avec Entrée, puis recopier la formule si nécessaire.

## Exemples

### Rechercher le prix d’un produit à partir de son code.

```text
=RECHERCHEV(F1; $A$1:$D$4; 4; FAUX)
```

Exemple de feuille Excel (produits) :

|   | A                                                | B            | C          | D                                                |
| - | ------------------------------------------------ | ------------ | ---------- | ------------------------------------------------ |
| 1 | <span class="bg-yellow-100">Code produit</span> | Nom          | Catégorie  | <span class="bg-yellow-100">Prix</span>         |
| 2 | <span class="bg-yellow-100">P001</span>         | Clavier      | Accessoire | <span class="bg-yellow-100">39,99</span>       |
| 3 | <span class="bg-yellow-100">P002</span>         | Souris       | Accessoire | <span class="bg-yellow-100">24,99</span>       |
| 4 | <span class="bg-yellow-100">P003</span>         | Écran 24"    | Écran      | <span class="bg-yellow-100">199,99</span>      |

Petit tableau de contexte (valeur entrée dans F1) :

|   | F                                             |
| - | --------------------------------------------- |
| 1 | <span class="bg-yellow-100">P002</span>        |

> Quel résultat sera retourné par la fonction RechercheV ci-haut?

<details>
<summary>Réponse</summary>
24.99$
</details>

::: warning Explication
La fonction cherche la valeur de `F1` (ici **P002**) dans la colonne **A**
et retourne le prix correspondant dans la colonne **D** (4<sup>e</sup> colonne de la plage).
:::

### Rechercher le nom d’un client à partir de son numéro.

```text
=RECHERCHEV(F10; $A$10:$D$13; 2; FAUX)
```

Exemple de feuille Excel (clients) :

|   | A                                                | B                                                  | C             | D     |
| - | ------------------------------------------------ | -------------------------------------------------- | ------------- | ----- |
| 10| <span class="bg-yellow-100">No client</span>    | <span class="bg-yellow-100">Nom complet</span>     | Ville         | Solde |
| 11| <span class="bg-yellow-100">1001</span>         | <span class="bg-yellow-100">Alex Tremblay</span>   | Québec        | 120,50|
| 12| <span class="bg-yellow-100">1002</span>         | <span class="bg-yellow-100">Samira Lévesque</span> | Montréal      | 89,00 |
| 13| <span class="bg-yellow-100">1003</span>         | <span class="bg-yellow-100">Hugo Gagnon</span>     | Trois-Rivières| 0,00 |

Petit tableau de contexte (valeur entrée dans F10) :

|   | F                                             |
| - | --------------------------------------------- |
|10 | <span class="bg-yellow-100">1002</span>       |

> Quel résultat sera retourné par la fonction RechercheV ci-haut?

<details>
<summary>Réponse</summary>
Samira Lévesque
</details>

::: warning Explication
La fonction cherche la valeur de `F10` (ici **1002**) dans la colonne **A**
et retourne le nom du client dans la colonne **B** (2<sup>e</sup> colonne de la plage).
:::

