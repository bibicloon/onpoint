import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { Plane, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '✈️ Luchtvracht, AOG & Courier On Board (COB) Spoedkoerier | OnPoint Koeriers',
  description: '24/7 AOG (Aircraft on Ground) spoedkoerier, luchtvracht transport vanaf Schiphol en Courier On Board (COB) wereldwijd. Binnen 30 minuten ter plaatse op Schiphol.',
  alternates: {
    canonical: '/diensten/luchtvracht-aog-koerier',
  },
  openGraph: {
    title: 'Luchtvracht, AOG & Courier On Board (COB) Spoedkoerier | OnPoint Koeriers',
    description: 'Tijdskritisch spoedvervoer van vliegtuigonderdelen, luchtvrachtzendingen en Courier On Board vanaf Schiphol Airport.',
    url: 'https://onpointkoeriers.nl/diensten/luchtvracht-aog-koerier',
    siteName: 'OnPoint Koeriers',
    images: [
      {
        url: '/images/hero-cinematic-onpoint.jpg',
        width: 1200,
        height: 630,
        alt: 'Luchtvracht AOG & Courier On Board Spoedkoerier OnPoint',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function LuchtvrachtAogKoerierPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luchtvracht, AOG & Courier On Board (COB) Spoedkoerier",
    "provider": {
      "@type": "CourierService",
      "name": "OnPoint Koeriers",
      "url": "https://onpointkoeriers.nl",
      "image": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg"
    },
    "areaServed": ["NL", "BE", "DE", "EU"],
    "description": "24/7 Aircraft on Ground (AOG) spoedtransport, urgente luchtvracht-afhandeling vanaf Schiphol en persoonlijke begeleiding via Courier On Board (COB)."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Diensten", "item": "https://onpointkoeriers.nl/diensten" },
      { "@type": "ListItem", "position": 3, "name": "Luchtvracht, AOG & COB", "item": "https://onpointkoeriers.nl/diensten/luchtvracht-aog-koerier" }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-diensten-v2.jpg" 
            alt="Luchtvracht, AOG en Courier On Board spoedtransport vanaf Schiphol" 
            fill 
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Luchtvracht, AOG & Courier On Board (COB)
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              24/7 tijdskritisch transport van vliegtuigonderdelen, luchtvrachtzendingen en persoonlijk begeleide vluchten vanaf Schiphol.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
                BEL DIRECT
              </a>
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
            Geen Minuut Verlies bij Aircraft on Ground (AOG) & Spoedvracht
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '820px', margin: '0 auto', lineHeight: '1.7' }}>
            Wanneer een toestel aan de grond staat (AOG) of een urgente luchtvrachtzending op <Link href="/werkgebied/schiphol" style={{ textDecoration: 'underline' }}>Schiphol</Link> direct door moet naar een eindklant of Europese luchthaven, telt elke minuut. Vanuit onze vestigingsregio Amsterdam/Schiphol staan wij binnen 30 minuten bij de vrachtafhandelaar op Schiphol-Rijk of Schiphol Zuidoost. Lees ook onze uitgebreide gids over <Link href="/kennisbank/aog-koerier-schiphol-luchtvracht" style={{ textDecoration: 'underline' }}>AOG-logistiek & Courier On Board</Link>.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 USP KAARTEN EN CHECKLIST BLOK */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Luchtvracht en AOG spoedtransport achtergrond"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Zap color="#313851" aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Binnen 30 Min. op Schiphol</h3>
              <p style={{ color: '#313851' }}>Directe opname bij luchtvrachtexpediteurs, MRO-hangars en douaneloodsen rond Schiphol, Rotterdam Airport en Eindhoven Airport.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Plane color="#313851" aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Courier On Board (COB)</h3>
              <p style={{ color: '#313851' }}>Voor intercontinentale of langeafstand-spoed stapt onze koerier persoonlijk op het eerstvolgende vliegtuig met uw zending onder permanent toezicht.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><ShieldCheck color="#313851" aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Direct naar Europese Hubs</h3>
              <p style={{ color: '#313851' }}>Rechtstreeks wegvervoer van en naar Frankfurt, Brussel, Luik, Parijs CDG, Düsseldorf en Luxemburg volgens heldere <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometerprijzen</Link>.</p>
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
              Wat vervoeren wij voor luchtvaart & expediteurs?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px', textAlign: 'left', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> AOG vliegtuigonderdelen & avionica</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> Air Waybills (AWB) & douanedocumenten</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> First-mile / Last-mile luchtvracht</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> Courier On Board (OBC) handbagage</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> Kalibratie- & MRO-gereedschappen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> Scheepsonderdelen (Maritiem & Offshore)</div>
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
