import { useEffect, useState } from 'react'
import Cover from './Cover'
import Details from './Details'
import Farewell from './Farewell'
import Gifts from './Gifts'
import Story from './Story'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function App() {
  const [phase, setPhase] = useState('sealed')

  useEffect(() => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    const sealed = phase !== 'open'
    document.documentElement.classList.toggle('is-sealed', sealed)
    if (!sealed) {
      document.getElementById('countdown')?.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'center',
      })
    }
    return () => {
      document.documentElement.classList.remove('is-sealed')
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [phase])

  useEffect(() => {
    const nodes = document.querySelectorAll('.rise')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -32px 0px' },
    )
    nodes.forEach((node) => io.observe(node))
    return () => io.disconnect()
  }, [])

  function openLetter() {
    if (phase !== 'sealed') return
    setPhase('open')
  }

  return (
    <div className={phase === 'open' ? 'site is-open' : 'site'}>
      <Cover phase={phase} onOpen={openLetter} />
      <main aria-hidden={phase !== 'open'}>
        <Story />
        <Details />
        <Gifts />
        <Farewell />
      </main>
    </div>
  )
}
