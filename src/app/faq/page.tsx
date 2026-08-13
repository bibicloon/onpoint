import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import pageStyles from '@/app/page.module.css';
import styles from './faq.module.css';
import FAQAccordion from '@/components/FAQ/FAQAccordion';
import { faqData } from '@/data/faqData';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen (FAQ) | OnPoint Spoedtransport',
  description: 'Vind antwoord op al uw vragen over spoedtransport, tarieven per kilometer, levertijden, 24/7 bereikbaarheid en dedicated koeriersdiensten van OnPoint Koeriers.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Veelgestelde Vragen (FAQ) | OnPoint Spoedtransport',
    description: 'Vind antwoord op al uw vragen over spoedtransport, tarieven per kilometer, levertijden, 24/7 bereikbaarheid en dedicated koeriersdiensten van OnPoint Koeriers.',
    url: 'https://onpointkoeriers.nl/faq',
    siteName: 'OnPoint Koeriers',
    images: [
      {
        url: '/images/hero-cinematic-onpoint.jpg',
        width: 1200,
        height: 630,
        alt: 'OnPoint Veelgestelde Vragen FAQ',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function FAQPage() {
  // Schema.org FAQPage voor Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <main>
      {/* FAQ Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTIE 1 - HERO */}
      <section className={pageStyles.hero} style={{ minHeight: '50vh', height: '50vh' }}>
        <div className={pageStyles.heroImageWrapper}>
          <Image 
            src="/images/hero-diensten-v2.jpg" 
            alt="Veelgestelde vragen over spoedtransport bij OnPoint Koeriers" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={pageStyles.heroOverlay} style={{ background: 'rgba(49, 56, 81, 0.75)' }}></div>
        </div>
        <div className={`container ${pageStyles.heroContainer}`}>
          <div className={pageStyles.heroContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
            <h1 className={pageStyles.heroTitle} style={{ color: 'var(--color-light)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Veelgestelde Vragen (FAQ)
            </h1>
            <p className={pageStyles.heroSubtitle} style={{ color: 'var(--color-light)', maxWidth: '800px', margin: '0 auto' }}>
              Alles wat u moet weten over onze dedicated koeriersdiensten, tarieven, ophaaltijden en werkwijze.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 - INTRO */}
      <section className={styles.introSection}>
        <div className="container">
          <h2 className={styles.introTitle}>Helderheid & Transparantie in Transport</h2>
          <p className={styles.introText}>
            Heeft u een dringende zending en wilt u weten wat u van OnPoint Koeriers kunt verwachten? Hieronder vindt u antwoord op de meest gestelde vragen van onze zakelijke opdrachtgevers. Staat uw specifieke vraag er niet tussen? Neem dan direct telefonisch contact op met onze planning.
          </p>
        </div>
      </section>

      {/* SECTIE 3 - FAQ ACCORDION GRID */}
      <section className={styles.faqSection}>
        <div className="container">
          <FAQAccordion items={faqData} />

          {/* CALL TO ACTION ONDERAAN */}
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Heeft u direct een spoedkoerier nodig?</h3>
            <p className={styles.ctaText}>
              Onze planners staan 24 uur per dag voor u klaar om uw zending binnen 30 minuten in te plannen.
            </p>
            <div className={styles.ctaActions}>
              <a href="tel:+31630037257" className="btn btn-primary">BEL DIRECT: 06 30 03 72 57</a>
              <Link href="/contact" className="btn btn-ghost">ONLINE AANVRAAG DOEN</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
