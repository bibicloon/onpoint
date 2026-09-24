import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Timer, CarFront, Globe } from 'lucide-react';

export const metadata: Metadata = { 
  title: '⚡ Spoedkoerier Dordrecht | Binnen 30 Min. Ter Plaatse | Bel 06 30 03 72 57', 
  description: 'Direct een spoedkoerier in Dordrecht, Drechtsteden of Kil 1, 2, 3 nodig? Binnen 30 minuten op locatie. 100% dedicated vervoer. Bel direct: 06 30 03 72 57.', 
};

export default function DordrechtPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CourierService", "name": "OnPoint Koeriers Dordrecht", "image": "https://onpointkoeriers.nl/logo.png", "url": "https://onpointkoeriers.nl/werkgebied/dordrecht", "telephone": "0630037257", "areaServed": { "@type": "City", "name": "Dordrecht" } }) }} />
      
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-cinematic-onpoint.jpg" 
            alt="OnPoint Koeriers voertuig voor direct spoedtransport in Dordrecht" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedkoerier Dordrecht: Drechtsteden & Zuid-Holland
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Snelle en betrouwbare <Link href="/spoedtransport" style={{ textDecoration: 'underline' }}>spoedkoerier</Link> in Dordrecht, Papendrecht, Sliedrecht en Zwijndrecht.
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
            Spoedvervoer in het Hart van de Drechtsteden
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Gelegen aan de drukke A16 en A15 verbindt Dordrecht Rotterdam met Brabant en Antwerpen. OnPoint Koeriers is uw toegewijde partner voor spoedzendingen op bedrijventerreinen zoals Krabbepolder, Dordtse Kil I, II, III en Weststad. Wij garanderen een directe rit zonder stops.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DE 3 USP KAARTEN EN CTA BLOK */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Dordrecht spoedtransport achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className={styles.uspGrid}>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Binnen 30 Min. Ter Plaatse</h3>
              <p style={{ color: '#313851' }}>Directe dispatch naar Krabbepolder, Dordtse Kil en omgeving.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Globe color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Regionaal & Landelijk</h3>
              <p style={{ color: '#313851' }}>Van Dordrecht naar Rotterdam, Moerdijk, Breda of Schiphol zonder vertraging.</p>
            </div>
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront color="#313851" /></div>
              <h3 style={{ color: '#313851' }}>Compact & Efficient</h3>
              <p style={{ color: '#313851' }}>Personenauto's en Caddy-bestelbussen voor snelle levering van uw pakketten.</p>
            </div>
          </div>

          {/* CTA BLOK */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
            padding: '60px 40px', 
            maxWidth: '800px', 
            margin: '60px auto 40px auto', 
            textAlign: 'center' 
          }}>
            <h2 style={{ color: '#313851', marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
              Direct een spoedkoerier in Dordrecht nodig?
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
