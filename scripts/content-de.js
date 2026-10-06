/**
 * content-de.js — German content pages (/de/…)
 * Harmony Féminine
 *
 * The German home page (/de/index.html) is a copy of index.html made by
 * build-pages.js; the pages below are German-only.
 */

'use strict';

const R = {
  begleitung: ['/de/wechseljahre-begleitung/', 'Begleitung über sechs Monate', 'Mein persönliches Programm – in der Praxis oder online.'],
  online: ['/de/online-beratung-wechseljahre/', 'Online-Beratung', 'Wechseljahre-Begleitung per Video, auf Deutsch oder Französisch.'],
  sabine: ['/de/sabine-trierweiler/', 'Über mich', 'Der Weg von Sabine Trierweiler, zertifizierte Menopulse®-Beraterin.'],
  home: ['/de/', 'Startseite', 'Harmony Féminine – Begleitung in Prämenopause und Menopause.'],
};

module.exports = [
  /* ═══════════════════ ÜBER MICH ═══════════════════ */
  {
    path: '/de/sabine-trierweiler/',
    lang: 'de',
    alternates: { fr: '/sabine-trierweiler/', de: '/de/sabine-trierweiler/' },
    schemaType: 'ProfilePage',
    about: 'https://harmony-feminine.com/#sabine-trierweiler',
    title: 'Sabine Trierweiler – Zertifizierte Beraterin für die Wechseljahre | Harmony Féminine',
    description: 'Wer ist Sabine Trierweiler? 28 Jahre Friseurin, heute zertifizierte Menopulse®-Beraterin für Prämenopause und Menopause – Praxis in Creutzwald (nahe Saarlouis) und online.',
    breadcrumb: [['/de/sabine-trierweiler/', 'Sabine Trierweiler']],
    eyebrow: 'Über mich',
    h1: 'Sabine <em>Trierweiler</em>',
    lead: 'Zertifizierte Beraterin für Prämenopause und Menopause, Gründerin von Harmony Féminine. Ich begleite Frauen in Creutzwald, im Saarland und online.',
    body: `
        <figure class="hf-portrait">
          <img src="/assets/images/sabine-trierweiler-consultante-menopause-md.jpg"
               srcset="/assets/images/sabine-trierweiler-consultante-menopause-sm.jpg 320w,
                       /assets/images/sabine-trierweiler-consultante-menopause-md.jpg 512w,
                       /assets/images/sabine-trierweiler-consultante-menopause-lg.jpg 776w"
               sizes="(max-width: 600px) 100vw, 360px"
               width="512" height="605"
               alt="Porträt von Sabine Trierweiler, zertifizierte Beraterin für die Wechseljahre"
               decoding="async"/>
          <figcaption>Sabine Trierweiler, Gründerin von Harmony Féminine</figcaption>
        </figure>

        <h2>Von äußerer Schönheitspflege zum inneren Gleichgewicht</h2>
        <p>Mein Name ist <strong>Sabine Trierweiler</strong>. <strong>28 Jahre</strong> lang war ich Friseurin und habe Frauen dabei begleitet, sich schön zu fühlen und Selbstvertrauen zu gewinnen. Dabei habe ich viel zugehört: Müdigkeit, unruhige Nächte, Hitzewallungen, das Gefühl, sich selbst nicht mehr wiederzuerkennen – Themen, die rund um die 40 und 50 immer wieder auftauchten.</p>

        <h2>Meine eigenen Wechseljahre</h2>
        <p>Wie viele Frauen habe ich selbst eine Zeit der Unklarheit erlebt, mit dem Gefühl, meinen Körper nicht mehr zu verstehen. Diese Erfahrung war ein Wendepunkt: Sie hat mich dazu gebracht, mich intensiv mit Prämenopause und Menopause zu beschäftigen – bis es zu meiner Lebensaufgabe wurde.</p>

        <h2>Eine fundierte Ausbildung: die Menopulse®-Zertifizierung</h2>
        <p>Ich bin <strong>zertifizierte Menopulse®-Beraterin</strong>. Die sechsmonatige Ausbildung, gegründet von Marie Bourel, widmet sich der Begleitung von Frauen in Perimenopause und Menopause: hormonelle Zusammenhänge, Ernährung, Bewegung, Stressbewältigung, Schlaf und persönliche Neuorientierung.</p>

        <h2>Meine Mission</h2>
        <p>Ich möchte den Blick auf diese lange ignorierte Lebensphase verändern, damit Frauen sie mit mehr Gelassenheit und Verständnis erleben können. Meine Begleitung beruht auf drei Säulen: <strong>Aufklärung</strong>, <strong>Prävention</strong> und <strong>Unterstützung</strong>.</p>
        <ul>
          <li>Praxis in <strong>Creutzwald</strong> (Lothringen), nur wenige Minuten von Überherrn und Saarlouis entfernt;</li>
          <li><strong>Online-Beratung</strong> für Frauen in Deutschland, Österreich, der Schweiz und Luxemburg;</li>
          <li>Begleitung auf <strong>Deutsch und Französisch</strong>.</li>
        </ul>
        <p>Meine Arbeit ersetzt keine ärztliche Betreuung, sondern ergänzt sie.</p>
        <p class="hf-quote">„Gemeinsam gehen wir von der Unsichtbarkeit ins Licht.“</p>`,
    related: [R.begleitung, R.online, R.home],
  },

  /* ═══════════════════ BEGLEITUNG ═══════════════════ */
  {
    path: '/de/wechseljahre-begleitung/',
    lang: 'de',
    alternates: { fr: '/accompagnement-menopause/', de: '/de/wechseljahre-begleitung/' },
    title: 'Wechseljahre-Begleitung über 6 Monate – nahe Saarlouis & online | Sabine Trierweiler',
    description: 'Persönliche Begleitung in Prämenopause und Menopause über sechs Monate: Ernährung, Schlaf, Stress, Bewegung. Praxis in Creutzwald an der Grenze zum Saarland oder online. Kostenloses Erstgespräch.',
    breadcrumb: [['/de/wechseljahre-begleitung/', 'Begleitung in den Wechseljahren']],
    service: { name: 'Wechseljahre-Begleitung über 6 Monate', type: 'Wechseljahre-Coaching', area: ['Saarland', 'Moselle', 'Deutschland'] },
    eyebrow: 'Persönliche Begleitung',
    h1: 'Begleitung in den <em>Wechseljahren</em>',
    lead: 'Ein ganzheitlicher, persönlicher Ansatz, um Ihren Körper zu verstehen und diesen Übergang mit Klarheit, Ausgeglichenheit und Vertrauen zu erleben.',
    body: `
        <h2>Für wen?</h2>
        <p>Für Frauen, meist zwischen 40 und 60 Jahren, die erste Anzeichen der Prämenopause bemerken oder in der Menopause unter Beschwerden leiden – und die sich einen klaren, wohlwollenden Rahmen wünschen.</p>

        <h2 id="symptome">Typische Beschwerden</h2>
        <ul>
          <li><strong>Hitzewallungen</strong> und Nachtschweiß;</li>
          <li><strong>Schlafstörungen</strong>, nächtliches Erwachen, chronische Müdigkeit;</li>
          <li><strong>Stimmungsschwankungen</strong>, Reizbarkeit, Ängste;</li>
          <li><strong>intime Beschwerden</strong> wie vaginale Trockenheit oder häufiger Harndrang;</li>
          <li><strong>Gehirnnebel</strong>: Konzentrations- und Gedächtnisprobleme;</li>
          <li><strong>Gewichtszunahme</strong>, vor allem am Bauch.</li>
        </ul>

        <h2>Warum sechs Monate?</h2>
        <p>Gewohnheiten nachhaltig zu verändern braucht Zeit. Sechs Monate erlauben es, Beschwerden zu beobachten, Anpassungen auszuprobieren und das, was Ihnen guttut, fest im Alltag zu verankern.</p>

        <h2>Ablauf</h2>
        <ol class="hf-steps">
          <li><strong>Kostenloses Kennenlerngespräch (20 Min.)</strong> – wir prüfen gemeinsam, ob meine Begleitung zu Ihnen passt.</li>
          <li><strong>Ausführliche Bestandsaufnahme</strong> – Beschwerden, Ernährung, Schlaf, Bewegung, Stress und Ihre Prioritäten.</li>
          <li><strong>Persönlicher Plan</strong> – konkrete, schrittweise Ziele rund um Ernährung, Bewegung, Schlaf und Stressbewältigung.</li>
          <li><strong>Regelmäßige Folgetermine</strong> – wir passen den Plan an und feiern Fortschritte.</li>
          <li><strong>Abschlussbilanz</strong> – Sie gehen mit Ihren Werkzeugen und einer klaren Perspektive weiter.</li>
        </ol>
        <!-- TODO Sabine: Anzahl und Dauer der Sitzungen sowie Preis ergänzen. -->

        <h2>In der Praxis oder online</h2>
        <p>Die Praxis befindet sich in der 6 rue Albert Einstein, 57150 Creutzwald (Frankreich) – nur wenige Minuten von Überherrn, etwa 20 Minuten von Saarlouis. Alternativ finden die Termine <a href="/de/online-beratung-wechseljahre/">online per Video</a> statt.</p>`,
    faq: [
      ['Sind Sie Ärztin?', 'Nein. Ich bin zertifizierte Menopulse®-Beraterin. Meine Begleitung ist pädagogisch und präventiv; sie ersetzt keine ärztliche Betreuung und umfasst weder Diagnosen noch Verschreibungen.'],
      ['Findet die Begleitung auf Deutsch statt?', 'Ja, ich begleite Sie auf Deutsch oder auf Französisch – in der Praxis in Creutzwald oder online.'],
      ['Wie beginne ich?', 'Buchen Sie ein kostenloses, unverbindliches 20-minütiges Kennenlerngespräch direkt in meinem Online-Kalender.'],
    ],
    related: [R.online, R.sabine, R.home],
  },

  /* ═══════════════════ ONLINE ═══════════════════ */
  {
    path: '/de/online-beratung-wechseljahre/',
    lang: 'de',
    alternates: { fr: '/consultation-menopause-en-ligne/', de: '/de/online-beratung-wechseljahre/' },
    title: 'Online-Beratung Wechseljahre – Menopause-Coaching per Video | Sabine Trierweiler',
    description: 'Wechseljahre-Coaching online mit Sabine Trierweiler, zertifizierte Menopulse®-Beraterin: Video-Sitzungen über Teams, Zoom oder Webex für Frauen in Deutschland, Österreich, der Schweiz und Luxemburg.',
    breadcrumb: [['/de/online-beratung-wechseljahre/', 'Online-Beratung']],
    service: { name: 'Online-Beratung Wechseljahre', type: 'Menopause-Coaching online', area: ['Deutschland', 'Österreich', 'Schweiz', 'Luxemburg'] },
    eyebrow: 'Per Video, wo immer Sie sind',
    h1: 'Online-Beratung in den <em>Wechseljahren</em>',
    lead: 'Dieselbe Begleitung wie in der Praxis – bequem von zu Hause aus, in Deutschland, Österreich, der Schweiz oder Luxemburg.',
    body: `
        <h2>Begleitung, die sich Ihrem Leben anpasst</h2>
        <p>Zwischen Beruf, Familie und Müdigkeit ist ein Praxisbesuch nicht immer einfach. Mit der Online-Beratung werden Sie von zu Hause aus begleitet – vertraulich und flexibel.</p>

        <h2>So funktioniert es</h2>
        <ol class="hf-steps">
          <li><strong>Sie buchen</strong> Ihr kostenloses 20-minütiges Kennenlerngespräch.</li>
          <li><strong>Wir besprechen</strong> Ihre Situation und Ihre Erwartungen.</li>
          <li><strong>Wenn wir zusammenarbeiten</strong>, finden die Sitzungen der <a href="/de/wechseljahre-begleitung/">sechsmonatigen Begleitung</a> per Video statt.</li>
        </ol>

        <h2>Technik</h2>
        <p>Microsoft Teams, Zoom oder Cisco Webex – Sie wählen. Ein Computer, Tablet oder Smartphone mit Internetverbindung genügt.</p>`,
    faq: [
      ['Ist eine Online-Beratung genauso wirksam?', 'Ja. Die Begleitung beruht auf Gespräch, Verständnis und konkreten Gewohnheiten – das funktioniert per Video genauso gut.'],
      ['Bleibt alles vertraulich?', 'Ja. Die Sitzungen sind Einzelgespräche, und alles, was Sie teilen, bleibt streng vertraulich.'],
    ],
    related: [R.begleitung, R.sabine, R.home],
  },
];
