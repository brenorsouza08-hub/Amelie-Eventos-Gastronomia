import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Button from '../components/Button'
import Stars from '../components/Stars'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { images } from '../data/images'
import { business, whatsappUrl } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease },
})

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      aria-label="Apresentação"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-espresso text-ivory"
    >
      {/* Fotografia: tela cheia no mobile, painel à direita no desktop */}
      <motion.div
        className="absolute inset-0 -z-10 lg:left-auto lg:w-[58%]"
        style={{ y: reduce ? 0 : imageY }}
      >
        <motion.img
          src={images.mesa.src}
          alt={images.mesa.alt}
          width={images.mesa.width}
          height={images.mesa.height}
          fetchPriority="high"
          decoding="async"
          initial={{ scale: reduce ? 1 : 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
          className="h-full w-full object-cover object-[50%_60%]"
        />
        {/* Overlays para legibilidade e transição suave com o fundo */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/55 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-espresso via-espresso/35 to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-espresso/80 to-transparent lg:block" />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="container-site relative flex flex-1 flex-col justify-end pb-28 pt-36 md:pb-32 lg:justify-center lg:pb-24"
      >
        <div className="max-w-[40rem]">
          <motion.p {...fadeUp(0.3)} className="eyebrow flex items-center gap-4 text-caramel-soft">
            <span>Amelie</span>
            <span className="h-px w-8 bg-caramel-soft/60" aria-hidden="true" />
            <span className="text-ivory/75">Eventos &amp; Gastronomia</span>
          </motion.p>

          <motion.h1
            {...fadeUp(0.45)}
            className="display mt-7 text-[2.95rem] sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]"
          >
            Momentos especiais merecem um lugar <em className="text-caramel-soft">à altura.</em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.6)}
            className="mt-7 max-w-md text-[1rem] leading-[1.8] text-ivory/75 md:text-[1.05rem]"
          >
            Um espaço pensado para transformar celebrações em experiências inesquecíveis.
          </motion.p>

          <motion.div {...fadeUp(0.75)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#espaco" variant="primary" size="lg">
              Quero conhecer o espaço
            </Button>
            <Button href={whatsappUrl} external variant="light" size="lg" icon={WhatsAppIcon}>
              Falar pelo WhatsApp
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp(0.9)}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.72rem] tracking-[0.12em] text-ivory/60"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-caramel-soft" strokeWidth={1.5} aria-hidden="true" />
              {business.neighborhood}
            </span>
            <span className="hidden h-3 w-px bg-ivory/20 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2">
              <span className="text-caramel-soft">
                <Stars />
              </span>
              {business.rating.value.toLocaleString('pt-BR')} no Google · {business.rating.count} avaliações
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre"
        aria-label="Rolar para conhecer mais"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory/55 sm:flex"
      >
        <span className="eyebrow text-[0.6rem]">Role</span>
        <span className="relative h-12 w-px overflow-hidden bg-ivory/15">
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-ivory/80" />
        </span>
      </motion.a>
    </section>
  )
}
