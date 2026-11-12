import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, CarFront, Globe } from 'lucide-react';

export const metadata: Metadata = { 
  title: '⚡ Spoedkoerier Tilburg & Vossenberg | Binnen 30 Min. | 24/7 Bereikbaar', 
  description: 'Direct een spoedkoerier in Tilburg, Vossenberg of Katsbogten nodig? Binnen 30 minuten op locatie voor B2B spoedtransport zonder overslag. Bel of WhatsApp direct.', 
  alternates: {
    canonical: '/werkgebied/tilburg',
  },
  openGraph: {
    title: '⚡ Spoedkoerier Tilburg & Vossenberg | OnPoint Koeriers',
    description: 'Snel en dedicated spoedtransport vanuit logistiek knooppunt Tilburg naar heel Nederland en Europa.',
    url: 'https://onpointkoeriers.nl/werkgebied/tilburg',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function TilburgPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Werkgebied", "item": "https://onpointkoeriers.nl/werkgebied/nederland" },
      { "@type": "ListItem", "position": 3, "name": "Spoedkoerier Tilburg", "item": "https://onpointkoeriers.nl/werkgebied/tilburg" }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Tilburg", "image": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg", "url": "https://onpointkoeriers.nl/werkgebied/tilburg", "priceRange": "€0,60 - €0,65 per km", "areaServed": { "@type": "City", "name": "Tilburg" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-tilburg-v3.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Tilburg" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedkoerier Tilburg: Direct Onderweg vanuit Midden-Brabant
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Premium spoedtransport voor de zakelijke markt en logistieke sector. Exclusief met personenauto&apos;s of compacte bestelwagens.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers Tilburg">
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
            Binnen no-time onderweg vanaf Vossenberg, Kraaiven en Katsbogten
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            In een groot logistiek hart als Tilburg is snelheid essentieel. Heeft een distributiecentrum of productiebedrijf op Vossenberg, Kraaiven, Loven of Katsbogten een urgente nalevering of <Link href="/diensten/automotive-onderdelen" style={{ textDecoration: 'underline' }}>cruciaal onderdeel</Link> nodig? Via de A58, A65 en N261 schakelen wij direct richting <Link href="/werkgebied/breda" style={{ textDecoration: 'underline' }}>Breda</Link>, <Link href="/werkgebied/eindhoven" style={{ textDecoration: 'underline' }}>Eindhoven</Link>, Waalwijk, Den Bosch en Antwerpen. OnPoint verzorgt 100% dedicated <Link href="/spoedtransport" style={{ textDecoration: 'underline' }}>spoedtransport</Link> tegen heldere <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometerprijzen</Link>.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_tarieven_automotive.jpg"
            alt="Tilburg achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Vossenberg & Katsbogten</h3>
              <p style={{ color: '#313851' }}>Binnen 30 minuten voorrijden bij distributiecentra en maakindustrie in Tilburg, Waalwijk en Oisterwijk.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Dedicated Spoedvervoer</h3>
              <p style={{ color: '#313851' }}>Rechtstreeks vervoer met representatieve personenauto&apos;s en Caddy&apos;s zonder overslag of vertraging.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Globe aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Snelweg A58 & Benelux</h3>
              <p style={{ color: '#313851' }}>Vanuit Midden-Brabant direct de grens over naar België en Duitsland of snel naar de Randstad.</p>
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
              Direct een spoedkoerier in Tilburg nodig?
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
