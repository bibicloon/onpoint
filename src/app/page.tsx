import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { Target, ShieldCheck, Globe, Calculator, Scale, Clock, ArrowRight } from 'lucide-react';
import FAQAccordion from '@/components/FAQ/FAQAccordion';
import { faqData } from '@/data/faqData';

export const metadata: Metadata = {
  title: '⚡ Spoedkoerier Binnen 30 Min. Ter Plaatse | Bel 06 30 03 72 57',
  description: 'Acute spoedzending? OnPoint Koeriers is binnen 30-45 min. op locatie in heel NL & EU. 24/7 dedicated vervoer zonder overslag. Bel direct: 06 30 03 72 57.',
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CourierService",
    "name": "OnPoint Koeriers",
    "image": "https://onpointkoeriers.nl/logo.png",
    "@id": "",
    "url": "https://onpointkoeriers.nl",
    "telephone": "0630037257",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressCountry": "NL"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Netherlands"
      },
      {
        "@type": "Continent",
        "name": "Europe"
      }
    ],
    "taxID": "NL005478178B19",
    "identifier": {
      "@type": "PropertyValue",
      "name": "KVK",
      "value": "42077914"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-cinematic-onpoint.jpg" 
            alt="Premium spoedtransport met een snelle personenauto op de snelweg" 
            fill 
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Direct onderweg.<br />Rechtstreeks geleverd.</h1>
            <p className={styles.heroSubtitle}>Premium spoedtransport voor bedrijven met urgente zendingen die passen in een personenauto of compacte bestelwagen.</p>
            <div className={styles.heroActions}>
              <a href="tel:+31630037257" className="btn btn-primary">BEL DIRECT</a>
              <Link href="/diensten" className="btn btn-ghost">BEKIJK MOGELIJKHEDEN</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom OnPoint Section */}
      <section className={`section section-steel ${styles.usps}`}>
        <div className="container">
          <div className={styles.uspGrid}>
            <div className={styles.uspCard}>
              <div className={styles.uspIcon}><Target /></div>
              <h3>Direct schakelen</h3>
              <p>Directe inzetbaarheid. Geen onnodige overslag. Uw zending gaat direct van A naar B zonder vertraging.</p>
            </div>
            <div className={styles.uspCard}>
              <div className={styles.uspIcon}><ShieldCheck /></div>
              <h3>Gespecialiseerd spoedtransport</h3>
              <p>Nauwkeurige aflevering op de afgesproken tijd. Persoonlijk overhandigd aan de juiste ontvanger.</p>
            </div>
            <div className={styles.uspCard}>
              <div className={styles.uspIcon}><Globe /></div>
              <h3>Nederland & Europa</h3>
              <p>Representatieve chauffeurs en voertuigen passend bij de zakelijke uitstraling van uw onderneming in heel Europa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten/Voertuigen Section */}
      <section id="diensten" style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_zakelijk_spoedtransport_dark.jpg"
            alt="Zakelijk Spoedtransport Zuidas Amsterdam"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
          <div style={{
            maxWidth: '48rem',
            margin: '0 auto',
            backgroundColor: 'rgba(246, 243, 237, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2 className={styles.sectionTitle} style={{ color: '#313851', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Zakelijk Spoedtransport</h2>
            <p style={{ color: '#313851', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '500' }}>Hoogwaardig en tijdskritisch transport met compacte, representatieve<br/>voertuigen. Exclusief voor de zakelijke markt.</p>
            <ul className={styles.serviceList} style={{ color: '#313851', fontWeight: '500', marginBottom: '2rem' }}>
              <li>✓ Personenauto geschikte zendingen</li>
              <li>✓ Compacte bestelwagens (Caddy-formaat)</li>
              <li>✓ Nationaal en internationaal (Europa)</li>
              <li>✓ Geen pakketdiensten, 100% dedicated transport</li>
            </ul>
            <Link href="/contact" className="btn btn-action">PLAN UW TRANSPORT</Link>
          </div>
        </div>
      </section>

      {/* Gespecialiseerde B2B Niche Logistiek Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#F6F3ED' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#313851', marginBottom: '1rem', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Gespecialiseerde B2B Logistiek
          </h2>
          <p style={{ color: '#313851', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            Maatwerk spoedtransport voor specifieke sectoren met de hoogste eisen aan snelheid, discreet vervoer en zorgvuldigheid:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left' }}>
            
            <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1.5px solid #313851' }}>
              <div>
                <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '12px', fontWeight: 700 }}>Medisch Spoedtransport</h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Spoedvervoer van laboratoriummonsters, bloed, medicatie en medische hulpmiddelen voor zorginstellingen.
                </p>
              </div>
              <Link href="/diensten/medisch-spoedtransport" className="btn btn-action" style={{ textAlign: 'center' }}>
                Bekijk Medische Service →
              </Link>
            </div>

            <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1.5px solid #313851' }}>
              <div>
                <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '12px', fontWeight: 700 }}>Juridisch & Documenten</h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Discrete en persoonlijke overhandiging van notariële akten, processtukken, contracten en paspoorten.
                </p>
              </div>
              <Link href="/diensten/juridisch-documenten-koerier" className="btn btn-action" style={{ textAlign: 'center' }}>
                Bekijk Juridische Service →
              </Link>
            </div>

            <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1.5px solid #313851' }}>
              <div>
                <h3 style={{ color: '#313851', fontSize: '1.3rem', marginBottom: '12px', fontWeight: 700 }}>Automotive & Onderdelen</h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Direct spoedtransport van auto-onderdelen, gereedschap en elektronica voor garages en dealers.
                </p>
              </div>
              <Link href="/diensten/automotive-onderdelen" className="btn btn-action" style={{ textAlign: 'center' }}>
                Bekijk Automotive Service →
              </Link>
            </div>

          </div>
        </div>
      </section>
      {/* Werkgebied Section */}
      <section className="section section-steel" style={{ padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#313851', marginBottom: '2rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Ons Werkgebied
          </h2>
          <p style={{ color: '#313851', marginBottom: '3rem', fontSize: '1.125rem' }}>
            Wij zijn direct inzetbaar in heel Nederland en leveren in heel Europa. Bekijk onze specifieke regionale pagina's:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/werkgebied/nederland" className="btn btn-action">Nederland</Link>
            <Link href="/werkgebied/amsterdam" className="btn btn-action">Amsterdam</Link>
            <Link href="/werkgebied/utrecht" className="btn btn-action">Utrecht</Link>
            <Link href="/werkgebied/schiphol" className="btn btn-action">Schiphol</Link>
            <Link href="/werkgebied/rotterdam" className="btn btn-action">Rotterdam</Link>
            <Link href="/werkgebied/den-haag" className="btn btn-action">Den Haag</Link>
            <Link href="/werkgebied/eindhoven" className="btn btn-action">Eindhoven</Link>
            <Link href="/werkgebied/breda" className="btn btn-action">Breda</Link>
            <Link href="/werkgebied/tilburg" className="btn btn-action">Tilburg</Link>
            <Link href="/werkgebied/arnhem" className="btn btn-action">Arnhem</Link>
            <Link href="/werkgebied/venlo" className="btn btn-action">Venlo</Link>
            <Link href="/werkgebied/dordrecht" className="btn btn-action">Dordrecht</Link>
            <Link href="/werkgebied/haarlem" className="btn btn-action">Haarlem</Link>
            <Link href="/werkgebied/zaandam" className="btn btn-action">Zaandam</Link>
            <Link href="/werkgebied/alkmaar" className="btn btn-action">Alkmaar</Link>
          </div>
        </div>
      </section>

      {/* Kennisbank Preview Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#F6F3ED' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#313851', marginBottom: '1rem', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
            Kennisbank & Logistiek Advies
          </h2>
          <p style={{ color: '#313851', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            Wilt u alles weten over tarieven per kilometer, levertijden en de garanties van dedicated spoedtransport? Bekijk onze nieuwste artikelen:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left', marginBottom: '40px' }}>
            
            <div style={{ backgroundColor: '#C2CBD3', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '12px' }}><Calculator color="#313851" size={32} /></div>
                <h3 style={{ color: '#313851', fontSize: '1.25rem', marginBottom: '10px', fontWeight: 700 }}>Wat Kost een Spoedkoerier per KM?</h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Kilometer tarieven vanaf €0,60/km, starttarieven, toeslagen en praktische rekenvoorbeelden.
                </p>
              </div>
              <Link href="/kennisbank/wat-kost-een-spoedkoerier-per-km" className="btn btn-action" style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Lees artikel <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ backgroundColor: '#C2CBD3', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '12px' }}><Scale color="#313851" size={32} /></div>
                <h3 style={{ color: '#313851', fontSize: '1.25rem', marginBottom: '10px', fontWeight: 700 }}>Spoedkoerier vs. Pakketdienst</h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px' }}>
                  De 5 belangrijkste verschillen tussen 100% dedicated vervoer en distributienetwerken.
                </p>
              </div>
              <Link href="/kennisbank/spoedkoerier-vs-pakketdienst-verschillen" className="btn btn-action" style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Lees artikel <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ backgroundColor: '#C2CBD3', border: '1.5px solid #313851', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '12px' }}><Clock color="#313851" size={32} /></div>
                <h3 style={{ color: '#313851', fontSize: '1.25rem', marginBottom: '10px', fontWeight: 700 }}>Hoe Snel Ter Plaatse?</h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Binnen 30 minuten onderweg. Ontdek hoe wendbare voertuigen de bezorgsnelheid garanderen.
                </p>
              </div>
              <Link href="/kennisbank/hoe-snel-is-een-spoedkoerier-ter-plaatse" className="btn btn-action" style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Lees artikel <ArrowRight size={16} />
              </Link>
            </div>

          </div>

          <Link href="/kennisbank" className="btn btn-secondary">
            BEKIJK ALLE ARTIKELEN IN DE KENNISBANK →
          </Link>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-light)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#313851', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
              Veelgestelde Vragen
            </h2>
            <p style={{ color: '#313851', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Heeft u een vraag over onze tarieven, levertijden of dedicated spoedtransport? Bekijk onze antwoorden:
            </p>
          </div>

          <FAQAccordion items={faqData.slice(0, 5)} />

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/faq" className="btn btn-action">
              Bekijk alle 14 veelgestelde vragen →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
