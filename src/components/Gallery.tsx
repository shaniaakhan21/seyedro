import { useEffect, useState } from 'react';
import { CloseIcon, WhatsAppIcon } from './icons';
import paintBoxPhoto from '../assets/paint-box.png';
import thinnerPhoto from '../assets/thinner.png';
import fevicolPhoto from '../assets/fevicol-ca-777.png';
import sprayPaintPhoto from '../assets/spray-paint.png';
import bodyFillerPhoto from '../assets/body-filler-putty.png';
import goldPaintPhoto from '../assets/gold-paint-black-label.png';
import woodFillerPhoto from '../assets/wood-filler-putty.png';
import instantAdhesivePhoto from '../assets/instant-adhesive.png';
import granitemarbleAdhesivePhoto from '../assets/granite-marble-adhesive.png';
import blackBitumenPhoto from '../assets/black-bitumen.png';
import siliconeSealantPhoto from '../assets/silicone-sealant.png';
import bitumenEmulsionDrumsPhoto from '../assets/bitumen-emulsion-drums.png';
import poolPaintPhoto from '../assets/pool-paint-image.png';
import artistOilPaintPhoto from '../assets/artist-oil-paint.png';
import wd40SprayPhoto from '../assets/wd-40-spray.png';
import paintBrushesSetPhoto from '../assets/paint-brushes-set.png';

const WHATSAPP_NUMBER = '971507671419';

const tiles = [
  {
    id: 'gal-1',
    span: 'col-span-2 row-span-2',
    image: paintBoxPhoto,
    name: 'TIXE Solvent-Based Gold Paint',
    info: 'Metallic-effect gold paint for furniture, frames and decorative interior finishes.',
  },
  {
    id: 'gal-2',
    span: '',
    image: thinnerPhoto,
    name: 'Premium Thinner',
    info: 'Industrial-grade thinner for cleaning, degreasing and reducing paint viscosity.',
  },
  {
    id: 'gal-3',
    span: '',
    image: fevicolPhoto,
    name: 'Fevicol CA-777 Contact Adhesive',
    info: 'High-strength contact adhesive for wood, laminate and general bonding work.',
  },
  {
    id: 'gal-4',
    span: '',
    image: sprayPaintPhoto,
    name: 'Asmaco All-Purpose Spray Paint',
    info: 'All-purpose interior/exterior spray paint in a wide colour range.',
  },
  {
    id: 'gal-5',
    span: '',
    image: bodyFillerPhoto,
    name: '3M Bondo Ultimate Body Filler',
    info: 'Easy-sanding body filler putty with superior adhesion to metal, wood and fibreglass.',
  },
  {
    id: 'gal-6',
    span: '',
    image: goldPaintPhoto,
    name: 'TIXE Gold Paint',
    info: 'Solvent-based gold paint for premium decorative and restoration work.',
  },
  {
    id: 'gal-7',
    span: '',
    image: woodFillerPhoto,
    name: 'NARI Plastic Wood Filler',
    info: 'Teak-shade wood filler putty for repairing and finishing timber surfaces.',
  },
  {
    id: 'gal-8',
    span: '',
    image: instantAdhesivePhoto,
    name: 'Flex Kwik Instant Adhesive',
    info: 'Fast-setting instant adhesive built for flex bonding and PVC door assembly.',
  },
  {
    id: 'gal-9',
    span: '',
    image: granitemarbleAdhesivePhoto,
    name: 'Asmaco Granite & Marble Adhesive',
    info: 'Professional-grade adhesive for bonding granite, marble and stone tiles, interior and exterior.',
  },
  {
    id: 'gal-10',
    span: '',
    image: blackBitumenPhoto,
    name: 'Delta Black Bitumen',
    info: 'Penetration-grade bitumen for road repair and waterproofing applications.',
  },
  {
    id: 'gal-11',
    span: '',
    image: siliconeSealantPhoto,
    name: 'Asmaco GP Silicone Sealant',
    info: 'Permanently flexible, UV-resistant silicone sealant for general building use.',
  },
  {
    id: 'gal-12',
    span: '',
    image: bitumenEmulsionDrumsPhoto,
    name: 'Aslycoat Cold-Applied Bitumen Emulsion',
    info: 'Cold-applied bitumen emulsion for roofing and waterproofing, stocked by the drum.',
  },
  {
    id: 'gal-13',
    span: 'row-span-2',
    image: poolPaintPhoto,
    name: 'Isomer Epoxy Pool Paint',
    info: 'Heavy-duty epoxy coating built for swimming pools — strong adhesion, chemical and water resistant.',
  },
  {
    id: 'gal-14',
    span: '',
    image: artistOilPaintPhoto,
    name: "Marie's Oil Colour Set",
    info: 'Artist-grade oil colour tubes, available alongside our specialist coatings range.',
  },
  {
    id: 'gal-15',
    span: '',
    image: wd40SprayPhoto,
    name: 'WD-40 Multi-Use Product',
    info: 'Multi-use maintenance spray for the workshop and warehouse floor.',
  },
  {
    id: 'gal-16',
    span: '',
    image: paintBrushesSetPhoto,
    name: 'Detail Paint Brush Set',
    info: 'Nylon-bristle brush set for fine finishing and touch-up work.',
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? tiles[activeIndex] : null;

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-ink sm:py-19.5">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="font-mono font-semibold text-[12px] tracking-[3px] text-gold">
              IN THE FIELD
            </div>
            <h2 className="font-display text-[42px] text-white mt-3 tracking-[-0.5px]">
              Product gallery
            </h2>
          </div>
          <p className="font-normal text-[14px] leading-[1.65] text-[#B4B4B4] max-w-[380px] m-0">
            Drums, packaging, warehouse stock and applied results — drop your own photos into any
            tile below.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[200px] grid-flow-dense gap-3.5 mt-8.5">
          {tiles.map((tile, i) => (
            <button
              key={tile.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`View ${tile.name}`}
              className={`group relative w-full h-full overflow-hidden rounded-xl cursor-pointer ${tile.span}`}
            >
              <img
                src={tile.image}
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-end p-3.5 opacity-0 group-hover:opacity-100">
                <span className="font-semibold text-[13px] text-white text-left">{tile.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-charcoal border border-white/10 rounded-2xl overflow-hidden max-w-[560px] w-full max-h-[90vh] flex flex-col"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center"
            >
              <CloseIcon size={18} />
            </button>
            <img
              src={active.image}
              alt={active.name}
              className="w-full max-h-[55vh] object-cover flex-none"
            />
            <div className="p-6">
              <h3 className="font-display text-[22px] text-white m-0">{active.name}</h3>
              <p className="font-normal text-[14px] leading-[1.6] text-[#B4B4B4] mt-2.5">
                {active.info}
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hey, I am interested in ${active.name}, can I get more info about it?`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 font-bold text-[14px] text-ink bg-gold hover:opacity-90 transition-opacity px-6 py-3 rounded-lg"
              >
                <WhatsAppIcon size={18} fill="#0A0A0A" />
                Interested? Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
