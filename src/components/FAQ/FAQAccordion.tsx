"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQAccordion.module.css';
import { FAQItem, faqData } from '@/data/faqData';

interface FAQAccordionProps {
  items?: FAQItem[];
}

export default function FAQAccordion({ items = faqData }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for UX

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionWrapper}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
          >
            <button
              className={styles.button}
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <div className={`${styles.iconWrapper} ${isOpen ? styles.iconRotated : ''}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            {isOpen && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
