import { motion } from 'framer-motion';
import './EventDetails.css';

const events = [
  {
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
        <circle cx="22" cy="28" r="14" stroke="#D4AF37" strokeWidth="2.5" />
        <circle cx="42" cy="28" r="14" stroke="#D4AF37" strokeWidth="2.5" />
        <path d="M32 14L34 8L36 14" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="34" cy="6" r="3" fill="#D4AF37" opacity="0.6" />
        <circle cx="22" cy="28" r="10" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
        <circle cx="42" cy="28" r="10" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    title: 'Ring Exchange Ceremony',
    subtitle: 'Engagement',
    description: 'A sacred moment of promise and togetherness',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
        <rect x="8" y="16" width="48" height="40" rx="6" stroke="#D4AF37" strokeWidth="2" />
        <path d="M8 28H56" stroke="#D4AF37" strokeWidth="2" />
        <path d="M20 8V20" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 8V20" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <text x="32" y="46" textAnchor="middle" fill="#800000" fontFamily="Playfair Display" fontSize="16" fontWeight="bold">13</text>
        <text x="32" y="37" textAnchor="middle" fill="#D4AF37" fontFamily="Poppins" fontSize="8">APR</text>
      </svg>
    ),
    title: 'April 13, 2026',
    subtitle: 'Date',
    description: 'Save the date for the auspicious ceremony',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
        <circle cx="32" cy="32" r="26" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="32" cy="32" r="22" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
        <line x1="32" y1="32" x2="32" y2="16" stroke="#800000" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="32" x2="44" y2="38" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3" fill="#D4AF37" />
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={32 + 23 * Math.cos((i * 30 - 90) * Math.PI / 180)}
            cy={32 + 23 * Math.sin((i * 30 - 90) * Math.PI / 180)}
            r={i % 3 === 0 ? 2 : 1}
            fill="#D4AF37"
            opacity={i % 3 === 0 ? 1 : 0.5}
          />
        ))}
      </svg>
    ),
    title: '12:22 PM',
    subtitle: 'Muhurtham',
    description: 'The auspicious time for the ring exchange',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function EventDetails() {
  return (
    <section className="section section-cream event-section" id="event">
      <div className="container">
        <motion.div
          className="event-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle">Celebration Details</p>
          <h2 className="heading-lg">The Engagement Ceremony</h2>
          <div className="ornament-divider">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
        </motion.div>

        <motion.div
          className="event-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {events.map((event, index) => (
            <motion.div key={index} className="event-card card" variants={cardVariants}>
              <div className="event-icon">{event.icon}</div>
              <p className="event-subtitle subtitle" style={{ fontSize: '0.65rem' }}>{event.subtitle}</p>
              <h3 className="event-title heading-md">{event.title}</h3>
              <p className="event-description body-text">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
