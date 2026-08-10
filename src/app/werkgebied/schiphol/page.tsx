import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, CarFront, Globe } from 'lucide-react';

export const metadata: Metadata = { 
  title: 'Spoedkoerier Schiphol | Direct Onderweg | OnPoint Koeriers', 
  description: 'Uw betrouwbare koerier in Schiphol. Wij navigeren moeiteloos door de stad voor al uw spoedzendingen. Direct beschikbaar.', 
};

export default function SchipholPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Schiphol", "image": "https://onpointkoeriers.nl/logo.png", "url": "https://onpointkoeriers.nl/werkgebied/schiphol", "telephone": "0630037257", "areaServed": { "@type": "City", "name": "Schiphol" } }) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-schiphol-v3.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Schiphol" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedtransport Schiphol & Aalsmeer: Direct Vertrek, Geen Vertraging
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Premium spoedtransport voor de logistieke markt. Exclusief met wendbare personenauto's of compacte bestelwagens.
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
            Essentieel transport rondom de logistieke ring
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Rondom de luchthaven staan de ontwikkelingen nooit stil. Wij richten ons specifiek op de logistieke ring: Schiphol, Schiphol-Rijk, Aalsmeer en Hoofddorp. Ligt er een cruciaal douanedocument klaar of wacht er een AOG-onderdeel (Aircraft on Ground) op direct vervoer? Wij zijn perfect gepositioneerd voor zakelijke ritten rondom de vrachtterminals en de bloemenveiling. Snel, efficiënt en direct inzetbaar.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_zakelijk_b2b.jpg"
            alt="Schiphol achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer /></div>
              <h3 style={{ color: '#313851' }}>Directe Inzetbaarheid</h3>
              <p style={{ color: '#313851' }}>Altijd direct beschikbaar in en rondom de terminals, expediteurs en de vrachtafhandeling van de luchthaven.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront /></div>
              <h3 style={{ color: '#313851' }}>Absolute Discretie</h3>
              <p style={{ color: '#313851' }}>Uw belangrijke contracten, douanedocumenten en paspoorten zijn bij ons in uiterst veilige en betrouwbare handen.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Globe /></div>
              <h3 style={{ color: '#313851' }}>Rechtstreeks Europa in</h3>
              <p style={{ color: '#313851' }}>Van de terminal direct de weg op: wij rijden uw zending zonder stops rechtstreeks naar de eindbestemming in Europa.</p>
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
