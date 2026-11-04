'use client'

import { useLayoutEffect, useRef, useState } from 'react'

import { tagChipClass } from '@/lib/cardStyles'

/**
 * Up to `limit` tags on a single line. Tags that do not fit, and any past the cap,
 * stay hidden so the row cannot wrap. The remainder is a count.
 */
export default function TagRow({ tags = [], limit = 4 }) {
  const rowRef = useRef(null)
  const [fitCount, setFitCount] = useState(limit)
  const capped = tags.slice(0, limit)
  const cappedKey = capped.join('|')

  useLayoutEffect(() => {
    const row = rowRef.current
    if (!row) return

    const measure = () => {
      const chips = [...row.querySelectorAll('[data-tag]')]
      if (!chips.length) {
        setFitCount(0)
        return
      }
      const firstTop = chips[0].offsetTop
      let count = 0
      for (const chip of chips) {
        if (chip.offsetTop > firstTop + 1) break
        count += 1
      }
      setFitCount(Math.max(count, 1))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(row)
    return () => observer.disconnect()
  }, [cappedKey])

  if (!tags.length) return null

  const hidden = tags.length - Math.min(fitCount, capped.length)

  return (
    <div className="flex min-w-0 items-center gap-1.5">
      <div
        ref={rowRef}
        className="flex max-h-6 min-w-0 flex-1 flex-wrap items-center gap-1.5 overflow-hidden"
      >
        {capped.map((tag) => (
          <span key={tag} data-tag="" className={`${tagChipClass} max-w-full shrink-0`}>
            {tag}
          </span>
        ))}
      </div>
      {hidden > 0 && (
        <span className="shrink-0 text-[11px] tabular-nums text-[#FAFDF6]/45">
          +{hidden}
        </span>
      )}
    </div>
  )
}
