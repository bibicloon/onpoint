import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '🌙 24/7 Nachtkoerier & Weekend Spoedtransport | Direct Onderweg | OnPoint',
  description: 'Spoedkoerier nodig in de nacht (22:00 - 06:00), in het weekend of op feestdagen? Ontdek hoe onze 24/7 nachtkoerier en weekendservice binnen 30 min. rijdt.',
  alternates: {
    canonical: '/kennisbank/nachtkoerier-weekend-spoedtransport',
  },
  openGraph: {
    title: '24/7 Nachtkoerier & Weekend Spoedtransport | Direct Onderweg',
    description: 'Buiten kantooruren een acute spoedzending? Onze 24/7 nachtkoerier is binnen 30-45 minuten ter plaatse in heel Nederland.',
    url: 'https://onpointkoeriers.nl/kennisbank/nachtkoerier-weekend-spoedtransport',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function NachtkoerierWeekendSpoedtransportPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Kennisbank", "item": "https://onpointkoeriers.nl/kennisbank" },
      { "@type": "ListItem", "position": 3, "name": "24/7 Nachtkoerier & Weekend Spoedtransport", "item": "https://onpointkoeriers.nl/kennisbank/nachtkoerier-weekend-spoedtransport" }
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
            "headline": "24/7 Nachtkoerier & Weekend Spoedtransport: Direct Onderweg Buiten Kantooruren",
            "description": "Hoe werkt een nachtkoerier of weekend spoedkoerier? Alles over bereikbaarheid, nachttarieven (+25%) en aanrijtijden buiten kantoortijden.",
            "image": "https://onpointkoeriers.nl/images/bg_spoedtransport_dark_left.jpg",
            "datePublished": "2026-05-01T09:00:00+01:00",
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
            "mainEntityOfPage": "https://onpointkoeriers.nl/kennisbank/nachtkoerier-weekend-spoedtransport"
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
            src="/images/bg_spoedtransport_dark_left.jpg" 
            alt="24/7 nachtkoerier en weekend spoedtransport op de snelweg" 
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
              24/7 Nachtkoerier & Weekend Spoedtransport
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              Storingsdienst in het weekend of nachtelijke productiestop? Zo werkt spoedvervoer buiten kantoortijden.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: '#313851' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center' }}>
            Storingen Houden Zich Niet aan Kantooruren
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Een kapotte PLC-kaart in een 24-uurs fabriek op zaterdagavond, een urgent <Link href="/diensten/luchtvracht-aog-koerier" style={{ textDecoration: 'underline' }}>AOG-vliegtuigonderdeel</Link> dat om 02:30 uur landt op <Link href="/werkgebied/schiphol" style={{ textDecoration: 'underline' }}>Schiphol</Link>, of een ziekenhuis dat op zondagochtend met spoed medicatie nodig heeft: kritieke logistiek draait 365 dagen per jaar door.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '0' }}>
            Met de <strong>24/7 nachtkoerier en weekendservice</strong> van OnPoint Koeriers spreekt u ook midden in de nacht direct met een dienstdoende planner en vertrekt er binnen 30 tot 45 minuten een voertuig.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - INHOUD */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-cinematic-onpoint.jpg"
            alt="Nachtkoerier spoedtransport achtergrond"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.65)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '950px', margin: '0 auto' }}>
          
          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              1. De Voordelen van Nachttransport & Inlevering vóór 07:00 uur
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Nul filevertraging op snelwegen:</strong> Tussen 21:00 en 06:00 uur zijn de wegen in de Randstad, Brabant en het Duitse Ruhrgebied volledig vrij. Daardoor zijn de reistijden tussen steden tot wel 35% korter dan tijdens de spits.</span>
              </li>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Directe levering aan servicemonteurs:</strong> Onze nachtkoerier kan onderdelen rechtstreeks afleveren bij een wachtende storingsmonteur op locatie of bij de beveiligingsloge van een fabrieksterrein.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>24/7 bereikbaarheid zonder antwoordapparaat:</strong> Geen ticketsysteem dat pas op maandagochtend wordt gelezen, maar direct telefonisch of via WhatsApp schakelen.</span>
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 40px)', color: '#313851', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 700, borderBottom: '2px solid #313851', paddingBottom: '10px' }}>
              2. Wat Kost een Nachtkoerier of Weekendkoerier?
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              Waar veel koeriersbedrijven in de nacht of in het weekend hun tarieven verdubbelen (100% toeslag), hanteert OnPoint Koeriers een eerlijke en gematigde toeslag van slechts <strong>25%</strong> bovenop het reguliere kilometertarief:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Overdag (ma t/m vr 06:00 – 22:00):</strong> € 0,60/km (auto) of € 0,65/km (Caddy) + € 25,- starttarief (0% spoedtoeslag).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 color="#313851" size={20} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span><strong>Nacht (22:00 – 06:00) & Weekend (za/zo):</strong> Slechts +25% toeslag. U kunt het exacte bedrag direct berekenen met het vinkje in onze <Link href="/tarieven#calculator" style={{ textDecoration: 'underline' }}>online ritprijs-calculator</Link>.</span>
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
              Nu direct een nacht- of weekendkoerier oproepen?
            </h3>
            <p style={{ color: '#313851', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Bel direct met onze 24/7 spoedlijn of bereken uw ritprijs online. Wij zijn binnen 30 minuten onderweg.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
                BEL DIRECT (24/7)
              </a>
              <Link href="/tarieven#calculator" className="btn btn-action">
                BEREKEN NACHT/WEEKEND PRIJS
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
