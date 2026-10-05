import Reveal from './Reveal'

/**
 * Cabeçalho editorial de seção: índice + rótulo, título serif e texto opcional.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  titleId,
  children,
  align = 'left',
  tone = 'light',
  className = '',
}) {
  const dark = tone === 'dark'
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      <Reveal
        className={`eyebrow flex items-center gap-4 ${centered ? 'justify-center' : ''} ${
          dark ? 'text-caramel-soft' : 'text-caramel'
        }`}
      >
        {index && <span className="font-serif text-sm italic tracking-normal normal-case">{index}</span>}
        <span className={`h-px w-10 ${dark ? 'bg-caramel-soft/50' : 'bg-caramel/40'}`} aria-hidden="true" />
        <span>{eyebrow}</span>
      </Reveal>
      <Reveal
        as="h2"
        id={titleId}
        delay={0.08}
        className={`display mt-6 text-[2.6rem] sm:text-5xl lg:text-[3.6rem] ${dark ? 'text-ivory' : 'text-coffee'}`}
      >
        {title}
      </Reveal>
      {children && (
        <Reveal
          delay={0.16}
          className={`mt-6 text-[0.98rem] leading-[1.85] ${centered ? 'mx-auto' : ''} max-w-xl ${
            dark ? 'text-ivory/70' : 'text-muted'
          }`}
        >
          {children}
        </Reveal>
      )}
    </div>
  )
}
