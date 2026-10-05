import ParallaxImage from '../components/ParallaxImage'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { images } from '../data/images'

const qualities = [
  { title: 'Ambiente', text: 'Uma atmosfera clara e acolhedora, que recebe cada convidado com leveza.' },
  { title: 'Elegância', text: 'Linhas simples e composições delicadas, sem excessos.' },
  { title: 'Conforto', text: 'Um lugar para se sentir à vontade e aproveitar o momento.' },
  { title: 'Personalização', text: 'Cada celebração pode ganhar a sua própria identidade.' },
]

function Figure({ number, label, children, className = '' }) {
  return (
    <figure className={className}>
      {children}
      <figcaption className="mt-3 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.3em] text-muted">
        <span className="font-serif text-sm italic normal-case tracking-normal text-caramel">{number}</span>
        <span className="h-px w-6 bg-line" aria-hidden="true" />
        {label}
      </figcaption>
    </figure>
  )
}

export default function Space() {
  return (
    <section id="espaco" aria-labelledby="espaco-titulo" className="bg-cream py-24 md:py-36">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading index="01" eyebrow="O Espaço" titleId="espaco-titulo" title="Um cenário para celebrar." />
          </div>
          <Reveal delay={0.15} className="text-[0.98rem] leading-[1.85] text-muted lg:col-span-5 lg:pb-2">
            Um ambiente elegante e confortável, pensado para que cada detalhe contribua com a atmosfera do encontro.
            Um cenário que acolhe e se adapta, permitindo que cada celebração tenha a sua própria personalidade.
          </Reveal>
        </div>

        {/* Composição assimétrica */}
        <div className="mt-16 grid grid-cols-12 gap-x-4 gap-y-10 md:mt-24 md:gap-x-6">
          <Reveal y={40} className="col-span-12 md:col-span-6 md:row-span-2">
            <Figure number="01" label="Salão">
              <ParallaxImage
                image={images.salao}
                strength={4}
                position="50% 70%"
                className="aspect-[4/5] bg-sand"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Figure>
          </Reveal>

          <Reveal y={40} delay={0.1} className="col-span-12 md:col-span-5 md:col-start-8">
            <Figure number="02" label="Ambiente">
              <ParallaxImage image={images.ambiente} strength={4} className="aspect-[16/10] bg-sand" />
            </Figure>
          </Reveal>

          <Reveal y={40} delay={0.2} className="col-span-7 md:col-span-3 md:col-start-8">
            <Figure number="03" label="Mesa posta">
              <ParallaxImage image={images.mesaPosta} strength={4} className="aspect-[4/5] bg-sand" />
            </Figure>
          </Reveal>

          <Reveal
            delay={0.3}
            className="col-span-5 flex flex-col justify-end border-l border-line pb-8 pl-4 md:col-span-2 md:pl-5"
          >
            <p className="font-serif text-[1.2rem] italic leading-snug text-coffee md:text-[1.35rem]">
              Leveza, luz e detalhes que acolhem.
            </p>
            <p className="eyebrow mt-4 text-[0.55rem] text-muted">{'Saguaçu · Joinville'}</p>
          </Reveal>
        </div>

        {/* Lista editorial */}
        <ul className="mt-20 grid gap-x-10 border-t border-line sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
          {qualities.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.08} className="border-b border-line py-8 lg:border-b-0">
              <span className="font-serif text-sm italic text-caramel">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-serif text-[1.65rem] leading-tight text-coffee">{item.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-[1.75] text-muted">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
