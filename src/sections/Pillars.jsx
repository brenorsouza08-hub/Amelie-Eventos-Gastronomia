import { Flower2, Gem, Sparkles, UtensilsCrossed } from 'lucide-react'
import Reveal from '../components/Reveal'
import Ornament from '../components/Ornament'

const pillars = [
  { icon: Sparkles, title: 'Ambiente', text: 'Um espaço pensado para criar a atmosfera certa.' },
  { icon: UtensilsCrossed, title: 'Gastronomia', text: 'Sabores que fazem parte da experiência.' },
  { icon: Flower2, title: 'Detalhes', text: 'Porque são os pequenos detalhes que tornam um momento especial.' },
  { icon: Gem, title: 'Memórias', text: 'Celebrações que continuam vivas depois que o evento termina.' },
]

export default function Pillars() {
  return (
    <section aria-labelledby="pilares-titulo" className="bg-ivory py-24 md:py-32">
      <div className="container-site">
        <Reveal className="text-center">
          <Ornament />
          <h2 id="pilares-titulo" className="display mt-6 text-[2.2rem] text-coffee md:text-[2.8rem]">
            O que torna a experiência <em className="text-caramel">Amelie</em>
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08} className="group bg-ivory px-8 py-10 text-center md:py-14">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-line text-caramel transition-colors duration-700 group-hover:border-caramel/50">
                <Icon className="h-5 w-5" strokeWidth={1} aria-hidden="true" />
              </span>
              <h3 className="eyebrow mt-7 text-[0.72rem] text-coffee">{title}</h3>
              <p className="mx-auto mt-4 max-w-[15rem] font-serif text-[1.25rem] leading-snug text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
