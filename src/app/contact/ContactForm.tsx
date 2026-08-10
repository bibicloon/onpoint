"use client";

import { useState } from 'react';
import styles from './contact.module.css';
import { CarFront, Truck } from 'lucide-react';

export default function ContactForm() {
  const [vehicle, setVehicle] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    const formData = new FormData(event.currentTarget);
    
    // Web3Forms config
    formData.append("access_key", "b082243b-61e3-4ae9-b3f7-c6d3b8229971");
    formData.append("subject", "Nieuwe transportaanvraag via onpointkoeriers.nl");
    formData.append("from_name", "OnPoint Koeriers");
    // Web3Forms Auto-reply instellingen
    formData.append("autoresponse", "Beste klant,\n\nHartelijk dank voor uw aanvraag bij OnPoint Koeriers. We hebben uw gegevens in goede orde ontvangen.\n\nEén van onze planners neemt binnen 15 tot 30 minuten contact met u op om de zending te bespreken en in te plannen.\n\nMet vriendelijke groet,\n\nTeam OnPoint Koeriers\n06 30 03 72 57\ninfo@onpointkoeriers.nl");
    formData.append("replyto", "onpointkoerier@outlook.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.formWrapper} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ backgroundColor: '#F6F3ED', padding: '3rem', borderRadius: '8px', border: '2px solid #C2CBD3' }}>
          <h3 style={{ color: '#313851', marginBottom: '1rem', fontSize: '1.5rem' }}>Bedankt voor uw aanvraag!</h3>
          <p style={{ color: '#313851', fontSize: '1.1rem', marginBottom: '0' }}>We hebben uw gegevens succesvol ontvangen. Eén van onze planners neemt binnen 15 tot 30 minuten telefonisch contact met u op. U ontvangt tevens een bevestiging per e-mail.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.contactForm} onSubmit={onSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="naam">Naam</label>
            <input type="text" id="naam" name="naam" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bedrijfsnaam">Bedrijfsnaam</label>
            <input type="text" id="bedrijfsnaam" name="bedrijfsnaam" className={styles.formControl} />
          </div>
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mailadres</label>
            <input type="email" id="email" name="email" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefoon">Telefoonnummer</label>
            <input type="tel" id="telefoon" name="telefoon" className={styles.formControl} required />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="ophaallocatie">Ophaallocatie</label>
            <input type="text" id="ophaallocatie" name="ophaallocatie" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bestemming">Bestemming</label>
            <input type="text" id="bestemming" name="bestemming" className={styles.formControl} required />
          </div>
        </div>

        {/* VISUELE VOERTUIGKEUZE */}
        <div className={styles.formGroup}>
          <label style={{ color: '#313851', marginBottom: '8px' }}>Formaat van uw zending:</label>
          <div style={{ display: 'flex', gap: '12px', flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* Kaart 1 */}
            <div 
              onClick={() => setVehicle('Personenauto')}
              style={{
                flex: '1 1 200px',
                cursor: 'pointer',
                backgroundColor: vehicle === 'Personenauto' ? '#C2CBD3' : '#F6F3ED',
                border: vehicle === 'Personenauto' ? '3px solid #313851' : '2px solid #313851',
                borderRadius: '6px',
                padding: '12px',
                boxShadow: '0 4px 12px rgba(49, 56, 81, 0.1)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              <CarFront color="#313851" size={24} />
              <div>
                <h4 style={{ color: '#313851', margin: '0 0 2px 0', fontSize: '0.9rem', fontWeight: 700 }}>Personenauto</h4>
                <p style={{ color: '#313851', margin: 0, fontSize: '0.75rem', lineHeight: '1.2' }}>Documenten & kleine pakketten.</p>
              </div>
            </div>

            {/* Kaart 2 */}
            <div 
              onClick={() => setVehicle('Caddy-formaat')}
              style={{
                flex: '1 1 200px',
                cursor: 'pointer',
                backgroundColor: vehicle === 'Caddy-formaat' ? '#C2CBD3' : '#F6F3ED',
                border: vehicle === 'Caddy-formaat' ? '3px solid #313851' : '2px solid #313851',
                borderRadius: '6px',
                padding: '12px',
                boxShadow: '0 4px 12px rgba(49, 56, 81, 0.1)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              <Truck color="#313851" size={24} />
              <div>
                <h4 style={{ color: '#313851', margin: '0 0 2px 0', fontSize: '0.9rem', fontWeight: 700 }}>Caddy-formaat</h4>
                <p style={{ color: '#313851', margin: 0, fontSize: '0.75rem', lineHeight: '1.2' }}>Voor grotere of meerdere colli.</p>
              </div>
            </div>
          </div>
          {/* Verborgen veld zodat de formulier submissie het oppikt en 'required' is */}
          <input 
            type="text" 
            name="formaat_zending" 
            value={vehicle} 
            onChange={() => {}} 
            required 
            style={{ opacity: 0, height: 0, padding: 0, border: 'none', position: 'absolute' }} 
            tabIndex={-1} 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="bericht">Bericht</label>
          <textarea id="bericht" name="bericht" className={styles.formControl} required></textarea>
        </div>

        {status === 'error' && (
          <p style={{ color: 'red', marginTop: '1rem', marginBottom: '1rem' }}>Er is helaas iets misgegaan. Probeer het opnieuw of bel ons direct.</p>
        )}

        <button type="submit" className={`btn btn-secondary ${styles.submitBtn}`} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Aanvraag versturen...' : 'Verstuur Aanvraag'}
        </button>
      </form>
    </div>
  );
}
