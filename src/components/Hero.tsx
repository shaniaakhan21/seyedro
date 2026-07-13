import heroBg from '../assets/hero-bg.png';

const stats = [
  { value: '60+', label: 'PRODUCTS' },
  { value: '6', label: 'CATEGORIES' },
  { value: '24/7', label: 'SUPPLY DESK' },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#1593C2] mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1e3d]/50 via-[#0b1e3d]/60 to-[#0b1e3d]/80" />

      <div className="max-w-[1180px] mx-auto px-8 pt-24 pb-20 sm:pt-28 sm:pb-24 relative flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.75">
          <span className="w-1.75 h-1.75 rounded-full bg-[#FF7A1A]" />
          <span className="font-mono font-semibold text-[11px] tracking-[2px] text-white">
            SUPPLYING UAE &amp; WORLDWIDE
          </span>
        </div>
        <h1 className="font-display text-[42px] sm:text-[64px] lg:text-[76px] leading-[1.03] tracking-[-1.5px] mt-6 text-white max-w-[920px]">
          Raw materials,
          <br />
          reliably <span className="text-[#FF7A1A]">supplied.</span>
        </h1>
        <p className="font-normal text-[18px] leading-[1.65] text-white/85 mt-5 max-w-[680px]">
          Paints &amp; coatings, resins, thinners, bitumen and waterproofing systems — sourced
          to specification and delivered on time across the region.
        </p>
        <div className="flex gap-3.5 mt-8 flex-wrap justify-center">
          <a
            href="#products"
            className="font-bold text-[15px] text-white bg-[#FF7A1A] hover:opacity-90 transition-opacity px-7 py-3.75 rounded-lg"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="font-bold text-[15px] text-white border-[1.5px] border-white/40 hover:border-white hover:bg-white/10 transition-colors px-7 py-3.75 rounded-lg"
          >
            Request a Quote
          </a>
        </div>
        <div className="flex gap-8.5 mt-11.5 justify-center flex-wrap">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8.5">
              {i > 0 && <div className="w-px self-stretch bg-white/25" />}
              <div>
                <div className="font-display text-[30px] text-white">{stat.value}</div>
                <div className="font-mono font-medium text-[11px] tracking-[1px] text-white/70 mt-0.75">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
