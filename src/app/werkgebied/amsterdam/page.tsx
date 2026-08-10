import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, CarFront, Globe } from 'lucide-react';

export const metadata: Metadata = { 
  title: 'Spoedkoerier Amsterdam | Direct Onderweg | OnPoint Koeriers', 
  description: 'Uw betrouwbare koerier in Amsterdam. Wij navigeren moeiteloos door de stad voor al uw spoedzendingen. Direct beschikbaar.', 
};

export default function AmsterdamPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Amsterdam", "image": "https://onpointkoerier.nl/logo.png", "url": "https://onpointkoerier.nl/werkgebied/amsterdam", "telephone": "0630037257", "areaServed": { "@type": "City", "name": "Amsterdam" } }) }} />
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-amsterdam-v4.jpg" 
            alt="OnPoint Koeriers voertuig gereed voor direct spoedtransport in Amsterdam" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedkoerier Amsterdam: Snel en Wendbaar door de Stad
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Premium <Link href="/spoedtransport" style={{ textDecoration: 'underline' }}>spoedtransport</Link> voor de <Link href="/zakelijk" style={{ textDecoration: 'underline' }}>zakelijke markt</Link>. Exclusief met wendbare personenauto's of compacte bestelwagens.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-action">
                Plan uw transport
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Ontwijk de drukte in het centrum en op de Zuidas
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            In Amsterdam is het verkeer vaak een grote uitdaging voor reguliere transporteurs. Met onze compacte Caddy's en personenauto's omzeilen wij het vastgelopen vrachtverkeer in het centrum, de grachtengordel en rond de zakelijke districten zoals de Zuidas. Wij zijn de ideale partner voor vertrouwelijke documenten en directe zakelijke zendingen. Snel inladen en razendsnel van en naar Amsterdam rijden, zonder onnodige vertraging.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 DIENSTENBLOKKEN (ACHTERGROND) */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Amsterdam achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront /></div>
              <h3 style={{ color: '#313851' }}>Stedelijke Wendbaarheid</h3>
              <p style={{ color: '#313851' }}>Waar grote vrachtwagens stilstaan, navigeren wij moeiteloos door de smalste straten van Amsterdam.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Globe /></div>
              <h3 style={{ color: '#313851' }}>100% Dedicated</h3>
              <p style={{ color: '#313851' }}>Geen overslag of tussenstops. Uw zending gaat direct vanuit Amsterdam naar de eindbestemming.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer /></div>
              <h3 style={{ color: '#313851' }}>Snel op de Ring A10</h3>
              <p style={{ color: '#313851' }}>Dankzij onze snelle reactietijd zijn wij binnen no-time op de ring A10 en direct onderweg.</p>
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
            marginTop: '60px',
            marginBottom: '40px',
            textAlign: 'center' 
          }}>
            <h2 style={{ color: '#313851', marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
              Een spoedzending die vandaag onderweg moet?
            </h2>
            <Link href="/contact" className="btn btn-action">
              NEEM DIRECT CONTACT OP
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
