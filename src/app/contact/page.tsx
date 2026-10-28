import { Metadata } from 'next';
import Image from 'next/image';
import pageStyles from '@/app/page.module.css';
import styles from './contact.module.css';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Direct Spoedkoerier Boeken (24/7) | Contact | Bel 06 30 03 72 57',
  description: 'Voor spoedtransport telt elke seconde. Bel direct 06 30 03 72 57 of plan uw spoedrit online in. Onze koeriers staan 24/7 binnen 30 minuten voor u klaar.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Direct Spoedkoerier Boeken (24/7) | Contact OnPoint Koeriers',
    description: 'Bel direct 06 30 03 72 57 of vraag direct uw ritprijs aan. Binnen 30 minuten onderweg in heel Nederland.',
    url: 'https://onpointkoeriers.nl/contact',
    siteName: 'OnPoint Koeriers',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-light)' }}>
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
              Voor spoedtransport telt elke seconde. Bel ons direct of laat uw gegevens achter.
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
                <span className={styles.infoLabel}>Telefoon</span>
                <a href="tel:0630037257" className={styles.infoValue}>06 300 37 257</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>E-mail</span>
                <a href="mailto:onpointkoerier@outlook.com" className={styles.infoValue}>onpointkoerier@outlook.com</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>KVK-nummer</span>
                <span className={styles.infoValue}>42077914</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Vestigingsplaats</span>
                <span className={styles.infoValue}>Amsterdam</span>
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
