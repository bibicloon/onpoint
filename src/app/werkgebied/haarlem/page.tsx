import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, CarFront, Globe } from 'lucide-react';

export const metadata: Metadata = { 
  title: '⚡ Spoedkoerier Haarlem & Waarderpolder | Binnen 30 Min. | OnPoint Koeriers', 
  description: 'Direct een spoedkoerier in Haarlem, Waarderpolder of Zuid-Kennemerland nodig? Binnen 30 minuten op locatie voor B2B spoedtransport vanaf € 0,60/km.', 
  alternates: {
    canonical: '/werkgebied/haarlem',
  },
  openGraph: {
    title: '⚡ Spoedkoerier Haarlem & Waarderpolder | OnPoint Koeriers',
    description: 'Binnen 30 minuten ter plaatse in Haarlem en de Waarderpolder voor 100% dedicated spoedtransport.',
    url: 'https://onpointkoeriers.nl/werkgebied/haarlem',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function HaarlemPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Spoedkoerier Haarlem", "item": "https://onpointkoeriers.nl/werkgebied/haarlem" }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Haarlem", "image": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg", "url": "https://onpointkoeriers.nl/werkgebied/haarlem", "priceRange": "€0,60 - €0,65 per km", "areaServed": { "@type": "City", "name": "Haarlem" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-haarlem-v3.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Haarlem" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedkoerier Haarlem: Direct Onderweg vanuit Kennemerland
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Premium <Link href="/spoedtransport" style={{ textDecoration: 'underline' }}>spoedtransport</Link> voor de <Link href="/zakelijk" style={{ textDecoration: 'underline' }}>zakelijke markt</Link>. Exclusief met wendbare personenauto's of compacte bestelwagens.
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
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Binnen no-time onderweg vanuit Haarlem en de Waarderpolder
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Of uw bedrijf zich nu in de bruisende binnenstad van Haarlem, rond het <Link href="/diensten/medisch-spoedtransport" style={{ textDecoration: 'underline' }}>Spaarne Gasthuis</Link>, Velsen-Noord of op bedrijventerrein de Waarderpolder bevindt: via de A200 en A9 schakelen wij direct. OnPoint Koeriers verzorgt hoogwaardig spoedtransport naar <Link href="/werkgebied/amsterdam" style={{ textDecoration: 'underline' }}>Amsterdam</Link>, <Link href="/werkgebied/schiphol" style={{ textDecoration: 'underline' }}>Schiphol</Link>, <Link href="/werkgebied/zaandam" style={{ textDecoration: 'underline' }}>Zaandam</Link>, <Link href="/werkgebied/alkmaar" style={{ textDecoration: 'underline' }}>Alkmaar</Link> en heel Europa tegen transparante <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometerprijzen</Link>.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_zakelijk_b2b.jpg"
            alt="Haarlem achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Waarderpolder & Kennemerland</h3>
              <p style={{ color: '#313851' }}>Binnen 30 minuten ter plaatse bij bedrijven in Haarlem, de Waarderpolder, Beverwijk, IJmuiden en Heemstede.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Wendbaar in de Binnenstad</h3>
              <p style={{ color: '#313851' }}>Met personenauto&apos;s en compacte Caddy&apos;s leveren wij snel en zonder vertraging in het historische centrum van Haarlem.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Globe aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Direct via A200 & A9</h3>
              <p style={{ color: '#313851' }}>Binnen enkele minuten op het knooppunt Rottepolderplein richting Schiphol, de Randstad en heel Europa.</p>
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
              Direct een spoedkoerier in Haarlem nodig?
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
