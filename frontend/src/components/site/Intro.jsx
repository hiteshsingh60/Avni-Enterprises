import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const INTRO_DELAY = 2.1;
const ease = [0.7, 0, 0.2, 1];

export const Intro = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), INTRO_DELAY * 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="logo-intro"
          onClick={() => setShow(false)}
          className="fixed inset-0 z-[70] grid place-items-center bg-[#07090E] cursor-pointer"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="relative w-[78vw] max-w-[440px] aspect-[1115/274]">
            <svg viewBox="0 0 1115 274" className="absolute inset-0 h-full w-full overflow-visible">
              <motion.rect
                x="7" y="7" width="359" height="240" fill="none" stroke="#F5B34A" strokeWidth="7"
                initial={{ pathLength: 0, opacity: 1 }} animate={{ pathLength: 1, opacity: 0 }}
                transition={{ pathLength: { duration: 0.9, ease: "easeInOut" }, opacity: { delay: 1.5, duration: 0.3 } }}
              />
              <motion.line
                x1="0" y1="290" x2="1115" y2="290" stroke="#F5B34A" strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0.8 }} animate={{ pathLength: 1, opacity: 0 }}
                transition={{ duration: 1.4, delay: 0.3, ease }}
              />
            </svg>
            <motion.img
              src="/images/logo-light.png" alt="Avni Enterprises"
              className="absolute inset-0 h-full w-full"
              initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
