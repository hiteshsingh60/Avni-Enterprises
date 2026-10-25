import { motion } from "framer-motion";

const ease = [0.7, 0, 0.2, 1];

export const MaskLines = ({ lines, delay = 0, className = "", lineClass = "" }) => (
  <span className={className}>
    {lines.map((l, i) => (
      <span key={i} className="block overflow-hidden pb-[0.08em]">
        <motion.span
          className={`block ${lineClass}`}
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, delay: delay + i * 0.12, ease }}
        >
          {l}
        </motion.span>
      </span>
    ))}
  </span>
);

export const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div" }) => {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Comp>
  );
};
