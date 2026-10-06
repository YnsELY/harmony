# Stratégie SEO — Harmony Féminine / Sabine Trierweiler

_Dernière mise à jour : 6 octobre 2026_

---

## 1. Analyse du site

| | |
|---|---|
| **Activité** | Accompagnement non médical de la préménopause / périménopause et de la ménopause |
| **Personne** | Sabine Trierweiler, ancienne coiffeuse (28 ans), consultante **certifiée Menopulse®** |
| **Offre** | Programme personnalisé **sur 6 mois** (informer · prévenir · soutenir : nutrition, mouvement, sommeil, stress), consultation individuelle, ateliers de groupe, programme en ligne, conférences. Appel découverte gratuit de 20 min (Calendly). |
| **Lieu** | Cabinet au 6 rue Albert Einstein, **57150 Creutzwald** (Moselle-Est) + visio (Teams, Zoom, Webex) |
| **Langues** | Français et allemand (région frontalière Sarre) |
| **Cible** | Femmes de 40 à 60 ans, souvent « en errance » face à leurs symptômes, qui cherchent une approche bienveillante et naturelle en complément du médecin |
| **Positionnement** | Entre le médecin (diagnostic, traitement) et l'information grand public : une professionnelle certifiée, humaine, locale et bilingue |

**Concurrence** : en Moselle-Est, aucune professionnelle ne se positionne clairement sur « accompagnement ménopause » (surtout des naturopathes et sophrologues généralistes). Sur le nom « Sabine Trierweiler », Google ne renvoie aujourd'hui que des articles sur Valérie Trierweiler : **le nom est libre**, la première place est atteignable rapidement.

### Problèmes relevés avant l'intervention
1. Site d'une seule page → impossible de se positionner sur plus de 2–3 requêtes.
2. Aucune balise `<h1>`, titres en `<div>`.
3. Le nom complet n'apparaissait ni dans le `<title>`, ni dans les titres, ni dans le `alt` de la photo.
4. Français et allemand mélangés dans la même page ; l'URL `?lang=de` du sitemap n'était gérée par aucun code.
5. Meta description indiquant « Sarreguemines » alors que le cabinet est à Creutzwald.
6. `noimageindex` empêchait la photo de Sabine d'apparaître dans Google Images.
7. Domaine incohérent (canonical sans `www`, sitemap/robots avec `www`) — **le site en production est servi sur `https://harmony-feminine.com` (sans www) : c'est donc ce domaine qui a été retenu partout.**
8. Sitemap composé d'ancres (`/#mission`…) ignorées par Google.
9. Schema.org minimal (Person sans fonction, photo, certification, réseaux).

---

## 2. Mots-clés cibles

> Les volumes sont des estimations relatives. À affiner dans Google Search Console (après 4–6 semaines) et Google Keyword Planner.

### A. Marque / nom — priorité n°1
| Mot-clé | Page cible |
|---|---|
| sabine trierweiler | `/sabine-trierweiler/` + accueil |
| sabine trierweiler ménopause / coach / creutzwald | `/sabine-trierweiler/` |
| harmony féminine, harmony feminine creutzwald | accueil |

### B. Local transactionnel — forte conversion, faible concurrence
| Mot-clé | Page cible |
|---|---|
| accompagnement ménopause Creutzwald / Saint-Avold / Forbach / Boulay | `/coach-menopause-creutzwald-moselle/` |
| coach ménopause Moselle, consultante ménopause Moselle | `/coach-menopause-creutzwald-moselle/` |
| accompagnement ménopause Metz, Sarreguemines | `/coach-menopause-creutzwald-moselle/` (+ Google Business Profile) |
| Wechseljahre Beratung Saarland / Saarlouis / Saarbrücken | `/de/wechseljahre-begleitung/` |

### C. Service (national, en ligne)
| Mot-clé | Page cible |
|---|---|
| accompagnement ménopause, programme ménopause 6 mois | `/accompagnement-menopause/` |
| coach ménopause en ligne, consultation ménopause visio | `/consultation-menopause-en-ligne/` |
| accompagnement préménopause, coaching périménopause | `/accompagnement-premenopause/` |
| consultante ménopause certifiée, Menopulse | `/sabine-trierweiler/` |
| conférence ménopause entreprise, ménopause au travail | `/ateliers-conferences/` |
| Wechseljahre Coaching online, Menopause Beratung online | `/de/online-beratung-wechseljahre/` |

### D. Informationnel — trafic (longue traîne)
| Cluster | Requêtes | Page cible |
|---|---|---|
| Préménopause | symptômes préménopause, préménopause à 40 ans, différence préménopause périménopause | `/accompagnement-premenopause/` |
| Bouffées de chaleur | bouffées de chaleur ménopause solutions naturelles, sueurs nocturnes | `/symptomes/bouffees-de-chaleur/` |
| Sommeil | insomnie ménopause, réveil 3h du matin ménopause | `/symptomes/troubles-du-sommeil/` |
| Humeur | anxiété préménopause, irritabilité ménopause | `/symptomes/changements-humeur/` |
| Intime | sécheresse vaginale ménopause, libido ménopause | `/symptomes/inconforts-intimes/` |
| Mental | brouillard mental ménopause, trous de mémoire ménopause | `/symptomes/brouillard-mental/` |
| Poids | prise de poids ménopause ventre, maigrir ménopause | `/symptomes/prise-de-poids/` |

