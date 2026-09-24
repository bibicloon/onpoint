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

      {/* HERO */}
      <section className={styles.hero} style={{ minHeight: '55vh', height: '55vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/bg_tarieven_automotive.jpg" 
            alt="Automotive spoedtransport van auto onderdelen en gereedschap" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.75)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: 'var(--color-light)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Automotive & Onderdelen Koerier
            </h1>
            <p className={styles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto' }}>
              Directe levering van kritieke onderdelen, motoren, elektronica en gereedschappen aan garages en dealers.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: '#C2CBD3', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Geen Stilstand in Werkplaats of Productielijn
          </h2>
          <p style={{ color: '#313851', fontSize: '1.1rem', lineHeight: '1.75' }}>
            Als een auto in de werkplaats staat te wachten op die ene specifieke sensor, versnellingsbak of koplamp, kan elke uur vertraging omzet kosten. OnPoint Koeriers haalt het benodigde onderdeel direct op bij het centrale magazijn of de leverancier en bezorgt het rechtstreeks bij de monteur in de werkplaats.
          </p>
        </div>
      </section>

      {/* USPs */}
      <section style={{ backgroundColor: '#F6F3ED', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px' }}>
              <div style={{ color: '#313851', marginBottom: '15px' }}><Zap size={36} /></div>
              <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '10px' }}>Directe Ophaalsnelheid</h3>
              <p style={{ color: '#313851', lineHeight: '1.6' }}>Binnen 30-45 minuten na de oproep rijdt onze koerier voor bij het distributiecentrum of de onderdelenleverancier.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px' }}>
              <div style={{ color: '#313851', marginBottom: '15px' }}><Truck size={36} /></div>
              <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '10px' }}>Auto & Caddy Voertuigen</h3>
              <p style={{ color: '#313851', lineHeight: '1.6' }}>Van een klein elektronisch stuurapparaat in onze personenauto tot een europallet met onderdelen in onze Caddy-bestelbus.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px' }}>
              <div style={{ color: '#313851', marginBottom: '15px' }}><Wrench size={36} /></div>
              <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '10px' }}>Werkplaats Bezorging</h3>
              <p style={{ color: '#313851', lineHeight: '1.6' }}>Onze chauffeur levert het onderdeel persoonlijk af aan de werkplaatsbalie of baliebeheerder, inclusief aftekening.</p>
            </div>

          </div>

          {/* CHECKLIST */}
          <div style={{ marginTop: '60px', backgroundColor: '#313851', color: '#F6F3ED', padding: '40px', borderRadius: '12px' }}>
            <h3 style={{ color: '#F6F3ED', fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>Wat vervoeren wij voor de automotive- en industriële sector?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Carrosserie- & motordelen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Stuurapparaten & ECU elektronica</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Diagnoseapparatuur & speciaal gereedschap</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Banden, velgen & uitlaatsystemen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Machineonderdelen voor de industrie</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 color="#C2CBD3" size={20} /> Schadeherstel vervangende onderdelen</div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '35px' }}>
              <a href="tel:+31630037257" className="btn btn-primary">AUTOMOTIVE SPOEDRIT VERVOEREN: 06 30 03 72 57</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
