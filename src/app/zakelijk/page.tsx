import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Handshake, FileText, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zakelijk & Partnerships | OnPoint Spoedtransport',
  description: 'Wij bouwen aan duurzame partnerships voor al uw vaste routes en periodieke spoedzendingen. Een betrouwbaar verlengstuk van uw organisatie.',
};

export default function ZakelijkPage() {
  return (
    <main>
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-zakelijk.jpg" 
            alt="Representatieve zakelijke Skoda stationwagen van OnPoint Koeriers voor B2B transport" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Uw Vaste Logistieke Partner
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Structureel ontzorgd worden? Wij bouwen graag aan duurzame partnerships voor al uw vaste routes en periodieke spoedzendingen.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-action">
                NEEM CONTACT OP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Een verlengstuk van uw eigen organisatie
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', fontWeight: 'bold', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Voor veel van onze opdrachtgevers zijn wij meer dan zomaar een koerier; we zijn een betrouwbaar verlengstuk van hun eigen bedrijfsvoering. Of het nu gaat om een wekelijkse route naar een distributiecentrum, dagelijkse postrondes tussen vestigingen, of het gegarandeerd stand-by staan voor uw meest kritieke Europese zendingen: wij bieden maatwerk. Bij een structurele samenwerking leert u onze chauffeurs kennen en leren wij uw processen kennen. Geen wisselende gezichten, maar blinde vlekkeloosheid en afspraken waar u op kunt bouwen.
          </p>
        </div>
      </section>

      {/* SECTIE 3 & 4 GECOMBINEERD - B2B ACHTERGROND */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_zakelijk_b2b.jpg"
            alt="Zakelijk B2B achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* De 3 USP Blokken */}
          <div className={styles.uspGrid} style={{ marginBottom: '60px' }}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Handshake color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Vast Contactpersoon</h3>
              <p style={{ color: '#313851' }}>Korte lijnen en direct schakelen met een planner die uw bedrijf van binnen en buiten kent.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><FileText color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Zakelijke Tarieven</h3>
              <p style={{ color: '#313851' }}>Voor vaste ritten en structurele samenwerkingen maken wij graag contractafspraken met aangepaste tarieven op maat.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Star color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Absolute Prioriteit</h3>
              <p style={{ color: '#313851' }}>Vaste partners krijgen bij ons altijd voorrang, óók in de nacht of tijdens het weekend.</p>
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
            textAlign: 'center' 
          }}>
            <h2 style={{ color: '#313851', marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
              Laten we de mogelijkheden bespreken.
            </h2>
            <Link href="/contact" className="btn btn-action">
              NEEM CONTACT OP VOOR EEN KENNISMAKING
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
