/* ═══════════════════════════════════════════════════════════════
   COOKIE CONSENT ENGINE
   — Copy cookieConsent(), showBanner(), updateStatus() and the
     DOMContentLoaded block into every page of the site.
   — The banner HTML above also needs to be copied to each page.
   ═══════════════════════════════════════════════════════════════ */

  const CONSENT_KEY = 'hf_cookie_consent';   // localStorage key
  const CONSENT_VER = '1';                    // bump to re-ask after policy change

  function cookieConsent(level) {
    // level: 'all' | 'essential'
    const prefs = {
      version:   CONSENT_VER,
      level:     level,
      calendly:  level === 'all',
      date:      new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    document.getElementById('cookie-banner').style.display = 'none';
    updateStatus(prefs);
    if (prefs.calendly) loadCalendly();
    // Sync toggles if on cookies.html
    syncToggles(prefs);
  }

  function savePrefs() {
    const calFR = document.getElementById('tog-calendly');
    const calDE = document.getElementById('tog-calendly-de');
    const calEnabled = (calFR && calFR.checked) || (calDE && calDE.checked);
    const prefs = {
      version:  CONSENT_VER,
      level:    calEnabled ? 'all' : 'essential',
      calendly: calEnabled,
      date:     new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    document.getElementById('cookie-banner').style.display = 'none';
    updateStatus(prefs);
    if (prefs.calendly) loadCalendly();
    // Visual confirmation
    const btn = event.target;
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check-circle me-1"></i>Enregistré !';
    setTimeout(() => btn.innerHTML = orig, 2000);
  }

  function syncToggles(prefs) {
    const calFR = document.getElementById('tog-calendly');
    const calDE = document.getElementById('tog-calendly-de');
    if (calFR) calFR.checked = !!prefs.calendly;
    if (calDE) calDE.checked = !!prefs.calendly;
  }

  function showBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'block';
  }

  function loadCalendly() {
    
  }

  function updateStatus(prefs) {
    const lang = document.body.className.includes('lang-de') ? 'de' : 'fr';
    const fr = document.getElementById('statusTextFr');
    const de = document.getElementById('statusTextDe');
    if (!fr || !de) return;
    if (!prefs) {
      fr.textContent = 'Aucune préférence enregistrée — veuillez faire votre choix.';
      de.textContent = 'Keine Einstellungen gespeichert — bitte treffen Sie Ihre Auswahl.';
      return;
    }
    const d = new Date(prefs.date).toLocaleDateString(lang === 'de' ? 'de-DE' : 'fr-FR');
    if (prefs.level === 'all') {
      fr.textContent = `✓ Tous les cookies acceptés (Calendly activé) — ${d}`;
      de.textContent = `✓ Alle Cookies akzeptiert (Calendly aktiviert) — ${d}`;
    } else {
      fr.textContent = `✓ Cookies essentiels uniquement (Calendly désactivé) — ${d}`;
      de.textContent = `✓ Nur notwendige Cookies (Calendly deaktiviert) — ${d}`;
    }
  }

  /* ── Language ── */
  function setLang(lang) {
    document.body.className = 'lang-' + lang;
    document.getElementById('btnFR').classList.toggle('active', lang === 'fr');
    document.getElementById('btnDE').classList.toggle('active', lang === 'de');
    document.documentElement.lang = lang;
    sessionStorage.setItem('lang', lang);
  }
  document.getElementById('btnFR').addEventListener('click', () => setLang('fr'));
  document.getElementById('btnDE').addEventListener('click', () => setLang('de'));

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    // Language
    setLang(sessionStorage.getItem('lang') || 'fr');

    // Cookie consent
    let stored = null;
    try { stored = JSON.parse(localStorage.getItem(CONSENT_KEY)); } catch(e){}

    if (!stored || stored.version !== CONSENT_VER) {
      showBanner();
      updateStatus(null);
    } else {
      updateStatus(stored);
      syncToggles(stored);
      if (stored.calendly) loadCalendly();
    }
  });