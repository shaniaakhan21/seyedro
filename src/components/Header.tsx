import { useEffect, useState } from 'react';
import { CloseIcon, MenuIcon } from './icons';
import { useTheme, type Theme } from '../context/ThemeContext';
import goldIcon from '../assets/logo/yellow-logo.png';
import blackIcon from '../assets/logo/seyedro-icon-black.png';

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why Seyedro' },
  { href: '#contact', label: 'Contact' },
];

const THEME_OPTIONS: { value: Theme; label: string; swatch: string }[] = [
  { value: 'yellow', label: 'Yellow', swatch: '#fed109' },
  { value: 'black', label: 'Black', swatch: '#0a0a0a' },
  { value: 'navy', label: 'Navy', swatch: '#0b1e3d' },
];

function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`flex items-center gap-1.5 border border-page-border rounded-full p-1.5 flex-none ${className}`}
    >
      {THEME_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setTheme(opt.value)}
          aria-label={`Switch to ${opt.label.toLowerCase()} theme`}
          aria-pressed={theme === opt.value}
          className={`w-5.5 h-5.5 rounded-full flex-none transition-all ${
            theme === opt.value ? 'ring-2 ring-page-accent ring-offset-2 ring-offset-page' : 'opacity-70 hover:opacity-100'
          }`}
          style={{ backgroundColor: opt.swatch }}
        />
      ))}
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const logoSrc = theme === 'black' ? goldIcon : blackIcon;

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-page-border">
      <div className="bg-page/96 backdrop-blur-sm">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-3.5 flex items-center gap-4.5">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src={logoSrc} alt="Seyedro" className="w-12 h-12 sm:w-16 sm:h-16" />
            <div className="leading-none">
              <div className="font-display text-[16px] sm:text-[19px] text-blackfg tracking-[0.5px]">
                SEYEDRO
              </div>
              <div className="font-condensed font-bold text-[7px] tracking-[3px] text-black mt-0.5">
                RAW MATERIALS TRADING LLC
              </div>
            </div>
          </a>

          <nav className="ml-auto hidden md:flex items-center gap-7.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-[13px] text-fg-muted hover:text-page-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="font-bold text-[13px] text-cta-fg bg-cta hover:opacity-90 transition-opacity px-5 py-2.5 rounded-lg"
            >
              Get a Quote
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="ml-auto md:hidden w-10 h-10 flex items-center justify-center flex-none text-fg"
          >
            <MenuIcon size={26} stroke="currentColor" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[200] md:hidden bg-page flex flex-col"
        >
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-page-border flex-none">
            <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <img src={logoSrc} alt="Seyedro" className="w-12 h-12" />
              <div className="leading-none">
                <div className="font-display text-[16px] text-fg tracking-[0.5px]">SEYEDRO</div>
                <div className="font-condensed font-bold text-[7px] tracking-[3px] text-page-accent mt-0.5">
                  RAW MATERIALS TRADING LLC
                </div>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center flex-none text-fg"
            >
              <CloseIcon size={24} stroke="currentColor" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col px-5 py-6 gap-1.5 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-[19px] text-fg-muted hover:text-page-accent transition-colors py-3.5 border-b border-surface-border"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex items-center justify-between gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 font-bold text-[15px] text-cta-fg bg-cta hover:opacity-90 transition-opacity px-5 py-3.5 rounded-lg text-center"
              >
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
