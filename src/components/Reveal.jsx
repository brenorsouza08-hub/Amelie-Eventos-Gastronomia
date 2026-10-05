import { motion } from 'framer-motion'

/** Fade-in discreto ao entrar na viewport. */
export default function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...rest }) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
