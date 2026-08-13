import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { Target, ShieldCheck, Globe } from 'lucide-react';
import FAQAccordion from '@/components/FAQ/FAQAccordion';
import { faqData } from '@/data/faqData';

export const metadata: Metadata = {
  title: 'OnPoint Koeriers | Snel, Flexibel & Wendbaar Spoedtransport',
  description: 'Snel spoedtransport nodig? OnPoint Koeriers levert direct. Flexibel en snel op de bestemming dankzij ons compacte wagenpark. Binnen 30 minuten onderweg.',
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
            <Link href="/werkgebied/schiphol" className="btn btn-action">Schiphol</Link>
            <Link href="/werkgebied/rotterdam" className="btn btn-action">Rotterdam</Link>
            <Link href="/werkgebied/den-haag" className="btn btn-action">Den Haag</Link>
            <Link href="/werkgebied/eindhoven" className="btn btn-action">Eindhoven</Link>
            <Link href="/werkgebied/breda" className="btn btn-action">Breda</Link>
            <Link href="/werkgebied/tilburg" className="btn btn-action">Tilburg</Link>
            <Link href="/werkgebied/haarlem" className="btn btn-action">Haarlem</Link>
            <Link href="/werkgebied/zaandam" className="btn btn-action">Zaandam</Link>
            <Link href="/werkgebied/alkmaar" className="btn btn-action">Alkmaar</Link>
          </div>
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
