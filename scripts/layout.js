/**
 * layout.js — Shared HTML layout for the generated content pages
 * Harmony Féminine
 *
 * Used by build-pages.js. Reuses the exact navbar / footer / cookie banner
 * markup and stylesheets of index.html so every page looks the same.
 */

'use strict';

const SITE = 'https://harmony-feminine.com';
const PERSON_ID = SITE + '/#sabine-trierweiler';
const BUSINESS_ID = SITE + '/#localbusiness';
const PHOTO = SITE + '/assets/images/sabine-trierweiler-consultante-menopause-lg.jpg';
const MODIFIED = '2026-10-06';

const T = {
  fr: {
    locale: 'fr_FR',
    home: '/',
    fallback: '/de/',
    nav: [
      ['/', 'Accueil'],
      ['/accompagnement-menopause/', 'Accompagnement'],
      ['/symptomes/', 'Symptômes'],
      ['/sabine-trierweiler/', 'À propos'],
      ['/#contact', 'Contact'],
    ],
    langLabel: 'Langue active : Français — Cliquer pour Deutsch',
    flag: '🇫🇷',
    code: 'FR',
    cta: 'Appel 20 Min. offert',
    ctaSecondary: 'Envoyer un message',
    ctaBoxTitle: 'Appel découverte gratuit',
    ctaBoxText: '20 minutes pour faire le point sur votre situation et voir si mon accompagnement vous correspond. Sans engagement.',
    ctaBoxBtn: 'Réserver mon appel',
    breadcrumbHome: 'Accueil',
    disclaimerTitle: 'Avertissement',
    disclaimer: 'Cet accompagnement ne remplace pas un suivi médical. Il vient en complément, dans une approche éducative et préventive. En cas de symptômes inhabituels ou intenses, consultez votre médecin, votre gynécologue ou votre sage-femme.',
    footerText: 'Sabine Trierweiler, consultante certifiée en préménopause et ménopause à Creutzwald (Moselle) et en ligne.',
    footerNav: 'Navigation',
    footerServices: 'Services',
    footerSymptoms: 'Symptômes',
    services: [
      ['/accompagnement-menopause/', 'Accompagnement ménopause'],
      ['/accompagnement-premenopause/', 'Accompagnement préménopause'],
      ['/consultation-menopause-en-ligne/', 'Consultation en ligne'],
      ['/ateliers-conferences/', 'Ateliers & conférences'],
      ['/coach-menopause-creutzwald-moselle/', 'Cabinet de Creutzwald'],
    ],
    symptoms: [
      ['/symptomes/bouffees-de-chaleur/', 'Bouffées de chaleur'],
      ['/symptomes/troubles-du-sommeil/', 'Troubles du sommeil'],
      ['/symptomes/changements-humeur/', "Changements d'humeur"],
      ['/symptomes/inconforts-intimes/', 'Inconforts intimes'],
      ['/symptomes/brouillard-mental/', 'Brouillard mental'],
      ['/symptomes/prise-de-poids/', 'Prise de poids'],
    ],
    rights: 'Tous droits réservés.',
    legal: [
      ['/politique-confidentialite.html', 'Politique de confidentialité'],
      ['/mentions-legales.html', 'Mentions légales'],
      ['/cookies.html', 'Ajuster vos préférences'],
    ],
    cookieTitle: 'Ce site utilise des cookies',
    cookieText: "Nous utilisons des cookies essentiels et, avec votre accord, Calendly (prise de rendez-vous) et Google Analytics (mesure d'audience).",
    cookieMore: 'En savoir plus',
    cookieAll: 'Tout accepter',
    cookieEssential: 'Essentiel seulement',
    cookieCustom: 'Personnaliser',
    faqTitle: 'Questions fréquentes',
    relatedTitle: 'À lire aussi',
    updated: 'Mis à jour le 6 octobre 2026',
    author: 'Par Sabine Trierweiler, consultante certifiée Menopulse®',
  },
  de: {
    locale: 'de_DE',
    home: '/de/',
    fallback: '/',
    nav: [
      ['/de/', 'Startseite'],
      ['/de/wechseljahre-begleitung/', 'Begleitung'],
      ['/de/online-beratung-wechseljahre/', 'Online-Beratung'],
      ['/de/sabine-trierweiler/', 'Über mich'],
      ['/de/#contact', 'Kontakt'],
    ],
    langLabel: 'Aktive Sprache: Deutsch — Cliquer pour Français',
    flag: '🇩🇪',
    code: 'DE',
    cta: '20 Min. Anruf gratis',
    ctaSecondary: 'Nachricht senden',
    ctaBoxTitle: 'Kostenloses Kennenlerngespräch',
    ctaBoxText: '20 Minuten, um über Ihre Situation zu sprechen und zu sehen, ob meine Begleitung zu Ihnen passt. Unverbindlich.',
    ctaBoxBtn: 'Gespräch buchen',
    breadcrumbHome: 'Startseite',
    disclaimerTitle: 'Hinweis',
    disclaimer: 'Diese Begleitung ersetzt keine medizinische Betreuung. Sie ergänzt sie im Rahmen eines pädagogischen und präventiven Ansatzes. Bei ungewöhnlichen oder starken Beschwerden wenden Sie sich bitte an Ihre Ärztin bzw. Ihren Arzt oder Ihre Gynäkologin.',
    footerText: 'Sabine Trierweiler, zertifizierte Beraterin für Prämenopause und Menopause – Praxis in Creutzwald (Lothringen) und online.',
    footerNav: 'Navigation',
    footerServices: 'Leistungen',
    footerSymptoms: 'Mehr',
    services: [
      ['/de/wechseljahre-begleitung/', 'Begleitung in den Wechseljahren'],
      ['/de/online-beratung-wechseljahre/', 'Online-Beratung'],
      ['/de/sabine-trierweiler/', 'Über Sabine Trierweiler'],
    ],
    symptoms: [
      ['/', 'Version française'],
    ],
    rights: 'Alle Rechte vorbehalten.',
    legal: [
      ['/politique-confidentialite.html', 'Datenschutz'],
      ['/mentions-legales.html', 'Impressum'],
      ['/cookies.html', 'Einstellungen anpassen'],
    ],
    cookieTitle: 'Diese Website verwendet Cookies',
    cookieText: 'Wir verwenden technisch notwendige Cookies und, mit Ihrer Zustimmung, Calendly (Terminbuchung) und Google Analytics (Reichweitenmessung).',
    cookieMore: 'Mehr erfahren',
    cookieAll: 'Alle akzeptieren',
    cookieEssential: 'Nur notwendige',
    cookieCustom: 'Anpassen',
    faqTitle: 'Häufige Fragen',
    relatedTitle: 'Weiterlesen',
    updated: 'Aktualisiert am 6. Oktober 2026',
    author: 'Von Sabine Trierweiler, zertifizierte Menopulse®-Beraterin',
  },
};

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

