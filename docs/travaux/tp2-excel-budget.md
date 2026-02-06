---
title: Travail pratique 2 — Outil de budget mensuel (Excel)
aside: false
---

# Travail pratique 2 — Excel  
**Cours :** 420-06A-FX — Milieu de l’informatique
**Session :** Hiver 2026  

---

## Objectif du travail pratique

Dans ce travail pratique, vous devez concevoir un **outil de budget mensuel dans Excel** permettant de suivre :

- les revenus
- les dépenses fixes
- les dépenses quotidiennes
- le budget et le solde jour par jour

L’objectif est de mettre en pratique les **formules Excel**, la **gestion des dates**, la **mise en forme conditionnelle** et la **création de graphiques**.

---

## Livrable attendu

- Un **classeur Excel (.xlsx)** fonctionnel
- Un **gabarit mensuel** réutilisable
- Une feuille complétée pour **février 2026**
- Un **graphique de dépenses**

---

## Structure du classeur

- Le classeur est divisé en **feuilles mensuelles**
- Chaque feuille représente **un mois**
- Vous devez :
  - créer **une feuille gabarit**
  - copier cette feuille (une seule fois pour février)
  - la renommer selon le mois voulu

> Il n’est pas nécessaire de créer les 12 mois, mais le gabarit doit fonctionner pour **tous les mois de l’année**.

---

## Gabarit fourni

- La **mise en page est déjà fournie**
- Vous devez uniquement **programmer les cellules jaunes**
- Aucune valeur ne doit être calculée manuellement

---

## Cellules à programmer

### Dates du mois
- La cellule **B2** contient le **mois et l’année**
- Les **dates de début et de fin du mois** doivent se calculer automatiquement
- Le nombre de jours doit s’adapter au mois (28 à 31 jours)

---

### Revenus
- Le **revenu total** correspond à la somme de tous les revenus
- Si aucun revenu n’est entré :
  - la valeur affichée doit être **0,00 $**
- Le total des revenus doit être **en gras**

---

### Dépenses fixes
- Les **dépenses fixes totales** correspondent à la somme du tableau des dépenses fixes
- Si aucune dépense fixe n’est entrée :
  - la valeur affichée doit être **0,00 $**
- Le total des dépenses fixes doit être **en gras**

---

### Budget mensuel et budget journalier
- Le **budget mensuel** correspond à :
  
  > Revenus totaux − Dépenses fixes totales

- Le **budget journalier** correspond à :
  
  > Budget mensuel ÷ Nombre de jours du mois

---

### Liste de dépenses par jour
- La liste des jours doit s’adapter au mois sélectionné
- Les cellules correspondant aux jours inexistants (ex. 31 pour avril) doivent rester **vides**

---

### Colonne Dépenses
- La valeur par défaut doit être **0,00 $**
- Toutes les cellules doivent être correctement formatées en devise

---

### Colonnes Budget et Solde

- **Budget**
  - Correspond au **budget journalier ajouté au solde de la veille**
  - Les valeurs doivent être **en gras**

- **Solde**
  - Correspond à :
    
    > Budget journalier − Dépenses du jour

- Mise en forme conditionnelle :
  - **Vert** si la valeur est positive ou égale à zéro
  - **Rouge** si la valeur est négative

- Les **totaux** (dépenses, budget, solde) doivent apparaître à la fin du tableau

> **Indice :**  
> Si les totaux du budget et du solde ne sont pas égaux, il y a forcément une erreur dans les calculs.

---

## Graphique de dépenses

1. Copiez votre feuille gabarit et nommez-la **Février 2025**
2. Remplissez :
   - des **revenus fictifs**
   - des **dépenses fixes fictives**
   - Assurez-vous d’avoir **plus de revenus que de dépenses fixes**
3. Ajoutez des **dépenses hebdomadaires**
   - Vous devez tomber **au moins une fois dans le rouge**
4. Créez un **graphique à barres**
   - Axe horizontal : dates
   - Axe vertical : budget / solde
   - Le graphique doit permettre de visualiser les périodes déficitaires

---

## Considérations importantes

- Le chiffrier doit fonctionner pour **tous les mois de l’année**
- Toutes les cellules monétaires doivent :
  - être correctement **formatées**
- Le fichier ne doit contenir :
  - **aucune cellule en erreur Excel** (`#DIV/0!`, `#N/A`, etc.)
- Les données saisies sont **fictives**

---

## Modalités de remise

- **Plateforme :** LÉA
- **Format :** fichier Excel (.xlsx)
- **Date limite :** voir LÉA
- **Pondération :** 20 %
