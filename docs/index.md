---
layout: home
title: 420-06A-FX — Milieu de l'informatique
hero:
  name: 420-06A-FX — Milieu de l'informatique
  text: Hiver 2026
  tagline: Nouveautés publiées ici chaque semaine
  image:
    src: /logos/logo.png
    alt: Logo du cours
  actions:
    - theme: brand
      text: Plan de cours
      link: /plan-cours/plan-de-cours.md
    - theme: alt
      text: Rejoindre le prof
      link: https://teams.microsoft.com/l/chat/48:notes/conversations?context=%7B%22contextType%22%3A%22chat%22%7D
    - theme: alt
      text: Bureau et disponibilités
      link: https://techinfo.cegepgarneau.ca/Professeurs/Horaire?id=20
---
<div
  class="rounded-xl border px-4 py-2 text-sm font-medium"
  style="
    border-color: var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
  "
>
  Semaine 1 — du 19 janvier au 23 janvier
</div>
<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
  <WeeklyTodo
    title="À faire cette semaine — En classe"
    subtitle="Activités réalisées pendant la séance."
    :steps="[
      {
        title: 'Introduction du cours et plan de cours',
        description: 'Présentation du fonctionnement du cours et des outils.',
        time: '20 min',
        links: [
          { text: 'Introduction', href: '/modules/01-onedrive/01-introduction', variant: 'secondary' }, 
          { text: 'Plan de cours', href: '/plan-cours/plan-de-cours', variant: 'secondary' }
          ]
      },
      {
        title: 'Installations — démonstration',
        description: 'Vue d’ensemble des installations à faire. À compléter à la maison.',
        time: '≈30 min',
        links: [{ text: 'Voir la procédure', href: '/modules/01-onedrive/02-installations', variant: 'secondary' }]
      },
      {
        title: 'Module 1 — Gestion des fichiers',
        time: '50 min',
        links: [{ text: 'Aller au module', href: '/modules/01-onedrive/03-gestion-fichiers', variant: 'secondary' }]
      },
      {
        title: 'Énoncé TP1 (en bref)',
        time: '20 min',
        links: [{ text: 'Aller au tp1', href: '/travaux/tp1-collaboration', variant: 'secondary' }]
      },
      {
        title: 'Formation des équipes (activité)',
        time: '15 min',
        links: [{ text: 'Instructions', href: '/modules/01-onedrive/00-brise-glace', variant: 'secondary' }]
      }
    ]"
  />

  <WeeklyTodo
    title="À préparer / compléter"
    subtitle="À compléter de votre côté."
    :steps="[
      {
        title: 'Terminer installations et configurations obligatoires',
        badge: 'Obligatoire',
        time: '15–30 min',
        links: [{ text: 'Voir la procédure', href: '/modules/01-onedrive/02-installations', variant: 'primary' }]
      },
      {
        title: 'Exercice 1 — Vocabulaire',
        description: 'À remettre sur Léa avant le prochain cours.',
        badge: 'Obligatoire',
        time: '10–20 min',
        links: [{ text: 'Commencer', href: '/labs/01-vocabulaire', variant: 'primary' }]
      },
      {
        title: 'Former vos équipes (TP1)',
        time: '5 min',
        links: [
          { text: 'Groupe 1', href: 'https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQAvf_qftUIQS7c759lhnDgbATnT41clfv4RMZQBOutJGFw?e=1P4kXk', variant: 'primary' },
          { text: 'Groupe 2', href: 'https://livecegepfxgqc-my.sharepoint.com/:x:/g/personal/otremblay_cegepgarneau_ca/IQAKDA7_-ptNRaliAc1eEfwhAZSEAPsPbhlJ4tLNj0EVPac?e=dnexwh', variant: 'primary' }
        ]
      },
      {
        title: 'Commencer le TP1',
        description: 'Vous pouvez déjà faire la partie individuelle de la Préparation (Word)',
        time: '30 min',
        links: [{ text: 'Aller au tp1', href: '/travaux/tp1-collaboration', variant: 'secondary' }]
      }
    ]"
  />
</div>