---

## 3. Ce qui a été fait (technique + contenu)

### Page d'accueil — design strictement inchangé
Contrôle automatique avant/après (positions, tailles, polices, couleurs de chaque élément, en FR et DE, desktop et mobile) : **aucune différence visuelle**. Seules des corrections d'accents visibles (« préménopause », « Ma méthode ») ont été faites.
- `<title>` : *Sabine Trierweiler – Consultante ménopause certifiée à Creutzwald (Moselle) | Harmony Féminine*
- Meta description corrigée (Creutzwald, Menopulse®, 6 mois, appel offert).
- Vraie hiérarchie de titres : `h1` (accroche), `h2` (sections), `h3` (symptômes, piliers) — avec un reset CSS qui garde exactement le même rendu (`styles/theme.css`).
- Photo renommée `sabine-trierweiler-consultante-menopause-*.jpg`, `alt` descriptif ; `noimageindex` supprimé.
- Open Graph / Twitter Card avec la photo de Sabine.
- Schema.org enrichi : `WebSite`, `LocalBusiness` + `HealthAndBeautyBusiness` (zone desservie, langues, réseaux), `Person` (fonction, photo, certification Menopulse® en `hasCredential`, `knowsAbout`, `sameAs`).
- Liens internes invisibles : cartes symptômes → pages symptômes, « accompagnement sur six mois » → page programme, adresse → page locale, prénom → page À propos, liens « Services » du pied de page → pages services.

### Nouvelles pages (18 URL indexables au lieu d'1)
| URL | Rôle |
|---|---|
| `/sabine-trierweiler/` | Page entité « nom » (ProfilePage), clé pour la recherche « Sabine Trierweiler » |
| `/accompagnement-menopause/` | Programme 6 mois + FAQ (Service, FAQPage) |
| `/accompagnement-premenopause/` | Guide préménopause / périménopause |
| `/consultation-menopause-en-ligne/` | Offre visio France + Europe |
| `/ateliers-conferences/` | Ateliers, conférences entreprises |
| `/coach-menopause-creutzwald-moselle/` | Page locale Moselle-Est |
| `/symptomes/` + 6 pages symptômes | Contenu informationnel signé (Article, auteur) |
| `/de/` | Accueil en allemand (vraie URL, `hreflang`) |
| `/de/sabine-trierweiler/`, `/de/wechseljahre-begleitung/`, `/de/online-beratung-wechseljahre/` | Pages allemandes |

