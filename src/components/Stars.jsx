import { Star } from 'lucide-react'

export default function Stars({ count = 5, className = 'h-3.5 w-3.5', label }) {
  return (
    <span className="inline-flex items-center gap-1" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} strokeWidth={0} aria-hidden="true" />
      ))}
    </span>
  )
}
