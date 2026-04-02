import { motion } from 'framer-motion';
import './Venue.css';

export default function Venue() {
  return (
    <section className="section section-blush venue-section" id="venue">
      <img src="/assets/mandala.png" alt="" className="mandala-bg mandala-bg-right" style={{ opacity: 0.04 }} />

      <div className="container">
        <motion.div
          className="venue-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle">The Venue</p>
          <h2 className="heading-lg">Where We Celebrate</h2>
          <div className="ornament-divider">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
        </motion.div>

        <motion.div
          className="venue-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="venue-card-inner">
            {/* Map */}
            <div className="venue-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.0!2d84.0444!3d18.4138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzQ5LjciTiA4NMKwMDInMzkuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              />
            </div>

            {/* Info */}
            <div className="venue-info">
              <div className="venue-icon-wrapper">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
                  <path d="M24 4C16.268 4 10 10.268 10 18C10 30 24 44 24 44C24 44 38 30 38 18C38 10.268 31.732 4 24 4Z" stroke="#D4AF37" strokeWidth="2" fill="rgba(212,175,55,0.1)" />
                  <circle cx="24" cy="18" r="6" stroke="#800000" strokeWidth="2" fill="rgba(128,0,0,0.1)" />
                </svg>
              </div>

              <h3 className="venue-name heading-md">Meghana Convention</h3>
              <p className="venue-location body-text">Narasannapeta</p>

              <div className="venue-details">
                <div className="venue-detail-row">
                  <span className="venue-detail-icon">🗓</span>
                  <span className="body-text">April 13, 2026</span>
                </div>
                <div className="venue-detail-row">
                  <span className="venue-detail-icon">⏰</span>
                  <span className="body-text">12:22 PM onwards</span>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/fjb7nLP5shebw9Zt7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary venue-btn"
                id="venue-map-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                View on Map
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
