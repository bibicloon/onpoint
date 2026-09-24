import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '⚡ Spoedkoerier vs. Pakketdienst: De 5 Verschillen | Bel 06 30 03 72 57',
  description: 'Wat is het verschil tussen een dedicated spoedkoerier en een reguliere pakketdienst? Ontdek levertijden, risico op overslag en discretie. Bel: 06 30 03 72 57.',
};

export default function SpoedkoerierVsPakketdienstPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Spoedkoerier vs. Pakketdienst: De 5 Belangrijkste Verschillen",
            "author": {
              "@type": "Organization",
              "name": "OnPoint Koeriers"
            },
            "publisher": {
              "@type": "Organization",
              "name": "OnPoint Koeriers",
              "logo": {
                "@type": "ImageObject",
                "url": "https://onpointkoeriers.nl/logo.png"
              }
            },
            "mainEntityOfPage": "https://onpointkoeriers.nl/kennisbank/spoedkoerier-vs-pakketdienst-verschillen"
          })
        }}
      />

      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '55vh', height: '55vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-diensten.jpg" 
            alt="Spoedkoerier versus traditionele pakketdienst verschillen" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.7)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <Link href="/kennisbank" style={{ color: '#F6F3ED', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', fontWeight: 600 }}>
              <ArrowLeft size={18} /> Terug naar Kennisbank
            </Link>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
              Spoedkoerier vs. Pakketdienst
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              De 5 cruciale verschillen tussen 100% dedicated snelvervoer en een netwerk-pakketdienst.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: '#313851' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center' }}>
            Wanneer Verkiest U een Dedicated Koerier Boven een Pakketdienst?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Voor alledaagse pakketten is een standaard netwerk-pakketdienst prima. Maar wanneer een productieband stilstaat, een juridische termijn dreigt te verstrijken of laboratoriummonsters geconditioneerd vervoerd moeten worden, schiet de gewone pakketdienst tekort.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0' }}>
            Hieronder leggen we de 5 grootste verschillen uit in snelheid, overslag en garanties.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 5 VERSCHILLEN */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Spoedkoerier vs pakketdienst achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '950px', margin: '0 auto' }}>
          
          {/* CARD VERSCHIL 1 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 1. Geen Overslag of Sorteercentra (0% Risico)
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              Bij een gewone pakketdienst passeert uw pakket 3 tot 5 sorteerbanden en verdeelcentra. Hier ontstaan 95% van alle beschadigingen en zoekrakingen. Een <Link href="/spoedtransport" style={{ textDecoration: 'underline' }}>spoedkoerier</Link> haalt uw zending op en rijdt in één streep rechtstreeks naar de afleverlocatie. U bent 100% gegarandeerd van schadevrije aankomst.
            </p>
          </div>

          {/* CARD VERSCHIL 2 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 2. Exact Levertijdvenster (Binnen Uren i.p.v. Dagen)
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              Pakketdiensten beloven "bezorging morgen tussen 08:00 en 18:00 uur". Bij OnPoint Koeriers is de chauffeur binnen **30 minuten onderweg** en weet u exact op de minuut nauw hoe laat uw zending wordt overhandigd.
            </p>
          </div>

          {/* CARD VERSCHIL 3 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 3. Direct Contact met de Chauffeur
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              Geen geautomatiseerde chatrobots of 45 minuten wachttijd aan de telefoon. U spreekt bij OnPoint Koeriers direct met de planning of de chauffeur die uw zending in zijn auto heeft liggen.
            </p>
          </div>

          {/* CARD VERSCHIL 4 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 4. Discretie voor Juridisch & Medisch Vervoer
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              Voor vertrouwelijke stukken (zie <Link href="/diensten/juridisch-documenten-koerier" style={{ textDecoration: 'underline' }}>juridisch vervoer</Link>) of koel/medische monsters (zie <Link href="/diensten/medisch-spoedtransport" style={{ textDecoration: 'underline' }}>medisch transport</Link>) is een anoniem sorteerproces onverantwoord. Onze chauffeurs handelen discreet en verzorgen een persoonlijke overhandiging tegen een handtekening.
            </p>
          </div>

          {/* CARD VERSCHIL 5 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 5. Wendbaarheid in Binnensteden en Havens
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              Onze vloot bestaat uit compacte personenauto's en Caddy-bestelbussen. Wij kunnen moeiteloos parkeren bij rechtbanken, ziekenhuizen, drukke winkelstraten en de Zuidas waar grote vrachtwagens niet eens mogen inrijden.
            </p>
          </div>

          {/* CTA BLOK */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
            padding: '50px 40px', 
            textAlign: 'center' 
          }}>
            <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.8rem', fontWeight: 'bold' }}>
              Heeft u direct 100% dedicated vervoer nodig?
            </h3>
            <p style={{ color: '#313851', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Voorkom vertragingen en risico op overslag. Bel direct onze spoedlijn.
            </p>
            <Link href="/contact" className="btn btn-action">
              PLAN EEN DEDICATED RIT
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
