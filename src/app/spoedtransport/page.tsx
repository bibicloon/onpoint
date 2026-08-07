import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { CarFront, Target, Lock, PhoneCall, Zap, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spoedtransport | OnPoint Koeriers',
  description: 'Spoedtransport: Snel, Veilig en 100% Dedicated. Uw zending direct van A naar B zonder overslag. Wendbaar, discreet en altijd de hoogste prioriteit.',
};

export default function SpoedtransportPage() {
  return (
    <main>
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-diensten.jpg" 
            alt="OnPoint Koeriers auto met hoge snelheid op weg naar een spoedtransport bestemming" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.65)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Spoedtransport: Snel, Veilig en 100% Dedicated
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto' }}>
              Uw zending direct van A naar B zonder overslag. Wendbaar, discreet en altijd de hoogste prioriteit.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - SEO & DEKKINGSGEBIED */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Razendsnel ter plaatse in Noord-Holland & Noord-Brabant
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', fontWeight: 'bold', maxWidth: '800px', margin: '0 auto' }}>
            Omdat elke minuut telt bij spoedtransport, opereren wij vanuit strategische kernregio's. Vanuit onze directe uitvalsbases in Noord-Holland en Noord-Brabant garanderen wij de allersnelste aanrijtijden. Valt uw ophaallocatie buiten deze provincies? Geen probleem. Dankzij een nauwkeurig geselecteerd landelijk netwerk staan we overal in Nederland direct voor u klaar.
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
            style={{ objectFit: 'cover', objectPosition: 'left center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          <div className={styles.uspGrid}>
            
            {/* Kaart 1 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><CarFront /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Stedelijke Wendbaarheid</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Met onze compacte personenauto's en Caddy's navigeren we moeiteloos door drukke stadscentra en smalle straten. Sneller ter plaatse dan groot vrachtvervoer.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Target /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Geen Distributiecentra</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Uw zending ligt exclusief bij ons in het voertuig. Wij doen niet aan overladen of gecombineerde routes. Direct van de afzender naar de ontvanger.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Lock /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Discretie & Veiligheid</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Van cruciale auto-onderdelen en medische samples tot vertrouwelijke documenten en paspoorten. Wij behandelen uw zending met de allerhoogste zorg en absolute privacy.
              </p>
            </div>

            {/* Kaart 4 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><PhoneCall /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Direct Contact</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Bel of app ons. U krijgt direct een chauffeur aan de lijn, zonder keuzemenu's.
              </p>
            </div>

            {/* Kaart 5 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Zap /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Snel Ophalen</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Wij zijn direct onderweg met het juiste compacte voertuig voor uw zending.
              </p>
            </div>

            {/* Kaart 6 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><UserCheck /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Persoonlijke Levering</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Wij rijden via de meest efficiënte route rechtstreeks naar de eindbestemming. Zonder overslag of onnodige tussenstops leveren wij uw zending veilig en persoonlijk af bij de juiste contactpersoon.
              </p>
            </div>

          </div>
        </div>
      </section>



    </main>
  );
}
