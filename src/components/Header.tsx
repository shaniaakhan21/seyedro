const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why Seyedro' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/96 backdrop-blur-sm border-b border-gold/18">
      <div className="max-w-[1180px] mx-auto px-8 py-3.5 flex items-center gap-4.5">
        <a href="#top" className="flex items-center gap-3">
          <img src="/seyedro-emblem-icon.png" alt="Seyedro" className="w-16 h-16" />
          <div className="leading-none">
            <div className="font-display text-[19px] text-white tracking-[0.5px]">SEYEDRO</div>
            <div className="font-condensed font-bold text-[7px] tracking-[3px] text-gold mt-0.5">
              RAW MATERIALS TRADING LLC
            </div>
          </div>
        </a>
        <nav className="ml-auto flex items-center gap-7.5">
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
      </div>
    </header>
  );
}
