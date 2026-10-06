/**
 * content-fr.js — French content pages
 * Harmony Féminine
 *
 * Each entry becomes <path>/index.html (see build-pages.js).
 * Keep medical caution: inform and accompany, never diagnose or prescribe.
 */

'use strict';

const R = {
  programme: ['/accompagnement-menopause/', 'L’accompagnement sur 6 mois', 'Le déroulé de mon programme personnalisé, au cabinet ou en ligne.'],
  premenopause: ['/accompagnement-premenopause/', 'Accompagnement préménopause', 'Comprendre les premiers signes et agir tôt, dès 40 ans.'],
  enLigne: ['/consultation-menopause-en-ligne/', 'Consultation en ligne', 'Un accompagnement en visio, partout en France et en Europe.'],
  local: ['/coach-menopause-creutzwald-moselle/', 'Cabinet de Creutzwald', 'Accompagnement ménopause en Moselle-Est : Saint-Avold, Forbach, Boulay…'],
  sabine: ['/sabine-trierweiler/', 'Qui suis-je ?', 'Le parcours de Sabine Trierweiler, consultante certifiée Menopulse®.'],
  symptomes: ['/symptomes/', 'Tous les symptômes', 'Les signes de la préménopause et de la ménopause expliqués simplement.'],
  bouffees: ['/symptomes/bouffees-de-chaleur/', 'Bouffées de chaleur', 'Comprendre les bouffées de chaleur et les sueurs nocturnes.'],
  sommeil: ['/symptomes/troubles-du-sommeil/', 'Troubles du sommeil', 'Insomnies et réveils nocturnes à la ménopause.'],
  humeur: ['/symptomes/changements-humeur/', 'Changements d’humeur', 'Irritabilité, anxiété, tristesse : ce qui se joue.'],
  intime: ['/symptomes/inconforts-intimes/', 'Inconforts intimes', 'Sécheresse vaginale, libido, envies fréquentes d’uriner.'],
  brouillard: ['/symptomes/brouillard-mental/', 'Brouillard mental', 'Trous de mémoire et difficultés de concentration.'],
  poids: ['/symptomes/prise-de-poids/', 'Prise de poids', 'Pourquoi le corps change à la ménopause, surtout au niveau du ventre.'],
};

const symptomBreadcrumb = (path, name) => [['/symptomes/', 'Symptômes'], [path, name]];

const accompaniment = `
        <h2>Comment je peux vous accompagner</h2>
        <p>Dans mon <a href="/accompagnement-menopause/">accompagnement sur six mois</a>, nous partons de <strong>votre</strong> quotidien : vos symptômes, votre rythme, votre alimentation, votre sommeil, votre niveau de stress. Ensemble, nous construisons un plan réaliste, pas à pas, et nous l’ajustons au fil des semaines.</p>
        <p>Les rendez-vous ont lieu à mon <a href="/coach-menopause-creutzwald-moselle/">cabinet de Creutzwald</a> (Moselle) ou <a href="/consultation-menopause-en-ligne/">en visio</a>, en français ou en allemand. Le premier appel de 20 minutes est offert.</p>`;

