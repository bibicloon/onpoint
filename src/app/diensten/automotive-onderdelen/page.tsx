import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { Wrench, Zap, Truck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automotive & Onderdelen Spoedkoerier | OnPoint Koeriers',
  description: 'Spoedtransport van auto-onderdelen, reserveonderdelen, elektronica en gereedschap voor garages, merkdealers en de industrie. Binnen 30 min. onderweg.',
  alternates: {
    canonical: '/diensten/automotive-onderdelen',
  },
  openGraph: {
    title: 'Automotive & Onderdelen Spoedkoerier | OnPoint Koeriers',
    description: 'Spoedtransport van auto-onderdelen en reserveonderdelen voor garages en dealers. 24/7 direct op locatie.',
    url: 'https://onpointkoeriers.nl/diensten/automotive-onderdelen',
    siteName: 'OnPoint Koeriers',
    images: [
      {
        url: '/images/hero-cinematic-onpoint.jpg',
        width: 1200,
        height: 630,
        alt: 'Automotive Onderdelen Spoedkoerier OnPoint',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function AutomotiveOnderdelenPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automotive & Onderdelen Spoedkoerier",
    "provider": {
      "@type": "CourierService",
      "name": "OnPoint Koeriers",
      "telephone": "0630037257",
      "url": "https://onpointkoeriers.nl"
    },
    "areaServed": "NL",
    "description": "Spoedtransport van auto-onderdelen, elektronica en vervangingsonderdelen voor merkdealers, autobedrijven en de maakindustrie."
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
            src="/images/bg_tarieven_automotive.jpg" 
            alt="Automotive spoedtransport van auto onderdelen en gereedschap" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Automotive & Onderdelen Koerier
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Directe levering van kritieke onderdelen, motoren, elektronica en gereedschappen aan garages en dealers.
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
            Geen Stilstand in Werkplaats of Productielijn
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Als een auto in de werkplaats staat te wachten op die ene specifieke sensor, versnellingsbak of koplamp, kan elk uur vertraging omzet kosten. OnPoint Koeriers haalt het benodigde onderdeel direct op bij het centrale magazijn of de leverancier en bezorgt het rechtstreeks bij de monteur in de werkplaats.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 USP KAARTEN EN CTA BLOK */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Automotive spoedtransport achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Zap color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Directe Ophaalsnelheid</h3>
              <p style={{ color: '#313851' }}>Binnen 30-45 minuten na de oproep rijdt onze koerier voor bij het distributiecentrum of de onderdelenleverancier.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Truck color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Auto & Caddy Voertuigen</h3>
              <p style={{ color: '#313851' }}>Van een klein elektronisch stuurapparaat in onze personenauto tot een europallet met onderdelen in onze Caddy-bestelbus.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Wrench color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Werkplaats Bezorging</h3>
              <p style={{ color: '#313851' }}>Onze chauffeur levert het onderdeel persoonlijk af aan de werkplaatsbalie of baliebeheerder, inclusief aftekening.</p>
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
              Wat vervoeren wij voor de automotive- en industriële sector?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px', textAlign: 'left', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Carrosserie- & motordelen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Stuurapparaten & ECU elektronica</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Diagnoseapparatuur & speciaal gereedschap</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Banden, velgen & uitlaatsystemen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Machineonderdelen voor de industrie</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Schadeherstel vervangende onderdelen</div>
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
