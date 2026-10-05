import { useState } from 'react'
import { Expand } from 'lucide-react'
import Lightbox from '../components/Lightbox'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { galleryImages } from '../data/images'

export default function Gallery() {
  const [index, setIndex] = useState(null)

  return (
    <section id="galeria" aria-labelledby="galeria-titulo" className="bg-cream py-24 md:py-36">
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="04"
            eyebrow="Galeria"
            titleId="galeria-titulo"
            title={
              <>
                Detalhes que contam <em className="text-caramel">histórias.</em>
              </>
            }
          />
          <Reveal delay={0.15} className="max-w-xs text-[0.9rem] leading-[1.8] text-muted md:pb-2 md:text-right">
            Ambientes, mesas e sabores. Toque em uma imagem para ampliar.
          </Reveal>
        </div>

        <ul className="mt-14 columns-2 gap-3 md:mt-20 md:columns-3 md:gap-5 xl:columns-4">
          {galleryImages.map((image, i) => (
            <Reveal as="li" key={image.src + i} delay={(i % 4) * 0.06} className="mb-3 break-inside-avoid md:mb-5">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden bg-sand text-left"
                aria-label={`Ampliar foto: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-[1.4s] ease-[var(--ease-soft)] group-hover:scale-[1.035]"
                />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-700 group-hover:bg-espresso/25" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-ivory opacity-0 transition-all duration-700 ease-[var(--ease-soft)] group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="eyebrow text-[0.58rem]">{image.caption}</span>
                  <Expand className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Lightbox images={galleryImages} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </section>
  )
}
