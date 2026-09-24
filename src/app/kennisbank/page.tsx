import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import { BookOpen, Calculator, Scale, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kennisbank Spoedtransport & Logistiek | OnPoint Koeriers',
  description: 'Antwoorden op alle vragen over spoedkoeriers, tarieven per km, levertijden, wetgeving en de verschillen met standaard pakketdiensten.',
};

export default function KennisbankPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Kennisbank OnPoint Koeriers",
            "description": "Kennisartikelen en gidsen over spoedtransport, koerierstarieven en logistiek.",
            "url": "https://onpointkoeriers.nl/kennisbank"
          })
        }}
      />

      {/* SECTIE 1 - HERO */}
      <section className={styles.hero} style={{ minHeight: '60vh', height: '60vh' }}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="/images/hero-cinematic-onpoint.jpg" 
            alt="OnPoint Koeriers Kennisbank gidsen over spoedtransport en logistiek" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.65)' }}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={styles.heroTitle} style={{ color: '#F6F3ED', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Kennisbank Spoedtransport
            </h1>
            <p className={styles.heroSubtitle} style={{ color: '#F6F3ED', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Alles wat u moet weten over spoedvervoer, kilometer tarieven, wetgeving en logistieke oplossingen.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-action">
                Stel direct een vraag
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className="section section-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 0', backgroundColor: '#C2CBD3' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Onafhankelijk Advies & Logistieke Inzichten
          </h2>
          <p style={{ color: '#313851', fontSize: '1.125rem', fontWeight: 600, maxWidth: '850px', margin: '0 auto' }}>
            Bij dringende zendingen telt elk detail. In onze kennisbank delen we waardevolle informatie over hoe spoedtransport werkt, hoe kilometerprijzen worden berekend en wat de exacte verschillen zijn ten opzichte van traditionele pakketdiensten.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - KENNISARTIKELEN GRID */}
      <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="/images/bg_spoedtransport_dark_left.jpg"
            alt="Kennisbank achtergrond"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(16, 20, 28, 0.6)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            {/* Artikel 1 */}
            <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 35px) clamp(18px, 3vw, 30px)', border: '2px solid #313851', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '16px' }}><Calculator color="#313851" size={36} /></div>
                <h3 style={{ color: '#313851', fontSize: '1.35rem', marginBottom: '12px', fontWeight: 700 }}>
                  Wat Kost een Spoedkoerier per KM?
                </h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Ontdek hoe kilometer tarieven vanaf €0,60/km worden opgebouwd, welke toeslagen gelden en bekijk heldere rekenvoorbeelden.
                </p>
              </div>
              <Link href="/kennisbank/wat-kost-een-spoedkoerier-per-km" className="btn btn-action" style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Lees artikel <ArrowRight size={18} />
              </Link>
            </div>

            {/* Artikel 2 */}
            <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 35px) clamp(18px, 3vw, 30px)', border: '2px solid #313851', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '16px' }}><Scale color="#313851" size={36} /></div>
                <h3 style={{ color: '#313851', fontSize: '1.35rem', marginBottom: '12px', fontWeight: 700 }}>
                  Spoedkoerier vs. Pakketdienst
                </h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '24px' }}>
                  De 5 belangrijkste verschillen tussen 100% dedicated vervoer en distributienetwerken met overslag.
                </p>
              </div>
              <Link href="/kennisbank/spoedkoerier-vs-pakketdienst-verschillen" className="btn btn-action" style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Lees artikel <ArrowRight size={18} />
              </Link>
            </div>

            {/* Artikel 3 */}
            <div style={{ backgroundColor: '#C2CBD3', borderRadius: '12px', padding: 'clamp(24px, 4vw, 35px) clamp(18px, 3vw, 30px)', border: '2px solid #313851', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '16px' }}><Clock color="#313851" size={36} /></div>
                <h3 style={{ color: '#313851', fontSize: '1.35rem', marginBottom: '12px', fontWeight: 700 }}>
                  Hoe Snel is een Spoedkoerier Ter Plaatse?
                </h3>
                <p style={{ color: '#313851', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Hoe werkt de 30-minuten opnameregeling en waarom zijn compacte voertuigen sneller in het stadsverkeer?
                </p>
              </div>
              <Link href="/kennisbank/hoe-snel-is-een-spoedkoerier-ter-plaatse" className="btn btn-action" style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Lees artikel <ArrowRight size={18} />
              </Link>
            </div>

          </div>

          {/* CTA BLOK */}
          <div style={{ 
            backgroundColor: '#C2CBD3', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
            padding: 'clamp(32px, 5vw, 60px) clamp(20px, 4vw, 40px)', 
            maxWidth: '800px', 
            margin: '60px auto 20px auto', 
            textAlign: 'center' 
          }}>
            <h2 style={{ color: '#313851', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 'bold' }}>
              Heeft u een specifieke vraag over uw transport?
            </h2>
            <p style={{ color: '#313851', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Onze planners staan 24/7 klaar om u direct te adviseren of uw spoedrit in te plannen.
            </p>
            <Link href="/contact" className="btn btn-action">
              DIRECT CONTACT OPNEEMEN
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
