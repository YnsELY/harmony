/**
 * cookies.js — Cookie consent engine
 * Harmony Féminine
 *
 * Dependency : lang.js (setLang must be available)
 * Load order : 2nd  (after lang.js, before main.js)
 *
 * Exposes : cookieConsent(level), savePrefs(), showBanner(), loadCalendly(),
 *           loadAnalytics()
 *
 * How it works
 * ────────────
 * On every page load the engine reads localStorage for a saved consent
 * record.  If none exists (or the version has changed), the cookie banner
 * is shown.  The user can:
 *   • Accept all   → Calendly and Google Analytics are injected dynamically
 *   • Essential    → neither is loaded
 *   • Customise    → individual toggles on cookies.html
 *
 * Google Analytics 4 (audience measurement) is opt-in: nothing is loaded and
 * no request is sent to Google until the visitor accepts it. Set GA_ID below
 * to the GA4 measurement ID (Admin → Data streams → Web, format G-XXXXXXXXXX).
 *
 * To re-ask consent after a policy update: bump CONSENT_VER.
 */

(function () {
  'use strict';

  /* ── Constants ──────────────────────────────────────────────── */
  var CONSENT_KEY = 'hf_cookie_consent';
  var CONSENT_VER = '2';  // ← bump this when the cookie policy changes

  var GA_ID = 'G-XXXXXXXXXX';  // ← TODO: replace with the real GA4 measurement ID
  var GA_SCRIPT_ID = 'ga-script';

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
      version:   CONSENT_VER,
      level:     level,
      calendly:  level === 'all',
      analytics: level === 'all',
      date:      new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));

    hideBanner();
    updateStatus(prefs);
    syncToggles(prefs);

    if (prefs.calendly) loadCalendly();
    applyAnalytics(prefs.analytics);
  };

  /**
   * Read the individual toggles on cookies.html and save as custom prefs.
   * Called by the "Save my choices" button.
   */
  window.savePrefs = function () {
    var calFR = document.getElementById('tog-calendly');
    var calDE = document.getElementById('tog-calendly-de');
    var gaFR = document.getElementById('tog-analytics');
    var gaDE = document.getElementById('tog-analytics-de');
    var calEnabled = !!((calFR && calFR.checked) || (calDE && calDE.checked));
    var gaEnabled  = !!((gaFR && gaFR.checked) || (gaDE && gaDE.checked));

    var prefs = {
      version:   CONSENT_VER,
      level:     calEnabled && gaEnabled ? 'all' : (calEnabled || gaEnabled ? 'custom' : 'essential'),
      calendly:  calEnabled,
      analytics: gaEnabled,
      date:      new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));

    hideBanner();
    updateStatus(prefs);

    if (prefs.calendly) loadCalendly();
    applyAnalytics(prefs.analytics);

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


  /* ── Google Analytics 4 (called only after consent) ─────────── */

  function analyticsConfigured() {
    return /^G-[A-Z0-9]{6,}$/.test(GA_ID) && GA_ID !== 'G-XXXXXXXXXX';
  }

  /** Load GA4 once the visitor has accepted audience measurement. */
  window.loadAnalytics = function () {
    if (!analyticsConfigured()) return;
    window['ga-disable-' + GA_ID] = false;
    if (document.getElementById(GA_SCRIPT_ID)) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    var s = document.createElement('script');
    s.id    = GA_SCRIPT_ID;
    s.async = true;
    s.src   = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  };

  /** Stop GA and remove its cookies when consent is withdrawn. */
  function stopAnalytics() {
    if (!analyticsConfigured()) return;
    window['ga-disable-' + GA_ID] = true;
    var host  = window.location.hostname;
    var parts = host.split('.');
    var domains = [host, '.' + host];
    if (parts.length > 2) domains.push('.' + parts.slice(-2).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name === '_ga' || name.indexOf('_ga_') === 0) {
        domains.forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + d;
        });
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
    });
  }

  function applyAnalytics(enabled) {
    if (enabled) window.loadAnalytics(); else stopAnalytics();
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
    var gaFR  = document.getElementById('tog-analytics');
    var gaDE  = document.getElementById('tog-analytics-de');
    if (calFR) calFR.checked = !!prefs.calendly;
    if (calDE) calDE.checked = !!prefs.calendly;
    if (gaFR)  gaFR.checked  = !!prefs.analytics;
    if (gaDE)  gaDE.checked  = !!prefs.analytics;
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
      elFr.textContent = "✓ Tous les cookies acceptés (Calendly et mesure d'audience activés) — " + d;
      elDe.textContent = '✓ Alle Cookies akzeptiert (Calendly und Reichweitenmessung aktiviert) — ' + d;
    } else if (prefs.level === 'custom') {
      elFr.textContent = '✓ Préférences personnalisées enregistrées — ' + d;
      elDe.textContent = '✓ Individuelle Einstellungen gespeichert — ' + d;
    } else {
      elFr.textContent = '✓ Cookies essentiels uniquement (services optionnels désactivés) — ' + d;
      elDe.textContent = '✓ Nur notwendige Cookies (optionale Dienste deaktiviert) — ' + d;
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
      if (stored.analytics) window.loadAnalytics();
    }
  });

  var calendlyTarget = document.querySelector('#calendly-container');

  if (calendlyTarget) {
    var calendlyObserver = new IntersectionObserver(function (entries, obs) {
      if (entries[0].isIntersecting) {
        window.loadCalendly();
        obs.disconnect();
      }
    });

    calendlyObserver.observe(calendlyTarget);
  }
  
})();
