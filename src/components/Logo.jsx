/** Assinatura tipográfica inspirada no letreiro manuscrito da fachada. */
export default function Logo({ tone = 'dark', className = '', compact = false }) {
  const color = tone === 'light' ? 'text-ivory' : 'text-coffee'
  const sub = tone === 'light' ? 'text-ivory/65' : 'text-muted'
  return (
    <span className={`inline-flex flex-col items-start leading-none ${className}`}>
      <span className={`font-script ${compact ? 'text-[2rem]' : 'text-[2.6rem]'} leading-[0.9] ${color}`}>Amelie</span>
      <span className={`mt-1 pl-1 text-[0.52rem] font-medium uppercase tracking-[0.42em] ${sub}`}>
        Eventos &amp; Gastronomia
      </span>
    </span>
  )
}
