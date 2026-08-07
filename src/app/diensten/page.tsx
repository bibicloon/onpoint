import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CarFront, Truck, Target, Plane } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Onze Diensten | OnPoint Spoedtransport',
  description: 'Van razendsnel spoedtransport met personenauto tot dedicated stadsdistributie. Ontdek onze premium koeriersdiensten.',
};

export default function DienstenPage() {
  return (
    <main>
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-diensten-v2.jpg" 
            alt="OnPoint Koeriers representatief voertuig klaar voor snelle logistieke dienstverlening" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.7)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: 'var(--color-light)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Onze Koeriersdiensten
            </h1>
            <p className={styles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto' }}>
              Razendsnel en flexibel spoedtransport, direct onderweg voor uw belangrijkste zendingen.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Maatwerk in Snelheid en Betrouwbaarheid
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', fontWeight: 'bold', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Of het nu gaat om een cruciaal document, een medisch pakket, of een zending die wereldwijd persoonlijk begeleid moet worden; wij bieden de perfecte logistieke oplossing. Met ons wendbare wagenpark, bestaande uit efficiënte personenauto's en compacte Caddy-bestelbussen, manoeuvreren we moeiteloos door drukke stadscentra en industriële gebieden. Uw zending gaat direct van A naar B, zonder overslag of onnodige vertraging. 100% dedicated en altijd met de hoogste prioriteit.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - DIENSTEN GRID */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_diensten_alps.jpg"
            alt="Diensten Zwitserse Alpen achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', padding: '0 4vw' }}>
          <div className={styles.gridFour}>
            
            {/* Kaart 1 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront color="#313851" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Spoedtransport (Personenauto)</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                Ultieme snelheid en wendbaarheid in drukke stadscentra. Ideaal voor vertrouwelijke documenten, sleutels of kleine, waardevolle zendingen die onopvallend en direct van A naar B moeten.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Truck color="#313851" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Pakket & Distributie (Caddy)</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                Focus op grotere zendingen. Perfect voor stadsdistributie waarbij de zending veilig en direct voor de deur wordt afgeleverd, precies op plekken waar grote bussen of vrachtwagens vastlopen.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Target color="#313851" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Dedicated & Directe Ritten</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                De garantie van exclusiviteit: uw zending staat exclusief in onze auto of bestelbus en gaat zonder overslag op een distributiecentrum rechtstreeks naar de eindbestemming.
              </p>
            </div>

            {/* Kaart 4 (Nieuw: COB) */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Plane color="#313851" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Courier On Board (COB)</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                Voor uw meest kritieke zendingen wereldwijd. Onze koerier stapt persoonlijk met uw documenten of kleine onderdelen in het vliegtuig. Permanente begeleiding en directe overhandiging, 100% veilig.
              </p>
            </div>

          </div>
          
          {/* CALL-TO-ACTION BINNEN DE ACHTERGROND */}
          <div style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '20px' }}>
            <Link 
              href="/contact" 
              className="btn btn-secondary"
            >
              Direct een rit inplannen?
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
