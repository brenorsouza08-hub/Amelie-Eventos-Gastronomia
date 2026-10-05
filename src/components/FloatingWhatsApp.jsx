import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'
import { whatsappUrl } from '../data/site'

/** Botão flutuante de WhatsApp, exibido após o visitante deixar o hero. */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com a Amelie pelo WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex h-14 items-center gap-3 rounded-full bg-espresso pl-4 pr-4 text-ivory shadow-[0_10px_30px_-12px_rgba(31,23,18,0.55)] ring-1 ring-ivory/10 transition-colors duration-500 hover:bg-caramel md:right-8 md:bottom-8 md:pr-6"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-caramel-soft/30 [animation-duration:2.8s] motion-reduce:hidden" aria-hidden="true" />
            <WhatsAppIcon className="relative h-6 w-6" />
          </span>
          <span className="hidden text-[0.66rem] font-medium uppercase tracking-[0.22em] md:inline">
            Fale conosco
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
