import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { gmsItems, goodiesItems, type Realisation } from '@/lib/realisations'

const galleries: Record<string, { title: string; tag: string; tone: string; intro: string; items: string[]; photos?: Realisation[] }> = {
  numerique: {
    title: 'Impression Numérique',
    tag: 'IMPRESSION NUMÉRIQUE',
    tone: 'cyan',
    intro: "Le premier contact physique avec votre marque mérite d’être parfait : cartes de visite, flyers, dépliants et brochures qui donnent vie à vos idées sur papier.",
    items: ['Cartes de visite', 'Flyers percutants', 'Dépliants élégants', 'Brochures & catalogues'],
  },
  'grand-format': {
    title: 'Impression Grand Format',
    tag: 'GRAND FORMAT',
    tone: 'orange',
    intro: 'Votre entreprise ne devrait jamais passer inaperçue : des supports grand format imprimés en haute définition, conçus pour durer.',
    items: ['Adhésifs sur-mesure & Films One Way', 'Bâches robustes & Toiles Canvas', 'Roll-ups', 'Light box (caissons lumineux)'],
  },
  gms: {
    title: 'Aménagement GMS, Pharmacies & PLV',
    tag: 'GMS & PHARMACIES',
    tone: 'yellow',
    intro: 'Faire de vos produits la star du rayon : des décors et présentoirs pensés pour attirer l’œil et déclencher le coup de cœur.',
    items: ['Habillage de vitrines', 'Têtes de gondole & caches-palettes', 'Stop-rayons & réglettes PVC', 'Factices géants', 'Stands de dégustation'],
    photos: gmsItems,
  },
  vehicules: {
    title: 'Habillage Véhicules',
    tag: 'MARQUAGE VÉHICULE',
    tone: 'plain-a',
    intro: 'Votre flotte devient votre meilleure vitrine : lettrage découpé, semi-covering ou total covering pour une campagne publicitaire mobile.',
    items: ['Lettrage découpé', 'Semi-covering', 'Total covering', 'Voitures, utilitaires, camions & semi-remorques'],
  },
  evenementiel: {
    title: 'Événementiel',
    tag: 'ÉVÉNEMENTIEL',
    tone: 'magenta',
    intro: 'Des dispositifs conçus pour être vus, vécus et retenus : stands, salons, congrès et lancements produits.',
    items: ['Stands sur-mesure pour foires et congrès', 'Location de matériel', 'Écrans LED & totems', 'Séminaires clés en main'],
  },
  vitrines: {
    title: 'Habillage de Vitrines',
    tag: 'VITRINES',
    tone: 'plain-b',
    intro: 'Du caractère à votre devanture : une vitrine qui capte le regard sans jamais bloquer la lumière.',
    items: ['Vitrophanie & stickers', 'Adhésif dépoli', 'Micro-perforé one-way'],
  },
  goodies: {
    title: 'UV DTF & Goodies',
    tag: 'NOUVEAUTÉ',
    tone: 'plain-c',
    intro: 'Votre marque sur tous les objets, sans aucune limite : impression UV DTF haute résistance sur presque toutes les surfaces.',
    items: ['Mugs, gourdes & thermos', 'Agendas & stylos', 'Matériel électronique', 'Packaging sur-mesure'],
    photos: goodiesItems,
  },
}

export function generateStaticParams() {
  return Object.keys(galleries).map((slug) => ({ slug }))
}

export default async function GaleriePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const gallery = galleries[slug]
  if (!gallery) return notFound()

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)', padding: '80px 8vw 100px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Link href="/" className="gallery-back">← Retour au site</Link>
        <p className="eyebrow">{gallery.tag}</p>
        <h1 style={{ marginTop: 18, fontSize: 'clamp(2.4rem,6vw,4.5rem)', fontWeight: 400, letterSpacing: '-.03em', lineHeight: 1.02 }}>{gallery.title}</h1>
        <p className="lead" style={{ maxWidth: 640 }}>{gallery.intro}</p>

        <div className={`visual-panel gallery-hero visual-${gallery.tone}`} role="img" aria-label={gallery.title}>
          <span className="visual-caption">{gallery.title}</span>
          <span className="visual-code">KAZÉO / GALERIE</span>
        </div>

        {gallery.photos && gallery.photos.length > 0 ? (
          <div className="signage-grid" style={{ marginTop: 40 }}>
            {gallery.photos.map((item, i) => (
              <div className="signage-tile" key={item.name + i}>
                <img src={item.img} alt={item.name} loading="lazy" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-grid">
            {gallery.items.map((item, i) => (
              <div key={item} className={`gallery-tile visual-${['cyan', 'orange', 'yellow', 'magenta', 'plain-a', 'plain-b', 'plain-c'][i % 7]}`}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        <a href="/#contact" className="button button-orange" style={{ marginTop: 50, display: 'inline-flex' }}>
          Demander un devis <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </main>
  )
}
