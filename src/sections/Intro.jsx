import ParallaxImage from '../components/ParallaxImage'
import Reveal from '../components/Reveal'
import { images } from '../data/images'

export default function Intro() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="relative overflow-hidden bg-ivory py-24 md:py-36">
      {/* Elemento tipográfico decorativo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 select-none font-serif text-[22rem] italic leading-none text-sand/50 md:-right-6 md:top-0 md:text-[34rem]"
      >
        &amp;
      </span>

      <div className="container-site relative grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Imagens */}
        <div className="relative lg:col-span-6">
          <Reveal y={40}>
            <ParallaxImage
              image={images.fachada}
              strength={6}
              position="50% 40%"
              className="aspect-[4/5] w-[86%] bg-sand sm:w-[78%]"
            />
          </Reveal>
          <Reveal
            delay={0.2}
            y={40}
            className="absolute -bottom-10 right-0 w-[46%] border-[6px] border-ivory bg-ivory sm:w-[42%] md:border-8"
          >
            <ParallaxImage image={images.tortinhas} strength={5} className="aspect-square bg-sand" />
          </Reveal>
        </div>

        {/* Texto */}
        <div className="pt-6 lg:col-span-5 lg:col-start-8 lg:pt-0">
          <Reveal className="eyebrow flex items-center gap-4 text-caramel">
            <span className="h-px w-10 bg-caramel/40" aria-hidden="true" />
            Bem-vindos
          </Reveal>
          <Reveal as="h2" id="sobre-titulo" delay={0.08} className="display mt-6 text-[2.6rem] text-coffee sm:text-5xl lg:text-[3.6rem]">
            Mais do que um espaço. <em className="text-caramel">Uma experiência.</em>
          </Reveal>
          <Reveal delay={0.16} className="mt-8 space-y-5 text-[0.98rem] leading-[1.9] text-muted">
            <p>
              A Amelie Eventos e Gastronomia é um lugar onde ambiente, gastronomia e celebração se encontram — com
              acolhimento, cuidado e atenção a cada detalhe.
            </p>
            <p>
              Acreditamos que um momento especial se constrói aos poucos: na mesa preparada com carinho, nos sabores
              que despertam lembranças e na atmosfera que convida os convidados a ficar um pouco mais.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex items-center gap-5">
            <span className="font-script text-5xl leading-none text-coffee">Amelie</span>
            <span className="h-px flex-1 max-w-24 bg-line" aria-hidden="true" />
            <span className="eyebrow text-[0.6rem] text-muted">Eventos &amp; Gastronomia</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
