import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid | OnPoint Koeriers',
  description: 'Lees het privacybeleid van OnPoint Koeriers. Wij gaan zorgvuldig om met uw gegevens.',
};

export default function Privacybeleid() {
  return (
    <main style={{ backgroundColor: '#F6F3ED', padding: '100px 20px', minHeight: '100vh', color: '#313851' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(49, 56, 81, 0.05)' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Privacybeleid</h1>
        
        <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            OnPoint Koeriers hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze privacyverklaring (gebaseerd op de eisen van de AVG/GDPR) leggen wij uit hoe wij omgaan met de informatie die wij via onze website en diensten verzamelen.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Persoonsgegevens die wij verwerken</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Wij verwerken persoonsgegevens doordat u gebruik maakt van onze logistieke diensten en/of omdat u deze zelf aan ons verstrekt, bijvoorbeeld via het contactformulier. De gegevens die wij mogelijk verwerken zijn:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '1.5rem' }}>
            <li>Voor- en achternaam</li>
            <li>Bedrijfsnaam</li>
            <li>Telefoonnummer</li>
            <li>E-mailadres</li>
            <li>Ophaal- en afleveradressen (inclusief contactpersonen op locatie)</li>
            <li>IP-adres (via functionele en analytische cookies)</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Met welk doel wij gegevens verwerken</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Wij verwerken uw persoonsgegevens primair voor het correct kunnen uitvoeren van de transportovereenkomst: het tijdig afhalen en bezorgen van uw zending. Daarnaast gebruiken wij uw gegevens om contact op te kunnen nemen over de voortgang van de rit, voor facturatiedoeleinden, en om onze website-ervaring te verbeteren.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Cookies, of vergelijkbare technieken</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            OnPoint Koeriers gebruikt alleen technische, functionele en analytische cookies die geen inbreuk maken op uw privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op uw computer, tablet of smartphone. U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Hoe lang wij persoonsgegevens bewaren</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Wij bewaren uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld, en om te voldoen aan wettelijke (fiscale) bewaarplichten (zoals de 7-jarige bewaarplicht voor facturen van de Belastingdienst).
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Gegevens inzien, aanpassen of verwijderen</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door OnPoint Koeriers.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Contact</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Heeft u vragen over ons privacybeleid of wilt u gebruikmaken van uw rechten omtrent persoonsgegevens? Neem dan contact met ons op via onpointkoerier@outlook.com.
          </p>
        </div>
      </div>
    </main>
  );
}
