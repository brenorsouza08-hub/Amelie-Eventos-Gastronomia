import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Imagem com parallax leve dentro de um contêiner com overflow oculto.
 * `strength` controla o deslocamento vertical em porcentagem.
 */
export default function ParallaxImage({
  image,
  strength = 8,
  className = '',
  imgClassName = '',
  position = 'center',
  loading = 'lazy',
  sizes,
  ...rest
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} {...rest}>
      <motion.img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={loading}
        decoding="async"
        sizes={sizes}
        style={{
          y: reduce ? 0 : y,
          objectPosition: position,
          top: `-${strength}%`,
          height: `${100 + strength * 2}%`,
        }}
        className={`absolute inset-x-0 w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
