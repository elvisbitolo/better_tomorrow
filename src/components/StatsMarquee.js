'use client'

import { useEffect, useRef, useState } from 'react'

function AnimatedNumber({ value, start, duration = 1400 }) {
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!start) return undefined

    const match = String(value).match(/^(\d+)(.*)$/)
    if (!match) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const target = Number(match[1])
    const suffix = match[2]
    let frame = 0
    const startedAt = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(`${Math.round(target * eased)}${suffix}`)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [value, start, duration])

  return <>{display}</>
}

export default function StatsMarquee({ stats }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="statsMarquee" aria-label="School highlights" ref={ref}>
      <div className="statsTrack">
        {stats.map((stat) => (
          <div className="statItem" key={stat.label}>
            <b><AnimatedNumber value={stat.value} start={started} /></b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
