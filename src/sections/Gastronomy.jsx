import ParallaxImage from '../components/ParallaxImage'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { images } from '../data/images'

const cards = [
  {
    title: 'Sabores',
    text: 'Combinações que surpreendem e permanecem na memória de quem prova.',
    image: images.torta,
    position: '50% 45%',
  },
  {
    title: 'Variedade',
    text: 'Opções diversas, pensadas para agradar a diferentes paladares.',
    image: images.salgados,
    position: '50% 50%',
  },
  {
    title: 'Doces & sobremesas',
    text: 'Tortas doces e sobremesas para tornar o momento ainda mais especial.',
    image: images.doces,
    position: '55% 50%',
  },
  {
    title: 'Experiência gastronômica',
    text: 'Apresentação, cuidado e sabor reunidos à mesa.',
    image: images.frutas,
    position: '50% 50%',
  },
]

export default function Gastronomy() {
  return (
    <section
      id="gastronomia"
      aria-labelledby="gastronomia-titulo"
      className="relative overflow-hidden bg-espresso py-24 text-ivory md:py-36"
    >
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Texto */}
          <div className="lg:col-span-5 lg:pt-10">
            <SectionHeading
              index="02"
              eyebrow="Gastronomia"
              tone="dark"
              titleId="gastronomia-titulo"
              title={
                <>
                  Gastronomia que também faz parte da <em className="text-caramel-soft">celebração.</em>
                </>
              }
            >
              Cada celebração ganha ainda mais significado quando os sabores fazem parte da memória. À mesa, cada
              preparo é apresentado com cuidado — para ser apreciado com os olhos antes mesmo do primeiro sabor.
            </SectionHeading>

            <Reveal delay={0.25} className="mt-12 border-l border-caramel-soft/40 pl-6">
              <p className="font-serif text-[1.45rem] italic leading-snug text-ivory/90">
                “Excelentes tortas doces, muita variedade, sabores diferentes, sabor sensacional.”
              </p>
              <p className="eyebrow mt-4 text-[0.6rem] text-ivory/45">Avaliação no Google · Rafael Martins</p>
            </Reveal>
          </div>

          {/* Composição fotográfica */}
          <div className="relative lg:col-span-6 lg:col-start-7">
            <Reveal y={40}>
              <ParallaxImage
                image={images.buffet}
                strength={7}
                position="50% 60%"
                className="ml-auto aspect-[4/5] w-[88%] bg-espresso-soft"
                sizes="(min-width: 1024px) 45vw, 88vw"
              />
            </Reveal>
            <Reveal
              y={40}
              delay={0.2}
              className="absolute -bottom-12 left-0 w-[48%] border-[6px] border-espresso bg-espresso md:border-8"
            >
              <ParallaxImage image={images.pastas} strength={5} className="aspect-[4/5] bg-espresso-soft" />
            </Reveal>
            <span
              aria-hidden="true"
              className="absolute -top-8 right-0 font-serif text-[0.7rem] uppercase tracking-[0.4em] text-ivory/35"
            >
              À mesa
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="-mx-5 mt-28 md:mx-0 md:mt-36">
          <ul className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4">
            {cards.map((card, i) => (
              <Reveal
                as="li"
                key={card.title}
                delay={i * 0.08}
                className="group w-[78%] shrink-0 snap-start sm:w-[46%] md:w-auto"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-espresso-soft">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    width={card.image.width}
                    height={card.image.height}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: card.position }}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 font-serif text-sm italic text-ivory/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-[1.7rem] leading-tight text-ivory">{card.title}</h3>
                <span
                  className="mt-4 block h-px w-10 bg-caramel-soft/60 transition-all duration-700 ease-[var(--ease-soft)] group-hover:w-20"
                  aria-hidden="true"
                />
                <p className="mt-4 text-[0.9rem] leading-[1.75] text-ivory/60">{card.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
