import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import './Countdown.css';

// April 13, 2026 12:22 PM IST
const TARGET_DATE = '2026-04-13T12:22:00+05:30';

function CountdownUnit({ value, label }) {
  return (
    <div className="countdown-unit">
      <div className="countdown-number-wrapper">
        <motion.span
          className="countdown-number"
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="countdown-label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <section className="section section-maroon countdown-section" id="countdown">
      {/* Decorative bg */}
      <div className="countdown-bg-pattern" />

      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle" style={{ color: 'var(--gold-light)' }}>Save the Date</p>
          <h2 className="heading-lg" style={{ color: 'var(--cream)' }}>The Countdown Begins</h2>
          <div className="ornament-divider" style={{ marginBottom: 40 }}>
            <span className="ornament-line" style={{ background: 'linear-gradient(90deg, transparent, var(--gold-light), transparent)' }} />
            <span className="ornament-diamond" style={{ background: 'var(--gold-light)' }} />
            <span className="ornament-line" style={{ background: 'linear-gradient(90deg, transparent, var(--gold-light), transparent)' }} />
          </div>
        </motion.div>

        <motion.div
          className="countdown-grid"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CountdownUnit value={days} label="Days" />
          <div className="countdown-separator">:</div>
          <CountdownUnit value={hours} label="Hours" />
          <div className="countdown-separator">:</div>
          <CountdownUnit value={minutes} label="Minutes" />
          <div className="countdown-separator">:</div>
          <CountdownUnit value={seconds} label="Seconds" />
        </motion.div>

        <motion.p
          className="countdown-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Until the rings are exchanged and two families become one
        </motion.p>
      </div>
    </section>
  );
}
