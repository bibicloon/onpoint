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

      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/bg_zakelijk_spoedtransport_cool.jpg" 
            alt="Medisch spoedtransport en laboratorium logistiek" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Medisch Spoedtransport
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Zorgvuldig en dedicated vervoer voor ziekenhuizen, laboratoria, apotheken en medische leveranciers.
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
            Zorgvuldig, Discreet & Met Hoogste Prioriteit
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Bij medisch spoedtransport telt elke seconde. Of het nu gaat om dringende bloed- of weefselmonsters voor laboratoriumonderzoek, medische apparatuur, implantaten of spoedmedicatie: OnPoint Koeriers garandeert directe ophaal en rechtstreekse aflevering zonder tussenstops of overslag op sorteercentra.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 USP KAARTEN EN CTA BLOK */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Medisch spoedtransport achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Clock color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Binnen 30 Min. Ter Plaatse</h3>
              <p style={{ color: '#313851' }}>Onze koerier staat na uw aanvraag binnen 30 tot 45 minuten klaar op de ophaallocatie bij de zorginstelling of het lab.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Activity color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>100% Dedicated Vervoer</h3>
              <p style={{ color: '#313851' }}>Uw zending staat 100% exclusief in ons voertuig. Geen risico op verwisseling of vertraging op sorteercentra.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><ShieldCheck color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Digitale Ontvangstbevestiging</h3>
              <p style={{ color: '#313851' }}>Direct na overhandiging aan de arts of analist ontvangt u een digitale Proof of Delivery met handtekening en tijdstip.</p>
            </div>
          </div>

          {/* ONDERWERPEN CHECKLIST BLOK */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
            padding: '60px 40px', 
            maxWidth: '900px', 
            margin: '60px auto 40px auto', 
            textAlign: 'center' 
          }}>
            <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 'bold' }}>
              Wat vervoeren wij met medische spoed?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px', textAlign: 'left', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Laboratorium monsters & swabs</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Medische apparatuur & OK-artikelen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Dringende medicatie & recepten</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Tandtechnische & prothese zendingen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Bloed- en plasmaonderzoeken</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Vertrouwelijke patiëntendossiers</div>
            </div>
            <Link href="/contact" className="btn btn-action">
              NEEM DIRECT CONTACT OP
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
