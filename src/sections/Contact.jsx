import { useEffect, useRef, useState } from 'react'
import { MapPin, Navigation, Phone } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { business, mapsEmbedUrl, mapsUrl, whatsappUrl } from '../data/site'

/** Carrega o mapa somente quando a seção se aproxima da viewport (performance). */
function LazyMap() {
  const ref = useRef(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative h-full min-h-[22rem] overflow-hidden bg-sand">
      {load ? (
        <iframe
          title={`Mapa — ${business.name}`}
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 [filter:grayscale(0.55)_sepia(0.18)_contrast(0.95)]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-muted">
          <MapPin className="h-6 w-6" strokeWidth={1} aria-hidden="true" />
        </div>
      )}
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="bg-ivory py-24 md:py-36">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal className="eyebrow flex items-center gap-4 text-caramel">
            <span className="font-serif text-sm italic normal-case tracking-normal">06</span>
            <span className="h-px w-10 bg-caramel/40" aria-hidden="true" />
            Contato
          </Reveal>
          <Reveal as="h2" id="contato-titulo" delay={0.08} className="display mt-6 text-[2.4rem] text-coffee md:text-5xl">
            Amelie Eventos e Gastronomia
          </Reveal>
          <Reveal delay={0.12} className="eyebrow mt-5 text-[0.65rem] text-muted">
            {business.neighborhood}
          </Reveal>

          <Reveal as="dl" delay={0.18} className="mt-12 divide-y divide-line border-y border-line">
            <div className="flex gap-5 py-6">
              <dt className="pt-0.5 text-caramel">
                <MapPin className="h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
                <span className="sr-only">Endereço</span>
              </dt>
              <dd>
                <span className="eyebrow block text-[0.6rem] text-muted">Endereço</span>
                <address className="mt-2 text-[0.98rem] not-italic leading-relaxed text-coffee">
                  {business.address.street}
                  <br />
                  {business.address.district}, {business.address.city}
                </address>
              </dd>
            </div>
            <div className="flex gap-5 py-6">
              <dt className="pt-0.5 text-caramel">
                <Phone className="h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
                <span className="sr-only">Telefone e WhatsApp</span>
              </dt>
              <dd>
                <span className="eyebrow block text-[0.6rem] text-muted">Telefone / WhatsApp</span>
                <a
                  href={`tel:${business.phoneE164}`}
                  className="mt-2 inline-block font-serif text-[1.7rem] leading-none text-coffee transition-colors hover:text-caramel"
                >
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={whatsappUrl} external variant="primary" icon={WhatsAppIcon}>
              Falar pelo WhatsApp
            </Button>
            <Button href={mapsUrl} external variant="outline" icon={Navigation}>
              Abrir no Google Maps
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={40} className="lg:col-span-6 lg:col-start-7">
          <div className="h-[24rem] md:h-[32rem] lg:h-full">
            <LazyMap />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
