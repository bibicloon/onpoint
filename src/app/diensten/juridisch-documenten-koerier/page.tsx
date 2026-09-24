import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { FileText, Lock, Clock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Juridisch & Documenten Spoedkoerier | OnPoint Koeriers',
  description: 'Discreet spoedtransport van juridische stukken, notariële akten, paspoorten en vertrouwelijke contracten. Persoonlijke overhandiging in heel Nederland.',
  alternates: {
    canonical: '/diensten/juridisch-documenten-koerier',
  },
  openGraph: {
    title: 'Juridisch & Documenten Spoedkoerier | OnPoint Koeriers',
    description: 'Discreet spoedtransport van juridische stukken, notariële akten en contracten. Persoonlijke overhandiging.',
    url: 'https://onpointkoeriers.nl/diensten/juridisch-documenten-koerier',
    siteName: 'OnPoint Koeriers',
    images: [
      {
        url: '/images/hero-cinematic-onpoint.jpg',
        width: 1200,
        height: 630,
        alt: 'Juridisch Documenten Spoedkoerier OnPoint',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function JuridischDocumentenPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Juridisch & Documenten Spoedkoerier",
    "provider": {
      "@type": "CourierService",
      "name": "OnPoint Koeriers",
      "telephone": "0630037257",
      "url": "https://onpointkoeriers.nl"
    },
    "areaServed": "NL",
    "description": "Discreet spoedtransport van juridische documenten, contracten en paspoorten voor advocatenkantoren en notarissen."
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
            src="/images/hero-over-ons.jpg" 
            alt="Juridische documenten koerier en contracten spoedtransport" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Juridisch & Documenten Koerier
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              100% discrete en rechtstreekse bezorging van juridische stukken, paspoorten en vertrouwelijke contracten.
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
            Maximale Geheimhouding & Persoonlijke Overhandiging
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Bij juridische dossiers, processtukken, notariële akten en fysieke sleutels accepteert u geen enkel risico op vertraging of verlies. Onze representatieve chauffeurs vervoeren uw documenten in gesloten, onopvallende personenauto’s rechtstreeks van de afzender naar de gemachtigde ontvanger.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 USP KAARTEN EN CTA BLOK */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Juridisch spoedtransport achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Lock color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Discreet & Geheimhouding</h3>
              <p style={{ color: '#313851' }}>Onze koeriers handelen met de hoogste mate van geheimhouding. Uw zending wordt nooit onbeheerd achtergelaten.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><FileText color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Persoonlijke Handtekening</h3>
              <p style={{ color: '#313851' }}>Documenten worden uitsluitend persoonlijk overhandigd aan de specifieke jurist, notaris of bevoegde ontvanger met digitale POD.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Clock color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Rechtstreeks naar Rechtbank</h3>
              <p style={{ color: '#313851' }}>Moet een dossier voor het sluiten van de griffie worden ingediend? Wij rijden direct en zonder tussenstops naar het gerechtshof.</p>
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
              Voor wie rijden wij documenten-spoedtransport?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px', textAlign: 'left', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Advocatenkantoren & Juridisch adviseurs</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Notariskantoren & Maatschappen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Ambassades & Consulaten (Paspoorten)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Accountancy & Corporate Finance</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Overheidsinstellingen & Gemeenten</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} /> Fysieke sleutels & kluisdocumenten</div>
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
