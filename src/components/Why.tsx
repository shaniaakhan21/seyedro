import type { ComponentType } from 'react';
import { ShieldCheckIcon, CoinIcon, TruckIcon } from './icons';

const reasons: { icon: ComponentType<{ size?: number; stroke?: string }>; title: string; description: string }[] = [
  {
    icon: ShieldCheckIcon,
    title: 'Reliable Supply',
    description: 'Dependable stock and trusted sources mean your projects never stall waiting on materials.',
  },
  {
    icon: CoinIcon,
    title: 'Competitive Prices',
    description: 'Direct sourcing and efficient logistics keep our pricing sharp without compromising quality.',
  },
  {
    icon: TruckIcon,
    title: 'Fast Delivery',
    description: 'On-time dispatch across the UAE and export-ready handling for worldwide orders.',
  },
];

export function Why() {
  return (
    <section id="why" className="bg-gold py-19.5">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="text-center">
          <div className="font-mono font-semibold text-[12px] tracking-[3px] text-ink/70">
            WHY SEYEDRO
          </div>
          <h2 className="font-display text-[40px] text-ink mt-3 tracking-[-0.5px]">
            Built for the trade
          </h2>
        </div>
        <div className="flex gap-5 mt-11 flex-col md:flex-row">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex-1 bg-ink border border-black/20 rounded-2xl p-7.5"
            >
              <div className="w-13.5 h-13.5 rounded-full bg-gold flex items-center justify-center">
                <Icon stroke="#0A0A0A" size={26} />
              </div>
              <h3 className="font-display text-[20px] text-white mt-4.5">{title}</h3>
              <p className="font-normal text-[13.5px] leading-[1.65] text-[#B4B4B4] mt-2.5">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
