import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { images } from '../data/images'
import { whatsappUrl } from '../data/site'

const experiences = [
  {
    title: 'Celebrações',
    text: 'Momentos especiais planejados para serem vividos e lembrados.',
    image: images.orquidea,
    position: '50% 30%',
  },
  {
    title: 'Eventos',
    text: 'Um ambiente preparado para receber momentos importantes.',
    image: images.fachada,
    position: '50% 45%',
  },
  {
    title: 'Gastronomia',
    text: 'Sabores que complementam a experiência.',
    image: images.tortinhas,
    position: '50% 50%',
  },
]

export default function Experiences() {
  return (
    <section id="experiencias" aria-labelledby="experiencias-titulo" className="bg-ivory py-24 md:py-36">
      <div className="container-site">
        <SectionHeading
          index="03"
          eyebrow="Experiências"
          align="center"
          titleId="experiencias-titulo"
          title={
            <>
              Para celebrar o que <em className="text-caramel">realmente importa.</em>
            </>
          }
        >
          Um espaço que pode fazer parte de diferentes momentos — cada um com a sua história, o seu ritmo e os seus
          detalhes.
        </SectionHeading>

        <ul className="mt-16 grid gap-5 md:mt-24 md:grid-cols-3 md:gap-6">
          {experiences.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.1} y={40} className={i === 1 ? 'md:mt-16' : ''}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4.4]"
                aria-label={`${item.title} — conversar com a Amelie pelo WhatsApp`}
              >
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: item.position }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-soft)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent transition-opacity duration-700 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-ivory md:p-8">
                  <span className="font-serif text-sm italic text-caramel-soft">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-serif text-[2.1rem] leading-none">{item.title}</h3>
                  <p className="mt-4 max-w-[17rem] text-[0.9rem] leading-[1.7] text-ivory/75">{item.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.26em] text-ivory/80 transition-colors duration-500 group-hover:text-ivory">
                    Conversar
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
