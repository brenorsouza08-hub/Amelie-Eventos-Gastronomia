/** Pequeno ornamento editorial: linha — losango — linha. */
export default function Ornament({ className = 'text-caramel/60' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-8 bg-current" />
      <svg viewBox="0 0 10 10" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M5 0.8 9.2 5 5 9.2 0.8 5Z" />
      </svg>
      <span className="h-px w-8 bg-current" />
    </span>
  )
}
