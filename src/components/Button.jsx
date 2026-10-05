import { ArrowUpRight } from 'lucide-react'

const variants = {
  // Caramelo sólido — ação principal
  primary:
    'bg-caramel text-ivory hover:bg-[#93602f] border border-caramel hover:border-[#93602f]',
  // Contorno claro — sobre fundos escuros
  light: 'border border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso hover:border-ivory',
  // Contorno escuro — sobre fundos claros
  outline: 'border border-coffee/30 text-coffee hover:bg-coffee hover:text-ivory hover:border-coffee',
  // Sólido claro — sobre fotografia
  ivory: 'bg-ivory text-espresso border border-ivory hover:bg-cream',
}

const sizes = {
  md: 'h-12 px-6 text-[0.7rem]',
  lg: 'h-14 px-8 text-[0.72rem]',
  xl: 'h-16 px-10 text-xs md:h-[4.5rem] md:px-12',
}

/**
 * Botão/link com microinteração: o ícone desliza levemente no hover.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon = ArrowUpRight,
  external = false,
  className = '',
  children,
  ...rest
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      href={href}
      {...externalProps}
      {...rest}
      className={`group inline-flex select-none whitespace-nowrap items-center justify-center gap-3 rounded-full font-medium uppercase tracking-[0.22em] transition-[background-color,color,border-color,transform] duration-500 ease-[var(--ease-soft)] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      {Icon && (
        <Icon
          className="h-4 w-4 shrink-0 transition-transform duration-500 ease-[var(--ease-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      )}
    </a>
  )
}
