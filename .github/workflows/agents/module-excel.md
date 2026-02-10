# Agent — Excel → VitePress (notes de cours)

## Rôle
Tu es un agent de conversion de contenu pédagogique.
Objectif : convertir un classeur Excel en pages Markdown courtes pour un site VitePress.

## Entrées
- Classeur : `Notes de cours.xlsx` (à la racine du dépôt ou dans `/resources/` selon la structure)
- Chaque feuille Excel = 1 page Markdown.
- Langue : français.
- Ton : clair, bref, orienté “notes de cours”.

## Contraintes importantes
- Créer la structure AVANT d’écrire du contenu.
- Pages brèves : maximum ~60–120 lignes par page (viser l’essentiel).
- Pas de blabla : privilégier listes, sections courtes, exemples minimalistes.
- Ne pas inventer du contenu : si une feuille est vide ou ambiguë, laisser un placeholder `TODO`.
- Respecter un ordre pédagogique (numéros de feuilles si présents).
- Rester compatible VitePress (frontmatter + titres).

## Cible de sortie
Créer/mettre à jour les fichiers sous :
`/notes/excel/`

Structure attendue :
- `/notes/excel/index.md`
- `/notes/excel/improvisation.md`
- `/notes/excel/01-orientation.md`
- `/notes/excel/02-mise-en-forme.md`
- `/notes/excel/03-formules-base.md`
- `/notes/excel/04-fonctions-math.md`
- `/notes/excel/05-fonctions-date.md`
- `/notes/excel/06-fonctions-logiques.md`
- `/notes/excel/07-mise-en-forme-cond.md`
- `/notes/excel/08-recherche.md`
- `/notes/excel/09-tableaux-filtres-tris.md`
- `/notes/excel/10-graphiques.md`
- `/notes/excel/11-tableaux-croises.md`
- `/notes/excel/12-mise-en-page-impression.md`

## Frontmatter standard
Chaque page doit contenir en haut :

---
title: "<Titre humain>"
---

Puis un seul H1 identique au titre.

## Format standard d’une page (squelette)
Chaque page (sauf index) suit ce modèle :

# <Titre>

## Objectif
- ...

## Notions clés
- ...

## Procédure (si applicable)
1. ...
2. ...

## Exemples (si applicable)
- ...

## À retenir
- ...

Ne pas inclure de longs paragraphes.

## Index
`/notes/excel/index.md` doit :
- expliquer que les exercices sont le plus important (les notes appuient les exercices)
- contenir les liens vers toutes les pages
- Liens vers les exercices à faire:

### Exercices à faire dans l'ordre

[01 – Orientation](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQA8VRjzpG1bSoIEf7DHoo6IAS1WZLR5ma9rIWJlecyaYbs?e=HxRtew)  
[02 – Mise en forme](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQD_fIO7yqPoTL2j7lADpvtxAZuDsA2uUfGBWq6x2GiTMxM?e=9m87uk)  
[03 – Formules de base](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQC3p9bnI29pQ4HA48_rY2DpAYJBWxDKEtJeuDLRCHHfNfc?e=ETCGdi)  
[04 – Fonctions mathématiques](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQD4Gs_NZuhGR7vc_dXnYvJfAUzmumXWheIxUXWgADO7W9Q?e=uJOLLH)  
[05 – Fonctions de date](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQD5biM3pyoiTKh1B1NGwKH9Afx4LnP_KL1jcuqNDMieI58?e=V23UDD)  
[06 – Fonctions conditionnelles et logiques](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQCbqUoTjHv9S5WiLRRdJj3eAQ_hZ0cx6EuYfT7svq7e268?e=BVqP3c)  
[07 – Mise en forme conditionnelle et validation des données](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQD2hGLn0VRtRqPzcce-dbgrAfT0j_iYCVzTVzHl8mvgX_s?e=u2PK9n)  
[08 – Recherche](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQAuQGQtIzGAQpyW-hccqJkUAUpVEuCiglNK9P1LmxkoQBE?e=0j7J5D)  
[09 – Tableaux, filtres et tris](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQBebLKkJll2Q4TKamFEqUkPAcKrPaghhxrRiaXQM2UPkuc?e=b54kdp)  
[10 – Graphiques](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQDEFk8w9hsjQq_4KU2HBDmSAWaii9EZpUfgVpk-VAt2-10?e=ccHQ8S)  
[11 – Tableaux croisés dynamiques](https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQDn0qZv6FmVSp3woKi1POtxAWXEnHhU7xkTgiR1J-hHdkU?e=ZKaWnL)

## Étapes de travail (OBLIGATOIRES)
### Étape 1 — Générer la structure
- Dans /modules/02-excel
- Créer les dossiers et tous les fichiers .md listés
- Mettre uniquement le frontmatter + H1 + sections vides (placeholders)
- Commit suggéré : "chore: add excel notes structure"

### Étape 2 — Remplir le contenu
- Lire `Notes de cours.xlsx` qui se trouve dans /modules/02-excel
- Pour chaque feuille : extraire le contenu utile et le réécrire en sections brèves
- Garder les titres cohérents et stables
- Commit suggéré : "docs: fill excel notes content"

### Étape 3 — Vérification
- Vérifier que tous les liens de l’index pointent vers les bonnes pages
- Vérifier que chaque page a un frontmatter valide
- Vérifier que la longueur reste raisonnable

## Mapping feuille → page
Utiliser ce mapping (si les feuilles correspondent) :
- "IMPROVISATION" → Ne pas créer de page
- "01-Orientation Excel" → `01-orientation.md`
- "02-Mise en forme" → `02-mise-en-forme.md`
- "03-Formules de base" → `03-formules-base.md`
- "04-Fonctions mathématiques" → `04-fonctions-math.md`
- "05-Fonctions de date" → `05-fonctions-date.md`
- "06-Fonctions cond. et logiques" → `06-fonctions-logiques.md`
- "07-Mise en forme cond." → `07-mise-en-forme-cond.md`
- "08-Recherche" → `08-recherche.md`
- "09-Tableaux, filtres et tris" → `09-tableaux-filtres-tris.md`
- "10-Graphiques" → `10-graphiques.md`
- "11-Tableau croisé dynamique" → `11-tableaux-croises.md`
- "12-Mise en page impression" → `12-mise-en-page-impression.md`

Si une feuille n’existe pas ou a un nom différent, créer une page au nom le plus proche et ajuster l’index.

## Style d’écriture
- Phrases courtes
- Puces courtes
- Exemples concrets (1–3 max)
- Éviter les répétitions
- Réserver une place pour une capture d'écran lorsque pertinent.
  - Utiliser la balise suivante comme placeholder: <img src="" alt="Exemple d'outil d'aide à la planification" class="img-bordered" />