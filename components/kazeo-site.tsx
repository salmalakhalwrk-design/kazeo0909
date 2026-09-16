'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Award, Check, ChevronDown, Lightbulb, Menu, MoveRight, Users, X, Zap } from 'lucide-react'
import { CoverFlowCarousel, type CarouselItem } from '@/components/ui/3-d-coverflow-carousel'
import NeuralBackground from '@/components/ui/flow-field-background'

const process = [
  ['01', 'Rencontre', 'Prise de contact en moins de 48h.'],
  ['02', 'Analyse du projet', 'Rendez-vous sur site pour cerner le besoin.'],
  ['03', 'Maquettage & devis', 'Création graphique et devis gratuits.'],
  ['04', 'Fabrication', 'Sur-mesure dans notre atelier.'],
  ['05', 'Installation', 'Une équipe de pose dédiée.'],
  ['06', 'SAV', 'Suivi après-vente sur tous les projets.'],
]
const refs = ['CARREFOUR', 'COLGATE', 'KIA', 'KARCHER', 'HAVAS', 'AXA', 'AMBASSADE DE SUISSE', 'OACA', 'CLINIQUE TAOUFIK', 'MOULIN D’OR', 'GAM', 'SOCIOS', 'MBA CONSULTING', 'QNB', 'BBC MEDIA ACTION']

