import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Kolom 1 */}
        <div className={styles.column}>
          <h3 className={styles.heading}>OnPoint Koeriers</h3>
          <p className={styles.text}>
            Uw betrouwbare partner voor spoedtransport. Snel, discreet en uiterst wendbaar in elke binnenstad dankzij ons compacte wagenpark. Binnen 30 minuten onderweg.
          </p>
        </div>

        {/* Kolom 2 */}
        <div className={styles.column}>
          <h4 className={styles.subheading}>Snel naar</h4>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="/diensten" className={styles.link}>Diensten</Link></li>
            <li><Link href="/tarieven" className={styles.link}>Tarieven</Link></li>
            <li><Link href="/over-ons" className={styles.link}>Over Ons</Link></li>
            <li><Link href="/contact" className={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div className={styles.column}>
          <h4 className={styles.subheading}>Werkgebieden</h4>
          <div className={styles.seoList}>
            <Link href="/werkgebied/amsterdam" className={styles.seoLink}>Amsterdam</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/schiphol" className={styles.seoLink}>Schiphol</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/rotterdam" className={styles.seoLink}>Rotterdam</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/den-haag" className={styles.seoLink}>Den Haag</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/eindhoven" className={styles.seoLink}>Eindhoven</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/breda" className={styles.seoLink}>Breda</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/tilburg" className={styles.seoLink}>Tilburg</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/haarlem" className={styles.seoLink}>Haarlem</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/zaandam" className={styles.seoLink}>Zaandam</Link><span className={styles.seoSeparator}>•</span>
            <Link href="/werkgebied/alkmaar" className={styles.seoLink}>Alkmaar</Link>
          </div>
        </div>

        {/* Kolom 4 */}
        <div className={styles.column}>
          <h4 className={styles.subheading}>Contact</h4>
          <ul className={styles.list}>
            <li><a href="tel:0630037257" className={styles.link}>06 30 03 72 57</a></li>
            <li><a href="mailto:onpointkoerier@outlook.com" className={styles.link}>onpointkoerier@outlook.com</a></li>
            <li className={styles.textItem}>Vestiging: Amsterdam</li>
            <li className={styles.textItem}>KVK: 42077914 | BTW: NL005478178B19</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} OnPoint Koeriers. Alle rechten voorbehouden. | Website laten maken door <a href="https://webvastgoed.nl" target="_blank" rel="noopener noreferrer" className={styles.agencyLink}>Webvastgoed.nl</a>
          </p>
          <div className={styles.legalLinks}>
            <Link href="/algemene-voorwaarden" className={styles.link}>Algemene Voorwaarden</Link>
            <Link href="/privacybeleid" className={styles.link}>Privacybeleid</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
