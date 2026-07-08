import type { ComponentType } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import paintBoxPhoto from '../assets/paint-box.png';
import thinnerPhoto from '../assets/thinner.png';
import granitemarbleAdhesivePhoto from '../assets/granite-marble-adhesive.png';
import blackBitumenPhoto from '../assets/black-bitumen.png';
import siliconeSealantPhoto from '../assets/silicone-sealant.png';
import poolPaintPhoto from '../assets/pool-paint-image.png';
import {
  PaintIcon,
  ResinIcon,
  ThinnerIcon,
  BitumenIcon,
  WaterproofIcon,
  PoolIcon,
} from './icons';

interface Category {
  id: string;
  icon: ComponentType<{ size?: number; stroke?: string }>;
  title: string;
  description: string;
  count: number;
  imageLabel: string;
  image?: string;
  imageFirst: boolean;
  products: string[];
}

const categories: Category[] = [
  {
    id: 'cat-paints',
    icon: PaintIcon,
    title: 'Paints & Coatings',
    description: 'Decorative, protective and specialist coatings for every surface and environment.',
    count: 12,
    imageLabel: 'Paints photo',
    image: paintBoxPhoto,
    imageFirst: true,
    products: [
      'Acrylic Emulsion Paint', 'Vinyl Paint', 'Latex Paint', 'Interior Paint', 'Exterior Paint',
      'Texture Paint', 'Primer Paint', 'Putty', 'Epoxy Paint', 'Polyurethane Paint',
      'Road Marking Paint', 'Swimming Pool Paint',
    ],
  },
  {
    id: 'cat-resins',
    icon: ResinIcon,
    title: 'Resins',
    description: 'Binders for paints, composites and industrial formulations.',
    count: 9,
    imageLabel: 'Resins photo',
    image: granitemarbleAdhesivePhoto,
    imageFirst: false,
    products: [
      'Acrylic Resin', 'Styrene Acrylic Resin', 'Pure Acrylic Resin', 'Epoxy Resin',
      'Polyurethane Resin', 'Polyester Resin', 'Vinyl Ester Resin', 'Alkyd Resin', 'Silicone Resin',
    ],
  },
  {
    id: 'cat-thinners',
    icon: ThinnerIcon,
    title: 'Thinners & Solvents',
    description: 'Industrial-grade solvents for thinning, cleaning and degreasing.',
    count: 9,
    imageLabel: 'Thinners photo',
    image: thinnerPhoto,
    imageFirst: true,
    products: [
      'Thinner 1000', 'Thinner 2000', 'Thinner 5000', 'Thinner 10000', 'Xylene',
      'Toluene', 'White Spirit', 'Acetone', 'MEK',
    ],
  },
  {
    id: 'cat-bitumen',
    icon: BitumenIcon,
    title: 'Bitumen Products',
    description: 'Penetration & oxidized grades, emulsions and waterproof membranes.',
    count: 8,
    imageLabel: 'Bitumen photo',
    image: blackBitumenPhoto,
    imageFirst: false,
    products: [
      'Bitumen 40/50', 'Bitumen 60/70', 'Bitumen 80/100', 'Oxidized Bitumen 85/25',
      'Oxidized Bitumen 90/15', 'Bitumen Emulsion', 'APP Membrane', 'SBS Membrane',
    ],
  },
  {
    id: 'cat-waterproofing',
    icon: WaterproofIcon,
    title: 'Waterproofing',
    description: 'Liquid-applied and cementitious systems for lasting protection.',
    count: 7,
    imageLabel: 'Waterproofing photo',
    image: siliconeSealantPhoto,
    imageFirst: true,
    products: [
      'Acrylic Waterproof Coating', 'Elastomeric Waterproof Coating', 'Polyurethane Waterproof Coating',
      'Epoxy Waterproof Coating', 'Cementitious Waterproofing 1K', 'Cementitious Waterproofing 2K',
      'Crystalline Waterproofing',
    ],
  },
  {
    id: 'cat-pool',
    icon: PoolIcon,
    title: 'Swimming Pool Systems',
    description: 'Specialist pool coatings, waterstops, injection resins and sealants.',
    count: 7,
    imageLabel: 'Pool systems photo',
    image: poolPaintPhoto,
    imageFirst: false,
    products: [
      'Epoxy Pool Paint', 'PU Waterproof Coating', 'PVC Waterstop', 'Bentonite Waterstop',
      'PU Injection Resin', 'Epoxy Injection Resin', 'Pool Sealants',
    ],
  },
];

function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  const image = (
    <div className="flex-none w-full md:w-60 self-stretch">
      {category.image ? (
        <img
          src={category.image}
          alt={category.imageLabel}
          className="w-full h-full min-h-[200px] object-cover"
        />
      ) : (
        <ImagePlaceholder label={category.imageLabel} rounded={false} className="w-full h-full min-h-[200px]" />
      )}
    </div>
  );
  const productGrid = (
    <div className="flex-1 grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(172px,1fr))] gap-2 sm:gap-2.5 content-start p-4 sm:p-5.5">
      {category.products.map((p) => (
        <div
          key={p}
          className="flex items-center gap-2 sm:gap-2.75 px-2.5 sm:px-3.75 py-2.5 sm:py-3.25 bg-surface border border-surface-border rounded-[9px] hover:border-gold hover:bg-surface-alt transition-colors"
        >
          <span className="w-2 h-2 rounded-sm bg-gold flex-none rotate-45" />
          <span className="font-semibold text-[12px] sm:text-[13.5px] text-fg">{p}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      id={category.id}
      className="bg-surface border border-surface-border rounded-2xl overflow-hidden mt-4.5 first:mt-8.5"
    >
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4.5 px-7 py-5.5 border-b border-surface-border">
        <div className="order-1 w-14 h-14 rounded-full bg-ink flex items-center justify-center flex-none">
          <Icon />
        </div>
        <div className="order-2 sm:order-3 ml-auto sm:ml-0 flex-none font-bold text-[11px] tracking-[1px] text-ink bg-gold px-3.25 py-1.75 rounded-full whitespace-nowrap">
          {category.count} PRODUCTS
        </div>
        <div className="order-3 sm:order-2 w-full sm:w-auto sm:flex-1">
          <h3 className="font-display text-[21px] text-fg m-0">{category.title}</h3>
          <p className="font-normal text-[12.5px] leading-[1.5] text-fg-muted mt-1 max-w-[560px]">
            {category.description}
          </p>
        </div>
      </div>
      <div className={`flex flex-col ${category.imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {image}
        {productGrid}
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="bg-page py-12 sm:py-19.5">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="font-mono font-semibold text-[12px] tracking-[3px] text-page-accent">
              WHAT WE SUPPLY
            </div>
            <h2 className="font-display text-4xl sm:text-[42px] text-fg mt-3 tracking-[-0.5px]">
              Our product range
            </h2>
          </div>
          <p className="font-normal text-[14px] leading-[1.65] text-fg-muted max-w-[380px] m-0">
            Six core categories covering construction chemicals, coatings and industrial raw
            materials — available in commercial and bulk quantities.
          </p>
        </div>

        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}

        <div className="mt-6.5 text-center font-normal text-[13px] text-fg-muted">
          Looking for something specific?{' '}
          <a href="#contact" className="text-page-accent font-bold">
            Ask our supply desk →
          </a>
        </div>
      </div>
    </section>
  );
}