const navGroups = [
  { label: 'Accueil', href: '#top' },
  { label: 'Qui sommes-nous', href: '#enseigne' },
  {
    label: 'Nos Solutions',
    children: [
      { label: 'Impression Numérique', href: '#numerique' },
      { label: 'Impression Grand Format', href: '#grand-format' },
      { label: 'Signalétique Intérieure', href: '#signaletique' },
      { label: 'Aménagement GMS Pharmacies', href: '#gms' },
      { label: 'Habillage Véhicules', href: '#vehicules' },
      { label: 'Événementiel & Stands', href: '#evenementiel' },
      { label: 'Habillage de Vitrines', href: '#vitrines' },
    ],
  },
  {
    label: 'L’Atelier & Innovations',
    children: [
      { label: 'Technologie UV DTF', href: '#atelier' },
      { label: 'Goodies & Supports Premium', href: '#goodies' },
    ],
  },
  { label: 'Nos Références', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

const objectifOptions = ['Aménager un point de vente', 'Préparer un événement', 'Flocage de flotte', 'Autre projet']
const fichiersOptions = ['Oui, prêts (Illustrator / Photoshop)', 'Besoin d’un accompagnement graphique']
const delaiOptions = ['Urgent (moins d’une semaine)', 'Standard (2 à 3 semaines)', 'Flexible']

const clientLogos = [
  { name: 'SNBGD', img: '/logos/snbgd.png' },
  { name: 'Lee Cooper', img: '/logos/leecooper.png' },
  { name: 'SFBT', img: '/logos/sfbt.png' },
  { name: 'COMET Group', img: 'https://comet-group.com.tn/assets/img/logo.png' },
  { name: 'Unilever', img: '/logos/unilever.png' },
  { name: 'Intérieurs Mobilier de Bureaux', img: '/logos/interieurs.png' },
  { name: 'Société des Stations Thermales', img: '/logos/thermales.png' },
]

const savoirFaireItems: CarouselItem[] = [
  { tag: '#01 · Enseignes', titleLine1: 'Enseignes lumineuses', titleLine2: 'Signature de façade', desc: 'Lettres boîtiers, blocs LED et néons conçus pour être vus.', img: 'https://kazeo-solution-c0towct0r-fggtyuj.vercel.app/images/kazeo-signage.png', ctaText: 'Découvrir', ctaUrl: '#contact' },
  { tag: '#02 · Signalétique', titleLine1: 'Signalétique', titleLine2: 'Orientation claire', desc: 'Lettres reliefs et logos d’accueil qui installent votre identité dans vos locaux.', img: '/signage/vitae-1.jpg', ctaText: 'Découvrir', ctaUrl: '#signaletique' },
  { tag: '#03 · Impression', titleLine1: 'Grand format', titleLine2: 'Impact visuel', desc: 'Bâches, vinyles et supports rigides aux finitions nettes.', img: 'https://kazeo-solution-c0towct0r-fggtyuj.vercel.app/images/kazeo-print.png', ctaText: 'Découvrir', ctaUrl: '#contact' },
  { tag: '#04 · Événementiel', titleLine1: 'Stand & salon', titleLine2: 'Présence remarquée', desc: 'Des dispositifs sur-mesure pour salons, congrès et lancements.', img: 'https://kazeo-solution-c0towct0r-fggtyuj.vercel.app/images/kazeo-event.png', ctaText: 'Découvrir', ctaUrl: '#contact' },
]

const signageItems = [
  { name: 'BTS Bank', img: '/signage/bts-bank.jpg' },
  { name: 'Vitae Tunisie', img: '/signage/vitae-1.jpg' },
  { name: 'Erasmus+ Tunisia', img: '/signage/erasmus.jpg' },
  { name: 'IIFE', img: '/signage/iife.jpg' },
  { name: 'FERASA Oil & Technical Services', img: '/signage/ferasa.jpg' },
  { name: 'Edura — Centre de Soutien Scolaire', img: '/signage/edura.jpg' },
  { name: 'Vitae Tunisie', img: '/signage/vitae-2.jpg' },
  { name: 'Vitae Tunisie', img: '/signage/vitae-3.jpg' },
  { name: 'Expensya', img: '/signage/expensya.jpg' },
  { name: 'Centre de Radiologie Urbain Nord', img: '/signage/radiologie.jpg' },
  { name: 'Heptacom', img: '/signage/heptacom.jpg' },
  { name: 'Centre Acoustique Médical Tunis', img: '/signage/acoustique.jpg' },
  { name: 'Lettrage sur vitrine', img: '/signage/vitrine-lettrage.jpg' },
]

const gmsItems = [
  { name: 'Carrefour · Signal Système Blancheur', img: '/gms/carrefour-blancheur-1.jpg' },
  { name: 'Carrefour · Signal Système Blancheur', img: '/gms/carrefour-blancheur-2.jpg' },
  { name: 'Carrefour · Signal Système Blancheur', img: '/gms/carrefour-blancheur-3.jpg' },
  { name: 'Carrefour · Signal Système Blancheur', img: '/gms/carrefour-blancheur-4.jpg' },
  { name: 'Carrefour · Signal Système Blancheur', img: '/gms/carrefour-blancheur-5.jpg' },
  { name: 'Carrefour · Signal Système Blancheur', img: '/gms/carrefour-blancheur-6.jpg' },
  { name: 'Carrefour · Signal White Now', img: '/gms/carrefour-whitenow-1.jpg' },
  { name: 'Carrefour · Signal White Now', img: '/gms/carrefour-whitenow-2.jpg' },
  { name: 'Carrefour · Signal White Now', img: '/gms/carrefour-whitenow-3.jpg' },
  { name: 'Carrefour · Signal Kids', img: '/gms/carrefour-kids-1.jpg' },
  { name: 'Carrefour · Signal Kids', img: '/gms/carrefour-kids-2.jpg' },
  { name: 'Carrefour · Signal Kids', img: '/gms/carrefour-kids-3.jpg' },
  { name: 'Carrefour · Signal Kids', img: '/gms/carrefour-kids-4.jpg' },
  { name: 'Carrefour · Signal Charbon', img: '/gms/carrefour-charbon.jpg' },
  { name: 'Carrefour · Signal Cavity Fighter 10X', img: '/gms/carrefour-cavityfighter.jpg' },
  { name: 'Carrefour · Signal 10X', img: '/gms/carrefour-10x-1.jpg' },
]

function Drop({ tone = 'cyan' }: { tone?: string }) {
  return <span aria-hidden="true" className={`ink-drop ink-${tone}`} />
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>
}

function Visual({ label, tone = 'cyan', large = false, className = '' }: { label: string; tone?: string; large?: boolean; className?: string }) {
  return <div className={`visual-panel ${large ? 'visual-large' : ''} visual-${tone} ${className}`.trim()} role="img" aria-label={label}>
    <span className="visual-caption">{label}</span><span className="visual-code">KZ / 2026</span>
  </div>
}

function FeatureList({ items }: { items: string[] }) {
  return <ul className="feature-list">{items.map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>
}

function GalleryLink({ slug, tone = 'cyan', label, shine = false }: { slug: string; tone?: string; label: string; shine?: boolean }) {
  return <a href={`/galerie/${slug}`} target="_blank" rel="noopener noreferrer" className="gallery-link" aria-label={label}>
    <Visual label={label} tone={tone} className={shine ? 'shine-hover' : ''} />
    <span className="text-link">{label} <ArrowUpRight aria-hidden="true" /></span>
  </a>
}

export function KazeoSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [filter, setFilter] = useState('Tous')
  const [videoVisible, setVideoVisible] = useState(true)
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({ objectif: '', fichiers: '', delai: '' })
  const videoRef = useRef<HTMLElement>(null)

  const selectAnswer = (key: 'objectif' | 'fichiers' | 'delai', value: string) => {
    setQuizAnswers((prev) => ({ ...prev, [key]: value }))
    setQuizStep((s) => s + 1)
  }
  const resetQuiz = () => { setSent(false); setQuizStep(0); setQuizAnswers({ objectif: '', fichiers: '', delai: '' }) }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(([entry]) => setVideoVisible(entry.isIntersecting), { threshold: 0.2 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  return <main>
    <NeuralBackground color="#26b6dd" trailOpacity={0.16} particleCount={360} speed={0.65} />
    <header className={`site-header ${videoVisible ? 'header-hidden' : ''}`} aria-hidden={videoVisible}>
      <a href="#top" className="logo logo-color" aria-label="Kazeo, retour en haut"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20kazeo%20original-zdOseTETia4Wms2ZoAB2j924F8nVth.png" alt="KAZEO Solutions" /></a>
      <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navigation principale">
        {navGroups.map((item) => item.children ? (
          <div className="nav-item nav-has-dropdown" key={item.label}>
            <span className="nav-link" tabIndex={0}>{item.label} <ChevronDown className="nav-caret" aria-hidden="true" /></span>
            <div className="nav-dropdown">
              {item.children.map((child) => <a key={child.label} href={child.href} onClick={closeMenu}>{child.label}</a>)}
            </div>
          </div>
        ) : (
          <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">Demander un devis <ArrowUpRight aria-hidden="true" /></a>
      <button className="menu-button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section ref={videoRef} className="intro-video" aria-label="Présentation vidéo KAZEO">
      <div className="intro-video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/wvZmNHDxG9c?autoplay=1&mute=1&playsinline=1&loop=1&playlist=wvZmNHDxG9c&rel=0"
          title="Présentation vidéo KAZEO"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>

    <section id="top" className="hero">
      <div className="hero-backdrop"><div className="hero-lines" /></div>
      <div className="hero-content"><p className="eyebrow">ATELIER DE FABRICATION · ARIANA, TUNISIE</p><h1>Nous donnons<br /><em>forme</em> aux idées.</h1><p className="hero-copy">Enseignes lumineuses, signalétique et impression numérique grand format. De la première ligne au dernier détail.</p><a className="button button-orange" href="#realisations">Découvrir nos réalisations <ArrowDownRight aria-hidden="true" /></a></div>
      <div className="hero-meta"><span>Depuis 2017</span><span>01 — 05</span></div><p className="signature">IF YOU CAN THINK IT…<br /><em>WE CAN DO IT…</em></p>
    </section>

    <section className="intro section-dark" id="enseigne"><div className="section-inner intro-grid"><div><SectionLabel>QUI SOMMES-NOUS</SectionLabel><h2>L’art de valoriser<br /><em>votre identité visuelle.</em></h2></div><div className="intro-text"><p>Créée en 2017 et implantée à El Menzah 5, Kazéo Solutions est une entreprise tunisienne dédiée à l’excellence en impression numérique et signalétique sur mesure. Nous maîtrisons l’ensemble de la chaîne de production pour offrir aux marques, commerces et industriels des solutions d’affichage irréprochables.</p><p>Notre mission va au-delà de la simple impression : nous transformons vos idées en supports esthétiques, durables et fidèles à votre image. Grâce à des technologies de pointe et une équipe engagée, Kazéo Solutions a su gagner la confiance des acteurs économiques majeurs, devenant ainsi un pilier de la communication visuelle en Tunisie.</p><div className="badges"><span>Norme <b>IP65</b></span><span>Équipe <b>expérimentée</b></span><span>Matériaux <b>de qualité</b></span></div></div></div></section>

    <section className="values section-blue"><div className="section-inner"><SectionLabel>CE QUI NOUS GUIDE</SectionLabel><div className="values-head"><h2>Précis dans<br /><em>chaque détail.</em></h2><p>Une culture d’atelier. Des solutions pensées pour durer. Une relation qui reste simple.</p></div><div className="values-grid">{[{ title: 'Rapidité', text: 'Répondre vite. Avancer sans détour.', Icon: Zap }, { title: 'Excellence', text: 'Ne rien laisser au hasard.', Icon: Award }, { title: 'Innovation', text: 'Explorer les matières et les usages.', Icon: Lightbulb }, { title: 'Proximité', text: 'Être là, avant, pendant et après.', Icon: Users }].map(({ title, text, Icon }) => <article className="value-card" key={title}><span className="value-icon-wrap"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="services section-blue" id="impression"><div className="section-inner"><SectionLabel>NOS SAVOIR-FAIRE</SectionLabel><div className="services-head"><h2>Un atelier pour<br /><em>tout rendre visible.</em></h2><p>Du lumineux au tactile, du grand format au détail millimétré.</p></div><CoverFlowCarousel items={savoirFaireItems} sectionLabel="" autoplay autoplayDelay={4200} className="kazeo-coverflow" /></div></section>

    <section className="numerique section-dark" id="numerique"><div className="section-inner intro-grid"><div><SectionLabel>IMPRESSION NUMÉRIQUE</SectionLabel><h2>L’art de<br /><em>la première impression.</em></h2><p className="lead">Le premier contact physique avec votre marque mérite d’être parfait. Qu’il s’agisse de tendre une carte de visite lors d’une rencontre professionnelle ou de distribuer une brochure qui raconte votre histoire, nous donnons vie à vos idées sur papier, en soignant chaque détail.</p><FeatureList items={['Cartes de visite qui marquent les esprits', 'Flyers percutants', 'Dépliants élégants', 'Brochures et catalogues']} /></div><GalleryLink slug="numerique" tone="cyan" label="Voir la galerie Impression Numérique" /></div></section>

    <section className="grandformat section-blue" id="grand-format"><div className="section-inner intro-grid"><div><SectionLabel>IMPRESSION GRAND FORMAT</SectionLabel><h2>Voyez les choses<br /><em>en grand.</em></h2><p className="lead">Votre entreprise ne devrait jamais passer inaperçue. Grâce à notre parc machine de pointe, notamment notre technologie Latex, nous imprimons vos ambitions en haute définition sur des supports conçus pour durer.</p><FeatureList items={['Adhésifs sur-mesure & Films One Way — pour habiller vos vitrines sans perdre en luminosité', 'Bâches robustes & Toiles Canvas — pour vos affichages extérieurs ou décorations d’intérieur', 'Roll-ups — pratiques, élégants et faciles à transporter', 'Light box — caissons lumineux rétroéclairés pour un rendu premium, jour et nuit']} /></div><GalleryLink slug="grand-format" tone="orange" label="Voir la galerie Grand Format" /></div></section>

    <section className="signage section-dark" id="signaletique"><div className="section-inner"><SectionLabel>SIGNALÉTIQUE INTÉRIEURE</SectionLabel><div className="services-head"><h2>Votre marque,<br /><em>sur chaque mur.</em></h2><p>Lettres reliefs, logos en volume et signalétique d’accueil : quelques réalisations installées chez nos clients.</p></div><div className="signage-grid">{signageItems.map((item, i) => <div className="signage-tile" key={item.name + i}><img src={item.img} alt={item.name} loading="lazy" /><span>{item.name}</span></div>)}</div></div></section>

    <section className="gms section-dark" id="gms"><div className="section-inner"><div className="intro-grid"><div><SectionLabel>GMS, PHARMACIES & PLV</SectionLabel><h2>Sortez du lot,<br /><em>au cœur des rayons.</em></h2><p className="lead">Dans les allées d’un hypermarché ou au sein d’une officine, chaque seconde compte pour séduire le consommateur. Nous concevons des décors et présentoirs pensés pour attirer l’œil, valoriser vos offres et déclencher le coup de cœur.</p><FeatureList items={['Habillage de vitrines (pharmacies & commerces)', 'Têtes de gondole & caches-palettes', 'Stop-rayons & réglettes d’étagères en PVC', 'Factices géants (PVC ou polypropylène)', 'Stands de dégustation et d’animation']} /></div><GalleryLink slug="gms" tone="yellow" label="Voir la galerie GMS & Pharmacies" /></div><div className="gms-realise"><p className="gms-realise-label">Déploiement multi-caisses réalisé pour Signal chez Carrefour</p><div className="signage-grid">{gmsItems.map((item, i) => <div className="signage-tile" key={item.name + i}><img src={item.img} alt={item.name} loading="lazy" /><span>{item.name}</span></div>)}</div></div></div></section>

    <section className="process section-blue"><div className="section-inner"><SectionLabel>NOTRE PROCESS</SectionLabel><div className="process-head"><h2>Six temps forts.<br /><em>Un résultat net.</em></h2><p>La méthode est claire. Le résultat, sur-mesure.</p></div><div className="process-list">{process.map(([num, title, text]) => <article className="process-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><MoveRight aria-hidden="true" /></article>)}</div></div></section>

    <section className="workshop section-dark" id="atelier"><div className="section-inner workshop-grid"><div><SectionLabel>L’ATELIER & INNOVATIONS</SectionLabel><h2>La machine<br /><em>derrière l’idée.</em></h2><p className="lead">Un parc de production précis, des finitions contrôlées et le temps nécessaire pour bien faire.</p><a href="#contact" className="text-link">Parler à l’atelier <MoveRight aria-hidden="true" /></a></div><div className="machine-list">{[['HP Latex 335', 'Des couleurs éclatantes et des encres écologiques, parfaites pour l’affichage premium en intérieur, en GMS ou en milieu médical.'], ['Roland Camm-1 GR-640', 'Découpe de haute précision pour des lettrages et adhésifs parfaits, même sur les designs les plus complexes.'], ['Roland ER-641', 'Traceur à alignement optique : une découpe fidèle au pixel près, prête à poser.'], ['UV DTF', 'Relief 3D et brillance qui accrochent la lumière : vos logos prennent vie sur tous les supports, même les plus petits.'], ['Confection', 'Soudure, œillets et finitions prêtes à poser, pour une installation rapide et impeccable sur le terrain.']].map(([name, detail]) => <div className="machine" key={name}><Check aria-hidden="true" /><div><h3>{name}</h3><p>{detail}</p></div></div>)}</div></div></section>

    <section className="covering section-dark" id="vehicules"><div className="section-inner"><SectionLabel>HABILLAGE VÉHICULES</SectionLabel><div className="services-head"><h2>Votre marque,<br /><em>toujours en mouvement.</em></h2><p>Pourquoi laisser vos véhicules d’entreprise se fondre dans le décor quand ils peuvent devenir vos meilleurs ambassadeurs ? Nous transformons votre flotte en une véritable campagne publicitaire mobile grâce à des films adhésifs conformables qui épousent vos carrosseries tout en les protégeant.</p></div><div className="service-grid service-grid-3">
      <article className="service-card"><Visual label="Lettrage Découpé" tone="plain-a" /><div className="service-info"><span className="service-index">01</span><h3>Lettrage Découpé</h3><p>Logos et textes en vinyle découpé, précis et durables, pour une signature nette sur tous vos véhicules.</p></div></article>
      <article className="service-card"><Visual label="Semi-Covering" tone="plain-b" /><div className="service-info"><span className="service-index">02</span><h3>Semi-Covering</h3><p>Habillage partiel pour une présence visuelle forte tout en maîtrisant votre budget.</p></div></article>
      <article className="service-card"><Visual label="Total Covering" tone="plain-c" /><div className="service-info"><span className="service-index">03</span><h3>Total Covering</h3><p>Habillage intégral haute définition : bus, camion ou utilitaire devient une œuvre publicitaire.</p></div></article>
    </div><div className="badges">{['Voitures commerciales', 'Véhicules utilitaires', 'Camions & semi-remorques'].map((tag) => <span key={tag}>{tag}</span>)}</div><GalleryLink slug="vehicules" tone="plain-a" label="Voir la galerie Véhicules" /></div></section>

    <section className="events section-blue" id="evenementiel"><div className="section-inner"><SectionLabel>ÉVÉNEMENTIEL</SectionLabel><div className="events-head"><h2>Vos événements,<br /><em>sans le stress.</em></h2><p>Participer à une foire ou organiser un séminaire demande une énergie folle. Nous ne nous contentons pas de monter des décors : nous créons des espaces où vos invités se sentent bien, de l’installation d’écrans géants à la gestion complète de votre aménagement scénique.</p></div><div className="filter-row" role="group" aria-label="Filtrer les événements">{['Tous', 'Salons', 'Congrès', 'Lancements'].map(item => <button key={item} className={filter === item ? 'filter-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="event-grid"><Visual label="Stand professionnel" tone="orange" large /><Visual label="Congrès médical" tone="cyan" /><Visual label="Lancement produit" tone="magenta" /></div><FeatureList items={['Fabrication de stands sur-mesure pour foires et congrès', 'Location de matériel', 'Affichage dynamique (écrans LED, totems)', 'Organisation logistique de séminaires clés en main']} /><GalleryLink slug="evenementiel" tone="magenta" label="Voir la galerie Événementiel" /></div></section>

    <section className="vitrines section-dark" id="vitrines"><div className="section-inner"><SectionLabel>HABILLAGE DE VITRINES</SectionLabel><div className="events-head"><h2>Du caractère<br /><em>à votre devanture.</em></h2><p>Adhésifs, dépolis et micro-perforés : une vitrine qui capte le regard sans jamais bloquer la lumière.</p></div><div className="event-grid"><Visual label="Vitrophanie & Stickers" tone="plain-a" large /><Visual label="Adhésif Dépoli" tone="plain-b" /><Visual label="Micro-perforé One-Way" tone="plain-c" /></div><GalleryLink slug="vitrines" tone="plain-b" label="Voir la galerie Vitrines" /></div></section>

    <section className="goodies section-blue" id="goodies"><div className="section-inner intro-grid"><div><SectionLabel>NOUVEAUTÉ</SectionLabel><h2>Votre marque sur tous les objets,<br /><em>sans aucune limite.</em></h2><p className="lead">Découvrez notre toute dernière innovation : l’impression UV DTF. Ce procédé ultra-moderne permet d’appliquer votre logo sous forme de stickers avec un effet de relief, des couleurs éclatantes et une résistance à toute épreuve sur presque n’importe quelle surface — verre, métal, plastique, bois.</p><FeatureList items={['Mugs, gourdes et thermos', 'Agendas et stylos', 'Matériel électronique', 'Packaging sur-mesure', 'Une infinité de goodies personnalisés']} /></div><GalleryLink slug="goodies" tone="plain-c" label="Voir la galerie Goodies" shine /></div></section>

    <section className="success section-dark" id="succes"><div className="section-inner"><SectionLabel>NOS RÉUSSITES</SectionLabel><div className="services-head"><h2>La preuve<br /><em>par l’exécution.</em></h2><p>Au-delà des belles photos, la vraie question est : pouvons-nous résoudre votre problème de déploiement ? Quelques exemples de missions que nous savons gérer.</p></div><div className="service-grid service-grid-2">
      <article className="service-card"><Visual label="Vitrophanie Multi-Sites" tone="cyan" /><div className="service-info"><span className="service-index">01</span><h3>Déploiement Vitrophanie Multi-Sites</h3><p>Une campagne de vitrophanie déployée sur plusieurs dizaines de pharmacies à travers le pays, dans des délais courts et avec une qualité homogène sur chaque point de vente.</p></div></article>
      <article className="service-card"><Visual label="Aménagement Scénique" tone="magenta" /><div className="service-info"><span className="service-index">02</span><h3>Aménagement Scénique & Signalétique Événementielle</h3><p>Conception et installation complètes d’un aménagement scénique sur-mesure et d’une signalétique dédiée pour un grand congrès médical.</p></div></article>
    </div></div></section>

    <section className="clients section-blue" id="clients"><div className="section-inner"><SectionLabel>NOS CLIENTS & PARTENAIRES</SectionLabel><div className="values-head"><h2>Ils nous ont<br /><em>fait confiance.</em></h2><p>Marques, industriels et institutions qui nous confient leur image de marque au quotidien.</p></div><div className="logo-wall">{clientLogos.map(c => <div className="logo-card" key={c.name} title={c.name}><img src={c.img} alt={c.name} loading="lazy" /></div>)}</div><p className="also-clients">Également parmi nos références : {refs.join(' · ')}</p></div></section>

    <section className="contact section-blue" id="contact"><div className="section-inner contact-grid"><div><SectionLabel>PARLONS DU PROJET</SectionLabel><h2>Une idée en tête ?<br /><em>Faisons-la exister.</em></h2><p className="contact-copy">Répondez à 3 questions rapides : notre équipe revient vers vous avec une première estimation sur-mesure.</p><div className="contact-details"><a href="tel:+21621700887">+216 21 700 887</a><span>Menzah 5, Ariana<br />Tunis, Tunisie</span></div></div><div className="quote-form" aria-label="Demande de devis">{sent ? <div className="form-success"><Check /><h3>Message bien reçu.</h3><p>Nous revenons vers vous très vite.</p><button type="button" onClick={resetQuiz}>Envoyer un autre message</button></div> : <div className="quiz">
      <div className="quiz-progress">{[0, 1, 2, 3].map((i) => <span key={i} className={quizStep >= i ? 'active' : ''} />)}</div>
      {quizStep === 0 && <div className="quiz-step"><p className="quiz-question">Quel est votre objectif ?</p><div className="quiz-options">{objectifOptions.map((opt) => <button type="button" key={opt} onClick={() => selectAnswer('objectif', opt)}>{opt}</button>)}</div></div>}
      {quizStep === 1 && <div className="quiz-step"><p className="quiz-question">Avez-vous déjà vos fichiers de création ?</p><div className="quiz-options">{fichiersOptions.map((opt) => <button type="button" key={opt} onClick={() => selectAnswer('fichiers', opt)}>{opt}</button>)}</div><button type="button" className="quiz-back" onClick={() => setQuizStep(0)}>‹ Retour</button></div>}
      {quizStep === 2 && <div className="quiz-step"><p className="quiz-question">Votre délai idéal ?</p><div className="quiz-options">{delaiOptions.map((opt) => <button type="button" key={opt} onClick={() => selectAnswer('delai', opt)}>{opt}</button>)}</div><button type="button" className="quiz-back" onClick={() => setQuizStep(1)}>‹ Retour</button></div>}
      {quizStep === 3 && <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
        <div className="quiz-summary"><span>{quizAnswers.objectif}</span><span>{quizAnswers.fichiers}</span><span>{quizAnswers.delai}</span></div>
        <label>Votre nom<input required name="name" placeholder="Nom complet" /></label>
        <label>Votre entreprise<input name="company" placeholder="Entreprise" /></label>
        <label>Téléphone ou email<input required name="contact" placeholder="Votre meilleur contact" /></label>
        <button className="button button-orange" type="submit">Obtenir mon estimation <ArrowUpRight aria-hidden="true" /></button>
        <button type="button" className="quiz-back" onClick={() => setQuizStep(2)}>‹ Retour</button>
      </form>}
    </div>}</div></div></section>

    <a href="#contact" className="fab-cta" aria-label="Obtenir une estimation">Obtenir une estimation <ArrowUpRight aria-hidden="true" /></a>

    <footer><div className="footer-top"><a href="#top" className="logo logo-white" aria-label="Kazeo, retour en haut"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20kazeo%20png%20blc-nlQe5FQPXGiJkav3WTZ5pdJvon8l5V.png" alt="KAZEO Solutions" /></a><p>IF YOU CAN THINK IT…<br /><em>WE CAN DO IT…</em></p><div className="footer-links"><a href="#enseigne">Enseignes</a><a href="#impression">Impression</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© KAZEO 2026</span><span>El Menzah 5 · Ariana · Tunisie</span><span>Instagram · LinkedIn</span></div></footer>
  </main>
}
