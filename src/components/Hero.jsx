import { motion } from 'framer-motion';
import './Hero.css';

const ScrollIndicator = () => (
  <motion.div
    className="scroll-indicator"
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
      <rect x="1" y="1" width="22" height="34" rx="11" stroke="#D4AF37" strokeWidth="2" />
      <motion.circle
        cx="12"
        cy="10"
        r="3"
        fill="#D4AF37"
        animate={{ cy: [10, 22, 10] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
    <span className="scroll-text">Scroll Down</span>
  </motion.div>
);

const FloralCorner = ({ position }) => (
  <img
    src="/assets/floral-corner.png"
    alt=""
    className={`hero-floral hero-floral-${position}`}
    loading="eager"
  />
);

const GaneshSvg = () => (
  <svg viewBox="0 0 120 120" className="ganesh-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
    <circle cx="60" cy="60" r="48" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
    {/* Stylized Om/Ganesh Symbol */}
    <path d="M60 20C45 20 35 30 35 42C35 52 42 58 50 58C48 62 44 65 38 66C42 70 50 72 58 68C56 74 52 80 46 84C52 86 60 84 66 78C70 82 72 88 70 94C76 90 78 82 76 74C82 76 88 74 92 70C86 68 80 68 76 66C82 62 86 56 86 48C86 34 76 20 60 20Z"
      fill="#D4AF37" opacity="0.8" />
    <path d="M52 38C52 35 55 32 58 32" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M68 38C68 35 65 32 62 32" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="54" cy="42" r="2" fill="#800000" />
    <circle cx="66" cy="42" r="2" fill="#800000" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background mandala */}
      <img src="/assets/mandala.png" alt="" className="hero-mandala hero-mandala-center" />

      {/* Floral Corners */}
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      {/* Ornamental arch */}
      <div className="hero-arch">
        <svg viewBox="0 0 400 80" className="arch-svg" preserveAspectRatio="none">
          <path d="M0 80 Q200 0 400 80" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M20 80 Q200 10 380 80" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <div className="hero-content">
        {/* Ganesh Idol */}
        <motion.div
          className="ganesh-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src="/assets/ganesh.png"
            alt="Lord Ganesha"
            className="ganesh-image"
          />
        </motion.div>

        {/* Blessing Text */}
        <motion.p
          className="hero-blessing subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          ఓం శ్రీ గణేశాయ నమః
        </motion.p>

        <motion.p
          className="hero-subtext body-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          With the blessings of Lord Ganesha,
          <br />
          we invite you to celebrate the engagement ceremony of
        </motion.p>

        {/* Couple Names */}
        <motion.div
          className="hero-names"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="hero-name script-xl">Kushwanth</span>
          <span className="hero-ampersand">&</span>
          <span className="hero-name script-xl">Supriya</span>
        </motion.div>

        <motion.div
          className="ornament-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <span className="ornament-line" />
          <span className="ornament-diamond" />
          <span className="ornament-line" />
        </motion.div>

        <motion.p
          className="hero-tagline body-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          Two hearts, one promise, and a lifetime to share
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </section>
  );
}
