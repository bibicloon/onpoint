import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CarFront, Target, Lock, PhoneCall, Zap, UserCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '⚡ Spoedtransport 24/7 | Binnen 30 Min. Ter Plaatse | OnPoint Koeriers',
  description: 'Direct spoedtransport nodig? OnPoint Koeriers is binnen 30 minuten op de ophaallocatie. 100% dedicated vervoer zonder overslag in NL & EU vanaf € 0,60/km.',
  alternates: {
    canonical: '/spoedtransport',
  },
  openGraph: {
    title: '⚡ Spoedtransport 24/7 | Binnen 30 Min. Ter Plaatse | OnPoint Koeriers',
    description: 'Direct spoedtransport nodig? Binnen 30 minuten op de ophaallocatie. 100% dedicated vervoer zonder overslag in NL & EU.',
    url: 'https://onpointkoeriers.nl/spoedtransport',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SpoedtransportPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "24/7 Spoedtransport & Spoedkoerier",
    "provider": {
      "@type": "CourierService",
      "name": "OnPoint Koeriers",
      "url": "https://onpointkoeriers.nl",
      "image": "https://onpointkoeriers.nl/images/hero-cinematic-onpoint.jpg"
    },
    "areaServed": ["NL", "BE", "DE", "EU"],
    "description": "Direct spoedtransport binnen 30 minuten op de ophaallocatie. 100% dedicated vervoer zonder overslag in Nederland en Europa."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Spoedtransport", "item": "https://onpointkoeriers.nl/spoedtransport" }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-diensten.jpg" 
            alt="OnPoint Koeriers auto met hoge snelheid op weg naar een spoedtransport bestemming" 
            fill 
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.65)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedtransport: Snel, Veilig en 100% Dedicated
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Uw zending direct van A naar B zonder overslag. Wendbaar, discreet en altijd de hoogste prioriteit.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers">
                BEL DIRECT
              </a>
              <Link href="/contact" className="btn btn-action">
                PLAN UW TRANSPORT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - SEO & DEKKINGSGEBIED */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Razendsnel ter plaatse in heel Nederland & Europa
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', fontWeight: 'bold', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
            Omdat elke minuut telt bij spoedtransport, opereren wij vanuit strategische kernregio's zoals <Link href="/werkgebied/amsterdam" style={{ textDecoration: 'underline' }}>Amsterdam</Link>, <Link href="/werkgebied/utrecht" style={{ textDecoration: 'underline' }}>Utrecht</Link>, <Link href="/werkgebied/rotterdam" style={{ textDecoration: 'underline' }}>Rotterdam</Link>, <Link href="/werkgebied/eindhoven" style={{ textDecoration: 'underline' }}>Eindhoven</Link>, <Link href="/werkgebied/breda" style={{ textDecoration: 'underline' }}>Breda</Link> en rondom de luchthaven <Link href="/werkgebied/schiphol" style={{ textDecoration: 'underline' }}>Schiphol</Link>. Of het nu gaat om <Link href="/diensten/medisch-spoedtransport" style={{ textDecoration: 'underline' }}>medisch spoedtransport</Link>, <Link href="/diensten/juridisch-documenten-koerier" style={{ textDecoration: 'underline' }}>vertrouwelijke akten</Link> of <Link href="/diensten/automotive-onderdelen" style={{ textDecoration: 'underline' }}>cruciale auto-onderdelen</Link>: wij garanderen directe opname en rechtstreekse levering volgens transparante <Link href="/tarieven" style={{ textDecoration: 'underline' }}>kilometer tarieven</Link>.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - INFORMATIEBLOKKEN (GECOMBINEERD) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Spoedtransport op donkere lege weg"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'left center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          <div className={styles.uspGrid}>
            
            {/* Kaart 1 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront aria-hidden="true" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Stedelijke Wendbaarheid</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Met onze compacte personenauto's en Caddy's navigeren we moeiteloos door drukke stadscentra en smalle straten. Sneller ter plaatse dan groot vrachtvervoer.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Target aria-hidden="true" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Geen Distributiecentra</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Uw zending ligt exclusief bij ons in het voertuig. Wij doen niet aan overladen of gecombineerde routes. Direct van de afzender naar de ontvanger.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Lock aria-hidden="true" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Discretie & Veiligheid</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Van cruciale auto-onderdelen en medische samples tot vertrouwelijke documenten en paspoorten. Wij behandelen uw zending met de allerhoogste zorg en absolute privacy.
              </p>
            </div>

            {/* Kaart 4 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><PhoneCall aria-hidden="true" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Direct Contact</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Bel of app ons. U krijgt direct een chauffeur aan de lijn, zonder keuzemenu's.
              </p>
            </div>

            {/* Kaart 5 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Zap aria-hidden="true" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Snel Ophalen</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Wij zijn direct onderweg met het juiste compacte voertuig voor uw zending.
              </p>
            </div>

            {/* Kaart 6 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><UserCheck aria-hidden="true" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Persoonlijke Levering</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Wij rijden via de meest efficiënte route rechtstreeks naar de eindbestemming. Zonder overslag of onnodige tussenstops leveren wij uw zending veilig en persoonlijk af bij de juiste contactpersoon.
              </p>
            </div>

          </div>

          {/* Garanties & Zekerheden Blok */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            border: '2px solid #313851',
            padding: 'clamp(28px, 4vw, 48px)', 
            maxWidth: '950px', 
            margin: '60px auto 0 auto', 
            textAlign: 'center',
            color: '#313851'
          }}>
            <h2 style={{ color: '#313851', marginBottom: '1rem', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 'bold' }}>
              Onze Garanties bij Elk Spoedtransport
            </h2>
            <p style={{ color: '#313851', maxWidth: '750px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
              Of het nu gaat om <Link href="/diensten/luchtvracht-aog-koerier" style={{ textDecoration: 'underline' }}>AOG-luchtvracht</Link>, <Link href="/diensten/machinebouw-industrie-koerier" style={{ textDecoration: 'underline' }}>machineonderdelen</Link> of <Link href="/diensten/medisch-spoedtransport" style={{ textDecoration: 'underline' }}>medische monsters</Link>: u kunt rekenen op vaste vervoersgaranties en volledige transparantie.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '14px', textAlign: 'left', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}><CheckCircle2 size={20} color="#313851" aria-hidden="true" /> Binnen 30-45 min. op ophaallocatie</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}><CheckCircle2 size={20} color="#313851" aria-hidden="true" /> 100% Dedicated (geen bijlading)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}><CheckCircle2 size={20} color="#313851" aria-hidden="true" /> Hand-tot-hand overdracht + bewijs</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}><CheckCircle2 size={20} color="#313851" aria-hidden="true" /> Verzekerd conform AVC / CMR</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}><CheckCircle2 size={20} color="#313851" aria-hidden="true" /> Vast tarief vanaf € 0,60/km</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}><CheckCircle2 size={20} color="#313851" aria-hidden="true" /> 24/7 bereikbaar (ook nacht & weekend)</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/tarieven#calculator" className="btn btn-action">
                BEREKEN DIRECT UW RITPRIJS →
              </Link>
              <Link href="/contact" className="btn btn-primary">
                PLAN UW SPOEDRIT IN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
