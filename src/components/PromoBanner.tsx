import { X, FileText, ClipboardCheck, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PromoBannerProps {
  visible: boolean;
  onClose: () => void;
}

const PromoBanner = ({ visible, onClose }: PromoBannerProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-background border border-border shadow-2xl rounded-3xl max-w-lg w-[90%] p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Zamknij"
            >
              <X className="w-5 h-5" />
            </button>

            <h3
              className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Profesjonalna obsługa
            </h3>
            <p className="text-muted-foreground text-center text-sm mb-8">
              Każda realizacja objęta pełną dokumentacją
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/50 border border-border">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-foreground text-center">
                  Umowa
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/50 border border-border">
                  <ClipboardCheck className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-foreground text-center">
                  Protokół odbiorczy
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/50 border border-border">
                  <ShieldCheck className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-foreground text-center">
                  Gwarancja
                </span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  onClose();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  history.replaceState(null, "", window.location.pathname);
                }}
                className="inline-block px-8 py-3 bg-foreground text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors rounded-full"
              >
                Sprawdź ofertę →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoBanner;
