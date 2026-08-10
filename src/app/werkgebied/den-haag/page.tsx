import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Lock, UserCheck, CarFront } from 'lucide-react';

export const metadata: Metadata = { 
  title: 'Spoedkoerier Den Haag | Direct Onderweg | OnPoint Koeriers', 
  description: 'Uw betrouwbare koerier in Den Haag. Wij navigeren moeiteloos door de stad voor al uw spoedzendingen. Direct beschikbaar.', 
};

export default function DenHaagPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Den-Haag", "image": "https://onpointkoerier.nl/logo.png", "url": "https://onpointkoerier.nl/werkgebied/den-haag", "telephone": "0630037257", "areaServed": { "@type": "City", "name": "Den-Haag" } }) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-denhaag.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Den Haag" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedtransport Den Haag: Discreet & Veilig Documentenvervoer
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Representatief spoedvervoer voor de overheid, advocatuur en zakelijke dienstverlening.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
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
            Betrouwbaar spoedtransport vanuit Den Haag
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            In het politieke en zakelijke hart van Nederland is discretie van het grootste belang. Wij zijn gespecialiseerd in het veilig en razendsnel vervoeren van vertrouwelijke documenten, contracten en paspoorten. Onze representatieve chauffeurs en onopvallende voertuigen garanderen 100% dedicated vervoer van hand tot hand.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_tarieven_automotive.jpg"
            alt="Den Haag achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Lock /></div>
              <h3 style={{ color: '#313851' }}>Absolute Discretie</h3>
              <p style={{ color: '#313851' }}>Volledige privacy en veiligheid voor al uw vertrouwelijke stukken.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><UserCheck /></div>
              <h3 style={{ color: '#313851' }}>Hand-tot-Hand</h3>
              <p style={{ color: '#313851' }}>Persoonlijke overhandiging aan de juiste ontvanger.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront /></div>
              <h3 style={{ color: '#313851' }}>Representatief</h3>
              <p style={{ color: '#313851' }}>Representatieve wagens en chauffeurs, passend bij uw zakelijke uitstraling.</p>
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
