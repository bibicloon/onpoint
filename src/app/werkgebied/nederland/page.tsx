import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, Target, PhoneCall } from 'lucide-react';

export const metadata: Metadata = { 
  title: '⚡ Spoedkoerier Nederland & Europa | Binnen 30 Min. Onderweg | 24/7 Bereikbaar', 
  description: 'Landelijke spoedkoerier in heel Nederland & Europa. Binnen 30-45 minuten op elke ophaallocatie. 100% dedicated vervoer zonder overslag vanaf €0,60/km. Bel of WhatsApp direct.',
  alternates: {
    canonical: '/werkgebied/nederland',
  },
  openGraph: {
    title: '⚡ Spoedkoerier Nederland & Europa | OnPoint Koeriers',
    description: 'Landelijke dekking, lokale snelheid: binnen 30-45 minuten ter plaatse in heel Nederland voor direct spoedtransport naar elke bestemming in Europa.',
    url: 'https://onpointkoeriers.nl/werkgebied/nederland',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function NederlandPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Spoedkoerier Nederland", "item": "https://onpointkoeriers.nl/werkgebied/nederland" }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Nederland", "image": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg", "url": "https://onpointkoeriers.nl/werkgebied/nederland", "priceRange": "€0,60 - €0,65 per km", "areaServed": { "@type": "Country", "name": "Netherlands" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-nederland.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Nederland" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: 'var(--color-light)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedkoerier Nederland: Overal Direct Ter Plaatse
            </h1>
            <p className={styles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Uw betrouwbare partner voor nationaal en internationaal spoedtransport zonder overslag.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers Nederland">
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
            Landelijke dekking, lokale snelheid
          </h2>
          <p style={{ color: 'var(--color-dark)', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Of uw zending nu vanuit de Randstad (<Link href="/werkgebied/amsterdam" style={{ textDecoration: 'underline' }}>Amsterdam</Link>, <Link href="/werkgebied/rotterdam" style={{ textDecoration: 'underline' }}>Rotterdam</Link>, <Link href="/werkgebied/den-haag" style={{ textDecoration: 'underline' }}>Den Haag</Link>, <Link href="/werkgebied/utrecht" style={{ textDecoration: 'underline' }}>Utrecht</Link> en <Link href="/werkgebied/schiphol" style={{ textDecoration: 'underline' }}>Schiphol</Link>) naar Noord-Brabant (<Link href="/werkgebied/eindhoven" style={{ textDecoration: 'underline' }}>Eindhoven</Link>, <Link href="/werkgebied/tilburg" style={{ textDecoration: 'underline' }}>Tilburg</Link>, <Link href="/werkgebied/breda" style={{ textDecoration: 'underline' }}>Breda</Link>), Gelderland (<Link href="/werkgebied/arnhem" style={{ textDecoration: 'underline' }}>Arnhem</Link>) of Limburg (<Link href="/werkgebied/venlo" style={{ textDecoration: 'underline' }}>Venlo</Link>) moet, of direct de grens over gaat naar België, Duitsland of Frankrijk: OnPoint Koeriers garandeert direct vertrek zonder tussenstops tegen transparante <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometer tarieven vanaf € 0,60/km</Link>.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Nederland achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer aria-hidden="true" /></div>
              <h3>Snel & Wendbaar</h3>
              <p>Dankzij de inzet van representatieve personenauto&apos;s en Caddy&apos;s navigeren wij razendsnel door het verkeer en bereiken we moeiteloos elke stedelijke of industriële locatie in Nederland.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Target aria-hidden="true" /></div>
              <h3>100% Dedicated</h3>
              <p>Uw zending wordt exclusief vervoerd. Geen overslag, geen gecombineerde ritten. Direct van de ophaallocatie naar de eindbestemming.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><PhoneCall aria-hidden="true" /></div>
              <h3>Altijd Bereikbaar</h3>
              <p>Logistieke noodgevallen houden zich niet aan kantoortijden. Daarom zijn wij flexibel inzetbaar voor al uw urgente transportvragen, overal in het land.</p>
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
