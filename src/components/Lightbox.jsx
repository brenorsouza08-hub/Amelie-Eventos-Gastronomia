import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Lightbox em tela cheia com navegação por teclado, setas e gesto de arrastar.
 */
export default function Lightbox({ images, index, onClose, onChange }) {
  const open = index !== null
  const closeRef = useRef(null)
  const lastFocus = useRef(null)
  const directionRef = useRef(0)

  const go = useCallback(
    (step) => {
      if (index === null) return
      directionRef.current = step
      onChange((index + step + images.length) % images.length)
    },
    [index, images.length, onChange],
  )

  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
      lastFocus.current?.focus?.()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, go, onClose])

  const image = open ? images[index] : null
  const dir = directionRef.current

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos"
          className="fixed inset-0 z-[60] flex flex-col bg-espresso"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-5 text-ivory/70 md:px-10" onClick={(e) => e.stopPropagation()}>
            <p className="font-serif text-lg italic">
              <span className="text-ivory">{String(index + 1).padStart(2, '0')}</span>
              <span className="mx-2 text-ivory/40">/</span>
              {String(images.length).padStart(2, '0')}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar galeria"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-espresso"
            >
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 md:px-24">
            <AnimatePresence initial={false} mode="popLayout" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                className="flex max-h-full flex-col items-center"
                initial={{ opacity: 0, x: dir * 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: dir * -40, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1)
                  else if (info.offset.x > 60) go(-1)
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  draggable={false}
                  className="max-h-[calc(100svh-11rem)] w-auto max-w-full object-contain"
                />
                <figcaption className="mt-5 max-w-lg text-center text-[0.78rem] leading-relaxed text-ivory/55">
                  <span className="eyebrow mr-3 text-caramel-soft">{image.caption}</span>
                  {image.alt}
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Foto anterior"
                  onClick={(e) => {
                    e.stopPropagation()
                    go(-1)
                  }}
                  className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-espresso md:left-8 md:flex"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
                </button>
                <button
                  type="button"
                  aria-label="Próxima foto"
                  onClick={(e) => {
                    e.stopPropagation()
                    go(1)
                  }}
                  className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-espresso md:right-8 md:flex"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
                </button>
              </>
            )}
          </div>

          <p className="pb-6 pt-3 text-center text-[0.65rem] uppercase tracking-[0.28em] text-ivory/35 md:hidden">
            Deslize para navegar
          </p>
          <div className="hidden h-6 md:block" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
