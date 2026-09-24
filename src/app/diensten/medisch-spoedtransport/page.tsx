import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { Activity, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medisch Spoedtransport & Laboratorium Koerier | OnPoint Koeriers',
  description: 'Gespecialiseerd medisch spoedtransport voor ziekenhuizen, laboratoria en apotheken. Direct vervoer van monsters, medicijnen en apparatuur. 24/7 dedicated inzetbaar.',
  alternates: {
    canonical: '/diensten/medisch-spoedtransport',
  },
  openGraph: {
    title: 'Medisch Spoedtransport & Laboratorium Koerier | OnPoint',
    description: 'Gespecialiseerd medisch spoedtransport voor ziekenhuizen, laboratoria en apotheken. 24/7 direct onderweg.',
    url: 'https://onpointkoeriers.nl/diensten/medisch-spoedtransport',
    siteName: 'OnPoint Koeriers',
    images: [
      {
        url: '/images/hero-cinematic-onpoint.jpg',
        width: 1200,
        height: 630,
        alt: 'Medisch Spoedtransport OnPoint Koeriers',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function MedischSpoedtransportPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Medisch Spoedtransport",
    "provider": {
      "@type": "CourierService",
      "name": "OnPoint Koeriers",
      "telephone": "0630037257",
      "url": "https://onpointkoeriers.nl"
    },
    "areaServed": "NL",
    "description": "24/7 Medisch spoedtransport voor ziekenhuizen, laboratoria, apotheken en medische toeleveranciers."
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className={styles.hero} style={{ minHeight: '55vh', height: '55vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/bg_zakelijk_spoedtransport_cool.jpg" 
            alt="Medisch spoedtransport en laboratorium logistiek" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.75)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: 'var(--color-light)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Medisch Spoedtransport
            </h1>
            <p className={styles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto' }}>
              Geconditioneerd en dedicated vervoer voor ziekenhuizen, laboratoria, apotheken en medische fabrikanten.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: '#C2CBD3', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Zorgvuldig, Discreet & Met Hoogste Prioriteit
          </h2>
          <p style={{ color: '#313851', fontSize: '1.1rem', lineHeight: '1.75' }}>
            Bij medisch spoedtransport telt elke seconde. Of het nu gaat om dringende bloed- of weefselmonsters voor laboratoriumonderzoek, medische apparatuur, implantaten of spoedmedicatie: OnPoint Koeriers garandeert directe ophaal en rechtstreekse aflevering zonder tussenstops of overslag.
          </p>
        </div>
      </section>

      {/* USPs / EIGENSCHAPPEN */}
      <section style={{ backgroundColor: '#F6F3ED', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px' }}>
              <div style={{ color: '#313851', marginBottom: '15px' }}><Clock size={36} /></div>
              <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '10px' }}>Binnen 30 Min. Ter Plaatse</h3>
              <p style={{ color: '#313851', lineHeight: '1.6' }}>Onze koerier is na uw telefoontje binnen 30 tot 45 minuten op de ophaallocatie bij de zorginstelling of het lab.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px' }}>
              <div style={{ color: '#313851', marginBottom: '15px' }}><Activity size={36} /></div>
              <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '10px' }}>Dedicated Vervoer</h3>
              <p style={{ color: '#313851', lineHeight: '1.6' }}>Uw medische zending staat 100% exclusief in ons voertuig. Geen gevaar voor verwisseling of vertraging op verzamelpunten.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px' }}>
              <div style={{ color: '#313851', marginBottom: '15px' }}><ShieldCheck size={36} /></div>
              <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '10px' }}>Digitale Ontvangstbevestiging</h3>
              <p style={{ color: '#313851', lineHeight: '1.6' }}>Direct na overhandiging aan de arts of analist ontvangt u een digitale Proof of Delivery met handtekening en tijdstip.</p>
            </div>

          </div>

          {/* CHECKLIST */}
          <div style={{ marginTop: '60px', backgroundColor: '#313851', color: '#F6F3ED', padding: '40px', borderRadius: '12px' }}>
            <h3 style={{ color: '#F6F3ED', fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>Wat vervoeren wij met medische spoed?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Laboratorium monsters & swabs</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Medische hulpmiddelen & OK-onderdelen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Dringende medicatie & recepten</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Tandtechnische & prothese zendingen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Bloed- en plasmaonderzoeken</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Vertrouwelijke patiëntendossiers</div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '35px' }}>
              <a href="tel:+31630037257" className="btn btn-primary">DIRECT MEDISCH TRANSPORT AANVRAGEN: 06 30 03 72 57</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
