/**
 * lang.js — Language toggle
 * Harmony Féminine
 *
 * Dependency : none
 * Load order : 1st  (before cookies.js and main.js)
 *
 * Exposes : setLang(lang), toggleLang()
 *
 * HTML required (one element per page):
 *   <button class="lang-toggle" id="langToggle" onclick="toggleLang()">
 *     <span id="langFlag">🇫🇷</span>
 *     <span id="langCode">FR</span>
 *     <i class="bi bi-translate"></i>
 *   </button>
 *
 * The button shows the CURRENT language flag + code.
 * Clicking it switches to the other language.
 *
 * SEO / URLs
 *   Bilingual pages (index.html and its copy /de/index.html) switch in place
 *   and swap the URL to the matching <link rel="alternate" hreflang> page,
 *   so / is always the French URL and /de/ the German one.
 *   Single-language pages declare <html data-lang-fixed="fr|de"> and
 *   navigate to their hreflang alternate (or data-lang-fallback) instead.
 */

(function () {
  'use strict';

  var FLAGS = { fr: '🇫🇷', de: '🇩🇪' };
  var CODES = { fr: 'FR',  de: 'DE'  };

  /**
   * Apply a language to the page.
   * Updates <body> class, <html lang>, sessionStorage and the toggle button UI.
   * @param {string} lang - 'fr' | 'de'
   */
  window.setLang = function (lang) {
    // ── body class ──────────────────────────────────────────────
    var cls = document.body.className.replace(/\blang-\w+\b/g, '').trim();
    document.body.className = cls ? cls + ' lang-' + lang : 'lang-' + lang;

    // ── <html lang> + storage ────────────────────────────────────
    document.documentElement.lang = lang;
    if (!fixedLang()) {
      sessionStorage.setItem('lang', lang);
      syncUrl(lang);
    }

    // ── Toggle button UI ─────────────────────────────────────────
    var flagEl = document.getElementById('langFlag');
    var codeEl = document.getElementById('langCode');
    if (flagEl) flagEl.textContent = FLAGS[lang] || FLAGS.fr;
    if (codeEl) codeEl.textContent = CODES[lang] || CODES.fr;

    // Accessibility: tell screen-readers which language is now active
    var btn = document.getElementById('langToggle');
    if (btn) {
      var other = lang === 'fr' ? 'Deutsch' : 'Français';
      btn.setAttribute('aria-label',
        (lang === 'fr' ? 'Langue active : Français' : 'Aktive Sprache: Deutsch') +
        ' — Cliquer pour ' + other);
    }
  };

  /**
   * Toggle between 'fr' and 'de'.
   * Called by onclick="toggleLang()" on the button.
   */
  window.toggleLang = function () {
    var fixed = fixedLang();
    var current = fixed || sessionStorage.getItem('lang') || 'fr';
    var target = current === 'fr' ? 'de' : 'fr';
    if (fixed) {
      var href = alternateHref(target) ||
                 document.documentElement.getAttribute('data-lang-fallback');
      if (href) {
        sessionStorage.setItem('lang', target);
        // Stay on the current origin (local preview, Netlify deploy previews)
        window.location.href = new URL(href, window.location.href).pathname;
        return;
      }
    }
    window.setLang(target);
  };

  /** Language forced by a single-language page, or null. */
  function fixedLang() {
    return document.documentElement.getAttribute('data-lang-fixed');
  }

  /** href of <link rel="alternate" hreflang="lang">, or null. */
  function alternateHref(lang) {
    var link = document.querySelector('link[rel="alternate"][hreflang="' + lang + '"]');
    return link ? link.getAttribute('href') : null;
  }

  /** Show the URL of the page matching the active language (no reload). */
  function syncUrl(lang) {
    var href = alternateHref(lang);
    if (!href || !window.history || !history.replaceState) return;
    try {
      var url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname) {
        history.replaceState(null, '', url.pathname + window.location.search + window.location.hash);
      }
    } catch (e) { /* different origin (local preview) — ignore */ }
  }

  /* ── Auto-detect on first visit ────────────────────────────────
     Priority: 0) page fixed language  1) German page (/de/)
               2) sessionStorage  3) browser language  4) 'fr'
  ─────────────────────────────────────────────────────────────── */
  function detectLang() {
    var fixed = fixedLang();
    if (fixed) return fixed;
    var stored = sessionStorage.getItem('lang');
    if (document.documentElement.lang === 'de') return 'de';
    if (stored === 'fr' || stored === 'de') return stored;
    var browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return browser.startsWith('de') ? 'de' : 'fr';
  }

  /* ── Init on DOMContentLoaded ──────────────────────────────────
     Button onclick is wired in HTML. We call setLang here to
     initialise the button text immediately on page load.
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    window.setLang(detectLang());
  });

})();
