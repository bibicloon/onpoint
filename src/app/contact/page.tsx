import { Metadata } from 'next';
import Image from 'next/image';
import pageStyles from '@/app/page.module.css';
import styles from './contact.module.css';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Direct Spoedkoerier Boeken (24/7) | Contact | OnPoint Koeriers',
  description: 'Voor spoedtransport telt elke seconde. Neem direct telefonisch of via WhatsApp contact op of plan uw spoedrit online in. Onze koeriers staan 24/7 binnen 30 minuten voor u klaar.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Direct Spoedkoerier Boeken (24/7) | Contact OnPoint Koeriers',
    description: 'Neem direct telefonisch of via WhatsApp contact op of vraag uw ritprijs online aan. Binnen 30 minuten onderweg in heel Nederland.',
    url: 'https://onpointkoeriers.nl/contact',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onpointkoeriers.nl" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://onpointkoeriers.nl/contact" }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--color-light)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* SECTIE 1 - COMPACTE HERO (40vh) */}
      <section className={pageStyles.hero} style={{ minHeight: '40vh', height: '40vh', paddingBottom: '100px' }}>
        <div className={pageStyles.heroImageWrapper}>
          <Image 
            src="/images/hero-contact.jpg" 
            alt="Neem contact op met de planningsafdeling van OnPoint Koeriers" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={pageStyles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.8)' }}></div>
        </div>
        <div className={`container ${pageStyles.heroContainer}`}>
          <div className={pageStyles.heroContent} style={{ alignItems: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={pageStyles.heroTitle} style={{ color: 'var(--color-light)', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Neem direct contact op.
            </h1>
            <p className={pageStyles.heroSubtitle} style={{ color: 'var(--color-light)', fontSize: '1.25rem', opacity: '0.95', maxWidth: '600px', margin: '0 auto' }}>
              Voor spoedtransport telt elke seconde. Bel ons direct, stuur een WhatsApp of laat uw gegevens achter.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - CONTACT INFORMATIE & FORMULIER (OVERLAP LAY-OUT) */}
      <section style={{ backgroundColor: 'var(--color-light)', paddingBottom: '100px' }}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* Linker kolom (Contactgegevens) */}
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Direct Spoedcontact (24/7)</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
                  <a href="tel:+31630037257" className="btn btn-primary" aria-label="Bel direct met OnPoint Koeriers" style={{ flex: '1 1 140px', textAlign: 'center' }}>
                    BEL DIRECT
                  </a>
                  <a href="https://wa.me/31630037257" target="_blank" rel="noopener noreferrer" className="btn btn-action" aria-label="Stuur een WhatsApp bericht naar OnPoint Koeriers" style={{ flex: '1 1 140px', textAlign: 'center' }}>
                    WHATSAPP DIRECT
                  </a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>E-mail</span>
                <a href="mailto:onpointkoerier@outlook.com" className={styles.infoValue}>onpointkoerier@outlook.com</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Bereikbaarheid</span>
                <span className={styles.infoValue}>24/7 (365 dagen per jaar, binnen 30 min. onderweg)</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>KVK & BTW-nummer</span>
                <span className={styles.infoValue}>KVK: 42077914 | BTW: NL005478178B19</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Vestigingsplaats</span>
                <span className={styles.infoValue}>Amsterdam (Landelijke dekking in NL & EU)</span>
              </div>
            </div>

            {/* Rechter kolom (Contactformulier) */}
            <ContactForm />

          </div>
        </div>
      </section>
    </main>
  );
}
