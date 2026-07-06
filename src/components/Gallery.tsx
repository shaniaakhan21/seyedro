import { ImagePlaceholder } from './ImagePlaceholder';
import paintBoxPhoto from '../assets/paint-box.png';
import thinnerPhoto from '../assets/thinner.png';
import fevicolPhoto from '../assets/fevicol-ca-777.png';
import sprayPaintPhoto from '../assets/spray-paint.png';
import bodyFillerPhoto from '../assets/body-filler-putty.png';
import goldPaintPhoto from '../assets/gold-paint-black-label.png';
import woodFillerPhoto from '../assets/wood-filler-putty.png';
import instantAdhesivePhoto from '../assets/instant-adhesive.png';

const tiles = [
  { id: 'gal-1', label: 'Feature photo', span: 'col-span-2 row-span-2', image: paintBoxPhoto },
  { id: 'gal-2', label: 'Photo', span: '', image: thinnerPhoto },
  { id: 'gal-3', label: 'Photo', span: '', image: fevicolPhoto },
  { id: 'gal-4', label: 'Photo', span: '', image: sprayPaintPhoto },
  { id: 'gal-5', label: 'Photo', span: '', image: bodyFillerPhoto },
  { id: 'gal-6', label: 'Wide photo', span: 'col-span-2', image: goldPaintPhoto },
  { id: 'gal-7', label: 'Photo', span: '', image: woodFillerPhoto },
  { id: 'gal-8', label: 'Photo', span: '', image: instantAdhesivePhoto },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-19.5">
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

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[200px] gap-3.5 mt-8.5">
          {tiles.map((tile) =>
            tile.image ? (
              <img
                key={tile.id}
                src={tile.image}
                alt={tile.label}
                className={`w-full h-full object-cover rounded-xl ${tile.span}`}
              />
            ) : (
              <ImagePlaceholder
                key={tile.id}
                label={tile.label}
                className={`w-full h-full ${tile.span}`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
