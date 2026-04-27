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
 *     <i class="bi bi-arrow-left-right"></i>
 *   </button>
 *
 * The button shows the CURRENT language flag + code.
 * Clicking it switches to the other language.
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
    sessionStorage.setItem('lang', lang);

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
    var current = sessionStorage.getItem('lang') || 'fr';
    window.setLang(current === 'fr' ? 'de' : 'fr');
  };

  /* ── Auto-detect on first visit ────────────────────────────────
     Priority: 1) sessionStorage  2) browser language  3) 'fr'
  ─────────────────────────────────────────────────────────────── */
  function detectLang() {
    var stored = sessionStorage.getItem('lang');
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
