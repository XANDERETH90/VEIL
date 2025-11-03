'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export function AnimatedButton({ href, children, variant = 'solid', glow = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={clsx('group relative')}
    >
      <Link
        href={href}
        className={clsx(
          'rounded-xl px-5 py-3 text-sm font-medium inline-flex items-center gap-2',
          'transition-all duration-300',
          variant === 'solid' && 'bg-white/10 border border-white/10 hover:bg-white/15',
          variant === 'ghost' && 'bg-transparent border border-white/10 hover:bg-white/10',
          glow && 'shadow-glow hover:shadow-glowAccent'
        )}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(20,241,149,0.35), transparent)' }} />
        <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10"></span>
      </Link>
    </motion.div>
  )
}