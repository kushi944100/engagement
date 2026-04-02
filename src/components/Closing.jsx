import { motion } from 'framer-motion';
import './Closing.css';

export default function Closing() {
  return (
    <section className="section section-cream closing-section" id="closing">
      {/* Floral decorations */}
      <img src="/assets/floral-corner.png" alt="" className="closing-floral closing-floral-left" />
      <img src="/assets/floral-corner.png" alt="" className="closing-floral closing-floral-right" />

      <div className="container text-center">
        <motion.div
          className="closing-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Decorative om */}
          <motion.div
            className="closing-symbol"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg viewBox="0 0 60 60" width="50" height="50" fill="none">
              <circle cx="30" cy="30" r="28" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="30" cy="30" r="24" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
              <text x="30" y="35" textAnchor="middle" fill="#D4AF37" fontSize="18" fontFamily="serif">✦</text>
            </svg>
          </motion.div>

          <h2 className="closing-heading script-lg" style={{ marginBottom: 16 }}>
            Your Presence is Our Blessing
          </h2>

          <div className="ornament-divider">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>

          <motion.p
            className="closing-message body-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We would be honored to have your presence
            <br />
            to bless the couple on this special day.
          </motion.p>

          <motion.p
            className="closing-quote"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "Two souls with but a single thought,<br />
            two hearts that beat as one."
          </motion.p>

          <motion.div
            className="closing-names"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="script-lg" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Kushwanth</span>
            <span className="closing-amp">&</span>
            <span className="script-lg" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Supriya</span>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="closing-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="ornament-divider">
            <span className="ornament-line" style={{ width: 120 }} />
          </div>
          <p className="closing-footer-text">
            Made with ❤️ for the celebration of love
          </p>
          <p className="closing-footer-text" style={{ fontSize: '0.7rem', marginTop: 4 }}>
            April 13, 2026 · Narasannapeta
          </p>
        </motion.footer>
      </div>

      {/* Sparkles */}
      <div className="closing-sparkles">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="sparkle"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </section>
  );
}
