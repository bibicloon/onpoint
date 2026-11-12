import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spoedtransport Duitsland & België: Levertijden, CMR & Kosten | OnPoint Koeriers',
  description: 'Internationaal spoedtransport naar België, Duitsland en Europa? Bekijk reële aanrij- en levertijden, CMR-vrachtbrief regels en kilometerprijzen vanaf € 0,60/km.',
  alternates: {
    canonical: '/kennisbank/spoedtransport-duitsland-belgie-regels',
  },
  openGraph: {
    title: 'Spoedtransport Duitsland & België: Levertijden, CMR & Kosten',
    description: 'Alles over grensoverschrijdend spoedtransport vanuit Nederland naar België, het Ruhrgebied, Duitsland en heel Europa.',
    url: 'https://onpointkoeriers.nl/kennisbank/spoedtransport-duitsland-belgie-regels',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function SpoedtransportDuitslandBelgieKennisbankPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Kennisbank", "item": "https://onpointkoeriers.nl/kennisbank" },
      { "@type": "ListItem", "position": 3, "name": "Spoedtransport Duitsland & België", "item": "https://onpointkoeriers.nl/kennisbank/spoedtransport-duitsland-belgie-regels" }
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
            "headline": "Spoedtransport naar Duitsland & België: Levertijden, CMR & Kosten",
            "description": "Gids voor internationaal spoedtransport vanuit Nederland naar België, Duitsland en de EU: doorlooptijden, CMR-condities en de voordelen van compacte voertuigen.",
            "image": "https://onpointkoeriers.nl/images/bg_diensten_alps.jpg",
            "datePublished": "2026-04-02T09:00:00+01:00",
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
            "mainEntityOfPage": "https://onpointkoeriers.nl/kennisbank/spoedtransport-duitsland-belgie-regels"
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
            src="/images/bg_diensten_alps.jpg" 
            alt="Internationaal spoedtransport naar Duitsland, België en Europa" 
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
              Spoedtransport naar Duitsland & België: Levertijden, CMR & Kosten
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              Hoe snel staat uw zending in Antwerpen, Brussel, het Ruhrgebied of Frankfurt met een dedicated spoedkoerier?
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: '#313851' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center' }}>
            Same-Day Europese Bezorging Zonder Grensvertraging
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Voor Nederlandse exporteurs, logistieke hubs in <Link href="/werkgebied/rotterdam" style={{ textDecoration: 'underline' }}>Rotterdam</Link>, <Link href="/werkgebied/venlo" style={{ textDecoration: 'underline' }}>Venlo</Link> en <Link href="/werkgebied/breda" style={{ textDecoration: 'underline' }}>Breda</Link> en hightech-bedrijven in <Link href="/werkgebied/eindhoven" style={{ textDecoration: 'underline' }}>Eindhoven</Link> stopt de keten niet bij de landsgrens. Bij internationale pakketdiensten duurt een zending naar België of Duitsland echter al snel 24 tot 48 uur vanwege internationale sorteerhubs.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0' }}>
            Met een dedicated <Link href="/spoedtransport" style={{ textDecoration: 'underline' }}>spoedkoerier</Link> per personenauto of Caddy wordt uw zending nog <strong>dezelfde dag (Same-Day)</strong> persoonlijk afgeleverd in de Benelux, Duitsland of Noord-Frankrijk.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - INHOUD */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Spoedtransport Europa achtergrond"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '950px', margin: '0 auto' }}>
          
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              1. Waarom een Personenauto of Caddy Sneller is in Duitsland & België
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Geen Sonntagfahrverbot (Zondagsrijverbod voor vrachtwagens):</strong> In Duitsland geldt op zon- en feestdagen een strikt rijverbod voor vrachtvervoer boven 7,5 ton. Onze representatieve personenauto&apos;s mogen 24/7 doorrijden.</span>
              </li>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Hogere kruissnelheid & Umweltplakette (Milieuzones):</strong> Onze moderne voertuigen beschikken over groene milieustickers (Umweltplakette) en LEZ-toegang voor steden als Antwerpen, Brussel, Keulen, Düsseldorf en Frankfurt.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Geen tachograaf-vertraging voor lichte spoedzendingen:</strong> Hierdoor arriveert uw kritieke onderdeel of document aanzienlijk sneller op de plaats van bestemming.</span>
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              2. Indicatieve Reistijden & Kosten naar België en Duitsland
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              Voor internationale ritten hanteren wij exact dezelfde transparante kilometerprijzen als binnen Nederland: <strong>€ 0,60 per km (personenauto)</strong> en <strong>€ 0,65 per km (Caddy)</strong> plus € 25,- starttarief.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Utrecht → Antwerpen (ca. 135 km):</strong> Binnen ca. 1,5 tot 2 uur na opladen afgeleverd. Richtprijs auto: € 106,- ex. BTW.</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Eindhoven → Düsseldorf / Ruhrgebied (ca. 115 km):</strong> Binnen ca. 1,5 uur na opladen ter plaatse. Richtprijs auto: € 94,- ex. BTW.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Schiphol → Frankfurt am Main (ca. 440 km):</strong> Rechtstreeks binnen ca. 4,5 uur geleverd. Bereken uw eigen route met onze <Link href="/tarieven#calculator" style={{ textDecoration: 'underline' }}>interactieve ritprijs-calculator</Link>.</span>
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
              Direct een spoedkoerier naar België of Duitsland inzetten?
            </h3>
            <p style={{ color: '#313851', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Onze chauffeurs vertrekken binnen 30 minuten vanaf uw laadlocatie in Nederland rechtstreeks naar elke bestemming in Europa.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
                BEL DIRECT
              </a>
              <Link href="/tarieven#calculator" className="btn btn-action">
                BEREKEN EUROPESE RITPRIJS
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
