import { WhatsAppIcon } from './icons';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971507671419"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-[100] w-15 h-15 rounded-full bg-[#25D366] hover:bg-[#1fbe5a] hover:scale-[1.06] transition-all flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.28)]"
    >
      <WhatsAppIcon size={34} fill="#fff" />
    </a>
  );
}
