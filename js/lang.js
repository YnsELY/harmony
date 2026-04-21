/**
 * lang.js — Language switcher
 * Harmony Féminine
 *
 * Dependency : none
 * Load order : 1st  (before cookies.js and main.js)
 *
 * Exposes : setLang(lang)
 */

(function () {
  'use strict';

  /**
   * Switch the page language between 'fr' and 'de'.
   * Updates <body> class, <html lang>, button states,
   * and persists the choice in sessionStorage.
   *
   * @param {string} lang - 'fr' | 'de'
   */
  window.setLang = function (lang) {
    document.body.className = document.body.className
      .replace(/\blang-\w+\b/g, '')
      .trim();
    document.body.classList.add('lang-' + lang);

    document.documentElement.lang = lang;
    sessionStorage.setItem('lang', lang);

    const btnFR = document.getElementById('btnFR');
    const btnDE = document.getElementById('btnDE');
    if (btnFR) btnFR.classList.toggle('active', lang === 'fr');
    if (btnDE) btnDE.classList.toggle('active', lang === 'de');
  };

  /* ── Auto-detect on first visit ──────────────────────────────
     Priority: 1) sessionStorage (user already chose)
               2) browser navigator.language
               3) default 'fr'
  ──────────────────────────────────────────────────────────── */
  function detectLang() {
    const stored = sessionStorage.getItem('lang');
    if (stored === 'fr' || stored === 'de') return stored;

    const browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browser.startsWith('de')) return 'de';
    return 'fr';
  }

  /* ── Attach button listeners once DOM is ready ─────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    const btnFR = document.getElementById('btnFR');
    const btnDE = document.getElementById('btnDE');
    if (btnFR) btnFR.addEventListener('click', function () { setLang('fr'); });
    if (btnDE) btnDE.addEventListener('click', function () { setLang('de'); });

    // Apply language immediately so there is no flash of wrong language
    setLang(detectLang());
  });

})();
