import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { Cpu, Zap, Truck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '⚙️ Machinebouw, High-Tech & Industrie Spoedkoerier | OnPoint Koeriers',
  description: '24/7 spoedtransport voor machinebouw, high-tech, maakindustrie en storingsdiensten. Direct vervoer van PLC-modules, matrijzen en machineonderdelen zonder overslag.',
  alternates: {
    canonical: '/diensten/machinebouw-industrie-koerier',
  },
  openGraph: {
    title: 'Machinebouw, High-Tech & Industrie Spoedkoerier | OnPoint Koeriers',
    description: 'Voorkom stilstand van uw productielijn: 24/7 dedicated spoedtransport van machineonderdelen, elektronica en gereedschappen.',
    url: 'https://onpointkoeriers.nl/diensten/machinebouw-industrie-koerier',
    siteName: 'OnPoint Koeriers',
    images: [
      {
        url: '/images/hero-cinematic-onpoint.jpg',
        width: 1200,
        height: 630,
        alt: 'Machinebouw & Industrie Spoedkoerier OnPoint',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function MachinebouwIndustrieKoerierPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Machinebouw, High-Tech & Industrie Spoedkoerier",
    "provider": {
      "@type": "CourierService",
      "name": "OnPoint Koeriers",
      "url": "https://onpointkoeriers.nl",
      "image": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg"
    },
    "areaServed": ["NL", "BE", "DE", "EU"],
    "description": "Dedicated spoedtransport van kritieke machineonderdelen, industriële elektronica, prototypes en gereedschappen voor de maakindustrie en high-tech sector."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Diensten", "item": "https://onpointkoeriers.nl/diensten" },
      { "@type": "ListItem", "position": 3, "name": "Machinebouw & Industrie", "item": "https://onpointkoeriers.nl/diensten/machinebouw-industrie-koerier" }
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
            src="/images/bg_zakelijk_b2b.jpg" 
            alt="Spoedtransport voor machinebouw, high-tech en maakindustrie" 
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
              Machinebouw, High-Tech & Industrie Koerier
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Minimaliseer productiestilstand met 24/7 dedicated spoedvervoer van kritieke machineonderdelen, sensoren en prototypes.
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
            Elke Minuut Telt bij een Stilstaande Productielijn
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '820px', margin: '0 auto', lineHeight: '1.7' }}>
            In de Nederlandse maakindustrie, procestechniek en high-tech (van <Link href="/werkgebied/eindhoven" style={{ textDecoration: 'underline' }}>Brainport Eindhoven</Link> tot de <Link href="/werkgebied/rotterdam" style={{ textDecoration: 'underline' }}>Rotterdamse haven</Link> en <Link href="/werkgebied/venlo" style={{ textDecoration: 'underline' }}>Venlo</Link>) leidt een defecte aandrijving of ontbrekende PLC-besturingsmodule direct tot kostbare stilstand. OnPoint Koeriers haalt het benodigde onderdeel binnen 30 tot 45 minuten op en levert het zonder tussenstops af bij uw technische dienst of storingsmonteur op locatie.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 USP KAARTEN EN CHECKLIST BLOK */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Industrie spoedtransport achtergrond"
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
              <h3 style={{ color: '#313851' }}>24/7 Storingsdienst Support</h3>
              <p style={{ color: '#313851' }}>Ook tijdens nachtploegen en in het weekend staan wij direct paraat om onderdelen vanuit centrale magazijnen naar de fabrieksvloer te rijden.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Cpu color="#313851" aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Schokvrij & Geen Overslag</h3>
              <p style={{ color: '#313851' }}>Kwetsbare mechatronica, cleanroom-componenten en gekalibreerde meetapparatuur gaan nooit over een sorteerband, maar blijven veilig in één voertuig.</p>
            </div>

            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Truck color="#313851" aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Benelux & Ruhrgebied</h3>
              <p style={{ color: '#313851' }}>Snelle same-day verbindingen met Duitse en Belgische machinebouwers en toeleveranciers tegen vaste <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometerprijzen</Link>.</p>
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
              Wat vervoeren wij voor machinebouw & high-tech?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px', textAlign: 'left', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> PLC-besturingen, sensoren & printplaten</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> Elektromotoren, kleppen & pompen</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> High-tech prototypes & R&D samples</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> Matrijzen, lasergesneden delen & CNC-werk</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> Gekalibreerde meet- & testapparatuur</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#313851', fontWeight: 600 }}><CheckCircle2 color="#313851" size={20} aria-hidden="true" /> Levering aan servicemonteurs op projectlocatie</div>
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
