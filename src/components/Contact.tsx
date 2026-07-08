import { MailIcon, PhoneIcon, WhatsAppIcon, PinIcon } from './icons';
import blackEmblem from '../assets/logo/seyedro-icon-black.png';

const cards: {
  href: string;
  icon: () => React.JSX.Element;
  label: string;
  value: string;
  cta: string;
}[] = [
  {
    href: 'mailto:Roochyaruae@gmail.com?subject=Product%20Enquiry%20%E2%80%94%20Seyedro',
    icon: () => <MailIcon />,
    label: 'EMAIL US',
    value: 'Roochyaruae@gmail.com',
    cta: 'Send an email →',
  },
  {
    href: 'tel:+971507671419',
    icon: () => <PhoneIcon />,
    label: 'CALL US',
    value: '+971 50 767 1419',
    cta: 'Tap to call →',
  },
  {
    href: 'https://wa.me/971507671419',
    icon: () => <WhatsAppIcon size={27} fill="#0A0A0A" />,
    label: 'WHATSAPP',
    value: 'Chat with us',
    cta: 'Open WhatsApp →',
  },
  {
    href: 'https://www.seyedro.com',
    icon: () => <PinIcon />,
    label: 'VISIT US',
    value: 'Dubai, UAE',
    cta: 'www.seyedro.com →',
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-charcoal text-white py-20 relative overflow-hidden">
      <div className="absolute -right-35 -top-30 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle_at_42%_38%,rgba(254,207,9,0.10),transparent_62%)]" />
      <div className="max-w-[1180px] mx-auto px-8 relative">
        <div className="text-center">
          <div className="font-mono font-semibold text-[12px] tracking-[3px] text-gold">
            GET IN TOUCH
          </div>
          <h2 className="font-display text-[32px] sm:text-[42px] text-white mt-3 tracking-[-0.5px] leading-[1.05]">
            Let&rsquo;s talk supply
          </h2>
          <p className="font-normal text-[15px] leading-[1.7] text-[#B4B4B4] mt-3.5 mx-auto max-w-[520px]">
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
              className="flex-1 bg-[#1E1E1E] border border-gold/18 hover:border-gold hover:bg-[#242424] transition-colors rounded-2xl p-7 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
                <Icon />
              </div>
              <div className="font-mono font-semibold text-[10px] tracking-[2px] text-[#8A8A8A] mt-4.5">
                {label}
              </div>
              <div className="font-bold text-[16px] text-white mt-1.5 break-all">{value}</div>
              <div className="font-semibold text-[12px] text-gold mt-3">{cta}</div>
            </a>
          ))}
        </div>

        <div className="mt-6 bg-gold rounded-2xl px-8.5 py-6.5 flex items-center gap-6 flex-wrap">
          <img src={blackEmblem} className="w-13.5 h-13.5 flex-none" alt="" />
          <div className="flex-1 min-w-[220px]">
            <div className="font-display text-[22px] text-ink">Ready to order?</div>
            <div className="font-medium text-[13px] text-ink/70 mt-0.75">
              Email your product list and quantities — we&rsquo;ll quote you fast.
            </div>
          </div>
          <a
            href="mailto:Roochyaruae@gmail.com?subject=Product%20Enquiry%20%E2%80%94%20Seyedro&body=Hello%20Seyedro%2C%0A%0AI%27d%20like%20a%20quote%20for%3A%0A-%20%0A%0AQuantity%3A%20%0ADelivery%20location%3A%20%0A%0AThank%20you."
            className="font-extrabold text-[15px] text-gold bg-ink hover:bg-black transition-colors px-7.5 py-3.75 rounded-[9px]"
          >
            Email Your Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
