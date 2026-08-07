"use client";

import { useState } from 'react';
import styles from './contact.module.css';
import { CarFront, Truck } from 'lucide-react';

export default function ContactForm() {
  const [vehicle, setVehicle] = useState('');

  return (
    <div className={styles.formWrapper}>
      <form className={styles.contactForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="naam">Naam</label>
            <input type="text" id="naam" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bedrijfsnaam">Bedrijfsnaam</label>
            <input type="text" id="bedrijfsnaam" className={styles.formControl} />
          </div>
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mailadres</label>
            <input type="email" id="email" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefoon">Telefoonnummer</label>
            <input type="tel" id="telefoon" className={styles.formControl} required />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="ophaallocatie">Ophaallocatie</label>
            <input type="text" id="ophaallocatie" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bestemming">Bestemming</label>
            <input type="text" id="bestemming" className={styles.formControl} required />
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
          <textarea id="bericht" className={styles.formControl} required></textarea>
        </div>

        <button type="button" className={`btn btn-secondary ${styles.submitBtn}`}>Verstuur Aanvraag</button>
      </form>
    </div>
  );
}
