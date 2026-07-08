import warehousePhoto from '../assets/bitumen-emulsion-drums.png';

export function About() {
  return (
    <section id="about" className="bg-charcoal py-20">
      <div className="max-w-[1180px] mx-auto px-8 flex gap-14 items-center flex-col lg:flex-row">
        <div className="flex-1 relative w-full">
          <img
            src={warehousePhoto}
            alt="Seyedro warehouse stock"
            className="w-full h-[380px] object-cover rounded-xl"
          />
          <div className="absolute right-[-18px] bottom-[-22px] bg-ink border border-gold/20 rounded-xl px-5.5 py-4.5 flex items-center gap-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
            <img src="/yellow-logo.png" className="w-10 h-10" alt="" />
            <div>
              <div className="font-display text-[15px] text-white">Dubai, UAE</div>
              <div className="font-mono font-medium text-[10px] tracking-[1px] text-gold mt-0.5">
                HEAD OFFICE
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1.05] w-full">
          <div className="font-mono font-semibold text-[12px] tracking-[3px] text-gold">
            ABOUT SEYEDRO
          </div>
          <h2 className="font-display text-2xl sm:text-[38px] text-white mt-3 tracking-[-0.5px] leading-[1.2]">
            Your single source for industrial raw materials
          </h2>
          <p className="font-normal text-justify text-[15px] leading-[1.7] text-[#B4B4B4] mt-4.5">
            SEYEDRO Raw Materials Trading LLC supplies paints, resins, solvents, bitumen and
            waterproofing products to contractors, factories and distributors. From a single drum
            to bulk consignments, we match the right material to the job and get it there on
            schedule.
          </p>
          <div className="flex gap-7.5 mt-7 flex-wrap">
            <div>
              <div className="font-display text-[26px] text-gold">Quality</div>
              <div className="font-normal text-[13px] text-[#9A9A9A] mt-1">
                Specification-matched, consistent batches.
              </div>
            </div>
            <div>
              <div className="font-display text-[26px] text-gold">Scale</div>
              <div className="font-normal text-[13px] text-[#9A9A9A] mt-1">
                Retail to bulk &amp; export volumes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
