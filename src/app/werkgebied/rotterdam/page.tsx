import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, Route, CarFront } from 'lucide-react';

export const metadata: Metadata = { 
  title: '⚡ Spoedkoerier Rotterdam & Haven | Binnen 30 Min. | 24/7 Bereikbaar', 
  description: 'Spoedkoerier in Rotterdam, Botlek, Europoort of Maasvlakte nodig? Binnen 30 minuten ter plaatse voor haven, industrie en zakelijk vervoer. Bel of WhatsApp direct.', 
  alternates: {
    canonical: '/werkgebied/rotterdam',
  },
  openGraph: {
    title: '⚡ Spoedkoerier Rotterdam & Haven | OnPoint Koeriers',
    description: 'Direct vervoer voor de Rotterdamse haven, Botlek, Maasvlakte en zakelijke markt. Binnen 30 minuten op locatie.',
    url: 'https://onpointkoeriers.nl/werkgebied/rotterdam',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function RotterdamPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Werkgebied", "item": "https://onpointkoeriers.nl/werkgebied/nederland" },
      { "@type": "ListItem", "position": 3, "name": "Spoedkoerier Rotterdam", "item": "https://onpointkoeriers.nl/werkgebied/rotterdam" }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Rotterdam", "image": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg", "url": "https://onpointkoeriers.nl/werkgebied/rotterdam", "priceRange": "€0,60 - €0,65 per km", "areaServed": { "@type": "City", "name": "Rotterdam" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-rotterdam.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Rotterdam" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedkoerier Rotterdam: Direct Vervoer voor Haven & Industrie
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Uw zending vanuit de Maasstad razendsnel en zonder overslag naar de eindbestemming.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers Rotterdam">
                BEL DIRECT
              </a>
              <Link href="/contact" className="btn btn-action">
                Plan uw transport
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Razendsnel ter plaatse in Rotterdam, Waalhaven, Botlek en Maasvlakte
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            In de dynamiek van de Rotterdamse haven en industrie telt elke minuut. Wij zijn 24/7 inzetbaar voor het vervoer van <Link href="/diensten/automotive-onderdelen" style={{ textDecoration: 'underline' }}>scheeps- en machineonderdelen</Link>, maritieme douanedocumenten en urgente zendingen op Spaanse Polder, Waalhaven, Botlek, Europoort en de Maasvlakte. Via de A15, A16 en A20 rijden we zonder overslag direct tussen Rotterdam, <Link href="/werkgebied/dordrecht" style={{ textDecoration: 'underline' }}>Dordrecht</Link>, <Link href="/werkgebied/den-haag" style={{ textDecoration: 'underline' }}>Den Haag</Link>, <Link href="/werkgebied/breda" style={{ textDecoration: 'underline' }}>Breda</Link> en Antwerpen tegen heldere <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometerprijzen</Link>.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_diensten_alps.jpg"
            alt="Rotterdam achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>24/7 Inzetbaar</h3>
              <p style={{ color: '#313851' }}>Direct beschikbaar voor logistieke nood, ook buiten kantooruren.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Route aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Terminals & Schepen</h3>
              <p style={{ color: '#313851' }}>Wij leveren rechtstreeks af op terminals, bij schepen of op industrieterreinen.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Wendbaar Vervoer</h3>
              <p style={{ color: '#313851' }}>Sneller dan groot vrachtverkeer dankzij onze Caddy&apos;s en personenauto&apos;s.</p>
            </div>
          </div>
          
          {/* Nieuw CTA Blok (Onderste Sectie) */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
            padding: '60px 40px', 
            maxWidth: '800px', 
            margin: '0 auto', 
            marginTop: '60px',
            marginBottom: '40px',
            textAlign: 'center' 
          }}>
            <h2 style={{ color: '#313851', marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
              Direct een spoedkoerier in Rotterdam nodig?
            </h2>
            <Link href="/contact" className="btn btn-action">
              NEEM DIRECT CONTACT OP
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
