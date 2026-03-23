import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/cours/",
	lang: "fr-CA",
	cleanUrls: true,
	title: "420-06A-FX",
	description:
		"Milieu de l'informatique — ressources, grilles, calendrier et modules",
	themeConfig: {
		logo: "./logos/logo.png",

		nav: [
			{ text: "Plan de cours", link: "/plan-cours/plan-de-cours" },
			{
				text: "Calendrier",
				items: [
					{ text: "Groupe 1", link: "/plan-cours/calendrier-gr1" },
					{ text: "Groupe 2", link: "/plan-cours/calendrier-gr2" },
				],
			},
			{
				text: "Modules",
				items: [
					{ text: "01 — OneDrive", link: "/modules/01-onedrive/" },
					{ text: "02 — Excel", link: "/modules/02-excel/01-orientation" },
					{ text: "03 — Word", link: "/modules/03-word/" },
					{ text: "04 — Analyse", link: "/modules/04-analyse-info/" },
					//{ text: "05 — PowerPoint", link: "/modules/05-powerpoint/" },
					//{ text: "06 — Éthique", link: "/modules/06-ethique/" },
				],
			},
			{
				text: "Travaux",
				items: [
					{ text: "TP1", link: "/travaux/tp1-collaboration" },
					{ text: "TP2", link: "/travaux/tp2-excel-budget" },
					{ text: "TP3", link: "/travaux/tp3-word-profession" },
					//{ text: "TP4", link: "/travaux/tp4-ppt-ethique" },
				],
			}
		],
		sidebar: [
			{
				text: "Documents généraux",
				items: [
					{ text: "Plan de cours", link: "/plan-cours/plan-de-cours" },
					{
						text: "Calendriers",
						items: [
							{ text: "Groupe 1", link: "/plan-cours/calendrier-gr1" },
							{ text: "Groupe 2", link: "/plan-cours/calendrier-gr2" },
						],
					},
				],
			},
			{
				text: "Modules du cours",
				collapsed: false,
				items: [
					{
						text: "Module 1 — OneDrive",
						collapsed: true,
						items: [
							{ text: "Introduction", link: "/modules/01-onedrive/01-introduction" },
							{ text: "Installations et configurations", link: "/modules/01-onedrive/02-installations" },
							{ text: "Gestion de fichiers", link: "/modules/01-onedrive/03-gestion-fichiers" },
							{ text: "Collaboration", link: "/modules/01-onedrive/04-collaboration" },
						],
					},
					{
						text: "Module 2 — Excel",
						collapsed: true,
						items: [
							{ text: "Orientation", link: "/modules/02-excel/01-orientation" },
							{ text: "Mise en forme", link: "/modules/02-excel/02-mise-en-forme" },
							{ text: "Formules de base", link: "/modules/02-excel/03-formules-base" },
							{ text: "Fonctions mathématiques", link: "/modules/02-excel/04-fonctions-math" },
							{ text: "Fonctions de date", link: "/modules/02-excel/05-fonctions-date" },
							{ text: "Fonctions conditionnelles", link: "/modules/02-excel/06-fonctions-logiques" },
							{ text: "Validation et Mise en forme conditionnelle", link: "/modules/02-excel/07-mise-en-forme-cond" },
							{ text: "RechercheV", link: "/modules/02-excel/08-recherche" },
							{ text: "Tableaux, filtres et tris", link: "/modules/02-excel/09-tableaux-filtres-tris" },
							{ text: "Graphiques", link: "/modules/02-excel/10-graphiques" },
							{ text: "Tableaux croisés dynamiques", link: "/modules/02-excel/11-tableaux-croises" },
							{ text: "Mise en forme pour impression", link: "/modules/02-excel/12-mise-en-page-impression" },
							{ text: "Révision d'examen", link: "/modules/02-excel/13-revision-examen" }
  						],
					},
					{
						text: "Module 3 — Word",
						collapsed: false,
						items: [
							{ text: "Structure et styles", link: "/modules/03-word/01-structure-styles" },
							{ text: "Mise en page et repères", link: "/modules/03-word/02-mise-en-page" },
							{ text: "Tableaux, images et légendes", link: "/modules/03-word/03-tableaux-images" },
							{ text: "Citations, bibliographie et export PDF", link: "/modules/03-word/04-finalisation" },
						],
					},
					{
						text: "Module 4 — Analyse",
						collapsed: true,
						items: [
							{ text: "Recherche", link: "/modules/04-analyse-info/01-recherche" },
							{ text: "Entreprise", link: "/modules/04-analyse-info/02-entreprise" },
							{ text: "Profession", link: "/modules/04-analyse-info/03-profession" },
							{ text: "Étude de cas : CGI", link: "/modules/04-analyse-info/04-etude-cgi" },
						],
					},
					/*
					{
						text: "Module 5 — PowerPoint",
						collapsed: true,
						items: [
						],
					},
					{
						text: "Module 6 — Éthique",
						collapsed: true,
						items: [
						],
					}
					*/
				],

			},

			{
				text: "Travaux pratiques",
				collapsed: true,
				items: [
					{ text: "TP1 — Onedrive", link: "/travaux/tp1-collaboration" },
					{ text: "TP2 — Excel", link: "/travaux/tp2-excel-budget" },
					{ text: "TP3 — Word/Profession", link: "/travaux/tp3-word-profession" },
					//{ text: "TP4", link: "/travaux/tp4-ppt-ethique" },
				],
			},

			{
				text: "Laboratoires",
				collapsed: true,
				items: [
					{ text: "Lab 01 — Vocabulaire", link: "/labs/01-vocabulaire" },
					{ text: "Lab 02 — Conférence", link: "/labs/02-conference" },
				],
			},
			{
				text: "Grilles d’évaluation",
				collapsed: true,
				items: [
					{ text: "Grille — TP1", link: "/grilles/grille-tp1-collaboration" },
					{ text: "Grille — TP2", link: "/grilles/grille-tp2-excel-budget" },
					{ text: "Grille — TP3", link: "/grilles/grille-tp3-word-profession" },
					//{ text: "Grille — TP4", link: "/grilles/grille-tp4-ppt-ethique" },
					//{ text: "Grille — Examen 1", link: "/grilles/grille-examen1" },
				],
			},

		],

		search: {
			provider: "local",
		},
	},
});
