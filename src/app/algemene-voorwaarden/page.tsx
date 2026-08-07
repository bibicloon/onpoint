import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | OnPoint Koeriers',
  description: 'De algemene voorwaarden van OnPoint Koeriers.',
};

export default function AlgemeneVoorwaarden() {
  return (
    <main style={{ backgroundColor: '#F6F3ED', padding: '100px 20px', minHeight: '100vh', color: '#313851' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(49, 56, 81, 0.05)' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Algemene Voorwaarden</h1>
        
        <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Bedrijfsgegevens:</strong><br />
            OnPoint Koeriers<br />
            Gevestigd te: Amsterdam<br />
            KVK-nummer: 42077914<br />
            BTW-nummer: NL005478178B19
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Artikel 1. Definities en Toepasselijkheid</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, werkzaamheden, opdrachten en overeenkomsten tussen OnPoint Koeriers en een opdrachtgever. Afwijkingen op deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Artikel 2. Uitvoering van de Overeenkomst (Spoedtransport)</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            1. OnPoint Koeriers zal de overeenkomst naar beste inzicht en vermogen uitvoeren als goed huisvader.<br />
            2. Het transport wordt exclusief en direct zonder overslag uitgevoerd (100% dedicated), tenzij anders overeengekomen.<br />
            3. De opdrachtgever draagt er zorg voor dat alle gegevens, waarvan OnPoint Koeriers aangeeft dat deze noodzakelijk zijn voor het uitvoeren van de opdracht, tijdig worden verstrekt.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Artikel 3. Tarieven en Betalingstermijnen</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            1. Alle vermelde tarieven zijn exclusief BTW en eventuele overige heffingen (zoals tolkosten en veerdiensten).<br />
            2. Facturatie vindt plaats direct na of periodiek tijdens de uitvoering van de opdracht.<br />
            3. Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders is overeengekomen.<br />
            4. Bij overschrijding van de betalingstermijn is de opdrachtgever van rechtswege in verzuim en is de wettelijke (handels)rente verschuldigd.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Artikel 4. Aansprakelijkheid</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            1. OnPoint Koeriers is uitsluitend aansprakelijk voor directe schade die het gevolg is van opzet of bewuste roekeloosheid aan de zijde van de koerier.<br />
            2. OnPoint Koeriers is nimmer aansprakelijk voor indirecte schade, daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie.<br />
            3. In alle gevallen is de aansprakelijkheid van OnPoint Koeriers beperkt tot het factuurbedrag van de specifieke rit, of tot het bedrag dat door de transportverzekering wordt gedekt en uitgekeerd. Bepalingen uit het AVC (Algemene Vervoerkondities) en het CMR-verdrag zijn tevens van toepassing waar relevant.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Artikel 5. Overmacht</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Onder overmacht wordt mede verstaan: extreme weersomstandigheden, wegafsluitingen, onvoorziene files, stakingen, ongevallen op de route en overheidsmaatregelen die de uitvoering van de opdracht belemmeren. In geval van overmacht is OnPoint Koeriers gerechtigd de opdracht op te schorten of de overeenkomst te ontbinden zonder verplichting tot schadevergoeding.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Artikel 6. Toepasselijk Recht</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Op elke overeenkomst tussen OnPoint Koeriers en de opdrachtgever is uitsluitend Nederlands recht van toepassing. Geschillen zullen worden voorgelegd aan de bevoegde rechter in het arrondissement waar OnPoint Koeriers gevestigd is.
          </p>
        </div>
      </div>
    </main>
  );
}
