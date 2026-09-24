import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CheckCircle2, Calculator, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '⚡ Wat Kost een Spoedkoerier per KM? | Prijzen 2026 | Bel 06 30 03 72 57',
  description: 'Wat kost een spoedkoerier per kilometer? Bekijk heldere tarieven vanaf €0,60/km, starttarieven, toeslagen en praktische rekenvoorbeelden. Bel direct 06 30 03 72 57.',
};

export default function WatKostEenSpoedkoerierPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Wat Kost een Spoedkoerier per KM? Prijzen & Berekening",
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
            "mainEntityOfPage": "https://onpointkoeriers.nl/kennisbank/wat-kost-een-spoedkoerier-per-km"
          })
        }}
      />

      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '55vh', height: '55vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-tarieven.jpg" 
            alt="Wat kost een spoedkoerier per km kilometerprijs berekenen" 
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
              Wat Kost een Spoedkoerier per KM?
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              Transparante uitleg over kilometerprijzen, starttarieven en rekenvoorbeelden.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: '#313851' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center' }}>
            Hoe Wordt het Tarief van een Spoedkoerier Berekend?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Wanneer u met spoed een document, onderdelen of een medisch pakket moet laten vervoeren, wilt u vooraf exact weten waar u aan toe bent. De prijs van een dedicated <Link href="/spoedtransport" style={{ textDecoration: 'underline' }}>spoedkoerier</Link> wordt vrijwel altijd berekend op basis van de **gereden kilometers van postcode tot postcode**.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0' }}>
            Anders dan bij reguliere pakketdiensten koopt u bij een spoedkoerier 100% exclusieve capaciteit. Het voertuig rijdt uitsluitend voor uw zending en stopt niet onderweg.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - INHOUD EN REKENVOORBEELDEN */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Spoedkoerier tarieven achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '950px', margin: '0 auto' }}>
          
          {/* TARIEVEN OVERZICHT CARD */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '40px', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              1. De Basistarieven per KM (2026)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.05rem' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Personenauto:</strong> € 0,60 per km (geschikt voor akten, kleine dozen, sleutels tot 100 kg)</span>
              </li>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.05rem' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Caddy Bestelbus:</strong> € 0,65 per km (geschikt voor meerdere colli, pallets of apparatuur tot 500 kg)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.05rem' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Starttarief / Voorrijkosten:</strong> € 25,- (vaste instapkosten)</span>
              </li>
            </ul>
          </div>

          {/* REKENVOORBEELDEN CARD */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '40px', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              2. Praktijk Rekenvoorbeelden
            </h3>
            
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                Voorbeeld A: Amsterdam naar Utrecht (ca. 45 km, Personenauto)
              </h4>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                Starttarief (€ 25) + 45 km x € 0,60 (€ 27) = **€ 52,- ex BTW**. Binnen 30 minuten opgehaald in Amsterdam en rechtstreeks afgeleverd op Lage Weide in Utrecht.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                Voorbeeld B: Rotterdam naar Eindhoven (ca. 110 km, Caddy)
              </h4>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                Starttarief (€ 25) + 110 km x € 0,65 (€ 71,50) = **€ 96,50 ex BTW**. Dedicated transport van reserveonderdelen rechtstreeks van de haven naar High Tech Campus Eindhoven.
              </p>
            </div>
          </div>

          {/* TOESLAGEN CARD */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '40px', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              3. Eventuele Aanvullende Toeslagen
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              Bij OnPoint Koeriers zijn er geen verborgen kosten. De enige mogelijke toeslagen zijn:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Nacht- & Weekendtoeslag:</strong> 25% toeslag voor ritten tussen 22:00 en 06:00 uur of op zaterdag/zondag.</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Wachttijd:</strong> De eerste 15 minuten wachttijd op de laad-/loslocatie zijn gratis. Daarna € 10,- per 15 min.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Tolkosten / Ferry:</strong> Eventuele directe tolkosten (bijv. Westerscheldetunnel of buitenlandse tolwegen) worden 1-op-1 doorberekend.</span>
              </li>
            </ul>
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
              Direct de exacte prijs voor uw rit berekenen?
            </h3>
            <p style={{ color: '#313851', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Bel onze planningsdienst. U krijgt direct een scherpe prijsopgave en de chauffeur kan binnen 30 minuten rijden.
            </p>
            <Link href="/contact" className="btn btn-action">
              BEREKEN RITPRIJS OF BEL DIRECT
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
