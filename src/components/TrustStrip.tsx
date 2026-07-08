import { ShieldCheckIcon, CoinIcon, TruckIcon, GlobeIcon } from './icons';

const items = [
  { icon: ShieldCheckIcon, title: 'Reliable Supply', subtitle: 'Quality you can trust' },
  { icon: CoinIcon, title: 'Competitive Prices', subtitle: 'Best value for business' },
  { icon: TruckIcon, title: 'Fast Delivery', subtitle: 'On time, every time' },
  { icon: GlobeIcon, title: 'UAE & Worldwide', subtitle: 'Export-ready logistics' },
];

export function TrustStrip() {
  return (
    <section className="bg-page">
      <div className="max-w-[1180px] mx-auto px-8 py-5.5 flex flex-wrap gap-4.5 justify-between">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center gap-3.25 text-fg">
            <Icon stroke="currentColor" />
            <div>
              <div className="font-extrabold text-[14px] text-fg">{title}</div>
              <div className="font-medium text-[11px] text-fg-muted">{subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
