'use client'

import { ViewTransition } from 'react'

/** Stable shell boundary. Route changes use the `page-move` view-transition class. */
export default function PageTransition({ children }) {
  return (
    <ViewTransition default="page-move" enter="none" exit="none">
      <div>{children}</div>
    </ViewTransition>
  )
}
