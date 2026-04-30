/**
 * cookies.js — Cookie consent engine
 * Harmony Féminine
 *
 * Dependency : lang.js (setLang must be available)
 * Load order : 2nd  (after lang.js, before main.js)
 *
 * Exposes : cookieConsent(level), savePrefs(), showBanner(), loadCalendly()
 *
 * How it works
 * ────────────
 * On every page load the engine reads localStorage for a saved consent
 * record.  If none exists (or the version has changed), the cookie banner
 * is shown.  The user can:
 *   • Accept all   → Calendly script is injected dynamically
 *   • Essential    → Calendly is NOT loaded
 *   • Customise    → individual toggles on cookies.html
 *
 * To re-ask consent after a policy update: bump CONSENT_VER.
 */

(function () {
  'use strict';

  /* ── Constants ──────────────────────────────────────────────── */
  var CONSENT_KEY = 'hf_cookie_consent';
  var CONSENT_VER = '1';  // ← bump this when the cookie policy changes

  var CALENDLY_SCRIPT_ID = 'calendly-script';
  var CALENDLY_WIDGET_URL =
    'https://calendly.com/sabine-harmony-feminine/30min' +
    '?hide_gdpr_banner=1&primary_color=C8927A';


  /* ── Core consent function ──────────────────────────────────── */

  /**
   * Store consent and react immediately.
   * @param {string} level - 'all' | 'essential'
   */
  window.cookieConsent = function (level) {
    var prefs = {
      version:  CONSENT_VER,
      level:    level,
      calendly: level === 'all',
      date:     new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));

    hideBanner();
    updateStatus(prefs);
    syncToggles(prefs);

    if (prefs.calendly) loadCalendly();
  };

  /**
   * Read the individual toggles on cookies.html and save as custom prefs.
   * Called by the "Save my choices" button.
   */
  window.savePrefs = function () {
    var calFR = document.getElementById('tog-calendly');
    var calDE = document.getElementById('tog-calendly-de');
    var calEnabled = (calFR && calFR.checked) || (calDE && calDE.checked);

    var prefs = {
      version:  CONSENT_VER,
      level:    calEnabled ? 'all' : 'essential',
      calendly: calEnabled,
      date:     new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));

    hideBanner();
    updateStatus(prefs);

    if (prefs.calendly) loadCalendly();

    // Visual confirmation on the save button
    var btn = event && event.target;
    if (btn) {
      var orig = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-circle me-1"></i>Enregistré !';
      setTimeout(function () { btn.innerHTML = orig; }, 2000);
    }
  };


  /* ── Banner helpers ─────────────────────────────────────────── */

  window.showBanner = function () {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'block';
  };

  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
  }


  /* ── Calendly loader (called only after consent) ────────────── */

  /**
   * Inject the Calendly external widget script once and, if a placeholder
   * container exists on the page, render the inline widget inside it.
   */
  window.loadCalendly = function () {
    // Inject script tag only once
    if (!document.getElementById(CALENDLY_SCRIPT_ID)) {
      var s = document.createElement('script');
      s.id    = CALENDLY_SCRIPT_ID;
      s.src   = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      s.onload = function () { renderInlineCalendly(); };
      document.head.appendChild(s);

      // Also inject the Calendly CSS if not already present
      if (!document.getElementById('calendly-css')) {
        var link = document.createElement('link');
        link.id   = 'calendly-css';
        link.rel  = 'stylesheet';
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        document.head.appendChild(link);
      }
    } else {
      // Script already loaded — just render the inline widget
      renderInlineCalendly();
    }
  };

  /**
   * If a #calendly-container div is present (used on the contact section),
   * replace its placeholder with the real inline widget markup and
   * initialise it via Calendly.initInlineWidget.
   */
  function renderInlineCalendly() {
    var container = document.getElementById('calendly-container');
    if (!container) return;

    var lang    = sessionStorage.getItem('lang') || 'fr';
    var url     = CALENDLY_WIDGET_URL + (lang === 'de' ? '&locale=de' : '');

    container.innerHTML =
      '<div class="calendly-inline-widget"' +
      ' data-url="' + url + '"' +
      ' style="min-width:280px;height:680px;"></div>';

    if (typeof Calendly !== 'undefined') {
      Calendly.initInlineWidget({
        url:           url,
        parentElement: container.firstElementChild
      });
    }
  }


  /* ── Toggle sync (cookies.html) ─────────────────────────────── */

  function syncToggles(prefs) {
    var calFR = document.getElementById('tog-calendly');
    var calDE = document.getElementById('tog-calendly-de');
    if (calFR) calFR.checked = !!prefs.calendly;
    if (calDE) calDE.checked = !!prefs.calendly;
  }


  /* ── Status bar (cookies.html only) ────────────────────────── */

  function updateStatus(prefs) {
    var elFr = document.getElementById('statusTextFr');
    var elDe = document.getElementById('statusTextDe');
    if (!elFr || !elDe) return;  // not on cookies.html — skip silently

    var lang = (sessionStorage.getItem('lang') || 'fr');

    if (!prefs) {
      elFr.textContent = 'Aucune préférence enregistrée — veuillez faire votre choix.';
      elDe.textContent = 'Keine Einstellungen gespeichert — bitte treffen Sie Ihre Auswahl.';
      return;
    }

    var d = new Date(prefs.date).toLocaleDateString(lang === 'de' ? 'de-DE' : 'fr-FR');

    if (prefs.level === 'all') {
      elFr.textContent = '✓ Tous les cookies acceptés (Calendly activé) — ' + d;
      elDe.textContent = '✓ Alle Cookies akzeptiert (Calendly aktiviert) — ' + d;
    } else {
      elFr.textContent = '✓ Cookies essentiels uniquement (Calendly désactivé) — ' + d;
      elDe.textContent = '✓ Nur notwendige Cookies (Calendly deaktiviert) — ' + d;
    }
  }


  /* ── Init on DOMContentLoaded ───────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    var stored = null;
    try {
      stored = JSON.parse(localStorage.getItem(CONSENT_KEY));
    } catch (e) { /* corrupted data — treat as no consent */ }

    var hasValidConsent = stored && stored.version === CONSENT_VER;

    if (!hasValidConsent) {
      showBanner();
      updateStatus(null);
    } else {
      updateStatus(stored);
      syncToggles(stored);
    }
  });

  const calendlyTarget = document.querySelector('#calendly-container');

  const calendlyObserver = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      window.loadCalendly();
      obs.disconnect();
    }
  });

  calendlyObserver.observe(calendlyTarget);
  
})();
