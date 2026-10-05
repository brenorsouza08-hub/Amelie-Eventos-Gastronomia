import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Space from './sections/Space'
import Gastronomy from './sections/Gastronomy'
import Experiences from './sections/Experiences'
import Gallery from './sections/Gallery'
import Pillars from './sections/Pillars'
import Reviews from './sections/Reviews'
import CallToAction from './sections/CallToAction'
import Contact from './sections/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ivory focus:px-4 focus:py-2 focus:text-coffee"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Intro />
        <Space />
        <Gastronomy />
        <Experiences />
        <Gallery />
        <Pillars />
        <Reviews />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionConfig>
  )
}
