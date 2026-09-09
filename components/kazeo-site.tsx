'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Menu, MoveRight, X } from 'lucide-react'
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
const refs = ['CARREFOUR', 'COLGATE', 'KIA', 'KARCHER', 'HAVAS', 'SFBT', 'AXA', 'AMBASSADE DE SUISSE', 'LEE COOPER', 'OACA', 'CLINIQUE TAOUFIK']

const savoirFaireItems: CarouselItem[] = [
  { tag: '#01 · Enseignes', titleLine1: 'Enseignes lumineuses', titleLine2: 'Signature de façade', desc: 'Lettres boîtiers, blocs LED et néons conçus pour être vus.', img: '/images/kazeo-signage.png', ctaText: 'Découvrir', ctaUrl: '#contact' },
  { tag: '#02 · Signalétique', titleLine1: 'Signalétique', titleLine2: 'Orientation claire', desc: 'Wayfinding intérieur, plaques et numérotation qui guident naturellement.', img: '/images/kazeo-hero-workshop.png', ctaText: 'Découvrir', ctaUrl: '#contact' },
  { tag: '#03 · Impression', titleLine1: 'Grand format', titleLine2: 'Impact visuel', desc: 'Bâches, vinyles et supports rigides aux finitions nettes.', img: '/images/kazeo-print.png', ctaText: 'Découvrir', ctaUrl: '#contact' },
  { tag: '#04 · Événementiel', titleLine1: 'Stand & salon', titleLine2: 'Présence remarquée', desc: 'Des dispositifs sur-mesure pour salons, congrès et lancements.', img: '/images/kazeo-event.png', ctaText: 'Découvrir', ctaUrl: '#contact' },
]

function Drop({ tone = 'cyan' }: { tone?: string }) {
  return <span aria-hidden="true" className={`ink-drop ink-${tone}`} />
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>
}

function Visual({ label, tone = 'cyan', large = false }: { label: string; tone?: string; large?: boolean }) {
  return <div className={`visual-panel ${large ? 'visual-large' : ''} visual-${tone}`} role="img" aria-label={label}>
    <span className="visual-caption">{label}</span><span className="visual-code">KZ / 2026</span>
  </div>
}

