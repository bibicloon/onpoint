import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, Target, PhoneCall } from 'lucide-react';

export const metadata: Metadata = { 
  title: 'Spoedkoerier Nederland | Direct Onderweg | OnPoint Koeriers', 
  description: 'Uw betrouwbare koerier in Nederland. Wij navigeren moeiteloos door de stad voor al uw spoedzendingen. Direct beschikbaar.', 
};

export default function NederlandPage() {
  return (
    <main>
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
              Overal in Nederland direct ter plaatse.
            </h1>
            <p className={styles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto' }}>
              Uw betrouwbare partner voor nationaal en internationaal spoedtransport.
            </p>
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
            Of uw zending nu van Groningen naar Maastricht moet, of de grens over gaat; OnPoint Koeriers garandeert direct vertrek zonder onnodige tussenstops. Wij bieden de perfecte logistieke oplossing voor zendingen die geen minuut te verliezen hebben.
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
              <div className={styles.uspIcon}><Timer /></div>
              <h3>Snel & Wendbaar</h3>
              <p>Dankzij de inzet van representatieve personenauto's en Caddy's navigeren wij razendsnel door het verkeer en bereiken we moeiteloos elke stedelijke of industriële locatie in Nederland.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Target /></div>
              <h3>100% Dedicated</h3>
              <p>Uw zending wordt exclusief vervoerd. Geen overslag, geen gecombineerde ritten. Direct van de ophaallocatie naar de eindbestemming.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><PhoneCall /></div>
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
