import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, CarFront, Globe } from 'lucide-react';

export const metadata: Metadata = { 
  title: '⚡ Spoedkoerier Breda & Hazeldonk | Binnen 30 Min. | Bel 06 30 03 72 57', 
  description: 'Direct een spoedkoerier in Breda, Hazeldonk of West-Brabant nodig? Binnen 30 minuten ter plaatse. 100% dedicated vervoer naar NL, België & EU. Bel 06 30 03 72 57.', 
  alternates: {
    canonical: '/werkgebied/breda',
  },
  openGraph: {
    title: '⚡ Spoedkoerier Breda & Hazeldonk | OnPoint Koeriers',
    description: 'Binnen 30 minuten op locatie in Breda, Hazeldonk en West-Brabant voor direct spoedtransport zonder overslag.',
    url: 'https://onpointkoeriers.nl/werkgebied/breda',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function BredaPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Breda", "image": "https://onpointkoeriers.nl/logo.png", "url": "https://onpointkoeriers.nl/werkgebied/breda", "telephone": "+31630037257", "priceRange": "€0,60 - €0,65 per km", "areaServed": { "@type": "City", "name": "Breda" } }) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-breda-v3.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Breda" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedkoerier Breda: Direct Onderweg naar NL & België
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Premium spoedtransport voor de zakelijke markt en logistieke sector. Exclusief met personenauto's of compacte bestelwagens.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary">
                BEL DIRECT: 06 30 03 72 57
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
            Binnen no-time onderweg vanuit Breda, Hazeldonk en de A16
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Als strategisch knooppunt aan de A16, A27 en A58 tussen Rotterdam en Antwerpen telt in Breda iedere minuut. Ligt uw productie stil op bedrijventerrein Hazeldonk, Hoogeind of Steenakker, of moeten er met spoed documenten over de grens geleverd worden? OnPoint Koeriers schakelt direct en rijdt zonder overslag tegen transparante <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometerprijzen</Link>.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_tarieven_automotive.jpg"
            alt="Breda achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer /></div>
              <h3 style={{ color: '#313851' }}>Snel op Locatie</h3>
              <p style={{ color: '#313851' }}>Directe inzetbaarheid voor bedrijven in Breda, Hazeldonk en omgeving.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront /></div>
              <h3 style={{ color: '#313851' }}>Compact & Zeker</h3>
              <p style={{ color: '#313851' }}>Vervoer uitsluitend met representatieve personenauto's en Caddy's. 100% dedicated transport voor uw urgente zending.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Globe /></div>
              <h3 style={{ color: '#313851' }}>Europa-breed</h3>
              <p style={{ color: '#313851' }}>Vanuit Breda direct de grens over of snel onderweg naar de rest van Nederland.</p>
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
              Een spoedzending die vandaag onderweg moet?
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