export function KazeoSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [filter, setFilter] = useState('Tous')
  const [videoVisible, setVideoVisible] = useState(true)
  const videoRef = useRef<HTMLElement>(null)

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
        {['Enseignes', 'Impression', 'Événementiel', 'Références', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase().replace('é', 'e')}`} onClick={closeMenu}>{item}</a>)}
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
      <div className="hero-backdrop"><div className="hero-lines" /><Drop /></div>
      <div className="hero-content"><p className="eyebrow">ATELIER DE FABRICATION · ARIANA, TUNISIE</p><h1>Nous donnons<br /><em>forme</em> aux idées.</h1><p className="hero-copy">Enseignes lumineuses, signalétique et impression numérique grand format. De la première ligne au dernier détail.</p><a className="button button-orange" href="#realisations">Découvrir nos réalisations <ArrowDownRight aria-hidden="true" /></a></div>
      <div className="hero-meta"><span>Depuis 2017</span><span>01 — 05</span></div><p className="signature">IF YOU CAN THINK IT…<br /><em>WE CAN DO IT…</em></p>
    </section>

    <section className="intro section-dark" id="enseigne"><div className="section-inner intro-grid"><div><SectionLabel>QUI SOMMES-NOUS</SectionLabel><h2>Le geste juste,<br /><em>du concept à la pose.</em></h2></div><div className="intro-text"><p>Créateur d’enseignes depuis 2017, KAZEO accompagne ses clients de A à Z : création graphique, fabrication, impression, pose et SAV. Notre engagement : proximité et rapidité, pour servir avec qualité.</p><p>Depuis notre atelier d’El Menzah 5, nous transformons les idées en réalisations concrètes, esthétiques et durables au service des marques, commerces et industriels de toute la Tunisie.</p><div className="badges"><span>Norme <b>IP65</b></span><span>Équipe <b>expérimentée</b></span><span>Matériaux <b>de qualité</b></span></div></div></div></section>

    <section className="values section-blue"><div className="section-inner"><SectionLabel>CE QUI NOUS GUIDE</SectionLabel><div className="values-head"><h2>Précis dans<br /><em>chaque détail.</em></h2><p>Une culture d’atelier. Des solutions pensées pour durer. Une relation qui reste simple.</p></div><div className="values-grid">{[['Rapidité', 'Répondre vite. Avancer sans détour.'], ['Excellence', 'Ne rien laisser au hasard.'], ['Innovation', 'Explorer les matières et les usages.'], ['Proximité', 'Être là, avant, pendant et après.']].map(([title, text]) => <article className="value-card" key={title}><span className="value-mark">↗</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="services section-blue" id="impression"><div className="section-inner"><SectionLabel>NOS SAVOIR-FAIRE</SectionLabel><div className="services-head"><h2>Un atelier pour<br /><em>tout rendre visible.</em></h2><p>Du lumineux au tactile, du grand format au détail millimétré.</p></div><CoverFlowCarousel items={savoirFaireItems} sectionLabel="" autoplay autoplayDelay={4200} className="kazeo-coverflow" /></div></section>

    <section className="process section-blue"><div className="section-inner"><SectionLabel>NOTRE PROCESS</SectionLabel><div className="process-head"><h2>Six temps forts.<br /><em>Un résultat net.</em></h2><p>La méthode est claire. Le résultat, sur-mesure.</p></div><div className="process-list">{process.map(([num, title, text]) => <article className="process-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><MoveRight aria-hidden="true" /></article>)}</div></div></section>

    <section className="workshop section-dark"><div className="section-inner workshop-grid"><div><SectionLabel>NOTRE ATELIER</SectionLabel><h2>La machine<br /><em>derrière l’idée.</em></h2><p className="lead">Un parc de production précis, des finitions contrôlées et le temps nécessaire pour bien faire.</p><a href="#contact" className="text-link">Parler à l’atelier <MoveRight aria-hidden="true" /></a></div><div className="machine-list">{[['HP Latex 335', 'Impression grand format haute résolution'], ['Roland Camm-1 GR-640', 'Découpe vinyle de précision'], ['Roland ER-641', 'Traceur professionnel'], ['UV DTF', 'Relief 3D, haute résistance'], ['Confection', 'Soudure, œillets, finitions prêtes �� poser']].map(([name, detail]) => <div className="machine" key={name}><Check aria-hidden="true" /><div><h3>{name}</h3><p>{detail}</p></div></div>)}</div></div></section>

    <section className="events section-blue" id="evenementiel"><div className="section-inner"><SectionLabel>ÉVÉNEMENTIEL</SectionLabel><div className="events-head"><h2>Donner vie<br /><em>à l’instant.</em></h2><p>Salons professionnels, congrès médicaux, lancements produits : des dispositifs conçus pour être vus, vécus et retenus.</p></div><div className="filter-row" role="group" aria-label="Filtrer les événements">{['Tous', 'Salons', 'Congrès', 'Lancements'].map(item => <button key={item} className={filter === item ? 'filter-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="event-grid"><Visual label="Stand professionnel" tone="orange" large /><Visual label="Congrès médical" tone="cyan" /><Visual label="Lancement produit" tone="magenta" /></div></div></section>

    <section className="references section-dark" id="références"><div className="section-inner"><SectionLabel>ILS NOUS FONT CONFIANCE</SectionLabel><h2>Des noms qui<br /><em>parlent d’eux-mêmes.</em></h2><div className="reference-row">{refs.map(ref => <span key={ref}>{ref}</span>)}</div></div></section>

    <section className="contact section-blue" id="contact"><div className="section-inner contact-grid"><div><SectionLabel>PARLONS DU PROJET</SectionLabel><h2>Une idée en tête ?<br /><em>Faisons-la exister.</em></h2><p className="contact-copy">Décrivez-nous votre besoin. Notre équipe vous répond rapidement avec une première direction.</p><div className="contact-details"><a href="tel:+21621700887">+216 21 700 887</a><span>Menzah 5, Ariana<br />Tunis, Tunisie</span></div></div><form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="quote-form" aria-label="Demande de devis">{sent ? <div className="form-success"><Check /><h3>Message bien reçu.</h3><p>Nous revenons vers vous très vite.</p><button type="button" onClick={() => setSent(false)}>Envoyer un autre message</button></div> : <><label>Votre nom<input required name="name" placeholder="Nom complet" /></label><label>Votre entreprise<input name="company" placeholder="Entreprise" /></label><label>Type de projet<select name="project" defaultValue=""><option value="" disabled>Sélectionner une catégorie</option><option>Enseigne</option><option>Impression grand format</option><option>Événementiel</option><option>Autre</option></select></label><label>Votre message<textarea required name="message" rows={4} placeholder="Parlez-nous de votre projet..." /></label><button className="button button-orange" type="submit">Envoyer la demande <ArrowUpRight aria-hidden="true" /></button></>}</form></div></section>

    <footer><div className="footer-top"><a href="#top" className="logo logo-white" aria-label="Kazeo, retour en haut"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20kazeo%20png%20blc-nlQe5FQPXGiJkav3WTZ5pdJvon8l5V.png" alt="KAZEO Solutions" /></a><p>IF YOU CAN THINK IT…<br /><em>WE CAN DO IT…</em></p><div className="footer-links"><a href="#enseigne">Enseignes</a><a href="#impression">Impression</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© KAZEO 2026</span><span>El Menzah 5 · Ariana · Tunisie</span><span>Instagram · LinkedIn</span></div></footer>
  </main>
}
