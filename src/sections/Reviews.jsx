import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import Stars from '../components/Stars'
import { business, mapsUrl, reviews } from '../data/site'

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const total = reviews.length
  const review = reviews[current]
  const go = (step) => setCurrent((c) => (c + step + total) % total)

  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-titulo" className="relative overflow-hidden bg-sand/60 py-24 md:py-36">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Nota */}
        <div className="lg:col-span-4">
          <Reveal className="eyebrow flex items-center gap-4 text-caramel">
            <span className="font-serif text-sm italic normal-case tracking-normal">05</span>
            <span className="h-px w-10 bg-caramel/40" aria-hidden="true" />
            Avaliações
          </Reveal>
          <Reveal as="h2" id="avaliacoes-titulo" delay={0.08} className="display mt-6 text-[2.4rem] text-coffee md:text-5xl">
            A experiência de quem <em className="text-caramel">já celebrou.</em>
          </Reveal>

          <Reveal delay={0.16} className="mt-12 flex items-end gap-6">
            <Counter value={business.rating.value} decimals={1} className="display text-[6.5rem] leading-[0.8] text-coffee md:text-[8rem]" />
            <div className="pb-1">
              <span className="text-caramel">
                <Stars className="h-4 w-4" label={`Nota ${business.rating.value.toLocaleString('pt-BR')} de 5`} />
              </span>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-muted">
                no {business.rating.source}
                <br />
                <Counter value={business.rating.count} className="font-medium text-coffee" /> avaliações
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="mt-10">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-coffee/25 pb-1 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-coffee transition-colors duration-500 hover:border-caramel hover:text-caramel"
            >
              Ver avaliações no Google
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        {/* Carrossel — exibe controles automaticamente quando houver mais de uma avaliação */}
        <Reveal delay={0.1} y={40} className="lg:col-span-7 lg:col-start-6">
          <div
            className="relative bg-ivory px-7 py-12 sm:px-12 md:px-16 md:py-16"
            role="region"
            aria-roledescription="carrossel"
            aria-label="Avaliações de clientes"
          >
            <Quote className="h-10 w-10 text-caramel/40" strokeWidth={0.75} aria-hidden="true" />
            <div className="relative mt-6 min-h-[11rem]" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={current}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-serif text-[1.85rem] leading-[1.3] text-coffee sm:text-[2.2rem] md:text-[2.5rem]">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream font-serif text-lg text-caramel" aria-hidden="true">
                      {review.author.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-[0.9rem] font-medium text-coffee">{review.author}</span>
                      <span className="block text-[0.72rem] tracking-wide text-muted">Avaliação no {review.source}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {total > 1 && (
              <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                <div className="flex gap-2">
                  {reviews.map((r, i) => (
                    <button
                      key={r.author + i}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Ver avaliação ${i + 1}`}
                      aria-current={i === current}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-caramel' : 'w-1.5 bg-line'}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => go(-1)} aria-label="Avaliação anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-coffee transition-colors hover:bg-coffee hover:text-ivory">
                    <ChevronLeft className="h-4 w-4" strokeWidth={1.25} />
                  </button>
                  <button type="button" onClick={() => go(1)} aria-label="Próxima avaliação" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-coffee transition-colors hover:bg-coffee hover:text-ivory">
                    <ChevronRight className="h-4 w-4" strokeWidth={1.25} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
