/* ── AOS ── */
  AOS.init({ duration: 750, once: true, offset: 80 });

  /* ── Navbar scroll ── */
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  });

  /* ── Calendly popup
     Replace the URL path with your real Calendly username/event-type.
     The primary_color param matches --bs-primary (without the #).      ── */
  const CALENDLY_URL = 'https://calendly.com/sabine-harmony-feminine/30min?hide_gdpr_banner=1&primary_color=C8927A&hide_gdpr_banner=1';

  function openCalendlyPopup() {
    if (typeof Calendly !== 'undefined') {
      Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
    return false;
  }

  /* ── Contact tab switcher ── */
  function showTab(tab) {
    ['cal','msg'].forEach(t => {
      const btn = document.getElementById('tab' + (t === 'cal' ? 'Cal' : 'Msg'));
      btn.classList.toggle('active', t === tab);
    });
    document.getElementById('panelCal').style.display = tab === 'cal' ? 'block' : 'none';
    document.getElementById('panelMsg').style.display = tab === 'msg' ? 'block' : 'none';
  }

  /* ── Language switcher ── */
  function setLang(lang) {
    document.body.className = 'lang-' + lang;
    document.getElementById('btnFR').classList.toggle('active', lang === 'fr');
    document.getElementById('btnDE').classList.toggle('active', lang === 'de');
    document.documentElement.lang = lang;

    const sel = document.querySelector('.contact-section select');
    if (sel) sel.options[0].text = lang === 'fr' ? 'Choisissez un sujet…' : 'Wählen Sie ein Thema…';
    // Update select options
    document.querySelectorAll('.contact-section select option[data-fr]').forEach(o => {
      o.text = o.dataset[lang];
    });

    // Pass locale to Calendly inline widget
    const cal = document.querySelector('.calendly-inline-widget');
    if (cal && typeof Calendly !== 'undefined') {
      const url = CALENDLY_URL + (lang === 'de' ? '&locale=de' : '');
      cal.setAttribute('data-url', url);
      Calendly.initInlineWidget({ url, parentElement: cal });
    }
  }
  setLang('fr');

  /* ── Active nav on scroll ── */
  document.querySelectorAll('section[id]').forEach(s => {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting)
        document.querySelectorAll('.nav-link').forEach(l =>
          l.classList.toggle('active', l.getAttribute('href') === '#' + s.id));
    }, { rootMargin:'-40% 0px -55% 0px' }).observe(s);
  });

function loadCalendly() {
  // Dynamically inject Calendly widget script only after consent
  if (document.getElementById('calendly-script')) return;
  const s = document.createElement('script');
  s.id  = 'calendly-script';
  s.src = 'https://assets.calendly.com/assets/external/widget.js';
  s.async = true;
  document.head.appendChild(s);

  document.getElementById("calendly-container").innerHTML =
    '<div class="calendly-inline-widget col-12" data-url="https://calendly.com/sabine-harmony-feminine/30min?hide_gdpr_banner=1&primary_color=C8927A"></div>';
}

window.onload = function () {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith("fr")) {
    setLang("fr");
  } else {
    setLang("de");
  }
  
  document.getElementById("form_time").value = Date.now();
};
  
function openPopup(type){
  const content = document.getElementById("popup-content");

  if(type === "impressum"){
    content.innerHTML = `
    `;
  }

  if(type === "privacy"){
    content.innerHTML = `
    `;
  }

  document.getElementById("popup").style.display = "block";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  const formData = new FormData(this);

  fetch("contact.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    alert(data === "OK" ? "OK" : "Error");
  });
});

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