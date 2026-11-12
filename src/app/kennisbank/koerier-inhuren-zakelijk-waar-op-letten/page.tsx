import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zakelijke Koerier Inhuren: 7 Punten Waar Bedrijven op Moeten Letten | OnPoint',
  description: 'Waar moet u als bedrijf op letten bij het inhuren van een zakelijke spoedkoerier? Ontdek de 7 belangrijkste criteria: AVC/CMR, aanrijtijden, tarieven en discretie.',
  alternates: {
    canonical: '/kennisbank/koerier-inhuren-zakelijk-waar-op-letten',
  },
  openGraph: {
    title: 'Zakelijke Koerier Inhuren: 7 Punten Waar Bedrijven op Moeten Letten',
    description: 'Praktische B2B checklist voor het selecteren van een betrouwbare zakelijke spoedkoerier voor incidenteel of vast vervoer.',
    url: 'https://onpointkoeriers.nl/kennisbank/koerier-inhuren-zakelijk-waar-op-letten',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function KoerierInhurenZakelijkKennisbankPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Kennisbank", "item": "https://onpointkoeriers.nl/kennisbank" },
      { "@type": "ListItem", "position": 3, "name": "Zakelijke Koerier Inhuren", "item": "https://onpointkoeriers.nl/kennisbank/koerier-inhuren-zakelijk-waar-op-letten" }
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
            "headline": "Zakelijke Koerier Inhuren: 7 Punten Waar Bedrijven op Moeten Letten",
            "description": "Gids voor logistiek managers en inkopers: hoe selecteert u een betrouwbare B2B spoedkoerier op basis van transparante kilometerprijzen, dekking en garanties.",
            "image": "https://onpointkoeriers.nl/images/hero-zakelijk.jpg",
            "datePublished": "2026-03-18T09:00:00+01:00",
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
            "mainEntityOfPage": "https://onpointkoeriers.nl/kennisbank/koerier-inhuren-zakelijk-waar-op-letten"
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
            src="/images/hero-zakelijk.jpg" 
            alt="Zakelijke koerier inhuren voor B2B spoedtransport" 
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
              Zakelijke Koerier Inhuren: 7 Belangrijke Aandachtspunten
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              Zo kiest u een betrouwbare B2B spoedkoerier die uw bedrijfsreputatie en deadlines beschermt.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: '#313851' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center' }}>
            Waarom de keuze van uw zakelijke koerier het verschil maakt
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Voor productiebedrijven, advocatenkantoren, zorginstellingen en groothandels is een <Link href="/zakelijk" style={{ textDecoration: 'underline' }}>zakelijke koeriersdienst</Link> het visitekaartje aan de deur van uw klant of ketenpartner. Wanneer een zending te laat of beschadigd arriveert, straalt dat direct af op uw organisatie.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0' }}>
            In dit overzicht bespreken we de <strong>7 criteria</strong> waarop inkopers, office managers en logistiek planners een professionele spoedkoerier beoordelen.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - INHOUD */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_zakelijk_b2b.jpg"
            alt="Zakelijke B2B koerier achtergrond"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '950px', margin: '0 auto' }}>
          
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              De 7 Checklist-punten voor Zakelijk Spoedtransport
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>1. Echte 100% Dedicated Garantie:</strong> Vraag altijd of uw zending onderweg gecombineerd wordt met vracht van derden. Bij echt <Link href="/spoedtransport" style={{ textDecoration: 'underline' }}>dedicated spoedtransport</Link> rijdt het voertuig exclusief voor uw opdracht zonder sorteerhub.</span>
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>2. Transparante Kilometerprijzen Vooraf:</strong> Vermijd koeriers met vage uurtarieven of verborgen spoedtoeslagen overdag. Controleer of er gewerkt wordt met vaste prijzen per kilometer (zoals <Link href="/tarieven" style={{ textDecoration: 'underline' }}>€ 0,60/km voor personenauto en € 0,65/km voor Caddy</Link>).</span>
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>3. Het Juiste Voertuigformaat:</strong> Een grote bakwagen loopt vast in binnensteden zoals <Link href="/werkgebied/amsterdam" style={{ textDecoration: 'underline' }}>Amsterdam</Link> of <Link href="/werkgebied/utrecht" style={{ textDecoration: 'underline' }}>Utrecht</Link> en verbruikt onnodig veel brandstof. Voor 90% van de zakelijke spoedzendingen is een personenauto of Caddy sneller én voordeliger.</span>
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>4. Directe Lijn met de Planning (Geen Callcenter):</strong> Bij noodsituaties wilt u binnen 60 seconden weten of er een chauffeur beschikbaar is en hoe laat deze voorrijdt.</span>
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>5. Hand-tot-Hand Aflevering & Ontvangstbevestiging:</strong> Zeker bij <Link href="/diensten/juridisch-documenten-koerier" style={{ textDecoration: 'underline' }}>juridische dossiers</Link> of <Link href="/diensten/machinebouw-industrie-koerier" style={{ textDecoration: 'underline' }}>machineonderdelen</Link> moet de zending aan de juiste persoon worden overhandigd, gevolgd door een directe aflevermelding.</span>
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>6. Vervoersvoorwaarden (AVC / CMR) & KVK-registratie:</strong> Werk uitsluitend met gecertificeerde koeriers die rijden onder de officiële Algemene Vervoerscondities (AVC) voor binnenland en het CMR-verdrag voor internationaal wegvervoer.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={22} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>7. Rijden op Factuur met Duidelijke Kostenplaats:</strong> Zakelijke opdrachtgevers willen achteraf een overzichtelijke B2B-factuur met vermelding van ritdatum, traject en eventueel uw interne project- of referentienummer.</span>
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
              Op zoek naar een vaste of incidentele zakelijke koerier?
            </h3>
            <p style={{ color: '#313851', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Bij OnPoint Koeriers rijdt u als zakelijke klant direct op factuur en heeft u 24/7 beschikking over een vast aanspreekpunt.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
                BEL DIRECT
              </a>
              <Link href="/zakelijk" className="btn btn-action">
                BEKIJK ZAKELIJKE SERVICE
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
