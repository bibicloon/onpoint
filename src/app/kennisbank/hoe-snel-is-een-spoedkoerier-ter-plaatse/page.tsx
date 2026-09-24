import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '⚡ Hoe Snel is een Spoedkoerier Ter Plaatse? | Bel 06 30 03 72 57',
  description: 'Binnen hoeveel minuten staat een spoedkoerier voor de deur? Ontdek onze 30-minuten garanties, uitvalsbases in Nederland & Europa. Bel: 06 30 03 72 57.',
};

export default function HoeSnelIsEenSpoedkoerierPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Hoe Snel is een Spoedkoerier Ter Plaatse?",
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
            "mainEntityOfPage": "https://onpointkoeriers.nl/kennisbank/hoe-snel-is-een-spoedkoerier-ter-plaatse"
          })
        }}
      />

      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '55vh', height: '55vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-cinematic-onpoint.jpg" 
            alt="Hoe snel is een spoedkoerier ter plaatse aanrijtijden en spoedtransport" 
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
              Hoe Snel is een Spoedkoerier Ter Plaatse?
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              De factoren die de aanrijtijd en bezorgsnelheid van spoedvervoer bepalen.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: '#313851' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center' }}>
            Binnen 30 Minuten Onderweg op de Ophaallocatie
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Wanneer u contact opneemt met OnPoint Koeriers via **06 30 03 72 57**, telt elke seconde. Onze stelregel is helder: in veruit de meeste grote steden en logistieke hotspots in Nederland staat onze chauffeur **binnen 30 minuten op de ophaallocatie**.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0' }}>
            Zodra de zending is ingeladen, rijdt de chauffeur zonder tussenstops via de snelste route direct naar de afleverlocatie.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 4 PILLERS VAN SNELHEID */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Spoedkoerier levertijden achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '950px', margin: '0 auto' }}>
          
          {/* PILLER 1 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 1. Strategische Spreiding in Nederland
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              Wij zijn direct actief in grote knooppunten zoals <Link href="/werkgebied/amsterdam" style={{ textDecoration: 'underline' }}>Amsterdam</Link>, <Link href="/werkgebied/schiphol" style={{ textDecoration: 'underline' }}>Schiphol</Link>, <Link href="/werkgebied/utrecht" style={{ textDecoration: 'underline' }}>Utrecht</Link>, <Link href="/werkgebied/rotterdam" style={{ textDecoration: 'underline' }}>Rotterdam</Link>, <Link href="/werkgebied/eindhoven" style={{ textDecoration: 'underline' }}>Eindhoven</Link>, <Link href="/werkgebied/breda" style={{ textDecoration: 'underline' }}>Breda</Link>, <Link href="/werkgebied/venlo" style={{ textDecoration: 'underline' }}>Venlo</Link> en <Link href="/werkgebied/arnhem" style={{ textDecoration: 'underline' }}>Arnhem</Link>. Doordat onze chauffeurs dicht bij de snelwegen (A1, A2, A4, A12, A16, A27) gecentreerd staan, is de aanrijtijd minimaal.
            </p>
          </div>

          {/* PILLER 2 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 2. Wendbaar Wagenpark (Geen File-Vertraging)
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              Onze vloot van personenauto's en Caddy-bestelbussen mag gebruik maken van alle milieuzones, smalle binnenstadstraten en drukke bedrijfsterreinen. Waar grote vrachtwagens vastlopen in de spits, manoeuvreren onze wagens snel naar de voordeur.
            </p>
          </div>

          {/* PILLER 3 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 3. Direct Telefonisch Schakelen
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              Als u belt, voert onze planningsdienst direct de dispatch uit. We verspillen geen tijd aan offertetrajecten via mail: we bevestigen de rit per telefoon of WhatsApp en sturen de dichtstbijzijnde auto aan.
            </p>
          </div>

          {/* PILLER 4 */}
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: '35px 40px', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 color="#313851" /> 4. Real-Time Status Updates
            </h3>
            <p style={{ lineHeight: '1.6', margin: 0 }}>
              U krijgt een geschatte aankomsttijd (ETA) en ontvangt een melding bij aflevering inclusief de naam en handtekening van de ontvanger.
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
              Nu direct een spoedkoerier nodig?
            </h3>
            <p style={{ color: '#313851', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Bel 06 30 03 72 57 en onze chauffeur is binnen 30 minuten onderweg.
            </p>
            <Link href="/contact" className="btn btn-action">
              BEL DIRECT: 06 30 03 72 57
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
