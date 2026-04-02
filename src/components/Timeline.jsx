import { motion } from 'framer-motion';
import './Timeline.css';

const timelineItems = [
  {
    time: '11:00 AM',
    title: 'Arrival & Welcome',
    description: 'Guests are welcomed with traditional rituals and refreshments',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M16 4L20 12H12L16 4Z" fill="#D4AF37" />
        <rect x="10" y="12" width="12" height="16" rx="2" stroke="#D4AF37" strokeWidth="1.5" fill="rgba(212,175,55,0.1)" />
        <path d="M6 28H26" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    time: '12:22 PM',
    title: 'Ring Exchange Ceremony',
    description: 'The auspicious moment — exchange of rings and blessings',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <circle cx="12" cy="16" r="8" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="20" cy="16" r="8" stroke="#800000" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    time: '1:00 PM',
    title: 'Blessings',
    description: 'Elders bless the newly engaged couple with love and wisdom',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M16 6C12 6 8 10 8 14C8 22 16 28 16 28C16 28 24 22 24 14C24 10 20 6 16 6Z" fill="rgba(212,175,55,0.15)" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M12 14L15 17L21 11" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    time: '1:30 PM',
    title: 'Grand Lunch',
    description: 'A grand feast celebrating togetherness and joy',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <ellipse cx="16" cy="22" rx="12" ry="4" stroke="#D4AF37" strokeWidth="1.5" fill="rgba(212,175,55,0.1)" />
        <path d="M4 22C4 18 10 8 16 8C22 8 28 18 28 22" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="14" r="2" fill="#800000" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Timeline() {
  return (
    <section className="section section-cream-light timeline-section" id="timeline">
      <div className="container">
        <motion.div
          className="timeline-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle">The Journey</p>
          <h2 className="heading-lg">Celebration Flow</h2>
          <div className="ornament-divider">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
        </motion.div>

        <motion.div
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="timeline-line" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
              variants={itemVariants}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-inner">{item.icon}</div>
              </div>
              <div className="timeline-content">
                <span className="timeline-time subtitle" style={{ fontSize: '0.65rem' }}>{item.time}</span>
                <h4 className="timeline-title heading-md" style={{ fontSize: '1.1rem' }}>{item.title}</h4>
                <p className="timeline-desc body-text" style={{ fontSize: '0.85rem' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
