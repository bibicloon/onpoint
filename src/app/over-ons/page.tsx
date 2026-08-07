import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { Target, PhoneCall, Lock, Timer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Over Ons | OnPoint Spoedtransport',
  description: 'OnPoint Koeriers is uw betrouwbare partner voor dedicated spoedtransport. Wij rijden altijd direct, veilig en discreet naar elke bestemming.',
};

export default function OverOnsPage() {
  return (
    <main>
      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-over-ons.jpg" 
            alt="OnPoint Koeriers voertuig onderweg naar een urgente afspraak" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.7)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: 'var(--color-light)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Over OnPoint Koeriers
            </h1>
            <p className={styles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto' }}>
              Uw betrouwbare partner voor dedicated spoedtransport.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - ONS VERHAAL & WERKWIJZE */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--color-dark)', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', maxWidth: '100%' }}>
            Snel, Veilig en Altijd Direct.
          </h2>
          <p style={{ color: 'var(--color-dark)', fontSize: '1.125rem', fontWeight: 'bold', maxWidth: '800px', margin: '0 auto', marginBottom: '1rem' }}>
            Bij OnPoint Koeriers geloven we niet in vertragende processen. Wij werken uitsluitend zonder overslag en maken geen gebruik van distributiecentra. Dit betekent dat uw pakket of document vanaf het moment van ophalen onafgebroken onderweg is naar de eindbestemming.
          </p>
          <p style={{ color: 'var(--color-dark)', fontSize: '1.125rem', fontWeight: 'bold', maxWidth: '800px', margin: '0 auto', marginBottom: '0' }}>
            Onze kracht ligt in onze wendbaarheid en flexibiliteit. Door de slimme inzet van vlotte personenauto's en ruime, representatieve Caddy-bestelbussen, hebben wij voor elke urgente zending direct het juiste voertuig klaarstaan. Geen wachttijden, geen logistieke ruis: alleen het allerbeste spoedtransport.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - WAAROM KIEZEN VOOR ONS? & CTA */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_over_ons_road_1785028702353.jpg"
            alt="Cinematic empty winding road"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.7)', zIndex: 1 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto' }}>
          <div className={styles.gridFour} style={{ marginBottom: '60px' }}>
            
            {/* Kaart 1 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Target color="#313851" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>100% Dedicated</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Uw zending staat altijd exclusief bij ons in de wagen. Wij combineren geen ritten, waardoor uw pakket de absolute en onverdeelde prioriteit krijgt.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><PhoneCall color="#313851" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Direct Contact</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Geen anonieme klantenservice of wachttijden. U heeft altijd direct en persoonlijk contact met de chauffeur die verantwoordelijk is voor uw zending.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Lock color="#313851" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Discretie</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Wij behandelen vertrouwelijke documenten en waardevolle objecten met de allerhoogste zorg. Volledige privacy en veiligheid zijn gegarandeerd.
              </p>
            </div>

            {/* Kaart 4 */}
            <div className={styles.uspCard} style={{ backgroundColor: '#C2CBD3' }}>
              <div className={styles.uspIcon}><Timer color="#313851" /></div>
              <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.25rem' }}>Stedelijke Snelheid</h3>
              <p style={{ color: '#313851', margin: 0, fontSize: '1rem' }}>
                Dankzij onze compacte voertuigen navigeren wij razendsnel door de smalste straten in drukke stadscentra, waar grotere vrachtwagens onmogelijk kunnen komen.
              </p>
            </div>

          </div>

          <div style={{ textAlign: 'center' }}>
            <Link 
              href="/contact" 
              className="btn btn-action"
            >
              NEEM DIRECT CONTACT OP
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