function jsonLd(page, t) {
  const url = SITE + page.path;
  const graph = [];

  graph.push({
    '@type': page.schemaType || 'WebPage',
    '@id': url + '#webpage',
    url,
    name: page.title,
    description: page.description,
    inLanguage: page.lang === 'de' ? 'de-DE' : 'fr-FR',
    isPartOf: { '@id': SITE + '/#website' },
    about: { '@id': page.about || BUSINESS_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: PHOTO },
    dateModified: MODIFIED,
    author: { '@id': PERSON_ID },
    breadcrumb: { '@id': url + '#breadcrumb' },
    ...(page.schemaType === 'ProfilePage' ? { mainEntity: { '@id': PERSON_ID } } : {}),
  });

  const crumbs = [[t.home, t.breadcrumbHome], ...(page.breadcrumb || [])];
  graph.push({
    '@type': 'BreadcrumbList',
    '@id': url + '#breadcrumb',
    itemListElement: crumbs.map(([href, name], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: SITE + href,
    })),
  });

  if (page.service) {
    graph.push({
      '@type': 'Service',
      '@id': url + '#service',
      name: page.service.name,
      serviceType: page.service.type,
      description: page.description,
      provider: { '@id': BUSINESS_ID },
      areaServed: page.service.area || ['Moselle', 'France'],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: url,
        availableLanguage: ['French', 'German'],
      },
    });
  }

  if (page.article) {
    graph.push({
      '@type': 'Article',
      '@id': url + '#article',
      headline: stripTags(page.h1),
      description: page.description,
      inLanguage: page.lang === 'de' ? 'de-DE' : 'fr-FR',
      image: PHOTO,
      datePublished: MODIFIED,
      dateModified: MODIFIED,
      author: { '@id': PERSON_ID },
      publisher: { '@id': BUSINESS_ID },
      mainEntityOfPage: { '@id': url + '#webpage' },
    });
  }

  if (page.faq && page.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': url + '#faq',
      mainEntity: page.faq.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(a) },
      })),
    });
  }

  // Lightweight references so each page is self-contained for crawlers.
  graph.push({
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Sabine Trierweiler',
    jobTitle: page.lang === 'de'
      ? 'Zertifizierte Beraterin für Prämenopause und Menopause'
      : 'Consultante certifiée en préménopause et ménopause',
    image: PHOTO,
    url: SITE + '/sabine-trierweiler/',
    worksFor: { '@id': BUSINESS_ID },
    sameAs: [
      'https://www.instagram.com/harmony.feminine/',
      'https://www.facebook.com/share/1BCX2gtFEr/',
    ],
  });
  graph.push({
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': BUSINESS_ID,
    name: 'Harmony Féminine',
    url: SITE + '/',
    image: PHOTO,
    email: 'sabine@harmony-feminine.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 Rue Albert Einstein',
      addressLocality: 'Creutzwald',
      postalCode: '57150',
      addressCountry: 'FR',
    },
  });

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

