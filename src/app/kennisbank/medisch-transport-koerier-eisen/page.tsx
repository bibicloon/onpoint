import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medisch Spoedtransport & Laboratorium Koerier: Eisen & Werkwijze | OnPoint',
  description: 'Welke eisen gelden voor medisch spoedtransport van diagnostische monsters, bloedproducten, medicatie en chirurgische instrumenten tussen ziekenhuizen en labs?',
  alternates: {
    canonical: '/kennisbank/medisch-transport-koerier-eisen',
  },
  openGraph: {
    title: 'Medisch Spoedtransport & Laboratorium Koerier: Eisen & Werkwijze',
    description: 'Alles over tijdskritisch en hygiënisch vervoer van laboratoriummonsters, medicatie en medische apparatuur.',
    url: 'https://onpointkoeriers.nl/kennisbank/medisch-transport-koerier-eisen',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function MedischTransportEisenKennisbankPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Kennisbank", "item": "https://onpointkoeriers.nl/kennisbank" },
      { "@type": "ListItem", "position": 3, "name": "Medisch Transport Koerier Eisen", "item": "https://onpointkoeriers.nl/kennisbank/medisch-transport-koerier-eisen" }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Medisch Spoedtransport & Laboratorium Koerier: Eisen & Werkwijze",
            "description": "Overzicht van de eisen aan medisch spoedtransport voor ziekenhuizen, klinieken, apotheken en medische laboratoria in Nederland.",
            "image": "https://onpointkoeriers.nl/images/hero-diensten.jpg",
            "datePublished": "2026-04-15T09:00:00+01:00",
            "dateModified": "2026-11-12T19:00:00+01:00",
            "author": {
              "@type": "Organization",
              "name": "OnPoint Koeriers",
              "url": "https://onpointkoeriers.nl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "OnPoint Koeriers",
              "logo": {
                "@type": "ImageObject",
                "url": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg"
              }
            },
            "mainEntityOfPage": "https://onpointkoeriers.nl/kennisbank/medisch-transport-koerier-eisen"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '55vh', height: '55vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-diensten.jpg" 
            alt="Medisch spoedtransport voor ziekenhuizen en laboratoria" 
            fill 
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.7)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <Link href="/kennisbank" style={{ color: '#F6F3ED', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', fontWeight: 600 }}>
              <ArrowLeft size={18} aria-hidden="true" /> Terug naar Kennisbank
            </Link>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(1.85rem, 3.5vw, 3rem)' }}>
              Medisch Spoedtransport & Laboratorium Koerier: Eisen & Werkwijze
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              Waarom snelheid, hygiëne en directe overhandiging zonder tussenstops van levensbelang zijn in de medische keten.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: '#313851' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center' }}>
            Tijdskritische Zorglogistiek Zonder Compromissen
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Bij <Link href="/diensten/medisch-spoedtransport" style={{ textDecoration: 'underline' }}>medisch spoedtransport</Link> hangt een tijdige diagnose of operatie vaak direct samen met de snelheid en nauwkeurigheid van de koerier. Denk aan weefselbiopten die binnen een strikt tijdsvenster bij het pathologisch laboratorium moeten zijn, of specifieke implantaten en steriele instrumentensets voor een geplande ingreep in de OK.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0' }}>
            Standaard pakketnetwerken zijn hiervoor ongeschikt: biologisch materiaal en dure medische hulpmiddelen mogen nooit urenlang op een lopende band of in een onbeheerd depot blijven staan.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - INHOUD */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Medisch transport koerier achtergrond"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '950px', margin: '0 auto' }}>
          
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              1. De 4 Kerneisen aan Medisch Spoedvervoer
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Directe rit zonder tussenstops (Point-to-Point):</strong> Biologische samples (zoals UN3373 diagnostische monsters in P650-verpakking) en spoedmedicatie moeten in één ononderbroken rit van afdeling naar laboratorium worden vervoerd.</span>
              </li>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Afdeling-tot-Afdeling Overdracht:</strong> Een medische koerier geeft een zending nooit af bij een algemene goederenontvangst tenzij dat expliciet is afgesproken, maar meldt zich direct bij de juiste balie van het laboratorium, de ziekenhuisapotheek of de centrale sterilisatieafdeling (CSA).</span>
              </li>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Schone, Rookvrije & Afgesloten Laadruimte:</strong> Zendingen worden schokvrij en hygiënisch vastgezet in onze representatieve personenauto&apos;s of Caddy-bestelwagens.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Volledige Discretie & AVG-bewustzijn:</strong> Onze chauffeurs gaan uiterst discreet om met patiëntgebonden documentatie en medische dossiers.</span>
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              2. Vaste Medische Routes & 24/7 Ad-Hoc Spoedritten
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '0' }}>
              Zorginstellingen, huisartsenposten, tandtechnische laboratoria en medische leveranciers in onder andere <Link href="/werkgebied/amsterdam" style={{ textDecoration: 'underline' }}>Amsterdam</Link>, <Link href="/werkgebied/utrecht" style={{ textDecoration: 'underline' }}>Utrecht</Link>, <Link href="/werkgebied/rotterdam" style={{ textDecoration: 'underline' }}>Rotterdam</Link> en <Link href="/werkgebied/den-haag" style={{ textDecoration: 'underline' }}>Den Haag</Link> schakelen OnPoint Koeriers zowel in voor dagelijkse monsterroutes als voor acute 24/7 spoedoproepen in de avond, nacht en het weekend.
            </p>
          </div>

          {/* CTA BLOK */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
            padding: 'clamp(32px, 5vw, 50px) clamp(20px, 4vw, 40px)', 
            textAlign: 'center' 
          }}>
            <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.8rem', fontWeight: 'bold' }}>
              Direct een medische spoedkoerier nodig?
            </h3>
            <p style={{ color: '#313851', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Onze chauffeurs zijn 24/7 bereikbaar en binnen 30 tot 45 minuten op locatie bij uw kliniek, apotheek of laboratorium.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
                BEL DIRECT
              </a>
              <Link href="/diensten/medisch-spoedtransport" className="btn btn-action">
                BEKIJK MEDISCH TRANSPORT
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
