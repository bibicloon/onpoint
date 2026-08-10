import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, CarFront, Globe } from 'lucide-react';

export const metadata: Metadata = { 
  title: 'Spoedkoerier Eindhoven | Direct Onderweg | OnPoint Koeriers', 
  description: 'Uw betrouwbare koerier in Eindhoven. Wij navigeren moeiteloos door de stad voor al uw spoedzendingen. Direct beschikbaar.', 
};

export default function EindhovenPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Eindhoven", "image": "https://onpointkoeriers.nl/logo.png", "url": "https://onpointkoeriers.nl/werkgebied/eindhoven", "telephone": "0630037257", "areaServed": { "@type": "City", "name": "Eindhoven" } }) }} />
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
              Direct onderweg vanuit regio Eindhoven.
            </h1>
            <p className={styles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Premium spoedtransport voor de zakelijke markt en high-tech industrie. Exclusief met personenauto's of compacte bestelwagens.
            </p>
            <div className={styles.heroActions}>
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
            Binnen no-time onderweg vanuit Eindhoven
          </h2>
          <p style={{ color: 'var(--color-dark)', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            In de high-tech en maakindustrie telt iedere minuut. Valt een productieproces stil of wacht er een monteur op een cruciaal onderdeel? Vanuit regio Eindhoven schakelen wij direct. OnPoint verzorgt hoogwaardig spoedtransport naar elke bestemming in Nederland en Europa. Snel, discreet en zonder onnodige overslag.
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
              <div className={styles.uspIcon}><Timer /></div>
              <h3>Techniek & Industrie</h3>
              <p>Directe inzetbaarheid voor productiebedrijven, machinebouwers en de automotive sector in Zuid-Nederland.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront /></div>
              <h3>Compact & Zeker</h3>
              <p>Vervoer uitsluitend met representatieve personenauto's en Caddy's. 100% dedicated transport voor uw urgente zending.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Globe /></div>
              <h3>Europa-breed</h3>
              <p>Vanuit Eindhoven via de A67 direct onderweg naar bestemmingen in België, Duitsland en de rest van Europa.</p>
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
