  function setLang(lang) {
    document.body.className = 'lang-' + lang;
    document.getElementById('btnFR').classList.toggle('active', lang === 'fr');
    document.getElementById('btnDE').classList.toggle('active', lang === 'de');
    document.documentElement.lang = lang;
  }
  // Auto-detect from main site if possible
  const saved = sessionStorage.getItem('lang');
  setLang(saved || 'fr');

  document.getElementById('btnFR').addEventListener('click', () => { sessionStorage.setItem('lang','fr'); setLang('fr'); });
  document.getElementById('btnDE').addEventListener('click', () => { sessionStorage.setItem('lang','de'); setLang('de'); });

/*
  function setLang(lang) {
    document.body.className = 'lang-' + lang;
    document.getElementById('btnFR').classList.toggle('active', lang === 'fr');
    document.getElementById('btnDE').classList.toggle('active', lang === 'de');
    document.documentElement.lang = lang;
    sessionStorage.setItem('lang', lang);
  }
  document.getElementById('btnFR').addEventListener('click', () => setLang('fr'));
  document.getElementById('btnDE').addEventListener('click', () => setLang('de'));
  setLang(sessionStorage.getItem('lang') || 'fr');
*/