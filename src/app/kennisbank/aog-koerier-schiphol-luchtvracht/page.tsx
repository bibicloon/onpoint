import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '✈️ AOG Koerier & Spoedtransport Schiphol | Urgente Luchtvracht & COB | OnPoint',
  description: 'Hoe werkt een AOG koerier (Aircraft on Ground) en Courier On Board (COB) vanaf Schiphol? Alles over tijdkritisch luchtvracht- en vliegtuigonderdelen transport.',
  alternates: {
    canonical: '/kennisbank/aog-koerier-schiphol-luchtvracht',
  },
  openGraph: {
    title: 'AOG Koerier & Spoedtransport Schiphol | Urgente Luchtvracht & COB',
    description: 'Alles over Aircraft on Ground (AOG) spoedtransport, luchtvracht afhandeling rond Schiphol en Courier On Board (COB).',
    url: 'https://onpointkoeriers.nl/kennisbank/aog-koerier-schiphol-luchtvracht',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function AogKoerierSchipholKennisbankPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Kennisbank", "item": "https://onpointkoeriers.nl/kennisbank" },
      { "@type": "ListItem", "position": 3, "name": "AOG Koerier & Luchtvracht Schiphol", "item": "https://onpointkoeriers.nl/kennisbank/aog-koerier-schiphol-luchtvracht" }
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
            "headline": "AOG Koerier & Spoedtransport Schiphol: Hoe werkt urgente luchtvracht & Courier On Board?",
            "description": "Uitgebreide gids over Aircraft on Ground (AOG) logistiek, spoedtransport van en naar Schiphol Airport en persoonlijke begeleiding via Courier On Board (COB).",
            "image": "https://onpointkoeriers.nl/images/hero-diensten-v2.jpg",
            "datePublished": "2026-03-10T09:00:00+01:00",
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
            "mainEntityOfPage": "https://onpointkoeriers.nl/kennisbank/aog-koerier-schiphol-luchtvracht"
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
            src="/images/hero-diensten-v2.jpg" 
            alt="AOG Koerier en spoedtransport rond luchthaven Schiphol" 
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
              AOG Koerier & Spoedtransport Schiphol: Luchtvracht & COB
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              Hoe werkt tijdskritisch vervoer van vliegtuigonderdelen, luchtvrachtdocumenten en Courier On Board (COB)?
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: '#313851' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center' }}>
            Wat betekent AOG (Aircraft on Ground) in de logistiek?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            In de luchtvaartsector staat de afkorting <strong>AOG (Aircraft on Ground)</strong> voor de hoogst denkbare urgentie: een vliegtuig kan vanwege een technisch defect of ontbrekend gecertificeerd onderdeel niet opstijgen. Elk uur dat een toestel aan de grond staat op <Link href="/werkgebied/schiphol" style={{ textDecoration: 'underline' }}>Schiphol</Link> of een andere Europese luchthaven kost tienduizenden euro&apos;s aan vertragingen en gemiste slots.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0' }}>
            Een gespecialiseerde <Link href="/diensten/luchtvracht-aog-koerier" style={{ textDecoration: 'underline' }}>luchtvracht & AOG koerier</Link> zorgt ervoor dat essentiële vliegtuigonderdelen, avionica of douanedocumenten binnen 30 minuten na oproep worden opgehaald en rechtstreeks naar de juiste hangar, afhandelaar of Europese bestemming rijden.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - INHOUD */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Spoedtransport Schiphol achtergrond"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '950px', margin: '0 auto' }}>
          
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              1. Direct Wegvervoer vanaf Schiphol-Rijk & Vrachtterminals
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              Rondom Amsterdam Airport Schiphol bevinden zich tientallen luchtvrachtexpediteurs, MRO-bedrijven (Maintenance, Repair & Overhaul) en douane-entrepots op Schiphol-Rijk, Schiphol Zuidoost en Aalsmeer. Wanneer een zending vrijkomt bij de vrachtafhandelaar, biedt een dedicated spoedkoerier drie cruciale voordelen:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Directe aanrijtijd (&lt; 30 min.):</strong> Gevestigd in de regio <Link href="/werkgebied/amsterdam" style={{ textDecoration: 'underline' }}>Amsterdam</Link> & Schiphol, waardoor we vrijwel direct bij de vrachtloods staan.</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Geen consolidatie of hub-vertraging:</strong> Waar standaard luchtvracht-wegtransport wacht op een volle vrachtwagen, rijdt onze personenauto of Caddy direct na het inladen weg.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Sneller over de weg binnen 800 km:</strong> Voor bestemmingen als Brussel, Frankfurt, Parijs, Düsseldorf of Luxemburg is een directe auto- of Caddy-rit vaak sneller dan wachten op de eerstvolgende vrachtvlucht en inklaring.</span>
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              2. Wanneer kiest u voor Courier On Board (COB)?
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              Moet een kritisch onderdeel, farmaceutisch monster of origineel contract naar Zuid-Europa, het Verenigd Koninkrijk of intercontinentaal worden vervoerd? Dan biedt <strong>Courier On Board (On Board Courier / OBC)</strong> uitkomst:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Persoonlijke begeleiding in de cabine:</strong> Onze koerier reist als passagier mee op de eerstvolgende lijnvlucht en houdt het pakket als handbagage permanent onder toezicht.</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Geen vrachtterminal wachttijden:</strong> In plaats van urenlange cargo check-in en lossing loopt de koerier na landing direct door de passagiersuitgang naar de wachtende ontvanger.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Maximale ketenveiligheid:</strong> Onmisbaar bij prototypes, luchtvaartelektronica, <Link href="/diensten/juridisch-documenten-koerier" style={{ textDecoration: 'underline' }}>originele volmachten</Link> en urgente medische zendingen.</span>
              </li>
            </ul>
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
              Urgente AOG- of luchtvrachtzending vanaf Schiphol?
            </h3>
            <p style={{ color: '#313851', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Schakel direct met onze 24/7 planning voor een onmiddellijke ophaalopdracht op Schiphol of bekijk onze <Link href="/tarieven" style={{ textDecoration: 'underline' }}>transparante tarieven</Link>.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
                BEL DIRECT
              </a>
              <Link href="/diensten/luchtvracht-aog-koerier" className="btn btn-action">
                BEKIJK AOG & COB SERVICE
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
