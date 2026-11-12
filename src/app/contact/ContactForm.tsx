"use client";

import { useState } from 'react';
import styles from './contact.module.css';
import { CarFront, Truck } from 'lucide-react';

export default function ContactForm() {
  const [vehicle, setVehicle] = useState('Personenauto');
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
    formData.append("autoresponse", "Beste klant,\n\nHartelijk dank voor uw aanvraag bij OnPoint Koeriers. We hebben uw gegevens in goede orde ontvangen.\n\nEén van onze planners neemt binnen 15 tot 30 minuten contact met u op om de zending te bespreken en in te plannen.\n\nMet vriendelijke groet,\n\nTeam OnPoint Koeriers\nonpointkoerier@outlook.com");
    formData.append("replyto", "onpointkoerier@outlook.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-18273397053/kf8TCLvw4MYcEL3St41E'
          });
        }
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
            <label htmlFor="naam">Naam *</label>
            <input type="text" id="naam" name="naam" autoComplete="name" placeholder="Uw volledige naam" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bedrijfsnaam">Bedrijfsnaam</label>
            <input type="text" id="bedrijfsnaam" name="bedrijfsnaam" autoComplete="organization" placeholder="Optioneel" className={styles.formControl} />
          </div>
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mailadres *</label>
            <input type="email" id="email" name="email" autoComplete="email" placeholder="naam@bedrijf.nl" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefoon">Telefoonnummer *</label>
            <input type="tel" id="telefoon" name="telefoon" autoComplete="tel" placeholder="Voor directe terugkoppeling" className={styles.formControl} required />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="ophaallocatie">Ophaallocatie (Stad / Postcode) *</label>
            <input type="text" id="ophaallocatie" name="ophaallocatie" placeholder="Bijv. Amsterdam, Zuidas" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bestemming">Bestemming (Stad / Postcode) *</label>
            <input type="text" id="bestemming" name="bestemming" placeholder="Bijv. Rotterdam, Waalhaven" className={styles.formControl} required />
          </div>
        </div>

        {/* VISUELE VOERTUIGKEUZE */}
        <div className={styles.formGroup}>
          <label style={{ color: '#313851', marginBottom: '8px' }}>Formaat van uw zending:</label>
          <div className={styles.vehicleGrid} role="radiogroup" aria-label="Formaat van uw zending">
            {/* Kaart 1 */}
            <button
              type="button"
              onClick={() => setVehicle('Personenauto')}
              aria-pressed={vehicle === 'Personenauto'}
              className={styles.vehicleCard}
              style={{
                backgroundColor: vehicle === 'Personenauto' ? '#C2CBD3' : '#F6F3ED',
                border: vehicle === 'Personenauto' ? '3px solid #313851' : '1.5px solid #313851',
                textAlign: 'left',
                fontFamily: 'inherit',
              }}
            >
              <CarFront color="#313851" size={24} aria-hidden="true" />
              <div>
                <h4 style={{ color: '#313851', margin: '0 0 2px 0', fontSize: '0.9rem', fontWeight: 700 }}>Personenauto (€ 0,60/km)</h4>
                <p style={{ color: '#313851', margin: 0, fontSize: '0.75rem', lineHeight: '1.2' }}>Documenten & kleine pakketten.</p>
              </div>
            </button>

            {/* Kaart 2 */}
            <button
              type="button"
              onClick={() => setVehicle('Caddy-formaat')}
              aria-pressed={vehicle === 'Caddy-formaat'}
              className={styles.vehicleCard}
              style={{
                backgroundColor: vehicle === 'Caddy-formaat' ? '#C2CBD3' : '#F6F3ED',
                border: vehicle === 'Caddy-formaat' ? '3px solid #313851' : '1.5px solid #313851',
                textAlign: 'left',
                fontFamily: 'inherit',
              }}
            >
              <Truck color="#313851" size={24} aria-hidden="true" />
              <div>
                <h4 style={{ color: '#313851', margin: '0 0 2px 0', fontSize: '0.9rem', fontWeight: 700 }}>Caddy-formaat (€ 0,65/km)</h4>
                <p style={{ color: '#313851', margin: 0, fontSize: '0.75rem', lineHeight: '1.2' }}>Voor grotere of meerdere colli.</p>
              </div>
            </button>
          </div>
          <input 
            type="hidden" 
            name="formaat_zending" 
            value={vehicle} 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="bericht">Toelichting of gewenste ophaaltijd (optioneel)</label>
          <textarea id="bericht" name="bericht" placeholder="Bijv. direct ophalen, uiterlijke aflevertijd of referentienummer..." className={styles.formControl}></textarea>
        </div>

        {status === 'error' && (
          <p style={{ color: '#b91c1c', fontWeight: 600, marginTop: '1rem', marginBottom: '1rem' }}>Er is helaas iets misgegaan bij het versturen. Gebruik onze directe belknop of WhatsApp-knop voor onmiddellijke hulp.</p>
        )}

        <button type="submit" className={`btn btn-secondary ${styles.submitBtn}`} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Aanvraag versturen...' : 'Direct Ritprijs & Planning Aanvragen'}
        </button>
        <p style={{ color: '#313851', fontSize: '0.82rem', textAlign: 'center', marginTop: '10px', marginBottom: 0, opacity: 0.9 }}>
          ✓ Binnen 15 minuten telefonische reactie van onze planner • 100% vrijblijvend
        </p>
      </form>
    </div>
  );
}
