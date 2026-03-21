"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "pdpa-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="mx-auto max-w-5xl px-4 pb-6 sm:px-6">
            <div
              className="flex flex-col items-center gap-4 rounded-none border border-border
                         bg-cream/90 px-6 py-5 shadow-lg backdrop-blur-md
                         sm:flex-row sm:justify-between sm:gap-6"
            >
              {/* Text */}
              <p className="text-center text-sm leading-relaxed text-text sm:text-left">
                เว็บไซต์นี้ใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งานของคุณ{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 transition-colors hover:text-primary"
                >
                  นโยบายความเป็นส่วนตัว
                </a>
              </p>

              {/* Buttons */}
              <div className="flex shrink-0 items-center gap-3">
                <button
                  onClick={handleDecline}
                  className="btn-outline !px-5 !py-2.5 text-xs"
                >
                  ปฏิเสธ
                </button>
                <button
                  onClick={handleAccept}
                  className="btn-primary !px-5 !py-2.5 text-xs"
                >
                  ยอมรับทั้งหมด
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