function navbar(page, t) {
  const links = t.nav.map(([href, label]) => {
    const active = href === page.path ? ' active" aria-current="page' : '';
    return `        <li class="nav-item"><a class="nav-link${active}" href="${href}">${label}</a></li>`;
  }).join('\n');
  return `<nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="${t.home}">
      <span class="fw-bold">Harmony</span> Féminine
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-label="NavMenu">
      <i class="bi bi-list fs-4" style="color:var(--bs-primary)"></i>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1 mb-2 mb-lg-0">
${links}
        <li class="nav-item ms-lg-2" style="padding:0.4rem 1rem!important;">
          <button class="lang-toggle" id="langToggle" onclick="toggleLang()" aria-label="${t.langLabel}">
            <span id="langFlag">${t.flag}</span>
            <span id="langCode">${t.code}</span>
            <i class="bi bi-translate"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
}

function breadcrumbHtml(page, t) {
  const crumbs = [[t.home, t.breadcrumbHome], ...(page.breadcrumb || [])];
  return `<nav aria-label="breadcrumb" class="hf-breadcrumb">
      <ol>
${crumbs.map(([href, name], i) => i === crumbs.length - 1
    ? `        <li aria-current="page">${name}</li>`
    : `        <li><a href="${href}">${name}</a></li>`).join('\n')}
      </ol>
    </nav>`;
}

function faqHtml(page, t) {
  if (!page.faq || !page.faq.length) return '';
  return `
        <section class="hf-faq" aria-labelledby="faq-title">
          <h2 id="faq-title">${t.faqTitle}</h2>
${page.faq.map(([q, a]) => `          <details>
            <summary>${q}</summary>
            <div class="hf-faq-answer">${a}</div>
          </details>`).join('\n')}
        </section>`;
}

function relatedHtml(page, t) {
  if (!page.related || !page.related.length) return '';
  return `
        <aside class="hf-related" aria-labelledby="related-title">
          <h2 id="related-title">${t.relatedTitle}</h2>
          <div class="row g-3">
${page.related.map(([href, title, text]) => `            <div class="col-sm-6">
              <a class="hf-related-card" href="${href}">
                <span class="hf-related-title">${title}</span>
                <span class="hf-related-text">${text}</span>
              </a>
            </div>`).join('\n')}
          </div>
        </aside>`;
}

function footer(t) {
  const list = (items) => items.map(([href, label]) => `          <li><a href="${href}">${label}</a></li>`).join('\n');
  const heading = (txt) => `<div class="h6" style="color:rgba(255,255,255,0.8); font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:1rem;">${txt}</div>`;
  return `<footer>
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="brand mb-2"><span class="fw-bold" style="font-style:italic;">Harmony</span> Féminine</div>
        <p style="font-size:0.85rem; line-height:1.75; max-width:280px;">${t.footerText}</p>
        <div class="d-flex gap-2 mt-3">
          <a href="https://www.instagram.com/harmony.feminine/" class="social-link" target="_blank" rel="noopener" aria-label="Instagram - Harmony Feminine"><i class="bi bi-instagram"></i></a>
          <a href="https://www.facebook.com/share/1BCX2gtFEr/" class="social-link" target="_blank" rel="noopener" aria-label="Facebook - Harmony Feminine"><i class="bi bi-facebook"></i></a>
        </div>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1">
        ${heading(t.footerNav)}
        <ul class="list-unstyled" style="line-height:2.2;">
${list(t.nav)}
        </ul>
      </div>
      <div class="col-6 col-lg-3">
        ${heading(t.footerServices)}
        <ul class="list-unstyled" style="line-height:2.2;">
${list(t.services)}
        </ul>
      </div>
      <div class="col-6 col-lg-2">
        ${heading(t.footerSymptoms)}
        <ul class="list-unstyled" style="line-height:2.2;">
${list(t.symptoms)}
        </ul>
      </div>
    </div>

    <hr class="footer-divider"/>
    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2" style="font-size:0.78rem;">
      <span>© 2026 Harmony Féminine. ${t.rights}</span>
      <div class="d-flex gap-3">
${t.legal.map(([href, label]) => `        <a href="${href}" class="me-3">${label}</a>`).join('\n')}
        <button id="themeToggle" class="theme-toggle" aria-label="Toggle dark mode" onclick="toggleTheme()">
          <i class="bi bi-sun-fill"  id="iconLight"></i>
          <i class="bi bi-moon-fill" id="iconDark"  style="display:none"></i>
        </button>
      </div>
    </div>
  </div>
</footer>`;
}

function cookieBanner(t) {
  return `<div id="cookie-banner">
  <div class="container">
    <div class="d-flex flex-column flex-md-row align-items-md-center gap-3">
      <div class="flex-grow-1">
        <div class="banner-title"><i class="bi bi-cookie me-2"></i>${t.cookieTitle}</div>
        <p class="banner-text mb-0">${t.cookieText} <a href="/cookies.html" class="text-dark">${t.cookieMore}</a></p>
      </div>
      <div class="d-flex flex-wrap gap-2 align-items-center flex-shrink-0">
        <button class="banner-btn-accept" onclick="cookieConsent('all')" aria-label="Accept all cookies">${t.cookieAll}</button>
        <button class="banner-btn-reject" onclick="cookieConsent('essential')" aria-label="Accept essential cookies">${t.cookieEssential}</button>
        <button class="banner-btn-prefs" onclick="window.location='/cookies.html'" aria-label="Change cookies">${t.cookieCustom}</button>
      </div>
    </div>
  </div>
</div>`;
}

/**
 * Render a full content page.
 * @param {object} page - see content-fr.js / content-de.js for the shape.
 */
function renderPage(page) {
  const t = T[page.lang];
  const url = SITE + page.path;
  const alternates = page.alternates
    ? Object.entries(page.alternates).map(([lang, href]) =>
        `  <link rel="alternate" hreflang="${lang}" href="${SITE + href}" />`).join('\n') +
      `\n  <link rel="alternate" hreflang="x-default" href="${SITE + (page.alternates.fr || page.path)}" />`
    : '';

  return `<!DOCTYPE html>
<html lang="${page.lang}" data-bs-theme="light" data-lang-fixed="${page.lang}" data-lang-fallback="${t.fallback}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <!-- Generated by scripts/build-pages.js — edit the content files, not this page. -->
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}"/>
  <meta name="robots" content="index,follow,max-image-preview:large"/>
  <meta name="author" content="Sabine Trierweiler"/>
  <meta name="theme-color" content="#f8e8e8"/>
  <link rel="canonical" href="${url}" />
