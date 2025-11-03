'use client'

import clsx from 'clsx'

export function Section({ children, className, ...props }) {
  return (
    <section {...props} className={clsx('section', className)}>
      {children}
    </section>
  )
}