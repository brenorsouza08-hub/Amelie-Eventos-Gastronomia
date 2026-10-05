import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'
import { business, footerLinks, whatsappUrl } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-espresso pb-28 pt-20 text-ivory md:pb-12 md:pt-24">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <a href="#inicio" aria-label="Voltar ao início">
              <Logo tone="light" />
            </a>
            <p className="mt-6 max-w-xs text-[0.85rem] leading-[1.8] text-ivory/50">
              {business.address.full}
            </p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-ivory/60 transition-colors duration-300 hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-ivory/60 transition-colors duration-300 hover:text-ivory"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-3 md:col-span-3 md:justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory/80 transition-colors duration-500 hover:bg-ivory hover:text-espresso"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            {business.instagram && (
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory/80 transition-colors duration-500 hover:bg-ivory hover:text-espresso"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-[0.72rem] text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Amelie Eventos e Gastronomia. Todos os direitos reservados.</p>
          <p className="tracking-wide">{business.neighborhood}</p>
        </div>
      </div>
    </footer>
  )
}