${alternates}

  <meta property="og:type" content="${page.article ? 'article' : 'website'}"/>
  <meta property="og:site_name" content="Harmony Féminine"/>
  <meta property="og:locale" content="${t.locale}"/>
  <meta property="og:url" content="${url}"/>
  <meta property="og:title" content="${esc(page.title)}"/>
  <meta property="og:description" content="${esc(page.description)}"/>
  <meta property="og:image" content="${PHOTO}"/>
  <meta name="twitter:card" content="summary_large_image"/>

  <script type="application/ld+json">
${jsonLd(page, t)}
  </script>

  <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
  <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

  <link rel="stylesheet" href="/build/dist/bootstrap/css/bootstrap.min.css" />
  <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style"
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Lustria&display=swap"
        onload="this.onload=null;this.rel='stylesheet'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Lustria&display=swap">
    <link rel="stylesheet" href="/styles/icons.css">
  </noscript>
  <link rel="preload" href="/styles/icons.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <link rel="stylesheet" href="/styles/main.min.css">
  <link rel="stylesheet" href="/styles/theme.css">
  <link rel="stylesheet" href="/styles/pages.css">
</head>
<body class="lang-${page.lang}">

${navbar(page, t)}

<main>
  <header class="page-hero hf-page-hero">
    <div class="container">
      ${breadcrumbHtml(page, t)}
      <p class="eyebrow">${page.eyebrow}</p>
      <h1>${page.h1}</h1>
      <p class="hf-lead">${page.lead}</p>
      <div class="d-flex flex-wrap gap-3 mt-4">
        <button class="btn-cal" onclick="openCalendlyPopup()" aria-label="Open calendar">
          <i class="bi bi-calendar-heart"></i> ${t.cta}
        </button>
        <a href="${t.home}#contact" class="btn btn-primary">${t.ctaSecondary}</a>
      </div>
    </div>
  </header>

  <div class="container hf-page-body">
    <div class="row g-5">
      <article class="col-lg-8 hf-article">
