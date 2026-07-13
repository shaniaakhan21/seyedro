import { useTheme } from '../context/ThemeContext';
import goldIcon from '../assets/logo/yellow-logo.png';
import blueIcon from '../assets/logo/blue-logo-seyedro.png';

const productLinks = [
  { href: '#cat-paints', label: 'Paints & Coatings' },
  { href: '#cat-resins', label: 'Resins' },
  { href: '#cat-thinners', label: 'Thinners & Solvents' },
  { href: '#cat-bitumen', label: 'Bitumen Products' },
  { href: '#cat-waterproofing', label: 'Waterproofing' },
  { href: '#cat-pool', label: 'Pool Systems' },
];

const companyLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#why', label: 'Why Seyedro' },
  { href: '#products', label: 'Product Range' },
  { href: '#contact', label: 'Get a Quote' },
];

export function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === 'black' ? goldIcon : blueIcon;

  return (
    <footer className="bg-[#0b1e3d] text-white pt-14 pb-7">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex gap-12.5 flex-wrap">
          <div className="flex-[1.4] min-w-[260px]">
            <div className="flex items-center gap-3">
              <img src={logoSrc} className="w-24 h-24" alt="Seyedro" />
              <div>
                <div className="font-display text-[20px] text-white">SEYEDRO</div>
                <div className="font-condensed font-bold text-[7px] tracking-[3px] text-white/40 mt-0.5">
                  RAW MATERIALS TRADING LLC
                </div>
              </div>
            </div>
            <p className="font-normal text-[13px] leading-[1.7] text-white/60 mt-4.5 max-w-[300px]">
              Supplying quality paints, resins, solvents, bitumen and waterproofing materials
              across the UAE &amp; worldwide.
            </p>
          </div>

          <div className="flex-1 min-w-[150px]">
            <div className="font-mono font-bold text-[12px] tracking-[2px] text-white/40">
              PRODUCTS
            </div>
            <div className="flex flex-col gap-2.5 mt-4">
              {productLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-[13px] text-white/85 hover:text-[#69D4FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-[150px]">
            <div className="font-mono font-bold text-[12px] tracking-[2px] text-white/40">
              COMPANY
            </div>
            <div className="flex flex-col gap-2.5 mt-4">
              {companyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-[13px] text-white/85 hover:text-[#69D4FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-[1.1] min-w-[180px]">
            <div className="font-mono font-bold text-[12px] tracking-[2px] text-white/40">
              CONTACT
            </div>
            <div className="flex flex-col gap-2.5 mt-4 font-medium text-[13px] leading-[1.5] text-white/85">
              <div>Dubai, United Arab Emirates</div>
              <a href="tel:+971507671419" className="hover:text-[#69D4FF] transition-colors">
                +971 50 767 1419
              </a>
              <a href="mailto:Roochyaruae@gmail.com" className="hover:text-[#69D4FF] transition-colors">
                Roochyaruae@gmail.com
              </a>
              <a href="https://www.seyedro.com" className="text-[#69D4FF] hover:opacity-80 transition-opacity">
                www.seyedro.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-11 pt-5.5 border-t border-white/10 flex justify-between flex-wrap gap-2.5">
          <span className="font-medium text-[11px] text-white/40">
            © 2026 Seyedro Raw Materials Trading LLC. All rights reserved.
          </span>
          <span className="font-mono font-medium text-[10px] tracking-[1px] text-white/40">
            SUPPLYING QUALITY MATERIALS · UAE &amp; WORLDWIDE
          </span>
        </div>
      </div>
    </footer>
  );
}
