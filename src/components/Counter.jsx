import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Número que aparece suavemente ao entrar na viewport.
 * Renderiza o valor final no HTML estático (SEO / sem JavaScript).
 */
export default function Counter({ value, decimals = 0, duration = 1.8, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(value)
  const [armed, setArmed] = useState(false)

  const format = (n) =>
    n.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

  // Ao montar fora da viewport, zera para animar quando o visitante chegar
  useEffect(() => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    if (rect.top > window.innerHeight) {
      setDisplay(0)
      setArmed(true)
    }
  }, [reduce])

  useEffect(() => {
    if (!armed || !inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [armed, inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {format(display)}
    </span>
  )
}
