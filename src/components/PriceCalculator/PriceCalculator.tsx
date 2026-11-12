'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CarFront, Truck, Calculator } from 'lucide-react';
import styles from './PriceCalculator.module.css';

const ROUTE_PRESETS = [
  { label: 'Amsterdam → Utrecht (45 km)', km: 45 },
  { label: 'Amsterdam → Rotterdam (75 km)', km: 75 },
  { label: 'Rotterdam → Eindhoven (110 km)', km: 110 },
  { label: 'Schiphol → Antwerpen (160 km)', km: 160 },
  { label: 'Utrecht → Ruhrgebied (195 km)', km: 195 },
];

export default function PriceCalculator() {
  const [vehicle, setVehicle] = useState<'auto' | 'caddy'>('auto');
  const [distance, setDistance] = useState<number>(75);
  const [isNightOrWeekend, setIsNightOrWeekend] = useState<boolean>(false);

  const startTariff = 25;
  const kmRate = vehicle === 'auto' ? 0.60 : 0.65;
  const distanceCost = distance * kmRate;
  const subtotal = startTariff + distanceCost;
  const surcharge = isNightOrWeekend ? subtotal * 0.25 : 0;
  const total = subtotal + surcharge;

  const formatEuro = (val: number) =>
    val.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const vehicleLabel = vehicle === 'auto' ? 'Personenauto (€ 0,60/km)' : 'Caddy Bestelwagen (€ 0,65/km)';
  const whatsappMessage = encodeURIComponent(
    `Hallo OnPoint Koeriers, ik wil graag een spoedrit aanvragen:\n- Voertuig: ${vehicleLabel}\n- Geschatte afstand: ${distance} km\n- Indicatieprijs: € ${formatEuro(total)} ex. BTW`
  );

  return (
    <div id="calculator" className={styles.calculatorCard}>
      <div className={styles.header}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
          <Calculator size={36} color="#313851" aria-hidden="true" />
        </div>
        <h2 className={styles.title}>Interactieve Ritprijs-Calculator</h2>
        <p className={styles.subtitle}>
          Bereken direct online een heldere prijsindicatie voor uw dedicated spoedrit van postcode tot postcode.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.controlsColumn}>
          {/* 1. Voertuigkeuze */}
          <div className={styles.fieldGroup}>
            <span className={styles.label}>1. Kies uw voertuigtype:</span>
            <div className={styles.vehicleButtons} role="group" aria-label="Kies uw voertuigtype">
              <button
                type="button"
                onClick={() => setVehicle('auto')}
                className={`${styles.vehicleBtn} ${vehicle === 'auto' ? styles.vehicleBtnActive : ''}`}
                aria-pressed={vehicle === 'auto'}
              >
                <CarFront size={26} aria-hidden="true" />
                <span className={styles.vehicleName}>Personenauto</span>
                <span className={styles.vehicleRate}>€ 0,60 per km</span>
              </button>
              <button
                type="button"
                onClick={() => setVehicle('caddy')}
                className={`${styles.vehicleBtn} ${vehicle === 'caddy' ? styles.vehicleBtnActive : ''}`}
                aria-pressed={vehicle === 'caddy'}
              >
                <Truck size={26} aria-hidden="true" />
                <span className={styles.vehicleName}>Caddy Bestelbus</span>
                <span className={styles.vehicleRate}>€ 0,65 per km</span>
              </button>
            </div>
          </div>

          {/* 2. Afstand */}
          <div className={styles.fieldGroup}>
            <label htmlFor="distance-input" className={styles.label}>
              <span>2. Enkele afstand (van ophaal- naar afleveradres):</span>
            </label>
            <div className={styles.distanceInputRow}>
              <input
                id="distance-slider"
                type="range"
                min={10}
                max={800}
                step={5}
                value={distance}
                onChange={(e) => setDistance(Math.max(1, Number(e.target.value)))}
                className={styles.slider}
                aria-label="Afstand in kilometers schuifbalk"
              />
              <div className={styles.numberInputWrapper}>
                <input
                  id="distance-input"
                  type="number"
                  min={1}
                  max={2500}
                  value={distance}
                  onChange={(e) => setDistance(Math.max(1, Number(e.target.value) || 0))}
                  className={styles.numberInput}
                  aria-label="Afstand in kilometers"
                />
                <span className={styles.unit}>km</span>
              </div>
            </div>

            <div>
              <div className={styles.presetsLabel}>Veelgevraagde trajecten:</div>
              <div className={styles.presetRow}>
                {ROUTE_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setDistance(preset.km)}
                    className={`${styles.presetBtn} ${distance === preset.km ? styles.presetBtnActive : ''}`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Nacht / Weekend optie */}
          <div className={styles.fieldGroup}>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={isNightOrWeekend}
                onChange={(e) => setIsNightOrWeekend(e.target.checked)}
                className={styles.checkbox}
              />
              <span>Spoedrit in de nacht (22:00 – 06:00) of in het weekend (+25%)</span>
            </label>
          </div>
        </div>

        {/* Resultaat Kolom */}
        <div className={styles.resultBox} aria-live="polite">
          <div>
            <div className={styles.resultTitle}>Geschatte Ritprijs</div>
            <div className={styles.totalPrice}>€ {formatEuro(total)}</div>
            <div className={styles.vatNote}>Exclusief 21% BTW • Geen verborgen kosten</div>

            <div className={styles.breakdown}>
              <div className={styles.breakdownRow}>
                <span>Starttarief / voorrijkosten:</span>
                <strong>€ {formatEuro(startTariff)}</strong>
              </div>
              <div className={styles.breakdownRow}>
                <span>
                  Afstand ({distance} km × € {formatEuro(kmRate)}):
                </span>
                <strong>€ {formatEuro(distanceCost)}</strong>
              </div>
              {isNightOrWeekend && (
                <div className={styles.breakdownRow}>
                  <span>Nacht- / weekendtoeslag (25%):</span>
                  <strong>€ {formatEuro(surcharge)}</strong>
                </div>
              )}
              <div className={styles.breakdownRow}>
                <span>Eerste 15 min. laad-/lostijd:</span>
                <strong>Gratis</strong>
              </div>
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.primaryCta}>
              PLAN DEZE RIT DIRECT IN →
            </Link>
            <a
              href={`https://wa.me/31630037257?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryCta}
              aria-label="Stuur deze ritprijs berekening direct via WhatsApp naar OnPoint Koeriers"
            >
              VRAAG DIRECT AAN VIA WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