${page.article ? `        <p class="hf-byline"><a href="${page.lang === 'de' ? '/de/sabine-trierweiler/' : '/sabine-trierweiler/'}">${t.author}</a> · ${t.updated}</p>\n` : ''}${page.body}
${faqHtml(page, t)}
${relatedHtml(page, t)}
      </article>

      <aside class="col-lg-4">
        <div class="hf-sticky">
          <div class="booking-box mb-4">
            <i class="bi bi-calendar-heart fs-1 mb-2 d-block"></i>
            <div class="mb-2" style="font-family: var(--font-display); font-size: 1.4rem;">${t.ctaBoxTitle}</div>
            <p>${t.ctaBoxText}</p>
            <button class="btn btn-light w-100 d-flex gap-2 justify-content-center" style="border-radius:var(--bs-border-radius-pill);font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;color:var(--bs-primary);font-weight:500;"
                    onclick="openCalendlyPopup()" aria-label="Open calendar">
              <i class="bi bi-box-arrow-up-right me-2"></i> ${t.ctaBoxBtn}
            </button>
          </div>
          <a class="hf-author-card" href="${page.lang === 'de' ? '/de/sabine-trierweiler/' : '/sabine-trierweiler/'}">
            <img src="/assets/images/sabine-trierweiler-consultante-menopause-sm.jpg" width="72" height="72" alt="Sabine Trierweiler" loading="lazy" decoding="async"/>
            <span>
              <strong>Sabine Trierweiler</strong>
              <span>${page.lang === 'de' ? 'Zertifizierte Menopulse®-Beraterin' : 'Consultante certifiée Menopulse®'}</span>
            </span>
          </a>
        </div>
      </aside>
    </div>
  </div>

  <section class="disclaimer-section py-5">
    <div class="d-flex justify-content-center text-center">
      <div class="mx-3 shadow border border-1 border-dark-subtle col-12 col-lg-6 p-4" style="border-radius:20px; max-width:560px; background-color: #FAD7D8; color: #3A2420">
        <i class="bi bi-exclamation-octagon fs-2 mb-2 d-block"></i>
        <div class="h6 fw-bold" style="font-family:var(--font-display); font-size:1.2rem; margin-bottom:0.75rem;">${t.disclaimerTitle}</div>
        <p style="font-size:1.0rem; opacity:0.9; line-height:1.7; margin:0;">${t.disclaimer}</p>
      </div>
    </div>
  </section>
</main>

${footer(t)}

<button id="scrollTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Scroll to top">
  <i class="bi bi-arrow-up"></i>
</button>

${cookieBanner(t)}

<script src="/dist/bootstrap/js/bootstrap.min.js" defer></script>
<script src="/js/lang.js" defer></script>
<script src="/js/cookies.js" defer></script>
<script src="/js/main.js" defer></script>

</body>
</html>
`;
}

module.exports = { renderPage, SITE, MODIFIED };
