import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, CarFront, Globe } from 'lucide-react';

export const metadata: Metadata = { 
  title: '⚡ Spoedkoerier Eindhoven | High Tech Campus 24/7 | OnPoint Koeriers', 
  description: 'Spoedkoerier in Eindhoven, Brainport of High Tech Campus nodig? Binnen 30-45 minuten op de ophaallocatie. 100% dedicated B2B vervoer vanaf € 0,60/km.', 
  alternates: {
    canonical: '/werkgebied/eindhoven',
  },
  openGraph: {
    title: '⚡ Spoedkoerier Eindhoven & Brainport | OnPoint Koeriers',
    description: 'Direct spoedtransport voor de high-tech en maakindustrie in Eindhoven, De Hurk, Flight Forum en High Tech Campus.',
    url: 'https://onpointkoeriers.nl/werkgebied/eindhoven',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function EindhovenPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Spoedkoerier Eindhoven", "item": "https://onpointkoeriers.nl/werkgebied/eindhoven" }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Eindhoven", "image": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg", "url": "https://onpointkoeriers.nl/werkgebied/eindhoven", "priceRange": "€0,60 - €0,65 per km", "areaServed": { "@type": "City", "name": "Eindhoven" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-eindhoven.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Eindhoven" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: 'var(--color-light)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedkoerier Eindhoven: Direct Onderweg voor High-Tech & Industrie
            </h1>
            <p className={styles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Premium spoedtransport voor de zakelijke markt en high-tech industrie. Exclusief met personenauto's of compacte bestelwagens.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
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
      <section className="section section-steel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--color-dark)', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Binnen no-time onderweg vanuit Eindhoven, Brainport & De Hurk
          </h2>
          <p style={{ color: 'var(--color-dark)', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            In de Brainport-regio, op de High Tech Campus, Flight Forum, Acht en bedrijventerrein De Hurk telt iedere minuut. Valt een productieproces stil of wacht er een monteur op een cruciaal <Link href="/diensten/automotive-onderdelen" style={{ textDecoration: 'underline' }}>machine- of elektronica-onderdeel</Link>? Via de A2, A50, A58 en A67 verzorgt OnPoint Koeriers rechtstreeks spoedtransport vanuit Eindhoven richting <Link href="/werkgebied/tilburg" style={{ textDecoration: 'underline' }}>Tilburg</Link>, <Link href="/werkgebied/venlo" style={{ textDecoration: 'underline' }}>Venlo</Link>, <Link href="/werkgebied/breda" style={{ textDecoration: 'underline' }}>Breda</Link>, België en Duitsland tegen transparante <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometerprijzen</Link>.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_diensten_alps.jpg"
            alt="Eindhoven achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer aria-hidden="true" /></div>
              <h3>Techniek & Industrie</h3>
              <p>Directe inzetbaarheid voor productiebedrijven, machinebouwers en de automotive sector in Zuid-Nederland.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront aria-hidden="true" /></div>
              <h3>Brainport & High Tech</h3>
              <p>Schokvrij, discreet en 100% dedicated vervoer voor kwetsbare hightech componenten en prototypes.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Globe aria-hidden="true" /></div>
              <h3>Direct via A2 & A67</h3>
              <p>Vanuit Eindhoven via de A67 en A2 direct onderweg naar bestemmingen in België, het Ruhrgebied en heel Europa.</p>
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
              Direct een spoedkoerier in Eindhoven nodig?
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
