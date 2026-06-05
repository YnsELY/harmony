/**
 * main.js — Site-wide logic
 * Harmony Féminine
 *
 * Dependencies : lang.js, cookies.js  (must be loaded before this file)
 * Load order   : 3rd (last)
 *
 * Responsibilities
 * ────────────────
 *  • AOS (Animate On Scroll) initialisation
 *  • Navbar scroll shadow
 *  • Scroll-to-top button visibility
 *  • Active nav-link highlighting on scroll
 *  • Calendly popup trigger
 *  • Contact section tab switcher (Calendar / Message)
 *  • Contact select options language sync
 *  • Contact form submission via PHP back-end
 *  • Popup overlay for impressum / privacy snippets
 *  • Hidden form timestamp (anti-spam)
 *
 */

(function () {
  'use strict';

  /* ── Calendly URL ────────────────────────────────────────────
     Keep this in sync with the URL in cookies.js.
     The ?hide_gdpr_banner=1 suppresses Calendly's own GDPR
     notice since we handle consent ourselves.
  ──────────────────────────────────────────────────────────── */
  var CALENDLY_URL =
    'https://calendly.com/sabine-harmony-feminine/30min' +
    '?hide_gdpr_banner=1&primary_color=C8927A';


  /* ══════════════════════════════════════════════════════════
     DOM-READY INIT
  ══════════════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {

    initTheme();
    initAOS();
    initNavbarScroll();
    initScrollTop();
    initActiveNavLinks();
    initContactTabs();
    initContactForm();

  });


  /* ── AOS ────────────────────────────────────────────────── */
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 750, once: true, offset: 80 });
    }
  }


  /* ── Navbar shadow on scroll ────────────────────────────── */
  function initNavbarScroll() {
    var nav       = document.getElementById('mainNav');
    var scrollBtn = document.getElementById('scrollTop');
    if (!nav) return;

    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
      if (scrollBtn) {
        scrollBtn.classList.toggle('visible', window.scrollY > 400);
      }
    }, { passive: true });
  }


  /* ── Scroll-to-top button ───────────────────────────────── */
  function initScrollTop() {
    var btn = document.getElementById('scrollTop');
    if (!btn) return;
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ── Highlight active nav-link on scroll ────────────────── */
  function initActiveNavLinks() {
    var sections = document.querySelectorAll('section[id]');
    var links    = document.querySelectorAll('.nav-link');
    if (!sections.length || !links.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle(
              'active',
              l.getAttribute('href') === '#' + e.target.id
            );
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }


  /* ── Contact section: Calendar / Message tab switcher ─────── */
  function initContactTabs() {
    var tabCal = document.getElementById('tabCal');
    var tabMsg = document.getElementById('tabMsg');
    if (!tabCal || !tabMsg) return;

    tabCal.addEventListener('click', function () { showTab('cal'); });
    tabMsg.addEventListener('click', function () { showTab('msg'); });
  }

  /**
   * Switch between the Calendly panel and the message form.
   * @param {string} tab - 'cal' | 'msg'
   */
  window.showTab = function (tab) {
    var tabCal    = document.getElementById('tabCal');
    var tabMsg    = document.getElementById('tabMsg');
    var panelCal  = document.getElementById('panelCal');
    var panelMsg  = document.getElementById('panelMsg');

    if (tabCal) tabCal.classList.toggle('active', tab === 'cal');
    if (tabMsg) tabMsg.classList.toggle('active', tab === 'msg');
    if (panelCal) panelCal.style.display = tab === 'cal' ? 'block' : 'none';
    if (panelMsg) panelMsg.style.display = tab === 'msg' ? 'block' : 'none';
  };


  /* ── Contact form → Netlify Forms ───────────────────────────
     Netlify handles submission server-side at deploy time.
     Requirements in the HTML form tag:
       name="contact"
       method="POST"
       data-netlify="true"
       data-netlify-honeypot="bot-field"
     And inside the form:
       <input type="hidden" name="form-name" value="contact" />
       <input type="hidden" name="bot-field" style="display:none" />
     After deploying: Netlify dashboard → Forms → contact →
       Notifications → Add notification → Email to sabine@harmony-feminine.com
  ──────────────────────────────────────────────────────────── */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;  // not present on every page

    // Anti-spam: hidden timestamp field
    var tsField = document.getElementById('form_time');
    if (tsField) tsField.value = Date.now();

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var lang = sessionStorage.getItem('lang') || 'fr';

      // Netlify Forms requires application/x-www-form-urlencoded — NOT JSON or raw FormData
      var body = new URLSearchParams(new FormData(form)).toString();

      fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    body
      })
        .then(function (res) {
          if (res.ok) {
            showFormFeedback(
              form,
              lang === 'de'
                ? 'Ihre Nachricht wurde erfolgreich gesendet. Danke!'
                : 'Votre message a bien été envoyé. Merci !',
              true
            );
            form.reset();
          } else {
            throw new Error('HTTP ' + res.status);
          }
        })
        .catch(function (err) {
          console.error('Form submission error:', err);
          showFormFeedback(
            form,
            lang === 'de'
              ? 'Ein Fehler ist aufgetreten. Bitte schreiben Sie direkt an sabine@harmony-feminine.com'
              : 'Une erreur est survenue. Écrivez directement à sabine@harmony-feminine.com',
            false
          );
        });
    });
  }

  function showFormFeedback(form, message, isSuccess) {
    var existing = form.querySelector('.form-feedback');
    if (existing) existing.remove();

    var div = document.createElement('div');
    div.className = 'form-feedback mt-3 p-3';
    div.style.cssText =
      'border-radius:var(--bs-border-radius);font-size:.88rem;' +
      (isSuccess
        ? 'background:rgba(168,181,160,.2);color:#3A5A32;border:1px solid #A8B5A0;'
        : 'background:rgba(200,146,122,.12);color:#7A2020;border:1px solid #C8927A;');
    div.textContent = message;
    form.appendChild(div);

    setTimeout(function () { div.remove(); }, 6000);
  }


  /* ── Calendly popup ─────────────────────────────────────── */

  /**
   * Open Calendly as a popup modal.
   * If the Calendly script has not yet been loaded (no consent), falls back
   * to opening the URL in a new tab.
   */
  window.openCalendlyPopup = function () {
    if (typeof Calendly !== 'undefined') {
      Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener');
    }
    return false;
  };


  /* ── Language: update Calendly widget locale + select options ── */

  /**
   * Called by lang.js's setLang after switching language.
   * Patches any dynamic UI that depends on the active language.
   *
   * Override: wrap original setLang to hook in post-switch work.
   */
  var _origSetLang = window.setLang;
  window.setLang = function (lang) {
    if (typeof _origSetLang === 'function') _origSetLang(lang);
    syncContactSelect(lang);
    syncCalendlyLocale(lang);
  };

  function syncContactSelect(lang) {
    var sel = document.querySelector('.contact-section select');
    if (!sel) return;

    var placeholder = sel.options[0];
    if (placeholder) {
      placeholder.text = lang === 'fr'
        ? 'Choisissez un sujet…'
        : 'Wählen Sie ein Thema…';
    }

    sel.querySelectorAll('option[data-fr]').forEach(function (o) {
      o.text = o.dataset[lang] || o.dataset.fr;
    });
  }

  function syncCalendlyLocale(lang) {
    var cal = document.querySelector('.calendly-inline-widget');
    if (!cal || typeof Calendly === 'undefined') return;

    var url = CALENDLY_URL + (lang === 'de' ? '&locale=de' : '');
    cal.setAttribute('data-url', url);
    Calendly.initInlineWidget({ url: url, parentElement: cal });
  }


  /* ── Popup overlay (impressum / privacy snippets) ────────── */

  /**
   * Open the generic popup overlay with dynamically loaded content.
   * @param {string} type - 'impressum' | 'privacy'
   */
  window.openPopup = function (type) {
    var overlay = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    if (!overlay || !content) return;

    var lang = sessionStorage.getItem('lang') || 'fr';

    if (type === 'impressum') {
      content.innerHTML = lang === 'de'
        ? '<h3>Impressum</h3>' +
          '<p><strong>Sabine Trierweiler</strong><br>' +
          '3 Venelle des Muriers, 57200 Sarreguemines, Frankreich<br>' +
          'E-Mail: <a href="mailto:sabine@harmony-feminine.com">sabine@harmony-feminine.com</a></p>' +
          '<p>Für vollständige Angaben: <a href="mentions-legales.html">Impressum</a></p>'
        : '<h3>Mentions légales</h3>' +
          '<p><strong>Sabine Trierweiler</strong><br>' +
          '3 Venelle des Muriers, 57200 Sarreguemines, France<br>' +
          'Email : <a href="mailto:sabine@harmony-feminine.com">sabine@harmony-feminine.com</a></p>' +
          '<p>Page complète : <a href="mentions-legales.html">Mentions légales</a></p>';
    }

    if (type === 'privacy') {
      content.innerHTML = lang === 'de'
        ? '<h3>Datenschutz</h3>' +
          '<p>Diese Website verwendet technisch notwendige Cookies sowie Calendly ' +
          '(nach Ihrer Einwilligung) für Terminbuchungen.</p>' +
          '<p>Vollständige Datenschutzerklärung: ' +
          '<a href="politique-confidentialite.html">Datenschutzerklärung</a></p>'
        : '<h3>Confidentialité</h3>' +
          '<p>Ce site utilise des cookies essentiels et, avec votre accord, Calendly ' +
          'pour la prise de rendez-vous.</p>' +
          '<p>Page complète : ' +
          '<a href="politique-confidentialite.html">Politique de confidentialité</a></p>';
    }

    overlay.style.display = 'flex';
  };

  window.closePopup = function () {
    var overlay = document.getElementById('popup');
    if (overlay) overlay.style.display = 'none';
  };

  // Close popup on backdrop click
  document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('popup');
    if (overlay) {
      overlay.addEventListener('click', function (e) {
          if (e.target === overlay) closePopup();
      });
    }
  });

  /* ── Theme (light / dark) ─────────────────────────────────── */
  
  var THEME_KEY = 'hf_theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
  
    var iconLight = document.getElementById('iconLight');
    var iconDark  = document.getElementById('iconDark');
    if (iconLight) iconLight.style.display = theme === 'dark' ? 'none'  : '';
    if (iconDark)  iconDark.style.display  = theme === 'dark' ? ''      : 'none';
  
    localStorage.setItem(THEME_KEY, theme);
  }

  window.toggleTheme = function () {
    var current = document.documentElement.getAttribute('data-bs-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };
  
  function initTheme() {
    // Priority: 1) user's saved choice  2) OS preference  3) light
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved);
      return;
    }
    var prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
})();
