import { useState, useEffect, useRef } from "react";
import { Phone, Mail, X } from "lucide-react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import ContactModal from "./ContactModal";

const playNotificationSound = () => {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const now = ctx.currentTime;

  const frequencies = [830, 1050];
  frequencies.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now + i * 0.15);
    gain.gain.linearRampToValueAtTime(0.15, now + i * 0.15 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + i * 0.15);
    osc.stop(now + i * 0.15 + 0.3);
  });
};

const FloatingPhone = () => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"phone" | "mail">("phone");
  const phoneControls = useAnimationControls();
  const idleTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const spinTimerRef = useRef<ReturnType<typeof setInterval>>();
  const isSpinningRef = useRef(false);

  const vibrate = () => {
    if (isSpinningRef.current || expanded) return;
    phoneControls.start({
      rotate: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const scheduleIdle = () => {
    clearInterval(idleTimerRef.current as unknown as number);
    idleTimerRef.current = setInterval(vibrate, 10000);
  };

  const doSpin = async () => {
    if (expanded) return;
    isSpinningRef.current = true;
    try { playNotificationSound(); } catch (e) { /* autoplay blocked */ }
    await phoneControls.start({
      rotate: [0, -360, 0],
      transition: { duration: 1.2, ease: "easeInOut" },
    });
    isSpinningRef.current = false;
  };

  useEffect(() => {
    scheduleIdle();
    spinTimerRef.current = setInterval(doSpin, 40000);

    return () => {
      clearInterval(idleTimerRef.current as unknown as number);
      clearInterval(spinTimerRef.current);
    };
  }, [phoneControls]);

  const handleAction = (mode: "phone" | "mail") => {
    setModalMode(mode);
    setModalOpen(true);
    setExpanded(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {expanded && (
            <>
              {/* Message option */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                onClick={() => handleAction("mail")}
                className="flex items-center gap-3"
              >
                <span className="px-4 py-2 bg-foreground/90 text-primary-foreground text-sm font-semibold rounded-full shadow-lg whitespace-nowrap">
                  Wyślij wiadomość
                </span>
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent shadow-lg">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
              </motion.button>

              {/* Call option */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleAction("phone")}
                className="flex items-center gap-3"
              >
                <span className="px-4 py-2 bg-foreground/90 text-primary-foreground text-sm font-semibold rounded-full shadow-lg whitespace-nowrap">
                  Zadzwoń
                </span>
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent shadow-lg">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Main FAB button */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg"
          style={{ backgroundColor: expanded ? "hsl(var(--foreground))" : "hsl(var(--foreground))" }}
          aria-label={expanded ? "Zamknij" : "Kontakt"}
          animate={expanded ? {} : phoneControls}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-primary-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="phone"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-6 h-6 text-primary-foreground" style={{ color: "#25D366" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} mode={modalMode} />
    </>
  );
};

export default FloatingPhone;
