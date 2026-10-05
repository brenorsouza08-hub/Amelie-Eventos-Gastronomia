import ParallaxImage from '../components/ParallaxImage'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import Ornament from '../components/Ornament'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { images } from '../data/images'
import { whatsappUrl } from '../data/site'

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-titulo" className="relative isolate overflow-hidden bg-espresso">
      <ParallaxImage
        image={{ ...images.buffet, alt: '' }}
        strength={10}
        position="50% 70%"
        className="!absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-espresso/80" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/60" aria-hidden="true" />

      <div className="container-site flex min-h-[80svh] flex-col items-center justify-center py-28 text-center text-ivory md:py-40">
        <Reveal>
          <Ornament className="text-caramel-soft/70" />
        </Reveal>
        <Reveal as="h2" id="cta-titulo" delay={0.08} className="display mt-8 max-w-4xl text-[2.7rem] sm:text-6xl lg:text-[4.6rem]">
          Seu próximo momento especial pode <em className="text-caramel-soft">começar aqui.</em>
        </Reveal>
        <Reveal delay={0.16} className="mt-8 max-w-lg text-[1rem] leading-[1.85] text-ivory/70 md:text-[1.05rem]">
          Conheça a Amelie Eventos e Gastronomia e converse com nossa equipe.
        </Reveal>
        <Reveal delay={0.24} className="mt-12 w-full sm:w-auto">
          <Button href={whatsappUrl} external variant="primary" size="xl" icon={WhatsAppIcon} className="w-full sm:w-auto">
            Falar com a Amelie
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
