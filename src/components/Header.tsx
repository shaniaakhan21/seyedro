import { useEffect, useState } from 'react';
import { CloseIcon, MenuIcon } from './icons';

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why Seyedro' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/18">
      <div className="bg-[#0A0A0A]/96 backdrop-blur-sm">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-3.5 flex items-center gap-4.5">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src="/yellow-logo.png" alt="Seyedro" className="w-12 h-12 sm:w-16 sm:h-16" />
            <div className="leading-none">
              <div className="font-display text-[16px] sm:text-[19px] text-white tracking-[0.5px]">
                SEYEDRO
              </div>
              <div className="font-condensed font-bold text-[7px] tracking-[3px] text-gold mt-0.5">
                RAW MATERIALS TRADING LLC
              </div>
            </div>
          </a>

          <nav className="ml-auto hidden md:flex items-center gap-7.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-[13px] text-[#D8D8D8] hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-bold text-[13px] text-ink bg-gold hover:opacity-90 transition-opacity px-5 py-2.5 rounded-lg"
            >
              Get a Quote
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="ml-auto md:hidden w-10 h-10 flex items-center justify-center flex-none"
          >
            <MenuIcon size={26} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[200] md:hidden bg-ink flex flex-col"
        >
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-gold/18 flex-none">
            <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <img src="/yellow-logo.png" alt="Seyedro" className="w-12 h-12" />
              <div className="leading-none">
                <div className="font-display text-[16px] text-white tracking-[0.5px]">SEYEDRO</div>
                <div className="font-condensed font-bold text-[7px] tracking-[3px] text-gold mt-0.5">
                  RAW MATERIALS TRADING LLC
                </div>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center flex-none"
            >
              <CloseIcon size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col px-5 py-6 gap-1.5 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-[19px] text-[#D8D8D8] hover:text-gold transition-colors py-3.5 border-b border-white/8"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-[15px] text-ink bg-gold hover:opacity-90 transition-opacity px-5 py-3.5 rounded-lg text-center mt-6"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
