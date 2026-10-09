import { Phone, MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type ContactMode = "phone" | "mail";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  mode?: ContactMode;
}

const whatsappMessage = (
  <a
    href="https://wa.me/48666686691"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-5 py-4 border border-border hover:bg-accent/30 transition-colors"
  >
    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
    <div>
      <span className="text-sm font-semibold text-foreground block">WhatsApp</span>
      <span className="text-xs text-muted-foreground">Wyślij wiadomość</span>
    </div>
  </a>
);

const whatsappCall = (
  <a
    href="https://wa.me/48666686691"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-5 py-4 border border-border hover:bg-accent/30 transition-colors"
  >
    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
    <div>
      <span className="text-sm font-semibold text-foreground block">Zadzwoń WhatsApp</span>
      <span className="text-xs text-muted-foreground">Połączenie głosowe</span>
    </div>
  </a>
);

const phoneCall = (
  <a
    href="tel:+48666686691"
    className="flex items-center gap-3 px-5 py-4 border border-border hover:bg-accent/30 transition-colors"
  >
    <Phone className="w-5 h-5 text-foreground" />
    <div>
      <span className="text-sm font-semibold text-foreground block">Zadzwoń</span>
      <span className="text-xs text-muted-foreground">+48 666 686 691</span>
    </div>
  </a>
);

const smsMessage = (
  <a
    href="sms:+48666686691"
    className="flex items-center gap-3 px-5 py-4 border border-border hover:bg-accent/30 transition-colors"
  >
    <MessageSquare className="w-5 h-5 text-foreground" />
    <div>
      <span className="text-sm font-semibold text-foreground block">SMS</span>
      <span className="text-xs text-muted-foreground">Wyślij wiadomość tekstową</span>
    </div>
  </a>
);

const ContactModal = ({ open, onClose, mode = "phone" }: ContactModalProps) => {
  const items = mode === "mail"
    ? [whatsappMessage, smsMessage]
    : [whatsappCall, phoneCall];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-background border border-border shadow-2xl rounded-3xl p-8 w-[90%] max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Zamknij"
            >
              <X className="w-4 h-4" />
            </button>

            <h3
              className="text-lg font-bold text-foreground text-center mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Jak chcesz się skontaktować?
            </h3>

            <div className="flex flex-col gap-3">
              {items.map((item, i) => <div key={i}>{item}</div>)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ContactModal, WhatsAppIcon };
export default ContactModal;
