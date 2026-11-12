import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Handshake, FileText, Star, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zakelijke Koeriersdienst & Vaste B2B Spoedkoerier | OnPoint Koeriers',
  description: 'Op zoek naar een vaste zakelijke koeriersdienst? OnPoint Koeriers verzorgt B2B spoedtransport, vaste routes en periodieke zendingen op factuur. 24/7 direct inzetbaar.',
  alternates: {
    canonical: '/zakelijk',
  },
  openGraph: {
    title: 'Zakelijke Koeriersdienst & Vaste B2B Spoedkoerier | OnPoint Koeriers',
    description: 'Duurzame B2B partnerships voor vaste routes en urgente zakelijke spoedzendingen in Nederland en Europa.',
    url: 'https://onpointkoeriers.nl/zakelijk',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function ZakelijkPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Zakelijk", "item": "https://onpointkoeriers.nl/zakelijk" }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-zakelijk.jpg" 
            alt="Representatieve zakelijke Skoda stationwagen van OnPoint Koeriers voor B2B transport" 
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
              Zakelijke Koeriersdienst & Vaste Logistieke Partner
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Structureel ontzorgd worden? Wij bouwen graag aan duurzame partnerships voor al uw vaste routes en periodieke spoedzendingen.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
                BEL DIRECT
              </a>
              <Link href="/contact" className="btn btn-action">
                NEEM CONTACT OP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Een verlengstuk van uw eigen organisatie
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', fontWeight: 'bold', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Voor veel van onze opdrachtgevers zijn wij meer dan zomaar een koerier; we zijn een betrouwbaar verlengstuk van hun eigen bedrijfsvoering. Of het nu gaat om een wekelijkse route naar een distributiecentrum, dagelijkse postrondes tussen vestigingen, of het gegarandeerd stand-by staan voor uw meest kritieke Europese zendingen: wij bieden maatwerk. Bij een structurele samenwerking leert u onze chauffeurs kennen en leren wij uw processen kennen. Geen wisselende gezichten, maar blinde vlekkeloosheid en afspraken waar u op kunt bouwen.
          </p>
        </div>
      </section>

      {/* SECTIE 3 & 4 GECOMBINEERD - B2B ACHTERGROND */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_zakelijk_b2b.jpg"
            alt="Zakelijk B2B achtergrond"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* De 3 USP Blokken */}
          <div className={styles.uspGrid} style={{ marginBottom: '60px' }}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Handshake color="#313851" aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Vast Contactpersoon</h3>
              <p style={{ color: '#313851' }}>Korte lijnen en direct schakelen met een planner die uw bedrijf van binnen en buiten kent.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><FileText color="#313851" aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Zakelijke Tarieven</h3>
              <p style={{ color: '#313851' }}>Voor vaste ritten en structurele samenwerkingen maken wij graag contractafspraken met aangepaste tarieven op maat.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Star color="#313851" aria-hidden="true" /></div>
              <h3 style={{ color: '#313851' }}>Absolute Prioriteit</h3>
              <p style={{ color: '#313851' }}>Vaste partners krijgen bij ons altijd voorrang, óók in de nacht of tijdens het weekend.</p>
            </div>
          </div>

          {/* E-E-A-T Praktijkvoorbeelden & Garanties */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            border: '2px solid #313851',
            padding: 'clamp(28px, 4vw, 48px)', 
            maxWidth: '1000px', 
            margin: '0 auto 60px auto',
            color: '#313851'
          }}>
            <h2 style={{ color: '#313851', marginBottom: '1rem', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 'bold', textAlign: 'center' }}>
              B2B Praktijkcases & Zakelijke Vervoersgaranties
            </h2>
            <p style={{ color: '#313851', textAlign: 'center', maxWidth: '750px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
              Van multinationals en advocatenkantoren tot medische laboratoria en luchtvaartexpediteurs: zo ondersteunen wij onze zakelijke opdrachtgevers dagelijks in de praktijk.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: '#F6F3ED', padding: '20px', borderRadius: '8px', border: '1.5px solid #313851' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#313851' }}>Luchtvaart & AOG Schiphol</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.5', margin: 0, color: '#313851' }}>
                  Binnen 25 minuten opname van gecertificeerde vliegtuigonderdelen op <Link href="/diensten/luchtvracht-aog-koerier" style={{ textDecoration: 'underline' }}>Schiphol-Rijk</Link> met directe same-day levering aan MRO-hangars in Brussel en Frankfurt.
                </p>
              </div>
              <div style={{ backgroundColor: '#F6F3ED', padding: '20px', borderRadius: '8px', border: '1.5px solid #313851' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#313851' }}>Machinebouw & High-Tech</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.5', margin: 0, color: '#313851' }}>
                  Spoedvervoer van kritieke PLC-besturingen en cleanroom-componenten vanuit <Link href="/diensten/machinebouw-industrie-koerier" style={{ textDecoration: 'underline' }}>Brainport Eindhoven</Link> naar stilstaande productielijnen in Nederland en het Ruhrgebied.
                </p>
              </div>
              <div style={{ backgroundColor: '#F6F3ED', padding: '20px', borderRadius: '8px', border: '1.5px solid #313851' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#313851' }}>Notariaat & Zuidas</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.5', margin: 0, color: '#313851' }}>
                  Discrete hand-tot-hand overdracht van originele fusiedocumenten, rechtbankdossiers en gelegaliseerde akten tussen <Link href="/diensten/juridisch-documenten-koerier" style={{ textDecoration: 'underline' }}>Amsterdam Zuidas</Link> en ministeries in Den Haag.
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', borderTop: '1.5px solid #313851', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '0.95rem' }}><CheckCircle2 size={18} color="#313851" aria-hidden="true" /> Vervoer conform AVC & CMR</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '0.95rem' }}><CheckCircle2 size={18} color="#313851" aria-hidden="true" /> Directe digitale aflevermelding</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '0.95rem' }}><CheckCircle2 size={18} color="#313851" aria-hidden="true" /> Facturatie op kostenplaats</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '0.95rem' }}><CheckCircle2 size={18} color="#313851" aria-hidden="true" /> KVK: 42077914 geregistreerd</div>
            </div>
          </div>

          {/* Nieuw CTA Blok (Onderste Sectie) */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
            padding: '60px 40px', 
            maxWidth: '800px', 
            margin: '0 auto', 
            textAlign: 'center' 
          }}>
            <h2 style={{ color: '#313851', marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
              Laten we de mogelijkheden bespreken.
            </h2>
            <Link href="/contact" className="btn btn-action">
              NEEM CONTACT OP VOOR EEN KENNISMAKING
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
