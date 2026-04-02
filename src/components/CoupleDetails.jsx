import { motion } from 'framer-motion';
import './CoupleDetails.css';

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function PersonCard({ name, father, mother, side, variants }) {
  return (
    <motion.div
      className={`person-card person-card-${side}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="person-ornament">
        <svg viewBox="0 0 100 20" className="person-ornament-svg">
          <path d="M0 10 Q25 0 50 10 Q75 20 100 10" fill="none" stroke="#D4AF37" strokeWidth="1" />
        </svg>
      </div>
      <p className="person-label subtitle">{side === 'bride' ? 'Bride' : 'Groom'}</p>
      <h3 className="person-name script-lg">{name}</h3>
      <div className="person-divider">
        <span className="ornament-line" style={{ width: 40 }} />
        <span className="ornament-diamond" style={{ width: 6, height: 6 }} />
        <span className="ornament-line" style={{ width: 40 }} />
      </div>
      <div className="person-family">
        <p className="body-text">
          <span className="family-label">Father:</span> {father}
        </p>
        <p className="body-text">
          <span className="family-label">Mother:</span> {mother}
        </p>
      </div>
    </motion.div>
  );
}

export default function CoupleDetails() {
  return (
    <section className="section section-cream-light couple-section" id="couple">
      {/* Background mandala */}
      <img src="/assets/mandala.png" alt="" className="mandala-bg mandala-bg-left" />
      <img src="/assets/mandala.png" alt="" className="mandala-bg mandala-bg-right" />

      <div className="container">
        <motion.div
          className="couple-header text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle">The Families</p>
          <h2 className="heading-lg">With Love & Blessings</h2>
          <div className="ornament-divider">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
        </motion.div>

        <div className="couple-grid">
          <PersonCard
            name="Kushwanth Boina"
            father="Tarakeswara Rao Boina"
            mother="Suneetha Boina"
            side="bride"
            variants={fadeInLeft}
          />

          <motion.div
            className="couple-center-ornament"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="couple-ring-icon">
              <svg viewBox="0 0 60 60" width="60" height="60">
                <circle cx="24" cy="30" r="14" fill="none" stroke="#D4AF37" strokeWidth="2" />
                <circle cx="36" cy="30" r="14" fill="none" stroke="#800000" strokeWidth="2" />
                <circle cx="24" cy="30" r="11" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
                <circle cx="36" cy="30" r="11" fill="none" stroke="#800000" strokeWidth="0.5" opacity="0.4" />
              </svg>
            </div>
          </motion.div>

          <PersonCard
            name="Supriya Kotni"
            father="Vijaya Mohana Kotni"
            mother="Sai Geetha Kotni"
            side="groom"
            variants={fadeInRight}
          />
        </div>
      </div>
    </section>
  );
}
