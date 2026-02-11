---
title: Tableaux croisés dynamiques
---

# Tableaux croisés dynamiques

## Exercice associé

[11 – Tableaux croisés dynamiques](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQDn0qZv6FmVSp3woKi1POtxAWXEnHhU7xkTgiR1J-hHdkU?e=ZKaWnL)

⚠️ Ne travaillez pas dans la version Excel du navigateur Web.

**Veuillez télécharger une copie de chaque exercice.**
- Fichier --> Créer une copie --> Télécharger une copie

## Objectif
- Créer un tableau croisé dynamique pour synthétiser rapidement de grandes quantités de données
- Restructurer les données selon différentes dimensions (lignes, colonnes, filtres)
- Calculer des totaux, moyennes et comptes sans écrire de formules
- Analyser les données selon plusieurs critères simultanément

## Concepts clés

### Qu'est-ce qu'un tableau croisé dynamique ?
Un tableau croisé dynamique est un outil qui **résume et réorganise** les données d'une liste pour en faciliter l'analyse.

**Avantages :**
- Synthèse immédiate de gros volumes de données
- Permet de croiser plusieurs dimensions (ex. : Produits × Mois × Régions)
- Mise à jour automatique si les données changent
- Pas besoin de formules complexes

### Règle d'or
⚠️ **Les données doivent être propres et bien structurées** :
- Pas de cellules fusionnées
- Pas de lignes/colonnes vides au milieu
- En-têtes dans la première ligne
- Pas de totaux préexistants

## Créer un tableau croisé dynamique

### Où est le bouton ?
- Onglet **Insertion** du ruban
- Groupe **Tableaux**
- Bouton **Tableau croisé dynamique** (ou **Pivot Table**)

### Procédure
1. Sélectionner **toute la plage de données** (y compris les en-têtes)
2. Aller dans **Insertion** > **Tableau croisé dynamique**
3. Vérifier que la plage est correcte
4. Choisir où placer le tableau croisé :
   - **Nouvelle feuille** (recommandé) ou
   - **Feuille existante** (indiquer une cellule)
5. Cliquer sur **Créer**
6. Une nouvelle interface apparaît avec des **champs** à glisser

### Configuration des zones

Un tableau croisé dynamique a 4 zones principales :

- **Filtres** : filtrer les données selon un critère (ex. : par région)
- **Colonnes** : les champs qui seront en en-têtes de colonnes (ex. : les mois)
- **Lignes** : les champs qui seront en en-têtes de lignes (ex. : les produits)
- **Valeurs** : ce qu'on veut calculer (totaux, moyennes, comptes, etc.)

### Exemple : analyser les ventes par produit et mois
**Données source :**
- Colonnes : Produit, Mois, Région, Quantité vendue

**Configuration du tableau croisé :**
- **Lignes** : Produit
- **Colonnes** : Mois
- **Valeurs** : Somme de Quantité vendue
- **Filtres** : Région (optionnel, pour filtrer par région)

**Résultat :** un tableau qui montre les ventes de chaque produit par mois, avec les totaux.

## Modifier le tableau croisé dynamique

### Changer l'ordre des champs
- Glisser-déposer un champ d'une zone à l'autre dans le volet **Champs du tableau croisé**

### Ajouter un filtre
- Glisser un champ vers la zone **Filtres**
- Utiliser la liste déroulante qui apparaît en haut du tableau croisé

### Modifier le calcul
1. Double-cliquer sur un champ dans la zone **Valeurs**
2. Choisir l'agrégation :
   - **Somme** : addition
   - **Moyenne** : moyenne
   - **Compte** : nombre de cellules
   - **Min/Max** : valeur minimale/maximale
   - Etc.

### Rafraîchir les données
- Cliquer sur le tableau croisé
- **Données** > **Actualiser**
- Les modifications apportées aux données sources seront reflétées

## Exercice : Analyser les ventes d'une boutique

### Situation
Vous disposez d'une liste de ventes avec les colonnes suivantes :
- **Date** : date de la vente
- **Produit** : nom du produit vendu
- **Catégorie** : type de produit (Électronique, Vêtements, Accessoires)
- **Quantité** : nombre d'articles vendus
- **Prix_unitaire** : prix par article
- **Montant** : montant total de la vente (Quantité × Prix_unitaire)
- **Vendeur** : nom du vendeur

### Instructions pour Excel

**À coller dans une cellule de votre classeur :**

```
EXERCICE - TABLEAUX CROISÉS DYNAMIQUES

Créez 4 tableaux croisés dynamiques pour répondre aux questions :

1️) Montant TOTAL par CATÉGORIE
   Lignes: Catégorie | Valeurs: Somme de Montant

2) Montant par PRODUIT et PAR MOIS
   Lignes: Produit | Colonnes: Mois (de Date) | Valeurs: Somme de Montant

3️) QUANTITÉ vendue par VENDEUR
   Lignes: Vendeur | Valeurs: Somme de Quantité

4) Montant par CATÉGORIE ET VENDEUR
   Lignes: Catégorie | Colonnes: Vendeur | Valeurs: Somme de Montant

ÉTAPES:
• Sélectionner toutes les données (en-têtes inclus)
• Insertion > Tableau croisé dynamique > Créer
• Glisser les champs dans les zones appropriées
• Chaque tableau croisé = nouvelle feuille

⚠️ Les données doivent être propres (pas d'espaces vides, pas de fusion)
```

### Points clés
- Commencez par le tableau croisé le plus simple (question 1)
- Testez différentes configurations pour explorer les données
- Créez chaque tableau croisé dans une feuille séparée
- Les données sources restent inchangées

