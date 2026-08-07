import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CarFront, Truck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tarieven Spoedtransport | Transparant & Scherp | OnPoint Koeriers',
  description: 'Transparante tarieven voor spoedtransport. Geen verborgen kosten, heldere afspraken. U weet vooraf precies waar u aan toe bent.',
};

export default function TarievenPage() {
  return (
    <main style={{ backgroundColor: '#F6F3ED' }}>
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-tarieven.jpg" 
            alt="Compacte Caddy bestelbus voor transparant geprijsd spoedtransport" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Transparante Tarieven voor Spoedtransport
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Geen verborgen kosten, heldere afspraken. U weet vooraf precies waar u aan toe bent.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-action">
                BEREKEN RITPRIJS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', maxWidth: '800px', margin: '0 auto 2.5rem', fontWeight: 'bold', lineHeight: '1.4' }}>
            Tarieven worden berekend op basis van de gereden afstand (van postcode tot postcode).
          </h2>

          {/* VOORWAARDEN BINNEN DE INTRO */}
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 600, textAlign: 'center' }}>
              Belangrijke Voorwaarden
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#313851', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '16px', fontSize: '1rem' }}>
                <CheckCircle2 color="#313851" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Starttarief / Voorrijkosten:</strong> € 25,-</span>
              </li>
              <li style={{ color: '#313851', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '16px', fontSize: '1rem' }}>
                <CheckCircle2 color="#313851" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Wachttijd op locatie:</strong> Eerste 15 minuten gratis, daarna € 10,- per 15 minuten.</span>
              </li>
              <li style={{ color: '#313851', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '16px', fontSize: '1rem' }}>
                <CheckCircle2 color="#313851" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Toeslagen:</strong> Voor ritten in het weekend of tijdens de nacht (22:00 - 06:00) geldt een toeslag van 25%.</span>
              </li>
              <li style={{ color: '#313851', display: 'flex', alignItems: 'flex-start', gap: '16px', fontSize: '1rem' }}>
                <CheckCircle2 color="#313851" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Alle genoemde prijzen zijn exclusief 21% BTW en eventuele tolkosten.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTIE 3 - PRIJSBLOKKEN */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_tarieven_automotive.jpg"
            alt="Tarieven automotive achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            {/* Kaart 1: Personenauto */}
            <div style={{
              backgroundColor: '#C2CBD3',
              border: '2px solid #313851',
              borderRadius: '8px',
              padding: '40px 32px',
              boxShadow: '0 8px 24px rgba(49, 56, 81, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <CarFront color="#313851" size={48} style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#313851', fontSize: '1.5rem', marginBottom: '8px' }}>Personenauto</h3>
              <div style={{ color: '#313851', fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px' }}>
                € 0,60 <span style={{ fontSize: '1rem', fontWeight: 500 }}>per km</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', width: '100%' }}>
                <li style={{ color: '#313851', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  Ideaal voor documenten en kleine pakketten
                </li>
                <li style={{ color: '#313851', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  Direct beschikbaar
                </li>
                <li style={{ color: '#313851', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  Discreet vervoer
                </li>
              </ul>
            </div>

            {/* Kaart 2: Caddy-formaat */}
            <div style={{
              backgroundColor: '#C2CBD3',
              border: '2px solid #313851',
              borderRadius: '8px',
              padding: '40px 32px',
              boxShadow: '0 8px 24px rgba(49, 56, 81, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Truck color="#313851" size={48} style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#313851', fontSize: '1.5rem', marginBottom: '8px' }}>Caddy-formaat</h3>
              <div style={{ color: '#313851', fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px' }}>
                € 0,65 <span style={{ fontSize: '1rem', fontWeight: 500 }}>per km</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', width: '100%' }}>
                <li style={{ color: '#313851', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  Voor grotere zendingen of meerdere colli
                </li>
                <li style={{ color: '#313851', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  Veilig en afgesloten transport
                </li>
                <li style={{ color: '#313851', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  Razendsnel van A naar B
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}
