import { MailIcon, PhoneIcon, WhatsAppIcon, PinIcon } from './icons';
import blackEmblem from '../assets/logo/seyedro-icon-black.png';
import goldEmblem from '../assets/logo/yellow-logo.png';
import { useTheme } from '../context/ThemeContext';

const cards: {
  href: string;
  icon: () => React.JSX.Element;
  label: string;
  value: string;
  cta: string;
}[] = [
  {
    href: 'mailto:Roochyaruae@gmail.com?subject=Product%20Enquiry%20%E2%80%94%20Seyedro&body=Hello%20Seyedro%2C%0A%0AI%27d%20like%20a%20quote%20for%3A%0A-%20%0A%0AQuantity%3A%20%0ADelivery%20location%3A%20%0A%0AThank%20you.',
    icon: () => <MailIcon stroke="#ffffff" />,
    label: 'EMAIL US',
    value: 'Roochyaruae@gmail.com',
    cta: 'Send an email →',
  },
  {
    href: 'tel:+971507671419',
    icon: () => <PhoneIcon stroke="#ffffff" />,
    label: 'CALL US',
    value: '+971 50 767 1419',
    cta: 'Tap to call →',
  },
  {
    href: `https://wa.me/971507671419?text=${encodeURIComponent("Hi Seyedro, I'd like to know more about your products and pricing.")}`,
    icon: () => <WhatsAppIcon size={27} fill="#ffffff" />,
    label: 'WHATSAPP',
    value: 'Chat with us',
    cta: 'Open WhatsApp →',
  },
  {
    href: 'https://www.seyedro.com',
    icon: () => <PinIcon stroke="#ffffff" />,
    label: 'VISIT US',
    value: 'Dubai, UAE',
    cta: 'www.seyedro.com →',
  },
];

export function Contact() {
  const { theme } = useTheme();
  const bannerIconSrc = theme === 'yellow' ? goldEmblem : blackEmblem;

  return (
    <section id="contact" className="bg-[#0b1e3d] py-20 relative overflow-hidden">
      <div className="absolute -right-35 -top-30 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle_at_42%_38%,rgba(105,212,255,0.14),transparent_62%)]" />
      <div className="max-w-[1180px] mx-auto px-8 relative">
        <div className="text-center">
          <div className="font-mono font-semibold text-[12px] tracking-[3px] text-[#69D4FF]">
            GET IN TOUCH
          </div>
          <h2 className="font-display text-[32px] sm:text-[42px] text-white mt-3 tracking-[-0.5px] leading-[1.05]">
            Let&rsquo;s talk supply
          </h2>
          <p className="font-normal text-[15px] leading-[1.7] text-white/60 mt-3.5 mx-auto max-w-[520px]">
            Send us your product list and quantities — our supply desk replies with pricing and
            availability. Reach us whichever way suits you.
          </p>
        </div>

        <div className="flex gap-4.5 mt-10.5 flex-col sm:flex-row">
          {cards.map(({ href, icon: Icon, label, value, cta }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex-1 bg-white/5 border border-white/10 hover:border-[#69D4FF] hover:bg-white/10 transition-colors rounded-2xl p-7 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF7A1A] flex items-center justify-center">
                <Icon />
              </div>
              <div className="font-mono font-semibold text-[10px] tracking-[2px] text-white/50 mt-4.5">
                {label}
              </div>
              <div className="font-bold text-[16px] text-white mt-1.5 break-all">{value}</div>
              <div className="font-semibold text-[12px] text-[#69D4FF] mt-3">{cta}</div>
            </a>
          ))}
        </div>

        <div className="mt-6 bg-cta rounded-2xl px-8.5 py-6.5 flex items-center gap-6 flex-wrap">
          <img src={bannerIconSrc} className="w-13.5 h-13.5 flex-none" alt="" />
          <div className="flex-1 min-w-[220px]">
            <div className="font-display text-[22px] text-cta-fg">Ready to order?</div>
            <div className="font-medium text-[13px] text-cta-fg/70 mt-0.75">
              Email your product list and quantities — we&rsquo;ll quote you fast.
            </div>
          </div>
          <a
            href="mailto:Roochyaruae@gmail.com?subject=Product%20Enquiry%20%E2%80%94%20Seyedro&body=Hello%20Seyedro%2C%0A%0AI%27d%20like%20a%20quote%20for%3A%0A-%20%0A%0AQuantity%3A%20%0ADelivery%20location%3A%20%0A%0AThank%20you."
            className="font-extrabold text-[15px] text-fg bg-page hover:opacity-90 transition-opacity px-7.5 py-3.75 rounded-[9px] text-center"
          >
            Email Your Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