module.exports = [
  /* ═══════════════════ À PROPOS ═══════════════════ */
  {
    path: '/sabine-trierweiler/',
    lang: 'fr',
    alternates: { fr: '/sabine-trierweiler/', de: '/de/sabine-trierweiler/' },
    schemaType: 'ProfilePage',
    about: 'https://harmony-feminine.com/#sabine-trierweiler',
    title: 'Sabine Trierweiler – Consultante certifiée en ménopause | Harmony Féminine',
    description: 'Qui est Sabine Trierweiler ? Ancienne coiffeuse pendant 28 ans, aujourd’hui consultante certifiée Menopulse® en préménopause et ménopause à Creutzwald (Moselle) et en ligne.',
    breadcrumb: [['/sabine-trierweiler/', 'Sabine Trierweiler']],
    eyebrow: 'À propos',
    h1: 'Sabine <em>Trierweiler</em>',
    lead: 'Consultante certifiée en préménopause et ménopause, fondatrice d’Harmony Féminine. J’accompagne les femmes à Creutzwald, en Moselle et en ligne.',
    body: `
        <figure class="hf-portrait">
          <img src="/assets/images/sabine-trierweiler-consultante-menopause-md.jpg"
               srcset="/assets/images/sabine-trierweiler-consultante-menopause-sm.jpg 320w,
                       /assets/images/sabine-trierweiler-consultante-menopause-md.jpg 512w,
                       /assets/images/sabine-trierweiler-consultante-menopause-lg.jpg 776w"
               sizes="(max-width: 600px) 100vw, 360px"
               width="512" height="605"
               alt="Portrait de Sabine Trierweiler, consultante certifiée en préménopause et ménopause"
               decoding="async"/>
          <figcaption>Sabine Trierweiler, fondatrice d’Harmony Féminine</figcaption>
        </figure>

        <h2>Du soin de la beauté extérieure à l’équilibre intérieur</h2>
        <p>Je m’appelle <strong>Sabine Trierweiler</strong>. Pendant <strong>28 ans</strong>, j’ai été coiffeuse. J’ai accompagné des centaines de femmes à se sentir belles, à prendre soin de leur image et à reprendre confiance en elles. Derrière le fauteuil, j’ai aussi beaucoup écouté : la fatigue, les nuits hachées, les bouffées de chaleur, le sentiment de ne plus se reconnaître… Des confidences qui revenaient sans cesse, souvent autour de la quarantaine et de la cinquantaine.</p>

        <h2>Mon propre passage par la ménopause</h2>
        <p>Comme beaucoup de femmes, j’ai moi-même traversé une période de flou, marquée par une forme d’errance, avec le sentiment de ne plus comprendre mon corps ni ce qui s’y jouait. Cette expérience a été un véritable tournant. Elle m’a conduite à m’intéresser en profondeur à la préménopause et à la ménopause, jusqu’à en faire une mission de vie.</p>

        <h2>Une formation rigoureuse : la certification Menopulse®</h2>
        <p>J’ai choisi de me former sérieusement afin d’acquérir une compréhension globale et fiable de cette transition. Je suis <strong>consultante certifiée Menopulse®</strong>, une formation de six mois dédiée à l’accompagnement des femmes en périménopause et en ménopause, fondée par Marie Bourel : mécanismes hormonaux, nutrition, mouvement, gestion du stress, sommeil et reconstruction de l’identité.</p>
        <p><a href="https://www.menopulse.com" target="_blank" rel="noopener"><img src="/assets/images/Menopulse_LogoCertifié_transparent.png" width="140" height="140" alt="Logo Certifiée Menopulse®" loading="lazy" decoding="async"/></a></p>

        <h2>Ma mission</h2>
        <p>Aujourd’hui, j’ai à cœur de faire évoluer le regard porté sur cette étape de vie longtemps ignorée et minimisée, pour permettre aux femmes de la vivre avec plus de sérénité et de compréhension. Mon accompagnement repose sur trois piliers : <strong>informer</strong>, <strong>prévenir</strong> et <strong>soutenir</strong>.</p>
        <ul>
          <li>Un cabinet à <strong>Creutzwald</strong>, en Moselle-Est, à quelques minutes de Saint-Avold, Boulay et Bouzonville.</li>
          <li>Des <strong>consultations en ligne</strong> pour toutes les femmes, où qu’elles vivent.</li>
          <li>Un accompagnement en <strong>français et en allemand</strong>, idéal pour les femmes de la région frontalière et de la Sarre.</li>
        </ul>
        <p>Mon travail ne remplace pas votre médecin : il le complète. Je vous aide à comprendre ce qui se passe, à mettre en place des habitudes qui vous font du bien et à préparer vos rendez-vous médicaux avec les bonnes questions.</p>
        <p class="hf-quote">« Ensemble, passons de l’invisibilité à la lumière. »</p>`,
    related: [R.programme, R.premenopause, R.local, R.symptomes],
  },

  /* ═══════════════════ PROGRAMME ═══════════════════ */
  {
    path: '/accompagnement-menopause/',
    lang: 'fr',
    alternates: { fr: '/accompagnement-menopause/', de: '/de/wechseljahre-begleitung/' },
    title: 'Accompagnement ménopause sur 6 mois – Creutzwald & en ligne | Sabine Trierweiler',
    description: 'Programme d’accompagnement personnalisé de la ménopause sur 6 mois : nutrition, sommeil, stress, mouvement. Au cabinet à Creutzwald (Moselle) ou en visio. Appel découverte offert.',
    breadcrumb: [['/accompagnement-menopause/', 'Accompagnement ménopause']],
    service: { name: 'Accompagnement ménopause sur 6 mois', type: 'Coaching ménopause' },
    eyebrow: 'Accompagnement personnalisé',
    h1: 'Accompagnement de la <em>ménopause</em> sur six mois',
    lead: 'Une approche holistique et bienveillante pour comprendre votre corps et traverser cette transition avec clarté, équilibre et confiance.',
    body: `
        <h2>Pour qui ?</h2>
        <p>Mon accompagnement s’adresse aux femmes, généralement entre 40 et 60 ans, qui :</p>
        <ul>
          <li>ressentent les premiers signes de la <a href="/accompagnement-premenopause/">préménopause</a> (cycles irréguliers, sommeil perturbé, humeur en dents de scie) ;</li>
          <li>sont en ménopause et vivent des symptômes qui pèsent sur leur quotidien : <a href="/symptomes/bouffees-de-chaleur/">bouffées de chaleur</a>, <a href="/symptomes/troubles-du-sommeil/">insomnies</a>, <a href="/symptomes/prise-de-poids/">prise de poids</a>, <a href="/symptomes/brouillard-mental/">brouillard mental</a>… ;</li>
          <li>se sentent perdues face aux informations contradictoires et ont besoin d’un cadre clair ;</li>
          <li>veulent agir en prévention pour leur santé à long terme.</li>
        </ul>

        <h2>Pourquoi six mois ?</h2>
        <p>Changer durablement ses habitudes demande du temps. Six mois permettent d’observer vos symptômes, de tester des ajustements, de mesurer ce qui fonctionne pour <strong>vous</strong> et de l’ancrer dans votre quotidien. C’est aussi le temps nécessaire pour retrouver de la confiance, sans pression.</p>

        <h2>Le déroulé de l’accompagnement</h2>
        <ol class="hf-steps">
          <li><strong>Appel découverte offert (20 min)</strong> — nous faisons connaissance et vérifions que mon accompagnement correspond à vos besoins.</li>
          <li><strong>Bilan approfondi</strong> — vos symptômes, votre histoire, votre alimentation, votre sommeil, votre activité physique, votre niveau de stress et vos priorités.</li>
          <li><strong>Plan personnalisé</strong> — des objectifs concrets et progressifs autour de quatre leviers : nutrition, mouvement, sommeil et gestion du stress.</li>
          <li><strong>Séances de suivi régulières</strong> — nous ajustons le plan, levons les blocages et célébrons les progrès.</li>
          <li><strong>Bilan final</strong> — vous repartez avec vos outils, vos repères et une vision claire pour la suite.</li>
        </ol>
        <!-- TODO Sabine : préciser le nombre de séances, leur durée et le tarif du programme. -->

        <h2>Les trois piliers de ma méthode</h2>
        <h3>Informer</h3>
        <p>Comprendre ce qui se passe dans votre corps vous donne le pouvoir de faire des choix éclairés. Je vous explique simplement les mécanismes hormonaux de la périménopause et de la ménopause, et je vous aide à préparer vos échanges avec votre médecin.</p>
        <h3>Prévenir</h3>
        <p>Des solutions concrètes — nutrition, mouvement, gestion du stress, hygiène de sommeil — pour atténuer les symptômes et préserver votre santé à long terme (os, cœur, muscles, moral).</p>
        <h3>Soutenir</h3>
        <p>Un espace sûr et sans jugement où vos expériences sont entendues, validées et accompagnées avec compassion.</p>

        <h2>Au cabinet ou en ligne</h2>
        <p>Les séances se déroulent à mon <a href="/coach-menopause-creutzwald-moselle/">cabinet de Creutzwald</a>, 6 rue Albert Einstein, ou <a href="/consultation-menopause-en-ligne/">en visio</a> (Teams, Zoom ou Webex). L’accompagnement est possible en français comme en allemand.</p>
        <!-- TODO Sabine : ajouter 2–3 témoignages de clientes (avec leur accord). -->`,
    faq: [
      ['Êtes-vous médecin ?', 'Non. Je suis consultante certifiée Menopulse® en préménopause et ménopause. Mon accompagnement est éducatif et préventif ; il ne remplace pas un suivi médical et ne comporte ni diagnostic ni prescription. Je vous encourage au contraire à garder un suivi régulier avec votre médecin, votre gynécologue ou votre sage-femme.'],
      ['Puis-je suivre l’accompagnement si je prends un traitement hormonal ?', 'Oui. L’accompagnement porte sur l’hygiène de vie (alimentation, sommeil, activité physique, stress) et il est compatible avec un traitement hormonal de la ménopause décidé avec votre médecin.'],
      ['Est-ce que je suis trop jeune pour être accompagnée ?', 'Les premiers signes de la périménopause apparaissent souvent à partir de 40–45 ans. Il n’est jamais trop tôt pour comprendre ce qui se passe et prendre de bonnes habitudes : c’est même le meilleur moment pour agir en prévention.'],
      ['Comment se passe le premier rendez-vous ?', 'Tout commence par un appel découverte gratuit de 20 minutes, à réserver directement dans mon agenda en ligne. Nous faisons le point sur votre situation et vos attentes, sans aucun engagement.'],
      ['Vous déplacez-vous en dehors de Creutzwald ?', 'Je reçois au cabinet de Creutzwald et j’accompagne en visio partout ailleurs. Pour les ateliers et les conférences, je peux me déplacer en Moselle et en Sarre.'],
    ],
    related: [R.premenopause, R.enLigne, R.symptomes, R.sabine],
  },

  /* ═══════════════════ PRÉMÉNOPAUSE ═══════════════════ */
  {
    path: '/accompagnement-premenopause/',
    lang: 'fr',
    title: 'Préménopause : symptômes et accompagnement dès 40 ans | Harmony Féminine',
    description: 'Préménopause ou périménopause : à quel âge, quels symptômes, combien de temps ? Comprendre cette période et être accompagnée dès 40 ans par Sabine Trierweiler, à Creutzwald ou en ligne.',
    breadcrumb: [['/accompagnement-premenopause/', 'Accompagnement préménopause']],
    service: { name: 'Accompagnement de la préménopause', type: 'Coaching périménopause' },
    article: true,
    eyebrow: 'Préménopause & périménopause',
    h1: 'Préménopause : comprendre les premiers signes et <em>agir tôt</em>',
    lead: 'Cycles qui changent, nuits agitées, humeur imprévisible… et si c’était la préménopause ? Voici l’essentiel pour comprendre cette période et la vivre sereinement.',
    body: `
        <h2>Préménopause, périménopause, ménopause : quelles différences ?</h2>
        <ul>
          <li><strong>La préménopause</strong> (on parle plus précisément de <strong>périménopause</strong>) est la période de transition qui précède la ménopause. Les hormones, en particulier les œstrogènes et la progestérone, commencent à fluctuer.</li>
          <li><strong>La ménopause</strong> est confirmée lorsqu’il n’y a plus eu de règles depuis <strong>12 mois consécutifs</strong>. En France, elle survient en moyenne vers 51 ans.</li>
          <li><strong>La post-ménopause</strong> désigne toutes les années qui suivent.</li>
        </ul>

        <h2>À quel âge commence la préménopause ?</h2>
        <p>Elle débute souvent dans la deuxième moitié de la quarantaine, parfois plus tôt, et peut durer plusieurs années. Chaque femme la vit différemment : certaines remarquent à peine les changements, d’autres sont fortement gênées au quotidien.</p>

        <h2>Les signes les plus fréquents</h2>
        <ul>
          <li>Cycles plus courts, plus longs ou irréguliers, règles plus abondantes ou plus légères ;</li>
          <li><a href="/symptomes/troubles-du-sommeil/">troubles du sommeil</a> et fatigue ;</li>
          <li><a href="/symptomes/changements-humeur/">irritabilité, anxiété, baisse de moral</a> ;</li>
          <li>premières <a href="/symptomes/bouffees-de-chaleur/">bouffées de chaleur</a> ou sueurs nocturnes ;</li>
          <li><a href="/symptomes/brouillard-mental/">difficultés de concentration</a>, trous de mémoire ;</li>
          <li>seins sensibles, migraines, <a href="/symptomes/prise-de-poids/">prise de poids</a> autour du ventre ;</li>
          <li>baisse de libido, <a href="/symptomes/inconforts-intimes/">inconforts intimes</a>.</li>
        </ul>
        <p>Ces signes ne sont pas spécifiques : parlez-en à votre médecin pour écarter d’autres causes (thyroïde, carences, etc.). En cas de saignements très abondants, entre les règles ou après les rapports, consultez rapidement.</p>

        <h2>Pourquoi se faire accompagner dès maintenant ?</h2>
        <p>La périménopause est une fenêtre idéale pour agir. Les habitudes installées à ce moment-là — alimentation, activité physique, sommeil, gestion du stress — ont un impact sur la façon dont vous vivrez la ménopause et sur votre santé à long terme. Comprendre ce qui se passe permet aussi de sortir de l’errance et de se sentir moins seule.</p>
${accompaniment}`,
    faq: [
      ['Quelle est la différence entre préménopause et périménopause ?', 'Dans le langage courant, les deux termes désignent la même période : les années de transition avant la ménopause, pendant lesquelles les hormones fluctuent. « Périménopause » est le terme médical le plus précis.'],
      ['Combien de temps dure la périménopause ?', 'Sa durée varie beaucoup d’une femme à l’autre : elle s’étend généralement sur plusieurs années et prend fin un an après les dernières règles.'],
      ['Peut-on être en préménopause à 40 ans ?', 'Oui, les premiers changements peuvent apparaître dès la quarantaine. Avant 40 ans, des symptômes de ce type doivent être signalés à un médecin.'],
    ],
    related: [R.programme, R.symptomes, R.humeur, R.sommeil],
  },

  /* ═══════════════════ EN LIGNE ═══════════════════ */
  {
    path: '/consultation-menopause-en-ligne/',
    lang: 'fr',
    alternates: { fr: '/consultation-menopause-en-ligne/', de: '/de/online-beratung-wechseljahre/' },
    title: 'Coach ménopause en ligne – Consultation en visio | Sabine Trierweiler',
    description: 'Accompagnement ménopause et préménopause en ligne avec Sabine Trierweiler, consultante certifiée Menopulse®. Séances en visio (Teams, Zoom, Webex), en français ou en allemand. Appel offert.',
    breadcrumb: [['/consultation-menopause-en-ligne/', 'Consultation en ligne']],
    service: { name: 'Consultation ménopause en ligne', type: 'Coaching ménopause en visio', area: ['France', 'Belgique', 'Suisse', 'Luxembourg', 'Deutschland'] },
    eyebrow: 'En visio, où que vous soyez',
    h1: 'Accompagnement ménopause <em>en ligne</em>',
    lead: 'Le même accompagnement qu’au cabinet, depuis chez vous : en France, en Belgique, en Suisse, au Luxembourg ou en Allemagne.',
    body: `
        <h2>Un accompagnement qui s’adapte à votre vie</h2>
        <p>Entre le travail, la famille et la fatigue, se déplacer n’est pas toujours simple. Les consultations en ligne vous permettent d’être accompagnée depuis chez vous, sur votre pause déjeuner ou en soirée, dans un cadre confidentiel.</p>

        <h2>Comment ça se passe ?</h2>
        <ol class="hf-steps">
          <li><strong>Vous réservez</strong> votre appel découverte gratuit de 20 minutes dans mon agenda en ligne.</li>
          <li><strong>Nous faisons le point</strong> sur votre situation et vos attentes.</li>
          <li><strong>Si nous décidons de travailler ensemble</strong>, les séances de l’<a href="/accompagnement-menopause/">accompagnement sur six mois</a> se déroulent en visio, avec les mêmes outils et le même suivi qu’au cabinet.</li>
        </ol>

        <h2>Les outils utilisés</h2>
        <p>Microsoft Teams, Zoom ou Cisco Webex : vous choisissez celui qui vous convient. Il suffit d’un ordinateur, d’une tablette ou d’un smartphone avec une connexion internet.</p>

        <h2>En français ou en allemand</h2>
        <p>Je propose l’accompagnement dans les deux langues. Les femmes germanophones peuvent consulter la <a href="/de/online-beratung-wechseljahre/">page en allemand</a>.</p>

        <h2>Vous habitez en Moselle ?</h2>
        <p>Vous pouvez aussi venir me rencontrer à mon <a href="/coach-menopause-creutzwald-moselle/">cabinet de Creutzwald</a>, et alterner séances au cabinet et en visio.</p>`,
    faq: [
      ['Une consultation en visio est-elle aussi efficace qu’au cabinet ?', 'Oui. L’accompagnement repose sur l’échange, la compréhension et la mise en place d’habitudes concrètes : tout cela fonctionne très bien en visio, avec le même suivi.'],
      ['Dois-je installer un logiciel ?', 'Non, Teams, Zoom et Webex fonctionnent dans le navigateur ou via leur application gratuite. Je vous envoie le lien avant chaque séance.'],
      ['Mes échanges restent-ils confidentiels ?', 'Oui. Les séances sont individuelles et tout ce que vous partagez reste strictement confidentiel.'],
    ],
    related: [R.programme, R.premenopause, R.sabine, R.symptomes],
  },

  /* ═══════════════════ ATELIERS ═══════════════════ */
  {
    path: '/ateliers-conferences/',
    lang: 'fr',
    title: 'Ateliers et conférences sur la ménopause en Moselle | Harmony Féminine',
    description: 'Ateliers de groupe et conférences sur la préménopause et la ménopause en Moselle et en Sarre : entreprises, associations, mairies, médiathèques. Animés par Sabine Trierweiler.',
    breadcrumb: [['/ateliers-conferences/', 'Ateliers & conférences']],
    service: { name: 'Ateliers et conférences ménopause', type: 'Atelier de groupe / conférence', area: ['Moselle', 'Grand Est', 'Saarland'] },
    eyebrow: 'Groupes, entreprises, associations',
    h1: 'Ateliers & conférences sur la <em>ménopause</em>',
    lead: 'Parler de la ménopause, c’est déjà se sentir moins seule. Des moments d’information et de partage, pour les femmes comme pour les équipes.',
    body: `
        <h2 id="ateliers">Ateliers de groupe</h2>
        <p>En petit groupe, dans une ambiance bienveillante, nous abordons un thème concret : comprendre la périménopause, mieux dormir, s’alimenter à la ménopause, gérer le stress et les émotions… Chaque atelier mêle informations claires, échanges et outils à mettre en pratique dès le lendemain.</p>
        <!-- TODO Sabine : ajouter les prochaines dates, le lieu et le tarif des ateliers. -->

        <h2 id="conferences">Conférences</h2>
        <p>Pour les <strong>entreprises</strong>, les <strong>comités sociaux et économiques</strong>, les <strong>associations</strong>, les <strong>mairies</strong> et les <strong>médiathèques</strong> de Moselle et de Sarre. Exemples de thèmes :</p>
        <ul>
          <li>La ménopause, parlons-en : comprendre pour mieux vivre cette transition ;</li>
          <li>Ménopause et travail : fatigue, concentration, bouffées de chaleur… comment mieux accompagner les collaboratrices ;</li>
          <li>Préménopause : les premiers signes à connaître dès 40 ans.</li>
        </ul>
        <p>Les conférences peuvent être données en français ou en allemand, sur place ou à distance.</p>

        <h2>Organiser un atelier ou une conférence</h2>
        <p>Écrivez-moi via le <a href="/#contact">formulaire de contact</a> ou à <a href="mailto:sabine@harmony-feminine.com">sabine@harmony-feminine.com</a> en précisant votre structure, le public visé et la date envisagée.</p>`,
    related: [R.programme, R.local, R.sabine, R.symptomes],
  },

  /* ═══════════════════ LOCAL ═══════════════════ */
  {
    path: '/coach-menopause-creutzwald-moselle/',
    lang: 'fr',
    about: 'https://harmony-feminine.com/#localbusiness',
    title: 'Accompagnement ménopause à Creutzwald – Moselle (Saint-Avold, Forbach) | Harmony Féminine',
    description: 'Cabinet d’accompagnement de la préménopause et de la ménopause à Creutzwald (57150), proche de Saint-Avold, Boulay, Bouzonville, Forbach et Sarrelouis. Sabine Trierweiler, consultante certifiée.',
    breadcrumb: [['/coach-menopause-creutzwald-moselle/', 'Cabinet de Creutzwald']],
    service: { name: 'Accompagnement ménopause à Creutzwald', type: 'Coaching ménopause', area: ['Creutzwald', 'Saint-Avold', 'Boulay-Moselle', 'Bouzonville', 'Forbach', 'Sarreguemines', 'Saarlouis'] },
    eyebrow: 'Moselle-Est',
    h1: 'Accompagnement ménopause à <em>Creutzwald</em>, en Moselle',
    lead: 'Un cabinet chaleureux en Moselle-Est pour être accompagnée au plus près de chez vous, en français ou en allemand.',
    body: `
        <h2>Le cabinet</h2>
        <address class="hf-address">
          <strong>Harmony Féminine – Sabine Trierweiler</strong><br>
          6 rue Albert Einstein<br>
          57150 Creutzwald, France<br>
          <a href="mailto:sabine@harmony-feminine.com">sabine@harmony-feminine.com</a>
        </address>
        <p>Consultations <strong>sur rendez-vous</strong>. <a href="https://www.google.com/maps/search/?api=1&amp;query=6+rue+Albert+Einstein+57150+Creutzwald" target="_blank" rel="noopener">Voir l’itinéraire sur Google Maps</a>.</p>
        <!-- TODO Sabine : préciser le stationnement / l’accès (étage, accessibilité PMR). -->

        <h2>Les femmes que j’accompagne viennent de…</h2>
        <p>Creutzwald et ses environs, mais aussi de <strong>Saint-Avold</strong>, <strong>Boulay-Moselle</strong>, <strong>Bouzonville</strong>, <strong>Falck</strong>, <strong>Ham-sous-Varsberg</strong>, <strong>L’Hôpital</strong>, <strong>Carling</strong>, <strong>Faulquemont</strong>, <strong>Forbach</strong>, <strong>Freyming-Merlebach</strong>, <strong>Sarreguemines</strong> et de l’autre côté de la frontière, <strong>Überherrn</strong>, <strong>Saarlouis</strong> et <strong>Sarrebruck</strong>.</p>
        <p>Vous habitez plus loin ? L’accompagnement est aussi possible <a href="/consultation-menopause-en-ligne/">en ligne</a>.</p>

        <h2>Ce que je vous propose</h2>
        <ul>
          <li>Un <a href="/accompagnement-menopause/">accompagnement personnalisé sur six mois</a> pour la ménopause ;</li>
          <li>un <a href="/accompagnement-premenopause/">accompagnement dès la préménopause</a> ;</li>
          <li>des <a href="/ateliers-conferences/">ateliers et conférences</a> pour les entreprises, associations et collectivités de Moselle.</li>
        </ul>

        <h2>Une consultante bilingue pour la région frontalière</h2>
        <p>Je vous accompagne en français ou en allemand. Für deutschsprachige Frauen aus dem Saarland: <a href="/de/wechseljahre-begleitung/">Begleitung in den Wechseljahren</a>.</p>`,
    faq: [
      ['Où se trouve le cabinet ?', 'Au 6 rue Albert Einstein, 57150 Creutzwald, en Moselle-Est, à environ 15 minutes de Saint-Avold et de Boulay et à quelques minutes de la frontière sarroise.'],
      ['Faut-il une ordonnance pour consulter ?', 'Non. Mon accompagnement n’est pas un acte médical : vous pouvez réserver directement votre appel découverte gratuit.'],
      ['L’accompagnement est-il remboursé ?', 'Il n’est pas pris en charge par l’Assurance maladie. Certaines mutuelles remboursent une partie des séances de médecines douces ou de bien-être : renseignez-vous auprès de la vôtre.'],
    ],
    related: [R.programme, R.enLigne, R.sabine, R.premenopause],
  },

  /* ═══════════════════ SYMPTÔMES (HUB) ═══════════════════ */
  {
    path: '/symptomes/',
    lang: 'fr',
    title: 'Symptômes de la préménopause et de la ménopause | Harmony Féminine',
    description: 'Bouffées de chaleur, troubles du sommeil, humeur, sécheresse intime, brouillard mental, prise de poids : les symptômes de la préménopause et de la ménopause expliqués par Sabine Trierweiler.',
    breadcrumb: [['/symptomes/', 'Symptômes']],
    eyebrow: 'Ce que vous vivez',
    h1: 'Les symptômes de la ménopause, <em>enfin compris</em>',
    lead: 'Parce que chaque femme est unique, vos ressentis le sont aussi. Voici les principaux signes de la préménopause et de la ménopause, expliqués simplement.',
    body: `
        <p>Pendant la périménopause puis la ménopause, la baisse et les fluctuations des hormones — surtout des œstrogènes et de la progestérone — peuvent se manifester de multiples façons. Certaines femmes n’ont presque aucun symptôme, d’autres en cumulent plusieurs. Comprendre ce qui se passe est la première étape pour aller mieux.</p>
        <div class="row g-3 hf-symptom-grid">
          <div class="col-sm-6"><a class="hf-related-card" href="/symptomes/bouffees-de-chaleur/"><span class="hf-related-title"><i class="bi bi-thermometer-sun"></i> Bouffées de chaleur</span><span class="hf-related-text">Vagues de chaleur soudaines, sueurs nocturnes : d’où viennent-elles et que faire au quotidien ?</span></a></div>
          <div class="col-sm-6"><a class="hf-related-card" href="/symptomes/troubles-du-sommeil/"><span class="hf-related-title"><i class="bi bi-moon-stars"></i> Troubles du sommeil</span><span class="hf-related-text">Insomnies, réveils à 3 h du matin, fatigue chronique.</span></a></div>
          <div class="col-sm-6"><a class="hf-related-card" href="/symptomes/changements-humeur/"><span class="hf-related-title"><i class="bi bi-emoji-frown"></i> Changements d’humeur</span><span class="hf-related-text">Irritabilité, anxiété, tristesse : vous n’êtes pas « trop sensible ».</span></a></div>
          <div class="col-sm-6"><a class="hf-related-card" href="/symptomes/inconforts-intimes/"><span class="hf-related-title"><i class="bi bi-droplet-half"></i> Inconforts intimes</span><span class="hf-related-text">Sécheresse vaginale, libido, envies fréquentes d’uriner.</span></a></div>
          <div class="col-sm-6"><a class="hf-related-card" href="/symptomes/brouillard-mental/"><span class="hf-related-title"><i class="bi bi-puzzle"></i> Brouillard mental</span><span class="hf-related-text">Trous de mémoire, mots qui ne viennent plus, concentration difficile.</span></a></div>
          <div class="col-sm-6"><a class="hf-related-card" href="/symptomes/prise-de-poids/"><span class="hf-related-title"><i class="bi bi-speedometer2"></i> Prise de poids</span><span class="hf-related-text">Des kilos qui s’installent, surtout autour du ventre.</span></a></div>
        </div>
        <h2>Et maintenant ?</h2>
        <p>Si vous vous reconnaissez dans plusieurs de ces signes, parlez-en à votre médecin et n’hésitez pas à réserver un appel découverte : nous verrons ensemble comment mon <a href="/accompagnement-menopause/">accompagnement</a> peut vous aider.</p>`,
    related: [R.premenopause, R.programme],
  },

  /* ═══════════════════ SYMPTÔME : BOUFFÉES ═══════════════════ */
  {
    path: '/symptomes/bouffees-de-chaleur/',
    lang: 'fr',
    article: true,
    title: 'Bouffées de chaleur et ménopause : causes et solutions naturelles | Harmony Féminine',
    description: 'Pourquoi les bouffées de chaleur et sueurs nocturnes apparaissent-elles à la ménopause ? Déclencheurs, gestes du quotidien et accompagnement, par Sabine Trierweiler, consultante certifiée.',
    breadcrumb: symptomBreadcrumb('/symptomes/bouffees-de-chaleur/', 'Bouffées de chaleur'),
    eyebrow: 'Symptôme',
    h1: 'Bouffées de chaleur à la ménopause : <em>comprendre et apaiser</em>',
    lead: 'Une vague de chaleur qui monte au visage, le cœur qui s’accélère, puis les frissons… Les bouffées de chaleur sont le symptôme le plus connu de la ménopause.',
    body: `
        <h2>Qu’est-ce qu’une bouffée de chaleur ?</h2>
        <p>C’est une sensation soudaine de chaleur intense, souvent au niveau du visage, du cou et du torse, parfois accompagnée de rougeurs, de transpiration et de palpitations. Elle dure en général de quelques secondes à quelques minutes. La nuit, on parle de <strong>sueurs nocturnes</strong> : elles réveillent et perturbent le <a href="/symptomes/troubles-du-sommeil/">sommeil</a>.</p>

        <h2>Pourquoi apparaissent-elles ?</h2>
        <p>La baisse et les fluctuations des œstrogènes perturbent le « thermostat » du cerveau, situé dans l’hypothalamus. Le corps réagit alors à de petites variations de température comme s’il avait trop chaud et cherche à évacuer la chaleur. Elles peuvent commencer dès la <a href="/accompagnement-premenopause/">préménopause</a> et durer plusieurs années.</p>

        <h2>Les déclencheurs fréquents</h2>
        <ul>
          <li>l’alcool, la caféine, les plats épicés ou très chauds ;</li>
          <li>le stress et les émotions fortes ;</li>
          <li>une pièce surchauffée, des vêtements trop chauds ;</li>
          <li>le tabac.</li>
        </ul>
        <p>Tenir un petit carnet pendant deux ou trois semaines aide souvent à repérer <strong>vos</strong> déclencheurs.</p>

        <h2>Ce qui peut aider au quotidien</h2>
        <ul>
          <li>s’habiller « en couches » faciles à retirer, privilégier les matières naturelles ;</li>
          <li>garder la chambre fraîche et aérée ;</li>
          <li>pratiquer une respiration lente et profonde dès les premiers signes ;</li>
          <li>bouger régulièrement et prendre soin de sa gestion du stress ;</li>
          <li>adapter son alimentation et limiter les déclencheurs identifiés.</li>
        </ul>

        <h2>Quand consulter ?</h2>
        <p>Si les bouffées de chaleur sont très fréquentes, vous empêchent de dormir ou altèrent votre qualité de vie, parlez-en à votre médecin ou à votre gynécologue : des traitements, hormonaux ou non, existent et peuvent être discutés selon votre situation.</p>
${accompaniment}`,
    faq: [
      ['Combien de temps durent les bouffées de chaleur ?', 'C’est très variable : de quelques mois à plusieurs années. Elles ont souvent tendance à diminuer avec le temps après la ménopause.'],
      ['Les bouffées de chaleur peuvent-elles commencer avant la ménopause ?', 'Oui, elles apparaissent fréquemment pendant la périménopause, alors que les règles sont encore présentes mais irrégulières.'],
    ],
    related: [R.sommeil, R.humeur, R.programme, R.symptomes],
  },

  /* ═══════════════════ SYMPTÔME : SOMMEIL ═══════════════════ */
  {
    path: '/symptomes/troubles-du-sommeil/',
    lang: 'fr',
    article: true,
    title: 'Insomnie et ménopause : pourquoi je me réveille la nuit ? | Harmony Féminine',
    description: 'Insomnies, réveils nocturnes vers 3 h, fatigue : pourquoi le sommeil se dérègle à la préménopause et à la ménopause, et les habitudes qui peuvent aider. Par Sabine Trierweiler.',
    breadcrumb: symptomBreadcrumb('/symptomes/troubles-du-sommeil/', 'Troubles du sommeil'),
    eyebrow: 'Symptôme',
    h1: 'Troubles du sommeil à la ménopause : <em>retrouver des nuits sereines</em>',
    lead: 'Difficultés à s’endormir, réveils en pleine nuit, sensation de ne jamais être reposée… Le sommeil est l’un des premiers équilibres bousculés par la transition hormonale.',
    body: `
        <h2>Pourquoi le sommeil se dérègle-t-il ?</h2>
        <p>Plusieurs facteurs s’additionnent souvent :</p>
        <ul>
          <li>la baisse de la <strong>progestérone</strong>, qui a naturellement un effet apaisant ;</li>
          <li>les <a href="/symptomes/bouffees-de-chaleur/">sueurs nocturnes</a> qui réveillent ;</li>
          <li>le stress, la charge mentale et les <a href="/symptomes/changements-humeur/">variations d’humeur</a> ;</li>
          <li>les envies d’uriner la nuit.</li>
        </ul>
        <p>Le manque de sommeil, à son tour, accentue la fatigue, l’irritabilité, les fringales et le <a href="/symptomes/brouillard-mental/">brouillard mental</a> : un vrai cercle vicieux.</p>

        <h2>Des habitudes qui peuvent aider</h2>
        <ul>
          <li>se coucher et se lever à heures régulières, même le week-end ;</li>
          <li>une chambre fraîche, sombre et calme ;</li>
          <li>limiter la caféine après midi et l’alcool le soir ;</li>
          <li>réduire les écrans dans l’heure qui précède le coucher ;</li>
          <li>s’exposer à la lumière du jour le matin et bouger dans la journée ;</li>
          <li>un rituel du soir apaisant : respiration, lecture, étirements doux.</li>
        </ul>

        <h2>Quand consulter ?</h2>
        <p>Si l’insomnie dure depuis plusieurs semaines, si vous ronflez fortement ou faites des pauses respiratoires, ou si la fatigue retentit sur votre sécurité (conduite, travail), parlez-en à votre médecin.</p>
${accompaniment}`,
    related: [R.bouffees, R.humeur, R.programme, R.symptomes],
  },

  /* ═══════════════════ SYMPTÔME : HUMEUR ═══════════════════ */
  {
    path: '/symptomes/changements-humeur/',
    lang: 'fr',
    article: true,
    title: 'Anxiété, irritabilité, tristesse à la ménopause : comprendre | Harmony Féminine',
    description: 'Sautes d’humeur, irritabilité, anxiété ou baisse de moral pendant la préménopause et la ménopause : ce qui se joue et comment se sentir mieux. Par Sabine Trierweiler, consultante certifiée.',
    breadcrumb: symptomBreadcrumb('/symptomes/changements-humeur/', 'Changements d’humeur'),
    eyebrow: 'Symptôme',
    h1: 'Changements d’humeur à la ménopause : <em>vous n’êtes pas « trop sensible »</em>',
    lead: 'Irritabilité, anxiété, larmes qui montent sans raison… Ces émotions déroutantes sont fréquentes pendant la transition hormonale, et elles méritent d’être prises au sérieux.',
    body: `
        <h2>Ce qui se joue</h2>
        <p>Les œstrogènes et la progestérone interagissent avec les messagers chimiques du cerveau qui régulent l’humeur et le stress. Quand ces hormones fluctuent, l’équilibre émotionnel peut devenir plus fragile. S’y ajoutent souvent le manque de <a href="/symptomes/troubles-du-sommeil/">sommeil</a>, la charge mentale et les changements de vie de cette période (enfants qui partent, parents vieillissants, questionnements professionnels).</p>

        <h2>Les signes fréquents</h2>
        <ul>
          <li>irritabilité, impatience, réactions disproportionnées ;</li>
          <li>anxiété, sensation d’oppression, ruminations ;</li>
          <li>baisse de moral, perte d’élan ;</li>
          <li>sentiment de ne plus se reconnaître.</li>
        </ul>

        <h2>Ce qui peut aider</h2>
        <ul>
          <li>mettre des mots sur ce que vous vivez, en parler à vos proches ;</li>
          <li>l’activité physique régulière, en particulier en plein air ;</li>
          <li>des temps de récupération et des techniques de gestion du stress (respiration, cohérence cardiaque, marche) ;</li>
          <li>une alimentation régulière et équilibrée, pour éviter les coups de fatigue ;</li>
          <li>prendre soin de son sommeil.</li>
        </ul>

        <h2>Quand consulter ?</h2>
        <p>Si la tristesse ou l’anxiété persistent plus de deux semaines, vous empêchent de fonctionner au quotidien, ou si vous avez des idées noires, consultez votre médecin sans attendre. En France, le <strong>3114</strong> (numéro national de prévention du suicide) répond 24 h/24, gratuitement.</p>
${accompaniment}`,
    related: [R.sommeil, R.brouillard, R.programme, R.symptomes],
  },

  /* ═══════════════════ SYMPTÔME : INTIME ═══════════════════ */
  {
    path: '/symptomes/inconforts-intimes/',
    lang: 'fr',
    article: true,
    title: 'Sécheresse vaginale et libido à la ménopause : en parler enfin | Harmony Féminine',
    description: 'Sécheresse vaginale, inconfort, baisse de libido, envies fréquentes d’uriner : des symptômes fréquents de la ménopause dont on parle peu. Comprendre et trouver des solutions.',
    breadcrumb: symptomBreadcrumb('/symptomes/inconforts-intimes/', 'Inconforts intimes'),
    eyebrow: 'Symptôme',
    h1: 'Inconforts intimes à la ménopause : <em>en parler, enfin</em>',
    lead: 'Sécheresse, irritations, gêne pendant les rapports, envies pressantes d’uriner… Des symptômes très fréquents, et pourtant encore tabous.',
    body: `
        <h2>Pourquoi ces changements ?</h2>
        <p>Les tissus de la vulve, du vagin et de la vessie sont sensibles aux œstrogènes. Quand leur taux baisse, ces muqueuses deviennent plus fines, moins élastiques et moins lubrifiées. Contrairement aux bouffées de chaleur, ces symptômes ont tendance à s’installer dans la durée s’ils ne sont pas pris en charge.</p>

        <h2>Les signes possibles</h2>
        <ul>
          <li>sécheresse vaginale, sensation de brûlure ou de démangeaisons ;</li>
          <li>douleurs ou inconfort pendant les rapports ;</li>
          <li>baisse du désir ;</li>
          <li>envies fréquentes ou pressantes d’uriner, petites fuites, infections urinaires plus fréquentes.</li>
        </ul>

        <h2>Ce qui peut aider</h2>
        <ul>
          <li>oser en parler à votre médecin, votre gynécologue ou votre sage-femme : des solutions efficaces existent (hydratants et lubrifiants vaginaux, traitements locaux sur avis médical) ;</li>
          <li>des toilettes intimes douces, sans savon agressif ;</li>
          <li>la rééducation et le renforcement du périnée ;</li>
          <li>une bonne hydratation et une communication bienveillante dans le couple.</li>
        </ul>
        <p>Dans mon accompagnement, nous abordons aussi ce sujet sans tabou : l’intimité fait partie de votre qualité de vie.</p>
${accompaniment}`,
    related: [R.humeur, R.programme, R.premenopause, R.symptomes],
  },

  /* ═══════════════════ SYMPTÔME : BROUILLARD ═══════════════════ */
  {
    path: '/symptomes/brouillard-mental/',
    lang: 'fr',
    article: true,
    title: 'Brouillard mental et ménopause : trous de mémoire, concentration | Harmony Féminine',
    description: 'Mots qui ne viennent plus, oublis, difficultés de concentration : le brouillard mental est fréquent à la préménopause et à la ménopause. Pourquoi, et comment retrouver de la clarté.',
    breadcrumb: symptomBreadcrumb('/symptomes/brouillard-mental/', 'Brouillard mental'),
    eyebrow: 'Symptôme',
    h1: 'Brouillard mental à la ménopause : <em>retrouver de la clarté</em>',
    lead: 'Vous entrez dans une pièce sans savoir pourquoi, le mot juste vous échappe, vous relisez trois fois le même e-mail… Rassurez-vous : vous n’êtes pas seule.',
    body: `
        <h2>Un symptôme fréquent et souvent mal compris</h2>
        <p>Beaucoup de femmes décrivent, pendant la périménopause, une sensation de « tête dans le coton » : oublis, difficultés de concentration, ralentissement. Ces troubles sont liés aux fluctuations hormonales, mais aussi au manque de <a href="/symptomes/troubles-du-sommeil/">sommeil</a>, au stress et à la fatigue. Pour la plupart des femmes, ils sont <strong>transitoires</strong> et s’améliorent après la transition.</p>

        <h2>Ce qui peut aider</h2>
        <ul>
          <li>prioriser le sommeil, qui joue un rôle clé dans la mémoire ;</li>
          <li>bouger régulièrement : l’activité physique favorise la concentration ;</li>
          <li>alléger la charge mentale : listes, agenda, une tâche à la fois ;</li>
          <li>des repas réguliers et équilibrés, une bonne hydratation ;</li>
          <li>des pauses et des activités qui stimulent l’esprit avec plaisir.</li>
        </ul>

        <h2>Quand consulter ?</h2>
        <p>Si les troubles de mémoire s’aggravent, vous inquiètent ou inquiètent vos proches, parlez-en à votre médecin pour en rechercher les causes (thyroïde, carences, dépression, etc.).</p>
${accompaniment}`,
    related: [R.sommeil, R.humeur, R.programme, R.symptomes],
  },

  /* ═══════════════════ SYMPTÔME : POIDS ═══════════════════ */
  {
    path: '/symptomes/prise-de-poids/',
    lang: 'fr',
    article: true,
    title: 'Prise de poids à la ménopause : pourquoi le ventre change | Harmony Féminine',
    description: 'Pourquoi prend-on du poids à la ménopause, surtout au niveau du ventre ? Hormones, muscles, sommeil, stress : comprendre et adopter des habitudes durables, sans régime restrictif.',
    breadcrumb: symptomBreadcrumb('/symptomes/prise-de-poids/', 'Prise de poids'),
    eyebrow: 'Symptôme',
    h1: 'Prise de poids à la ménopause : <em>comprendre son corps</em>',
    lead: 'Vous mangez comme avant, et pourtant les kilos s’installent, surtout autour du ventre. Ce n’est pas un manque de volonté : votre corps change.',
    body: `
        <h2>Pourquoi le corps change-t-il ?</h2>
        <ul>
          <li><strong>La baisse des œstrogènes</strong> favorise un stockage des graisses plus abdominal ;</li>
          <li><strong>la masse musculaire diminue</strong> naturellement avec l’âge, ce qui réduit les dépenses énergétiques ;</li>
          <li><strong>le manque de sommeil et le stress</strong> augmentent les fringales et le grignotage ;</li>
          <li>les changements de rythme de vie réduisent parfois l’activité physique.</li>
        </ul>
        <p>La graisse abdominale n’est pas qu’une question d’apparence : elle est associée à un risque cardiovasculaire et métabolique plus élevé. C’est donc un vrai sujet de prévention.</p>

        <h2>Plutôt que les régimes : des habitudes durables</h2>
        <ul>
          <li>des repas réguliers, riches en légumes, en fibres et en protéines ;</li>
          <li>du <strong>renforcement musculaire</strong> deux à trois fois par semaine, en plus de la marche ;</li>
          <li>prendre soin de son <a href="/symptomes/troubles-du-sommeil/">sommeil</a> et de sa gestion du stress ;</li>
          <li>limiter l’alcool et les produits ultra-transformés ;</li>
          <li>écouter ses sensations de faim et de satiété.</li>
        </ul>
        <p>Les régimes très restrictifs font souvent perdre du muscle et favorisent l’effet yo-yo : ils sont rarement une bonne idée à cette période de la vie.</p>

        <h2>Quand consulter ?</h2>
        <p>Une prise de poids rapide et inexpliquée, une grande fatigue ou d’autres symptômes inhabituels doivent être signalés à votre médecin.</p>
${accompaniment}`,
    related: [R.sommeil, R.programme, R.premenopause, R.symptomes],
  },
];
