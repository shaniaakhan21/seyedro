import paintBoxPhoto from '../assets/paint-box.png';

const stats = [
  { value: '60+', label: 'PRODUCTS' },
  { value: '6', label: 'CATEGORIES' },
  { value: '24/7', label: 'SUPPLY DESK' },
];

export function Hero() {
  return (
    <section id="top" className="bg-page text-fg relative overflow-hidden">
      <div className="absolute -right-40 -top-30 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle_at_42%_38%,var(--page-glow),transparent_60%)]" />

      <div className="max-w-[1180px] mx-auto px-8 pt-21 pb-23 flex gap-14 items-center relative flex-col lg:flex-row">
        <div className="flex-[1.15] w-full">
          <div className="inline-flex items-center gap-2.5 border border-page-border rounded-full px-4 py-1.75">
            <span className="w-1.75 h-1.75 rounded-full bg-page-accent" />
            <span className="font-mono font-semibold text-[11px] tracking-[2px] text-page-accent">
              SUPPLYING UAE &amp; WORLDWIDE
            </span>
          </div>
          <h1 className="font-display text-[42px] sm:text-[58px] leading-[1.02] tracking-[-1px] mt-5.5">
            Raw materials,
            <br />
            reliably <span className="text-page-accent">supplied.</span>
          </h1>
          <p className="font-normal text-[17px] leading-[1.65] text-fg-muted mt-5.5 max-w-[500px]">
            Paints &amp; coatings, resins, thinners, bitumen and waterproofing systems — sourced
            to specification and delivered on time across the region.
          </p>
          <div className="flex gap-3.5 mt-8 flex-wrap">
            <a
              href="#products"
              className="font-bold text-[15px] text-cta-fg bg-cta hover:opacity-90 transition-opacity px-7 py-3.75 rounded-lg"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="font-bold text-[15px] text-fg border-[1.5px] border-page-border hover:border-page-accent hover:text-page-accent transition-colors px-7 py-3.75 rounded-lg"
            >
              Request a Quote
            </a>
          </div>
          <div className="flex gap-8.5 mt-11.5">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8.5">
                {i > 0 && <div className="w-px self-stretch bg-page-border" />}
                <div>
                  <div className="font-display text-[30px] text-page-accent">{stat.value}</div>
                  <div className="font-mono font-medium text-[11px] tracking-[1px] text-fg-muted mt-0.75">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[.85] relative w-full max-w-[480px]">
          <div className="absolute -left-3.5 -top-3.5 w-[70px] h-[70px] border-t-[3px] border-l-[3px] border-page-accent rounded-tl-md" />
          <div className="absolute -right-3.5 -bottom-3.5 w-[70px] h-[70px] border-b-[3px] border-r-[3px] border-page-accent rounded-br-md" />
          <img
            src={paintBoxPhoto}
            alt="Seyedro raw materials"
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
