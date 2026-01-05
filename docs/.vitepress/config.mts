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
					{ text: "02 — Excel", link: "/modules/02-excel/" },
					{ text: "03 — Word", link: "/modules/03-word/" },
					{ text: "04 — Analyse", link: "/modules/04-analyse-info/" },
					{ text: "05 — PowerPoint", link: "/modules/05-powerpoint/" },
					{ text: "06 — Éthique", link: "/modules/06-ethique/" },
				],
			},
			{
				text: "Travaux",
				items: [
					{ text: "TP1", link: "/travaux/tp1" },
					{ text: "TP2", link: "/travaux/tp2" },
					{ text: "TP3", link: "/travaux/tp3" },
					{ text: "TP4", link: "/travaux/tp4" },
				],
			},

			{
				text: "Laboratoires",
				items: [
					{ text: "Lab 01 — Vocabulaire", link: "/labs/lab-01" },
				],
			},

			{
				text: "Grilles",
				items: [
					{ text: "Grille — TP1", link: "/grilles/grille-tp1" },
					{ text: "Grille — TP2", link: "/grilles/grille-tp2" },
					{ text: "Grille — TP3", link: "/grilles/grille-tp3" },
					{ text: "Grille — TP4", link: "/grilles/grille-tp4" },
					{ text: "Grille — Examen 1", link: "/grilles/grille-examen1" },
				],
			},
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
					{
						text: "Module 2 — Excel",
						collapsed: true,
						items: [
							{ text: "Concepts", link: "/modules/02-excel/01-concepts" },
							{ text: "Manipulations", link: "/modules/02-excel/02-manipulations" },
							{ text: "Fonctions", link: "/modules/02-excel/03-fonctions" },
							{ text: "Mise en forme", link: "/modules/02-excel/04-mise-en-forme" },
							{ text: "Graphiques", link: "/modules/02-excel/05-graphiques" },
							{ text: "Validation", link: "/modules/02-excel/06-validation" },
							{ text: "Tableaux croisés", link: "/modules/02-excel/09-tableaux-croises" },
						],
					},
					{
						text: "Module 3 — Word",
						collapsed: true,
						items: [
							{ text: "Select + Where", link: "/modules/03-word/01-select-where" },
							{ text: "INSERT / UPDATE / DELETE", link: "/modules/03-word/02-insert-update-delete" },
							{ text: "Opérateurs", link: "/modules/03-word/03-operateurs" },
							{ text: "Sous-requêtes non corrélées", link: "/modules/03-word/04-sous-requetes-non-correlees" },
							{ text: "Exercices", link: "/modules/03-word/05-exercices" },
						],
					},
					{
						text: "Module 4 — Analyse",
						collapsed: true,
						items: [
							{ text: "Clés étrangères", link: "/modules/04-analyse-info/01-cles-etrangeres" },
							{ text: "Contraintes référentielles", link: "/modules/04-analyse-info/02-contraintes-referentielles" },
							{ text: "Index", link: "/modules/04-analyse-info/03-index" },
							{ text: "Inner/Left join", link: "/modules/04-analyse-info/04-inner-left-join" },
							{ text: "Sous-requêtes corrélées", link: "/modules/04-analyse-info/05-sous-requetes-correlees" },
							{ text: "Expressions régulières", link: "/modules/04-analyse-info/06-expressions-regulieres" },
						],
					},
					{
						text: "Module 5 — PowerPoint",
						collapsed: true,
						items: [
							{ text: "Introduction", link: "/modules/05-powerpoint/01-introduction-powerpoint" },
							{ text: "Conception de diapositives", link: "/modules/05-powerpoint/02-conception-diapos" },
							{ text: "Exercices", link: "/modules/05-powerpoint/03-exercices" },
						],
					},
					{
						text: "Module 6 — Éthique",
						collapsed: true,
						items: [
							{ text: "Introduction", link: "/modules/06-ethique/01-introduction-ethique" },
							{ text: "Enjeux & contraintes", link: "/modules/06-ethique/02-enjeux-et-contrainte" },
							{ text: "Cas pratiques", link: "/modules/06-ethique/03-cas-pratiques" },
							{ text: "Sécurité des données", link: "/modules/06-ethique/04-securite-des-donnees" },
							{ text: "Exercices", link: "/modules/06-ethique/05-exercices" },
						],
					},
				],
			},
			{
				text: "Travaux pratiques",
				collapsed: true,
				items: [
					{ text: "TP1", link: "/travaux/tp1" },
					{ text: "TP2", link: "/travaux/tp2" },
					{ text: "TP3", link: "/travaux/tp3" },
					{ text: "TP4", link: "/travaux/tp4" },
				],
			},

			{
				text: "Laboratoires",
				collapsed: true,
				items: [
					{ text: "Lab 01 — Vocabulaire", link: "/labs/lab-01" },
				],
			},
			{
				text: "Grilles d’évaluation",
				collapsed: true,
				items: [
					{ text: "Grille — TP1", link: "/grilles/grille-tp1" },
					{ text: "Grille — TP2", link: "/grilles/grille-tp2" },
					{ text: "Grille — TP3", link: "/grilles/grille-tp3" },
					{ text: "Grille — TP4", link: "/grilles/grille-tp4" },
					{ text: "Grille — Examen 1", link: "/grilles/grille-examen1" },
				],
			},

		],

		search: {
			provider: "local",
		},
	},
});
