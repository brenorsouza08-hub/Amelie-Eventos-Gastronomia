import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'
import { business, navItems, whatsappUrl } from '../data/site'

/** Seção ativa = última seção do menu cujo topo já passou da metade da tela. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.45
      let current = ids[0]
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      })
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])
  return active
}

const sectionIds = navItems.map((item) => item.id)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava a rolagem e permite fechar com Esc quando o menu mobile está aberto
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled && !open
  const light = !solid

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ease-[var(--ease-soft)] ${
          solid
            ? 'bg-ivory/90 py-3 shadow-[0_1px_0_rgba(58,42,32,0.08)] backdrop-blur-md'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="container-site flex items-center justify-between gap-6">
          <a href="#inicio" aria-label="Amelie Eventos e Gastronomia — voltar ao início" onClick={() => setOpen(false)}>
            <Logo tone={light ? 'light' : 'dark'} compact />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`group relative py-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 ${
                        light ? 'text-ivory/80 hover:text-ivory' : 'text-coffee/70 hover:text-coffee'
                      } ${isActive ? (light ? '!text-ivory' : '!text-coffee') : ''}`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-[var(--ease-soft)] ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden h-11 items-center gap-2.5 rounded-full border px-5 text-[0.66rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500 md:inline-flex ${
                light
                  ? 'border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso'
                  : 'border-coffee/25 text-coffee hover:bg-coffee hover:text-ivory'
              }`}
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden ${
                light ? 'border-ivory/35 text-ivory' : 'border-coffee/20 text-coffee'
              }`}
            >
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ease-[var(--ease-soft)] ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 h-px bg-current transition-all duration-500 ease-[var(--ease-soft)] ${
                    open ? 'top-1.5 w-full -rotate-45' : 'top-3 w-3.5'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col bg-espresso px-6 pb-10 pt-28 lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Navegação mobile" className="flex-1">
              <ul className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.6, delay: 0.25 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-2 text-ivory"
                    >
                      <span className="w-6 font-serif text-sm italic text-caramel-soft">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-serif text-[2.1rem] leading-tight ${
                          active === item.id ? 'italic text-ivory' : 'text-ivory/85'
                        }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-6 border-t border-ivory/10 pt-8"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center gap-3 rounded-full bg-caramel text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar pelo WhatsApp
              </a>
              <p className="flex items-center justify-center gap-2 text-xs tracking-wide text-ivory/50">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                {business.neighborhood}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
