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
    <section id="why" className="bg-page py-8 sm:py-19.5">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="text-center">
          <div className="font-mono font-semibold text-[12px] tracking-[3px] text-[#FF7A1A]">
            WHY SEYEDRO
          </div>
          <h2 className="font-display text-4xl sm:text-[40px] text-fg mt-3 tracking-[-0.5px]">
            Built for the trade
          </h2>
        </div>
        <div className="flex gap-5 mt-11 flex-col md:flex-row">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex-1 border border-surface-border rounded-2xl p-7.5"
            >
              <div className="w-13.5 h-13.5 rounded-full bg-brand-accent flex items-center justify-center">
                <Icon stroke="#0A0A0A" size={26} />
              </div>
              <h3 className="font-display text-[20px] text-fg mt-4.5">{title}</h3>
              <p className="font-normal text-[13.5px] leading-[1.65] text-fg-muted mt-2.5">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
