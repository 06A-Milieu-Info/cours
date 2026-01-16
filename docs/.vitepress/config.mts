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
					//{ text: "02 — Excel", link: "/modules/02-excel/" },
					//{ text: "03 — Word", link: "/modules/03-word/" },
					//{ text: "04 — Analyse", link: "/modules/04-analyse-info/" },
					//{ text: "05 — PowerPoint", link: "/modules/05-powerpoint/" },
					//{ text: "06 — Éthique", link: "/modules/06-ethique/" },
				],
			},
			{
				text: "Travaux",
				items: [
					{ text: "TP1", link: "/travaux/tp1-collaboration" },
					//{ text: "TP2", link: "/travaux/tp2-excel-budget" },
					//{ text: "TP3", link: "/travaux/tp3-word-profession" },
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
						collapsed: false,
						items: [
							{ text: "Introduction", link: "/modules/01-onedrive/01-introduction" },
							{ text: "Installations et configurations", link: "/modules/01-onedrive/02-installations" },
							{ text: "Gestion de fichiers", link: "/modules/01-onedrive/03-gestion-fichiers" },
							{ text: "Collaboration", link: "/modules/01-onedrive/04-collaboration" },
						],
					},
					/*
					{
						text: "Module 2 — Excel",
						collapsed: true,
						items: [
							{ text: 'Accueil du module', link: '/modules/02-excel/' },
							{ text: 'Consolidation et examen pratique', link: '/modules/02-excel/consolidation-examen' }
						],
					},
					{
						text: "Module 3 — Word",
						collapsed: true,
						items: [
						],
					},
					{
						text: "Module 4 — Analyse",
						collapsed: true,
						items: [
						],
					},
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
					},
					*/
				],
			},
			
			{
				text: "Travaux pratiques",
				collapsed: true,
				items: [
					{ text: "TP1", link: "/travaux/tp1-collaboration" },
					//{ text: "TP2", link: "/travaux/tp2-excel-budget" },
					//{ text: "TP3", link: "/travaux/tp3-word-profession" },
					//{ text: "TP4", link: "/travaux/tp4-ppt-ethique" },
				],
			},

			{
				text: "Laboratoires",
				collapsed: true,
				items: [
					{ text: "Lab 01 — Vocabulaire", link: "/labs/01-vocabulaire" },
				],
			},
			{
				text: "Grilles d’évaluation",
				collapsed: true,
				items: [
					{ text: "Grille — TP1", link: "/grilles/grille-tp1-collaboration" },
					//{ text: "Grille — TP2", link: "/grilles/grille-tp2-excel-budget" },
					//{ text: "Grille — TP3", link: "/grilles/grille-tp3-word-profession" },
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