- Langues : `/` = français, `/de/` = allemand, avec `hreflang` réciproques. Le bouton FR/DE fonctionne comme avant (sans rechargement sur l'accueil) mais met à jour l'URL (`js/lang.js`).
- `sitemap.xml` régénéré (21 URL, `hreflang`), `robots.txt` corrigé (domaine, plus de `Crawl-delay`, moteurs de réponse IA autorisés, entraînement IA toujours refusé).
- `_redirects` : anciennes URL des photos + raccourcis `/sabine`, `/a-propos`, `/ueber-mich`.

### Maintenance
Les pages sont générées par un script, sans dépendance :

```bash
node scripts/build-pages.js
```

- Textes : `scripts/content-fr.js` et `scripts/content-de.js`
- Gabarit commun (menu, pied de page, schema) : `scripts/layout.js`
- `de/index.html` est une copie générée de `index.html` → **relancer le script après chaque modification de `index.html`.**

### Google Analytics 4 (consentement RGPD)
- Intégré dans `js/cookies.js` : **chargé uniquement si le visiteur accepte** (bandeau « Tout accepter » ou case dédiée sur `cookies.html`). Aucun appel à Google avant accord ; retrait du consentement = arrêt de GA et suppression des cookies `_ga*`.
- Bandeau, page cookies et politique de confidentialité (FR + DE) mis à jour. Le consentement est redemandé à tous les visiteurs (version 2).
- **À faire** : créer la propriété GA4 (analytics.google.com → Admin → Flux de données → Web), puis remplacer `G-XXXXXXXXXX` par l’ID de mesure dans `js/cookies.js` (`GA_ID`). Tant que l’ID est le provisoire, rien n’est chargé.
- Dans GA4 : conservation des données à 14 mois, signaux Google et personnalisation des annonces désactivés, lier la propriété à Search Console, marquer comme événement clé les clics « Appel 20 Min. offert » / réservations Calendly.
- Limite : seuls les visiteurs qui acceptent les cookies sont mesurés ; Search Console reste la source fiable pour les impressions et clics Google.

### À compléter par Sabine (repéré par `TODO` dans `scripts/content-*.js`)
- Nombre / durée des séances et tarif du programme.
- 2–3 témoignages de clientes (avec accord écrit).
- Dates, lieu et tarif des ateliers.
- Accès au cabinet (stationnement, étage, accessibilité).
- ⚠️ `mentions-legales.html` indique l'hébergeur **IONOS**, alors que le site est servi par **Netlify** : à corriger (obligation légale). L'adresse de l'entreprise (Sarreguemines) diffère de celle du cabinet (Creutzwald) : c'est normal si c'est le siège, mais à vérifier.

---

## 4. Plan d'action hors site (le plus important pour le nom et le local)

### Semaine 1 — fondations
- [ ] **Google Search Console** : ajouter `harmony-feminine.com`, soumettre `sitemap.xml`, demander l'indexation de `/` et `/sabine-trierweiler/`.
- [ ] **Bing Webmaster Tools** (alimente aussi ChatGPT / Copilot) : importer depuis Search Console.
- [ ] **Google Business Profile** : « Harmony Féminine – Sabine Trierweiler », catégorie *Consultant* / *Coach de vie*, adresse Creutzwald, zone desservie (Creutzwald, Saint-Avold, Boulay, Forbach, Sarreguemines, Saarlouis), photos du cabinet et de Sabine, lien vers le site, prise de RDV → Calendly.
- [ ] **Annuaire Menopulse®** : fiche complète avec lien vers le site (lien très thématique + preuve de la certification).

### Semaines 2–4 — signaux « entité » pour le nom
- [ ] **LinkedIn** « Sabine Trierweiler – Consultante certifiée ménopause | Harmony Féminine », lien vers le site.
- [ ] Renommer Instagram / Facebook en « Sabine Trierweiler | Harmony Féminine », lien vers `/sabine-trierweiler/`.
- [ ] Mêmes nom, adresse, e-mail partout (NAP identique) : PagesJaunes, Resalib, Medoucine, annuaires bien-être locaux.
- [ ] Ajouter chaque nouveau profil créé dans le `sameAs` du schema (`index.html` et `scripts/layout.js`).

### Mois 2–6 — avis et notoriété locale
- [ ] Demander un **avis Google** après chaque appel découverte et à la fin de chaque accompagnement (levier n°1 du référencement local).
- [ ] Presse locale : Le Républicain Lorrain, bulletin municipal de Creutzwald, radios locales (sujet porteur : « la ménopause, on en parle enfin »).
- [ ] Conférences en médiathèque, mairie, CSE d'entreprises → articles et liens locaux.
- [ ] Partenariats : pharmacies, sages-femmes, kinés, salons de coiffure (son réseau !) de Moselle-Est.
- [ ] Côté allemand : annuaires et presse sarroise (Saarbrücker Zeitung, Wochenspiegel).

---

## 5. Calendrier éditorial (2 articles / mois)

Chaque article : 1 200–2 000 mots, signé Sabine Trierweiler, sources (HAS, Inserm, Assurance maladie, Société française de ménopause), mention « ne remplace pas un avis médical », lien vers une page service et vers `/sabine-trierweiler/`. À ajouter dans `scripts/content-fr.js` (avec `article: true`) puis `node scripts/build-pages.js`.

| Mois | Article 1 | Article 2 |
|---|---|---|
| 1 | Mon histoire : de coiffeuse à consultante ménopause | Préménopause, périménopause, ménopause : le guide complet |
| 2 | Alimentation et ménopause : les bases | Ménopause et cheveux : ce qui change (angle unique ex-coiffeuse) |
| 3 | Sport à la ménopause : pourquoi le renforcement musculaire | Réveils à 3 h du matin : que se passe-t-il ? |
| 4 | Ménopause au travail : en parler à son employeur | Préparer son rendez-vous chez le gynécologue |
| 5 | Anxiété en préménopause : témoignage et outils | Ostéoporose : la prévenir dès 45 ans |
| 6 | Wechseljahre: erste Anzeichen (DE) | Hitzewallungen: was hilft im Alltag? (DE) |

Ensuite : décliner les pages allemandes des symptômes, et créer un hub `/blog/` dès 6 articles publiés.

---

## 6. Suivi (KPI)

| Échéance | Objectif |
|---|---|
| 2–4 semaines | n°1 sur « Sabine Trierweiler » et « Harmony Féminine » ; toutes les pages indexées |
| 3 mois | Top 3 « accompagnement ménopause Creutzwald / Saint-Avold / Moselle » + présence dans le pack Google Maps ; 10 avis Google |
| 6 mois | Top 10 sur 2–3 requêtes symptômes ; premières demandes venant des pages symptômes |
| 12 mois | Trafic organique ×10 ; réservations Calendly issues de Google suivies chaque mois |

Outils : Google Search Console (requêtes, positions, clics), Google Business Profile (appels, itinéraires), Calendly (réservations).
